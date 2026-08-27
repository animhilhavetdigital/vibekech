/**
 * Interactive 3D Perspective Animated Scroll Gallery Engine
 * Replicates framer-motion / useScroll / useTransform behavior from animated-gallery.tsx
 */

document.addEventListener('DOMContentLoaded', () => {
    const gallerySection = document.getElementById('animated-3d-gallery');
    const gridContainer = document.getElementById('gallery-3d-grid');
    const col1 = document.getElementById('gallery-col-1');
    const col2 = document.getElementById('gallery-col-2');
    const col3 = document.getElementById('gallery-col-3');

    if (!gallerySection || !gridContainer) return;

    let ticking = false;

    // Helper for linear interpolation
    function interpolate(val, inMin, inMax, outMin, outMax) {
        if (val <= inMin) return outMin;
        if (val >= inMax) return outMax;
        const progress = (val - inMin) / (inMax - inMin);
        return outMin + progress * (outMax - outMin);
    }

    function onScrollUpdate() {
        const rect = gallerySection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isMobile = window.innerWidth <= 768;

        // Progress [0, 1] as the section travels across the screen
        const totalDistance = rect.height + windowHeight;
        const currentOffset = windowHeight - rect.top;
        const scrollYProgress = Math.min(Math.max(currentOffset / totalDistance, 0), 1);

        // 1. rotateX
        const maxRotateX = isMobile ? 22 : 75;
        const rotateX = interpolate(scrollYProgress, 0.0, 0.55, maxRotateX, 0);

        // 2. scale
        const maxScale = isMobile ? 1.04 : 1.2;
        const scale = interpolate(scrollYProgress, 0.45, 0.9, maxScale, 1.0);

        // Apply 3D Transform to GalleryContainer
        gridContainer.style.transform = `rotateX(${rotateX.toFixed(2)}deg) scale(${scale.toFixed(3)})`;

        // 3. Parallax for Columns
        const yCol1_3 = interpolate(scrollYProgress, 0.5, 1.0, isMobile ? -4 : -10, 2);
        if (col1) col1.style.transform = `translateY(${yCol1_3.toFixed(2)}%)`;
        if (col3) col3.style.transform = `translateY(${yCol1_3.toFixed(2)}%)`;

        // Column 2
        const yCol2 = interpolate(scrollYProgress, 0.5, 1.0, isMobile ? 6 : 15, isMobile ? 2 : 5);
        if (col2) col2.style.transform = `translateY(${yCol2.toFixed(2)}%)`;

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(onScrollUpdate);
            ticking = true;
        }
    }, { passive: true });

    // Initial calculation on load
    onScrollUpdate();
});
