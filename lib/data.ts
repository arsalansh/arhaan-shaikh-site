export const site = {
  name: "Arhaan Shaikh",
  initials: "AS",
  tagline: "Turning business problems into growth strategies.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const questions = [
  { q: "Where do I even begin with marketing?", to: "go-to-market-strategy" },
  { q: "What's the right marketing budget and media split for a new brand?", to: "marketing-strategy" },
  { q: "Which E-commerce platform is right for my brand?", to: "ecommerce-quick-commerce-strategy" },
  { q: "How do I price my product right?", to: "go-to-market-strategy" },
  { q: "How do I increase my ROAS?", to: "digital-strategy" },
  { q: "How do we turn more traffic into sales?", to: "ecommerce-quick-commerce-strategy" },
  { q: "Are we ready to scale?", to: "growth-strategy" },
  { q: "How do we improve customer retention?", to: "ecommerce-quick-commerce-strategy" },
];

export type Service = {
  slug: string;
  num: string;
  title: string;
  short: string;
  headline: string;
  intro: string;
  problems: string[];
  whatIDo: { title: string; text: string }[];
  deliverables: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "go-to-market-strategy",
    num: "01",
    title: "Go-to-market strategy",
    short:
      "Your go-to-market plan: the right market, audience and route to demand, whether you're launching, entering or scaling.",
    headline: "The right market. The right audience. The right route to demand.",
    intro:
      "Whether you are launching a new product, entering a new market or scaling an existing one, a go-to-market plan decides where you play and how you win. I build it around real demand, not assumptions.",
    problems: [
      "We're launching and don't know where to start.",
      "We're entering a new market or category.",
      "We have a product but no clear route to demand.",
      "We're unsure how to price and position the offer.",
    ],
    whatIDo: [
      { title: "Market & audience clarity", text: "Define who you're really selling to, where they are and what makes them buy." },
      { title: "Pricing & offer", text: "Shape an offer and price point the market understands and your margins support." },
      { title: "Channel & demand route", text: "Choose the channels and sequence that get to demand fastest at a sensible cost." },
      { title: "Launch roadmap", text: "A phased plan with owners, milestones and the numbers that tell you it's working." },
    ],
    deliverables: [
      "Market & audience map",
      "Pricing and offer recommendation",
      "Channel plan and budget split",
      "90-day launch roadmap",
    ],
    idealFor: ["New brand launches", "Market or category entry", "New product lines", "Brands re-launching"],
  },
  {
    slug: "growth-strategy",
    num: "02",
    title: "Growth strategy",
    short: "Finding what's slowing your growth, and building the plan to fix it.",
    headline: "Find what's slowing you down. Then fix it.",
    intro:
      "Growth rarely stalls for one reason. I look across your funnel, offer, channels and team to find the real bottleneck, then build a focused plan to remove it.",
    problems: [
      "Growth has plateaued and we don't know why.",
      "We're spending more for the same results.",
      "We're not sure if we're ready to scale.",
      "Too many ideas, no clear priorities.",
    ],
    whatIDo: [
      { title: "Growth diagnosis", text: "Pinpoint where the funnel leaks and where the biggest upside sits." },
      { title: "Scale-readiness check", text: "Test whether your unit economics, operations and team can carry more volume." },
      { title: "Prioritised plan", text: "Rank opportunities by impact and effort so the team knows what to do next." },
      { title: "Measurement", text: "Set the few metrics that matter and a rhythm to review them." },
    ],
    deliverables: [
      "Growth audit and diagnosis",
      "Prioritised opportunity list",
      "Scale-readiness assessment",
      "Quarterly growth plan and KPI framework",
    ],
    idealFor: ["Plateaued brands", "Brands preparing to scale", "Rising acquisition costs", "Leadership teams who need focus"],
  },
  {
    slug: "ecommerce-quick-commerce-strategy",
    num: "03",
    title: "E-commerce strategy | Quick commerce",
    short:
      "Improving the journey from first consideration to conversion, retention, and repeat value. Choosing the right market portals, turning browsers into buyers, and buyers into repeat customers.",
    headline: "Turn browsers into buyers, and buyers into repeat customers.",
    intro:
      "From picking the right platform and marketplaces to the last click at checkout and the reorder after, I improve the whole journey. That includes quick commerce, where visibility and availability decide the sale.",
    problems: [
      "Which e-commerce platform is right for us?",
      "We get traffic but not enough sales.",
      "Which market portals and quick-commerce platforms should we be on?",
      "Customers buy once and don't come back.",
    ],
    whatIDo: [
      { title: "Platform & portal selection", text: "Pick the right store platform, marketplaces and quick-commerce portals for your category and stage." },
      { title: "Conversion journey", text: "Fix the path from first consideration to checkout: product pages, offers, trust and friction." },
      { title: "Quick-commerce playbook", text: "Listings, availability, visibility and promotions built for fast-moving platforms." },
      { title: "Retention & repeat value", text: "Lifecycle plays that bring customers back and grow lifetime value." },
    ],
    deliverables: [
      "Platform and portal recommendation",
      "Conversion audit with fixes",
      "Quick-commerce listing and promotion plan",
      "Retention and repeat-purchase roadmap",
    ],
    idealFor: ["D2C brands", "Brands expanding to marketplaces", "FMCG and quick-commerce sellers", "Stores with low conversion or repeat rate"],
  },
  {
    slug: "marketing-strategy",
    num: "04",
    title: "Marketing strategy",
    short: "Marketing built around business goals, not vanity metrics.",
    headline: "Marketing built around business goals, not vanity metrics.",
    intro:
      "Likes don't pay salaries. I connect marketing to revenue, margin and growth targets, then decide budget, media split and messaging to match.",
    problems: [
      "What's the right marketing budget for us?",
      "How should we split spend across channels?",
      "We're busy, but can't tie marketing to results.",
      "Our messaging isn't landing with the right people.",
    ],
    whatIDo: [
      { title: "Goal-led planning", text: "Translate business targets into marketing objectives and measurable outcomes." },
      { title: "Budget & media split", text: "Allocate spend across brand, content and performance channels based on stage and goals." },
      { title: "Messaging & campaigns", text: "Clear messaging and campaign ideas built around the audience and the offer." },
      { title: "Reporting that matters", text: "Dashboards focused on revenue, cost of acquisition and return, not noise." },
    ],
    deliverables: [
      "Annual marketing plan",
      "Budget and media-split model",
      "Campaign and content calendar",
      "KPI and reporting framework",
    ],
    idealFor: ["New and growing brands", "Teams with unclear budgets", "Founders running marketing themselves", "Brands resetting their marketing"],
  },
  {
    slug: "brand-positioning",
    num: "05",
    title: "Brand positioning",
    short: "What your brand stands for, who it's for, and why it deserves to be chosen.",
    headline: "Be the obvious choice for the right people.",
    intro:
      "Bad positioning is expensive: it raises acquisition cost and weakens every campaign. I define what you stand for, who you are for and why you deserve to be chosen.",
    problems: [
      "We sound like everyone else in our category.",
      "People don't understand what makes us different.",
      "We're competing on price.",
      "Our brand and our product don't feel connected.",
    ],
    whatIDo: [
      { title: "Category & competitor read", text: "See how the category talks and where there is space to own." },
      { title: "Audience insight", text: "Understand who you are for and what they actually care about." },
      { title: "Positioning & narrative", text: "A clear point of view, value proposition and story the whole team can use." },
      { title: "Brand guidelines for growth", text: "Voice, messaging pillars and proof points that carry across channels." },
    ],
    deliverables: [
      "Positioning statement and value proposition",
      "Messaging pillars and brand narrative",
      "Competitor and category map",
      "Brand voice guidelines",
    ],
    idealFor: ["Brands in crowded categories", "Founders refining the story", "Rebrands and repositioning", "Brands moving upmarket"],
  },
  {
    slug: "digital-strategy",
    num: "06",
    title: "Digital strategy",
    short: "Brand, performance, content and tech working as one connected system.",
    headline: "Brand, performance, content and tech working as one system.",
    intro:
      "Most brands run channels in silos. I connect brand, performance, content and technology so each one makes the others work harder, and so you can improve ROAS with confidence.",
    problems: [
      "How do I increase my ROAS?",
      "Our channels don't talk to each other.",
      "We can't see which activity drives revenue.",
      "Our tech stack and tracking are messy.",
    ],
    whatIDo: [
      { title: "Channel architecture", text: "Decide the role of each channel and how they feed one another." },
      { title: "Performance optimisation", text: "Structure, creative and audience improvements that lift return on ad spend." },
      { title: "Content engine", text: "A content system that supports both brand and performance." },
      { title: "Tracking & tech", text: "Clean measurement and a lean stack so decisions rest on reliable data." },
    ],
    deliverables: [
      "Digital ecosystem blueprint",
      "Performance audit and ROAS plan",
      "Content system and calendar",
      "Tracking and analytics setup recommendations",
    ],
    idealFor: ["Brands with fragmented channels", "Teams with rising ad spend", "Brands scaling performance marketing", "Businesses with weak tracking"],
  },
];

