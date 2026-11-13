// Site-wide settings. Edit values here; every page reads from this file.

export const SITE = {
  name: 'Poké Pricer',
  title: 'Poké Pricer: Pokémon Card Scanner & Price Checker for iPhone',
  description:
    'Scan any Pokémon card with your iPhone camera and see what it is worth. Live TCGplayer and Cardmarket prices, 90 days of price history, price alerts and collection tracking.',
  url: 'https://www.pokepricerapp.com',

  // Google tag ID. Either a Tag Manager container ('GTM-...') or a GA4
  // measurement ID ('G-...'). Leave empty to keep analytics off.
  gaId: 'G-BE7MBJBS5R',

  appStoreId: '6744259439',
  appStoreUrl: 'https://apps.apple.com/us/app/id6744259439',
  rating: { value: 4.5, count: 32 },

  company: 'Streamlined Studios',
  companyUrl: 'https://www.streamlinedstudios.com',
  email: 'matt@streamlinedstudios.com',
  twitter: 'StrmlinedStudio',
};

export const CATEGORIES: Record<string, string> = {
  'card-values': 'Card Values',
  'collecting-guides': 'Collecting Guides',
  'how-to': 'How To',
  'buying-selling': 'Buying & Selling',
  'sets': 'Sets',
};
