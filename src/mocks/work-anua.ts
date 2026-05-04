export const anuaProject = {
  title: "Anua Consumer Behavior Report",
  subtitle: "A consumer behavior report for North American market entry and expansion into the 20s mainstream demographic",
  team: ["UTKCC x The Powders"],
  institution: "University of Toronto Korean Commerce Club",
  period: "2026",
  tags: ["Consumer Insights", "Market Entry", "Gen Z Strategy"],
};

export const anuaIntroduction = {
  title: "Introduction",
  content:
    "This report was prepared through an industry-academia collaboration between UTKCC and The Founders, where University of Toronto students analyzed consumer data and 2026 North American beauty market trends.",
};

export const anuaProblemStatement = {
  title: "Problem Statement",
  bullets: [
    "Current UGC and ads over-focus on functional efficacy messaging.",
    "Fails to stimulate emotional purchase desire among 20s white consumers in the U.S.",
    "Results in structural limitations in FYP reach and organic exposure.",
    "To validate this, we launched a Meta ad campaign targeting 260 survey respondents.",
  ],
};

export const anuaKeyFindings = {
  title: "Key Findings",
  findings: [
    "20s Mass Mainstream consumers respond more to lifestyle/visual exposure than persuasive content.",
    "Higher repetition exposure leads to increased brand recognition and lower purchase barriers.",
    "FYP-driven customers have low initial conversion, but as brand familiarity increases, persuasion becomes unnecessary.",
    "Peer persona content (20s university students, etc.) has lower ad recognition compared to beauty creators.",
  ],
};

export const anuaCampaign = {
  title: "Meta Ad Campaign",
  description:
    "To investigate the structural limitations in FYP reach and organic exposure, we designed and launched a Meta advertisement campaign to attract survey participants. The campaign specifically targeted 20s North American females interested in beauty products, offering a chance to win a $50 Amazon Gift Card in exchange for a 5-minute survey.",
  imageUrl:
    "https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/137176802effcd3f2416bec9fa9856e8.png",
};

