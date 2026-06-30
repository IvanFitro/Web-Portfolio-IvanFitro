// ============================================================================
//  Ivan Fitro — Portfolio data (single source of truth)
//  Edit this file to add new findings, audits, or update stats.
// ============================================================================

export const profile = {
  name: 'Ivan Fitro',
  handle: 'IvanFitro',
  role: 'Smart Contract Security Researcher',
  tagline: 'every line is a suspect',
  available: 'Available for audits',
  location: 'remote · global · replies < 24h',
  bio: `Independent smart contract security researcher with 3+ years hunting
  critical and high-severity vulnerabilities across DeFi, stablecoins,
  cross-chain bridges, prediction markets, and staking systems. 60+ confirmed
  findings on the top competitive audit platforms, plus private engagements
  alongside leading audit firms.`,
};

export const contacts = {
  email: 'ivanfitro.ph@gmail.com',
  twitter: 'https://x.com/FitroIvan',
  twitterHandle: '@FitroIvan',
  telegram: 'https://t.me/IvanFitro',
  telegramHandle: '@IvanFitro',
  code4rena: 'https://code4rena.com/@Fitro',
  sherlock: 'https://audits.sherlock.xyz/watson/IvanFitro',
  cyfrin: 'https://profiles.cyfrin.io/u/ivanfitro',
  githubContests: 'https://github.com/IvanFitro/Contest-Audit-Portfolio',
  githubPrivate: 'https://github.com/IvanFitro/Team-Private-Audits',
};

// Headline numbers for the "track record" box
export const stats = [
  { value: '62', label: 'confirmed findings' },
  { value: '19+', label: 'private audits' },
  { value: '4', label: 'audit platforms' },
  { value: '3yrs', label: 'experience' },
];

export const platformBreakdown = [
  { platform: 'Code4rena', count: 25 },
  { platform: 'Sherlock', count: 23 },
  { platform: 'CodeHawks', count: 11 },
  { platform: 'Cantina', count: 3 },
];

// Skills / stack
export const stack = [
  {
    category: 'languages',
    items: ['Solidity', 'Rust', 'Vyper'],
  },
  {
    category: 'domains',
    items: [
      'DeFi & AMMs',
      'Stablecoins',
      'Lending & CDPs',
      'Cross-chain / Bridges',
      'Staking & LSTs',
      'Prediction Markets',
      'Account Abstraction',
    ],
  },
  {
    category: 'methods',
    items: [
      'Manual review',
      'Invariant / fuzz testing',
      'PoC exploit dev',
      'Threat modeling',
      'Economic analysis',
    ],
  },
];

// Top contest finishes worth highlighting (the marked ones in your repo)
export const wins = [
  {
    protocol: 'Virtuals Protocol',
    rank: 'Unique + Selected',
    note: 'Unique finding (👑) plus a finding selected for the final report (⭐)',
    platform: 'Code4rena',
    badge: 'crown',
  },
  {
    protocol: 'Silo Finance',
    rank: 'Selected for report',
    note: 'Finding selected for the final report (⭐)',
    platform: 'Code4rena',
    badge: 'star',
  },
  {
    protocol: 'Covenant',
    rank: 'Selected for report',
    note: 'Finding selected for the final report (⭐)',
    platform: 'Code4rena',
    badge: 'star',
  },
  {
    protocol: 'Coinbase — Spend Permissions',
    rank: '2 findings',
    note: 'Findings on Coinbase smart-wallet spend permissions',
    platform: 'Cantina',
    badge: 'shield',
  },
];

// Testimonials from firms & private clients
export const testimonials = [
  {
    org: 'Pashov Audit Group',
    role: 'Audit Firm',
    quote: `Hello sir! Thank you for being part of Pashov Audit Group Internship
    Program 2025. Top 2 performance in the internship. Happy with what I am seeing!`,
  },
  {
    org: 'OpenZeppelin',
    role: 'Security Firm',
    quote: `During the recruitment process at OpenZeppelin, Ivan successfully
    completed a highly rigorous technical evaluation process designed to assess
    deep knowledge in security research, problem solving, and professional
    integrity. We confidently recommend Ivan to any organization seeking a
    capable and motivated security professional.`,
  },
  {
    org: 'BitChill Protocol',
    role: 'Private Client',
    quote: `Thanks, @FitroIvan for such tremendous work! We hope to be releasing
    the first open version of @BitChillApp very soon! Stay tuned!`,
  },
];

// Firms & platforms strip
export const firms = {
  contractedBy: ['Pashov Audit Group', 'AdevarLabs', 'Burrasec'],
  rankedOn: ['Sherlock', 'Code4rena', 'CodeHawks', 'Cantina'],
};

