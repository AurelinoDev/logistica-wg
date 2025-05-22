// Página Serviços
const textos = {
  servicos:`Conheça nossos serviços especializados em segurança empresarial e proteção patrimonial.
            Oferecemos soluções eficazes que vão desde o acompanhamento logístico até investigações de sinistros e operações de inteligência. Nossa missão é proteger seus ativos e assegurar a continuidade do seu negócio.
            Contamos com uma equipe altamente qualificada e experiente, preparada para atuar em diversas frentes com agilidade, precisão e confidencialidade, sempre comprometida com a segurança e o bem-estar da sua empresa.`,

  logistica: "Oferecemos acompanhamento presencial em rotas de risco, reforçando o monitoramento eletrônico para garantir a proteção total de suas cargas de alto valor.",

  pronta: "Conte com nossa equipe altamente treinada e capacitada para oferecer suporte especializado em situações de emergência, assegurando uma resposta rápida e eficaz para proteger o seu negócio.",

  sindicancia : "Conduzimos investigações especializadas para identificar e desarticular quadrilhas, recuperar itens roubados e proteger seu patrimônio contra perdas financeiras.",

  investigacao: "Analisamos de forma estratégica os processos de sinistro, desenvolvendo soluções para identificar causas e responsabilidades, assegurando uma regulação eficiente, ágil e transparente.",

  inteligencia: "Executamos operações estratégicas para identificar ameaças, neutralizar riscos e proteger seu negócio contra ações criminosas, garantindo segurança e tranquilidade para você e seus clientes.",
  
  regulacao: "Nossa equipe de comissários de avarias certificados atua nos modais marítimo, rodoviário e aéreo, assegurando uma regulação precisa, eficiente e transparente para proteger seu negócio contra perdas financeiras."
};

function mostrarTexto(id) {
  const todos = document.querySelectorAll(".descricao");

  todos.forEach(el => {
    if (el.id !== id) {
      el.classList.remove("ativa");
    }
  });

  const elemento = document.getElementById(id);
  const jaVisivel = elemento.classList.contains("ativa");

  if (!jaVisivel) {
    elemento.textContent = textos[id];
    elemento.classList.add("ativa");
  } else {
    elemento.classList.remove("ativa");
  }
}
