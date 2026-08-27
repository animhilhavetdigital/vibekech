/**
/**
 * 3D Circular Gallery Engine for GlobeTrek
 * Interactive 360° Cylindrical Rotating 3D Showcase
 */

(function () {
    'use strict';

    function initCircularGallery() {
        const gallery = document.getElementById('circular-3d-gallery');
        if (!gallery) return;

        const cylinder = gallery.querySelector('.circular-3d-cylinder');
        const cards = gallery.querySelectorAll('.circular-3d-card');
        const prevBtn = gallery.querySelector('.circular-prev-btn');
        const nextBtn = gallery.querySelector('.circular-next-btn');
        const playPauseBtn = gallery.querySelector('.circular-play-pause-btn');

        if (!cylinder || !cards.length) return;

        const totalItems = cards.length;
        const anglePerItem = 360 / totalItems;

        let rotation = 0;
        let targetRotation = 0;
        let isAutoRotating = true;
        let autoRotateSpeed = 0.12; // degrees per frame
        let isDragging = false;
        let startX = 0;
        let startRotation = 0;
        let velocity = 0;
        let lastX = 0;
        let lastTime = 0;
        let isScrolling = false;
        let scrollTimeout = null;
        let animationFrameId = null;

        // Calculate dynamic radius based on viewport
        function getRadius() {
            const w = window.innerWidth;
            if (w < 480) return 300;
            if (w < 768) return 400;
            if (w < 1200) return 520;
            return 640;
        }

        let radius = getRadius();

        window.addEventListener('resize', () => {
            radius = getRadius();
            updateGallery();
        }, { passive: true });

        // Update card positions and 3D depth opacity
        function updateGallery() {
            cylinder.style.transform = `rotateY(${rotation}deg)`;

            cards.forEach((card, i) => {
                const itemAngle = i * anglePerItem;
                const totalAngle = rotation % 360;
                const relativeAngle = (itemAngle + totalAngle + 3600) % 360;
                const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);

                // Depth opacity matching exact reference style
                const opacity = Math.max(0.25, 1 - (normalizedAngle / 180));
                const scale = Math.max(0.85, 1 - (normalizedAngle / 360));
                const zIndex = Math.round(1000 * (1 - normalizedAngle / 180));

                card.style.transform = `rotateY(${itemAngle}deg) translateZ(${radius}px) scale(${scale.toFixed(3)})`;
                card.style.opacity = opacity.toFixed(2);
                card.style.zIndex = zIndex;

                if (normalizedAngle < 25) {
                    card.classList.add('is-active-center');
                } else {
                    card.classList.remove('is-active-center');
                }
            });
        }

        // Main animation loop
        function animate() {
            if (isDragging) {
                // Rotation updated directly by pointer handlers
            } else {
                if (Math.abs(velocity) > 0.01) {
                    rotation += velocity;
                    velocity *= 0.94; // inertia friction
                } else if (isAutoRotating && !isScrolling) {
                    rotation += autoRotateSpeed;
                }
            }

            updateGallery();
            animationFrameId = requestAnimationFrame(animate);
        }

        // Scroll listener for interactive rotation on page scroll
        window.addEventListener('scroll', () => {
            isScrolling = true;
            if (scrollTimeout) clearTimeout(scrollTimeout);

            const rect = gallery.getBoundingClientRect();
            const winH = window.innerHeight;

            // Only respond to scroll when the section is in view
            if (rect.top < winH && rect.bottom > 0) {
                const scrollProgress = (winH - rect.top) / (winH + rect.height);
                rotation += (scrollProgress - 0.5) * 1.5;
            }

            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 120);
        }, { passive: true });

        // Pointer Drag Interactions
        function onPointerDown(clientX) {
            isDragging = true;
            startX = clientX;
            lastX = clientX;
            lastTime = performance.now();
            startRotation = rotation;
            velocity = 0;
            gallery.classList.add('is-grabbing');
        }

        function onPointerMove(clientX) {
            if (!isDragging) return;
            const deltaX = clientX - startX;
            rotation = startRotation + (deltaX * 0.28);

            const now = performance.now();
            const dt = now - lastTime || 16;
            velocity = ((clientX - lastX) / dt) * 3.5;
            lastX = clientX;
            lastTime = now;
        }

        function onPointerUp(e) {
            if (!isDragging) return;
            isDragging = false;
            gallery.classList.remove('is-grabbing');

            // If it was a small drag, treat as click on card
            const totalDrag = Math.abs(lastX - startX);
            if (totalDrag > 8 && e && e.target) {
                // Prevent trigger of inner link on drag
                const link = e.target.closest('a');
                if (link) {
                    const preventHandler = (evt) => {
                        evt.preventDefault();
                        evt.stopPropagation();
                        link.removeEventListener('click', preventHandler);
                    };
                    link.addEventListener('click', preventHandler, { once: true });
                }
            }
        }

        // Mouse events
        gallery.addEventListener('mousedown', (e) => {
            if (e.target.closest('.circular-nav-btn')) return;
            onPointerDown(e.clientX);
        });

        window.addEventListener('mousemove', (e) => {
            if (isDragging) onPointerMove(e.clientX);
        });

        window.addEventListener('mouseup', (e) => {
            if (isDragging) onPointerUp(e);
        });

        // Touch events
        gallery.addEventListener('touchstart', (e) => {
            if (e.target.closest('.circular-nav-btn')) return;
            if (e.touches.length === 1) {
                onPointerDown(e.touches[0].clientX);
            }
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches.length === 1) {
                onPointerMove(e.touches[0].clientX);
            }
        }, { passive: true });

        window.addEventListener('touchend', (e) => {
            if (isDragging) onPointerUp(e);
        });

        // Prev / Next Controls
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                velocity = 0;
                rotation -= anglePerItem;
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                velocity = 0;
                rotation += anglePerItem;
            });
        }

        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                isAutoRotating = !isAutoRotating;
                playPauseBtn.innerHTML = isAutoRotating ? '<i class="icon-pause">⏸</i>' : '<i class="icon-play">▶</i>';
                playPauseBtn.setAttribute('title', isAutoRotating ? 'Pause rotation' : 'Play rotation');
            });
        }

        // Initialize positions and start animation loop
        updateGallery();
        animate();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCircularGallery);
    } else {
        initCircularGallery();
    }
})();
