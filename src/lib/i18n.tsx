import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "@/data/wastes";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ta", label: "தமிழ்" },
  { code: "hi", label: "हिं" },
];

type Dict = Record<string, Record<Lang, string>>;

export const T: Dict = {
  appName: { en: "Scrap Value", ta: "ஸ்கிராப் வேல்யூ", hi: "स्क्रैप वैल्यू" },
  tagline: { en: "Scan · Sort · Sell", ta: "ஸ்கேன் · பிரி · விற்", hi: "स्कैन · छाँटें · बेचें" },
  navHome: { en: "Home", ta: "முகப்பு", hi: "होम" },
  navAbout: { en: "About us", ta: "எங்களைப் பற்றி", hi: "हमारे बारे में" },
  navTeam: { en: "Team", ta: "குழு", hi: "टीम" },
  scan: { en: "Scan", ta: "ஸ்கேன்", hi: "स्कैन" },
  search: { en: "Search", ta: "தேடு", hi: "खोजें" },

  heroBadge: {
    en: "For kabadi walas, first · 3 languages",
    ta: "கபாடி வாலாக்களுக்காக · 3 மொழிகள்",
    hi: "कबाड़ी वालों के लिए · 3 भाषाएँ",
  },
  heroTitle1: { en: "Point & learn", ta: "காட்டு, தெரிந்து கொள்", hi: "दिखाओ और जानो" },
  heroTitle2: { en: "what to sell.", ta: "எதை விற்பது என்று.", hi: "क्या बेचना है।" },
  heroBody: {
    en: "Scan any scrap with your camera. Scrap Value tells you the material, how it is recycled, and the dealers who buy it.",
    ta: "எந்த கழிவையும் கேமராவால் ஸ்கேன் செய்யுங்கள். அது என்ன பொருள், எப்படி மறுசுழற்சி செய்யப்படுகிறது, யார் வாங்குவார்கள் என்பதை ஸ்கிராப் வேல்யூ சொல்லும்.",
    hi: "किसी भी कबाड़ को कैमरे से स्कैन करें। स्क्रैप वैल्यू बताता है कि वह क्या है, कैसे रीसायकल होता है और कौन ख़रीदता है।",
  },
  scanCta: { en: "SCRAP & SCAN", ta: "ஸ்கிராப் & ஸ்கேன்", hi: "स्क्रैप और स्कैन" },
  howItWorks: { en: "How it works", ta: "எப்படி வேலை செய்கிறது", hi: "यह कैसे काम करता है" },
  statWastes: { en: "waste types", ta: "கழிவு வகைகள்", hi: "कचरा प्रकार" },
  statDealers: { en: "dealers each", ta: "வியாபாரிகள் தலா", hi: "प्रति डीलर" },
  statLangs: { en: "languages", ta: "மொழிகள்", hi: "भाषाएँ" },

  aboutKicker: { en: "(a) About us", ta: "(அ) எங்களைப் பற்றி", hi: "(क) हमारे बारे में" },
  aboutTitle: {
    en: "A field tool for the people who move India's waste.",
    ta: "இந்தியாவின் கழிவை நகர்த்தும் மக்களுக்கான களக் கருவி.",
    hi: "भारत का कचरा उठाने वालों के लिए एक ज़मीनी औज़ार।",
  },
  aboutBody1: {
    en: "Kabadi walas collect, sort and weigh more material than any formal facility in India. Yet the full value of what passes through their hands is rarely visible to them.",
    ta: "இந்தியாவின் எந்த முறையான நிலையத்தையும் விட கபாடி வாலாக்கள் அதிகம் சேகரித்து, பிரித்து, எடைபோடுகிறார்கள். ஆனால் அவர்கள் கையில் செல்லும் பொருளின் முழு மதிப்பு அவர்களுக்கு தெரிவதில்லை.",
    hi: "कबाड़ी वाले भारत की किसी भी औपचारिक इकाई से ज़्यादा सामान जमा, छँटाई और तौल करते हैं। फिर भी उनके हाथ से गुज़रने वाले सामान की पूरी कीमत उन्हें पता नहीं होती।",
  },
  aboutBody2: {
    en: "Scrap Value puts that knowledge in their hand. One scan names the material, shows what it can become, and lists up to three real recyclers with contact details.",
    ta: "ஸ்கிராப் வேல்யூ அந்த அறிவை அவர்கள் கையில் தருகிறது. ஒரு ஸ்கேன் — பொருளின் பெயர், அது என்னவாக மாறும், மற்றும் மூன்று உண்மையான மறுசுழற்சியாளர்களின் தொடர்பு.",
    hi: "स्क्रैप वैल्यू वह जानकारी उनके हाथ में देता है। एक स्कैन — सामान का नाम, वह क्या बन सकता है, और तीन असली रीसाइक्लर के संपर्क।",
  },

  featuresKicker: { en: "(b) App features", ta: "(ஆ) செயலி வசதிகள்", hi: "(ख) ऐप की सुविधाएँ" },
  featuresTitle: {
    en: "Built for a thumb, a sun and a busy weighbridge.",
    ta: "ஒரு கட்டைவிரல், வெயில், பரபரப்பான தராசுக்காக உருவாக்கப்பட்டது.",
    hi: "एक अंगूठे, धूप और व्यस्त तराज़ू के लिए बनाया गया।",
  },
  feat1Title: { en: "Camera scan", ta: "கேமரா ஸ்கேன்", hi: "कैमरा स्कैन" },
  feat1Body: {
    en: "Point at the item. Get the material, its category and today's indicative rate in seconds.",
    ta: "பொருளை காட்டுங்கள். வகை, பிரிவு மற்றும் இன்றைய தோராய விலை உடனே.",
    hi: "सामान पर कैमरा रखें। प्रकार, श्रेणी और आज का अनुमानित रेट तुरंत।",
  },
  feat2Title: { en: "Trilingual search", ta: "மும்மொழி தேடல்", hi: "तीन भाषाओं में खोज" },
  feat2Body: {
    en: "Type in English, தமிழ் or हिंदी. Search understands all three, so no one is left out.",
    ta: "English, தமிழ் அல்லது हिंदी-யில் தட்டச்சு செய்யுங்கள். மூன்றும் புரியும்.",
    hi: "English, தமிழ் या हिंदी में लिखें। तीनों समझ में आती हैं।",
  },
  feat3Title: { en: "Dealer pathways", ta: "வியாபாரி வழிகள்", hi: "डीलर रास्ते" },
  feat3Body: {
    en: "Up to three recycling routes per waste, each with a company, location and contact.",
    ta: "ஒவ்வொரு கழிவுக்கும் மூன்று மறுசுழற்சி வழிகள் — நிறுவனம், இடம், தொடர்பு.",
    hi: "हर कचरे के लिए तीन रीसाइक्लिंग रास्ते — कंपनी, जगह और संपर्क।",
  },

  guideKicker: { en: "(c) How to scan & search", ta: "(இ) எப்படி ஸ்கேன் / தேட", hi: "(ग) स्कैन और खोज कैसे करें" },
  guideTitle: {
    en: "Three steps. No training needed.",
    ta: "மூன்று படிகள். பயிற்சி தேவையில்லை.",
    hi: "तीन क़दम। कोई ट्रेनिंग नहीं चाहिए।",
  },
  step1Title: { en: "Open the camera", ta: "கேமராவை திறக்கவும்", hi: "कैमरा खोलें" },
  step1Body: {
    en: "Tap the big Scan button and hold the item steady in the frame at arm's length.",
    ta: "பெரிய ஸ்கேன் பொத்தானை அழுத்தி, பொருளை சட்டகத்தில் நிலையாக பிடிக்கவும்.",
    hi: "बड़ा स्कैन बटन दबाएँ और सामान को फ़्रेम में स्थिर रखें।",
  },
  step2Title: { en: "Let it read", ta: "அது படிக்கட்டும்", hi: "उसे पढ़ने दें" },
  step2Body: {
    en: "The app names the material, its category and the indicative market rate.",
    ta: "செயலி பொருளின் பெயர், பிரிவு மற்றும் தோராய சந்தை விலையை சொல்லும்.",
    hi: "ऐप सामान का नाम, श्रेणी और अनुमानित बाज़ार रेट बताता है।",
  },
  step3Title: { en: "Search or call", ta: "தேடு அல்லது அழை", hi: "खोजें या कॉल करें" },
  step3Body: {
    en: "No camera? Type the name in any of the three languages, then contact a recycler.",
    ta: "கேமரா இல்லையா? மூன்று மொழிகளில் ஏதேனும் ஒன்றில் பெயரை தட்டச்சு செய்யுங்கள்.",
    hi: "कैमरा नहीं? तीनों में से किसी भाषा में नाम लिखें, फिर रीसाइक्लर से संपर्क करें।",
  },

  impactKicker: { en: "(d) Why it matters", ta: "(ஈ) இது ஏன் முக்கியம்", hi: "(घ) यह क्यों ज़रूरी है" },
  impactTitle: {
    en: "Scrap is a market, not a pile.",
    ta: "கழிவு ஒரு சந்தை, குப்பை அல்ல.",
    hi: "कबाड़ एक बाज़ार है, ढेर नहीं।",
  },
  impactBody: {
    en: "India generates over 62 million tonnes of waste a year and less than a third is formally recovered. The informal sector already moves most of the rest — the missing link is knowing what a material is and who buys it. Better identification means better sorting, better prices and less material burned or buried.",
    ta: "இந்தியா ஆண்டுக்கு 62 மில்லியன் டன்னுக்கும் மேல் கழிவை உருவாக்குகிறது; மூன்றில் ஒரு பங்கு கூட முறையாக மீட்கப்படுவதில்லை. மீதியை முறைசாரா துறையே நகர்த்துகிறது — குறையெல்லாம், அது என்ன பொருள், யார் வாங்குவார் என்ற தகவல் மட்டுமே.",
    hi: "भारत हर साल 6.2 करोड़ टन से ज़्यादा कचरा पैदा करता है और एक-तिहाई से भी कम औपचारिक रूप से रिकवर होता है। बाक़ी ज़्यादातर असंगठित क्षेत्र ही उठाता है — कमी सिर्फ़ जानकारी की है।",
  },
  detailsBtn: { en: "Details — see all 20 wastes", ta: "விவரம் — 20 கழிவுகளையும் பார்", hi: "विवरण — सभी 20 कचरे देखें" },

  teamKicker: { en: "(e) Team behind", ta: "(உ) பின்னணி குழு", hi: "(ङ) पीछे की टीम" },
  punchline: {
    en: "Let the knowledge reach its right people.",
    ta: "அறிவு சரியான மனிதர்களைச் சென்றடையட்டும்.",
    hi: "ज्ञान सही लोगों तक पहुँचे।",
  },

  wastesTitle: { en: "The 20 waste types", ta: "20 கழிவு வகைகள்", hi: "20 कचरा प्रकार" },
  wastesSub: {
    en: "Tap any card to see what it becomes and who to contact.",
    ta: "எந்த அட்டையையும் தட்டி, அது என்னவாகும், யாரை தொடர்புகொள்வது என்று பாருங்கள்.",
    hi: "किसी भी कार्ड को दबाकर देखें कि वह क्या बनता है और किससे संपर्क करें।",
  },
  back: { en: "Back", ta: "பின்", hi: "वापस" },
  category: { en: "Category", ta: "பிரிவு", hi: "श्रेणी" },
  marketRate: { en: "Market rate", ta: "சந்தை விலை", hi: "बाज़ार रेट" },
  typicalBuyer: { en: "Typical buyer", ta: "வழக்கமான வாங்குபவர்", hi: "आम ख़रीदार" },
  pathwaysTitle: {
    en: "3 recycling pathways · with dealer contacts",
    ta: "3 மறுசுழற்சி வழிகள் · வியாபாரி தொடர்புடன்",
    hi: "3 रीसाइक्लिंग रास्ते · डीलर संपर्क सहित",
  },
  searchPlaceholder: {
    en: "Search in English, தமிழ் or हिंदी…",
    ta: "English, தமிழ் அல்லது हिंदी-யில் தேடுங்கள்…",
    hi: "English, தமிழ் या हिंदी में खोजें…",
  },
  noResults: { en: "Nothing matched. Try another word.", ta: "எதுவும் கிடைக்கவில்லை. வேறு சொல்லை முயற்சிக்கவும்.", hi: "कुछ नहीं मिला। दूसरा शब्द आज़माएँ।" },
  scanTitle: { en: "Scan your scrap", ta: "உங்கள் கழிவை ஸ்கேன் செய்யுங்கள்", hi: "अपना कबाड़ स्कैन करें" },
  scanSub: {
    en: "Use the camera or pick a photo. Keep the item in the middle of the frame.",
    ta: "கேமராவை பயன்படுத்துங்கள் அல்லது புகைப்படம் தேர்ந்தெடுங்கள். பொருளை நடுவில் வைக்கவும்.",
    hi: "कैमरा चलाएँ या फ़ोटो चुनें। सामान फ़्रेम के बीच में रखें।",
  },
  openCamera: { en: "Open camera", ta: "கேமராவை திற", hi: "कैमरा खोलें" },
  takePhoto: { en: "Take photo", ta: "படம் எடு", hi: "फ़ोटो लें" },
  uploadPhoto: { en: "Choose a photo", ta: "படத்தை தேர்ந்தெடு", hi: "फ़ोटो चुनें" },
  retake: { en: "Try again", ta: "மீண்டும் முயற்சி", hi: "फिर से" },
  identifying: { en: "Identifying…", ta: "அடையாளம் காண்கிறது…", hi: "पहचान रहे हैं…" },
  scanResult: { en: "Identified", ta: "அடையாளம் காணப்பட்டது", hi: "पहचान लिया" },
  scanFailed: {
    en: "Could not identify this one. Try a closer, brighter photo — or search by name.",
    ta: "அடையாளம் காண முடியவில்லை. அருகில், வெளிச்சத்தில் எடுத்து முயற்சிக்கவும்.",
    hi: "पहचान नहीं हो पाई। पास से, रोशनी में फ़ोटो लें — या नाम से खोजें।",
  },
  viewDetails: { en: "View full details", ta: "முழு விவரம்", hi: "पूरा विवरण" },
  cameraDenied: {
    en: "Camera not available. Choose a photo from your phone instead.",
    ta: "கேமரா கிடைக்கவில்லை. போனில் இருந்து படத்தை தேர்ந்தெடுங்கள்.",
    hi: "कैमरा उपलब्ध नहीं। फ़ोन से फ़ोटो चुनें।",
  },
  confidence: { en: "Confidence", ta: "நம்பகத்தன்மை", hi: "भरोसा" },
  teamTitle: { en: "The team behind Scrap Value", ta: "ஸ்கிராப் வேல்யூ பின்னணி குழு", hi: "स्क्रैप वैल्यू के पीछे की टीम" },
  teamPending: {
    en: "Team details coming soon.",
    ta: "குழு விவரங்கள் விரைவில்.",
    hi: "टीम की जानकारी जल्द ही।",
  },
  priceNote: {
    en: "Indicative rates compiled from public scrap-market sources. Confirm locally before trading.",
    ta: "பொது ஆதாரங்களில் இருந்து தொகுக்கப்பட்ட தோராய விலைகள். வர்த்தகத்திற்கு முன் உறுதி செய்யவும்.",
    hi: "सार्वजनिक स्रोतों से लिए गए अनुमानित रेट। सौदे से पहले स्थानीय रूप से पुष्टि करें।",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: keyof typeof T | string) => string };

const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => String(k) });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("sv-lang") as Lang | null;
    if (saved === "en" || saved === "ta" || saved === "hi") setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("sv-lang", l);
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = T[key];
      return entry ? entry[lang] : key;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
