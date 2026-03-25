import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ClockedOutMum" className="h-10 w-auto brightness-200" />
        </div>
        <div className="flex gap-6">
          {["About", "Experiences", "Community", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-xs text-background/60 hover:text-background transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="font-body text-xs text-background/40">
          © 2026 ayandah-D. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
