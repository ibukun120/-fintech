export const statCards = [
  {
    label: "Account Balance",
    value: "$12,645.00",
    delta: "12%",
    caption: "vs Last month",
  },
  {
    label: "Income Summary",
    value: "$2,645.00",
    delta: "12%",
    caption: "vs Last month",
  },
  {
    label: "Spending Summary",
    value: "$1,895.00",
    delta: "12%",
    caption: "vs Last month",
  },
];

// income / expenses per month, used to render the paired bar chart
export const analytics = [
  { month: "Jan", income: 620, expenses: 480 },
  { month: "Feb", income: 700, expenses: 430 },
  { month: "Mar", income: 830, expenses: 380 },
  { month: "Apr", income: 894, expenses: 768, highlight: true },
  { month: "Mei", income: 560, expenses: 420 },
  { month: "Jun", income: 590, expenses: 460 },
  { month: "Jul", income: 700, expenses: 500 },
  { month: "Aug", income: 760, expenses: 470 },
  { month: "Sep", income: 850, expenses: 520 },
  { month: "Oct", income: 730, expenses: 490 },
  { month: "Nov", income: 780, expenses: 540 },
  { month: "Des", income: 650, expenses: 320 },
];

export const card = {
  label: "My Card",
  number: "**** **** **** 2345",
  holder: "Noman Manzoor",
  expiry: "02/30",
  cvv: "824",
  spendingLimit: "₦45,000",
  totalLimit: "₦100,000",
  usedPercent: 45,
};

export const expenseSummary = {
  total: "$24,645.00",
  daily: "$1,345",
  weekly: "$7,136",
  monthly: "$14,927",
  breakdown: [
    { label: "Food & Health", value: 863, color: "#F4801F" },
    { label: "Entertainments", value: 248, color: "#F5B93F" },
    { label: "Shopping", value: 1835, color: "#F6E24B" },
    { label: "Investment", value: 1835, color: "#1FA971" },
  ],
};

export const transactions = [
  {
    name: "Dribbble",
    date: "Jan 14, 2025",
    category: "Subscription",
    amount: "$440.00",
    status: "Success",
  },
  {
    name: "Jaxson Dorwart",
    date: "Jan 10, 2025",
    category: "Transfer",
    amount: "$440.00",
    status: "Success",
  },
  {
    name: "Hanna Bergson",
    date: "Jan 8, 2025",
    category: "Transfer",
    amount: "$440.00",
    status: "Success",
  },
  {
    name: "Dribbbles",
    date: "Jan 14, 2025",
    category: "Subscription",
    amount: "$440.00",
    status: "Success",
  },
  {
    name: "Jaxson Dorwarts",
    date: "Jan 10, 2025",
    category: "Transfer",
    amount: "$440.00",
    status: "Success",
  },
  {
    name: "Hanna Bergsons",
    date: "Jan 8, 2025",
    category: "Transfer",
    amount: "$440.00",
    status: "Success",
  },
];

export const navItems = ["Dashboard", "Analytics", "Transaction", "Report", "More"];

export const navItemsDtails = [
  {
    TheType: "Dashboard",
    link: "/dashboard",
  },
  {
    TheType: "Analytics",
    link: "/analytics",
  },
  {
    TheType: "Transaction",
    link: "/transactions",
  },
  {
    TheType: "Report",
    link: "/report",
  },
]

// Transactions History

