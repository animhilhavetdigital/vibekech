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
            './herophoto/parker-hilton-0gHcDpcYxOI-unsplash.jpg',
            './herophoto/oussama-laabidate-xpnFxN-7UuY-unsplash.jpg',
            './herophoto/rigel-9UdGLlw-Sfk-unsplash.jpg',
            './herophoto/il-vagabiondo-SW7mMXu12Ws-unsplash.jpg'
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
            './herophoto/frida-aguilar-estrada-9tiVcbwbZ9M-unsplash.jpg',
            './herophoto/sander-traa-ILtmto49MZQ-unsplash.jpg',
            './herophoto/frida-aguilar-estrada-LhVJaRPweJc-unsplash.jpg',
            './herophoto/badiuth-dP_nrvgJGXo-unsplash.jpg'
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
            './herophoto/annie-spratt-zqK3Yq9S8iE-unsplash.jpg'
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
            './herophoto/alex-azabache-H0eV-0CRpOE-unsplash.jpg',
            './herophoto/mauro-lima-buvA1ofvTMY-unsplash.jpg',
            './herophoto/rigel-TmgpZd749bQ-unsplash.jpg',
            './herophoto/kyriacos-georgiou-CMmgfHQiYsc-unsplash.jpg'
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
            { name: 'With Electric Buggy Rental (+300 DH)', price: 1150 },
            { name: 'With Buggy & Premium Clubs (+550 DH)', price: 1400 }
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
            './herophoto/miltiadis-fragkidis-CWyFVt0V-HI-unsplash.jpg',
            './herophoto/annie-spratt-upJFoyr7BBA-unsplash.jpg',
            './herophoto/zakaria-zayane-R43GFASFGWo-unsplash.jpg',
            './herophoto/annie-spratt-_V4v7BbG338-unsplash.jpg'
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
    }
};
