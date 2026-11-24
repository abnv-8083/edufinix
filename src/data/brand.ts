export interface BatchTiming {
  name: string;
  time: string;
  description: string;
  schedule: string;
}

export interface AcademyBenefit {
  id: string;
  number: string;
  title: string;
  description: string;
  badge?: string;
  termsNotice?: string;
}

export const BRAND_INFO = {
  name: "Edufinix",
  fullName: "Edufinix Trading Academy",
  tagline: "Learn. Trade. Grow.",
  industry: "Forex Trading Education",
  location: {
    city: "Kozhikode",
    state: "Kerala",
    country: "India",
    display: "Kozhikode, Kerala, India",
    notes: "Offline academy premises situated in Kozhikode with dedicated practical trading facilities.",
  },
  contact: {
    phone: "+91 6369-637566",
    phoneRaw: "+916369637566",
    email: "edufinixacademy@gmail.com",
    instagram: "@edufinix_academy_",
    instagramUrl: "https://instagram.com/edufinix_academy_",
    whatsappNumber: "916369637566",
    whatsappDefaultMessage: "Hello Edufinix, I would like to know more about your Forex trading programs and upcoming batches.",
    get whatsappUrl() {
      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
    },
  },
  batches: [
    {
      name: "Morning Batch",
      time: "10:00 AM – 12:00 PM",
      description: "Focused live European market open session and structured foundational lessons.",
      schedule: "Trading Days Only (Mon – Thu)",
    },
    {
      name: "Evening Batch",
      time: "05:00 PM – 07:00 PM",
      description: "New York session overlap, live market execution analysis, and practical case studies.",
      schedule: "Trading Days Only (Mon – Thu)",
    },
  ] as BatchTiming[],
  scheduleNotice: "Classes are conducted during trading days only. There are no classes from Friday through Sunday.",
  disclaimer: "Forex trading involves significant financial risk and may not be suitable for every individual. Educational content provided by Edufinix is intended for learning purposes and does not constitute personalised financial or investment advice.",
  vision: "To become a trusted leader in financial market education by empowering individuals with practical trading skills, fostering financial literacy and creating a community of confident and disciplined market participants.",
  mission: "To deliver high-quality, practical and skill-based financial market education that enables individuals to develop market knowledge and trading discipline.",
  overview: "At Edufinix Trading Academy, we believe that financial literacy and market expertise are essential skills in today's economy. Our mission is to make quality financial education accessible to students, professionals, entrepreneurs and individuals seeking to build a strong foundation in Forex trading. With a focus on skill development, continuous learning and practical application, Edufinix Trading Academy is committed to helping individuals enhance their financial knowledge and improve their market decision-making abilities.",
  marketEscape: {
    title: "Mentorship & Market Escape",
    tagline: "Beyond the Trading Screen",
    description: "An immersive two-day camping experience at a luxury resort, designed to provide psychological resilience and mindset development. The experience focuses on emotional stability and the disciplined mindset required for trading.",
    highlights: [
      "Psychological resilience under stress",
      "Disciplined trading routines & journal audit",
      "Emotional balance & mental reset away from screens",
      "Executive peer bonding with fellow traders",
    ],
  },
};

export const ACADEMY_BENEFITS: AcademyBenefit[] = [
  {
    id: "live-trading",
    number: "01",
    title: "Live Trading Sessions",
    description: "Observe real-time market execution during active session hours. Understand market structure, entry zones, and risk controls as live prices unfold.",
  },
  {
    id: "live-qa",
    number: "02",
    title: "Live Q&A Sessions",
    description: "Daily interactive doubt clearance where questions are solved immediately against the current live market charts.",
  },
  {
    id: "24h-support",
    number: "03",
    title: "24-Hour Mentor Support",
    description: "Direct academic guidance and analytical support around the clock to support your learning outside classroom hours.",
  },
  {
    id: "funded-account",
    number: "04",
    title: "Funded-Account Support",
    description: "Guidance on institutional evaluation frameworks, disciplined drawdown control, and funded account requirements.",
    termsNotice: "Availability and eligibility are subject to academy terms and individual performance benchmarks.",
  },
  {
    id: "signal-bot",
    number: "05",
    title: "Signal Bot Access After Course Completion",
    description: "Access our proprietary analytical signal tool upon successful program completion to complement your personal chart analysis.",
    termsNotice: "Access provided following verified course completion and subject to academy terms.",
  },
  {
    id: "lifelong-community",
    number: "06",
    title: "Lifelong Community Access",
    description: "Join an active network of disciplined traders in Kerala. Attend regular market meetups, share trade reviews, and grow together.",
  },
  {
    id: "lifelong-mentor",
    number: "07",
    title: "Lifelong Mentor Support",
    description: "Your relationship with Edufinix does not end with the syllabus. Receive ongoing guidance and strategy reviews throughout your trading journey.",
  },
  {
    id: "personal-strategy",
    number: "08",
    title: "Personalised Trading Strategy",
    description: "Develop a simplified, tailored trading plan engineered around your risk tolerance, personality, and preferred trading sessions.",
  },
];