export const Alltransactions: {
    id: string,
    reference: string,
    type: string,
    status: string,
    amount: number,
    currency: string,
    description: string,
    recipient: string,
    createdAt: string
}[] = [
  {
    id: "txn_002",
    reference: "TRX-49281735",
    type: "deposit",
    status: "successful",
    amount: 150000,
    currency: "NGN",
    description: "Deposit via bank transfer",
    recipient: "Wallet",
    createdAt: "2026-09-20T12:15:00Z"
  },
  {
    id: "txn_003",
    reference: "TRX-71629483",
    type: "withdrawal",
    status: "successful",
    amount: 30000,
    currency: "NGN",
    description: "Withdrawal to bank account",
    recipient: "Access Bank Account",
    createdAt: "2026-09-20T14:45:00Z"
  },
  {
    id: "txn_004",
    reference: "TRX-58392017",
    type: "card_payment",
    status: "successful",
    amount: 18500,
    currency: "NGN",
    description: "Card payment at Shoprite",
    recipient: "Shoprite",
    createdAt: "2026-09-21T09:20:00Z"
  },
  {
    id: "txn_005",
    reference: "TRX-29481756",
    type: "airtime",
    status: "successful",
    amount: 5000,
    currency: "NGN",
    description: "Airtime purchase",
    recipient: "MTN - 08031234567",
    createdAt: "2026-09-21T11:10:00Z"
  },
  {
    id: "txn_006",
    reference: "TRX-83726194",
    type: "bill_payment",
    status: "successful",
    amount: 12000,
    currency: "NGN",
    description: "Electricity bill payment",
    recipient: "Ikeja Electric",
    createdAt: "2026-09-21T13:35:00Z"
  },
  {
    id: "txn_007",
    reference: "TRX-46182937",
    type: "transfer",
    status: "successful",
    amount: 45000,
    currency: "NGN",
    description: "Transfer to Sarah Williams",
    recipient: "Sarah Williams",
    createdAt: "2026-09-21T16:05:00Z"
  },
  {
    id: "txn_008",
    reference: "TRX-92837461",
    type: "deposit",
    status: "successful",
    amount: 80000,
    currency: "NGN",
    description: "Cash deposit",
    recipient: "Wallet",
    createdAt: "2026-09-22T08:40:00Z"
  },
  {
    id: "txn_009",
    reference: "TRX-37591824",
    type: "withdrawal",
    status: "pending",
    amount: 25000,
    currency: "NGN",
    description: "Withdrawal to bank account",
    recipient: "GTBank Account",
    createdAt: "2026-09-22T10:25:00Z"
  },
  {
    id: "txn_010",
    reference: "TRX-61928374",
    type: "card_payment",
    status: "successful",
    amount: 7500,
    currency: "NGN",
    description: "Card payment at Jumia",
    recipient: "Jumia",
    createdAt: "2026-09-22T12:50:00Z"
  },
  {
    id: "txn_011",
    reference: "TRX-84271639",
    type: "airtime",
    status: "successful",
    amount: 2000,
    currency: "NGN",
    description: "Airtime purchase",
    recipient: "Airtel - 08123456789",
    createdAt: "2026-09-22T15:30:00Z"
  },
  {
    id: "txn_012",
    reference: "TRX-19384726",
    type: "bill_payment",
    status: "successful",
    amount: 3500,
    currency: "NGN",
    description: "Cable TV subscription",
    recipient: "DStv",
    createdAt: "2026-09-22T18:15:00Z"
  },
  {
    id: "txn_013",
    reference: "TRX-57483921",
    type: "transfer",
    status: "failed",
    amount: 60000,
    currency: "NGN",
    description: "Transfer to Michael Johnson",
    recipient: "Michael Johnson",
    createdAt: "2026-09-23T08:05:00Z"
  },
  {
    id: "txn_014",
    reference: "TRX-72819463",
    type: "deposit",
    status: "successful",
    amount: 200000,
    currency: "NGN",
    description: "Deposit via bank transfer",
    recipient: "Wallet",
    createdAt: "2026-09-23T09:45:00Z"
  },
  {
    id: "txn_015",
    reference: "TRX-39182746",
    type: "card_payment",
    status: "pending",
    amount: 22500,
    currency: "NGN",
    description: "Card payment at Amazon",
    recipient: "Amazon",
    createdAt: "2026-09-23T11:30:00Z"
  },
  {
    id: "txn_016",
    reference: "TRX-68529317",
    type: "airtime",
    status: "successful",
    amount: 1000,
    currency: "NGN",
    description: "Airtime purchase",
    recipient: "Glo - 08098765432",
    createdAt: "2026-09-23T13:20:00Z"
  },
  {
    id: "txn_017",
    reference: "TRX-91736482",
    type: "bill_payment",
    status: "failed",
    amount: 8500,
    currency: "NGN",
    description: "Internet subscription payment",
    recipient: "Spectranet",
    createdAt: "2026-09-23T16:45:00Z"
  },
  {
    id: "txn_018",
    reference: "TRX-46281935",
    type: "transfer",
    status: "successful",
    amount: 100000,
    currency: "NGN",
    description: "Transfer to David Brown",
    recipient: "David Brown",
    createdAt: "2026-09-24T08:30:00Z"
  },
  {
    id: "txn_019",
    reference: "TRX-83917462",
    type: "withdrawal",
    status: "successful",
    amount: 50000,
    currency: "NGN",
    description: "Withdrawal to bank account",
    recipient: "UBA Account",
    createdAt: "2026-09-24T10:15:00Z"
  },
  {
    id: "txn_020",
    reference: "TRX-27461938",
    type: "card_payment",
    status: "successful",
    amount: 42000,
    currency: "NGN",
    description: "Card payment at Spar",
    recipient: "Spar",
    createdAt: "2026-09-24T12:40:00Z"
  },
  {
    id: "txn_021",
    reference: "TRX-58193724",
    type: "airtime",
    status: "successful",
    amount: 3000,
    currency: "NGN",
    description: "Airtime purchase",
    recipient: "9mobile - 08198765432",
    createdAt: "2026-09-24T14:55:00Z"
  },
  {
    id: "txn_022",
    reference: "TRX-74629183",
    type: "bill_payment",
    status: "successful",
    amount: 15000,
    currency: "NGN",
    description: "Electricity bill payment",
    recipient: "Eko Electricity",
    createdAt: "2026-09-25T09:10:00Z"
  },
  {
    id: "txn_023",
    reference: "TRX-31948572",
    type: "deposit",
    status: "successful",
    amount: 95000,
    currency: "NGN",
    description: "Deposit via bank transfer",
    recipient: "Wallet",
    createdAt: "2026-09-25T11:25:00Z"
  },
  {
    id: "txn_024",
    reference: "TRX-86421739",
    type: "transfer",
    status: "successful",
    amount: 27500,
    currency: "NGN",
    description: "Transfer to Grace Okafor",
    recipient: "Grace Okafor",
    createdAt: "2026-09-26T13:40:00Z"
  },
  {
    id: "txn_025",
    reference: "TRX-52819374",
    type: "withdrawal",
    status: "failed",
    amount: 40000,
    currency: "NGN",
    description: "Withdrawal to bank account",
    recipient: "First Bank Account",
    createdAt: "2026-09-26T16:20:00Z"
  },
  {
    id: "txn_026",
    reference: "TRX-69381742",
    type: "bill_payment",
    status: "successful",
    amount: 5000,
    currency: "NGN",
    description: "Cable TV subscription",
    recipient: "GOtv",
    createdAt: "2026-09-27T08:50:00Z"
  }
];