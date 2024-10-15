export const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
        });
    }
};