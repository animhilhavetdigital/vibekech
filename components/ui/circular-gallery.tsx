import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';

// A simple utility for conditional class names
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Define the type for a single gallery item
export interface GalleryItem {
  common: string;
  binomial?: string;
  tag?: string;
  description?: string;
  link?: string;
  photo: {
    url: string; 
    text?: string;
    pos?: string;
    by?: string;
  };
}

// Define the props for the CircularGallery component
export interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. */
  radius?: number;
  /** Controls the speed of auto-rotation when not scrolling. */
  autoRotateSpeed?: number;
  /** Enable mouse / touch drag interaction */
  enableDrag?: boolean;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 550, autoRotateSpeed = 0.02, enableDrag = true, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const startRotationRef = useRef(0);

    // Effect to handle scroll-based rotation
    useEffect(() => {
      const handleScroll = () => {
        setIsInteracting(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        const scrollRotation = scrollProgress * 360;
        setRotation(scrollRotation);

        scrollTimeoutRef.current = setTimeout(() => {
          setIsInteracting(false);
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, []);

    // Effect for auto-rotation when not interacting
    useEffect(() => {
      const autoRotate = () => {
        if (!isInteracting && !isDraggingRef.current) {
          setRotation(prev => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isInteracting, autoRotateSpeed]);

    // Touch & Mouse Drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
      if (!enableDrag) return;
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      startRotationRef.current = rotation;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - startXRef.current;
      setRotation(startRotationRef.current + deltaX * 0.25);
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn(
          "relative w-full h-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing",
          className
        )}
        style={{ perspective: '2000px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={(e) => {
          if (!enableDrag) return;
          isDraggingRef.current = true;
          startXRef.current = e.touches[0].clientX;
          startRotationRef.current = rotation;
        }}
        onTouchMove={(e) => {
          if (!isDraggingRef.current) return;
          const deltaX = e.touches[0].clientX - startXRef.current;
          setRotation(startRotationRef.current + deltaX * 0.35);
        }}
        onTouchEnd={() => {
          isDraggingRef.current = false;
        }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
            transition: isDraggingRef.current ? 'none' : 'transform 0.1s linear',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.25, 1 - (normalizedAngle / 180));
            const scale = Math.max(0.85, 1 - (normalizedAngle / 360));

            return (
              <div
                key={item.photo.url + i}
                role="group"
                aria-label={item.common}
                className="absolute w-[290px] h-[390px] sm:w-[320px] sm:h-[430px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) scale(${scale})`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-145px',
                  marginTop: '-195px',
                  opacity: opacity,
                  transition: 'opacity 0.3s linear, transform 0.2s ease-out'
                }}
              >
                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden group border border-white/20 bg-slate-900/80 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/60 hover:shadow-amber-500/20">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text || item.common}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {item.tag && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-950 bg-amber-400/90 rounded-full backdrop-blur-md shadow-md">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">
                    <h2 className="text-xl font-bold tracking-tight text-white mb-1 group-hover:text-amber-400 transition-colors">
                      {item.common}
                    </h2>
                    {item.binomial && (
                      <em className="text-xs italic text-amber-200/80 block mb-2">{item.binomial}</em>
                    )}
                    {item.description && (
                      <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-3">
                        {item.description}
                      </p>
                    )}
                    {item.photo.by && (
                      <p className="text-[11px] text-gray-400 opacity-80">Photo by: {item.photo.by}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