export const anuaPersonaAnalysis = {
  title: "Persona Analysis",
  subtitle: "Consumer types derived from in-depth interviews with 3 respondents",
  targetPersona: {
    name: "Aesthetic Intuitive Type",
    description:
      "Low-involvement consumers who prioritize emotional desire over functional needs must be targeted as the core demand segment.",
    traits: [
      "Social Media Dependent: Consumes mood board-style images on Pinterest and Instagram, reacting immediately when a brand's 'Vibe' aligns with their aesthetic pursuit.",
      "Low Involvement: More sensitive to social signals like 'This is trending' or 'Everyone uses it' rather than scrutinizing ingredient lists. Also tends to purchase without much doubt when recommended by mega influencers.",
      "Impulse Purchase: Develops a sense of 'familiarity' with products repeatedly exposed on TikTok's 'For You Page (FYP)', confusing familiarity with trust and converting it into purchase.",
    ],
  },
  respondents: [
    {
      name: "Elliott Waller",
      age: "20 - 23",
      ethnicity: "White",
      involvement: "High",
      type: "Rational Consumer",
      persona: "Ingredient-Based Rational High-Involvement",
      summary:
        "FYP exposure is not a purchase trigger but a search hint. Trending increases ad fatigue more than trust. Brand awareness plays a 'candidate level' role during ingredient exploration.",
      trigger: {
        planned: "Mostly Planned — Decides purchase when specific ingredients are needed (e.g., adding Azelaic acid to routine). Impulse purchases are rare in skincare.",
        frequency: "Purchases skincare more than once per month, restocking existing routine products. Need-based, not exploratory.",
        decision: "Ingredient list, concentration disclosure, research-backed efficacy concentration, fit with night routine, shipping cost (YesStyle). Marketing visuals, influencer usage, and trends are unimportant.",
      },
      discovery: {
        source: "TikTok, YouTube ingredient search. 'Ingredient discovery' comes before 'brand discovery'. Explores products via YesStyle search.",
        nextStep: "Checks ingredient list, concentration info, compares with similar products, reads reviews if needed.",
        comparison: "Always researches before purchase. Ingredient comparison between products is essential. Almost never buys without comparison.",
      },
      social: {
        influence: "Little to no influence from people around. No local influencer impact due to residing in Iowa.",
        trending: "Suspicious of trending products. Seeing too much reduces trust. 'Ad/commission feel' lowers purchase intent. Measures trending by repeated TikTok exposure and multiple influencers mentioning same product simultaneously.",
        influencer: "No specific influencer mentioned. Low interest in beauty influencers. Aesthetic usage shots or lifestyle content do not leave lasting impressions.",
      },
    },
    {
      name: "Tien Le",
      age: "26 - 30",
      ethnicity: "Asian",
      involvement: "High",
      type: "Rational Consumer",
      persona: "Review-Verification Rational High-Involvement",
      summary:
        "After 10+ FYP exposures, product is recognized. Checks if exposed product matches own skin concerns via reviews, tests samples, verifies color match. Abandons if doesn't fit despite trends. Repurchase depends on actual efficacy.",
      trigger: {
        planned: "Mostly Planned — Strong loyalty to existing skincare products. Makeup items like lipstick may trigger impulse purchases due to visual/shade appeal. Algorithm-repeated items with good price deals may cause spontaneous purchases.",
        frequency: "Buys mainly when needed, aligned with sales (e.g., Amazon Prime Day, Black Friday).",
        decision: "First priority: ingredient matching own skin concern (sensitivity). Niacinamide worked for her, so she buys products with that ingredient when on sale.",
      },
      discovery: {
        source: "Instagram Reels, TikTok UGC. First exposure usually through trendy music or aesthetically pleasing videos. Continuously appearing products generate more interest than influencer-driven content.",
        nextStep: "Reads reviews (ingredient-focused). If interested, visits offline stores (Sephora, Ulta) to test samples.",
        comparison: "Checks reviews first, then tests at offline stores when visiting.",
      },
      social: {
        influence: "Little influence from people around. Makes own decisions and often recommends to others.",
        trending: "Feels something is trending when it keeps appearing on social media (Fwee, dAlba, Abib, Skin1004). Rather than FOMO-driven urgency, purchases impulsively only if continuously visible or skin expression looks appealing.",
        influencer: "Evelyn Ha, Amy Flamy — appreciates honest skin concern communication on camera. Also trusts New York-based creators for 'valuable' information (popup events, entertainment recommendations).",
      },
    },
    {
      name: "Becca",
      age: "24+",
      ethnicity: "White",
      involvement: "High",
      type: "Rational Consumer",
      persona: "Smart Deal Hunter / Ingredient-Verification Pragmatist",
      summary:
        "Viral content is merely 'information', not trust. Purchase happens when ingredient verification and price benefits are met. Controls impulse via 'Wait a week' rule. Chose Anua for cost-effectiveness and ingredients. High repurchase rate and loyalty for products already in use.",
      trigger: {
        planned: "Mostly Planned + Exploration Enjoyment — As a working adult with purchasing power, enjoys experimenting with new products. But does not buy blindly; searches Instagram/YouTube first. Continues using familiar products.",
        frequency: "Experimental purchases (still experimenting). Beyond simply restocking, tries new things for fun. Absolute prerequisite: must not cause skin trouble. Pre-purchases if reasonably priced with future use potential.",
        decision: "1st priority: Skin trouble (break out). 2nd: Ingredients — highly interested, studied with sister. 3rd: Price & promotions — sales lower risk. 4th: Word of mouth, but usually the one spreading it.",
      },
      discovery: {
        source: "Instagram, YouTube FYP (does NOT use TikTok). Naturally exposed through feed but does not purchase immediately. Re-evaluates against own criteria, then typically waits a week before payment to control impulse.",
        nextStep: "Verification phase: applies 'Wait a week' rule to calm impulse. If still interested after a week, begins searching on Reddit, Google.",
        comparison: "Prefers educational content explaining why an ingredient is needed. Suspicious if reviews are too good (only good reviews = fake). Does not buy from low-trust brands.",
      },
      social: {
        influence: "Trusts a small circle of people + long-term observation. Trusts YouTubers or friends who have consistently used a product over time, rather than influencers who just received it. Early adopter tendency: tries first, then spreads to friends.",
        trending: "High skepticism toward trends. 'Today's consumers can tell if it's an ad or real.' Doesn't buy just because something appears frequently. Ingredient must match own skin concern. Ad feel triggers careful deliberation before purchase.",
        influencer: "Remembers negative viral cases.",
      },
    },
  ],
};

export const respondentFlowData = {
  title: "Respondent Selection Flow",
  stages: [
    {
      count: 260,
      label: "Initial Survey",
      description: "Total respondents from Meta ad campaign targeting 20s North American females",
      width: "100%",
      percent: "100%",
    },
    {
      count: 41,
      label: "Screened",
      description: "Filtered by 3 simultaneous criteria: Beauty algorithm 50%+, external trust bias, trend-sensitive under-$30 buyers",
      width: "70%",
      percent: "15.8%",
    },
    {
      count: 5,
      label: "Pilot Interview",
      description: "Highest combined scores across Social Media Hype, Word of Mouth, and FYP beauty content ratio",
      width: "45%",
      percent: "1.9%",
    },
    {
      count: 3,
      label: "In-Depth Interview",
      description: "Final respondents selected for comprehensive qualitative analysis",
      width: "30%",
      percent: "1.2%",
    },
  ],
};

