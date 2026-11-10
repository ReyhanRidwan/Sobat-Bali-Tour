import { Experience, BookingAddon, Review, Vehicle } from './types';

// Let's use the exact generated image paths
export const EXPERIENCES: Experience[] = [
  {
    id: 'nusa-penida',
    title: 'Nusa Penida Golden Beach',
    tagline: 'Premium Exploration',
    shortDesc: 'Embark on a private speed boat to Nusa Penida. Witness the dramatic Kelingking beach cliffs and swim with beautiful ocean life.',
    longDesc: 'Experience the rugged coastal majesty of Nusa Penida in style. Board a high-speed private tender to the island’s most iconic geological formations. Walk along the dramatic, dinosaur-shaped Kelingking Cliff, dip into the crystal waters of Angel’s Billabong, and walk on the soft white sands of Crystal Bay. A completely curated, luxury island escape.',
    bgImage: '/nusa_penida_golden_beach_1783579187768.jpg',
    cardImage: '/nusa_penida_golden_beach_1783579187768.jpg',
    pricePerPerson: 195,
    duration: 'Full-Day (10 Hours)',
    location: 'Nusa Penida Island',
    difficulty: 'Active Adventure',
    rating: 4.9,
    reviewCount: 340,
    highlights: [
      'Private speedboat transfer to the island with VIP seating',
      'Exclusive guided trek down to the famous Kelingking Beach viewpoint',
      'VIP access to high-end beach clubs on the island',
      'Snorkeling with marine life at the coral-rich Toyapakeh reef',
      'Scenic photography at Angel’s Billabong and Broken Beach'
    ],
    inclusions: [
      'Private resort round-trip pick up in premium luxury car',
      'Private round-trip VIP speed boat charter',
      'Professional local guide and driver on Nusa Penida island',
      'Gourmet lunch at an elite ocean-view organic restaurant',
      'All island entrance tickets, retribution fees, and taxes',
      'Premium snorkeling gear and safety equipment'
    ],
    exclusions: [
      'Personal beach club tab (cocktails/cabana rentals)',
      'Guide tips'
    ],
    itinerary: [
      { time: '06:30 AM', title: 'Hotel VIP Pickup', desc: 'Private transfer from your resort directly to Sanur Harbour.' },
      { time: '07:30 AM', title: 'Private Speedboat Cruise', desc: 'Set sail across the ocean in a premium speed boat to Nusa Penida.' },
      { time: '08:30 AM', title: 'Kelingking Cliff Viewpoint', desc: 'Arrive and gaze upon the majestic prehistoric dinosaur cliff. Enjoy optional trekking.' },
      { time: '11:00 AM', title: 'Angel’s Billabong & Broken Beach', desc: 'Marvel at the stunning emerald natural infinity pool and the dramatic rock archway.' },
      { time: '01:00 PM', title: 'Luxury Ocean-View Lunch', desc: 'Relish a delicious 3-course organic meal overlooking the azure Penida coastline.' },
      { time: '03:00 PM', title: 'Toyapakeh Reef Snorkeling', desc: 'Swim among colorful sea turtles and live coral gardens in crystal waters.' },
      { time: '05:30 PM', title: 'Return Sunset Sail', desc: 'Cruise back to Sanur while watching a glorious Bali ocean sunset.' }
    ]
  },
  {
    id: 'ocean-escape',
    title: 'Ocean Luxury Escape',
    tagline: 'Private Yacht Cruise',
    shortDesc: 'Sail the pristine blue waters of Bali in a premium yacht. Dive into coral reefs and dine under the sunset.',
    longDesc: 'Charter your private sanctuary on the sparkling Indian Ocean. Our customized 60-foot luxury yacht glides through Nusa Penida and Lembongan waters. Sunbathe on expansive teak decks, snorkel among vibrant coral gardens, and enjoy premium services provided by a dedicated captain and five-star onboard crew.',
    bgImage: '/bali_ocean_bg_1783528769356.jpg',
    cardImage: '/ocean_luxury_escape_1783528733687.jpg',
    pricePerPerson: 290,
    duration: 'Full-Day (10 Hours)',
    location: 'Nusa Penida & Lembongan',
    difficulty: 'Relaxed / Easy',
    rating: 5.0,
    reviewCount: 98,
    highlights: [
      'Exclusively chartered 60ft luxury yacht with private crew',
      'Snorkeling with majestic Manta Rays in crystal-clear bays',
      'Gourmet seafood lunch freshly grilled onboard by our chef',
      'Stand-up paddleboarding and sea-kayaking in secluded coves',
      'Breathtaking open-ocean sunset toast with premium champagne'
    ],
    inclusions: [
      'Private luxury harbor transfers',
      'Exclusive yacht charter with Captain and hospitality crew',
      'Full premium snorkeling and water sports equipment',
      'Fresh gourmet seafood BBQ lunch and tropical fruit platters',
      'Unlimited soft drinks, premium tea, coffee, and juices',
      'Complimentary bottle of premium French Champagne'
    ],
    exclusions: [
      'Scuba diving certification courses',
      'Nusa Penida land tours (available as premium add-on)',
      'Crew gratuities'
    ],
    itinerary: [
      {
        time: '08:00 AM',
        title: 'Harbor Welcome',
        desc: 'Arrive at Serangan Private Marina with VIP welcome drinks and immediate boarding.'
      },
      {
        time: '09:00 AM',
        title: 'Sailing to Nusa Penida',
        desc: 'Cruise across the Badung Strait. Spot flying fish and enjoy panoramic views of Bali’s southern cliffs.'
      },
      {
        time: '10:30 AM',
        title: 'Swim with Manta Rays',
        desc: 'Drop anchor at Manta Bay. Snorkel alongside the majestic manta rays under the supervision of our marine guides.'
      },
      {
        time: '12:30 PM',
        title: 'Onboard Gourmet Feast',
        desc: 'Relish a fresh, multi-course seafood barbecue prepared on deck, served with premium wines and local delicacies.'
      },
      {
        time: '02:30 PM',
        title: 'Lembongan Lagoon Cruise',
        desc: 'Explore the scenic mangrove forests and limestone caves of Nusa Lembongan via stand-up paddleboard or kayak.'
      },
      {
        time: '04:30 PM',
        title: 'Sunset Sailing & Toast',
        desc: 'Unwind on the front deck as the yacht cruises home. Raise a glass of chilled champagne as the sky burns in orange and pink.'
      },
      {
        time: '06:30 PM',
        title: 'Resort Return',
        desc: 'Disembark at the marina where your private driver is waiting to escort you back to your hotel.'
      }
    ]
  },
  {
    id: 'jungle-retreat',
    title: 'Serene Jungle Retreat',
    tagline: 'Ubud Wellness Sanctuary',
    shortDesc: 'Unwind in the heart of tropical rainforests. Luxuriate in cascading infinity pools and holistic wellness therapies.',
    longDesc: 'Disconnect from the mundane and submerge yourself in Ubud’s dense, emerald-green jungle canopy. This wellness sanctuary experience features private multi-tiered infinity pools, a bespoke volcanic-stone massage, personalized meditation sessions with a Balinese healer, and a customized fine-dining vegan or organic culinary menu.',
    bgImage: '/bali_jungle_bg_1783528784335.jpg',
    cardImage: '/serene_jungle_retreat_1783528749017.jpg',
    pricePerPerson: 185,
    duration: 'Full-Day (7 Hours)',
    location: 'Tegallalang, Ubud',
    difficulty: 'Centering / Peace',
    rating: 4.8,
    reviewCount: 142,
    highlights: [
      'Private wellness sanctuary cabana overlooking Ayung river',
      'Traditional Balinese cleansing ritual (Melukat) with a holy priest',
      '90-minute volcanic basalt hot stone massage session',
      'Private organic cooking masterclass with our executive chef',
      'Premium herbal tea pairing tasting session'
    ],
    inclusions: [
      'Bespoke resort-to-sanctuary round-trip private transport',
      'Private wellness host and certified yoga instructor',
      'Access to exclusive multi-tiered jungle infinity pool suite',
      '90-minute hot stone therapy or custom herbal massage',
      'Traditional Melukat ceremonial materials and sarongs',
      'Four-course organic vegan or wellness gourmet degustation lunch'
    ],
    exclusions: [
      'Additional retail purchases at the holistic spa boutique',
      'Acupuncture or specialized medical therapies',
      'Host tips'
    ],
    itinerary: [
      {
        time: '07:30 AM',
        title: 'Morning Forest Drive',
        desc: 'Enjoy a scenic, misty morning drive through the highland hills and traditional villages toward Ubud.'
      },
      {
        time: '08:30 AM',
        title: 'Yoga & River Sound Meditation',
        desc: 'Begin with a gentle Hatha yoga session on an open-air bamboo deck, sound-tracked by the roaring Ayung River.'
      },
      {
        time: '10:00 AM',
        title: 'Holy Water Purifying Ritual',
        desc: 'Settle in a private waterfall alcove. Partake in a traditional cleansing ceremony (Melukat) to refresh the spirit and mind.'
      },
      {
        time: '11:30 AM',
        title: 'The Spa Masterclass & Treatment',
        desc: 'Receive our signature 90-minute volcanic basalt hot stone massage, promoting deep cellular renewal.'
      },
      {
        time: '01:30 PM',
        title: 'Gourmet Wellness Degustation',
        desc: 'Savor a handcrafted 4-course organic lunch made entirely from local volcanic-soil crops and superfoods.'
      },
      {
        time: '03:00 PM',
        title: 'Rice Field Walk & Tea Pairing',
        desc: 'Take a meditative stroll through the emerald Tegallalang terraces, concluding with a tasting of rare organic Balinese herbal teas.'
      },
      {
        time: '04:30 PM',
        title: 'Sunset Departure',
        desc: 'Bid farewell to the sanctuary as you are driven back to your hotel, feeling profoundly renewed.'
      }
    ]
  },
  {
    id: 'jeep-adventure',
    title: 'Sewa Mobil Kijang Innova',
    tagline: 'Premium Rental',
    shortDesc: 'Nikmati perjalanan keliling Bali dengan kenyamanan ekstra bersama armada Toyota Kijang Innova premium kami.',
    longDesc: 'Sewa mobil Toyota Kijang Innova premium untuk kenyamanan maksimal Anda di Bali. Dilengkapi dengan kabin yang luas, pendingin udara ganda, sistem suara premium, serta kursi kapten yang mewah. Sangat cocok untuk perjalanan bisnis, liburan keluarga, maupun acara VIP di Pulau Dewata.',
    bgImage: '/car_innova_1783582975292.jpg',
    cardImage: '/car_innova_1783582975292.jpg',
    pricePerPerson: 50,
    duration: 'Harian (12 Jam)',
    location: 'Seluruh Bali',
    difficulty: 'Luxury Ride',
    rating: 4.9,
    reviewCount: 124,
    highlights: [
      'Armada Toyota Kijang Innova tipe terbaru berstandar VIP',
      'AC double blower super dingin untuk iklim tropis',
      'Kabin super luas dan senyap untuk kenyamanan maksimal',
      'Layanan penjemputan dan pengantaran bandara gratis',
      'Sopir profesional ramah dan berpengalaman'
    ],
    inclusions: [
      'Sewa mobil Kijang Innova ber-AC bersih & prima',
      'Bahan bakar minyak (BBM) penuh untuk hari pertama',
      'Sopir pribadi pariwisata berlisensi resmi',
      'Peralatan kenyamanan penumpang (tisu, air mineral dingin)',
      'Asuransi kendaraan menyeluruh (all-risk)'
    ],
    exclusions: [
      'Biaya parkir destinasi dan biaya tol',
      'Makan sopir harian',
      'Tip sukarela untuk sopir harian'
    ],
    itinerary: [
      {
        time: '08:00 AM',
        title: 'Penjemputan Hotel/Bandara',
        desc: 'Sopir VIP kami akan menjemput Anda di lobi hotel atau terminal kedatangan bandara tepat waktu.'
      },
      {
        time: '09:00 AM',
        title: 'Eksplorasi Rute Kustom Anda',
        desc: 'Mulai perjalanan wisata Anda. Sopir kami siap merekomendasikan destinasi terbaik sesuai minat Anda.'
      },
      {
        time: '12:00 PM',
        title: 'Saran Tempat Makan Siang Terbaik',
        desc: 'Nikmati kuliner Bali terpopuler sesuai rekomendasi sopir kami yang memahami selera kuliner khas.'
      },
      {
        time: '02:00 PM',
        title: 'Lanjutkan Perjalanan Wisata',
        desc: 'Kunjungi pantai tersembunyi, pusat seni Ubud, pura suci, atau pusat perbelanjaan oleh-oleh.'
      },
      {
        time: '06:00 PM',
        title: 'Sunset Gaze & Santai Sore',
        desc: 'Menuju lokasi sunset favorit seperti Uluwatu atau Canggu untuk menikmati senja Bali yang indah.'
      },
      {
        time: '08:00 PM',
        title: 'Kembali ke Hotel / Airport Drop',
        desc: 'Pengantaran kembali dengan selamat ke hotel atau bandara sesuai jadwal yang Anda tentukan.'
      }
    ]
  },
  {
    id: 'nusa-dua',
    title: 'Nusa Dua Exclusive Beach',
    tagline: 'Elite Beach Leisure',
    shortDesc: 'Rejuvenate on pristine white sands. Relax in premium private cabanas with five-star butler services.',
    longDesc: 'Treat yourself to the pinnacle of relaxation in Bali’s most exclusive gated resort enclave. Nusa Dua Exclusive Beach offers quiet, untouched white sands, private oceanfront cabanas, tailored beachside massages, and fine dining under swaying palms. Experience the serene security and luxury of world-class beach club leisure.',
    bgImage: '/nusa_dua_beach_1783579200979.jpg',
    cardImage: '/nusa_dua_beach_1783579200979.jpg',
    pricePerPerson: 210,
    duration: 'Full-Day (8 Hours)',
    location: 'Nusa Dua Gated Enclave',
    difficulty: 'Very Easy / Relaxed',
    rating: 4.8,
    reviewCount: 180,
    highlights: [
      'Private sea-view double sunbed cabana in an elite resort partner club',
      'Personal premium butler service throughout the entire day',
      'Exclusive 60-minute therapeutic beachfront massage',
      'Gourmet beachside BBQ lunch featuring fresh lobster and wagyu beef',
      'Complimentary access to watersports (Stand-up Paddleboard & Kayak)'
    ],
    inclusions: [
      'Private air-conditioned hotel transfers in luxury Alphard van',
      'Premium daybed reservation with high-end towels and amenities',
      'Butler services and dedicated hospitality host',
      '3-course gourmet beachside lunch and cold press juices',
      '60-minute relaxing body massage by certified spa therapist'
    ],
    exclusions: [
      'Alcoholic spirits (premium cocktails list available at bar)',
      'Jet ski or banana boat rentals'
    ],
    itinerary: [
      { time: '09:00 AM', title: 'Luxury Hotel Pickup', desc: 'Depart your villa in a premium multi-purpose vehicle.' },
      { time: '10:00 AM', title: 'Cabana Welcome & Sunrise Lounge', desc: 'VIP welcome with fresh coconut drinks and settling into your private sunbed.' },
      { time: '11:00 AM', title: 'Aqua Sports & Swim', desc: 'Gentle paddleboarding or swimming in the calm, coral-protected Nusa Dua lagoon.' },
      { time: '01:00 PM', title: 'Lobster & Wagyu Beachside Feast', desc: 'Savor a freshly grilled chef’s platter brought straight to your private cabana.' },
      { time: '03:00 PM', title: 'Beachfront Therapeutic Massage', desc: 'Unwind completely with the sound of waves during a luxurious 60-minute therapy.' },
      { time: '05:00 PM', title: 'High Tea Sunset Mocktails', desc: 'Gaze at the pristine horizon while enjoying premium afternoon tea and sweets.' },
      { time: '06:00 PM', title: 'Return Transfer', desc: 'Scenic drive back to your resort feeling fully pampered.' }
    ]
  },
  {
    id: 'bedugul-danau',
    title: 'Bedugul Danau Beratan',
    tagline: 'Sacred Temples & Highlands',
    shortDesc: 'A misty cultural escape to the floating temple on Lake Beratan, coupled with botanical gardens and scenic highlands.',
    longDesc: 'Escape the tropical heat and journey into Bali’s misty mountain highlands. Bedugul is home to the magical Ulun Danu Beratan Temple, which appears to float on the calm, reflective waters of a volcanic lake. Breathe the fresh pine-scented air, walk through towering bamboo forests, and explore local strawberry fields and standard Balinese shrines.',
    bgImage: '/bedugul_danau_beratan_1783579216449.jpg',
    cardImage: '/bedugul_danau_beratan_1783579216449.jpg',
    pricePerPerson: 125,
    duration: 'Full-Day (9 Hours)',
    location: 'Bedugul Highlands',
    difficulty: 'Easy Cultural',
    rating: 4.7,
    reviewCount: 220,
    highlights: [
      'Private traditional boat charter on Lake Beratan for close-up temple photos',
      'VIP guided tour of Ulun Danu temple complex with certified historian',
      'Scenic drive through the scenic botanical garden in a golf cart',
      'Gourmet highland cuisine lunch inside an exclusive lakefront gazebo',
      'Exotic organic strawberry picking and tasting session'
    ],
    inclusions: [
      'Full private transport in luxury SUV with experienced driver-guide',
      'All temple entry passes and historical guide fees',
      'Private boat charter on Lake Beratan',
      'Golf cart rental inside Bali Botanical Gardens',
      'Premium highland buffet or ala carte lunch with organic ingredients'
    ],
    exclusions: [
      'Personal shopping at traditional Candi Kuning market',
      'Tips'
    ],
    itinerary: [
      { time: '08:00 AM', title: 'Misty Highlands Drive', desc: 'Drive through beautiful winding roads into the cool northern mountains.' },
      { time: '09:45 AM', title: 'Ulun Danu Beratan Exploration', desc: 'Walk around the iconic sacred temple and discover its rich spiritual heritage.' },
      { time: '11:00 AM', title: 'Reflective Lake Boat Charter', desc: 'Board a traditional wooden boat to cruise the volcanic lake for panoramic views.' },
      { time: '12:30 PM', title: 'Highland Garden Gazebo Lunch', desc: 'Feast on organic farm-fresh food surrounded by quiet lakes and pine forests.' },
      { time: '02:00 PM', title: 'Botanical Gardens Golf Tour', desc: 'Ride a private golf cart through towering giant trees, orchids, and fern collections.' },
      { time: '03:30 PM', title: 'Strawberry Farm & Local Market', desc: 'Pick sweet highland strawberries and explore local spice markets.' },
      { time: '05:00 PM', title: 'Return Road Journey', desc: 'Descend back down to the southern coast as twilight settles.' }
    ]
  },
  {
    id: 'lempuyang',
    title: 'Lempuyang Luhur Temple',
    tagline: 'Heaven Gates Photography',
    shortDesc: 'Witness the iconic Gates of Heaven with Mt. Agung in the background, with a private photographer and VIP queue pass.',
    longDesc: 'Stand between the sacred stone gates of Pura Lempuyang, framing the towering volcanic cone of Mount Agung in the clouds. With a dedicated private photographer on hand and our exclusive VIP booking system that minimizes wait times, this journey delivers stunning visual memories and a deep connection to East Bali’s ancient Hindu spirituality.',
    bgImage: '/lempuyang_temple_1783579255281.jpg',
    cardImage: '/lempuyang_temple_1783579255281.jpg',
    pricePerPerson: 130,
    duration: 'Full-Day (11 Hours)',
    location: 'Karangasem, East Bali',
    difficulty: 'Easy / Walking stairs',
    rating: 4.9,
    reviewCount: 410,
    highlights: [
      'VIP priority booking at the famous Lempuyang Gates of Heaven',
      'Bespoke private travel photographer with pro camera equipment',
      'Guided walkthrough of Tirta Gangga Royal Water Palace',
      'Scenic lunch overlooking the lush terraced valley of Karangasem',
      'Visit to the hidden mountain sanctuary of Pura Penataran'
    ],
    inclusions: [
      'Private luxury transportation in high-end SUV',
      'All entrance fees, sarong rentals, and local shuttle tickets',
      'Professional private photographer with high-res digital delivery',
      'Sumptuous 3-course Balinese heritage lunch',
      'Refreshments, mineral water, and luxury towels'
    ],
    exclusions: [
      'Prints of photographs (all digital files provided instead)',
      'Personal offerings'
    ],
    itinerary: [
      { time: '05:00 AM', title: 'Early Sunrise Departure', desc: 'Depart early to secure the best lighting conditions at the temple.' },
      { time: '07:30 AM', title: 'Gates of Heaven Portrait', desc: 'Behold the incredible Gateway to Mt. Agung. Capture world-famous mirrored photos.' },
      { time: '10:00 AM', title: 'Tirta Gangga Water Palace', desc: 'Stroll across the stone steps of the royal fish pond surrounded by fountains.' },
      { time: '12:30 PM', title: 'Karangasem Heritage Lunch', desc: 'Enjoy local organic delicacies in a luxury restaurant with sweeping valley views.' },
      { time: '02:30 PM', title: 'Taman Ujung Water Palace', desc: 'Explore the majestic historic European-Balinese royal architecture by the sea.' },
      { time: '04:30 PM', title: 'Scenic Coastline Drive', desc: 'Wind down with a beautiful ocean view drive back to your resort.' }
    ]
  },
  {
    id: 'uluwatu',
    title: 'Uluwatu Sunset Horizon',
    tagline: 'Romantic Sunset Cliff',
    shortDesc: 'A spectacular ocean cliff journey. Watch the historic Kecak Dance, visit Uluwatu Temple, and dine at Jimbaran bay.',
    longDesc: 'Dramatically perched 70 meters above the roaring waves of the Indian Ocean, Uluwatu Temple is a timeless wonder. Our curated private experience grants you prime amphitheater seats for the legendary sunset Kecak Fire Dance, private guides to navigate the cliff paths, and concludes with an elite candlelight seafood dinner directly on the beach at Jimbaran Bay.',
    bgImage: '/uluwatu_cliff_1783579271777.jpg',
    cardImage: '/uluwatu_cliff_1783579271777.jpg',
    pricePerPerson: 155,
    duration: 'Half-Day (7 Hours)',
    location: 'Uluwatu Cliff, Jimbaran',
    difficulty: 'Easy / Walking',
    rating: 4.8,
    reviewCount: 290,
    highlights: [
      'VIP front-row seating at the world-famous Kecak Cliffside Dance',
      'Private guided walkthrough of the ancient 11th-century Uluwatu Temple',
      'Scenic walk along the secure, cliffside botanical stone paths',
      'Private candlelight seafood lobster dinner on the sands of Jimbaran Beach',
      'Stunning sunset viewing from the island’s absolute southern tip'
    ],
    inclusions: [
      'Private premium vehicle roundtrip pick up',
      'All temple entrance fees, sarong rentals, and private guide services',
      'VIP tickets to the sunset Kecak Fire Dance',
      'Luxury beachfront seafood BBQ dinner (includes lobster, prawns, fish, clams)',
      'Chilled water and luxury passenger comfort kit'
    ],
    exclusions: [
      'Alcoholic drinks at Jimbaran beach (available to purchase)',
      'Gratuities'
    ],
    itinerary: [
      { time: '02:30 PM', title: 'Resort Departure', desc: 'Settle into your private car and head south to the Bukit Peninsula.' },
      { time: '03:45 PM', title: 'Uluwatu Cliffside Walk', desc: 'Witness ancient clifftop shrines and spot friendly wild temple monkeys.' },
      { time: '05:30 PM', title: 'Kecak Fire & Sunset Dance', desc: 'Take your VIP seats as the sun sinks into the sea and the fiery dance begins.' },
      { time: '07:30 PM', title: 'Jimbaran Bay Candlelight Dinner', desc: 'Sink your toes in the sand as you relish a freshly grilled seafood basket under the stars.' },
      { time: '09:30 PM', title: 'Return Transfer', desc: 'Smooth drive back to your resort to end a beautiful romantic evening.' }
    ]
  },
  {
    id: 'atv-quad',
    title: 'ATV Quad Bikes Jungle & Mud Ride',
    tagline: 'Adrenaline Rush',
    shortDesc: 'Conquer the rugged Ubud terrain in an elite, powerful quad bike. Drive through mud, waterfalls, and tunnels.',
    longDesc: 'Unleash your inner adventurer on a private quad biking safari through Bali’s most dramatic landscapes. Navigate through dense bamboo forests, deep muddy riverbeds, dark natural stone tunnels, and splash right through rushing waterfalls. Equipped with high-power Japanese quad bikes and led by expert private guides, this tour is high on adrenaline and high on luxury.',
    bgImage: '/activity_atv_jungle_1783677762979.jpg',
    cardImage: '/activity_atv_jungle_1783677762979.jpg',
    pricePerPerson: 115,
    duration: 'Half-Day (6 Hours)',
    location: 'Ubud Jungle Ridges',
    difficulty: 'Exciting Adventure',
    rating: 4.9,
    reviewCount: 154,
    highlights: [
      'Ride top-of-the-line, high-performance Japanese 250cc ATV quad bikes',
      'Private specialized guide ensuring safety and action-filled routing',
      'Unique course featuring a 50m dark historic cave tunnel and river canyon',
      'Private luxury hot shower suites with fresh towels and premium soaps',
      'Delicious organic dynamic buffet lunch overlooking lush green hills'
    ],
    inclusions: [
      'Private air-conditioned resort transfers in premium class car',
      'Private professional ATV trail guide and safety orientation',
      'Modern quad bike use (Single or Tandem options) with boots and helmets',
      'All safety equipment, locker, and luxury hot shower facilities',
      'Post-adventure multi-course organic buffet and mocktails'
    ],
    exclusions: [
      'Optional purchase of GoPro trail video recordings',
      'Personal trail clothing'
    ],
    itinerary: [
      { time: '08:00 AM', title: 'Morning Resort Departure', desc: 'Depart your hotel in a private comfortable SUV toward central Ubud.' },
      { time: '09:15 AM', title: 'VIP Trail briefing', desc: 'Gear up, receive safety guidelines, and complete a trial track test.' },
      { time: '09:45 AM', title: 'The Great Jungle & Mud Expedition', desc: 'Ride through rice fields, plunge into mud pools, drive behind waterfalls, and traverse ancient tunnels.' },
      { time: '11:45 AM', title: 'Luxury Shower & Refresh', desc: 'Wash off the mud in spacious private hot shower cabins.' },
      { time: '12:30 PM', title: 'Scenic Hillside Feast', desc: 'Savor organic local dishes at a modern restaurant with lush rainforest views.' },
      { time: '02:00 PM', title: 'Resort Safe Return', desc: 'Relax in your private vehicle back to your hotel.' }
    ]
  },
  {
    id: 'river-tubing',
    title: 'Bali Wild River Tubing Adventure',
    tagline: 'River Wilderness',
    shortDesc: 'Float down a beautiful river canyon in central Bali. Experience mild rapids, gorgeous scenery, and pure jungle wilderness.',
    longDesc: 'Immerse yourself directly in Bali’s hidden river ecosystems. Guided by a certified swiftwater rescue professional, float in your own personal, high-durability inflatable tube down a crystal-clear canyon river. Glide through ancient mossy volcanic cliffs, feel the splash of pristine natural streams, and swim in calm mountain pools.',
    bgImage: '/activity_river_tubing_1783677780719.jpg',
    cardImage: '/activity_river_tubing_1783677780719.jpg',
    pricePerPerson: 120,
    duration: 'Half-Day (6 Hours)',
    location: 'Payangan Hidden River',
    difficulty: 'Moderate Thrill',
    rating: 4.8,
    reviewCount: 96,
    highlights: [
      'Private swiftwater expert escorting you down a pristine mountain stream',
      'Float on professional-grade solo tubes with comfortable seat backs',
      'Explore hidden deep-canyon gorges and beautiful dripping waterfalls',
      'Encounter exotic wild birds, monkeys, and butterflies in their natural habitat',
      'Bespoke hot river-view picnic served right at the finish line'
    ],
    inclusions: [
      'Private pickup and drop-off in premium SUV with driver',
      'High-quality solo inflatable tube, life jacket, and safety helmet',
      'Two highly experienced private river instructors',
      'Private lockers, hot showers, luxury body towels, and toiletries',
      'Chef-prepared hot riverside gourmet lunch'
    ],
    exclusions: [
      'Personal waterproof camera rental',
      'Tips'
    ],
    itinerary: [
      { time: '08:30 AM', title: 'Hotel Pickup', desc: 'Private transfer from your hotel into the beautiful Payangan hills.' },
      { time: '09:30 AM', title: 'Safety Briefing & Outfitting', desc: 'Receive state-of-the-art river safety gear and professional guidelines.' },
      { time: '10:00 AM', title: 'Wild River Tubing Launch', desc: 'Float down the crystalline river. Ride class I & II rapids and explore spectacular canyons.' },
      { time: '12:00 PM', title: 'Riverside Hot Shower', desc: 'Refresh in private luxury forest shower suites.' },
      { time: '12:45 PM', title: 'Gourmet Valley Lunch', desc: 'Enjoy a delicious lunch on a wooden deck suspended over the rushing river waters.' },
      { time: '02:00 PM', title: 'Return Transfer', desc: 'Drive back to your resort in absolute comfort.' }
    ]
  },
  {
    id: 'bali-jungle-swing',
    title: 'Bali Jungle Swing',
    tagline: 'Adrenaline Swing',
    shortDesc: 'Rasakan sensasi berayun di atas ketinggian dengan pemandangan lembah dan hutan tropis Ubud yang menakjubkan.',
    longDesc: 'Nikmati pengalaman ikonik Bali Jungle Swing yang mendebarkan di atas lembah hijau Ubud yang asri. Dengan sistem pengaman berstandar internasional dan fotografer profesional, abadikan momen spektakuler Anda melayang di udara dengan latar belakang pohon kelapa, tebing, dan air terjun tersembunyi.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783755074/fe5b3012-c2bd-4937-9dae-588ef1aa56b7.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783755074/fe5b3012-c2bd-4937-9dae-588ef1aa56b7.png',
    pricePerPerson: 45,
    duration: 'Setengah Hari (4 Jam)',
    location: 'Ubud Valley, Gianyar',
    difficulty: 'Mudah / Mendebarkan',
    rating: 4.8,
    reviewCount: 95,
    highlights: [
      'Berayun di ketinggian hingga 30 meter di atas lembah rimbun',
      'Spot foto premium & sarang burung raksasa yang estetik',
      'Sistem tali pengaman ganda berstandar internasional (safety first)',
      'Fotografer profesional gratis dengan kamera berspesifikasi tinggi',
      'Sajian kopi luwak dan teh herbal lokal gratis di lokasi'
    ],
    inclusions: [
      'Transportasi privat antar-jemput ber-AC nyaman',
      'Tiket masuk area Bali Jungle Swing VIP',
      'Semua akses ke ayunan ekstrem, ayunan tunggal, dan ayunan ganda',
      'Peralatan keselamatan lengkap berstandar internasional',
      'Minuman selamat datang dan sesi mencicipi kopi/teh tradisional'
    ],
    exclusions: [
      'Sewa gaun terbang panjang (tersedia di lokasi)',
      'Makan siang (tersedia opsi restoran di lokasi)',
      'Tip sukarela'
    ],
    itinerary: [
      { time: '09:00 AM', title: 'Penjemputan Privat', desc: 'Penjemputan nyaman dari hotel Anda dengan armada VIP Sobat Bali Tour.' },
      { time: '10:00 AM', title: 'Brifing Keselamatan & Mulai Berayun', desc: 'Tiba di lokasi, tim profesional kami akan memasang alat pengaman dan memandu Anda di ayunan pertama.' },
      { time: '11:00 AM', title: 'Sesi Foto Estetik & Sarang Burung', desc: 'Ambil foto menakjubkan di sarang burung gantung, spot helipad, dan ayunan romantis bersama pasangan.' },
      { time: '12:00 PM', title: 'Mencicipi Kopi Tradisional Bali', desc: 'Nikmati suasana santai sembari menikmati teh jahe hangat, kopi Bali, dan kopi Luwak otentik.' },
      { time: '01:00 PM', title: 'Kembali Ke Hotel', desc: 'Kembali ke hotel dengan kenangan foto-foto indah siap dibagikan di media sosial.' }
    ]
  },
  {
    id: 'snorkeling',
    title: 'Snorkeling Adventure',
    tagline: 'Marine Life Exploration',
    shortDesc: 'Jelajahi keindahan bawah laut Bali yang memukau. Berenang bersama penyu dan terumbu karang warna-warni.',
    longDesc: 'Bergabunglah dalam petualangan Snorkeling privat terbaik di Bali. Kunjungi spot snorkeling kelas dunia seperti Blue Lagoon Padangbai, Tanjung Jepun, atau Manta Point di Nusa Penida. Nikmati air laut sejernih kristal, terumbu karang alami yang sehat, serta kawanan ikan tropis yang memanjakan mata Anda.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783755234/2d174dac-5419-4d43-9a22-b8bfc736b6e6.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783755234/2d174dac-5419-4d43-9a22-b8bfc736b6e6.png',
    pricePerPerson: 65,
    duration: 'Setengah Hari (5 Jam)',
    location: 'Blue Lagoon & Nusa Penida',
    difficulty: 'Mudah / Menyenangkan',
    rating: 4.9,
    reviewCount: 112,
    highlights: [
      'Snorkeling privat di 2 spot bawah laut terbaik pilihan di Bali',
      'Berenang bersama kawanan penyu laut dan Nemo (ikan badut)',
      'Didampingi instruktur selam privat bersertifikasi internasional',
      'Menggunakan perahu tradisional (Jukung) privat yang bersih',
      'Makan siang lezat di tepi pantai setelah berenang'
    ],
    inclusions: [
      'Transportasi privat pulang-pergi dari hotel Anda',
      'Sewa peralatan snorkeling lengkap (masker, snorkel, fin, pelampung)',
      'Perahu privat dan kapten berpengalaman',
      'Pemandu snorkeling lokal yang ramah',
      'Makan siang khas Bali & air mineral dingin'
    ],
    exclusions: [
      'Sewa kamera bawah laut GoPro (tersedia opsional)',
      'Keperluan pribadi lainnya',
      'Tip sukarela'
    ],
    itinerary: [
      { time: '07:30 AM', title: 'Penjemputan Hotel Privat', desc: 'Penjemputan pagi hari dari hotel Anda untuk mendapatkan ombak tenang dan air jernih.' },
      { time: '09:00 AM', title: 'Menaiki Perahu Privat', desc: 'Tiba di pesisir pantai, pasang alat selam Anda, lalu naik perahu tradisional menuju spot pertama.' },
      { time: '09:30 AM', title: 'Snorkeling Spot Pertama', desc: 'Berenang di air jernih dengan terumbu karang indah. Cari kawanan penyu dan ikan hias.' },
      { time: '10:30 AM', title: 'Snorkeling Spot Kedua', desc: 'Menuju lokasi kedua yang memiliki karakteristik terumbu karang yang berbeda dan lebih dalam.' },
      { time: '11:30 AM', title: 'Makan Siang Tepi Pantai', desc: 'Kembali ke darat, bersihkan diri dengan shower air hangat, lalu nikmati makan siang hangat di pinggir pantai.' },
      { time: '01:00 PM', title: 'Kembali Ke Resort', desc: 'Kembali diantar dengan nyaman menuju resort Anda.' }
    ]
  }
];

