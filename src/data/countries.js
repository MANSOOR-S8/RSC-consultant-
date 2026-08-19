const countries = [
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    flag: '🇬🇧',
    region: 'Western Europe',
    office: 'London',
    blurb:
      'Our founding European hub, advising on market entry, corporate structuring and investor visas across England, Scotland and Wales.',
    highlights: [
      'Innovator Founder & Global Talent visa strategy',
      'Corporate structuring and UK subsidiary setup',
      'Access to our London capital markets network',
    ],
    stat: { label: 'Advising since', value: '2005' },
  },
  {
    slug: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    region: 'Central Europe',
    office: 'Berlin',
    blurb:
      'Deep manufacturing and technology sector relationships, guiding businesses through Germany’s regulatory and works-council landscape.',
    highlights: [
      'EU Blue Card and skilled-worker relocation',
      'Mittelstand partnership and distribution strategy',
      'Works council and labour law advisory',
    ],
    stat: { label: 'Advising since', value: '2009' },
  },
  {
    slug: 'france',
    name: 'France',
    flag: '🇫🇷',
    region: 'Western Europe',
    office: 'Paris',
    blurb:
      'Supporting founders and investors through French Tech Visa pathways, tax structuring and public-sector procurement.',
    highlights: [
      'French Tech Visa and Passeport Talent',
      'Holding structure and tax treaty planning',
      'Public tender and procurement navigation',
    ],
    stat: { label: 'Advising since', value: '2011' },
  },
  {
    slug: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    region: 'Western Europe',
    office: 'Amsterdam',
    blurb:
      'A logistics and fintech gateway to the EU single market, with strong guidance on the 30% ruling and BV incorporation.',
    highlights: [
      'Highly Skilled Migrant & 30% tax ruling',
      'BV incorporation and EU distribution hubs',
      'Fintech and logistics licensing support',
    ],
    stat: { label: 'Advising since', value: '2013' },
  },
  {
    slug: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    region: 'Central Europe',
    office: 'Zurich',
    blurb:
      'Private banking, wealth structuring and cantonal residency advisory for high-net-worth individuals and family offices.',
    highlights: [
      'Cantonal residency and lump-sum taxation',
      'Family office and wealth structuring',
      'Financial services licensing (FINMA)',
    ],
    stat: { label: 'Advising since', value: '2008' },
  },
  {
    slug: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    region: 'Western Europe',
    office: 'Dublin',
    blurb:
      'An English-speaking EU base favoured for holding structures, R&D incentives and post-Brexit market access.',
    highlights: [
      'Employment permits and Critical Skills visas',
      'IP holding and R&D tax credit structuring',
      'Post-Brexit EU market access planning',
    ],
    stat: { label: 'Advising since', value: '2016' },
  },
  {
    slug: 'spain',
    name: 'Spain',
    flag: '🇪🇸',
    region: 'Southern Europe',
    office: 'Madrid',
    blurb:
      'Golden Visa transition guidance, Startup Law incentives and regional expansion across the Iberian peninsula.',
    highlights: [
      'Digital Nomad & Non-Lucrative visa routes',
      'Startup Law tax and equity incentives',
      'Regional distribution and retail expansion',
    ],
    stat: { label: 'Advising since', value: '2014' },
  },
  {
    slug: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    region: 'Southern Europe',
    office: 'Lisbon',
    blurb:
      'A growing base for founders relocating under the D2 and Digital Nomad visas, with NHR-successor tax planning.',
    highlights: [
      'D2 entrepreneur and Digital Nomad visas',
      'Post-NHR tax planning for new residents',
      'Startup incubation and EU grant access',
    ],
    stat: { label: 'Advising since', value: '2018' },
  },
];

export default countries;

export function getCountryBySlug(slug) {
  return countries.find((c) => c.slug === slug);
}
