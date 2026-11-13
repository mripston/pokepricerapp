// Keyword landing pages. Each entry becomes a page at /<slug>/.

export interface LandingPage {
  slug: string;
  nav: string;
  title: string;
  description: string;
  h1: string;
  highlight: string;
  lead: string;
  shot: string;
  shotAlt: string;
  introHeading: string;
  intro: string[];
  points: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faq: { q: string; a: string }[];
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'pokemon-card-scanner',
    nav: 'Pokémon Card Scanner',
    title: 'Pokémon Card Scanner App for iPhone',
    description:
      'Scan Pokémon cards with your iPhone camera and get the card, set and market price in seconds. Scan a whole stack, free and unlimited.',
    h1: 'The Pokémon card scanner that keeps up with a',
    highlight: 'whole stack',
    lead: 'Point your iPhone at a card and Poké Pricer identifies it and shows the market price. Keep going, card after card, and watch the running total grow.',
    shot: 'scan',
    shotAlt: 'Poké Pricer scanning an Umbreon VMAX card and showing a $288 price',
    introHeading: 'Built for sorting piles, not single cards',
    intro: [
      'Most people who go looking for a card scanner have the same problem: a binder, a shoebox or a fresh stack of pulls, and no idea which cards matter. Looking each one up by hand takes minutes per card.',
      'Poké Pricer runs the camera continuously. Each card is recognised, priced and added to a running total, so you can work through a pile without stopping to type anything.',
    ],
    points: [
      { title: 'Free, unlimited scanning', text: 'Scan as many cards as you want. There is no daily scan limit to work around.' },
      { title: 'Identifies the exact printing', text: 'The same Pokémon can appear on dozens of cards. The scanner matches the set and card number, then lets you pick holofoil, reverse holofoil or normal.' },
      { title: 'File the stack in one tap', text: 'When you finish a pile, send every scanned card to your collection at once instead of adding them one by one.' },
    ],
    steps: [
      { title: 'Open the scanner', text: 'Tap Scan and hold a card in the frame. Good, even light helps.' },
      { title: 'Keep feeding it cards', text: 'Each card is priced as it is recognised and added to the running total.' },
      { title: 'File what you scanned', text: 'Save the batch to your collection or a custom list.' },
    ],
    faq: [
      { q: 'Is the Pokémon card scanner free?', a: 'Yes. Poké Pricer is free to download and card scanning is free and unlimited. An optional subscription unlocks extra features.' },
      { q: 'Can it scan cards in sleeves or top loaders?', a: 'Usually, yes. Glare is the main thing that gets in the way, so tilt the card slightly or move away from direct overhead light if a sleeved card is not being picked up.' },
      { q: 'Does it work on older cards?', a: 'The app covers 174 sets and more than 20,000 printings, from early sets through current releases. If a scan does not match, you can search for the card by name instead.' },
      { q: 'Is there an Android version?', a: 'Not at the moment. Poké Pricer is available for iPhone running iOS 17 or later.' },
    ],
  },
  {
    slug: 'pokemon-card-price-checker',
    nav: 'Pokémon Card Price Checker',
    title: 'Pokémon Card Price Checker: Live Market Prices',
    description:
      'Check Pokémon card prices from TCGplayer and Cardmarket on your iPhone. See every printing, 90 days of price history and set price alerts.',
    h1: 'A Pokémon card price checker that knows',
    highlight: 'which printing',
    lead: 'Search or scan a card and see current market prices for every version of it, with 90 days of history so you can tell a spike from a trend.',
    shot: 'editions',
    shotAlt: 'Poké Pricer showing a Pikachu card with prices for reverse holofoil and normal printings',
    introHeading: 'The price depends on the printing',
    intro: [
      'A card name alone does not tell you what a card is worth. One Pikachu can be a few cents and another can be four figures. Even within a single set, the reverse holofoil and the normal version of the same card number can be priced very differently.',
      'Poké Pricer lists the printings side by side, with the price range across all of them, so you check the card you actually have rather than the one that shows up first in a search.',
    ],
    points: [
      { title: 'Prices from the big marketplaces', text: 'Market prices are sourced from TCGplayer and Cardmarket and refreshed regularly.' },
      { title: '90 days of price history', text: 'Every card has a price chart, free, so you can see where the price has been before you buy or sell.' },
      { title: 'Price alerts', text: 'Set a target price on any card and get notified when it rises above or falls below it.' },
    ],
    steps: [
      { title: 'Find the card', text: 'Scan it with the camera or search by name. Search works offline.' },
      { title: 'Pick your printing', text: 'Match the set, card number and finish to the card in your hand.' },
      { title: 'Read the chart', text: 'Check the current market price and how it has moved over the last 90 days.' },
    ],
    faq: [
      { q: 'Where do the prices come from?', a: 'Poké Pricer uses market price data from TCGplayer and Cardmarket. These reflect recent marketplace activity for ungraded cards.' },
      { q: 'Are the prices for graded cards?', a: 'No. Prices are for raw, ungraded cards. Graded copies from PSA, BGS or CGC often sell for more, sometimes much more, and need to be checked against graded sales.' },
      { q: 'How accurate are Pokémon card prices?', a: 'Market prices are a good guide to what a card in near mint condition sells for, but they are estimates. Condition, centering and how quickly you need to sell all change what you will actually get.' },
      { q: 'Can I check prices without a signal?', a: 'Card search works offline, with more than 20,000 printings stored on your phone. Prices update when you are back online.' },
    ],
  },
  {
    slug: 'pokemon-card-collection-tracker',
    nav: 'Collection Value Tracker',
    title: 'Pokémon Card Collection Tracker & Value App',
    description:
      'Track your Pokémon card collection and its total value on iPhone. Scan cards in, follow set completion across 174 sets and see what moved.',
    h1: 'Track your Pokémon collection and what it is',
    highlight: 'worth today',
    lead: 'Scan your cards in once. Poké Pricer keeps a running total of your collection value and re-prices every card daily.',
    shot: 'collection',
    shotAlt: 'Poké Pricer collection screen showing 15 cards worth $19,543',
    introHeading: 'A spreadsheet that updates itself',
    intro: [
      'Plenty of collectors start with a spreadsheet. It works until prices move, which they do constantly, and then every row is out of date.',
      'Poké Pricer replaces the spreadsheet with a collection that re-prices itself. You see the total at the top, each card underneath with its printing and quantity, and a summary of which cards rose and fell.',
    ],
    points: [
      { title: 'Collection value, updated daily', text: 'Every card in your collection is re-priced each day, so the total is always current.' },
      { title: 'Set completion', text: 'Browse 174 sets and watch each one fill in as you scan the cards you own.' },
      { title: 'What moved', text: 'See the risers and fallers in your own collection and across the whole game.' },
    ],
    steps: [
      { title: 'Scan your cards in', text: 'Work through a binder or box with the stack scanner.' },
      { title: 'Organise with lists', text: 'Keep a main collection plus separate lists for trades, wants or a single binder.' },
      { title: 'Check back any time', text: 'Open the app to see the current total and what changed.' },
    ],
    faq: [
      { q: 'How do I find out what my whole Pokémon collection is worth?', a: 'Add your cards to a collection in Poké Pricer by scanning them. The app totals the current market price of every card and updates that total daily.' },
      { q: 'Can I track duplicates?', a: 'Yes. Each card in your collection has a quantity, and the collection total accounts for every copy.' },
      { q: 'Can I keep more than one list?', a: 'Yes. You can create separate lists alongside your main collection, for example a trade binder or a wish list.' },
      { q: 'Does it track sealed product or graded cards?', a: 'The app is focused on raw single cards. Sealed product and graded slabs are not priced separately.' },
    ],
  },
];
