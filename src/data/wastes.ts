export type Lang = "en" | "ta" | "hi";

export type CategoryKey =
  | "plastic"
  | "metal"
  | "paper"
  | "glass"
  | "ewaste"
  | "other";

export type Pathway = {
  product: Record<Lang, string>;
  company: string;
  location: string;
  contact: string;
};

export type Waste = {
  id: number;
  slug: string;
  category: CategoryKey;
  name: Record<Lang, string>;
  note: Record<Lang, string>;
  price: string;
  buyer: Record<Lang, string>;
  keywords: string[];
  pathways: Pathway[];
};

export const CATEGORIES: Record<CategoryKey, Record<Lang, string>> = {
  plastic: { en: "Plastic", ta: "பிளாஸ்டிக்", hi: "प्लास्टिक" },
  metal: { en: "Metal", ta: "உலோகம்", hi: "धातु" },
  paper: { en: "Paper", ta: "காகிதம்", hi: "कागज़" },
  glass: { en: "Glass", ta: "கண்ணாடி", hi: "काँच" },
  ewaste: { en: "E-waste", ta: "மின்னணு கழிவு", hi: "ई-कचरा" },
  other: { en: "Other", ta: "பிற", hi: "अन्य" },
};

export const WASTES: Waste[] = [
  {
    id: 1,
    slug: "pet-plastic-bottles",
    category: "plastic",
    name: {
      en: "PET plastic bottles",
      ta: "PET பிளாஸ்டிக் பாட்டில்கள்",
      hi: "PET प्लास्टिक बोतलें",
    },
    note: {
      en: "Clear drinking-water and soft-drink bottles. Remove caps and labels — clean, colour-sorted bottles fetch the best rate.",
      ta: "தெளிவான குடிநீர் மற்றும் குளிர்பான பாட்டில்கள். மூடி மற்றும் லேபிளை நீக்கவும் — சுத்தமான, நிற வாரியாக பிரிக்கப்பட்ட பாட்டில்களுக்கு அதிக விலை கிடைக்கும்.",
      hi: "साफ़ पानी और कोल्ड ड्रिंक की बोतलें। ढक्कन और लेबल हटाएँ — साफ़ और रंग के हिसाब से छँटी बोतलों का दाम सबसे अच्छा मिलता है।",
    },
    price: "₹15–22 / kg",
    buyer: { en: "Plastic recycler / baler", ta: "பிளாஸ்டிக் மறுசுழற்சியாளர்", hi: "प्लास्टिक रीसाइक्लर" },
    keywords: ["pet", "bottle", "water bottle", "பாட்டில்", "बोतल", "plastic bottle"],
    pathways: [
      {
        product: {
          en: "Recycled polyester staple fibre (RPSF) & yarn",
          ta: "மறுசுழற்சி பாலியெஸ்டர் இழை மற்றும் நூல்",
          hi: "रीसायकल्ड पॉलिएस्टर फ़ाइबर और धागा",
        },
        company: "Ganesha Ecosphere Ltd",
        location: "Kanpur, Uttar Pradesh",
        contact: "+91-512-2555505 · www.ganeshaecosphere.com",
      },
      {
        product: {
          en: "rPET flakes / fibre-grade flakes",
          ta: "rPET செதில்கள்",
          hi: "rPET फ्लेक्स",
        },
        company: "Gravita India Ltd — Plastic Division",
        location: "Jaipur, Rajasthan",
        contact: "+91-141-4057700 · info@gravitaindia.com",
      },
      {
        product: {
          en: "Recycled PE/PP resin for bottle-to-bottle use",
          ta: "பாட்டில்-to-பாட்டில் மறுசுழற்சி பிசின்",
          hi: "बोतल-से-बोतल रीसायकल्ड रेज़िन",
        },
        company: "Banyan Nation",
        location: "Hyderabad, Telangana",
        contact: "www.banyanation.com",
      },
    ],
  },
  {
    id: 2,
    slug: "hdpe-containers",
    category: "plastic",
    name: {
      en: "HDPE containers (bottles, cans)",
      ta: "HDPE கொள்கலன்கள்",
      hi: "HDPE कंटेनर (बोतल, कैन)",
    },
    note: {
      en: "Thick opaque containers — shampoo bottles, oil cans, detergent jars. Rinse off residue before selling.",
      ta: "தடிமனான ஒளிபுகா கொள்கலன்கள் — ஷாம்பு பாட்டில், எண்ணெய் கேன். விற்கும் முன் கழுவவும்.",
      hi: "मोटे अपारदर्शी कंटेनर — शैम्पू बोतल, तेल कैन। बेचने से पहले धो लें।",
    },
    price: "₹18–25 / kg",
    buyer: { en: "Plastic recycler", ta: "பிளாஸ்டிக் மறுசுழற்சியாளர்", hi: "प्लास्टिक रीसाइक्लर" },
    keywords: ["hdpe", "can", "jar", "கேன்", "डिब्बा"],
    pathways: [
      {
        product: {
          en: "HDPE granules for pipes, crates, buckets",
          ta: "குழாய், கூடை, வாளிக்கான HDPE துகள்கள்",
          hi: "पाइप, क्रेट, बाल्टी के लिए HDPE दाने",
        },
        company: "Gravita India Ltd — Plastic Division",
        location: "Jaipur, Rajasthan",
        contact: "+91-141-4057700 · info@gravitaindia.com",
      },
      {
        product: {
          en: "Recycled HDPE resin for FMCG bottles",
          ta: "FMCG பாட்டில்களுக்கான HDPE பிசின்",
          hi: "FMCG बोतलों के लिए HDPE रेज़िन",
        },
        company: "Banyan Nation",
        location: "Hyderabad, Telangana",
        contact: "www.banyanation.com",
      },
      {
        product: {
          en: "Moulded HDPE sheets & goods",
          ta: "HDPE தாள்கள் மற்றும் பொருட்கள்",
          hi: "मोल्डेड HDPE शीट और सामान",
        },
        company: "Regional plastic recycler cluster",
        location: "Gandhidham, Gujarat",
        contact: "via IndiaMART 'Recycled Plastic' directory",
      },
    ],
  },
  {
    id: 3,
    slug: "ldpe-bags-wrappers",
    category: "plastic",
    name: {
      en: "LDPE bags & wrappers",
      ta: "LDPE பைகள் மற்றும் உறைகள்",
      hi: "LDPE थैलियाँ और रैपर",
    },
    note: {
      en: "Soft carry bags, packaging film and wrappers. Low rate per kg, so collect in volume and keep it dry.",
      ta: "மென்மையான பைகள், பேக்கிங் படலம். கிலோவுக்கு குறைந்த விலை — அதிக அளவில் சேகரித்து உலர்வாக வைக்கவும்.",
      hi: "मुलायम थैलियाँ और पैकिंग फ़िल्म। रेट कम है — मात्रा में जमा करें और सूखा रखें।",
    },
    price: "₹5–10 / kg",
    buyer: { en: "Local scrap dealer", ta: "உள்ளூர் கபாடி வியாபாரி", hi: "स्थानीय कबाड़ी" },
    keywords: ["ldpe", "bag", "wrapper", "polythene", "பை", "थैली"],
    pathways: [
      {
        product: { en: "LDPE granules for bin liners", ta: "குப்பை பைக்கான LDPE துகள்கள்", hi: "बिन लाइनर के लिए LDPE दाने" },
        company: "Regional plastic recycler cluster",
        location: "Gandhidham, Gujarat",
        contact: "via IndiaMART directory / local scrap trader",
      },
      {
        product: { en: "Agglomerated LDPE for moulded goods", ta: "வார்ப்பு பொருட்களுக்கான LDPE", hi: "मोल्डेड सामान के लिए LDPE" },
        company: "Regional plastic recycler cluster",
        location: "Bhiwadi, Rajasthan",
        contact: "via IndiaMART directory / local scrap trader",
      },
      {
        product: { en: "Low-grade plastic sheeting & rolls", ta: "தரம் குறைந்த பிளாஸ்டிக் தாள்கள்", hi: "लो-ग्रेड प्लास्टिक शीट" },
        company: "Regional plastic recycler cluster",
        location: "Vasai, Maharashtra",
        contact: "via IndiaMART directory / local scrap trader",
      },
    ],
  },
  {
    id: 4,
    slug: "pvc-pipe-cable-scrap",
    category: "plastic",
    name: {
      en: "PVC pipe / cable-insulation scrap",
      ta: "PVC குழாய் / கேபிள் கழிவு",
      hi: "PVC पाइप / केबल स्क्रैप",
    },
    note: {
      en: "Rigid pipe offcuts and stripped cable insulation. Separate copper from insulation before weighing.",
      ta: "குழாய் துண்டுகள் மற்றும் கேபிள் உறை. எடைபோடும் முன் செம்பை தனியாக பிரிக்கவும்.",
      hi: "पाइप के टुकड़े और केबल की परत। तौलने से पहले तांबा अलग करें।",
    },
    price: "₹10–16 / kg",
    buyer: { en: "Plastic recycler", ta: "பிளாஸ்டிக் மறுசுழற்சியாளர்", hi: "प्लास्टिक रीसाइक्लर" },
    keywords: ["pvc", "pipe", "cable", "குழாய்", "पाइप"],
    pathways: [
      {
        product: { en: "Recycled PVC compound for pipes", ta: "குழாய்க்கான PVC கலவை", hi: "पाइप के लिए PVC कंपाउंड" },
        company: "Regional plastic recycler cluster",
        location: "Delhi NCR",
        contact: "via local scrap trader / IndiaMART",
      },
      {
        product: { en: "PVC flooring compound", ta: "தரை PVC கலவை", hi: "PVC फ़्लोरिंग कंपाउंड" },
        company: "Regional plastic recycler cluster",
        location: "Gujarat industrial belt",
        contact: "via local scrap trader / IndiaMART",
      },
      {
        product: { en: "Copper recovery + PVC granules from cable", ta: "செம்பு மீட்பு + PVC துகள்கள்", hi: "तांबा रिकवरी + PVC दाने" },
        company: "Gravita India Ltd — Scrap Procurement",
        location: "Jaipur, Rajasthan",
        contact: "+91 9784595009 · scrap@gravitaindia.com",
      },
    ],
  },
  {
    id: 5,
    slug: "iron-steel-scrap",
    category: "metal",
    name: { en: "Iron & steel scrap", ta: "இரும்பு மற்றும் எஃகு கழிவு", hi: "लोहा और स्टील स्क्रैप" },
    note: {
      en: "Rods, sheets, gates, machine parts. A magnet sticks to it — that is how you tell it from stainless or aluminium.",
      ta: "கம்பி, தகடு, கேட், இயந்திர பாகங்கள். காந்தம் ஒட்டும் — அதுவே அடையாளம்.",
      hi: "रॉड, शीट, गेट, मशीन पुर्ज़े। चुंबक चिपकता है — यही पहचान है।",
    },
    price: "₹25–45 / kg",
    buyer: { en: "Steel re-roller / foundry", ta: "எஃகு ரீ-ரோலர்", hi: "स्टील री-रोलर" },
    keywords: ["iron", "steel", "loha", "இரும்பு", "लोहा"],
    pathways: [
      {
        product: { en: "Rebar & billets (Electric Arc Furnace)", ta: "கம்பி மற்றும் பில்லெட்", hi: "सरिया और बिलेट" },
        company: "Tata Steel — Steel Recycling Business",
        location: "Rohtak, Haryana",
        contact: "'FerroHaat' app · www.tatasteel.com",
      },
      {
        product: { en: "Bulk ferrous scrap trading / auction", ta: "மொத்த இரும்பு கழிவு ஏலம்", hi: "थोक लोहा स्क्रैप नीलामी" },
        company: "MSTC Ltd (Ministry of Steel)",
        location: "Kolkata, West Bengal",
        contact: "www.mstcindia.co.in",
      },
      {
        product: { en: "Re-rolled sheet steel", ta: "ரீ-ரோல் எஃகு தகடு", hi: "री-रोल्ड शीट स्टील" },
        company: "Steel re-rolling mill cluster",
        location: "Mandi Gobindgarh, Punjab",
        contact: "via local scrap trader",
      },
    ],
  },
  {
    id: 6,
    slug: "aluminium-scrap",
    category: "metal",
    name: { en: "Aluminium scrap (cans, utensils)", ta: "அலுமினியம் கழிவு", hi: "एल्युमिनियम स्क्रैप" },
    note: {
      en: "Light, silver-grey, non-magnetic. Cans, old vessels, window frames. One of the best-paying common scraps.",
      ta: "இலகுவான, வெள்ளி நிற, காந்தம் ஒட்டாதது. நல்ல விலை தரும் கழிவு.",
      hi: "हल्का, चाँदी जैसा, चुंबक नहीं चिपकता। अच्छा दाम देने वाला स्क्रैप।",
    },
    price: "₹100–140 / kg",
    buyer: { en: "Aluminium smelter", ta: "அலுமினிய உருக்காலை", hi: "एल्युमिनियम स्मेल्टर" },
    keywords: ["aluminium", "aluminum", "can", "அலுமினியம்", "एल्युमिनियम"],
    pathways: [
      {
        product: { en: "Aluminium alloys & ingots", ta: "அலுமினிய கலவை மற்றும் கட்டிகள்", hi: "एल्युमिनियम अलॉय और इंगॉट" },
        company: "Gravita India Ltd — Aluminium Division",
        location: "Jaipur, Rajasthan",
        contact: "+91 90012 98469 · info@gravitaaluminium.com",
      },
      {
        product: { en: "Extrusions & auto parts", ta: "வாகன பாகங்கள்", hi: "एक्सट्रूज़न और ऑटो पुर्ज़े" },
        company: "Secondary aluminium smelter cluster",
        location: "Alwar / Bhiwadi, Rajasthan",
        contact: "via local scrap trader",
      },
      {
        product: { en: "Cast aluminium utensils & cookware", ta: "அலுமினிய பாத்திரங்கள்", hi: "एल्युमिनियम बर्तन" },
        company: "Utensil manufacturing cluster",
        location: "Wazirpur Industrial Area, Delhi",
        contact: "via local scrap trader",
      },
    ],
  },
  {
    id: 7,
    slug: "copper-wire-scrap",
    category: "metal",
    name: { en: "Copper wire scrap", ta: "செம்பு கம்பி கழிவு", hi: "तांबे का तार स्क्रैप" },
    note: {
      en: "Reddish-brown wire from motors and wiring. Stripped bright copper earns far more than insulated wire.",
      ta: "சிவப்பு-பழுப்பு கம்பி. உறை நீக்கிய செம்புக்கு அதிக விலை.",
      hi: "लाल-भूरा तार। परत हटा हुआ तांबा कहीं ज़्यादा दाम देता है।",
    },
    price: "₹450–700 / kg",
    buyer: { en: "Wire re-drawing unit", ta: "கம்பி இழுவை ஆலை", hi: "वायर री-ड्रॉइंग यूनिट" },
    keywords: ["copper", "wire", "tamba", "செம்பு", "तांबा"],
    pathways: [
      {
        product: { en: "Refined copper & copper alloys", ta: "சுத்திகரிக்கப்பட்ட செம்பு", hi: "रिफ़ाइंड तांबा" },
        company: "Gravita India Ltd — Copper Procurement",
        location: "Jaipur, Rajasthan",
        contact: "+91 9784595009 · scrap@gravitaindia.com",
      },
      {
        product: { en: "Re-drawn copper wire", ta: "மீண்டும் இழுக்கப்பட்ட செம்பு கம்பி", hi: "री-ड्रॉन तांबे का तार" },
        company: "Wire re-drawing unit cluster",
        location: "Mumbai / Delhi NCR",
        contact: "via local scrap trader",
      },
      {
        product: { en: "Brass alloy input (copper + zinc)", ta: "பித்தளை கலவைக்கான மூலப்பொருள்", hi: "पीतल मिश्र धातु इनपुट" },
        company: "Ashwani Metals Pvt Ltd",
        location: "Jamnagar, Gujarat",
        contact: "+91-288-2730351 · www.ashwanimetals.com",
      },
    ],
  },
  {
    id: 8,
    slug: "brass-scrap",
    category: "metal",
    name: { en: "Brass scrap", ta: "பித்தளை கழிவு", hi: "पीतल स्क्रैप" },
    note: {
      en: "Yellow-gold metal — taps, locks, lamps, idols. Heavier than aluminium and non-magnetic.",
      ta: "மஞ்சள்-தங்க நிற உலோகம் — குழாய், பூட்டு, விளக்கு. காந்தம் ஒட்டாது.",
      hi: "पीले-सुनहरे रंग की धातु — नल, ताले, दीपक। चुंबक नहीं चिपकता।",
    },
    price: "₹200–260 / kg",
    buyer: { en: "Brass foundry", ta: "பித்தளை வார்ப்பகம்", hi: "पीतल फ़ाउंड्री" },
    keywords: ["brass", "pital", "பித்தளை", "पीतल"],
    pathways: [
      {
        product: { en: "Brass fittings & plumbing components", ta: "பித்தளை குழாய் பொருட்கள்", hi: "पीतल फिटिंग और प्लंबिंग" },
        company: "Ashwani Metals Pvt Ltd",
        location: "Jamnagar, Gujarat",
        contact: "+91-288-2730351 · www.ashwanimetals.com",
      },
      {
        product: { en: "Brass electrical wiring accessories", ta: "மின் இணைப்பு பொருட்கள்", hi: "पीतल इलेक्ट्रिकल सामान" },
        company: "Rupam Group of Companies",
        location: "Jamnagar, Gujarat",
        contact: "Jamnagar brass export cluster (est. 1965)",
      },
      {
        product: { en: "Precision brass turned components", ta: "துல்லிய பித்தளை பாகங்கள்", hi: "प्रिसिजन पीतल पुर्ज़े" },
        company: "Precision Brass Parts India",
        location: "GIDC Estate, Shanker Tekri, Jamnagar",
        contact: "automata.net/company/precision-brass-parts-india",
      },
    ],
  },
  {
    id: 9,
    slug: "stainless-steel-scrap",
    category: "metal",
    name: { en: "Stainless steel scrap", ta: "துருப்பிடிக்காத எஃகு கழிவு", hi: "स्टेनलेस स्टील स्क्रैप" },
    note: {
      en: "Shiny kitchen vessels, sinks, appliance panels. Mostly non-magnetic and does not rust.",
      ta: "பளபளப்பான சமையல் பாத்திரங்கள், சிங்க். துரு பிடிக்காது.",
      hi: "चमकदार बर्तन, सिंक, पैनल। जंग नहीं लगता।",
    },
    price: "₹60–90 / kg",
    buyer: { en: "SS re-roller", ta: "SS ரீ-ரோலர்", hi: "SS री-रोलर" },
    keywords: ["stainless", "ss", "steel vessel", "பாத்திரம்", "स्टेनलेस"],
    pathways: [
      {
        product: { en: "SS kitchenware & utensils", ta: "SS சமையல் பாத்திரங்கள்", hi: "SS बर्तन" },
        company: "SS re-rolling mill cluster",
        location: "Wadhwan, Gujarat",
        contact: "via local scrap trader",
      },
      {
        product: { en: "SS appliance panels", ta: "SS உபகரண தகடுகள்", hi: "SS अप्लायंस पैनल" },
        company: "SS re-rolling mill cluster",
        location: "Jodhpur, Rajasthan",
        contact: "via local scrap trader",
      },
      {
        product: { en: "Bulk SS scrap trading / auction", ta: "மொத்த SS கழிவு ஏலம்", hi: "थोक SS स्क्रैप नीलामी" },
        company: "MSTC Ltd (Govt of India)",
        location: "Kolkata, West Bengal",
        contact: "www.mstcindia.co.in",
      },
    ],
  },
  {
    id: 10,
    slug: "lead-batteries",
    category: "metal",
    name: { en: "Lead (old batteries)", ta: "ஈயம் (பழைய பேட்டரி)", hi: "सीसा (पुरानी बैटरी)" },
    note: {
      en: "Hazardous. Never break open a battery or drain the acid. Sell only to a registered recycler.",
      ta: "ஆபத்தானது. பேட்டரியை உடைக்கவோ அமிலத்தை கொட்டவோ கூடாது. பதிவு பெற்ற மறுசுழற்சியாளருக்கே விற்கவும்.",
      hi: "ख़तरनाक। बैटरी तोड़ें नहीं, तेज़ाब न बहाएँ। केवल पंजीकृत रीसाइक्लर को बेचें।",
    },
    price: "₹110–140 / kg",
    buyer: { en: "Registered battery recycler", ta: "பதிவு பெற்ற பேட்டரி மறுசுழற்சியாளர்", hi: "पंजीकृत बैटरी रीसाइक्लर" },
    keywords: ["lead", "battery", "பேட்டரி", "बैटरी"],
    pathways: [
      {
        product: { en: "Pure lead, lead alloys & lead sheet", ta: "தூய ஈயம் மற்றும் ஈய தகடு", hi: "शुद्ध सीसा और सीसा शीट" },
        company: "Gravita India Ltd — Lead Division",
        location: "Phagi & Jaipur, Rajasthan",
        contact: "+91 90019 94913 · sales@gravitaindia.com",
      },
      {
        product: { en: "New battery buy-back / exchange", ta: "புதிய பேட்டரி பரிமாற்றம்", hi: "नई बैटरी एक्सचेंज" },
        company: "Exide Industries Ltd",
        location: "Kolkata, West Bengal",
        contact: "www.exideindustries.com",
      },
      {
        product: { en: "New battery buy-back / exchange", ta: "புதிய பேட்டரி பரிமாற்றம்", hi: "नई बैटरी एक्सचेंज" },
        company: "Amara Raja Energy & Mobility Ltd",
        location: "Tirupati, Andhra Pradesh",
        contact: "www.amararajabatteries.com",
      },
    ],
  },
  {
    id: 11,
    slug: "newspaper",
    category: "paper",
    name: { en: "Newspaper", ta: "பழைய செய்தித்தாள்", hi: "पुराना अख़बार" },
    note: {
      en: "Keep bundles dry and tied. Wet or mixed paper loses value immediately.",
      ta: "கட்டுகளை உலர்வாகவும் கட்டியும் வைக்கவும். நனைந்தால் விலை குறையும்.",
      hi: "गट्ठर सूखे और बँधे रखें। गीला काग़ज़ दाम गिरा देता है।",
    },
    price: "₹10–16 / kg",
    buyer: { en: "Paper mill agent", ta: "காகித ஆலை முகவர்", hi: "पेपर मिल एजेंट" },
    keywords: ["newspaper", "paper", "raddi", "செய்தித்தாள்", "अख़बार"],
    pathways: [
      {
        product: { en: "Recycled newsprint (deinked pulp)", ta: "மறுசுழற்சி நியூஸ்பிரிண்ட்", hi: "रीसायकल्ड न्यूज़प्रिंट" },
        company: "Khanna Paper Mills Ltd",
        location: "Uttar Pradesh",
        contact: "www.khannapaper.com",
      },
      {
        product: { en: "Recycled newsprint", ta: "மறுசுழற்சி நியூஸ்பிரிண்ட்", hi: "रीसायकल्ड न्यूज़प्रिंट" },
        company: "Star Paper Mills Ltd",
        location: "Saharanpur, Uttar Pradesh",
        contact: "www.starpapers.com",
      },
      {
        product: { en: "Egg trays & moulded pulp packaging", ta: "முட்டை தட்டு மற்றும் பேக்கிங்", hi: "अंडा ट्रे और मोल्डेड पैकिंग" },
        company: "Moulded-pulp unit cluster",
        location: "Regional — via local paper agent",
        contact: "via Paper Mart trade network",
      },
    ],
  },
  {
    id: 12,
    slug: "cardboard-cartons",
    category: "paper",
    name: { en: "Cardboard / cartons", ta: "அட்டைப்பெட்டி", hi: "गत्ता / कार्टन" },
    note: {
      en: "Flatten the boxes and remove tape. Corrugated board sells by weight at the mill agent.",
      ta: "பெட்டிகளை தட்டையாக்கி டேப்பை நீக்கவும். எடை அடிப்படையில் விற்கப்படும்.",
      hi: "डिब्बे चपटे करें और टेप हटाएँ। वज़न के हिसाब से बिकता है।",
    },
    price: "₹8–14 / kg",
    buyer: { en: "Paper mill agent", ta: "காகித ஆலை முகவர்", hi: "पेपर मिल एजेंट" },
    keywords: ["cardboard", "carton", "box", "அட்டை", "गत्ता"],
    pathways: [
      {
        product: { en: "New corrugated boxes & packaging board", ta: "புதிய அட்டைப்பெட்டிகள்", hi: "नए कार्टन और पैकेजिंग बोर्ड" },
        company: "ITC Ltd — Paperboards & Specialty Papers",
        location: "Bhadrachalam, Telangana · Kolkata (HQ)",
        contact: "via regional waste-paper agents",
      },
      {
        product: { en: "Kraft paper & packaging board", ta: "கிராஃப்ட் காகிதம்", hi: "क्राफ़्ट पेपर" },
        company: "N R Agarwal Industries Ltd",
        location: "Vapi, Gujarat",
        contact: "waste-paper based manufacturer since 1993",
      },
      {
        product: { en: "Multi-layer coated recycled board", ta: "பூசப்பட்ட மறுசுழற்சி அட்டை", hi: "कोटेड रीसायकल्ड बोर्ड" },
        company: "Mehali Papers Pvt Ltd",
        location: "Dahej, Gujarat",
        contact: "150,000 TPA coated board mill",
      },
    ],
  },
  {
    id: 13,
    slug: "mixed-office-paper",
    category: "paper",
    name: { en: "Mixed office paper / books", ta: "அலுவலக காகிதம் / புத்தகங்கள்", hi: "ऑफ़िस काग़ज़ / किताबें" },
    note: {
      en: "White paper and old books. Removing plastic covers and spiral binding raises the rate.",
      ta: "வெள்ளை காகிதம் மற்றும் பழைய புத்தகங்கள். பிளாஸ்டிக் அட்டையை நீக்கினால் விலை கூடும்.",
      hi: "सफ़ेद काग़ज़ और पुरानी किताबें। प्लास्टिक कवर हटाने पर दाम बढ़ता है।",
    },
    price: "₹6–12 / kg",
    buyer: { en: "Paper mill agent", ta: "காகித ஆலை முகவர்", hi: "पेपर मिल एजेंट" },
    keywords: ["office paper", "books", "notebook", "புத்தகம்", "किताब"],
    pathways: [
      {
        product: { en: "Tissue paper", ta: "திசு காகிதம்", hi: "टिशू पेपर" },
        company: "Shah Paper Mills (via Fibre Resources LLP)",
        location: "Vapi, Gujarat",
        contact: "+91-909-945-9000 · info@fibreresources.in",
      },
      {
        product: { en: "Writing & printing paper (deinked pulp)", ta: "எழுது மற்றும் அச்சு காகிதம்", hi: "लेखन और प्रिंटिंग पेपर" },
        company: "Khanna Paper Mills Ltd",
        location: "Uttar Pradesh",
        contact: "www.khannapaper.com",
      },
      {
        product: { en: "Low-grade recycled board", ta: "தரம் குறைந்த மறுசுழற்சி அட்டை", hi: "लो-ग्रेड रीसायकल्ड बोर्ड" },
        company: "N R Agarwal Industries Ltd",
        location: "Vapi, Gujarat",
        contact: "waste-paper based manufacturer",
      },
    ],
  },
  {
    id: 14,
    slug: "glass-bottles-reusable",
    category: "glass",
    name: { en: "Glass bottles (reusable)", ta: "கண்ணாடி பாட்டில் (மீள்பயன்)", hi: "काँच की बोतलें (पुन: प्रयोग)" },
    note: {
      en: "Unbroken bottles are worth more whole than as cullet — sell them to a bottle trader, not by weight.",
      ta: "உடையாத பாட்டில்களுக்கு அதிக மதிப்பு — எடையாக அல்ல, பாட்டில் வியாபாரிக்கு விற்கவும்.",
      hi: "साबुत बोतलें टूटे काँच से ज़्यादा दाम देती हैं — बोतल व्यापारी को बेचें।",
    },
    price: "₹1–4 / kg",
    buyer: { en: "Bottle trader / glass unit", ta: "பாட்டில் வியாபாரி", hi: "बोतल व्यापारी" },
    keywords: ["glass", "bottle", "கண்ணாடி", "काँच"],
    pathways: [
      {
        product: { en: "Refilled bottles (direct reuse)", ta: "மீண்டும் நிரப்பப்படும் பாட்டில்கள்", hi: "दोबारा भरी बोतलें" },
        company: "Local bottle trader / brewery network",
        location: "Regional — city bottle traders",
        contact: "via local scrap/bottle dealer",
      },
      {
        product: { en: "New glass bottles & containers (cullet)", ta: "புதிய கண்ணாடி பாட்டில்கள்", hi: "नई काँच की बोतलें" },
        company: "AGI Glaspac (AGI Greenpac Ltd)",
        location: "Hyderabad, Telangana",
        contact: "+91-40-23831771 · www.agiglaspac.com",
      },
      {
        product: { en: "Glass cullet for construction & tiles", ta: "கட்டுமான கண்ணாடி துகள்", hi: "निर्माण के लिए काँच कलेट" },
        company: "Regional glass processing unit",
        location: "Regional",
        contact: "via local glass/cullet trader",
      },
    ],
  },
  {
    id: 15,
    slug: "broken-glass-cullet",
    category: "glass",
    name: { en: "Broken glass / cullet", ta: "உடைந்த கண்ணாடி", hi: "टूटा काँच / कलेट" },
    note: {
      en: "Handle with thick gloves and store in a closed drum. Sort by colour where you can.",
      ta: "தடிமனான கையுறை அணிந்து மூடிய டிரம்மில் வைக்கவும். நிறம் வாரியாக பிரிக்கவும்.",
      hi: "मोटे दस्ताने पहनें और बंद ड्रम में रखें। रंग के हिसाब से छाँटें।",
    },
    price: "₹1–3 / kg",
    buyer: { en: "Glass manufacturing unit", ta: "கண்ணாடி தொழிற்சாலை", hi: "काँच निर्माण इकाई" },
    keywords: ["broken glass", "cullet", "உடைந்த கண்ணாடி", "टूटा काँच"],
    pathways: [
      {
        product: { en: "New glass bottles & jars", ta: "புதிய கண்ணாடி பாட்டில்கள்", hi: "नई बोतलें और जार" },
        company: "AGI Glaspac (AGI Greenpac Ltd)",
        location: "Hyderabad, Telangana",
        contact: "+91-40-23831771 · www.agiglaspac.com",
      },
      {
        product: { en: "New glass containers", ta: "புதிய கண்ணாடி கொள்கலன்கள்", hi: "नए काँच कंटेनर" },
        company: "Hindustan National Glass & Industries Ltd",
        location: "Kolkata, WB · plant at Bahadurgarh, Haryana",
        contact: "www.hngil.com",
      },
      {
        product: { en: "Glass wool / fibreglass insulation", ta: "கண்ணாடி இழை காப்பு", hi: "ग्लास वूल इन्सुलेशन" },
        company: "Regional fibreglass processing unit",
        location: "Regional",
        contact: "via local glass/cullet trader",
      },
    ],
  },
  {
    id: 16,
    slug: "old-mobile-phones",
    category: "ewaste",
    name: { en: "Old mobile phones", ta: "பழைய கைபேசிகள்", hi: "पुराने मोबाइल फ़ोन" },
    note: {
      en: "Sold per piece, not per kg. A working handset is worth far more refurbished than as scrap.",
      ta: "கிலோ அல்ல, ஒரு பீஸ் அடிப்படையில். வேலை செய்யும் போன் அதிக விலை.",
      hi: "किलो नहीं, प्रति पीस बिकता है। चालू फ़ोन का दाम कहीं ज़्यादा।",
    },
    price: "₹50–300 / piece",
    buyer: { en: "Authorised e-waste collector", ta: "அங்கீகரிக்கப்பட்ட மின்கழிவு சேகரிப்பாளர்", hi: "अधिकृत ई-कचरा संग्राहक" },
    keywords: ["mobile", "phone", "கைபேசி", "मोबाइल"],
    pathways: [
      {
        product: { en: "Recovered gold, copper & rare metals", ta: "தங்கம், செம்பு மீட்பு", hi: "सोना, तांबा रिकवरी" },
        company: "Attero Recycling Pvt Ltd",
        location: "Roorkee, Uttarakhand · Noida (HQ)",
        contact: "www.attero.in",
      },
      {
        product: { en: "Refurbished handset resale", ta: "புதுப்பிக்கப்பட்ட போன் விற்பனை", hi: "रीफ़र्बिश्ड फ़ोन बिक्री" },
        company: "Cashify (Fixcraft Services Pvt Ltd)",
        location: "Gurugram, Haryana",
        contact: "www.cashify.in",
      },
      {
        product: { en: "Manual dismantling & material recovery", ta: "கைமுறை பிரித்தல் மற்றும் மீட்பு", hi: "मैनुअल डिस्मेंटलिंग और रिकवरी" },
        company: "E-Parisaraa Pvt Ltd",
        location: "Peenya Industrial Estate, Bengaluru",
        contact: "+91-80-28360902 · recycle@ewasteindia.com",
      },
    ],
  },
  {
    id: 17,
    slug: "computer-laptop-pcbs",
    category: "ewaste",
    name: { en: "Computer / laptop parts (PCBs)", ta: "கணினி / லேப்டாப் பாகங்கள்", hi: "कंप्यूटर / लैपटॉप पुर्ज़े (PCB)" },
    note: {
      en: "Green circuit boards carry gold and copper. Never burn them — burning destroys value and your health.",
      ta: "பச்சை சர்க்யூட் போர்டுகளில் தங்கம், செம்பு உள்ளது. எரிக்க வேண்டாம்.",
      hi: "हरे सर्किट बोर्ड में सोना-तांबा होता है। कभी न जलाएँ।",
    },
    price: "₹150–400 / kg",
    buyer: { en: "E-waste recycler", ta: "மின்கழிவு மறுசுழற்சியாளர்", hi: "ई-कचरा रीसाइक्लर" },
    keywords: ["pcb", "computer", "laptop", "circuit board", "கணினி", "कंप्यूटर"],
    pathways: [
      {
        product: { en: "Recovered copper, gold & rare-earth metals", ta: "செம்பு, தங்க மீட்பு", hi: "तांबा, सोना रिकवरी" },
        company: "Attero Recycling Pvt Ltd",
        location: "Roorkee, Uttarakhand · Noida (HQ)",
        contact: "www.attero.in",
      },
      {
        product: { en: "PCB recycling & metal recovery", ta: "PCB மறுசுழற்சி", hi: "PCB रीसाइक्लिंग" },
        company: "Cerebra Integrated Technologies Ltd",
        location: "Kolar, Karnataka · Bengaluru (HQ)",
        contact: "www.cerebra.co.in",
      },
      {
        product: { en: "Manual dismantling & material recovery", ta: "கைமுறை பிரித்தல்", hi: "मैनुअल डिस्मेंटलिंग" },
        company: "E-Parisaraa Pvt Ltd",
        location: "Peenya Industrial Estate, Bengaluru",
        contact: "+91-80-28360902 · recycle@ewasteindia.com",
      },
    ],
  },
  {
    id: 18,
    slug: "old-wires-cables",
    category: "ewaste",
    name: { en: "Old wires & cables", ta: "பழைய கம்பிகள் மற்றும் கேபிள்கள்", hi: "पुराने तार और केबल" },
    note: {
      en: "Value depends on the copper inside. Strip the insulation by hand or blade — never by burning.",
      ta: "உள்ளே உள்ள செம்பே மதிப்பு. உறையை கையால் நீக்கவும் — எரிக்க வேண்டாம்.",
      hi: "अंदर के तांबे से दाम तय होता है। परत हाथ से हटाएँ — जलाएँ नहीं।",
    },
    price: "₹80–150 / kg",
    buyer: { en: "Scrap trader / recycler", ta: "கழிவு வியாபாரி", hi: "स्क्रैप व्यापारी" },
    keywords: ["wire", "cable", "கம்பி", "तार"],
    pathways: [
      {
        product: { en: "Recovered copper; reprocessed insulation", ta: "செம்பு மீட்பு", hi: "तांबा रिकवरी" },
        company: "Eco Recycling Ltd (Ecoreco)",
        location: "Andheri (E), Mumbai, Maharashtra",
        contact: "+91-22-40052951 · info@ecoreco.com",
      },
      {
        product: { en: "Recovered copper", ta: "மீட்கப்பட்ட செம்பு", hi: "रिकवर्ड तांबा" },
        company: "Attero Recycling Pvt Ltd",
        location: "Roorkee, Uttarakhand · Noida (HQ)",
        contact: "www.attero.in",
      },
      {
        product: { en: "Manual dismantling & material recovery", ta: "கைமுறை பிரித்தல்", hi: "मैनुअल डिस्मेंटलिंग" },
        company: "E-Parisaraa Pvt Ltd",
        location: "Peenya Industrial Estate, Bengaluru",
        contact: "+91-80-28360902 · recycle@ewasteindia.com",
      },
    ],
  },
  {
    id: 19,
    slug: "rubber-tyre-scrap",
    category: "other",
    name: { en: "Rubber & tyre scrap", ta: "ரப்பர் மற்றும் டயர் கழிவு", hi: "रबर और टायर स्क्रैप" },
    note: {
      en: "Bulky and low rate per kg. Worth collecting only in quantity, and only for a registered processor.",
      ta: "பருமனானது, கிலோ விலை குறைவு. அதிக அளவில் மட்டுமே லாபம்.",
      hi: "भारी और रेट कम। मात्रा में ही फ़ायदेमंद।",
    },
    price: "₹8–15 / kg",
    buyer: { en: "Rubber recycler", ta: "ரப்பர் மறுசுழற்சியாளர்", hi: "रबर रीसाइक्लर" },
    keywords: ["tyre", "rubber", "டயர்", "टायर"],
    pathways: [
      {
        product: { en: "Crumb rubber & CRM for bitumen roads", ta: "சாலை தார்க்கான ரப்பர் துகள்", hi: "सड़क बिटुमेन के लिए क्रम्ब रबर" },
        company: "Tinna Rubber & Infrastructure Ltd",
        location: "Delhi (HQ) · Panipat, Mathura plants",
        contact: "www.tinna.in",
      },
      {
        product: { en: "Reclaimed rubber", ta: "மீட்கப்பட்ட ரப்பர்", hi: "रीक्लेम्ड रबर" },
        company: "Gravita India Ltd — Rubber Division",
        location: "Jaipur, Rajasthan",
        contact: "www.gravitaindia.com",
      },
      {
        product: { en: "Tyre-derived fuel / pyrolysis oil", ta: "பைராலிசிஸ் எண்ணெய்", hi: "पायरोलिसिस तेल" },
        company: "Regional pyrolysis unit",
        location: "Regional — largely unorganised",
        contact: "via local scrap tyre trader",
      },
    ],
  },
  {
    id: 20,
    slug: "textile-cloth-waste",
    category: "other",
    name: { en: "Textile / cloth waste", ta: "துணி கழிவு", hi: "कपड़ा स्क्रैप" },
    note: {
      en: "Dry, clean cloth only. Cotton and polyester sorted separately fetch a better rate than mixed bundles.",
      ta: "உலர்ந்த, சுத்தமான துணி மட்டும். பருத்தி மற்றும் பாலியெஸ்டர் தனித்தனியாக பிரித்தால் நல்ல விலை.",
      hi: "सूखा, साफ़ कपड़ा ही। कॉटन और पॉलिएस्टर अलग छाँटने पर दाम बेहतर।",
    },
    price: "₹5–12 / kg",
    buyer: { en: "Textile recycler", ta: "ஜவுளி மறுசுழற்சியாளர்", hi: "टेक्सटाइल रीसाइक्लर" },
    keywords: ["cloth", "textile", "fabric", "துணி", "कपड़ा"],
    pathways: [
      {
        product: { en: "Recycled polyester staple fibre", ta: "மறுசுழற்சி பாலியெஸ்டர் இழை", hi: "रीसायकल्ड पॉलिएस्टर फ़ाइबर" },
        company: "Ganesha Ecosphere Ltd",
        location: "Kanpur, Uttar Pradesh",
        contact: "+91-512-2555505 · www.ganeshaecosphere.com",
      },
      {
        product: { en: "Shoddy yarn", ta: "ஷோடி நூல்", hi: "शोडी यार्न" },
        company: "Panipat textile-recycling cluster",
        location: "Panipat, Haryana",
        contact: "Asia's largest recycled-textile hub — via local unit",
      },
      {
        product: { en: "Wiping rags & industrial stuffing", ta: "துடைப்பு துணி மற்றும் நிரப்பு", hi: "वाइपिंग रैग और स्टफ़िंग" },
        company: "Regional rag-trading unit",
        location: "Panipat, Haryana / Mumbai, Maharashtra",
        contact: "via local scrap trader",
      },
    ],
  },
];

export function findWaste(slug: string) {
  return WASTES.find((w) => w.slug === slug);
}
