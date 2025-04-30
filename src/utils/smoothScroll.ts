export const smoothScroll = (href: string) => {
  // Verifica se estamos no navegador
  if (typeof window !== "undefined") {
    // Se for a página inicial, scroll para o topo
    if (href === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Remove o # do início do href para obter o ID
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80; // Altura do header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};