// Achievement screenshots for the carousel (left/right).
// Drop new images in /public/images and add a row here.
export const achievements = [
  { img: '/images/c4_virtuals.jpeg', platform: 'Code4rena', title: 'Virtuals Protocol' },
  { img: '/images/c4_silo.jpeg', platform: 'Code4rena', title: 'Silo Finance' },
  { img: '/images/sherlock_rova.png', platform: 'Sherlock', title: 'Rova' },
  { img: '/images/sherlock_usual.jpeg', platform: 'Sherlock', title: 'Usual Labs' },
  { img: '/images/sherlock_debank.jpeg', platform: 'Sherlock', title: 'DeBank' },
];

// Triage work (separate /work page). Shape: { protocol, firm, lang }
export const triage = [
  { protocol: 'Rubic', firm: 'Pashov Audit Group', lang: 'Solidity' },
  { protocol: 'Berachain, PoL', firm: 'Pashov Audit Group', lang: 'Solidity' },
  { protocol: '1inch, CrosschainSwap', firm: 'Pashov Audit Group', lang: 'Solidity' },
  { protocol: 'ListaDAO', firm: 'Pashov Audit Group', lang: 'Solidity' },
  { protocol: 'ListaDAO', firm: 'Burrasec', lang: 'Solidity' },
  { protocol: 'HeimdallV2', firm: 'Burrasec', lang: 'Go' },
];

