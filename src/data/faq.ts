export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'batches' | 'mentorship' | 'curriculum';
}

export const FAQS: FAQItem[] = [
  {
    category: "general",
    question: "Where is Edufinix Trading Academy located?",
    answer: "Edufinix Trading Academy is an offline Forex trading education institute located in Kozhikode, Kerala, India. All primary sessions, live trading workshops, and student interactions take place at our dedicated learning facility in Kozhikode."
  },
  {
    category: "batches",
    question: "What are the academy batch timings and class schedules?",
    answer: "We offer two structured batch options to accommodate different schedules: Morning Batch (10:00 AM – 12:00 PM) and Evening Batch (05:00 PM – 07:00 PM). Classes are conducted strictly during active trading days. In line with the global market schedule, there are no classes from Friday through Sunday."
  },
  {
    category: "curriculum",
    question: "What makes the Edufinix curriculum different from generic online trading courses?",
    answer: "Our curriculum emphasizes practical market understanding rather than memorizing lagging indicators. Students study core Forex foundations, market structure, supply and demand imbalances, liquidity management, disciplined risk control, and trading psychology, reinforced with real-time live market chart application."
  },
  {
    category: "mentorship",
    question: "What does lifelong mentorship and 24-hour support include?",
    answer: "Edufinix students receive 24-hour mentor support for analytical questions, along with lifelong mentor guidance. Even after your syllabus is completed, you have continuous access to regular market meetups, strategy reviews, and our dedicated trader community in Kerala."
  },
  {
    category: "mentorship",
    question: "What is the 'Mentorship & Market Escape' program?",
    answer: "The Mentorship & Market Escape is an exclusive two-day camping experience at a luxury resort designed for psychological resilience and mindset development. It takes traders away from the screens to cultivate emotional stability, discipline under pressure, and healthy trading habits."
  },
  {
    category: "mentorship",
    question: "How does funded-account support and signal bot access work?",
    answer: "Students receive guidance on funded-account evaluation frameworks, risk benchmarks, and drawdown rules to prepare for institutional assessments. Additionally, upon verified completion of the course, students receive access to our proprietary signal tool to support their independent market charting. All access and support are subject to academy terms and conditions."
  },
  {
    category: "general",
    question: "Does Edufinix guarantee trading profits or financial returns?",
    answer: "No. Edufinix is an educational institution focused on skill acquisition, market understanding, and risk discipline. Forex trading involves significant financial risk and is not suitable for everyone. We do not make promises of guaranteed profits, incomes, or shortcuts."
  },
  {
    category: "batches",
    question: "How can I enrol in an upcoming batch?",
    answer: "You can submit an admission enquiry through our website enquiry form, connect directly with our admissions team on WhatsApp (+91 6369-637566), or call us to reserve your seat in the next scheduled morning or evening batch in Kozhikode."
  }
];

