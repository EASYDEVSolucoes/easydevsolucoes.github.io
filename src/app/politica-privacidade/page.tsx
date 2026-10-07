import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Política de privacidade",
  description:
    "Política de privacidade da EasyDev Soluções Digitais. Saiba como coletamos, usamos e protegemos as suas informações pessoais.",
  path: "/politica-privacidade/",
});

export default function PrivacyPolicy() {
  return (
    <div className="px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-4xl font-extrabold text-gray-900">
            Política de Privacidade
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Informações que coletamos
              </h2>
              <p className="mb-4">Coletamos informações quando você:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Preenche o formulário de diagnóstico ou de contato</li>
                <li>Se inscreve em nossa newsletter</li>
                <li>Navega em nosso site</li>
                <li>Interage com nossos serviços</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Como usamos suas informações
              </h2>
              <p className="mb-4">
                As informações que coletamos são utilizadas para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder suas solicitações e dúvidas</li>
                <li>Melhorar nossos serviços</li>
                <li>Enviar informações sobre nossos serviços</li>
                <li>Personalizar sua experiência</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Proteção de dados
              </h2>
              <p>
                Implementamos medidas de segurança para proteger suas
                informações pessoais. Utilizamos criptografia de dados,
                firewalls e outros mecanismos de segurança para manter suas
                informações seguras.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Cookies e medição
              </h2>
              <p className="mb-4">
                Usamos o Google Analytics, o Google Tag Manager e o Pixel da
                Meta para medir visitas ao site e contatos gerados por ele.
                Essas ferramentas só são ativadas depois que você aceita no
                aviso de cookies. Se você recusar, elas não são carregadas.
              </p>
              <p>
                Você pode mudar a sua escolha a qualquer momento em
                &quot;Preferências de cookies&quot;, no rodapé do site. O
                formulário de diagnóstico é enviado por meio do serviço EmailJS.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Compartilhamento de informações
              </h2>
              <p>
                Não vendemos, trocamos ou transferimos suas informações pessoais
                para terceiros. Isso não inclui parceiros de confiança que nos
                ajudam a operar nosso site ou prestar serviços, desde que
                concordem em manter essas informações confidenciais.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Seus direitos
              </h2>
              <p className="mb-4">Você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incorretos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Retirar seu consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Contato
              </h2>
              <p>
                Para questões relacionadas à privacidade de seus dados, entre em
                contato pelo e-mail{" "}
                <a href="mailto:contato@easydevsolucoes.com.br" className="underline underline-offset-2">
                  contato@easydevsolucoes.com.br
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Atualizações
              </h2>
              <p>
                Nossa Política de Privacidade pode ser atualizada
                ocasionalmente. Recomendamos que você revise esta página
                periodicamente para se manter informado sobre quaisquer
                mudanças.
              </p>
            </section>

            <p className="mt-8 text-sm text-gray-700">
              Última atualização: 07/10/2026
            </p>
          </div>
        </div>
    </div>
  );
}
