import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';

const moroccoDestinationsData: GalleryItem[] = [
  {
    common: 'Desert & Agafay',
    binomial: 'Agafay Stone Desert, Marrakech',
    tag: '15 Activities',
    description: 'Quad biking, camel riding, buggy safaris & luxury desert camp dinners under the stars.',
    photo: {
      url: './herophoto/parker-hilton-0gHcDpcYxOI-unsplash.jpg',
      text: 'Agafay desert camp at dusk with camels and nomadic tents',
      by: 'Parker Hilton'
    }
  },
  {
    common: 'Atlas & Sahara Circuits',
    binomial: 'Merzouga Dunes & Dades Gorges',
    tag: '8 Circuits',
    description: 'Multi-day private road trips through Ouarzazate, Dades Gorges & Merzouga Sahara.',
    photo: {
      url: './herophoto/alex-azabache-H0eV-0CRpOE-unsplash.jpg',
      text: 'Sahara sand dunes under sunset golden hour',
      by: 'Alex Azabache'
    }
  },
  {
    common: 'Atlantic Coast (Essaouira)',
    binomial: 'Essaouira Mogador Port & Ramparts',
    tag: '6 Destinations',
    description: 'Day trips to Essaouira beach, ancient ramparts & fresh seafood dining.',
    photo: {
      url: './herophoto/oussama-abouchatir-PcPoCsFj4mQ-unsplash.jpg',
      text: 'Essaouira fortress with turquoise Atlantic ocean',
      by: 'Oussama Abouchatir'
    }
  },
  {
    common: 'Guided Medina Heritage',
    binomial: 'UNESCO World Heritage Medina',
    tag: '12 Tours',
    description: 'Bahia Palace, Majorelle, Saadian Tombs & secret souks with official licensed guides.',
    photo: {
      url: './herophoto/miltiadis-fragkidis-CWyFVt0V-HI-unsplash.jpg',
      text: 'Historic riad architecture with courtyard fountain',
      by: 'Miltiadis Fragkidis'
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
    common: 'Ourika Valley & Atlas',
    binomial: 'High Atlas Mountain Valleys',
    tag: '5 Excursions',
    description: 'High Atlas Mountain trails, traditional Berber villages, rivers and Setti Fatma waterfalls.',
    photo: {
      url: './herophoto/zakariae-daoui-I2YeucCFOmw-unsplash.jpg',
      text: 'Green Ourika valley with snow-capped Atlas backdrop',
      by: 'Zakariae Daoui'
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
      url: './herophoto/ignacio-ceballos-eP94dHUaY1U-unsplash.jpg',
      text: 'Sunset quad biking in Marrakech Palmeraie',
      by: 'Ignacio Ceballos'
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
