document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mouse Movement Interaction for Liquid Shapes
    const shapes = document.querySelectorAll('.liquid-shape');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.02; // Different speeds for depth effect
            const xOffset = (window.innerWidth - x) * speed;
            const yOffset = (window.innerHeight - y) * speed;
            
            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // 2. Smooth Reveal Animation on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        // Set initial state for JS animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
 