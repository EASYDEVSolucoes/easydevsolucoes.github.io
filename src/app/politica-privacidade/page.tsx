import Header from "@/components/Header";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Política de Privacidade
          </h1>

          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Informações que coletamos
              </h2>
              <p className="mb-4">Coletamos informações quando você:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Preenche nosso formulário de contato</li>
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
                4. Cookies
              </h2>
              <p>
                Utilizamos cookies para melhorar sua experiência em nosso site.
                Você pode desativar os cookies em seu navegador, mas isso pode
                afetar a funcionalidade de alguns recursos.
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
                contato conosco através do email: contato@easydevsolucoes.com.br
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

            <p className="text-sm text-gray-500 mt-8">
              Última atualização: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
