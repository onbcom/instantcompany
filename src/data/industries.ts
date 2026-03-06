export interface Industry {
  slug: string;
  name: string;
  description: string;
  exampleIdea: string;
  benefits: string[];
  keyQuestions: string[];
}

export const industries: Industry[] = [
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description: 'Launch an AI-powered real estate business with instant brand identity, positioning, and pricing strategies tailored to the property market.',
    exampleIdea: 'An AI-powered virtual assistant for busy real estate agents',
    benefits: [
      'Instant CRM and lead generation positioning',
      'Property-specific pricing model suggestions',
      'Agent-focused brand identity concepts'
    ],
    keyQuestions: [
      'How to start a real estate business in 2026?',
      'What technology do real estate startups need?',
      'How to differentiate in a crowded property market?'
    ]
  },
  {
    slug: 'pet-grooming',
    name: 'Pet Grooming',
    description: 'Build a standout pet grooming brand with AI-generated business concepts, from mobile grooming vans to luxury pet spas.',
    exampleIdea: 'A mobile pet grooming service that comes to your door',
    benefits: [
      'Pet-owner persona targeting and messaging',
      'Service-based pricing optimization',
      'Local SEO and brand positioning'
    ],
    keyQuestions: [
      'How to start a pet grooming business?',
      'What licenses do pet groomers need?',
      'How much do pet grooming businesses earn?'
    ]
  },
  {
    slug: 'saas',
    name: 'SaaS',
    description: 'Get a complete SaaS business blueprint including subscription pricing, product positioning, and launch-ready copy for your software product.',
    exampleIdea: 'A project management tool for remote creative teams',
    benefits: [
      'SaaS-specific pricing tier optimization',
      'B2B positioning and messaging frameworks',
      'Feature-benefit mapping for landing pages'
    ],
    keyQuestions: [
      'How to build a successful SaaS business?',
      'What pricing model works best for SaaS?',
      'How to find product-market fit for software?'
    ]
  },
  {
    slug: 'e-commerce',
    name: 'E-commerce',
    description: 'Generate a complete e-commerce brand including product positioning, store naming, and go-to-market strategies for online retail.',
    exampleIdea: 'A sustainable fashion marketplace for independent designers',
    benefits: [
      'Direct-to-consumer brand positioning',
      'Marketplace vs. storefront strategy guidance',
      'Conversion-optimized product copy'
    ],
    keyQuestions: [
      'How to start an e-commerce business in 2026?',
      'What platform should I use for online retail?',
      'How to differentiate in a saturated e-commerce market?'
    ]
  },
  {
    slug: 'coffee-shop',
    name: 'Coffee Shop',
    description: 'Brew the perfect coffee shop brand with AI-generated concepts covering everything from specialty branding to subscription models.',
    exampleIdea: 'A specialty coffee roaster with a monthly subscription box',
    benefits: [
      'Local and artisan brand identity',
      'Subscription and retail pricing models',
      'Community-focused positioning strategies'
    ],
    keyQuestions: [
      'How much does it cost to open a coffee shop?',
      'How to create a unique coffee brand?',
      'Is a coffee subscription business profitable?'
    ]
  },
  {
    slug: 'consulting',
    name: 'Consulting',
    description: 'Position yourself as a premium consultant with AI-generated brand identity, service packaging, and pricing frameworks.',
    exampleIdea: 'A fractional CFO service for bootstrapped startups',
    benefits: [
      'Authority-based personal brand positioning',
      'Retainer and project-based pricing models',
      'Thought leadership content frameworks'
    ],
    keyQuestions: [
      'How to start a consulting business?',
      'How to price consulting services?',
      'What niche should a new consultant focus on?'
    ]
  },
  {
    slug: 'fitness',
    name: 'Fitness',
    description: 'Build a fitness brand that stands out — from personal training apps to boutique studios — with instant AI-generated business blueprints.',
    exampleIdea: 'An AI personal training app for busy professionals',
    benefits: [
      'Wellness-focused brand identity',
      'Membership and subscription pricing',
      'Community and engagement positioning'
    ],
    keyQuestions: [
      'How to start a fitness business?',
      'What technology do fitness startups need?',
      'How to build a fitness brand online?'
    ]
  },
  {
    slug: 'education',
    name: 'Education',
    description: 'Create an edtech or tutoring brand with AI-powered business concepts including course pricing, learner personas, and positioning.',
    exampleIdea: 'An online coding bootcamp for career changers',
    benefits: [
      'Learner-first messaging and positioning',
      'Course and cohort pricing optimization',
      'Outcome-based marketing copy'
    ],
    keyQuestions: [
      'How to start an online education business?',
      'What pricing works for online courses?',
      'How to market an edtech product?'
    ]
  }
];
