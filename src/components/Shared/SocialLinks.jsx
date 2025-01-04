import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      href: "https://github.com/sufiyancode",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/sufiyan-shaikh22",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:sksufiyan9860@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <div className="flex justify-center space-x-8">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          aria-label={label}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
