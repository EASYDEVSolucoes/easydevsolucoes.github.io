#!/usr/bin/env node
/**
 * Avisa o Bing (e os outros buscadores que usam o IndexNow) de que as páginas
 * do site mudaram. Rode DEPOIS que o deploy terminar:
 *
 *   yarn indexnow
 *
 * O script lê o sitemap que está no ar e envia todos os endereços. A chave
 * abaixo não é segredo: ela só prova que quem avisa é o dono do site, porque
 * o mesmo valor está publicado em https://easydevsolucoes.com.br/<chave>.txt.
 */

const HOST = "easydevsolucoes.com.br";
const KEY = "a03c75db28cfd46d02df3cc46e027d09";

const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((response) => {
  if (!response.ok) throw new Error(`Sitemap respondeu ${response.status}`);
  return response.text();
});

const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (urlList.length === 0) throw new Error("Nenhum endereço encontrado no sitemap.");

const keyCheck = await fetch(`https://${HOST}/${KEY}.txt`);
if (!keyCheck.ok) {
  throw new Error(`A chave ainda não está no ar (${keyCheck.status}). Publique o site antes de rodar.`);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});

console.log(`IndexNow: ${urlList.length} endereços enviados, resposta ${response.status}.`);
if (!response.ok && response.status !== 202) process.exit(1);
