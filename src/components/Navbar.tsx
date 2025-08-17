import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full transition-all duration-300 z-10",
        isScrolled ? "py-3 bg-foreground/5 backdrop-blur-md shadow-xs" : "py-3"
      )}
    >
      <div className="flex items-center justify-between container">
        <a
          href="#hero"
          className="flex text-xl font-bold items-center justify-center text-primary z-10"
        >
          <span className="relative">
            <span className="text-glow text-foreground">Moein Reiskarami</span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 justify-center items-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
        {/* End desktop nav */}

        {/* Mobile nav */}
        <button
          className="md:hidden cursor-pointer p-2 text-foreground z-40 animate-mobile-out"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu "}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
        {isMenuOpen && (
          <div
            className={cn(
              "fixed inset-0 bg-background/50 backdrop-blur-md flex flex-col items-center justify-center md:hidden transition-all duration-300 z-10",
              isMenuOpen ? "animate-mobile-in" : "animate-mobile-out"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl items-center">
              <ThemeToggle />

              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
        {/* End mobile nav */}
      </div>
    </nav>
  );
};

export default Navbar;