// Full competitive findings, grouped by platform → protocol.
// badge: 'crown' (sole finder), 'star' (selected), or null
export const contests = [
  {
    platform: 'Code4rena',
    protocols: [
      { name: 'Ethena Labs', findings: [{ label: 'Report', url: 'https://github.com/code-423n4/2023-10-ethena-findings/blob/main/data/Fitro-Q.md' }] },
      { name: 'NextGen', findings: [{ label: '#320', url: 'https://github.com/code-423n4/2023-10-nextgen-findings/issues/320' }] },
      { name: 'PoolTogether', findings: [{ label: '#142', url: 'https://github.com/code-423n4/2024-03-pooltogether-findings/issues/142' }] },
      { name: 'Althea Liquid Infrastructure', findings: [{ label: '#264', url: 'https://github.com/code-423n4/2024-02-althea-liquid-infrastructure-findings/issues/264' }] },
      { name: 'Munchables', findings: [{ label: '#103', url: 'https://github.com/code-423n4/2024-07-munchables-findings/issues/103' }] },
      { name: 'TraitForge', findings: [
        { label: '#993', url: 'https://github.com/code-423n4/2024-07-traitforge-findings/issues/993' },
        { label: '#890', url: 'https://github.com/code-423n4/2024-07-traitforge-findings/issues/890' },
        { label: '#990', url: 'https://github.com/code-423n4/2024-07-traitforge-findings/issues/990' },
        { label: '#86', url: 'https://github.com/code-423n4/2024-07-traitforge-validation/issues/86' },
        { label: '#102', url: 'https://github.com/code-423n4/2024-07-traitforge-validation/issues/102' },
      ] },
      { name: 'Phi', findings: [
        { label: 'Report', url: 'https://github.com/code-423n4/2024-08-phi-findings/blob/main/data/Fitro-Q.md' },
        { label: '#98', url: 'https://github.com/code-423n4/2024-08-phi-validation/issues/98' },
      ] },
      { name: 'LamboWin', findings: [
        { label: 'S-189', url: 'https://code4rena.com/audits/2024-12-lambowin/submissions/S-189' },
        { label: 'S-188', url: 'https://code4rena.com/audits/2024-12-lambowin/submissions/S-188' },
      ] },
      { name: 'Concrete', findings: [
        { label: 'S-66', url: 'https://code4rena.com/audits/2024-11-concrete/submissions/S-66' },
        { label: 'S-28', url: 'https://code4rena.com/audits/2024-11-concrete/submissions/S-28' },
        { label: 'S-11', url: 'https://code4rena.com/audits/2024-11-concrete/submissions/S-11' },
        { label: 'S-8', url: 'https://code4rena.com/audits/2024-11-concrete/submissions/S-8' },
        { label: 'S-6', url: 'https://code4rena.com/audits/2024-11-concrete/submissions/S-6' },
      ] },
      { name: 'LiquidRon', findings: [
        { label: 'S-499', url: 'https://code4rena.com/audits/2025-01-liquid-ron/submissions/S-499' },
        { label: 'S-161', url: 'https://code4rena.com/audits/2025-01-liquid-ron/submissions/S-161' },
      ] },
      { name: 'Silo Finance', findings: [{ label: 'F-57', url: 'https://code4rena.com/audits/2025-03-silo-finance/submissions/F-57', badge: 'star' }] },
      { name: 'Virtuals Protocol', findings: [
        { label: 'F-90', url: 'https://code4rena.com/audits/2025-04-virtuals-protocol/submissions/F-90', badge: 'crown' },
        { label: 'F-114', url: 'https://code4rena.com/audits/2025-04-virtuals-protocol/submissions/F-114', badge: 'star' },
      ] },
      { name: 'Covenant', findings: [{ label: 'S-80', url: 'https://code4rena.com/audits/2025-10-covenant/submissions/S-80', badge: 'star' }] },
    ],
  },
  {
    platform: 'Sherlock',
    protocols: [
      { name: 'DODO GSP', findings: [{ label: '#56', url: 'https://github.com/sherlock-audit/2023-12-dodo-gsp-judging/issues/56' }] },
      { name: 'Truflation', findings: [{ label: '#100', url: 'https://github.com/sherlock-audit/2023-12-truflation-judging/issues/100' }] },
      { name: 'Telcoin Platform', findings: [
        { label: '#33', url: 'https://github.com/sherlock-audit/2024-01-telcoin-judging/issues/33' },
        { label: '#18', url: 'https://github.com/sherlock-audit/2024-01-telcoin-judging/issues/18' },
        { label: '#6', url: 'https://github.com/sherlock-audit/2024-01-telcoin-judging/issues/6' },
      ] },
      { name: 'Teller Finance', findings: [{ label: '#81', url: 'https://github.com/sherlock-audit/2024-04-teller-finance-judging/issues/81' }] },
      { name: 'MagicSea', findings: [{ label: '#376', url: 'https://github.com/sherlock-audit/2024-06-magicsea-judging/issues/376' }] },
      { name: 'Winnables Raffles', findings: [
        { label: '#338', url: 'https://github.com/sherlock-audit/2024-08-winnables-raffles-judging/issues/338' },
        { label: '#161', url: 'https://github.com/sherlock-audit/2024-08-winnables-raffles-judging/issues/161' },
      ] },
      { name: 'Boost Core Incentive Protocol', findings: [
        { label: '#13', url: 'https://github.com/sherlock-audit/2024-06-boost-aa-wallet-judging/issues/13' },
        { label: '#182', url: 'https://github.com/sherlock-audit/2024-06-boost-aa-wallet-judging/issues/182' },
      ] },
      { name: 'Superfluid Locker System', findings: [{ label: '#27', url: 'https://github.com/sherlock-audit/2024-11-superfluid-locking-contract-judging/issues/27' }] },
      { name: 'Ethos Network Social Contracts', findings: [{ label: '#90', url: 'https://github.com/sherlock-audit/2024-10-ethos-network-judging/issues/90' }] },
      { name: "Oku's Order Types", findings: [
        { label: '#562', url: 'https://github.com/sherlock-audit/2024-11-oku-judging/issues/562' },
        { label: '#677', url: 'https://github.com/sherlock-audit/2024-11-oku-judging/issues/677' },
      ] },
      { name: 'Rova', findings: [{ label: '#39', url: 'https://github.com/sherlock-audit/2025-02-rova-judging/issues/39' }] },
      { name: 'DODO Cross-Chain DEX', findings: [
        { label: '#760', url: 'https://github.com/sherlock-audit/2025-05-dodo-cross-chain-dex-judging/issues/760' },
        { label: '#110', url: 'https://github.com/sherlock-audit/2025-05-dodo-cross-chain-dex-judging/issues/110' },
        { label: '#836', url: 'https://github.com/sherlock-audit/2025-05-dodo-cross-chain-dex-judging/issues/836' },
        { label: '#149', url: 'https://github.com/sherlock-audit/2025-05-dodo-cross-chain-dex-judging/issues/149' },
      ] },
      { name: 'Malda', findings: [
        { label: '#650', url: 'https://github.com/sherlock-audit/2025-07-malda-judging/issues/650' },
        { label: '#685', url: 'https://github.com/sherlock-audit/2025-07-malda-judging/issues/685' },
        { label: '#945', url: 'https://github.com/sherlock-audit/2025-07-malda-judging/issues/945' },
      ] },
    ],
  },
  {
    platform: 'CodeHawks',
    protocols: [
      { name: 'Foundry DeFi StableCoin', findings: [{ label: '#860', url: 'https://github.com/Cyfrin/2023-07-foundry-defi-stablecoin/issues/860' }] },
      { name: 'MorpheusAI', findings: [{ label: '#121', url: 'https://www.codehawks.com/submissions/clrzgrole0007xtsq0gfdw8if/121' }] },
      { name: 'Beanstalk (Part 2)', findings: [{ label: '#15', url: 'https://www.codehawks.com/submissions/clu7665bs0001fmt5yahc8tyh/15' }] },
      { name: 'Tadle', findings: [
        { label: '#685', url: 'https://codehawks.cyfrin.io/c/2024-08-tadle/s/685' },
        { label: '#889', url: 'https://codehawks.cyfrin.io/c/2024-08-tadle/s/889' },
        { label: '#721', url: 'https://codehawks.cyfrin.io/c/2024-08-tadle/s/721' },
        { label: '#796', url: 'https://codehawks.cyfrin.io/c/2024-08-tadle/s/796' },
        { label: '#1148', url: 'https://codehawks.cyfrin.io/c/2024-08-tadle/s/1148' },
      ] },
      { name: 'One World', findings: [{ label: '#603', url: 'https://codehawks.cyfrin.io/c/2024-11-one-world/s/603' }] },
      { name: 'QuantAMM', findings: [
        { label: '#170', url: 'https://codehawks.cyfrin.io/c/2024-12-quantamm/s/170' },
        { label: '#322', url: 'https://codehawks.cyfrin.io/c/2024-12-quantamm/s/322' },
      ] },
    ],
  },
  {
    platform: 'Cantina',
    protocols: [
      { name: 'Coinbase — Spend Permissions', findings: [
        { label: '#111', url: 'https://cantina.xyz/code/6837e02a-0a87-4577-a047-4e1ea71cff01/findings/111' },
        { label: '#243', url: 'https://cantina.xyz/code/6837e02a-0a87-4577-a047-4e1ea71cff01/findings/243' },
      ] },
      { name: 'telcoin-network', findings: [{ label: '#399', url: 'https://cantina.xyz/code/26d5255b-6f68-46cf-be55-81dd565d9d16/findings/399' }] },
    ],
  },
];

