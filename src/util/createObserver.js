
const createObserver = (ref, animationClassName, threshold) => {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClassName);
                observer.unobserve(entry.target); // Stop observing after animation is triggered
            } else {
                entry.target.classList.remove(animationClassName);
            }
        });
    }, { threshold: threshold}); // Adjust threshold as needed
    
    if (ref.current) {
        observer.observe(ref.current);
    }
    
    return () => {
        if (ref.current) {
            observer.unobserve(ref.current);
        }
    } 
};

export default createObserver;