export const BOOKING_ADDONS: BookingAddon[] = [
  {
    id: 'private-photographer',
    name: 'Bespoke Private Photographer',
    description: 'A professional travel photographer to capture candid moments of your adventure (Includes 50+ edited high-res digital shots).',
    price: 95
  },
  {
    id: 'drone-video',
    name: 'Cinematic Drone Videography',
    description: 'Aerial video shooting utilizing 4K cinema drones for dramatic landscape memories (Includes a 1-minute social media reel).',
    price: 120
  },
  {
    id: 'champagne-service',
    name: 'Veuve Clicquot Champagne & Caviar',
    description: 'A chilled bottle of premium champagne accompanied by gourmet local caviar and fresh strawberries on ice.',
    price: 180
  },
  {
    id: 'helicopter-transfer',
    name: 'Ultra-Luxe Helicopter Return (1-Way)',
    description: 'Skip the return roads completely. Fly back directly to southern heliports with jaw-dropping island vistas.',
    price: 850
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Alexander V.',
    rating: 5,
    date: '2026-06-15',
    comment: 'The Mount Batur Off-Road Jeep Adventure was absolutely spectacular. The caldera sunrise was stunning, and our guide drove with incredible skill. The picnic breakfast on the volcano side felt so luxurious!',
    experienceId: 'jeep-adventure',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Charlotte Dubois',
    rating: 5,
    date: '2026-06-28',
    comment: 'Sailing around Nusa Penida on our own private yacht was a dream come true. We swam with massive manta rays and the onboard chef grilled the best lobster we’ve ever had. Truly professional crew.',
    experienceId: 'ocean-escape',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Made Suarta',
    rating: 5,
    date: '2026-07-02',
    comment: 'Sewa Toyota Avanza di Sobat Bali Tour sangat memuaskan. Unitnya sangat bersih dan terawat, AC dingin, dan supirnya sangat ramah serta hafal jalan-jalan tikus di Bali sehingga bebas macet!',
    experienceId: 'jungle-retreat',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Jonathan K.',
    rating: 4,
    date: '2026-05-19',
    comment: 'The jeep ride can get a little bumpy through the forest trails, but that is part of the fun! The view of Mount Batur is breathtaking and the hot spring dip afterward was so relaxing. Recommend 10/10.',
    experienceId: 'jeep-adventure',
    verified: true
  }
];

