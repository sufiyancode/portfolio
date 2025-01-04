const DesktopMenu = ({ links }) => (
  <div className="hidden md:block">
    <div className="flex items-center space-x-8">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="hover:text-purple-400 transition-colors"
        >
          {link.text}
        </a>
      ))}
    </div>
  </div>
);

export default DesktopMenu;
