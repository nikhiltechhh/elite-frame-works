import { ShoppingCart, Code, Zap, Palette, Shield, Smartphone } from "lucide-react";

const Index = () => {
  // Website templates data
  const templates = [
  {
    id: 1,
    name: "E-Commerce Pro",
    description: "Full-featured online store with cart, checkout, and payment integration",
    price: "₹8999",
    originalPrice: "₹9999",
    features: ["Responsive Design", "Payment Gateway", "Admin Dashboard", "Product Management"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 2,
    name: "Business Elite",
    description: "Professional corporate website with CMS and contact forms",
    price: "₹7999",
    originalPrice: "₹8889",
    features: ["CMS Integration", "Contact Forms", "SEO Optimized", "Blog Section"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
  },
  {
    id: 3,
    name: "Portfolio Studio",
    description: "Creative portfolio with gallery, animations, and project showcase",
    price: "₹5599",
    originalPrice: "₹6221",
    features: ["Gallery System", "Smooth Animations", "Project Showcase", "Contact Integration"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
  {
    id: 4,
    name: "Restaurant Plus",
    description: "Menu display, online ordering, and reservation system",
    price: "₹25000",
    originalPrice: "₹27778",
    features: ["Menu Management", "Online Orders", "Reservations", "Location Maps"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
  {
    id: 5,
    name: "Blog Master",
    description: "Modern blog platform with categories, tags, and commenting",
    price: "₹8999",
    originalPrice: "₹9999",
    features: ["Rich Text Editor", "Categories & Tags", "Comments System", "RSS Feed"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    id: 6,
    name: "Landing Genius",
    description: "High-converting landing page with analytics and A/B testing",
    price: "₹12999",
    originalPrice: "₹14443",
    features: ["A/B Testing", "Analytics", "Lead Capture", "Mobile First"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
];

  // Technologies data with inline SVG logos
  const technologies = [
    {
      name: "React",
      logo: (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <g fill="#61DAFB">
            <circle cx="64" cy="64" r="11.4" />
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21.1c-1.2-2.1-2.4-4.2-3.6-6.1 3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.1zM35.5 14.7c1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6-1.7-10.5-.3-17.9 3.8-20.3zM19.3 69.9c6.2-2.5 13.5-4.5 21.4-5.9.9 2 1.9 4 2.9 6 1 2 2.1 4 3.2 6-1.1 2-2.2 4-3.2 6-1 2-1.9 4-2.9 6-7.8-1.4-15.2-3.4-21.4-5.9-7.6-3.1-10.5-6.1-10.5-8.2s2.9-5.1 10.5-8.2zm86.2 0c7.6 3.1 10.5 6.1 10.5 8.2s-2.9 5.1-10.5 8.2c-6.2 2.5-13.5 4.5-21.4 5.9-.9-2-1.9-4-2.9-6-1-2-2.1-4-3.2-6 1.1-2 2.2-4 3.2-6 1-2 1.9-4 2.9-6 7.8 1.4 15.2 3.4 21.4 5.9zm-3.1 23.3c-1.7 10.5-.3 17.9 3.8 20.3 1 .6 2.2.9 3.5.9 6 0 13.5-4.9 21-12.3-3.5-3.8-7-8.2-10.4-13-5.8-.5-11.3-1.4-16.5-2.5.6-2.3 1-4.5 1.4-6.6z" />
          </g>
        </svg>
      ),
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      name: "Next.js",
      logo: (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="currentColor" />
        </svg>
      ),
      color: "bg-gray-500/10 text-gray-300 border-gray-500/20",
    },
    {
      name: "TypeScript",
      logo: (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <path fill="#007ACC" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51.4 59h21.99z" />
        </svg>
      ),
      color: "bg-blue-600/10 text-blue-400 border-blue-600/20",
    },
    {
      name: "Node.js",
      logo: (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" />
        </svg>
      ),
      color: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
      name: "Python",
      logo: (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <linearGradient id="python-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#5A9FD4" />
            <stop offset="1" stopColor="#306998" />
          </linearGradient>
          <linearGradient id="python-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#FFD43B" />
            <stop offset="1" stopColor="#FFE873" />
          </linearGradient>
          <path fill="url(#python-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" />
          <path fill="url(#python-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" />
          <radialGradient id="python-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" />
            <stop offset="1" stopColor="#7F7F7F" stopOpacity="0" />
          </radialGradient>
          <path opacity=".444" fill="url(#python-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z" />
        </svg>
      ),
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    {
      name: "Django",
      logo: (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <path fill="#092E20" d="M59.448 0h15.697v98.164c-8.111.575-14.053.861-20.58.861-19.429 0-29.535-8.823-29.535-25.775 0-16.335 10.963-27.065 27.986-27.065 2.647 0 4.634.287 6.432.861V0zm0 67.62c-1.798-.572-3.22-.861-5.304-.861-7.967 0-12.744 4.923-12.744 13.459 0 8.248 4.49 12.598 12.457 12.598 1.511 0 2.647-.143 5.591-.287V67.62zM101.633 27.065v55.847c0 13.743-.717 20.345-2.802 26.078-1.942 5.59-4.49 9.224-9.786 13.028l-14.91-7.107c5.304-3.661 7.824-6.867 9.362-11.933 1.511-5.018 2.082-10.82 2.082-25.488V27.065h16.054zM85.579 0h16.054v17.573H85.579V0z" />
        </svg>
      ),
      color: "bg-green-600/10 text-green-400 border-green-600/20",
    },
    {
      name: "PHP",
      logo: (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <path fill="#6181B6" d="M64 33.039C30.26 33.039 2.906 46.901 2.906 64S30.26 94.961 64 94.961 125.094 81.099 125.094 64 97.74 33.039 64 33.039zM48.103 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515a15.118 15.118 0 01-2.972 3.748zM69.414 73l2.881-14.42c.328-1.688.208-2.942-.357-3.751-.565-.809-1.816-1.214-3.489-1.214h-5.827l-3.586 19.385h-7.3l6.515-34h7.3l-2.31 11.212h5.827c4.455 0 7.627 1.034 9.516 3.102s2.368 5.186 1.409 9.477L76.756 73h-7.342zM95.919 54.156c-1.813-.574-3.36-.594-4.639-.062-1.279.533-2.286 1.665-3.022 3.401-.246.69-.73 1.753-1.451 3.189l-2.003 3.845h7.725l1.107-5.422h7.3l-1.107 5.422H107l-2.022 9.654h-7.171l-1.702 8.408h-7.301l1.702-8.408h-7.725l-1.702 8.408h-7.252l1.702-8.408h-3.937l2.022-9.654h3.937c.673-1.308 1.357-2.633 2.052-3.976 1.003-1.929 2.094-3.618 3.275-5.065a15.762 15.762 0 014.332-3.43c1.503-.896 3.151-1.499 4.943-1.811 1.793-.311 3.651-.374 5.574-.188l-.898 4.684c-1.318-.282-2.546-.322-3.683-.119z" />
        </svg>
      ),
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
  ];

  const features = [
    { icon: Code, title: "Clean Code", description: "Well-structured & documented" },
    { icon: Zap, title: "Fast Performance", description: "Optimized for speed" },
    { icon: Palette, title: "Modern Design", description: "Beautiful UI/UX" },
    { icon: Shield, title: "Secure", description: "Best practices applied" },
    { icon: Smartphone, title: "Responsive", description: "Works on all devices" },
  ];

  return (
    <div className="min-h-screen mt-20 bg-[hsl(240,10%,3.9%)]">
      {/* Promo Banner - Scrolling */}
      <div className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] overflow-hidden py-4 shadow-2xl relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)] animate-pulse" />
        <div className="flex animate-scroll-left whitespace-nowrap relative z-10">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              <span className="text-black font-black text-xl tracking-wider drop-shadow-lg">
                🔥 LIMITED TIME: 10% OFF ON ALL WEBSITES 🔥
              </span>
              <span className="mx-6 text-2xl">⚡</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="border-b border-[hsl(240,4%,16%)] bg-[hsl(240,6%,10%)]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-400 text-sm font-medium mr-2">Built with:</span>
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className={`${tech.color} px-3 py-1.5 text-sm font-medium border rounded-full inline-flex items-center transition-all hover:scale-105 cursor-default`}
              >
                {tech.logo}
                <span className="ml-1.5">{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Premium Website Templates
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Professional, responsive templates ready to launch. Save time and get online faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[hsl(240,6%,10%)] border border-[hsl(240,4%,16%)] rounded-lg p-4 text-center hover:border-[#00ffa1] transition-all group"
            >
              <feature.icon className="w-8 h-8 mx-auto mb-2 text-[#00ffa1] group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-xs">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-[hsl(240,6%,10%)] border border-[hsl(240,4%,16%)] rounded-lg overflow-hidden hover:border-[#00ffa1] transition-all group shadow-lg"
            >
              {/* Template Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240,10%,3.9%)] to-transparent opacity-60" />
              </div>

              {/* Template Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{template.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{template.description}</p>

                {/* Features */}
                <div className="mb-4 space-y-2">
                  {template.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00ffa1] mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between pt-4 border-t border-[hsl(240,4%,16%)]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-[#00ffa1]">
                        {template.price}
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        {template.originalPrice}
                      </span>
                    </div>
                    <span className="text-xs text-green-400">Save 10%</span>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#00ffa1] hover:bg-[#00cc81] text-black h-10 px-4 py-2">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[hsl(240,6%,10%)] to-[hsl(240,10%,3.9%)] border border-[hsl(240,4%,16%)] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Website?
          </h2>
          <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
            Contact us for a tailored solution that perfectly fits your business needs.
          </p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#00ffa1] hover:bg-[#00cc81] text-black text-lg px-8 py-6">
            Get Custom Quote
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[hsl(240,4%,16%)] mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 Premium Templates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
