// ─── Navigation ────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "About Us", href: "#about", },
  { label: "Products", href: "/aboutHero", },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "#contact" },
];

// ─── Hero Stats ─────────────────────────────────────────────────────────────
export const heroStats = [
  { value: "500+", label: "Active Members" },
  { value: "15+", label: "Years of Service" },
  { value: "30+", label: "Branch Locations" },
];

// ─── About Section ──────────────────────────────────────────────────────────
export const aboutPoints = [
  "Providing accessible financial services to underserved communities",
  "Offering competitive interest rates on savings and deposits",
  "Fast loan approvals with flexible repayment plans",
  "24/7 digital banking access via our mobile app",
];

// ─── Who We Serve ───────────────────────────────────────────────────────────
export type ServeCard = {
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
};

export const whoWeServe: ServeCard[] = [
  {
    icon: "🏪",
    title: "MSMEs & Entrepreneurs",
    description:
      "Tailored financial products that help micro, small & medium enterprises grow and thrive.",
    color: "#e64d1b",
    bgColor: "#fdf0eb",
  },
  {
    icon: "🏛️",
    title: "Federal & State Agencies",
    description:
      "Seamless banking partnerships for government institutions and parastatals.",
    color: "#1a6cb5",
    bgColor: "#eaf3fb",
  },
  {
    icon: "👤",
    title: "Individuals & Families",
    description:
      "Personal banking solutions designed to help you save, invest, and achieve financial freedom.",
    color: "#1a8c3e",
    bgColor: "#e8f5ed",
  },
];

// ─── Services ────────────────────────────────────────────────────────────────
export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export const services: Service[] = [
  {
    id: "account",
    title: "Account",
    description:
      "Open a personal or business account with ease and enjoy zero maintenance fees, instant notifications, and seamless transfers.",
    image: "/images/service-account.jpg",
    href: "#",
  },
  {
    id: "loan",
    title: "Loan",
    description:
      "Access quick loans at competitive interest rates with flexible repayment options tailored to your financial needs.",
    image: "/images/service-loan.jpg",
    href: "#",
  },
  {
    id: "savings",
    title: "Savings",
    description:
      "Grow your wealth with our high-yield savings products, designed to help you achieve your financial goals faster.",
    image: "/images/service-savings.jpg",
    href: "#",
  },
  {
    id: "atm",
    title: "ATM Card",
    description:
      "Get a Verve/Mastercard debit card linked to your account, accepted at ATMs and POS terminals nationwide.",
    image: "/images/service-atm.jpg",
    href: "#",
  },
  {
    id: "mobile",
    title: "Mobile Banking",
    description:
      "Bank anywhere, anytime with our secure mobile app. Transfer funds, pay bills, and check balances on the go.",
    image: "/images/service-mobile.jpg",
    href: "#",
  },
  {
    id: "pos",
    title: "POS Services",
    description:
      "Boost your business revenue with our reliable POS terminals. Accept card payments from customers seamlessly.",
    image: "/images/service-pos.jpg",
    href: "/pos",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "GIREI helped me secure a loan to expand my tailoring business. The process was fast, transparent, and the staff were very supportive throughout.",
    name: "Aisha Bello",
    role: "Small Business Owner",
    avatar: "/images/avatar-1.jpg",
  },
  {
    quote:
      "I've been banking with GIREI for 5 years. Their savings plan helped me build a solid emergency fund. I completely trust them with my money.",
    name: "Emmanuel Okafor",
    role: "Civil Servant",
    avatar: "/images/avatar-2.jpg",
  },
  {
    quote:
      "The mobile banking app is smooth and intuitive. I can manage all my transactions from anywhere without visiting a branch.",
    name: "Fatima Yusuf",
    role: "Entrepreneur",
    avatar: "/images/avatar-3.jpg",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export type BlogPost = {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    tag: "Finance Tips",
    title: "Why people are opening accounts in GIREI",
    excerpt:
      "Discover why thousands of Nigerians are choosing GIREI for their banking needs and what sets us apart.",
    date: "Mar 10, 2026",
    image: "/images/blog-1.jpg",
    href: "#",
  },
  {
    id: "2",
    tag: "Community",
    title: "Why people are opening accounts in GIREI",
    excerpt:
      "Our community-first approach has transformed the financial lives of over 500 families across the region.",
    date: "Mar 5, 2026",
    image: "/images/blog-2.jpg",
    href: "#",
  },
  {
    id: "3",
    tag: "Products",
    title: "Why people are opening accounts in GIREI",
    excerpt:
      "A full breakdown of the benefits you unlock when you open a GIREI savings or current account today.",
    date: "Feb 28, 2026",
    image: "/images/blog-3.jpg",
    href: "#",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "How do I open an account with GIREI?",
    answer:
      "You can open an account online via our website or mobile app, or visit any of our branches. You'll need a valid government-issued ID, a recent utility bill, and a passport photograph.",
  },
  {
    question: "What types of loans does GIREI offer?",
    answer:
      "We offer personal loans, business expansion loans, agricultural loans, and salary-based credit facilities with competitive interest rates and flexible repayment terms.",
  },
  {
    question: "Can I perform transactions after banking hours?",
    answer:
      "Yes! Our mobile app and USSD banking are available 24/7. You can transfer funds, buy airtime, pay bills, and check your account balance at any time.",
  },
  {
    question: "How secure is my money with GIREI?",
    answer:
      "GIREI is fully licensed and regulated by the Central Bank of Nigeria (CBN). Your deposits are insured by the Nigeria Deposit Insurance Corporation (NDIC) up to ₦5,000,000.",
  },
  {
    question: "How do I apply for a POS terminal?",
    answer:
      "Business owners can apply for a POS terminal by visiting any GIREI branch or by contacting our business banking team. Approval typically takes 3–5 business days.",
  },
];

// ─── Footer Links ─────────────────────────────────────────────────────────────
export const footerColumns = [
  {
    heading: "Products",
    links: [
      { label: "Savings Account", href: "#" },
      { label: "Current Account", href: "#" },
      { label: "Loans", href: "#" },
      { label: "ATM Card", href: "#" },
      { label: "Mobile Banking", href: "#" },
      { label: "POS Services", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press & Media", href: "#" },
      { label: "CSR", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Branch Locator", href: "#" },
      { label: "Complaints", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Regulatory Info", href: "#" },
    ],
  },
];
