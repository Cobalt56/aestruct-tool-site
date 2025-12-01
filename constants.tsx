
import { Tool, ToolCategory } from './types';
import { 
  FileText, 
  TrendingUp, 
  Presentation,
  Zap,
  Calendar,
  Shield,
  ScrollText, 
  Banknote
} from 'lucide-react';
import React from 'react';

export const TOOLS: Tool[] = [
  {
    id: 'ai-tool-rec',
    name: 'AI Tool Recommendation Engine – V3',
    tagline: 'Workflow optimization specialist',
    description: 'Analyzes specific production bottlenecks and recommends the optimal AI stack to automate and solve them.',
    fullPrice: 149,
    category: ToolCategory.PRODUCTION,
    systemPromptTeaser: "You are an AI Implementation Architect for media. Given a specific production bottleneck (e.g., 'slow post-production spotting' or 'contract drafting'), recommend 3 specific AI tools or workflows to solve it, explaining the ROI.",
    features: ['Custom Stack Design', 'ROI Calculator', 'Integration Roadmap'],
    demoPlaceholder: "Describe a bottleneck (e.g., 'Our editors spend too long transcribing interviews')...",
    demoFilePath: 'assets/demos/ai-tool-rec.md',
    demoFileSize: '5 KB',
    scenarios: [
      {
        id: 's1',
        label: 'Slow Post-Production',
        input: "Our editors are spending 40% of their time transcribing interviews and logging footage metadata manually.",
        output: "RECOMMENDED STACK:\n\n1. PREMIERE PRO TEXT-BASED EDITING (Native)\nROI: Immediate. Eliminates 90% of manual transcription. Allows editors to cut video by editing text.\n\n2. TWELVE LABS (Search)\nROI: High. specialized video understanding API. Allows editors to search 'man in red hat walking dog' and find exact timestamps without logging.\n\n3. LEMUR (Summary)\nROI: Medium. Summarizes raw interview transcripts into bullet points for story producers."
      },
      {
        id: 's2',
        label: 'Legal Bottleneck',
        input: "We are a small indie studio. Contract drafting for cast and crew is taking 2 weeks per project.",
        output: "RECOMMENDED STACK:\n\n1. LEGAL ROBOT / SPELLBOOK\nROI: High. Drafts standard deal memos in seconds based on your templates.\n\n2. DOCUSIGN CLM\nROI: Medium. Automates the signature chase.\n\nWorkflow: Use Spellbook to generate the initial draft > Human Lawyer Review (1 hour instead of 5) > Auto-send via DocuSign."
      }
    ]
  },
  {
    id: 'budget-forecast-pro',
    name: 'Budget Forecasting & Variance Tracker Pro –V3',
    tagline: 'Real-time financial modeling',
    description: 'Creates detailed budget forecasts and tracks real-time variance against actuals for multi-episodic content.',
    fullPrice: 299,
    category: ToolCategory.FINANCE,
    systemPromptTeaser: "You are a seasoned production accountant. Given a project type (e.g. Feature, Series) and a specific financial dilemma or variance (e.g. 'Locations over by 15%'), predict the impact on the contingency fund and suggest 2 actionable cost-saving measures.",
    features: ['Real-time Variance Tracking', 'Union Rate Integration', 'Cash Flow Modeling'],
    demoPlaceholder: "Input scenario (e.g., 'Series, Art Dept is 20k over budget')...",
    demoFilePath: 'assets/demos/budget-forecast-pro.md',
    demoFileSize: '8 KB',
    scenarios: [
      {
        id: 's1',
        label: 'Locations Over Budget',
        input: "Indie Feature ($5M). We are only at Week 2, but Location fees are running 20% over budget due to permit hikes.",
        output: "IMPACT ANALYSIS:\nAt this rate, you will burn through your 10% contingency by Week 4. This puts Post-Production funds at critical risk.\n\nACTIONABLE MEASURES:\n1. Consolidate Company Moves: Review the schedule. If you have 2 company moves scheduled for next week, try to eliminate one by rewriting a scene to fit an existing location.\n2. Barter Credit for Fees: Approach remaining private location owners. Offer an 'Associate Producer' credit or prominent screen placement in exchange for a 30% fee reduction."
      },
      {
        id: 's2',
        label: 'OT Spiraling',
        input: "TV Pilot. Crew overtime is hitting 14 hours daily for the last 3 days.",
        output: "IMPACT ANALYSIS:\nMeal penalties and Golden Hour rates will inflate daily burn by ~$15k/day. This is unsustainable.\n\nACTIONABLE MEASURES:\n1. 'French Hours' Consideration: Consult with the AD. Switching to a continuous 10-hour day (no lunch break, rolling food) creates a hard stop and eliminates the post-lunch slump.\n2. Simplify Coverage: The Director is likely over-shooting. Mandate a 3-setup limit per scene for the next 2 days to get back on schedule."
      }
    ]
  },
  {
    id: 'content-calendar-pro',
    name: 'Content Calendar Strategist Pro – V3',
    tagline: 'Cross-platform release scheduler',
    description: 'Generates optimized publishing schedules for multi-platform campaigns (TikTok, YT, IG) based on engagement trends.',
    fullPrice: 199,
    category: ToolCategory.MARKET,
    systemPromptTeaser: "You are a Digital Marketing Strategist. Create a micro-schedule for a specific content asset (e.g. Trailer Drop) across Instagram, TikTok, and Twitter. Define the timing, caption hook, and platform-specific nuance for each.",
    features: ['Platform-Specific Timing', 'Engagement Hook Generator', 'Asset Recycling Plan'],
    demoPlaceholder: "Describe the asset (e.g., 'Behind the scenes blooper reel')...",
    demoFilePath: 'assets/demos/content-calendar-pro.md',
    demoFileSize: '6 KB',
    scenarios: [
      {
        id: 's1',
        label: 'Trailer Drop Strategy',
        input: "We are releasing the main trailer for a Horror film next Friday.",
        output: "TIKTOK (Friday 9:00 AM PST):\nAsset: Vertical crop of the scariest 5 seconds (Jump scare).\nHook: 'Do not watch this with the lights off ⚠️'\n\nTWITTER/X (Friday 10:00 AM PST):\nAsset: Full landscape YouTube link + GIF of the villain.\nHook: 'The wait is over. The entity has arrived. #HorrorCommunity'\n\nINSTAGRAM REELS (Friday 12:00 PM PST):\nAsset: Cast reaction video watching the trailer.\nHook: 'Even our cast couldn't handle the ending...'"
      },
      {
        id: 's2',
        label: 'YouTube Doc Promo',
        input: "We have a 45-minute documentary on 'The History of CGI'. How do we promote this?",
        output: "YOUTUBE STRATEGY:\n\n1. Main Video Title: 'Why CGI Got Worse (And Then Better)'\nRationale: Provocative negative bias drives CTR.\n\n2. Thumbnail Concept:\nSide-by-side split: The Scorpion King (The Mummy) vs. Avatar 2 Water. Text overlay: 'WHAT HAPPENED?'\n\n3. Shorts Strategy:\nClip the segment about 'The Uncanny Valley' (0:59). This is a highly debatable topic that will drive comments and algorithm boosts."
      }
    ]
  },
  {
    id: 'pitch-deck-opt-pro',
    name: 'Pitch Deck Optimizer Pro – V3',
    tagline: 'Investor conversion specialist',
    description: 'Refines pitch narratives and structural flow to align with current streamer and studio buying mandates.',
    fullPrice: 249,
    category: ToolCategory.MARKET,
    systemPromptTeaser: "You are a Senior VP of Development at a major studio. Critique the provided pitch deck slide text. Focus on the 'hook', commercial viability, and clarity. Be ruthless but constructive.",
    features: ['Hook Refinement', 'Market Fit Analysis', 'Visual Narrative Flow'],
    demoPlaceholder: "Paste a slide text (e.g., 'Logline: A boy meets a girl in space')...",
    demoFilePath: 'assets/demos/pitch-deck-opt-pro.md',
    demoFileSize: '6 KB',
    scenarios: [
      {
        id: 's1',
        label: 'Sci-Fi Logline Critique',
        input: "Series Logline: In a future where water is scarce, a young girl fights the government to get it back for her family.",
        output: "CRITIQUE: PASS.\n\nReasoning: This is too generic. 'Water scarcity' is a common trope (Dune, Mad Max). 'Fights the government' is vague.\n\nTHE FIX:\nAdd specific irony or a unique mechanic. \n\nBETTER VERSION:\n'In a future where water costs more than blood, a hydrologist's daughter discovers the government isn't hoarding water—they're manufacturing it from people. Now she has to decide: save her village, or save herself.'"
      },
      {
        id: 's2',
        label: 'Deck Flow Check',
        input: "Current Slide Order: 1. Team Bios, 2. Market Size Stats, 3. Logline, 4. Budget Breakdown.",
        output: "CRITIQUE: WEAK OPENING.\n\nIssue: Investors buy the *story* first, then the business. Starting with 'Team' and 'Market' feels defensive, as if you are apologizing for the content.\n\nRECOMMENDED FLOW:\n1. The Hook (Logline + Key Visual)\n2. The World/Characters (Emotional Connection)\n3. The Pilot Episode (Proof of Concept)\n4. The Market/Why Now (Business Case)\n5. The Team (Why You?)"
      }
    ]
  },
  {
    id: 'prod-doc-gen-pro',
    name: 'Production Document Generator Pro – V3',
    tagline: 'Automated paperwork suite',
    description: 'Instantly generates standardized call sheets, shooting schedules, and daily production reports from raw input data.',
    fullPrice: 199,
    category: ToolCategory.PRODUCTION,
    systemPromptTeaser: "You are a Production Coordinator. Draft a specific production document clause or communication (e.g., 'Deal Memo text', 'Crew Email regarding rain delay') based on the provided context. Keep it professional and standard industry format.",
    features: ['Auto-Call Sheets', 'DPR Generation', 'Crew Communication Templates'],
    demoPlaceholder: "Input context (e.g., 'Tell crew call time is pushed 2 hours')...",
    demoFilePath: 'assets/demos/prod-doc-gen-pro.md',
    demoFileSize: '7 KB',
    scenarios: [
      {
        id: 's1',
        label: 'Rain Delay Email',
        input: "It's raining. Push call time from 6am to 9am for tomorrow. Location: Griffith Park.",
        output: "SUBJECT: CALL TIME UPDATE - DAY 4 - WEATHER DELAY\n\nDear Cast & Crew,\n\nDue to forecasted inclement weather in the early morning, we are initiating a safety push for tomorrow's shoot at Griffith Park.\n\nNEW GENERAL CREW CALL: 9:00 AM\n\nBreakfast will be ready at 8:30 AM. Please drive safely and bring rain gear as intermittent showers are expected throughout the day.\n\nThank you,\nProduction"
      },
      {
        id: 's2',
        label: 'Location Agreement Clause',
        input: "Filming in a coffee shop. Owner is worried about noise on sidewalk. Need a clause promising we won't block it.",
        output: "ADDENDUM A - SPECIAL CONDITIONS (LOCATION AGREEMENT):\n\n'Production agrees to maintain a clear path of travel on the public sidewalk adjacent to the Premises at all times. No equipment, cabling, or crew staging shall impede pedestrian traffic. Silent generators will be utilized to minimize noise disturbance to neighboring businesses. Production assumes liability for any citations related to sidewalk obstruction.'"
      }
    ]
  },
  {
    id: 'rights-clearance-pro',
    name: 'Rights & Clearance Assistant Pro – V3',
    tagline: 'IP risk assessment',
    description: 'Scans script elements, prop lists, and set dressing for potential copyright, trademark, or E&O insurance risks.',
    fullPrice: 299,
    category: ToolCategory.PRODUCTION,
    systemPromptTeaser: "You are a Clearance Supervisor. Review the provided list of script elements or set dressing items. Flag any potential trademark issues, copyright infringements, or E&O risks.",
    features: ['Script Clearance Scan', 'Prop Risk Assessment', 'E&O Red Flagging'],
    demoPlaceholder: "List items (e.g., 'Character wears Mickey Mouse shirt')...",
    demoFilePath: 'assets/demos/rights-clearance-pro.md',
    demoFileSize: '6 KB',
    scenarios: [
      {
        id: 's1',
        label: 'Scene Clearance Scan',
        input: "Scene 45: The main character is drinking a Diet Coke, scrolling through Instagram on an iPhone, and listening to 'Shake it Off' by Taylor Swift.",
        output: "RISK ASSESSMENT: HIGH\n\n1. DIET COKE: Trademark. If the character is doing something dangerous or illegal while drinking it, the brand will sue (Tarnishment). ACTION: Greek out the label or use a fake brand soda.\n\n2. INSTAGRAM UI: Copyright. You cannot show the actual Instagram interface/logo without permission (which they rarely grant). ACTION: VFX screen replacement with a generic social app.\n\n3. TAYLOR SWIFT SONG: Cost Prohibitive. Sync rights for a major hit will cost $50k+. ACTION: Replace with production library music."
      },
      {
        id: 's2',
        label: 'Tattoo Clearance',
        input: "Actor has a visible tattoo on their forearm (a drawing of Sonic the Hedgehog).",
        output: "RISK ASSESSMENT: CRITICAL.\n\nIssue: Copyright/Trademark. Tattoos are often owned by the tattoo artist, and the character 'Sonic' is owned by Sega. Showing this on camera exposes you to lawsuits from both parties.\n\nACTION REQUIRED:\n1. Cover the tattoo with makeup or wardrobe (Long sleeves).\n2. If it must be seen, you need a release from the Tattoo Artist AND a licensing agreement with Sega (Unlikely to get in time).\n\nRecommendation: Cover it."
      }
    ]
  },
  {
    id: 'trend-scout',
    name: 'Trend Scout & Insight Generator',
    tagline: 'Data-driven creative development',
    description: 'Synthesizes emerging narrative trends from social listening and streaming data to inform development slates.',
    fullPrice: 179,
    category: ToolCategory.MARKET,
    systemPromptTeaser: "You are a Market Researcher for a streaming platform. Based on a provided genre or topic, identify 3 emerging narrative trends or sub-genres that are gaining traction with Gen Z/Alpha audiences.",
    features: ['Genre Heatmaps', 'Audience Sentiment Analysis', 'Format Prediction'],
    demoPlaceholder: "Input genre (e.g., 'True Crime')...",
    demoFilePath: 'assets/demos/trend-scout.md',
    demoFileSize: '8 KB',
    scenarios: [
      {
        id: 's1',
        label: 'Horror Trends 2024',
        input: "What are the emerging trends in the Horror genre for Gen Z?",
        output: "TREND REPORT: ANALOG HORROR & LIMINAL SPACES\n\n1. THE BACKROOMS AESTHETIC: Moving away from jump scares to 'Liminal Spaces'—empty malls, endless hallways. Fear of the uncanny/familiar rather than monsters.\n\n2. DESKTOP/SCREENLIFE 2.0: Horror that takes place entirely inside Discord chats or Livestreams, reflecting Gen Z's digital native social life.\n\n3. FOLK HORROR REVIVAL: A rejection of modern tech. Ancient, cult-like horror in daylight (Midsommar influence) is performing higher than dark, slasher tropes."
      },
      {
        id: 's2',
        label: 'Format Trends: Unscripted',
        input: "We want to develop a cooking show for 2025. What formats are trending down vs up?",
        output: "TREND INSIGHT:\n\nTRENDING DOWN: 'High Stakes Competition'. The MasterChef era of yelling and anxiety is fading.\n\nTRENDING UP: 'Cozy/Comfort Process'. The 'Great British Bake Off' or 'Cottagecore' aesthetic. Slow TV, ASMR elements, focus on the beauty of ingredients rather than time limits.\n\nOPPORTUNITY: 'Grandma's Kitchen' format - intergenerational cooking focusing on heritage and calm."
      }
    ]
  },
  {
    id: 'script-analyst-pro',
    name: 'Script Analyst Pro – V3',
    tagline: 'Deep structural dramaturgy',
    description: 'Comprehensive screenplay analysis focusing on character arcs, thematic resonance, and pacing heatmaps using advanced narrative theory.',
    fullPrice: 199,
    category: ToolCategory.SCRIPT,
    systemPromptTeaser: "You are an expert script consultant with 20 years of experience. Analyze the provided logline or scene beat for structural integrity, conflict optimization, and character motivation. Provide a 'Pass', 'Consider', or 'Recommend' assessment rationale.",
    features: ['3-Act Structure Stress Test', 'Character Voice Analysis', 'Theme Consistency Check'],
    demoPlaceholder: "Paste a scene summary or logline...",
    demoFilePath: 'assets/demos/script-analyst-pro.md',
    demoFileSize: '8 KB',
    scenarios: [
      {
        id: 's1',
        label: 'Act 2 Sagging',
        input: "My protagonist enters the cave at page 40, but then just wanders around talking to ghosts until page 80. It feels boring.",
        output: "ANALYSIS: LACK OF ACTIVE ANTAGONISM\n\nProblem: 'Wandering' is passive. Your protagonist is an observer, not a driver.\n\nFix: The Midpoint (Page 60) needs a 'False Victory' or 'False Defeat'.\n\nSuggestion: At Page 60, the ghosts shouldn't just talk—they should offer a trade. The protagonist gets the information they need, BUT they have to give up their only weapon. Now pages 60-80 become a desperate escape while vulnerable, rather than a walk."
      },
      {
        id: 's2',
        label: 'Villain Motivation',
        input: "The villain wants to destroy the world because he is evil.",
        output: "ANALYSIS: WEAK MOTIVATION\n\nProblem: 'Evil' is not a motivation; it's a result. This creates a cartoonish antagonist.\n\nFix: Give the villain a noble goal with a horrific method.\n\nSuggestion: The villain wants to save the world from overpopulation (Thanos style) or end all pain by eliminating free will. They should believe they are the Hero. Make the audience agree with their problem, but hate their solution."
      }
    ]
  }
];

export const TOOL_ICONS: Record<string, React.ReactNode> = {
  'script-analyst-pro': <ScrollText className="w-6 h-6" />,
  'budget-forecast-pro': <Banknote className="w-6 h-6" />,
  'pitch-deck-opt-pro': <Presentation className="w-6 h-6" />,
  'ai-tool-rec': <Zap className="w-6 h-6" />,
  'content-calendar-pro': <Calendar className="w-6 h-6" />,
  'prod-doc-gen-pro': <FileText className="w-6 h-6" />,
  'rights-clearance-pro': <Shield className="w-6 h-6" />,
  'trend-scout': <TrendingUp className="w-6 h-6" />,
};

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Our Tools', path: '/products' },
  { label: 'About AEstruct', path: '/about' },
];
