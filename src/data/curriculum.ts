export interface CurriculumTopic {
  title: string;
  description: string;
  keyPoints: string[];
}

export interface CurriculumModule {
  id: string;
  number: string;
  title: string;
  categoryName: string;
  summary: string;
  topics: CurriculumTopic[];
}

export const CURRICULUM_DATA: CurriculumModule[] = [
  {
    id: "forex-foundations",
    number: "01",
    title: "Forex Foundations",
    categoryName: "Core Foundations",
    summary: "Establish a rigorous understanding of the global foreign exchange marketplace, market participants, and execution infrastructure.",
    topics: [
      {
        title: "Basics of the Forex Market",
        description: "Understanding currency pairs, global trading sessions (Tokyo, London, New York), quoting conventions, bid/ask spreads, and pip calculations.",
        keyPoints: [
          "Global currency market architecture & session timing",
          "Major, minor, and exotic pair characteristics",
          "Order types: Market, Limit, and Stop mechanics"
        ]
      },
      {
        title: "Types of Traders and Investors",
        description: "Deconstructing participant profiles across institutional market makers, position traders, swing traders, and day traders to find your operational alignment.",
        keyPoints: [
          "Institutional vs. retail market participation",
          "Timeframe alignment and style characteristics",
          "Aligning trading style with individual lifestyle"
        ]
      },
      {
        title: "Trading Tools and Brokers",
        description: "Navigating terminal platforms, charting suites, economic calendars, and evaluating broker execution models with transparent due diligence.",
        keyPoints: [
          "Terminal navigation & order execution workflows",
          "Spread, slippage, and swap fee evaluations",
          "Economic calendar analysis & news release awareness"
        ]
      }
    ]
  },
  {
    id: "market-analysis",
    number: "02",
    title: "Market Analysis",
    categoryName: "Market Understanding",
    summary: "Move beyond reactive indicators to decode underlying price mechanics, institutional order flow footprints, and true market structure.",
    topics: [
      {
        title: "Market Structure",
        description: "Mapping higher timeframe trends, break of structure (BOS), change of character (CHoCH), and multi-timeframe swing high/low mapping.",
        keyPoints: [
          "Identifying directional market bias across timeframes",
          "Swing points, structural highs and structural lows",
          "Validation of structural shifts vs. temporary pullbacks"
        ]
      },
      {
        title: "Demand and Supply",
        description: "Locating institutional imbalance zones where high-volume buying or selling occurred, framing high-probability point-of-interest (POI) setups.",
        keyPoints: [
          "Identification of fresh supply and demand imbalances",
          "Mitigation vs. unmitigated order blocks",
          "Confluence verification for entry criteria"
        ]
      },
      {
        title: "Liquidity Management",
        description: "Understanding where market liquidity resides (equal highs, equal lows, trendline pools) and recognizing liquidity sweeps before directional expansion.",
        keyPoints: [
          "Internal vs. external range liquidity concepts",
          "Engineered liquidity traps and stop hunts",
          "Trading in alignment with institutional sweeps"
        ]
      },
      {
        title: "Personal Trading Strategy",
        description: "Synthesizing market structure, supply/demand, and liquidity parameters into a rule-based personal trading framework.",
        keyPoints: [
          "Defining strict entry, stop loss, and take profit rules",
          "Session timing rules: European and US session windows",
          "Checklist-based trade plan documentation"
        ]
      }
    ]
  },
  {
    id: "risk-and-money-management",
    number: "03",
    title: "Risk and Money Management",
    categoryName: "Capital Preservation",
    summary: "Master the mathematical discipline of capital preservation that distinguishes long-term market participants from short-lived gamblers.",
    topics: [
      {
        title: "Money Management",
        description: "Frameworks for account preservation, defining maximum portfolio risk parameters, and managing growth through structured capital allocations.",
        keyPoints: [
          "Account capitalization and drawdown thresholds",
          "Capital protection as the primary objective",
          "Compounding mathematics vs. over-leveraging risks"
        ]
      },
      {
        title: "Risk Management",
        description: "Strict risk-to-reward ratios (1:2, 1:3+), daily stop-out rules, and systematic protection protocols before entering any live trade.",
        keyPoints: [
          "Risk-per-trade ceiling guidelines",
          "Pre-trade risk audit and risk-to-reward asymmetry",
          "Hard stops versus mental stops and slippage prevention"
        ]
      },
      {
        title: "Position Sizing",
        description: "Exact lot size calculation tailored precisely to currency pair volatility, pip distance, and maximum acceptable monetary risk.",
        keyPoints: [
          "Formulas for calculating standard, mini, and micro lots",
          "Account currency vs. quote currency conversion calculations",
          "Eliminating emotional position sizing"
        ]
      }
    ]
  },
  {
    id: "trader-development",
    number: "04",
    title: "Trader Development",
    categoryName: "Execution & Psychology",
    summary: "Bridge technical theory with live market execution, emotional discipline, and continuous interactive review in an offline learning environment.",
    topics: [
      {
        title: "Psychological Aspects of Trading",
        description: "Overcoming fear of missing out (FOMO), revenge trading, impatience, and greed through structured behavioral routines and journaling.",
        keyPoints: [
          "Cognitive biases that undermine trading consistency",
          "Emotional detachment from individual trade outcomes",
          "Maintaining disciplined execution during drawdowns"
        ]
      },
      {
        title: "Doubt Clearance",
        description: "Dedicated interactive question-and-answer sessions where student queries are addressed in detail with live chart walk-throughs.",
        keyPoints: [
          "Direct mentor interaction on individual student questions",
          "Reviewing missed opportunities and misread charts",
          "Clarifying technical ambiguity with practical evidence"
        ]
      },
      {
        title: "Revision Sessions",
        description: "Structured reinforcement cycles and interactive reviews to solidify core concepts and prevent bad trading habits from forming.",
        keyPoints: [
          "Interactive concept recaps and chart quizzes",
          "Comparative case study analysis of past market weeks",
          "Group discussions to reinforce disciplined habits"
        ]
      },
      {
        title: "Live Market Application",
        description: "Direct real-time chart application during active trading sessions, observing how technical setups form and execute under real market conditions.",
        keyPoints: [
          "Real-time chart analysis during active London/NY sessions",
          "Executing planned setups in paper/simulated accounts",
          "Post-trade journal logging and performance debrief"
        ]
      }
    ]
  }
];

