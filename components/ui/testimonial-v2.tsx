import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Sun, Moon } from 'lucide-react';

// --- Types ---
export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "Our driver Youssef was waiting at Marrakech Menara Airport holding a sign with our name. The Mercedes V-Class was spotless with icy cold A/C. Later that evening, the Agafay Desert camel trek and dinner under the stars was pure magic!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Emma & James Watson",
    role: "Airport Transfer & Agafay Sunset",
  },
  {
    text: "The 3-day private Sahara circuit to Merzouga dunes exceeded all expectations. Crossing the High Atlas mountains via Tizi n'Tichka and sleeping in a luxury desert camp bivouac was the trip of a lifetime!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Marc & Sophie Dubois",
    role: "3-Day Sahara Merzouga Circuit",
  },
  {
    text: "Floating silently over Marrakech palm groves and watching the sunrise illuminate the snow-capped Atlas peaks was breathtaking. The traditional Berber breakfast in the caidal tent afterwards was delicious.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Elena Rostova",
    role: "Sunrise Hot Air Balloon Flight",
  },
  {
    text: "Punctual, smooth, and incredibly comfortable transfer from our Medina Riad to Casablanca Airport. Our driver was courteous, drove safely, and knew all the best scenic coffee stops along the highway.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David Miller",
    role: "Marrakech to Casablanca Transfer",
  },
  {
    text: "A wonderful day trip to Ouzoud Cascades! We saw the wild Barbary macaque monkeys up close, took the small boat right under the waterfalls, and enjoyed fresh tagine by the river. 10/10 service.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hannah & Lars Schmidt",
    role: "Ouzoud Waterfalls Day Trip",
  },
  {
    text: "Booked a private Mercedes Sprinter for our family of 8 for a full week across Morocco. The vehicle was pristine, child seats were provided as requested, and WhatsApp support responded instantly 24/7.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Tariq Al-Mansoor",
    role: "VIP Private Minivan Booking",
  },
  {
    text: "Essaouira was a refreshing coastal getaway! Our driver guided us through the argan oil cooperatives and recommended an incredible seafood grill right at the historic Portuguese port ramparts.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Charlotte & Tom",
    role: "Essaouira Coastal Excursion",
  },
  {
    text: "Our official licensed guide Hassan showed us secret passageways, Bahia Palace, and the vibrant spice markets without any high-pressure shopping. Truly authentic cultural experience!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Lucas & Mateo",
    role: "Historical Medina Guided Heritage",
  },
  {
    text: "Escaping the summer heat to Ourika Valley was fantastic. Walking along the river, climbing up to Setti Fatma waterfalls, and drinking mint tea in a Berber house made us fall in love with Morocco.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Amara & Claire",
    role: "Ourika Valley & Berber Villages",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-black/5 max-w-xs w-full bg-white dark:bg-neutral-900 transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-amber-500/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal m-0 transition-colors duration-300 text-sm">
                      "{text}"
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-100 dark:ring-neutral-800 group-hover:ring-amber-500/30 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-neutral-900 dark:text-white transition-colors duration-300 text-sm">
                          {name}
                        </cite>
                        <span className="text-xs leading-5 tracking-tight text-amber-600 dark:text-amber-400 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-24 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-amber-500/30 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-amber-700 dark:text-amber-400 bg-amber-500/10 transition-colors">
              Verified Traveler Reviews
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-neutral-900 dark:text-white transition-colors">
            What Our Travelers Say
          </h2>
          <p className="text-center mt-5 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-md transition-colors">
            Real experiences from travelers who booked airport transfers, desert expeditions, and day tours across Morocco.
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={19} />
        </div>
      </motion.div>
    </section>
  );
};

// --- Main App Component ---
export default function TestimonialV2App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="w-screen min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300 flex flex-col justify-center relative selection:bg-amber-500 selection:text-white">
      {/* Dark Mode Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 shadow-xl hover:scale-110 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <TestimonialsSection />
    </div>
  );
}