export const FAQS = [
  {
    question: 'Are all tours completely private?',
    answer: 'Yes. Every booking with Sobat Bali Tour is 100% private. Your vehicles, yachts, tour hosts, and designated resort pavilions are exclusively yours. We do not group multiple independent bookings together.'
  },
  {
    question: 'What is the cancellation policy for weather conditions?',
    answer: 'Your safety is our absolute priority. If a tour is cancelled due to heavy rain, strong winds, or volcanic volcanic activity advisories, we offer free rescheduling or a complete 100% refund.'
  },
  {
    question: 'Can dietary restrictions be accommodated?',
    answer: 'Absolutely. Whether you are vegan, gluten-free, keto, halal, or have specific allergen requirements, our private chefs and partner restaurants will craft a customized culinary menu for you. Please indicate your needs when filling out your booking details.'
  },
  {
    question: 'How far in advance should we secure our dates?',
    answer: 'Because we operate exclusively with high-end private charters and highly specialized local guides, our spots are limited. We highly recommend booking at least 2 to 4 weeks in advance, especially during peak seasons.'
  },
  {
    question: 'What should we bring with us?',
    answer: 'For the Volcano Adventure: bring a warm windbreaker/hoodie (temperatures can drop to 12°C/53°F at sunrise), sunglasses, and closed-toe shoes. For the Ocean Cruise: bring swimsuits, high SPF sunblock, and light linen wear. For the Jungle Retreat: bring comfortable walking sandals and a change of garments for the purifying water ritual.'
  }
];

