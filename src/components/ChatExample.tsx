/**
 * Conversa de exemplo do Atendente IA. É ilustrativa: mostra o atendente
 * respondendo o que sabe, agendando e passando para uma pessoa o que não sabe.
 */
const messages = [
  { from: "cliente", time: "21:47", text: "Boa noite, vocês atendem sábado?" },
  {
    from: "atendente",
    time: "21:47",
    text: "Boa noite! Atendemos sábado, das 8h às 12h. Quer que eu veja um horário para você?",
  },
  { from: "cliente", time: "21:48", text: "Quero, de manhã cedo" },
  { from: "atendente", time: "21:48", text: "Tenho 8h30 ou 10h neste sábado. Qual você prefere?" },
  { from: "cliente", time: "21:49", text: "8h30. Vocês aceitam meu convênio?" },
  {
    from: "atendente",
    time: "21:49",
    text: "Seu horário das 8h30 está reservado. Sobre o convênio, prefiro confirmar com a equipe: a recepção responde amanhã cedo, por aqui mesmo.",
  },
] as const;

export default function ChatExample() {
  return (
    <section className="section-padding" aria-labelledby="exemplo-conversa">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="chip mb-5">Exemplo</p>
          <h2 id="exemplo-conversa" className="text-balance text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            Uma conversa às 21h47, com a empresa fechada
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-gray-700">
            O atendente responde o que está na base de respostas, agenda e avisa quando a pergunta precisa de
            uma pessoa. Ele não inventa preço, prazo nem orientação técnica.
          </p>
          <p className="mt-4 text-sm text-gray-700">
            Conversa ilustrativa, de uma clínica fictícia. As respostas do seu atendente saem das informações da
            sua empresa.
          </p>
        </div>

        <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-100 bg-white p-4 shadow-xl sm:p-6">
          <ol className="space-y-3" aria-label="Conversa de exemplo no WhatsApp">
            {messages.map((message, index) => {
              const isClient = message.from === "cliente";
              return (
                <li key={index} className={`flex ${isClient ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      isClient ? "rounded-bl-sm bg-gray-100 text-gray-900" : "rounded-br-sm bg-primary-tint text-gray-900"
                    }`}
                  >
                    <span className="mb-1 block text-xs font-bold text-gray-700">
                      {isClient ? "Cliente" : "Atendente IA"} · {message.time}
                    </span>
                    {message.text}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
