/**
 * GlobeTrek Marrakech & Morocco Tours Comprehensive Database
 * All images linked to authentic high-resolution local photography in /herophoto/
 */

const TOURS_DATABASE = {
    'agafay-sunset': {
        id: 'agafay-sunset',
        title: 'Marrakech: Agafay Desert Sunset Quad, Camel Ride & Dinner Show',
        location: 'Agafay Desert, Marrakech',
        badge: 'TOP PICK',
        badgeClass: 'top-pick',
        category: 'Desert & Agafay',
        rating: 4.9,
        reviewsCount: 4180,
        basePrice: 180,
        priceUnit: 'DH',
        priceNote: 'per person',
        duration: '6 Hours',
        groupType: 'Small Group / Private',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from your Riad/Hotel in Marrakech',
        images: [
            './herophoto/berber-show-agafay.webp',
            './herophoto/agafay-scarabeo-camp.webp',
            './herophoto/sahara-camel-caravan.webp',
            './herophoto/parker-hilton-0gHcDpcYxOI-unsplash.jpg'
        ],
        overview: `Escape the bustling Medina and venture into the mesmerizing stone desert of Agafay for an unforgettable sunset evening. Experience thrilling quad biking across rolling desert hills, dress in traditional Berber attire for a sunset camel trek, and savor an authentic 3-course Moroccan dinner accompanied by live Gnaoua music, fire breathers, and belly dancers under a starry sky.`,
        highlights: [
            '2 hours of thrilling quad biking across the lunar landscape of Agafay Desert',
            'Sunset camel ride wearing traditional blue Berber nomad scarf (Cheich)',
            'Welcome Moroccan mint tea & traditional pastries at a luxury desert camp',
            'Romantic candlelit dinner featuring fresh tagines, Moroccan salads, and seasonal fruits',
            'Spectacular live evening show with Berber fire breathers and Gnaoua music'
        ],
        itinerary: [
            { time: '15:30', title: 'Pickup from Riad/Hotel in Marrakech', desc: 'Air-conditioned minivan pickup from your accommodation or nearest accessible point in the Medina.' },
            { time: '16:15', title: 'Arrival at Agafay & Quad Safety Briefing', desc: 'Meet your professional guide, receive high-quality helmets and goggles, and enjoy a safety demonstration.' },
            { time: '16:30', title: '2-Hour Quad Safari & Desert Viewpoint', desc: 'Ride through dry riverbeds, rugged desert trails, and stop at a panoramic ridge for breathtaking Atlas views.' },
            { time: '18:30', title: 'Sunset Camel Trek in Traditional Dress', desc: 'Mount your camel as the golden sun dips behind the High Atlas mountains.' },
            { time: '19:30', title: 'Camp Dinner & Live Performance Show', desc: 'Dine in a luxury heated nomad tent with live music, fire dance, and campfire stargazing.' },
            { time: '21:30', title: 'Return Transfer to Marrakech', desc: 'Comfortable private transport back to your Riad/hotel in Marrakech.' }
        ],
        included: [
            'Round-trip hotel pickup and drop-off in air-conditioned vehicle',
            'Modern quad bike with helmet, goggles, and fuel included',
            'Camel ride in traditional Berber nomad clothing',
            'Full 3-course Moroccan dinner (Tagine, Salads, Dessert)',
            'Berber mint tea & mineral water',
            'Live entertainment (Fire show, Gnaoua music, Belly dancing)'
        ],
        excluded: [
            'Alcoholic beverages & soft drinks',
            'Personal souvenirs and tips for guides (optional)'
        ],
        bookingOptions: [
            { name: 'Camel Trek + Dinner Show (No Quad)', price: 450 },
            { name: 'Sunset Quad (2h) + Camel Ride + Dinner Show', price: 700, selected: true },
            { name: 'VIP Private Tent + Quad + Sunset Camel + Dinner', price: 950 },
            { name: 'Buggy Safari 2-Seater + Dinner Show (per buggy)', price: 1200 }
        ]
    },

    'ouarzazate': {
        id: 'ouarzazate',
        title: 'Day Trip to Ouarzazate & Kasbah Ait Benhaddou (All-Inclusive)',
        location: 'Ouarzazate & High Atlas Mountains',
        badge: 'MUST VISIT',
        badgeClass: 'must-visit',
        category: 'Atlas & Sahara Circuits',
        rating: 4.9,
        reviewsCount: 1240,
        basePrice: 650,
        priceUnit: 'DH',
        priceNote: 'per vehicle / person',
        duration: '11 Hours',
        groupType: 'Private Vehicle / Small Group',
        languages: 'English, Français, Español, Deutsch, العربية',
        pickup: 'Included from your Riad/Hotel in Marrakech (07:30 AM)',
        images: [
            './herophoto/atlas-kasbah-landscape.webp',
            './herophoto/imgi_13_ee3b303bb4a3ea49c5067e2b7e7c99b1-1077x580.jpg.webp',
            './herophoto/frida-aguilar-estrada-9tiVcbwbZ9M-unsplash.jpg',
            './herophoto/morocco-grand-tour-10days.webp'
        ],
        overview: `Cross the majestic High Atlas mountains via the breathtaking Tizi n'Tichka pass (2,260m) to reach the gateway of the Sahara Desert. Discover the legendary UNESCO World Heritage site of Kasbah Ait Benhaddou, a fortified earthen clay city featured in Gladiator, Game of Thrones, and Lawrence of Arabia. Tour the historic Kasbah Taourirt in Ouarzazate and explore world-famous Atlas Film Studios.`,
        highlights: [
            'Scenic drive through High Atlas Mountains via Tizi n\'Tichka Pass (2,260m)',
            'Guided walking tour of UNESCO World Heritage Kasbah Ait Benhaddou',
            'Visit the historic Glaoui Kasbah of Telouet and ancient salt trade routes',
            'Tour Ouarzazate known as "The Hollywood of Africa" & Atlas Film Studios',
            'Delicious traditional Berber lunch overlooking the ancient river valley'
        ],
        itinerary: [
            { time: '07:30', title: 'Hotel Departure from Marrakech', desc: 'Meet your private driver and begin the scenic ascent into the High Atlas.' },
            { time: '09:30', title: 'Tizi n\'Tichka Mountain Pass (2,260m)', desc: 'Photo stop at the highest mountain pass in North Africa with panoramic Berber village views.' },
            { time: '11:30', title: 'Guided Tour of Kasbah Ait Benhaddou', desc: 'Cross the river and explore the labyrinth of towers, mud-brick houses, and film viewpoints.' },
            { time: '13:30', title: 'Panoramic Berber Lunch', desc: 'Enjoy fresh Berber tagine at a rooftop terrace with views over the historic fortress.' },
            { time: '15:00', title: 'Ouarzazate & Kasbah Taourirt / Cinema Studios', desc: 'Visit Kasbah Taourirt and optional visit to CLA/Atlas Film Studios.' },
            { time: '19:00', title: 'Arrival back in Marrakech', desc: 'Safe return drop-off directly at your accommodation.' }
        ],
        included: [
            'Private modern A/C vehicle with professional multilingual driver',
            'All fuel costs, highway tolls, and parking fees',
            'Hotel pickup and drop-off in Marrakech',
            'Local licensed guide in Ait Benhaddou',
            'Free time for photography and souvenir exploration'
        ],
        excluded: [
            'Lunch and drinks (approx. 100-150 DH)',
            'Entry ticket to Atlas Film Studios (approx. 80 DH)'
        ],
        bookingOptions: [
            { name: 'Private Minivan Transfer (1 to 6 persons)', price: 900, selected: true },
            { name: 'VIP Mercedes V-Class (1 to 6 persons)', price: 1400 },
            { name: 'Private Minibus (7 to 14 persons)', price: 1600 }
        ]
    },

    'ouzoud': {
        id: 'ouzoud',
        title: 'Marrakech: Ouzoud Waterfalls Guided Hike & Boat Ride with Lunch',
        location: 'Ouzoud Waterfalls, Grand Atlas',
        badge: 'NATURE & HIKE',
        badgeClass: 'nature',
        category: 'Excursions & Day Trips',
        rating: 4.8,
        reviewsCount: 3870,
        basePrice: 167,
        priceUnit: 'DH',
        priceNote: 'per person',
        duration: '10 Hours',
        groupType: 'Small Group / Private',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from Marrakech (08:00 AM)',
        images: [
            './herophoto/eamonn-wang-dKQc5CGemoE-unsplash.jpg',
            './herophoto/tatiana-zanon-VP2mjtJqWvY-unsplash.jpg',
            './herophoto/clement-bergey-tDKIGOPfB-0-unsplash.jpg'
        ],
        overview: `Discover the highest and most spectacular waterfalls in North Africa (110m cascades). Walk through shaded olive groves, meet wild Barbary macaque monkeys in their natural habitat, take a traditional boat ride directly under the refreshing cascades, and enjoy a traditional riverside lunch with stunning water views.`,
        highlights: [
            'Marvel at the 110-meter (360-foot) multi-tiered Ouzoud Waterfalls',
            'Guided nature hike along scenic olive tree trails and canyon paths',
            'Encounter wild, friendly Barbary macaque monkeys',
            'Traditional wooden boat cruise right up to the roaring waterfall mist',
            'Relaxing lunch by the river with fresh Moroccan dishes'
        ],
        itinerary: [
            { time: '08:00', title: 'Departure from Marrakech', desc: 'Drive through the fertile Al Haouz plains and Tadla countryside towards the Middle Atlas.' },
            { time: '10:45', title: 'Arrival at Ouzoud & Meet Local Guide', desc: 'Begin walking down the scenic trails through century-old olive groves.' },
            { time: '11:30', title: 'Wild Barbary Monkeys & Canyon Viewpoints', desc: 'Interact with friendly wild monkeys and capture stunning canyon photos.' },
            { time: '12:30', title: 'Traditional Boat Ride Under the Cascades', desc: 'Board a small wooden boat to get up close to the bottom pool and feel the refreshing spray.' },
            { time: '13:30', title: 'Riverside Berber Lunch', desc: 'Dine by the water at a shaded restaurant with tagines and fresh orange juice.' },
            { time: '18:00', title: 'Return Drop-off in Marrakech', desc: 'Arrive back at your hotel or Riad.' }
        ],
        included: [
            'Round-trip private/shared air-conditioned transport',
            'Professional driver and local mountain guide',
            'Traditional boat ride at the bottom of the waterfalls',
            'Hotel pickup and drop-off'
        ],
        excluded: [
            'Lunch and personal drinks',
            'Gratuities for local guide (optional)'
        ],
        bookingOptions: [
            { name: 'Standard Day Tour (Transport + Guide + Boat)', price: 350, selected: true },
            { name: 'All-Inclusive (Tour + Traditional Lunch + Boat)', price: 480 },
            { name: 'Private Vehicle Tour (Up to 6 persons)', price: 800 }
        ]
    },

    'essaouira': {
        id: 'essaouira',
        title: 'Marrakech: Day Trip to Essaouira Beach, Medina & Ramparts',
        location: 'Essaouira Atlantic Coast',
        badge: 'COASTAL ESCAPE',
        badgeClass: 'coastal',
        category: 'Atlantic Coast (Essaouira)',
        rating: 4.8,
        reviewsCount: 2080,
        basePrice: 650,
        priceUnit: 'DH',
        priceNote: 'per private vehicle',
        duration: '12 Hours',
        groupType: 'Private Minivan / Shared Option',
        languages: 'English, Français, Español, Deutsch, العربية',
        pickup: 'Included from your Riad/Hotel in Marrakech (08:30 AM)',
        images: [
            './herophoto/oussama-abouchatir-PcPoCsFj4mQ-unsplash.jpg',
            './herophoto/carlos-leret-NaY693XXXpY-unsplash.jpg',
            './herophoto/miltiadis-fragkidis-CWyFVt0V-HI-unsplash.jpg'
        ],
        overview: `Take a refreshing day trip from Marrakech to the laid-back Atlantic coastal town of Essaouira (ancient Mogador). Famous for its historic 18th-century Portuguese ramparts (Scala de la Kasbah), vibrant blue fishing harbor, UNESCO Medina filled with thuya woodwork artisans, and fresh grilled seafood markets. On the way, stop to see the famous "tree-climbing goats" and visit a women's Argan oil cooperative.`,
        highlights: [
            'Explore the UNESCO World Heritage Medina of Essaouira with its white & blue streets',
            'Walk the historic Portuguese ramparts with brass cannons and ocean panoramas',
            'Visit the bustling traditional blue boat fishing harbor & fish auction',
            'Witness the famous "tree-climbing goats" in the Argan forest',
            'Visit an authentic Women\'s Argan Oil Cooperative to see cosmetic production',
            'Enjoy fresh grilled ocean seafood right on the seaside harbor'
        ],
        itinerary: [
            { time: '08:30', title: 'Departure from Marrakech', desc: 'Travel west across the scenic Argan plains towards the Atlantic Ocean.' },
            { time: '10:00', title: 'Stop: Tree Climbing Goats & Argan Cooperative', desc: 'Photo stop with tree-climbing goats and visit a certified organic Argan workshop.' },
            { time: '11:30', title: 'Arrival in Essaouira & Free Exploration', desc: 'Arrive at the port entrance. Stroll along the ocean ramparts and historic Scala fortress.' },
            { time: '13:00', title: 'Fresh Seafood Lunch at Harbor', desc: 'Choose fresh fish directly from the fishermen and have it grilled to perfection.' },
            { time: '14:30', title: 'Medina Souks & Thuya Woodwork Workshops', desc: 'Shop for silver jewelry, argan products, and unique handcrafted wooden art.' },
            { time: '16:30', title: 'Scenic Beach Walk & Departure', desc: 'Relax on the sandy beach or enjoy a seaside café before boarding for the return trip.' },
            { time: '19:00', title: 'Arrival back in Marrakech', desc: 'Drop-off at your hotel or Riad.' }
        ],
        included: [
            'Private A/C Minivan or comfortable tourist bus with professional driver',
            'Hotel pickup and drop-off in Marrakech',
            'Visit to Argan Oil Women\'s Cooperative',
            'Free time to explore at your own leisure (4 to 5 hours in Essaouira)'
        ],
        excluded: [
            'Lunch and drinks',
            'Optional local guide (city is very easy to navigate independently)'
        ],
        bookingOptions: [
            { name: 'Private Minivan (1-6 persons)', price: 650, selected: true },
            { name: 'VIP Mercedes V-Class (1-6 persons)', price: 1200 },
            { name: 'Large Group Minibus (7-14 persons)', price: 1300 }
        ]
    },

    'sahara-3days': {
        id: 'sahara-3days',
        title: '3-Day Sahara Desert Tour to Merzouga Dunes & Luxury Camp',
        location: 'Merzouga Desert, Erg Chebbi & Dades',
        badge: 'BESTSELLER',
        badgeClass: 'bestseller',
        category: 'Atlas & Sahara Circuits',
        rating: 5.0,
        reviewsCount: 2890,
        basePrice: 2400,
        priceUnit: 'DH',
        priceNote: 'per person (Half-Board)',
        duration: '3 Days / 2 Nights',
        groupType: 'Private Tour (100% Flexible)',
        languages: 'English, Français, Español, Deutsch, Italiano, العربية',
        pickup: 'Included from your Riad/Hotel in Marrakech (07:30 AM)',
        images: [
            './herophoto/tour-3-days-marrakech-desert.webp',
            './herophoto/merzouga-golden-dunes.webp',
            './herophoto/sahara-camel-caravan.webp',
            './herophoto/desert-luxury-experience.webp'
        ],
        overview: `The quintessential Moroccan desert expedition: travel through the High Atlas, historic Kasbah Ait Benhaddou, Rose Valley, Dades Gorges, and towering Todra Canyons to reach the golden sand dunes of Erg Chebbi, Merzouga. Enjoy a magical sunset camel trek, sleep in a luxury heated desert camp with private en-suite bathroom, and dine under a sky of a million stars by the campfire.`,
        highlights: [
            'Cross High Atlas via Tizi n\'Tichka (2,260m) and explore Ait Benhaddou',
            'Stay 1 night in a charming panoramic Riad in the Dades Gorges with dinner',
            'Hike beneath the dramatic 300-meter cliffs of Todra Gorges',
            'Camel trek across the giant golden dunes of Erg Chebbi Merzouga',
            'Sleep in a 5-star Luxury Bivouac tent with private hot shower and toilet',
            'Authentic Berber drum music by the campfire and incredible stargazing'
        ],
        itinerary: [
            { time: 'Day 1', title: 'Marrakech → Ait Benhaddou → Ouarzazate → Dades Valley', desc: 'Depart Marrakech at 07:30. Cross Tizi n\'Tichka, visit UNESCO Ait Benhaddou Kasbah, drive through Valley of Roses. Dinner and night in Dades Riad.' },
            { time: 'Day 2', title: 'Dades Gorges → Todra Canyons → Merzouga Dunes (Camel Trek & Camp)', desc: 'Explore Todra Gorges cliffs. Arrive at Merzouga desert, mount camels for 1h sunset trek. Luxury camp check-in, Moroccan dinner, live drums by the fire.' },
            { time: 'Day 3', title: 'Sahara Sunrise → Draa Valley Oasis → Ouarzazate → Marrakech', desc: 'Early morning dune sunrise, rich breakfast. Scenic return through Draa Valley palm oasis, arriving in Marrakech around 19:30.' }
        ],
        included: [
            'Private comfortable A/C Minivan or 4x4 with fuel and driver',
            '1 Night in authentic Dades Riad with private bathroom & dinner',
            '1 Night in Luxury Heated Desert Camp (Private tent with en-suite shower & WC)',
            'Sunset & Sunrise camel rides across Erg Chebbi dunes',
            'All Dinners and Breakfasts throughout the 3-day tour',
            'Luggage transfer to camp by 4x4'
        ],
        excluded: [
            'Lunches and drinks along the road',
            'Entry tickets to optional monuments'
        ],
        bookingOptions: [
            { name: 'Luxury Desert Camp & 4★ Dades Riad', price: 2400, selected: true },
            { name: 'Royal VIP Camp & 5★ Luxury Palace Riad', price: 3400 },
            { name: 'Tour with Drop-off in Fez instead of Marrakech', price: 2700 }
        ]
    },

    'balloon': {
        id: 'balloon',
        title: 'Marrakech: Hot Air Balloon Sunrise Flight with Berber Breakfast',
        location: 'Jbilet Mountains, Marrakech',
        badge: 'EXCLUSIVE',
        badgeClass: 'exclusive',
        category: 'Hot Air Balloons',
        rating: 4.9,
        reviewsCount: 1650,
        basePrice: 1800,
        priceUnit: 'DH',
        priceNote: 'per passenger',
        duration: '4.5 Hours',
        groupType: 'Small Group / VIP Basket',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from all Marrakech hotels/Riads (05:00 - 05:45 AM)',
        images: [
            './herophoto/gabriele-stravinskaite-gStG3XkIXpc-unsplash.jpg',
            './herophoto/pommelien-da-silva-cosme-nnDgdAGoeAE-unsplash.jpg',
            './herophoto/ine-driesens-RG06Ii7cu_k-unsplash.jpg'
        ],
        overview: `Glide peacefully over the desert plains and ancient Berber villages of Marrakech as the morning sun illuminates the snow-capped High Atlas Mountains. After a safe and smooth 1-hour flight, land in a traditional Berber tent to savor a freshly prepared Moroccan breakfast and receive your personalized flight certificate.`,
        highlights: [
            'Spectacular 1-hour sunrise flight overlooking the desert and Atlas mountains',
            'Watch the giant hot air balloon inflate while enjoying morning coffee & tea',
            'Rich post-flight Moroccan breakfast in a traditional caidal nomad tent',
            'Personalized official flight certificate signed by your certified pilot',
            'Round-trip 4x4 transport directly from your hotel or Riad'
        ],
        itinerary: [
            { time: '05:15', title: 'Early Morning Hotel Pickup', desc: 'Private 4x4 transfer from your accommodation to the launch site.' },
            { time: '06:00', title: 'Pre-Flight Tea & Balloon Inflation', desc: 'Warm up with hot mint tea, coffee, and pastries while the crew inflates the balloon.' },
            { time: '06:30', title: 'Sunrise Takeoff & 1-Hour Flight', desc: 'Ascend up to 1,000 meters for 360-degree views of the Marrakech Palmeraie and Atlas range.' },
            { time: '07:45', title: 'Gentle Landing & Berber Breakfast', desc: 'Sit down for freshly baked msemmen, amlou, honey, eggs, and freshly squeezed orange juice.' },
            { time: '09:30', title: 'Return Drop-off in Marrakech', desc: 'Arrive back at your hotel in time to enjoy the rest of your day.' }
        ],
        included: [
            'Round-trip 4x4 hotel transfer',
            'Full 1-hour hot air balloon flight with certified European/Moroccan pilot',
            'Pre-flight welcome refreshments & post-flight rich Berber breakfast',
            'Official Flight Certificate',
            'Full passenger insurance'
        ],
        excluded: [
            'Personal video recording services (available for purchase on-site)'
        ],
        bookingOptions: [
            { name: 'Classic Sunrise Flight + Breakfast', price: 1800, selected: true },
            { name: 'Royal Compartment Flight (Max 4 pax per section)', price: 2400 },
            { name: 'VIP Private Basket + Champagne & Luxury Breakfast', price: 3200 }
        ]
    },

    'palmeraie-quad': {
        id: 'palmeraie-quad',
        title: 'Marrakech: 2-Hour Quad Biking in Palmeraie Desert & Oasis',
        location: 'Palmeraie Oasis, Marrakech',
        badge: 'ADVENTURE',
        badgeClass: 'adventure',
        category: 'Quad & Buggy',
        rating: 4.7,
        reviewsCount: 2940,
        basePrice: 450,
        priceUnit: 'DH',
        priceNote: 'per quad (2h)',
        duration: '2 Hours Activity',
        groupType: 'Small Group with Guide',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from Marrakech hotels / Riads',
        images: [
            './herophoto/ignacio-ceballos-eP94dHUaY1U-unsplash.jpg',
            './herophoto/emilia-igartua-HgE9YVtRN_c-unsplash.jpg',
            './herophoto/rigel-u-9HxwcxQYo-unsplash.jpg'
        ],
        overview: `Drive your own Yamaha/Kymco quad bike through the thousand-year-old palm groves of the Marrakech Palmeraie and surrounding dry riverbeds. Stop at a traditional Berber village to sip authentic fresh mint tea and homemade crepes with local honey.`,
        highlights: [
            '2-hour guided off-road quad biking in the Palmeraie palm grove',
            'Professional guide, top-tier safety gear (helmets & goggles)',
            'Tea break in an authentic Berber home with fresh bread and olive oil',
            'Stunning Atlas mountain views and palm oasis landscapes'
        ],
        itinerary: [
            { time: '09:00 / 14:00', title: 'Pickup from Riad', desc: 'Transfer by A/C minivan to the Palmeraie base camp.' },
            { time: '09:30 / 14:30', title: 'Gear Up & Quad Training', desc: 'Safety briefing and test drive to get comfortable with the quad controls.' },
            { time: '09:45 / 14:45', title: 'Off-Road Trail Riding', desc: 'Ride through sandy trails, dried riverbeds, and palm forests.' },
            { time: '11:00 / 16:00', title: 'Berber Village Tea Break', desc: 'Rest and enjoy traditional Moroccan hospitality in a local village.' },
            { time: '12:00 / 17:00', title: 'Return Drop-off', desc: 'Transfer back to your hotel.' }
        ],
        included: [
            'Hotel pickup & drop-off',
            'Yamaha / Kymco quad bike + fuel',
            'Helmet, hairnet, goggles and gloves',
            'Mint tea and Moroccan snacks',
            'Guide & civil liability insurance'
        ],
        excluded: [
            'Souvenir photos taken by photographer'
        ],
        bookingOptions: [
            { name: 'Single Quad (1 Rider)', price: 450, selected: true },
            { name: 'Double Quad (Driver + Passenger)', price: 650 },
            { name: 'Combo: 2h Quad + 1h Camel Ride', price: 650 }
        ]
    },

    'golf': {
        id: 'golf',
        title: 'Marrakech: 18-Hole Championship Golf Experience with Transfer',
        location: 'Royal Golf, Amelkis & Assoufid Clubs',
        badge: 'PREMIUM',
        badgeClass: 'premium',
        category: 'Golf Experience',
        rating: 4.8,
        reviewsCount: 580,
        basePrice: 850,
        priceUnit: 'DH',
        priceNote: 'per player (Green Fee)',
        duration: '5 Hours',
        groupType: 'Private Tee Times',
        languages: 'English, Français, Español',
        pickup: 'Included round-trip transfer from your hotel',
        images: [
            './herophoto/jessica-kantak-bailey-gCr0amJXOts-unsplash.jpg',
            './herophoto/badiuth-dP_nrvgJGXo-unsplash.jpg',
            './herophoto/annie-spratt-4Jk8hFM-JGk-unsplash.jpg'
        ],
        overview: `Play on world-class 18-hole championship courses in Marrakech surrounded by century-old olive trees, date palms, and dramatic High Atlas mountain backdrops. Choose from legendary courses including Royal Golf Marrakech, Amelkis Golf Club, Assoufid, or PalmGolf.`,
        highlights: [
            'Guaranteed prime tee times at Marrakech’s top championship courses',
            'Flawless manicured greens and fairways with Atlas mountain views',
            'Round-trip private transfer with golf bag handling',
            'Optional electric buggy and top-tier TaylorMade/Callaway rental clubs'
        ],
        itinerary: [
            { time: '08:30', title: 'Hotel Pickup with Golf Transport', desc: 'Chauffeured pickup from your accommodation to the golf clubhouse.' },
            { time: '09:00', title: 'Check-in & Practice Range', desc: 'Collect scorecard, warmup on the driving range and putting greens.' },
            { time: '09:30', title: '18-Holes Championship Game', desc: 'Play your round on pristine fairways with stunning scenery.' },
            { time: '13:30', title: 'Clubhouse Relaxation & Return Transfer', desc: 'Enjoy drinks on the panoramic terrace followed by return transport.' }
        ],
        included: [
            '18-Holes Green Fee reservation',
            'Round-trip private vehicle transfer',
            'Access to clubhouse amenities & locker rooms'
        ],
        excluded: [
            'Buggy and club rentals (selectable in options)',
            'Food and beverages'
        ],
        bookingOptions: [
            { name: 'Royal Golf Marrakech (18-Holes Green Fee)', price: 850, selected: true },
            { name: 'Amelkis Golf Club (18-Holes Green Fee)', price: 950 },
            { name: 'Assoufid Golf Club (Championship 18-Holes)', price: 1200 },
            { name: 'With Electric Buggy Rental', price: 1150 },
            { name: 'With Buggy & Premium Clubs Rental', price: 1400 }
        ]
    },

    'buggy': {
        id: 'buggy',
        title: 'Agafay Desert: 3-Hour Buggy Safari Adventure (2-Seater)',
        location: 'Agafay Desert, Marrakech',
        badge: 'THRILL',
        badgeClass: 'thrill',
        category: 'Quad & Buggy',
        rating: 4.9,
        reviewsCount: 1320,
        basePrice: 750,
        priceUnit: 'DH',
        priceNote: 'per buggy / person',
        duration: '3 Hours',
        groupType: 'Small Group / Private',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from Marrakech hotels/Riads',
        images: [
            './herophoto/joe-vadilonga-K5SnVASEQ4w-unsplash.jpg',
            './herophoto/parker-hilton-VtGLcivTXtk-unsplash.jpg',
            './herophoto/clement-bergey-tDKIGOPfB-0-unsplash.jpg'
        ],
        overview: `Take control of a powerful high-performance 800cc/1000cc desert buggy and navigate dramatic canyon ridges, stone dunes, and rugged desert trails in the Agafay Desert. Built for maximum stability and speed with bucket seats and full roll cages.`,
        highlights: [
            'High-adrenaline off-road buggy driving across Agafay Desert trails',
            'Premium 2-seater buggies with automatic transmission and roll-cage safety',
            'Stop at desert summit ridges overlooking the snow-capped Atlas',
            'Refreshing Moroccan mint tea break at an authentic desert bivouac'
        ],
        itinerary: [
            { time: '14:00', title: 'Hotel Pickup in Marrakech', desc: 'Transfer directly to Agafay desert base camp.' },
            { time: '14:45', title: 'Buggy Safety Briefing & Equipment', desc: 'Full gear setup: helmet, full face mask, gloves and safety briefing.' },
            { time: '15:00', title: '2-Hour Buggy Expedition', desc: 'Follow your guide through desert riverbeds and canyon dunes.' },
            { time: '17:00', title: 'Berber Camp Tea & Sunset Views', desc: 'Enjoy tea and panoramic views before heading back.' },
            { time: '18:30', title: 'Return Drop-off', desc: 'Drop-off at your hotel or Riad.' }
        ],
        included: [
            'Hotel pickup & drop-off by private A/C minivan',
            'Polaris/CFMoto 800cc 2-seater buggy + fuel',
            'Professional guide and support vehicle',
            'Safety gear (helmet, goggles, mask)',
            'Berber tea and mineral water'
        ],
        excluded: [
            'Dinner (available in combo package)'
        ],
        bookingOptions: [
            { name: 'Agafay Buggy 2-Seater Safari (Day Tour)', price: 1200, selected: true },
            { name: 'Sunset Buggy Safari + Camel Ride + Dinner Show', price: 1600 }
        ]
    },

    'medina-guide': {
        id: 'medina-guide',
        title: 'Historical Marrakech Medina Guided Tour & Hidden Souks',
        location: 'Marrakech Old Medina',
        badge: 'HERITAGE',
        badgeClass: 'heritage',
        category: 'Guided Medina Heritage',
        rating: 4.9,
        reviewsCount: 2450,
        basePrice: 550,
        priceUnit: 'DH',
        priceNote: 'per private group',
        duration: '4 Hours (Half Day)',
        groupType: '100% Private Guided Tour',
        languages: 'English, Français, Español, Italiano, Deutsch, العربية',
        pickup: 'Meet at your Riad in the Medina or Jemaa el-Fnaa',
        images: [
            './herophoto/koutoubia-sunrise-marrakech.webp',
            './herophoto/palacio-bahia-marrakech.webp',
            './herophoto/marrakech-souk-spices.webp',
            './herophoto/moroccan-riad-architecture.webp'
        ],
        overview: `Step inside the vibrant thousand-year-old Medina of Marrakech with an official licensed historian guide. Visit architectural marvels including Bahia Palace, Saadian Tombs, and Koutoubia Mosque, and navigate hidden alleys, spice souks, and artisan leather and lantern workshops far away from tourist traps.`,
        highlights: [
            'Official state-licensed local historian guide',
            'Explore the breathtaking 19th-century Bahia Palace with ornate cedarwood ceilings',
            'Visit the 16th-century Saadian Tombs discovered in 1917',
            'Navigate secret souk quarters: spices, lanterns, leather tanners & Berber carpets',
            'Insider tips on authentic shopping without aggressive street vendors'
        ],
        itinerary: [
            { time: '09:00', title: 'Meet Guide at Riad / Jemaa el-Fnaa', desc: 'Brief introduction to the history and dynasty founders of Marrakech.' },
            { time: '09:30', title: 'Koutoubia Mosque & Bahia Palace', desc: 'Marvel at Moorish architecture, serene courtyards, and zellij tilework.' },
            { time: '11:00', title: 'Saadian Tombs & Jewish Mellah', desc: 'Discover hidden royal burial chambers and historic Jewish quarter.' },
            { time: '12:00', title: 'Artisan Souks & Spice Herbalist', desc: 'Visit traditional artisan guilds and learn about Moroccan herbal medicine & argan.' }
        ],
        included: [
            'Official Licensed Tourist Guide for 4 hours',
            'Private customized walking tour at your own pace',
            'Hotel/Riad pickup within the Medina'
        ],
        excluded: [
            'Monument entrance tickets (approx. 70 DH per site)',
            'Tips for guide (optional)'
        ],
        bookingOptions: [
            { name: 'Half-Day Private Guided Tour (4h)', price: 550, selected: true },
            { name: 'Full-Day Comprehensive Tour (8h with lunch break)', price: 900 }
        ]
    },

    'ourika': {
        id: 'ourika',
        title: 'Ourika Valley & High Atlas Berber Villages Day Trip',
        location: 'Ourika Valley & Setti Fatma',
        badge: 'SCENIC ESCAPE',
        badgeClass: 'scenic',
        category: 'Excursions & Day Trips',
        rating: 4.8,
        reviewsCount: 3120,
        basePrice: 350,
        priceUnit: 'DH',
        priceNote: 'per private vehicle',
        duration: '7 Hours',
        groupType: 'Private Vehicle / Small Group',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from your Riad/Hotel in Marrakech (09:00 AM)',
        images: [
            './herophoto/zakariae-daoui-I2YeucCFOmw-unsplash.jpg',
            './herophoto/manoa-angelo-44AfhCEUDzQ-unsplash.jpg',
            './herophoto/zakariae-daoui-3BD1tSJB1R4-unsplash.jpg'
        ],
        overview: `Escape Marrakech into the lush green valleys and roaring streams of the Ourika Valley in the High Atlas Mountains. Visit authentic mud-brick Berber villages clinging to canyon walls, hike up to the famous Setti Fatma 7 waterfalls, drink fresh mint tea in an authentic family home, and relax at a table set right inside the refreshing mountain river.`,
        highlights: [
            'Scenic drive along the winding Ourika River with views of Atlas peaks',
            'Guided hike to the famous Setti Fatma 7 waterfalls',
            'Visit an authentic Berber home and learn about traditional mountain life',
            'Dine with your feet directly in the cool mountain stream',
            'Visit an organic medicinal aromatic garden & Argan cooperative'
        ],
        itinerary: [
            { time: '09:00', title: 'Hotel Pickup in Marrakech', desc: 'Scenic drive through Al Haouz plain into the High Atlas foothills.' },
            { time: '10:30', title: 'Traditional Berber House & Tea', desc: 'Experience Berber family hospitality and mint tea.' },
            { time: '11:45', title: 'Arrival at Setti Fatma & Waterfall Hike', desc: 'Guided nature hike through rock paths to the waterfalls.' },
            { time: '13:30', title: 'Riverside Tagine Lunch', desc: 'Relax at riverside tables overlooking the cascading water.' },
            { time: '16:00', title: 'Return Transfer to Marrakech', desc: 'Arrive back in Marrakech around 17:00.' }
        ],
        included: [
            'Round-trip private air-conditioned vehicle with professional driver',
            'Hotel pickup and drop-off in Marrakech',
            'Visit to Berber family house and mint tea',
            'Local mountain guide in Setti Fatma'
        ],
        excluded: [
            'Lunch and personal drinks',
            'Tips for guide (optional)'
        ],
        bookingOptions: [
            { name: 'Private Minivan (1-6 persons)', price: 350, selected: true },
            { name: 'VIP Mercedes V-Class (1-6 persons)', price: 900 },
            { name: 'Minibus (7-14 persons)', price: 1000 }
        ]
    },

    'ouzoud': {
        id: 'ouzoud',
        title: 'Cascades d\'Ouzoud: Day Trip to Morocco\'s Highest Waterfalls & Boat Ride',
        location: 'Cascades d\'Ouzoud, Grand Atlas',
        badge: 'POPULAR NATURE',
        badgeClass: 'popular',
        category: 'Excursions & Day Trips',
        rating: 4.9,
        reviewsCount: 3890,
        basePrice: 250,
        priceUnit: 'DH',
        priceNote: 'per person / private',
        duration: '9 Hours',
        groupType: 'Small Group / Private',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from your Riad/Hotel in Marrakech (08:00 AM)',
        images: [
            './herophoto/zakariae-daoui-3BD1tSJB1R4-unsplash.jpg',
            './herophoto/zakariae-daoui-I2YeucCFOmw-unsplash.jpg',
            './herophoto/manoa-angelo-44AfhCEUDzQ-unsplash.jpg'
        ],
        overview: `Discover the breathtaking 110-meter Cascades d'Ouzoud, the most stunning natural wonder in Morocco. Hike down through lush olive groves to the base of the roaring falls, take a traditional wooden raft right beneath the spray, watch wild Barbary macaque monkeys in their natural habitat, and enjoy a delicious Berber tagine with views of rainbow mists.`,
        highlights: [
            'Marvel at the 110m 3-tiered falls surrounded by red sandstone cliffs and olive orchards',
            'Guided scenic hike down to the river basin with photo stops',
            'Traditional wooden raft boat cruise directly under the cascading water',
            'Encounter and photograph playful wild Barbary Macaques in the trees',
            'Relax at riverside terraces with authentic Moroccan mint tea and fresh tagines'
        ],
        itinerary: [
            { time: '08:00', title: 'Pickup in Marrakech', desc: 'Depart across the scenic Tadla plains and olive groves towards the Middle Atlas.' },
            { time: '11:00', title: 'Arrival at Ouzoud & Guided Hike', desc: 'Meet your local mountain guide and descend the stone steps through olive groves.' },
            { time: '12:30', title: 'Boat Ride Under the Waterfall', desc: 'Hop aboard the local wooden raft to feel the refreshing mist up close.' },
            { time: '13:30', title: 'Panoramic Riverside Lunch', desc: 'Savor freshly prepared Moroccan salads and tagine overlooking the falls.' },
            { time: '15:00', title: 'Barbary Monkey Encounter', desc: 'Ascend via the monkey trails to observe wild macaques.' },
            { time: '16:30', title: 'Return Transfer to Marrakech', desc: 'Comfortable air-conditioned ride back to your hotel around 19:00.' }
        ],
        included: [
            'Round-trip air-conditioned transport with professional driver',
            'Hotel pickup and drop-off in Marrakech',
            'Certified local mountain guide in Ouzoud',
            'Traditional boat ride at the base of the waterfall'
        ],
        excluded: [
            'Lunch and personal beverages (approx. 100 DH)',
            'Tips for guide and driver (optional)'
        ],
        bookingOptions: [
            { name: 'Shared Small-Group Day Trip', price: 250, selected: true },
            { name: 'Private Minivan Tour (1-6 pax)', price: 950 },
            { name: 'VIP Luxury Mercedes Tour (Private)', price: 1400 }
        ]
    },

    'imlil': {
        id: 'imlil',
        title: 'Imlil & High Atlas Toubkal Valley Hike with Berber Village Lunch',
        location: 'Imlil Valley, Mount Toubkal National Park',
        badge: 'ADVENTURE HIKE',
        badgeClass: 'adventure',
        category: 'Excursions & Day Trips',
        rating: 4.9,
        reviewsCount: 2470,
        basePrice: 380,
        priceUnit: 'DH',
        priceNote: 'per person / private',
        duration: '7 Hours',
        groupType: 'Small Group / Private',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from your Riad/Hotel in Marrakech (08:30 AM)',
        images: [
            './herophoto/atlas-kasbah-landscape.webp',
            './herophoto/zakariae-daoui-I2YeucCFOmw-unsplash.jpg',
            './herophoto/alex-azabache-H0eV-0CRpOE-unsplash.jpg'
        ],
        overview: `Ascend into the rugged heart of the High Atlas Mountains to the alpine village of Imlil, gateway to Mount Toubkal (4,167m - the highest peak in North Africa). Walk through walnut groves and terraced apple orchards, visit centuries-old Berber stone villages, and enjoy a warm home-cooked lunch on a scenic rooftop terrace facing the snow-capped peaks.`,
        highlights: [
            'Explore the stunning alpine village of Imlil and Armed at the foot of Mount Toubkal',
            'Hike through walnut forests, mountain streams, and terraced Berber farmland',
            'Visit an authentic Berber home and learn about centuries-old mountain heritage',
            'Enjoy a traditional 3-course mountain lunch with 360° panoramic Atlas views',
            'Mule ride option available for an authentic, leisurely mountain ascent'
        ],
        itinerary: [
            { time: '08:30', title: 'Pickup in Marrakech', desc: 'Drive through the scenic gorges of Asni with views of Toubkal Massif.' },
            { time: '10:00', title: 'Arrival at Imlil (1,740m)', desc: 'Meet your mountain guide and enjoy welcome Berber mint tea.' },
            { time: '10:30', title: 'Guided Mountain Valley Hike', desc: 'Walk or mule ride up to the village of Armed with waterfalls and mountain vistas.' },
            { time: '13:00', title: 'Traditional Berber Family Lunch', desc: 'Rooftop lunch with fresh chicken tagine, couscous, and seasonal fruits.' },
            { time: '15:00', title: 'Descent & Village Stroll', desc: 'Leisurely walk back to Imlil center through walnut groves.' },
            { time: '16:30', title: 'Return Transfer to Marrakech', desc: 'Arrive back at your Riad around 17:30.' }
        ],
        included: [
            'Private air-conditioned round-trip transport',
            'Professional licensed mountain guide',
            'Traditional 3-course Berber lunch and mint tea',
            'Hotel pickup and drop-off'
        ],
        excluded: [
            'Mule ride rental (optional, 100 DH)',
            'Personal souvenirs and tips'
        ],
        bookingOptions: [
            { name: 'Standard Guided Valley Hike + Lunch', price: 380, selected: true },
            { name: 'Private VIP Minivan & Private Guide + Lunch', price: 850 },
            { name: 'Atlas Hike with Mule Ride Included', price: 500 }
        ]
    },

    'zagora-2days': {
        id: 'zagora-2days',
        title: '2-Day Zagora Desert Tour: Draa Valley, Sunset Camel Trek & Berber Camp',
        location: 'Zagora & Draa Valley Desert',
        badge: 'EXPRESS DESERT',
        badgeClass: 'express',
        category: 'Desert & Agafay',
        rating: 4.8,
        reviewsCount: 3100,
        basePrice: 750,
        priceUnit: 'DH',
        priceNote: 'per person / private',
        duration: '2 Days / 1 Night',
        groupType: 'Small Group / Private',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from your Riad/Hotel in Marrakech (07:00 AM Day 1)',
        images: [
            './herophoto/merzouga-golden-dunes.webp',
            './herophoto/sahara-camel-caravan.webp',
            './herophoto/desert-luxury-experience.webp'
        ],
        overview: `The perfect quick desert escape for travelers short on time. Cross the majestic Tizi n'Tichka pass (2,260m), explore the legendary UNESCO Kasbah Ait Benhaddou, drive along the date palm oasis of Draa Valley, ride camels into the sunset dunes of Zagora, and sleep in a traditional Berber desert camp beneath thousands of desert stars.`,
        highlights: [
            'Cross the dramatic High Atlas Mountains via Tizi n\'Tichka pass',
            'Guided visit to the world-famous Kasbah Ait Benhaddou (Gladiator, Game of Thrones)',
            'Scenic drive through Draa Valley, the longest palm oasis in Morocco',
            'Sunset and sunrise camel trek across the Zagora dunes',
            'Night in a Berber nomad tent with campfire, dinner, and drumming performance'
        ],
        itinerary: [
            { time: 'Day 1 - 07:00', title: 'Marrakech → Ait Benhaddou → Zagora', desc: 'Cross High Atlas, tour Ait Benhaddou, travel through Draa Valley to Zagora dunes for sunset camel trek and camp dinner.' },
            { time: 'Day 2 - 06:30', title: 'Sunrise Camel Ride → Ouarzazate → Marrakech', desc: 'Watch desert sunrise, camel ride back, visit Ouarzazate Kasbah Taourirt, return to Marrakech by 18:00.' }
        ],
        included: [
            'Round-trip transport in air-conditioned minivan or 4x4',
            '1 night accommodation in Zagora Berber desert camp',
            'Dinner on Day 1 and Breakfast on Day 2',
            'Sunset and sunrise camel treks in Zagora dunes',
            'Hotel pickup and drop-off in Marrakech'
        ],
        excluded: [
            'Lunches and beverages on both days',
            'Local Kasbah guides (optional)',
            'Tips for driver and camel guides'
        ],
        bookingOptions: [
            { name: 'Standard Camp + Camel Trek', price: 750, selected: true },
            { name: 'Luxury Desert Camp (Private Ensuite Bathroom)', price: 1250 },
            { name: 'Private 4x4 Tour + Luxury Desert Camp', price: 2100 }
        ]
    },

    'hammam-spa': {
        id: 'hammam-spa',
        title: 'Authentic Moroccan Hammam, Black Soap Scrub & Organic Argan Oil Massage',
        location: 'Medina / Guéliz Luxury SPA, Marrakech',
        badge: 'RELAXATION & WELLNESS',
        badgeClass: 'wellness',
        category: 'Culture & Wellness',
        rating: 5.0,
        reviewsCount: 1980,
        basePrice: 350,
        priceUnit: 'DH',
        priceNote: 'per person',
        duration: '2 Hours',
        groupType: 'Private / Couple Ritual',
        languages: 'English, Français, Español, العربية',
        pickup: 'Optional private hotel pickup available',
        images: [
            './herophoto/palacio-bahia-marrakech.webp',
            './herophoto/architecture-riad-detail.webp',
            './herophoto/koutoubia-sunrise-marrakech.webp'
        ],
        overview: `Indulge in the ultimate Moroccan self-care ritual at a peaceful luxury Riad SPA. Relax in a warm eucalyptus steam room, receive a thorough body exfoliation with traditional black olive soap (Savon Noir) and Kessa glove, followed by an invigorating body wrap with Atlas rhassoul clay, and a deeply relaxing 50-minute massage using 100% pure organic Argan oil.`,
        highlights: [
            'Traditional Moroccan warm steam hammam with aromatic eucalyptus mist',
            'Complete full-body scrub using authentic black olive soap & Kessa glove',
            'Detoxifying Atlas Ghassoul clay and rose water body mask',
            '50-minute relaxing body massage with 100% pure Moroccan Argan oil',
            'Post-treatment relaxation in a serene courtyard with herbal tea and pastries'
        ],
        itinerary: [
            { time: 'Step 1', title: 'Welcome & Herbal Tea Consultation', desc: 'Selection of essential oils and introduction to the Moroccan hammam ritual.' },
            { time: 'Step 2', title: 'Warm Steam & Black Soap Application', desc: 'Opening pores in the steam room followed by traditional Savon Noir.' },
            { time: 'Step 3', title: 'Kessa Body Exfoliation & Rhassoul Wrap', desc: 'Purifying exfoliation and rosewater clay mask for silky smooth skin.' },
            { time: 'Step 4', title: 'Relaxing Argan Oil Massage (50 min)', desc: 'Full-body muscle relaxation massage by certified therapist.' },
            { time: 'Step 5', title: 'Courtyard Relaxation', desc: 'Fresh mint tea, Moroccan sweets, and quiet relaxation in the riad lounge.' }
        ],
        included: [
            'Private hammam cabin with professional attendant (Kessala)',
            'Authentic black olive soap, Kessa scrubbing glove, and Rhassoul clay',
            '50-minute relaxation massage with pure Argan oil',
            'Towel, bathrobe, disposable slippers, and hair care products',
            'Moroccan mint tea and traditional pastries'
        ],
        excluded: [
            'Additional beauty treatments (facial, manicure)',
            'Tips for therapists (optional)'
        ],
        bookingOptions: [
            { name: 'Traditional Hammam & Scrub (45 min)', price: 250 },
            { name: 'Royal Hammam + 50-min Argan Massage (2h)', price: 450, selected: true },
            { name: 'Couples Romantic VIP SPA Package with Private Suite', price: 900 }
        ]
    },

    'cooking-class': {
        id: 'cooking-class',
        title: 'Authentic Moroccan Cooking Class: Souk Shopping & Riad Rooftop Feast',
        location: 'Historic Medina Riad, Marrakech',
        badge: 'CULINARY EXPERIENCE',
        badgeClass: 'culinary',
        category: 'Culture & Wellness',
        rating: 5.0,
        reviewsCount: 1650,
        basePrice: 400,
        priceUnit: 'DH',
        priceNote: 'per person',
        duration: '4 Hours',
        groupType: 'Small Group / Private',
        languages: 'English, Français, Español, العربية',
        pickup: 'Central Medina meeting point or Hotel pickup',
        images: [
            './herophoto/annie-spratt-upJFoyr7BBA-unsplash.jpg',
            './herophoto/alexander-psiuk-BSwK2WkPAAU-unsplash.jpg',
            './herophoto/annie-spratt-zqK3Yq9S8iE-unsplash.jpg'
        ],
        overview: `Unlock the secrets of Moroccan gastronomy in this hands-on masterclass led by a passionate local Dada (traditional chef). Shop for fresh spices, vegetables, and herbs in the bustling souks of the Medina, learn the balance of cumin, saffron, and ras el hanout, cook your own tagine, Moroccan salads, and pastilla, and feast on your delicious creations on a private sunlit rooftop.`,
        highlights: [
            'Guided souk market tour to purchase fresh local ingredients and spices',
            'Master the spice secrets: Ras el Hanout, saffron, ginger, and preserved lemons',
            'Hands-on cooking: Prepare your choice of Tagine (Chicken/Beef/Veg), Zalouk, and Taktouka',
            'Learn the art of traditional Moroccan mint tea pouring ceremony',
            'Dine on your self-made 3-course feast with panoramic Medina rooftop views'
        ],
        itinerary: [
            { time: '09:30 / 15:30', title: 'Meeting & Souk Food Market Tour', desc: 'Walk with your chef through Medina food stalls to buy seasonal vegetables and spices.' },
            { time: '10:30 / 16:30', title: 'Welcome Tea & Spice Masterclass', desc: 'Learn the flavor profiles of Moroccan cuisine in an authentic Riad kitchen.' },
            { time: '11:00 / 17:00', title: 'Hands-On Cooking Workshop', desc: 'Prepare your tagine, cook cooked salads, and bake traditional bread.' },
            { time: '12:30 / 18:30', title: 'Rooftop Feast & Tasting', desc: 'Enjoy your homemade 3-course meal with wine/tea on the riad terrace.' }
        ],
        included: [
            'All food ingredients, spices, and cooking equipment',
            'English/French speaking local culinary chef instructor',
            'Guided food market tour in the historic souks',
            'Full 3-course meal (Salads, Tagine, Dessert, Bread, Tea)',
            'Digital recipe booklet to recreate dishes at home'
        ],
        excluded: [
            'Alcoholic drinks',
            'Personal purchases in the market'
        ],
        bookingOptions: [
            { name: 'Morning Masterclass with Souk Tour (09:30 AM)', price: 400, selected: true },
            { name: 'Afternoon Sunset Cooking Workshop (15:30 PM)', price: 400 },
            { name: 'Private VIP Riad Cooking Class for Family/Couple', price: 750 }
        ]
    },

    'street-food': {
        id: 'street-food',
        title: 'Secret Medina Night Street Food Tasting Tour & Hidden Flavors',
        location: 'Jemaa el-Fna & Old Medina, Marrakech',
        badge: 'NIGHT FOOD TOUR',
        badgeClass: 'night-food',
        category: 'Culture & Wellness',
        rating: 4.9,
        reviewsCount: 2240,
        basePrice: 350,
        priceUnit: 'DH',
        priceNote: 'per person',
        duration: '3.5 Hours',
        groupType: 'Small Group (Max 8)',
        languages: 'English, Français, Español, العربية',
        pickup: 'Meeting at Jemaa el-Fna Square',
        images: [
            './herophoto/koutoubia-sunrise-marrakech.webp',
            './herophoto/alexander-psiuk-BSwK2WkPAAU-unsplash.jpg',
            './herophoto/palacio-bahia-marrakech.webp'
        ],
        overview: `Step off the tourist trail into the vibrant nocturnal soul of Marrakech. Follow a food-loving local guide through hidden alleys to taste slow-roasted Mechoui lamb from underground clay pits, Tanjia Marrakchia, fresh Harira soup, savory pastilla, stuffed Msemmen, homemade sweets, and fresh sugarcane juice at secret stalls frequented only by locals.`,
        highlights: [
            'Over 8+ authentic food tastings across hidden corners of the Medina',
            'Taste authentic Mechoui slow-roasted in centuries-old underground earthen ovens',
            'Discover Tanjia Marrakchia cooked in the ashes of the neighborhood hammam',
            'Savor artisanal Moroccan pastries (Corne de Gazelle, Chebakia, Briouats)',
            'Learn the history and culinary heritage of Jemaa el-Fna from an expert insider'
        ],
        itinerary: [
            { time: '18:00', title: 'Meet at Jemaa el-Fna & Olive Market', desc: 'Taste spicy marinated olives and fresh nuts in the historic olive souk.' },
            { time: '18:45', title: 'Mechoui Alley & Underground Clay Ovens', desc: 'Watch masters unearth tender slow-cooked lamb seasoned only with salt and cumin.' },
            { time: '19:45', title: 'Hidden Street Stalls & Tanjia Tasting', desc: 'Try spiced sausages, Harira, Chebakia, and famous clay-pot Tanjia.' },
            { time: '21:00', title: 'Night Dessert & Traditional Spiced Tea', desc: 'Finish with traditional almond sweets and spiced Khoudenjal tea.' }
        ],
        included: [
            'All food tastings and drinks (8+ different food stops - replaces dinner)',
            'Passionate local food storyteller and licensed guide',
            'Bottled water and Moroccan mint tea'
        ],
        excluded: [
            'Hotel pickup/drop-off (central meeting point)',
            'Tips for vendors and guide'
        ],
        bookingOptions: [
            { name: 'Small-Group Medina Food Tour (18:00)', price: 350, selected: true },
            { name: 'Private Customized Food Tour for Couples/Family', price: 650 }
        ]
    },

    'paragliding': {
        id: 'paragliding',
        title: 'Tandem Paragliding Flight Over High Atlas Mountains & Kik Plateau',
        location: 'Plateau du Kik & Lake Lalla Takerkoust',
        badge: 'ADRENALINE SKY',
        badgeClass: 'adrenaline',
        category: 'Adventure & Sports',
        rating: 5.0,
        reviewsCount: 1420,
        basePrice: 750,
        priceUnit: 'DH',
        priceNote: 'per person',
        duration: '4 Hours (20-25 min flight)',
        groupType: 'Tandem with Certified Instructor',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from your Riad/Hotel in Marrakech',
        images: [
            './herophoto/zakariae-daoui-3BD1tSJB1R4-unsplash.jpg',
            './herophoto/atlas-kasbah-landscape.webp',
            './herophoto/manoa-angelo-44AfhCEUDzQ-unsplash.jpg'
        ],
        overview: `Soar like an eagle above the awe-inspiring High Atlas Mountains and the turquoise waters of Lake Lalla Takerkoust. Fasten into a tandem harness with an internationally certified instructor, launch off the Kik Plateau at 1,400 meters altitude, and enjoy a thrilling 20-25 minute glide with stunning views, complete with HD GoPro action video.`,
        highlights: [
            'Tandem flight with FAI-certified master paragliding pilots with 10+ years experience',
            'Breathtaking aerial launch from the Kik Plateau overlooking snow-capped Atlas peaks',
            '20 to 25 minutes of peaceful gliding with panoramic lake and valley views',
            'High-definition GoPro photos and video package included on SD card',
            'Berber mint tea & snacks at the lakeside landing zone'
        ],
        itinerary: [
            { time: '09:00 / 14:00', title: 'Pickup in Marrakech', desc: 'Scenic 45-minute drive to Lake Lalla Takerkoust and Kik Plateau.' },
            { time: '10:00 / 15:00', title: 'Take-off Briefing & Gear Setup', desc: 'Safety briefing, helmet fitting, and harness security check with instructor.' },
            { time: '10:30 / 15:30', title: 'Tandem Paragliding Flight (20-25 min)', desc: 'Soar through thermals, perform exciting aerial maneuvers or enjoy smooth glide.' },
            { time: '11:30 / 16:30', title: 'Smooth Landing & GoPro Video Transfer', desc: 'Receive your flight photos/videos and enjoy celebratory Berber tea.' },
            { time: '12:30 / 17:30', title: 'Return Transfer to Marrakech', desc: 'Arrive back at your Riad in Marrakech.' }
        ],
        included: [
            'Round-trip private hotel transfer from Marrakech',
            'Tandem paragliding flight with certified pilot',
            'High-definition GoPro video & photo package on your phone',
            'Safety gear (helmet, harness, windbreaker)',
            'Moroccan mint tea celebration at landing'
        ],
        excluded: [
            'Lunch and personal drinks',
            'Tips for pilots (optional)'
        ],
        bookingOptions: [
            { name: 'Standard Tandem Flight + GoPro Video (20 min)', price: 750, selected: true },
            { name: 'VIP Combo: Paragliding + Lakeside Lunch & Camel Trek', price: 1100 }
        ]
    },

    'jetski-lake': {
        id: 'jetski-lake',
        title: 'Jet Ski & Water Sports Safari at Lake Lalla Takerkoust (Atlas Foothills)',
        location: 'Lake Lalla Takerkoust (35 min from Marrakech)',
        badge: 'WATER SPORTS',
        badgeClass: 'water',
        category: 'Adventure & Sports',
        rating: 4.8,
        reviewsCount: 1150,
        basePrice: 600,
        priceUnit: 'DH',
        priceNote: 'per jet ski (1-2 persons)',
        duration: '3.5 Hours',
        groupType: 'Private / Small Group',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from your Riad/Hotel in Marrakech',
        images: [
            './herophoto/zakariae-daoui-3BD1tSJB1R4-unsplash.jpg',
            './herophoto/taghazout-agadir-coast.webp',
            './herophoto/alex-azabache-H0eV-0CRpOE-unsplash.jpg'
        ],
        overview: `Cool off from the Marrakech heat with an exhilarating Jet Ski session on the expansive waters of Lake Lalla Takerkoust. Ride powerful Yamaha WaveRunners surrounded by rolling desert hills and the majestic backdrop of the High Atlas mountains, with options for wakeboarding, paddleboarding, and a relaxing lakeside lunch.`,
        highlights: [
            'High-speed Jet Ski rental (15, 30, or 60 minutes) on calm open lake waters',
            'Modern 2-seater Yamaha WaveRunner with life jackets and safety instructor',
            'Stunning views of the High Atlas Mountains mirrored on the water',
            'Stand-up paddleboard (SUP) and kayak options available',
            'Relaxation at chic lakeside beach clubs with infinity pool and lounge'
        ],
        itinerary: [
            { time: '10:00 / 14:30', title: 'Pickup in Marrakech', desc: 'Direct 35-minute transfer to the private nautical club at Lake Takerkoust.' },
            { time: '10:45 / 15:15', title: 'Safety Briefing & Equipment', desc: 'Life vest fitting, jet ski controls demonstration and water rules.' },
            { time: '11:00 / 15:30', title: 'Jet Ski Riding Session', desc: 'Enjoy high-speed carving and exploring the lake’s scenic coves.' },
            { time: '12:00 / 16:30', title: 'Lakeside Club Relaxation', desc: 'Optional lunch, drinks, or pool relaxation at the nautical club.' },
            { time: '13:30 / 18:00', title: 'Return Transfer to Marrakech', desc: 'Transport back to your hotel.' }
        ],
        included: [
            'Round-trip private hotel transfer from Marrakech',
            'Jet Ski rental (fuel, insurance, safety equipment)',
            'Certified water sports instructor',
            'Life vests and locker facilities'
        ],
        excluded: [
            'Food and drinks at the beach club',
            'Towels (available for rent)'
        ],
        bookingOptions: [
            { name: '15-Minute Jet Ski Express (1 or 2 pax)', price: 400 },
            { name: '30-Minute Jet Ski Safari (1 or 2 pax)', price: 650, selected: true },
            { name: '60-Minute Jet Ski Grand Tour + Pool Pass', price: 1100 }
        ]
    },

    'vip-fasttrack': {
        id: 'vip-fasttrack',
        title: 'VIP Fast-Track & Meet & Greet at Marrakech Menara Airport (RAK)',
        location: 'Marrakech Menara Airport (Arrival & Departure)',
        badge: 'VIP CONCIERGE',
        badgeClass: 'vip',
        category: 'VIP Concierge',
        rating: 5.0,
        reviewsCount: 1890,
        basePrice: 450,
        priceUnit: 'DH',
        priceNote: 'per person / group',
        duration: 'Express Arrival / Departure',
        groupType: 'Private VIP Service',
        languages: 'English, Français, Español, العربية, Deutsch',
        pickup: 'Personal greeting at the aircraft gate / terminal exit',
        images: [
            './herophoto/koutoubia-sunrise-marrakech.webp',
            './herophoto/palacio-bahia-marrakech.webp',
            './herophoto/alex-azabache-H0eV-0CRpOE-unsplash.jpg'
        ],
        overview: `Breeze through Marrakech Menara Airport in ultimate comfort and privacy. Skip all passport queues and security lines with a dedicated VIP airport officer who meets you at the aerobridge, escorts you through the expedited VIP immigration lane, assists with luggage retrieval, and guides you directly to your awaiting luxury private transfer.`,
        highlights: [
            'Personal greeting by dedicated VIP host holding a personalized name sign at the gate',
            'Priority expedited fast-track clearance through Passport Control & Customs',
            'Full luggage porter service from baggage claim carousel to your vehicle',
            'Departure Fast-Track: VIP Lounge access with complimentary food, drinks, and high-speed WiFi',
            'Seamless private vehicle connection directly to your Marrakech Riad or Villa'
        ],
        itinerary: [
            { time: 'Arrival', title: 'Gate Meet & Greet', desc: 'Host welcomes you right as you step off the airplane.' },
            { time: 'Expedited Pass', title: 'VIP Passport Clearance', desc: 'Bypass all standard queues via the dedicated VIP priority counter.' },
            { time: 'Luggage & Exit', title: 'Baggage Porter & Private Car Handover', desc: 'Porter collects all bags and escorts you directly into your air-conditioned vehicle.' }
        ],
        included: [
            'Dedicated personal VIP escort inside Marrakech airport terminal',
            'Fast-track priority passport control and security line pass',
            'Porter luggage assistance from carousel to vehicle',
            'Assistance with local SIM card & currency exchange if desired'
        ],
        excluded: [
            'Airport private transfer vehicle (can be bundled in options)',
            'Excess baggage fees'
        ],
        bookingOptions: [
            { name: 'Arrival Fast-Track Service (per person)', price: 450, selected: true },
            { name: 'Arrival Fast-Track + Luxury Mercedes V-Class Transfer', price: 900 },
            { name: 'Departure Fast-Track + VIP Pearl Lounge Access', price: 650 },
            { name: 'Round-Trip VIP Fast-Track (Arrival & Departure)', price: 1000 }
        ]
    },

    'private-chef': {
        id: 'private-chef',
        title: 'Private Master Chef Service in Villa & Riad (Gourmet Moroccan & World Cuisine)',
        location: 'Your Private Villa or Riad in Marrakech',
        badge: 'EXCLUSIVE DINING',
        badgeClass: 'vip',
        category: 'VIP Concierge',
        rating: 5.0,
        reviewsCount: 920,
        basePrice: 850,
        priceUnit: 'DH',
        priceNote: 'per service (up to 8 guests)',
        duration: 'Breakfast, Lunch or Dinner Service',
        groupType: 'Exclusive Private Villa Service',
        languages: 'English, Français, Español, العربية',
        pickup: 'Service provided directly at your accommodation',
        images: [
            './herophoto/annie-spratt-upJFoyr7BBA-unsplash.jpg',
            './herophoto/annie-spratt-zqK3Yq9S8iE-unsplash.jpg',
            './herophoto/alexander-psiuk-BSwK2WkPAAU-unsplash.jpg'
        ],
        overview: `Elevate your Marrakech holiday with a private gourmet chef dedicated to your villa or riad. Our experienced private chefs handle grocery shopping for the freshest local ingredients, curate custom menus (royal Moroccan feasts, Mediterranean grills, or dietary specialties), provide immaculate table service, and leave the kitchen spotless.`,
        highlights: [
            'Professional private chef service customized to your dietary preferences (Halal, Vegan, Gluten-free)',
            'Complete grocery sourcing of premium meats, fresh seafood, and organic produce',
            'Royal Moroccan menus (Pastilla, Lamb Mechoui, Seabass Chermoula, Royal Couscous)',
            'Full table setup, elegant course-by-course presentation, and kitchen cleanup',
            'Available for single memorable dinners or full-stay villa catering'
        ],
        itinerary: [
            { time: 'Pre-Service', title: 'Menu Consultation & Market Sourcing', desc: 'Custom menu creation and purchase of premium ingredients on the day.' },
            { time: '2h Before', title: 'Villa Arrival & Kitchen Prep', desc: 'Chef and kitchen assistant arrive to prepare dishes from scratch.' },
            { time: 'Meal Time', title: 'Gourmet Table Service', desc: 'Elegantly plated multi-course dining experience served at your villa table.' },
            { time: 'Post-Meal', title: 'Kitchen Cleaning & Breakdown', desc: 'Dishes washed, kitchen cleaned and sanitized.' }
        ],
        included: [
            'Professional private chef and kitchen assistant labor',
            'Pre-event consultation and customized menu planning',
            'Preparation, cooking, table service, and full kitchen cleanup'
        ],
        excluded: [
            'Cost of fresh food ingredients (billed at exact market receipt cost)',
            'Alcoholic beverages and wine service'
        ],
        bookingOptions: [
            { name: 'Private Gourmet Dinner (Up to 6 guests)', price: 850, selected: true },
            { name: 'Private Dinner (7 to 12 guests)', price: 1200 },
            { name: 'Full-Day Villa Chef (Breakfast, Lunch & Dinner)', price: 1600 }
        ]
    },

    'agafay-romantic-dinner': {
        id: 'agafay-romantic-dinner',
        title: 'Exclusive Romantic Candlelit Dinner & Private Celebration in Agafay Desert',
        location: 'Agafay Desert Luxury Nomadic Camp',
        badge: 'ROMANCE & EVENTS',
        badgeClass: 'romance',
        category: 'VIP Concierge',
        rating: 5.0,
        reviewsCount: 1380,
        basePrice: 950,
        priceUnit: 'DH',
        priceNote: 'per couple / private',
        duration: '5 Hours (Evening)',
        groupType: 'Exclusive Private Setup for Couples or Groups',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included in private Mercedes vehicle from your hotel',
        images: [
            './herophoto/agafay-scarabeo-camp.webp',
            './herophoto/berber-show-agafay.webp',
            './herophoto/desert-luxury-experience.webp'
        ],
        overview: `Create an unforgettable memory under the desert stars of Agafay. Perfect for romantic proposals, anniversaries, or birthdays, this bespoke experience features private transportation in a luxury Mercedes, an isolated candlelit table on a desert dune surrounded by Moroccan lanterns, a 4-course gourmet dinner, private campfire, and an acoustic Oud player.`,
        highlights: [
            'Private candlelit dinner table set on a secluded desert dune with hundreds of lanterns',
            'Round-trip private transfer in luxury Mercedes-Benz with dedicated chauffeur',
            'Welcome sparkling cocktail & sunset canapés overlooking the High Atlas Mountains',
            '4-course gourmet Moroccan dinner with private waiter service',
            'Private campfire, stargazing telescope, and optional live acoustic Oud or Berber music'
        ],
        itinerary: [
            { time: '17:00', title: 'Luxury Hotel Pickup in Marrakech', desc: 'Chauffeured drive to the stone desert of Agafay.' },
            { time: '18:00', title: 'Sunset Cocktails & Nomad Lounge', desc: 'Watch golden hour over the dunes with welcome drinks and Moroccan pastries.' },
            { time: '19:30', title: 'Private Candlelit 4-Course Dinner', desc: 'Enjoy an intimate dinner prepared by top desert chefs surrounded by lanterns.' },
            { time: '21:00', title: 'Campfire, Acoustic Music & Stargazing', desc: 'Relax around your private fire pit with warm blankets and desert tranquility.' },
            { time: '22:30', title: 'Private Chauffeur Return to Marrakech', desc: 'Smooth return transfer to your accommodation.' }
        ],
        included: [
            'Private round-trip transfer in luxury Mercedes-Benz',
            'Exclusive isolated candlelit dune setup with lanterns and carpets',
            'Gourmet 4-course Moroccan dinner and welcome mocktails',
            'Private dedicated waiter and campfire',
            'Personalized celebration cake for birthdays/anniversaries'
        ],
        excluded: [
            'Alcoholic champagne/wine (available upon advance request)',
            'Professional photographer/videographer add-on'
        ],
        bookingOptions: [
            { name: 'Romantic Couple Dune Dinner + Private Mercedes', price: 950, selected: true },
            { name: 'VIP Proposal Package (Flowers, Champagne, Live Oud)', price: 1600 },
            { name: 'Private Group Birthday/Event Setup (4-10 pax)', price: 2400 }
        ]
    },

    'majorelle-ysl': {
        id: 'majorelle-ysl',
        title: 'Jardin Majorelle, Yves Saint Laurent Museum & Berber Museum Skip-The-Line Tour',
        location: 'Marrakech (Guéliz / Majorelle)',
        badge: 'TOP CULTURAL PICK',
        badgeClass: 'culture',
        category: 'Culture & Wellness',
        rating: 5.0,
        reviewsCount: 4190,
        basePrice: 450,
        priceUnit: 'DH',
        priceNote: 'per person with skip-the-line tickets',
        duration: '3.5 Hours',
        groupType: 'Private or Small Group',
        languages: 'English, Français, Español, العربية, Italiano',
        pickup: 'Included from your Riad or Hotel in Marrakech',
        images: [
            './herophoto/palacio-bahia-marrakech.webp',
            './herophoto/koutoubia-sunrise-marrakech.webp',
            './herophoto/moroccan-riad-architecture.webp'
        ],
        overview: `Bypass the lengthy queues with fast-track admission to Marrakech's iconic Jardin Majorelle, the Pierre Bergé Museum of Berber Arts, and the world-renowned Yves Saint Laurent Museum. Stroll through cobalt-blue architectural paths bordered by exotic cacti, bamboo groves, and lily ponds while discovering the haute couture legacy and indigenous Berber jewelry collections.`,
        highlights: [
            'Guaranteed skip-the-line priority admission tickets to all 3 sites',
            'Explore Jacques Majorelle\'s vibrant botanical sanctuary with over 300 plant species',
            'Discover Yves Saint Laurent\'s iconic runway designs and love for Morocco',
            'Admire rare tribal jewelry and textiles at the Pierre Bergé Museum of Berber Arts',
            'Round-trip private air-conditioned transport with professional guide'
        ],
        itinerary: [
            { time: '09:30', title: 'Hotel Pickup', desc: 'Pick up in comfortable private vehicle.' },
            { time: '10:00', title: 'Jardin Majorelle Fast-Track Entry', desc: 'Guided stroll through the iconic botanical gardens and cobalt-blue villa.' },
            { time: '11:15', title: 'Pierre Bergé Museum of Berber Arts', desc: 'Explore rare indigenous artifacts, clothing, and nomadic accessories.' },
            { time: '12:00', title: 'Yves Saint Laurent Museum (mYSLm)', desc: 'Immerse in rotating haute-couture fashion collections and photography archives.' },
            { time: '13:00', title: 'Return Transfer', desc: 'Drop-off at your hotel or Jemaa el-Fna square.' }
        ],
        included: [
            'All entrance fees & priority skip-the-line tickets',
            'Private round-trip hotel transfer with A/C',
            'Licensed art & history guide',
            'Bottled mineral water'
        ],
        excluded: [
            'Café Majorelle personal purchases',
            'Gratuities'
        ],
        bookingOptions: [
            { name: 'Standard Skip-The-Line + Private Guide & Transfer', price: 450, selected: true },
            { name: 'VIP Private Tour with Private Mercedes Transfer', price: 750 }
        ]
    },

    'sidecar-vintage': {
        id: 'sidecar-vintage',
        title: 'Marrakech Vintage Sidecar Ride: Secret Medina Alleys & Palm Groves',
        location: 'Marrakech Medina & Palmeraie',
        badge: 'UNIQUE EXPERIENCE',
        badgeClass: 'unique',
        category: 'Culture & Wellness',
        rating: 5.0,
        reviewsCount: 1720,
        basePrice: 890,
        priceUnit: 'DH',
        priceNote: 'per vintage sidecar (up to 2 persons)',
        duration: '2.5 Hours',
        groupType: 'Private Vintage Sidecar Ride',
        languages: 'English, Français',
        pickup: 'Direct pickup from your Hotel or Riad',
        images: [
            './herophoto/koutoubia-marrakech-palm.webp',
            './herophoto/ignacio-ceballos-eP94dHUaY1U-unsplash.jpg',
            './herophoto/y-k-MNxFb17V6vk-unsplash.jpg'
        ],
        overview: `Hop into an authentic retro 1950s sidecar motorcycle for the coolest, most photogenic tour of Marrakech! Your local insider rider takes you through ancient ramparts, off-the-beaten-path artisan souks, hidden flea markets, French Art-Deco Guéliz, and peaceful oasis trails across the Palmeraie.`,
        highlights: [
            'Cruise in a restored vintage sidecar with retro goggles and leather helmets',
            'Navigate hidden Medina alleyways inaccessible to ordinary tour buses',
            'Explore the colonial 1930s Art Deco architecture of Guéliz and Hivernage',
            'Stroll through ancient palm oases and tranquil clay villages',
            'Complimentary Moroccan mint tea stop in a secret traditional café'
        ],
        itinerary: [
            { time: '10:00 / 15:30', title: 'Sidecar Meeting & Briefing', desc: 'Meet your pilot and gear up with vintage helmets and goggles.' },
            { time: '10:20', title: 'Secret Medina & Ancient Ramparts', desc: 'Zip past ancient clay city walls and artisan quarters.' },
            { time: '11:15', title: 'French Guéliz & Art Deco Quarter', desc: 'Discover Marrakech\'s modern history and trendy backstreets.' },
            { time: '11:45', title: 'Palmeraie Desert Trails & Tea', desc: 'Off-road palm grove ride with mint tea in an authentic spot.' },
            { time: '12:30', title: 'Hotel Drop-off', desc: 'Drop-off back at your accommodation in style.' }
        ],
        included: [
            'Private vintage sidecar with professional local driver/guide',
            'Retro helmets, goggles, and rainwear if needed',
            'Mint tea & Moroccan pastries stop',
            'Hotel pickup & drop-off'
        ],
        excluded: [
            'Personal souvenirs and tips'
        ],
        bookingOptions: [
            { name: '2.5-Hour Medina & Palmeraie Sidecar Ride', price: 890, selected: true },
            { name: '4-Hour Extended Desert Oasis & Sunset Sidecar Ride', price: 1400 }
        ]
    },

    'agafay-glamping': {
        id: 'agafay-glamping',
        title: 'Overnight Luxury Glamping in Agafay Desert (Royal Dome with Heated Pool & Stargazing)',
        location: 'Agafay Desert Luxury Nomadic Camp',
        badge: 'LUXURY STAY',
        badgeClass: 'luxury',
        category: 'Desert & Sahara',
        rating: 5.0,
        reviewsCount: 2840,
        basePrice: 1800,
        priceUnit: 'DH',
        priceNote: 'per dome / night (half-board for 2 persons)',
        duration: '2 Days / 1 Night',
        groupType: 'Private Luxury Dome or Tent',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included round-trip in private VIP Mercedes',
        images: [
            './herophoto/desert-luxury-experience.webp',
            './herophoto/agafay-scarabeo-camp.webp',
            './herophoto/berber-show-agafay.webp'
        ],
        overview: `Escape the bustle of the city and spend a magical night in the Agafay Desert. Sleep in a 5-star heated luxury geodesic dome or nomadic tent featuring an en-suite marble bathroom, private panoramic terrace, infinity swimming pool facing the Atlas mountains, a gourmet 4-course dinner under the stars, Berber campfire with live gnawa music, and laser-guided stargazing.`,
        highlights: [
            '1 night in a luxury panoramic dome with private bathroom & king-size bed',
            'Access to infinity swimming pool overlooking the Agafay moonscape',
            'Sunset camel ride with traditional Cheche scarf attire',
            '4-course gourmet dinner by candlelight and Berber fire performance',
            'Nighttime stargazing session with high-powered astronomical telescope',
            'Full gourmet Berber breakfast served on your private terrace'
        ],
        itinerary: [
            { time: 'Day 1 - 15:00', title: 'VIP Pickup & Arrival', desc: 'Chauffeured Mercedes transfer to Agafay desert camp with welcome mint tea & dates.' },
            { time: 'Day 1 - 17:30', title: 'Sunset Camel Ride & Poolside Lounge', desc: 'Golden hour camel trek across the rocky dunes followed by poolside chill.' },
            { time: 'Day 1 - 19:30', title: 'Gourmet Dinner, Campfire & Show', desc: 'Exquisite candlelit dinner, fire-eaters, Berber Gnawa melodies, and stargazing.' },
            { time: 'Day 2 - 08:30', title: 'Sunrise Breakfast on Private Terrace', desc: 'Freshly baked breads, amlou, fresh juices, and organic mountain eggs.' },
            { time: 'Day 2 - 11:30', title: 'Check-out & Return Transfer', desc: 'Relaxed return transfer to Marrakech.' }
        ],
        included: [
            '1 night in Luxury Royal Dome / Tent with private bathroom & A/C / heating',
            'Round-trip private VIP Mercedes transfer from Marrakech',
            'Sunset camel trek',
            '4-course gourmet dinner & full breakfast',
            'Campfire, live music show & stargazing'
        ],
        excluded: [
            'Alcoholic beverages (available at camp lounge bar)',
            'Quad / Buggy safari add-on'
        ],
        bookingOptions: [
            { name: 'Luxury Glamping Dome (2 Persons) - Half Board', price: 1800, selected: true },
            { name: 'VIP Pool-Front Suite Dome with Quad Biking Included', price: 2600 }
        ]
    },

    'merzouga-quad-dunes': {
        id: 'merzouga-quad-dunes',
        title: 'Merzouga Extreme Erg Chebbi High Dunes Quad Safari & Sandboarding',
        location: 'Erg Chebbi (Merzouga Sahara)',
        badge: 'EXTREME ADVENTURE',
        badgeClass: 'extreme',
        category: 'Adventure & Sports',
        rating: 4.9,
        reviewsCount: 1650,
        basePrice: 550,
        priceUnit: 'DH',
        priceNote: 'per person / 2 hours quad',
        duration: '2 Hours',
        groupType: 'Guided Quad Safari',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from any Hotel or Camp in Merzouga / Hassilabied',
        images: [
            './herophoto/merzouga-golden-dunes.webp',
            './herophoto/tour-3-days-marrakech-desert.webp',
            './herophoto/sergey-pesterev-9-5-WYEBDz0-unsplash.jpg'
        ],
        overview: `Conquer the monumental 150-meter-high golden sand dunes of Erg Chebbi on powerful Yamaha quads. Ride across endless Saharan ridges, carve down towering sand crests, try sandboarding down golden slopes, and pause for sweet Moroccan tea with a nomad family deep inside the desert.`,
        highlights: [
            '2 hours of high-octane quad biking on the tallest dunes in Morocco',
            'Top-tier Yamaha/Can-Am quads with safety helmets and sand goggles',
            'Professional Sahara desert rider guide leading the safest & most thrilling lines',
            'Sandboarding session down steep golden dune faces',
            'Berber mint tea stop in a traditional nomad tent'
        ],
        itinerary: [
            { time: '00:00', title: 'Briefing & Safety Test', desc: 'Equipment fitting and quad controls demonstration.' },
            { time: '00:30', title: 'Crossing the Outer Dunes', desc: 'Warm-up riding through desert tracks and small dune crests.' },
            { time: '01:00', title: 'High Dune Ascent & Sandboarding', desc: 'Climb to the crest of Erg Chebbi for panoramic 360° Sahara views and sandboarding.' },
            { time: '01:45', title: 'Nomad Oasis & Tea', desc: 'Relax with desert nomads over traditional mint tea.' },
            { time: '02:00', title: 'Return Ride to Base', desc: 'Thrilling descent ride back to starting base.' }
        ],
        included: [
            'Automatic quad rental (Yamaha / Polaris)',
            'Safety helmet, goggles, and gloves',
            'Expert desert guide',
            'Sandboard rental',
            'Fuel and bottled water'
        ],
        excluded: [
            'Personal travel insurance',
            'Long-distance transfer from Marrakech (can be booked with 3-Day Sahara package)'
        ],
        bookingOptions: [
            { name: '1 Quad Single Rider (2 Hours)', price: 550, selected: true },
            { name: '1 Quad Double Rider (Driver + Passenger)', price: 750 },
            { name: '2-Seater High-Power Buggy (2 Hours)', price: 1100 }
        ]
    },

    'morocco-imperial-4days': {
        id: 'morocco-imperial-4days',
        title: '4-Day Grand Morocco Imperial Cities & Blue Chefchaouen Tour',
        location: 'Marrakech → Casablanca → Rabat → Fes → Chefchaouen',
        badge: 'GRAND CIRCUIT',
        badgeClass: 'circuit',
        category: 'Excursions & Day Trips',
        rating: 5.0,
        reviewsCount: 2150,
        basePrice: 4800,
        priceUnit: 'DH',
        priceNote: 'per person / private tour',
        duration: '4 Days / 3 Nights',
        groupType: 'Private VIP Circuit',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from any Hotel or Airport in Marrakech / Casablanca',
        images: [
            './herophoto/morocco-grand-tour-10days.webp',
            './herophoto/moroccan-riad-architecture.webp',
            './herophoto/hassan-ii-casablanca.webp'
        ],
        overview: `Embark on the definitive cultural expedition across Morocco's four Imperial capitals and the world-famous blue city of Chefchaouen. Marvel at the oceanfront grandeur of Casablanca's Hassan II Mosque, the royal Mausoleum of Mohammed V in Rabat, the UNESCO-listed Medina and tanneries of Fes, Roman ruins of Volubilis, and the enchanting blue-washed streets of the Rif mountains.`,
        highlights: [
            'Visit the monumental Hassan II Mosque right over the Atlantic ocean in Casablanca',
            'Explore the Kasbah of the Udayas and Hassan Tower in the capital Rabat',
            'Full guided day tour of the ancient Medina of Fes, Chouara Tanneries & Al-Qarawiyyin',
            'Walk through the UNESCO Roman ruins of Volubilis and holy Moulay Idriss',
            'Free time and photo tour in the world-famous blue pearl city Chefchaouen',
            'Private luxury Mercedes transport with dedicated multilingual driver throughout'
        ],
        itinerary: [
            { time: 'Day 1', title: 'Marrakech → Casablanca → Rabat', desc: 'Visit Hassan II Mosque, seaside Corniche, and royal monuments of Rabat. Overnight in Rabat.' },
            { time: 'Day 2', title: 'Rabat → Volubilis → Meknes → Fes', desc: 'Explore Roman mosaics at Volubilis, Bab Mansour in Meknes, and arrive in mystical Fes.' },
            { time: 'Day 3', title: 'Full Day Guided Tour of Fes Medina', desc: 'Guided immersion in Medina souks, copper artisans, tanneries, and historic madrasas.' },
            { time: 'Day 4', title: 'Fes → Chefchaouen Blue City → Return', desc: 'Discover the blue alleys of Chefchaouen, panoramic viewpoints, and return transfer.' }
        ],
        included: [
            '4 days private luxury Mercedes-Benz transportation with dedicated driver & fuel',
            '3 nights in authentic 4-star boutique Riads with breakfast',
            'Official licensed local guides in Fes, Rabat, and Volubilis',
            'All monument entrance fees mentioned in itinerary',
            '24/7 concierge assistance'
        ],
        excluded: [
            'Lunches and evening dinners',
            'Personal shopping & tips'
        ],
        bookingOptions: [
            { name: '4-Day Private Circuit with 4* Boutique Riads (Price for 2 pax)', price: 4800, selected: true },
            { name: '5-Star Luxury Palace Riads Upgrade', price: 7200 }
        ]
    },

    'taghazout-surf': {
        id: 'taghazout-surf',
        title: 'Taghazout & Paradise Valley Surf & Coastal Day Trip from Marrakech',
        location: 'Taghazout & Paradise Valley (Agadir Coast)',
        badge: 'SURF & NATURE',
        badgeClass: 'coastal',
        category: 'Adventure & Sports',
        rating: 4.9,
        reviewsCount: 1480,
        basePrice: 750,
        priceUnit: 'DH',
        priceNote: 'per person / all-inclusive',
        duration: '11 Hours',
        groupType: 'Small Group or Private Van',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from your Hotel in Marrakech (07:30 AM)',
        images: [
            './herophoto/taghazout-agadir-coast.webp',
            './herophoto/oussama-abouchatir-PcPoCsFj4mQ-unsplash.jpg',
            './herophoto/zakariae-daoui-3BD1tSJB1R4-unsplash.jpg'
        ],
        overview: `Experience Morocco's premier Atlantic surf haven and the lush emerald canyon pools of Paradise Valley in a single action-packed day trip. Swim in natural freshwater rock pools, cliff jump, enjoy a seaside fresh grilled fish lunch, and hit the world-famous waves of Taghazout with a certified surf instructor and all equipment provided.`,
        highlights: [
            'Hike through the palm-filled gorges and natural rock pools of Paradise Valley',
            'Swim, cliff jump, and relax in crystal-clear mountain water',
            '2-hour surf lesson in Taghazout / Anchor Point with certified ISA instructor',
            'Complete surf equipment provided (wetsuit + surfboard for your skill level)',
            'Fresh seaside seafood lunch overlooking the Atlantic ocean',
            'Visit an organic Argan oil women\'s cooperative in the Imouzzer hills'
        ],
        itinerary: [
            { time: '07:30', title: 'Early Hotel Pickup in Marrakech', desc: 'Scenic highway drive through the Argan tree valley towards the coast.' },
            { time: '10:30', title: 'Paradise Valley Hike & Swimming', desc: 'Guided nature walk to natural limestone pools and swimming.' },
            { time: '13:00', title: 'Fresh Grilled Seafood Lunch in Taghazout', desc: 'Oceanfront lunch in the vibrant bohemian village of Taghazout.' },
            { time: '14:30', title: 'Taghazout Surf Lesson & Free Surf Session', desc: 'Learn wave fundamentals or catch Atlantic swells with professional coaching.' },
            { time: '17:00', title: 'Sunset Return to Marrakech', desc: 'Comfortable transfer back, arriving in Marrakech around 20:00.' }
        ],
        included: [
            'Round-trip private air-conditioned vehicle with professional driver',
            'Certified surf coach + surfboard + wetsuit rental',
            'Guided hike in Paradise Valley',
            'Seafood lunch in Taghazout',
            'Hotel pickup and drop-off'
        ],
        excluded: [
            'Personal drinks & tips'
        ],
        bookingOptions: [
            { name: 'Complete Day Trip (Paradise Valley + Surf Lesson + Lunch)', price: 750, selected: true },
            { name: 'VIP Private Surf Van for Group / Family (Up to 6 pax)', price: 2900 }
        ]
    },

    'helicopter-marrakech': {
        id: 'helicopter-marrakech',
        title: 'VIP Panoramic Helicopter Flight Over Marrakech, Agafay & Atlas Peaks',
        location: 'Marrakech Helipad (Menara Sky)',
        badge: 'ULTRA LUXURY VIP',
        badgeClass: 'vip',
        category: 'VIP Concierge',
        rating: 5.0,
        reviewsCount: 620,
        basePrice: 3200,
        priceUnit: 'DH',
        priceNote: 'per passenger / scenic flight',
        duration: '1.5 Hours (30 Min Flight)',
        groupType: 'Private Helicopter Charter (Up to 5 Passengers)',
        languages: 'English, Français, العربية',
        pickup: 'Private Mercedes Maybach or V-Class transfer to helipad',
        images: [
            './herophoto/koutoubia-sunrise-marrakech.webp',
            './herophoto/gabriele-stravinskaite-gStG3XkIXpc-unsplash.jpg',
            './herophoto/agafay-scarabeo-camp.webp'
        ],
        overview: `Soar high above the Red City in an exclusive turbine helicopter for breathtaking aerial vistas. Gaze upon the sprawling Medina ramparts, Koutoubia minaret, Palmeraie luxury estates, the stone dunes of Agafay, and the snow-capped summit of Mount Toubkal from the sky with champagne service.`,
        highlights: [
            '30 minutes of exhilarating scenic flight time in an Airbus/Bell helicopter',
            'Unrivaled aerial views of Marrakech Medina, Royal Mansour gardens, and Palmeraie',
            'Fly over the moon-like canyon ridges of Agafay Desert and Lake Takerkoust',
            'Views of snow-dusted High Atlas peaks and Berber ridge villages',
            'VIP Mercedes-Benz chauffeur transfer to/from the private helipad terminal',
            'Complimentary welcome champagne or mocktail in the VIP lounge'
        ],
        itinerary: [
            { time: '00:00', title: 'VIP Mercedes Chauffeur Pickup', desc: 'Direct pickup from your villa, palace, or hotel.' },
            { time: '00:20', title: 'VIP Helipad Welcome & Briefing', desc: 'Check-in at the private aviation lounge with welcome refreshments.' },
            { time: '00:40', title: 'Panoramic Helicopter Takeoff', desc: '30 minutes of scenic flight over Marrakech, Agafay, and the Atlas foothills.' },
            { time: '01:15', title: 'Landing & Photo Session', desc: 'Souvenir aerial photos in front of the aircraft.' },
            { time: '01:30', title: 'Chauffeured Return Transfer', desc: 'Smooth return to your hotel.' }
        ],
        included: [
            '30-minute private/shared helicopter scenic flight',
            'Licensed commercial captain and air headsets with commentary',
            'VIP airport lounge access with welcome drinks',
            'Round-trip luxury Mercedes chauffeur transfer'
        ],
        excluded: [
            'Airport security tax (included in final dossier)'
        ],
        bookingOptions: [
            { name: 'Shared Helicopter Flight (Per Seat)', price: 3200, selected: true },
            { name: 'Exclusive Private Helicopter Charter (Up to 5 Passengers)', price: 14000 }
        ]
    },

    'private-chauffeur-daily': {
        id: 'private-chauffeur-daily',
        title: 'Full-Day Private Chauffeur & Mercedes V-Class / S-Class at Disposal',
        location: 'Marrakech & Surrounding Regions',
        badge: 'VIP CONCIERGE',
        badgeClass: 'vip',
        category: 'VIP Concierge',
        rating: 5.0,
        reviewsCount: 1890,
        basePrice: 1200,
        priceUnit: 'DH',
        priceNote: 'per day (8 hours dedicated service)',
        duration: '8 to 12 Hours',
        groupType: 'Exclusive Dedicated Luxury Vehicle & Chauffeur',
        languages: 'English, Français, Español, العربية',
        pickup: 'Anywhere in Marrakech & surrounding villas at your chosen time',
        images: [
            './herophoto/morocco-tailor-made-tour.webp',
            './herophoto/moroccan-riad-architecture.webp',
            './herophoto/palacio-bahia-marrakech.webp'
        ],
        overview: `Enjoy ultimate comfort, prestige, and flexibility with a dedicated private multilingual chauffeur and the latest-generation Mercedes-Benz vehicle at your disposal all day long. Perfect for VIP business meetings, luxury boutique shopping in Guéliz, palace dining in Palmeraie, or exploring the High Atlas foothills on your own schedule.`,
        highlights: [
            'Brand-new luxury Mercedes-Benz (V-Class VIP, E-Class, or S-Class)',
            'Impeccably dressed, discreet, and bilingual professional chauffeur',
            'Full flexibility: customized itinerary, stops, shopping waiting, and restaurant transfers',
            'Complimentary onboard high-speed Wi-Fi, bottled mineral water, and device chargers',
            'All fuel, highway tolls, parking fees, and driver meals fully included'
        ],
        itinerary: [
            { time: 'Custom', title: 'Pickup at Requested Time', desc: 'Your private chauffeur greets you at your accommodation.' },
            { time: 'Flexible', title: 'Bespoke City & Excursion Itinerary', desc: 'Drive wherever you desire (Majorelle, Souks, Palmeraie, Agafay, Restaurants, Nightlife).' },
            { time: 'Custom', title: 'Unlimited Wait Time & Assistance', desc: 'Chauffeur waits on-demand while you shop, dine, or attend meetings.' },
            { time: 'Custom', title: 'Safe Return Transfer', desc: 'Drop-off at your hotel, villa, or airport.' }
        ],
        included: [
            'Dedicated luxury Mercedes-Benz vehicle with professional chauffeur for 8 hours',
            'Unlimited mileage within Marrakech perimeter and surrounding attractions',
            'Fuel, tolls, parking, and driver expenses',
            'Onboard Wi-Fi and cold refreshments'
        ],
        excluded: [
            'Monument entry tickets or personal shopping'
        ],
        bookingOptions: [
            { name: 'Mercedes V-Class Extra-Long VIP (1-7 pax) - 8 Hours', price: 1200, selected: true },
            { name: 'Mercedes S-Class Luxury Sedan (1-3 pax) - 8 Hours', price: 2200 },
            { name: 'Full 24-Hour VIP Chauffeur Service', price: 2500 }
        ]
    },

    'horse-riding-sunset': {
        id: 'horse-riding-sunset',
        title: 'Arabian Horse Riding Sunset Experience in Agafay Desert or Palmeraie',
        location: 'Agafay Desert or Marrakech Palmeraie',
        badge: 'ROMANCE & NATURE',
        badgeClass: 'romance',
        category: 'Adventure & Sports',
        rating: 5.0,
        reviewsCount: 1120,
        basePrice: 550,
        priceUnit: 'DH',
        priceNote: 'per rider / 2 hours experience',
        duration: '3.5 Hours (Hotel to Hotel)',
        groupType: 'Small Group or Private Equestrian Trek',
        languages: 'English, Français, Español, العربية',
        pickup: 'Included from your Hotel/Riad in Marrakech',
        images: [
            './herophoto/sergey-pesterev-9-5-WYEBDz0-unsplash.jpg',
            './herophoto/agafay-scarabeo-camp.webp',
            './herophoto/parker-hilton-0gHcDpcYxOI-unsplash.jpg'
        ],
        overview: `Gallop into the golden Moroccan sunset on magnificent, well-trained purebred Arabian-Berber horses. Whether you are a complete beginner or an experienced equestrian, ride through serene desert canyons and ancient olive groves with an experienced horse master, concluding with mint tea in an authentic nomad camp.`,
        highlights: [
            'Ride purebred Arabian-Berber horses paired specifically to your riding ability',
            'Spectacular golden sunset views over the Agafay moonscape and Atlas mountains',
            'Professional equestrian guide and safety helmets provided',
            'Canter across desert plateau trails or enjoy peaceful walking paces',
            'Traditional Moroccan mint tea and homemade biscuits by the campfire'
        ],
        itinerary: [
            { time: '16:00', title: 'Hotel Pickup', desc: 'Chauffeured transfer to the royal equestrian stables.' },
            { time: '16:45', title: 'Horse Matching & Equipment', desc: 'Introduction to your horse and safety briefing.' },
            { time: '17:15', title: 'Sunset Desert Ride (2 Hours)', desc: 'Trek through panoramic desert dunes as the sun sets behind the Atlas.' },
            { time: '19:15', title: 'Mint Tea & Stables Return', desc: 'Relax with fresh mint tea and feed carrots to the horses.' },
            { time: '20:00', title: 'Hotel Drop-off', desc: 'Return transfer back to Marrakech.' }
        ],
        included: [
            'Round-trip hotel transfer with A/C',
            '2-hour guided horse riding trek',
            'Equestrian safety helmet and chaps',
            'Mint tea and Moroccan snacks'
        ],
        excluded: [
            'Professional photography add-on',
            'Gratuities'
        ],
        bookingOptions: [
            { name: 'Standard Sunset Horse Ride (Agafay or Palmeraie)', price: 550, selected: true },
            { name: 'VIP Private Romantic Couple Horse Trek + Candlelit Dinner', price: 1600 }
        ]
    },

    'wine-tasting-essaouira': {
        id: 'wine-tasting-essaouira',
        title: 'Moroccan Wine Tasting & Gourmet Vineyard Tour (Val d\'Argan Estate)',
        location: 'Domaine du Val d\'Argan (near Essaouira)',
        badge: 'GASTRONOMY & WINE',
        badgeClass: 'gourmet',
        category: 'Culture & Wellness',
        rating: 4.9,
        reviewsCount: 890,
        basePrice: 850,
        priceUnit: 'DH',
        priceNote: 'per person / wine tasting & lunch',
        duration: '9 Hours',
        groupType: 'Private or Small Group Wine Tour',
        languages: 'English, Français, Español',
        pickup: 'Included from your Riad/Hotel in Marrakech (08:30 AM)',
        images: [
            './herophoto/sour-moha-5t2SP3vQz28-unsplash.jpg',
            './herophoto/oussama-abouchatir-PcPoCsFj4mQ-unsplash.jpg',
            './herophoto/annie-spratt-zqK3Yq9S8iE-unsplash.jpg'
        ],
        overview: `Discover Morocco's southern boutique winemaking heritage at the prestigious Domaine du Val d'Argan, the only organic vineyard south of the Atlas mountains. Tour the sun-drenched vines, visit the barrel aging cellars, and savor a guided tasting of 5 signature Moroccan wines paired with a 3-course French-Moroccan gourmet lunch.`,
        highlights: [
            'Private guided tour of the organic Val d\'Argan vineyard and modern barrel cellars',
            'Sommelier-guided tasting of 5 distinguished Moroccan wines (Reds, Whites & Rosés)',
            'Gourmet 3-course pairing lunch on the estate\'s panoramic vineyard terrace',
            'Free time to explore the UNESCO ocean ramparts and Medina of Essaouira',
            'Private comfortable transportation with personal driver'
        ],
        itinerary: [
            { time: '08:30', title: 'Hotel Pickup in Marrakech', desc: 'Drive through Argan forests towards the Atlantic coast.' },
            { time: '11:00', title: 'Vineyard Walk & Cellar Tour', desc: 'Discover grape varietals (Syrah, Grenache, Viognier) adapted to the Moroccan climate.' },
            { time: '12:30', title: 'Wine Tasting & 3-Course Gourmet Lunch', desc: 'Taste 5 estate wines paired with gourmet beef tagine, artisanal cheeses, and dessert.' },
            { time: '14:30', title: 'Essaouira Ocean Ramparts & Souks', desc: 'Explore Essaouira port and Medina before returning.' },
            { time: '17:00', title: 'Return Transfer', desc: 'Arrive back in Marrakech around 19:30.' }
        ],
        included: [
            'Private round-trip vehicle and chauffeur from Marrakech',
            'Guided estate vineyard & cellar tour',
            'Tasting of 5 fine Moroccan wines',
            '3-course gourmet pairing lunch',
            'Visit to Essaouira city'
        ],
        excluded: [
            'Bottles of wine purchased for takeaway',
            'Personal souvenirs'
        ],
        bookingOptions: [
            { name: 'Wine Tour & 3-Course Gourmet Lunch (Per Person)', price: 850, selected: true },
            { name: 'VIP Private Mercedes Tour for Couples', price: 2200 }
        ]
    }
};