export const GALLERY_PHOTOS = [
  { url: '/bali_volcano_bg_1783528702622.jpg', category: 'volcano', title: 'Mount Batur Caldera Peak' },
  { url: '/bali_jeep_adventure_1783528719252.jpg', category: 'volcano', title: 'Off-road 4x4 Cruisers' },
  { url: '/bali_ocean_bg_1783528769356.jpg', category: 'ocean', title: 'Nusa Penida Yachting' },
  { url: '/ocean_luxury_escape_1783528733687.jpg', category: 'ocean', title: 'Turquoise Escapes' },
  { url: '/bali_jungle_bg_1783528784335.jpg', category: 'jungle', title: 'Ubud River Valleys' },
  { url: '/serene_jungle_retreat_1783528749017.jpg', category: 'jungle', title: 'Tropical Infinity Bliss' }
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'toyota-avanza',
    name: 'New Avanza',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783761973/24693abb-f732-49b4-ba68-28c882af0c16.png',
    passengers: 6,
    transmission: 'Manual / Automatic',
    engine: '1,500 cc',
    priceWithDriverPerDay: 450000,
    priceWithoutDriverPerDay: 300000,
    description: 'Sewa mobil New Avanza terbaru di Bali. Dilengkapi kabin yang nyaman, AC dingin merata, dan suspensi mumpuni untuk keluarga Anda.',
    features: ['6 Kursi Penumpang', 'Driver Profesional', 'Bahan Bakar Minyak (BBM)', 'AC Double Blower', 'Bersih & Wangi']
  },
  {
    id: 'toyota-innova',
    name: 'Innova Reborn',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762018/64feebd4-e9e7-4ffe-ac80-801b1ab26fd0.png',
    passengers: 6,
    transmission: 'Automatic',
    engine: '2,400 cc Diesel',
    priceWithDriverPerDay: 600000,
    priceWithoutDriverPerDay: 450000,
    description: 'Kabin super luas, suspensi empuk, dan mesin diesel bertenaga tangguh. Kenyamanan perjalanan berkelas VIP bersama keluarga.',
    features: ['6 Kursi Penumpang', 'Driver Profesional', 'Bahan Bakar Minyak (BBM)', 'Kabin Luas & Senyap', 'AC Dingin Maksimal']
  },
  {
    id: 'innova-zenix',
    name: 'Innova Zenix Type Q',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762059/56d3602a-cd36-437e-9a76-eab2be375ce3.png',
    passengers: 5,
    transmission: 'Automatic',
    engine: '2,000 cc Hybrid',
    priceWithDriverPerDay: 1200000,
    priceWithoutDriverPerDay: 0,
    description: 'Armada premium generasi terbaru dengan teknologi Hybrid senyap, captain seat mewah, dan interior eksklusif kelas VIP.',
    features: ['5 Seat Penumpang', 'Driver VIP & BBM', 'Captain Seat Premium', 'Panoramic Roof', 'Kabin Mewah Senyap']
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762106/74503d32-3371-4191-a619-7b1cd976e1d2.png',
    passengers: 5,
    transmission: 'Automatic',
    engine: '2,500 cc',
    priceWithDriverPerDay: 2500000,
    priceWithoutDriverPerDay: 0,
    description: 'Simbol kemewahan sejati dan kenyamanan VIP First-Class. Dilengkapi dengan suspensi udara super empuk dan interior megah.',
    features: ['5 Seat VIP', 'Driver VIP & BBM', 'Kabin First-Class', 'Electric Sliding Doors', 'AC Double Blower']
  },
  {
    id: 'hiace-commuter',
    name: 'Hiace Commuter',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762136/882d66e6-45b8-429b-a17f-6769179a7221.png',
    passengers: 15,
    transmission: 'Manual',
    engine: '2,500 cc Diesel',
    priceWithDriverPerDay: 1000000,
    priceWithoutDriverPerDay: 0,
    description: 'Mikrobus tangguh untuk rombongan keluarga besar atau rombongan pariwisata. Lapang, nyaman, dan handal menyusuri Bali.',
    features: ['15 Seat Penumpang', 'Sopir Pariwisata & BBM', 'Kabin Sangat Lapang', 'AC Multi-Zone Dingin', 'Sangat Nyaman']
  },
  {
    id: 'bus-29',
    name: 'Bus 29 Seat',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762175/1dcdb7c6-c3ac-4b4a-b509-fa0697eb985f.png',
    passengers: 29,
    transmission: 'Manual',
    engine: 'Diesel Multi',
    priceWithDriverPerDay: 2000000,
    priceWithoutDriverPerDay: 0,
    description: 'Bus pariwisata medium berkapasitas besar. Sangat nyaman untuk rombongan instansi, korporasi, maupun rombongan keluarga besar.',
    features: ['29 Seat Rombongan', 'Sopir Bus Berlisensi & BBM', 'Bagasi Luas', 'Audio Karaoke', 'AC Dingin Merata']
  }
];

