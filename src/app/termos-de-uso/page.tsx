import Header from "@/components/Header";

export default function TermsOfUse() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Termos de Uso
          </h1>

          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e utilizar o site da EasyDev Soluções, você concorda
                em cumprir e estar vinculado a estes Termos de Uso. Se você não
                concordar com qualquer parte destes termos, não deverá utilizar
                nosso site ou serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Descrição dos Serviços
              </h2>
              <p className="mb-4">A EasyDev Soluções oferece:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Desenvolvimento de software personalizado, incluindo
                  aplicações web e sistemas complexos
                </li>
                <li>
                  Consultoria em TI para otimização de processos e
                  infraestrutura tecnológica
                </li>
                <li>
                  Desenvolvimento ágil com metodologias modernas para entregas
                  rápidas e de alta qualidade
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Uso do Site
              </h2>
              <p className="mb-4">Ao utilizar nosso site, você concorda em:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Fornecer informações verdadeiras e precisas ao preencher
                  formulários
                </li>
                <li>Não utilizar o site para fins ilegais ou não autorizados</li>
                <li>
                  Não tentar acessar áreas restritas do site ou sistemas
                  relacionados
                </li>
                <li>
                  Não transmitir vírus ou qualquer código de natureza destrutiva
                </li>
                <li>
                  Não reproduzir, duplicar ou explorar comercialmente qualquer
                  parte do site sem autorização
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo presente neste site, incluindo textos, gráficos,
                logotipos, ícones, imagens, clipes de áudio e software, é
                propriedade da EasyDev Soluções ou de seus fornecedores de
                conteúdo e está protegido pelas leis brasileiras e
                internacionais de direitos autorais.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Limitação de Responsabilidade
              </h2>
              <p className="mb-4">A EasyDev Soluções não se responsabiliza por:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Danos diretos, indiretos, incidentais ou consequenciais
                  resultantes do uso ou incapacidade de uso do site
                </li>
                <li>
                  Interrupções, erros ou omissões no funcionamento do site
                </li>
                <li>
                  Conteúdo de sites de terceiros acessíveis através de links em
                  nosso site
                </li>
                <li>
                  Ações de terceiros que possam afetar a segurança ou
                  funcionamento do site
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Contratação de Serviços
              </h2>
              <p>
                A contratação de serviços da EasyDev Soluções será formalizada
                através de contrato específico, que estabelecerá os termos,
                condições, prazos e valores aplicáveis a cada projeto. Os termos
                do contrato específico prevalecerão sobre estes Termos de Uso em
                caso de conflito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Privacidade
              </h2>
              <p>
                O uso de informações pessoais coletadas através deste site está
                sujeito à nossa Política de Privacidade. Ao utilizar nosso site,
                você também concorda com os termos da nossa Política de
                Privacidade.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Modificações dos Termos
              </h2>
              <p>
                A EasyDev Soluções reserva-se o direito de modificar estes
                Termos de Uso a qualquer momento. As alterações entrarão em
                vigor imediatamente após sua publicação no site. O uso
                continuado do site após tais modificações constitui sua
                aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                9. Lei Aplicável
              </h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República
                Federativa do Brasil. Qualquer disputa relacionada a estes
                termos será submetida ao foro da comarca de Ibirité, Estado de
                Minas Gerais.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                10. Contato
              </h2>
              <p>
                Para questões relacionadas a estes Termos de Uso, entre em
                contato conosco através do email: contato@easydevsolucoes.com.br
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Última atualização: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
