  export const handleScrollToSectionFunc = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const elementRect = element.getBoundingClientRect();
    const scrollY = window.scrollY + elementRect.top; // Calculate absolute position

    window.scrollTo({
      top: scrollY, // Scroll the entire page
      behavior: "smooth"
    });
  };