import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';

const moroccoDestinationsData: GalleryItem[] = [
  {
    common: 'Desert & Agafay',
    binomial: 'Agafay Stone Desert, Marrakech',
    tag: '15 Activities',
    description: 'Quad biking, camel riding, buggy safaris & luxury desert camp dinners under the stars.',
    photo: {
      url: './herophoto/agafay-scarabeo-camp.webp',
      text: 'Agafay luxury desert camp at dusk with camels and nomadic tents',
      by: 'True Kech Tours'
    }
  },
  {
    common: 'Atlas & Sahara Circuits',
    binomial: 'Merzouga Dunes & Dades Gorges',
    tag: '8 Circuits',
    description: 'Multi-day private road trips through Ouarzazate, Dades Gorges & Merzouga Sahara.',
    photo: {
      url: './herophoto/merzouga-golden-dunes.webp',
      text: 'Sahara sand dunes under sunset golden hour',
      by: 'True Kech Tours'
    }
  },
  {
    common: 'Atlantic Coast (Essaouira)',
    binomial: 'Essaouira Mogador Port & Ramparts',
    tag: '6 Destinations',
    description: 'Day trips to Essaouira beach, ancient ramparts & fresh seafood dining.',
    photo: {
      url: './herophoto/taghazout-agadir-coast.webp',
      text: 'Atlantic coastal fortress and scenic turquoise ocean',
      by: 'True Kech Tours'
    }
  },
  {
    common: 'Guided Medina Heritage',
    binomial: 'UNESCO World Heritage Medina',
    tag: '12 Tours',
    description: 'Bahia Palace, Majorelle, Saadian Tombs & secret souks with official licensed guides.',
    photo: {
      url: './herophoto/koutoubia-sunrise-marrakech.webp',
      text: 'Historic Koutoubia mosque at sunrise and Medina',
      by: 'True Kech Tours'
    }
  },
  {
    common: 'Ouzoud Waterfalls',
    binomial: 'Grand Atlas Cascades',
    tag: '4 Day Trips',
    description: '110m cascading waterfalls, wild Barbary macaque monkeys & boat ride under the falls.',
    photo: {
      url: './herophoto/eamonn-wang-dKQc5CGemoE-unsplash.jpg',
      text: 'Spectacular Ouzoud falls surrounded by olive groves',
      by: 'Eamonn Wang'
    }
  },
  {
    common: 'Imperial Palaces & Bahia',
    binomial: 'Moroccan Royal Architecture',
    tag: '5 Excursions',
    description: 'Intricate zellige tilework, cedarwood ceilings, and serene riad courtyards.',
    photo: {
      url: './herophoto/palacio-bahia-marrakech.webp',
      text: 'Bahia Palace archways and authentic architecture',
      by: 'True Kech Tours'
    }
  },
  {
    common: 'Sunrise Hot Air Balloon',
    binomial: 'Marrakech Palm Grove Sky Flight',
    tag: 'Top Rated ★ 4.9',
    description: 'Float above Marrakech palmeries & Atlas peaks followed by authentic Berber breakfast.',
    photo: {
      url: './herophoto/gabriele-stravinskaite-gStG3XkIXpc-unsplash.jpg',
      text: 'Colorful hot air balloons at sunrise over Marrakech',
      by: 'Gabriele Stravinskaite'
    }
  },
  {
    common: 'Palmeraie Quad & Camel',
    binomial: 'Sunset Oasis Discovery',
    tag: 'Best Seller',
    description: 'Sunset camel ride dressed in traditional cheche scarf and guided quad trails through oasis palm groves.',
    photo: {
      url: './herophoto/sahara-camel-caravan.webp',
      text: 'Sunset camel caravan safari in Morocco',
      by: 'True Kech Tours'
    }
  }
];

const CircularGalleryDemo = () => {
  return (
    <div className="w-full bg-slate-950 text-slate-100 min-h-[500vh] relative">
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-12 z-20 px-4">
          <span className="text-amber-500 font-semibold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-2 inline-block">
            360° Interactive Experience
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-1">
            Top Morocco Destinations & Circuits
          </h1>
          <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
            Scroll or drag to rotate and explore Marrakech top rated tours and desert expeditions.
          </p>
        </div>
        <div className="w-full h-full pt-16">
          <CircularGallery items={moroccoDestinationsData} radius={580} autoRotateSpeed={0.03} />
        </div>
      </div>
    </div>
  );
};

export default CircularGalleryDemo;
