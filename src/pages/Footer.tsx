import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "/career" },
      { name: "Contact", href: "#" },
    ],
    services: [
      { name: "Web Development", href: "#" },
      { name: "Frontend Training", href: "#" },
      { name: "Backend Training", href: "#" },
      { name: "Cybersecurity", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "https://in.linkedin.com/in/skill-coders-0815b8358", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/skill_coders_?igsh=MXVmcnNsYXVocjYydA==", label: "Instagram" },
  ];

  return (
    <footer className="bg-[hsl(240,6%,10%)] border-t border-[hsl(240,4%,16%)] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
  src="https://i.ibb.co/m1z1MfK/SCLOGO.png"
  alt="Company Logo"
  className="h-32 w-auto object-contain -mt-16"
/>

            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Empowering the next generation of developers with cutting-edge training and premium web solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-3 text-[#00ffa1]" />
                <a href="mailto:info@company.com" className="hover:text-[#00ffa1] transition-colors">
                  info@skillcoders.com
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-3 text-[#00ffa1]" />
                <a href="tel:+919177331409" className="hover:text-[#00ffa1] transition-colors">
                  +91 9177331409
                </a>
              </div>
              <div className="flex items-start text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-[#00ffa1] mt-0.5 flex-shrink-0" />
                <span>Vizag</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00ffa1] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00ffa1] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00ffa1] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[hsl(240,4%,16%)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} SkillCoders. All rights reserved. Designed by © Buildursite.ui
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[hsl(240,10%,3.9%)] border border-[hsl(240,4%,16%)] flex items-center justify-center text-gray-400 hover:text-[#00ffa1] hover:border-[#00ffa1] transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;