export const anuaResults = {
  title: "Results & Data Summary",
  surveyOverview: {
    title: "Survey Overview",
    goal: "To verify whether FYP exposure and cultural validation lead to actual purchase behavior",
    totalRespondents: 260,
    targetGroup: "20s North American female residents",
    keyInsight:
      "Among 260 respondents, 41 (15.76%) confirmed purchases driven by repetition exposure (FYP ratio 5+) and trend, regardless of product efficacy.",
  },
  screeningCriteria: {
    title: "Interview Screening Criteria",
    description:
      "Three simultaneous filters narrowed 260 respondents to 41 interview candidates.",
    filters: [
      {
        label: "Beauty Algorithm Dominance",
        description: "Short-form feed is 50%+ beauty content.",
      },
      {
        label: "External Trust Bias",
        description: "Trusts influencers over self-research.",
      },
      {
        label: "Trend-Sensitive Low-Cost Buyers",
        description: "Buys trending items under $30.",
      },
    ],
    note: "Additional viral consumer indicators (TikTok Shop user, trend significance, FOMO driven) were also observed across other filter combinations. After cross-reviewing multiple combinations, the three criteria above showed the strongest commonality and were finalized as the most suitable for hypothesis verification.",
  },
  twentyInsight: {
    title: "20s Key Insight",
    description:
      "For 20s consumers, repeated skincare exposure is not just awareness — it directly leads to purchase.",
    stat: "40%",
    breakdown: "46 out of 115 respondents",
    detail:
      "Cited FYP repeated exposure, influencer exposure, or peer usage as direct purchase reasons. Skincare products, even without explanation, build a 'trust factor' through repeated exposure — consumers feel 'it must be safe for me too.'",
  },
  keyStats: [
    {
      percentage: "73.85%",
      count: "192 / 260",
      label: "Brand Reputation Very Important",
      description: "Consider brand reputation crucial when buying.",
    },
    {
      percentage: "55.26%",
      count: "147 / 266",
      label: "Purchases Trendy Brands",
      description: "Buys trendy brands like Rare Beauty, Rhode.",
    },
    {
      percentage: "15.76%",
      count: "41 / 260",
      label: "Trend-Driven Purchases",
      description: "Bought purely from trend or repeated exposure.",
    },
  ],
  pilotInterview: {
    title: "Pilot Interview Selection",
    description:
      "Focused on verifying whether consumers recognize brands through trends, exposure, and social signals rather than functional judgment. Selection based on highest combined scores across three indicators: Social Media Hype importance, Word of Mouth importance, and FYP beauty content ratio.",
    criteria: [
      "Social Media Hype importance",
      "Word of Mouth importance",
      "FYP beauty content ratio",
    ],
    respondents: [
      "Phuong Nguyen",
      "Kathy Pham",
      "Carl Madison",
      "Danielle Bonson",
      "Tanisha Somani",
    ],
    note: "Respondents with high scores across these three questions were most likely to recognize brands as 'trending' rather than functional products, and could best explain how repeated UGC exposure translates into brand awareness and purchase consideration.",
  },
  summaryCards: [
    {
      title: "100% Planned Purchasers",
      content:
        "All 3 in-depth interview respondents showed planned, need-based purchase patterns. Skincare purchases are never impulsive.",
      icon: "ri-shopping-bag-line",
    },
    {
      title: "Ingredient > Visual",
      content:
        "All respondents prioritize ingredients and efficacy over marketing visuals, influencer recommendations, or trends.",
      icon: "ri-flask-line",
    },
    {
      title: "High Ad Skepticism",
      content:
        "All three show strong skepticism toward viral/trending content. Repeated exposure increases ad fatigue, not trust.",
      icon: "ri-eye-off-line",
    },
  ],
  surveyPatterns: {
    title: "Key Survey Patterns (n=260)",
    description:
      "How 20s North American consumers discover, evaluate, and purchase beauty products.",
    pattern1: {
      title: "Top Purchase Channels",
      data: [
        { label: "Amazon", value: "61.5% (160/260)", percentage: 100, color: "#FFFFFF" },
        { label: "Department Stores", value: "48.5% (126/260)", percentage: 79, color: "#FFFFFF" },
        { label: "TikTok Shop", value: "42.3% (110/260)", percentage: 69, color: "#FFFFFF" },
        { label: "Drugstores (Target/CVS)", value: "38.5% (100/260)", percentage: 63, color: "#FFFFFF" },
        { label: "Brand Official Websites", value: "26.9% (70/260)", percentage: 44, color: "#FFFFFF" },
      ],
    },
    pattern2: {
      title: "Brand Categories Purchased (Past 6 Months)",
      data: [
        { label: "Trendy Brands (Rare, Rhode, Glossier)", value: "55.3%", percentage: 100, color: "#FFFFFF" },
        { label: "Affordable & Practical (CeraVe, E.L.F)", value: "47.7%", percentage: 86, color: "#FFFFFF" },
        { label: "Luxury & Premium (La Mer, SK-II)", value: "31.5%", percentage: 57, color: "#FFFFFF" },
        { label: "Clinical & Effective (The Ordinary)", value: "28.5%", percentage: 52, color: "#FFFFFF" },
        { label: "K-Beauty (Laneige, Glow Recipe)", value: "23.8%", percentage: 43, color: "#FFFFFF" },
      ],
    },
    pattern3: {
      title: "How They First Heard About Purchased Brand",
      data: [
        { label: "Short-form Videos (TikTok/Reels)", value: "71.2%", percentage: 100, color: "#FFFFFF" },
        { label: "Sponsored Ads", value: "44.6%", percentage: 63, color: "#FFFFFF" },
        { label: "In-store Browsing (Sephora/Ulta)", value: "38.5%", percentage: 54, color: "#FFFFFF" },
        { label: "Friends / Family / Reviews", value: "35.4%", percentage: 50, color: "#FFFFFF" },
        { label: "Outdoor / OOH Advertising", value: "12.7%", percentage: 18, color: "#FFFFFF" },
      ],
    },
    note: "* Data aggregated from 260 survey respondents. Percentages reflect multiple-choice selections (sum may exceed 100%).",
  },
  chart2: {
    title: "Purchase Decision Factors (Aggregated Ranking)",
    data: [
      {
        label: "Ingredients / Efficacy Verification",
        value: "Top Priority",
        percentage: 100,
        color: "#FFFFFF",
      },
      {
        label: "Price & Promotions / Value",
        value: "2nd Priority",
        percentage: 67,
        color: "#FFFFFF",
      },
      {
        label: "Reviews & Social Proof",
        value: "3rd Priority",
        percentage: 67,
        color: "#FFFFFF",
      },
      {
        label: "Influencer / Trending Content",
        value: "Lowest Priority",
        percentage: 0,
        color: "#FFFFFF",
      },
    ],
  },
  respondentTable: {
    title: "Respondent Overview",
    headers: ["Name", "Age", "Ethnicity", "Involvement", "Type", "Persona"],
    rows: [
      ["Elliott Waller", "20 - 23", "White", "High", "Rational", "Ingredient-Based Rational"],
      ["Tien Le", "26 - 30", "Asian", "High", "Rational", "Review-Verification Rational"],
      ["Becca", "24+", "White", "High", "Rational", "Smart Deal Hunter / Pragmatist"],
    ],
  },
  recommendations: {
    title: "Recommended Actions",
    description:
      "Based on the consumer behavior analysis of 260 survey respondents and 3 in-depth interviews, the following strategic actions are recommended for Anua's North American market entry.",
    items: [
      {
        title: "Shift from Functional-Only Messaging to Lifestyle-Visual Content",
        description:
          "Current UGC and advertising over-focus on functional efficacy messaging. The data shows 20s mainstream consumers respond more to lifestyle/visual exposure than persuasive content. Repetition exposure, not explanation, drives brand recognition and lowers purchase barriers.",
      },
      {
        title: "Target Peer Persona Content Creators (20s University Students)",
        description:
          "Peer persona content has significantly lower ad recognition compared to beauty creators. Partner with relatable micro-influencers who naturally blend product into daily routines rather than explicit product reviews.",
      },
      {
        title: "Build Long-Term FYP Familiarity Rather Than One-Time Viral Hits",
        description:
          "FYP-driven customers show low initial conversion, but as brand familiarity increases through repeated exposure, persuasion becomes unnecessary. Design a sustained content strategy for continuous algorithm presence over 6+ months.",
      },
      {
        title: "Emphasize Ingredient Transparency and Clinical Validation",
        description:
          "All in-depth interview respondents prioritized ingredients and efficacy over visuals. While lifestyle content attracts attention, clear ingredient disclosure and concentration data build the trust needed for actual purchase.",
      },
    ],
  },
};