export const process = [
  { step: "01", title: "Listen", text: "I start by understanding your business, goals, numbers and constraints, before any advice." },
  { step: "02", title: "Audit", text: "A clear look at your market, funnel, channels and brand to find what's working and what's holding you back." },
  { step: "03", title: "Strategize", text: "A focused plan with priorities, owners and metrics, built around your business goals." },
  { step: "04", title: "Execute", text: "Where needed, my team of brand, content, digital and performance specialists turns the plan into results." },
];

export const execution = {
  title: "The execution engine behind the strategy.",
  text: "A full-service team across brand, content, digital and performance, trusted by 100+ brands to turn strategy into results.",
  capabilities: ["Brand", "Content", "Digital", "Performance", "Production"],
};

export type Article = {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "disrupt-the-market",
    title: "Disrupt the Market",
    tag: "Strategy",
    excerpt: "Disruption starts with seeing the gap everyone else has accepted as normal.",
    body: [
      "Most categories settle into habits: the same promises, the same prices, the same channels. Disruption begins when you question one of those habits and build a business around the answer.",
      "That doesn't mean being louder. It means finding the point of friction your customers tolerate and removing it in a way competitors can't copy quickly.",
      "Before you plan the campaign, write down what your category takes for granted. The best growth strategies usually hide in that list.",
    ],
  },
  {
    slug: "clarity-before-channels",
    title: "Clarity before channels",
    tag: "Marketing",
    excerpt: "Picking channels before you know who you're talking to is the fastest way to waste budget.",
    body: [
      "Teams often ask which platform to be on before answering who the customer is and what they need to hear. Channels are just routes. Without clarity, every route is expensive.",
      "Get clear on the audience, the offer and the one message that matters. Then choose the channels where that message meets that audience at a sensible cost.",
      "Clarity doesn't slow you down. It stops you from running in the wrong direction quickly.",
    ],
  },
  {
    slug: "bad-positioning-is-expensive",
    title: "Bad positioning is expensive",
    tag: "Brand",
    excerpt: "Unclear positioning quietly raises your cost of every click, sale and hire.",
    body: [
      "When people can't tell why you're different, they compare you on price. That pushes margins down and acquisition costs up, and no amount of creative fixes it.",
      "Good positioning makes every campaign cheaper to run because the message does more of the work. It also makes your team faster, since everyone knows what you stand for.",
      "If your marketing feels like pushing a boulder uphill, check the positioning before you change the media plan.",
    ],
  },
  {
    slug: "virality-is-a-piece-of-art",
    title: "Virality is a piece of Art",
    tag: "Content",
    excerpt: "You can't guarantee a viral hit, but you can build the conditions for one.",
    body: [
      "Virality looks accidental, but the content that travels usually shares a few traits: a clear idea, an emotional hook and something people want to pass on.",
      "Treat it as craft plus volume. Test many ideas, learn from what resonates and give the winners real distribution support.",
      "Don't build a strategy on luck, but do leave room for the unexpected hit. The art is knowing when to back it.",
    ],
  },
  {
    slug: "conversion-is-context",
    title: "Conversion is a context problem",
    tag: "E-commerce",
    excerpt: "Visitors don't convert because of a button colour. They convert when the page fits their moment.",
    body: [
      "Low conversion is often blamed on design details. More often it's a mismatch between what the visitor expected and what the page shows them.",
      "Look at where the traffic comes from, what it was promised and what the next step feels like. Align the promise, the proof and the path.",
      "When context fits, small changes work. When it doesn't, no amount of testing will save the page.",
    ],
  },
];

export const stats = [
  { n: "10+", l: "Years of experience" },
  { n: "100+", l: "Brands trusted" },
  { n: "06", l: "Strategy services" },
  { n: "05", l: "Execution disciplines" },
];