// Private audits. report: URL string or null (private / NDA)
export const privateAudits = [
  // Pashov Audit Group
  { firm: 'Pashov Audit Group', protocol: 'Hyperstable', date: 'Mar 2025', report: 'https://github.com/pashov/audits/blob/master/team/pdf/Hyperstable-security-review_2025-03-19.pdf' },
  { firm: 'Pashov Audit Group', protocol: 'Aria Protocol', date: 'Apr 2025', report: null },
  { firm: 'Pashov Audit Group', protocol: 'Rip It', date: 'May 2025', report: 'https://github.com/pashov/audits/blob/master/team/pdf/RipIt-security-review_2025-05-10.pdf' },
  { firm: 'Pashov Audit Group', protocol: 'Avon', date: 'Jul 2025', report: null },
  { firm: 'Pashov Audit Group', protocol: 'Memecoin Prediction Markets', date: 'Aug 2025', report: 'https://github.com/pashov/audits/blob/master/team/pdf/MCP-security-review_2025-08-07.pdf' },
  { firm: 'Pashov Audit Group', protocol: 'YuzuUSD Stablecoin', date: 'Aug 2025', report: null },
  { firm: 'Pashov Audit Group', protocol: 'Hyperbeat', date: 'Sep 2025', report: 'https://github.com/pashov/audits/blob/master/team/pdf/YuzuUSD-security-review_2025-08-28.pdf' },
  { firm: 'Pashov Audit Group', protocol: 'Ostium', date: 'Sep 2025', report: null },
  { firm: 'Pashov Audit Group', protocol: 'Ostium 2', date: 'Sep 2025', report: null },
  { firm: 'Pashov Audit Group', protocol: 'stHYPE', date: 'Oct 2025', report: 'https://github.com/pashov/audits/blob/master/team/pdf/stHYPE-security-review_2025-10-13.pdf' },
  { firm: 'Pashov Audit Group', protocol: 'BOB', date: 'Oct 2025', report: null },
  { firm: 'Pashov Audit Group', protocol: 'Liquid', date: 'Oct 2025', report: null },
  { firm: 'Pashov Audit Group', protocol: 'Sekai Finance', date: 'Nov 2025', report: null },
  { firm: 'Pashov Audit Group', protocol: 'Reya', date: 'Nov 2025', report: null },
  { firm: 'Pashov Audit Group', protocol: 'DomFi', date: 'Dec 2025', report: null },
  { firm: 'Pashov Audit Group', protocol: 'YuzuUSD', date: 'Jan 2026', report: null },
  // Burrasec
  { firm: 'Burrasec', protocol: 'TAO Hyperliquid Bridge', date: 'Mar 2026', report: null },
  // AdevarLabs
  { firm: 'AdevarLabs', protocol: 'Crafts', date: 'May 2026', report: null, lang: 'Rust' },
  // Solo
  { firm: 'Solo', protocol: 'BitChill', date: 'Apr 2025', report: 'https://github.com/IvanFitro/Team-Private-Audits/blob/master/Solo%20Pirvate%20Reports/BitChill.pdf' },
  { firm: 'Solo', protocol: 'BitChill DCA Out', date: 'Nov 2025', report: null },
];
