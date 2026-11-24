export interface AssetPhoto {
  id: string;
  url: string;
  alt: string;
  category: 'classroom' | 'workstation' | 'retreat' | 'community' | 'analysis';
  title: string;
  caption: string;
}

export const ASSET_NOTICE = "Temporary demonstration photography: Photographs used on this demo represent professional financial learning environments, market analysis setups, and resort retreat settings, and are not actual Edufinix students, employees, or facilities.";

export const IMAGES: Record<string, AssetPhoto> = {
  hero: {
    id: "hero-classroom",
    url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1600",
    alt: "Professional financial trading study environment with focused market analysis and charts",
    category: "workstation",
    title: "Market Analysis Environment",
    caption: "Disciplined market evaluation in a modern financial study environment."
  },
  instructor: {
    id: "practical-instructor",
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    alt: "Instructor explaining financial market structure and analytical concepts to attentive students",
    category: "classroom",
    title: "Expert-Led Market Training",
    caption: "Interactive offline session focused on live price behavior and market mechanics."
  },
  studentsStudy: {
    id: "students-study",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
    alt: "Collaborative financial market workshop with adult students analyzing data on monitors",
    category: "community",
    title: "Collaborative Market Exploration",
    caption: "Peer learning and real-time chart review in our structured learning space."
  },
  workstation: {
    id: "trading-workstation",
    url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
    alt: "Minimalist financial workstation with currency charting display and trading journal",
    category: "analysis",
    title: "Precision Execution Desk",
    caption: "Clean, distraction-free environment for calculated risk management."
  },
  marketEscape: {
    id: "luxury-resort-retreat",
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1600",
    alt: "Luxury nature resort retreat with lush greenery and tranquil waters for psychological resilience camping",
    category: "retreat",
    title: "Mentorship & Market Escape Resort",
    caption: "Immersive two-day psychological resilience and mindset development experience at a luxury resort."
  },
  natureEscapeAlt: {
    id: "luxury-resort-mountain",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1400",
    alt: "High-end tranquil resort pavilion surrounded by green landscapes",
    category: "retreat",
    title: "Mindset Reset & Emotional Discipline",
    caption: "Step away from the trading screens to build emotional endurance and mental clarity."
  },
  classroomOverview: {
    id: "modern-academy-classroom",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400",
    alt: "Modern architectural education facility with sleek seating and presentation displays",
    category: "classroom",
    title: "Kozhikode Learning Academy",
    caption: "Dedicated offline training suites engineered for focused, uninterrupted learning."
  },
  communityMeetup: {
    id: "community-traders-meetup",
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
    alt: "Group of disciplined traders gathered for market discussion and journal review",
    category: "community",
    title: "Lifelong Trader Community",
    caption: "Lifelong community access and market-related meetups in Kerala."
  },
  riskDiscipline: {
    id: "risk-discipline-concept",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern architectural financial towers symbolizing institutional discipline and structure",
    category: "analysis",
    title: "Institutional Principles",
    caption: "Grounded in foundational risk and liquidity principles."
  }
};

