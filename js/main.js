(function () {
    'use strict';

    // Variables
    const heroImage = document.getElementById('hero-image');
    const maxScale = 1;   // Maximum scale (original size)
    const minScale = 0.25; // Minimum scale (50% of original size)

    // Function to scale the hero image
    function scaleHeroImage() {
        const scrollTop = window.scrollY;
        const parallaxSpeed = 0.5;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        // Calculate the scroll percentage (0 at top, 1 at bottom)
        const scrollPercent = scrollTop / (documentHeight - windowHeight)-0.7;

        // Calculate new scale value
        const newScale = maxScale - (maxScale - minScale) * scrollPercent;

        // Ensure newScale stays within minScale and maxScale
        const clampedScale = Math.max(minScale, Math.min(maxScale, newScale));

        // Parallax effect
        heroImage.style.transform = `translateY(${scrollTop * parallaxSpeed}px) scale(${clampedScale})`;

        // Apply the scale transformation
        heroImage.style.transform = `scale(${newScale})`;

    }

    // Event listener for scrolling
    window.addEventListener('scroll', scaleHeroImage);

    // Initial call to set the image scale on page load
    scaleHeroImage();
})();
