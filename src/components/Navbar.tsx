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
    <>
      <nav
        className={cn(
          "fixed flex top-0 left-0 w-full transition-all duration-300 z-10",
          isScrolled
            ? "py-3 bg-foreground/5 max-sm:bg-background/80 max-sm:backdrop-blur-md sm:backdrop-blur-md sm:bg-background/80backdrop-blur-md shadow-xs"
            : "py-3 sm:bg-background/80 max-sm:bg-background/80 sm:backdrop-blur-md max-sm:backdrop-blur-md "
        )}
      >
        <div className="flex items-center justify-between container">
          <a
            href="#hero"
            className="flex text-xl font-bold items-center justify-center text-primary z-10"
          >
            <span className="relative">
              <span className="text-glow text-foreground">
                Moein Reiskarami
              </span>{" "}
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
        </div>
        <button
          className="md:hidden cursor-pointer p-2 text-foreground z-40 animate-mobile-out"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu "}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 top-[64px] md:hidden transition-opacity duration-300 z-50",
            isMenuOpen
              ? "animate-mobile-in backdrop-blur-md"
              : "animate-mobile-out"
          )}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={cn(
              "ml-auto h-[calc(100vh)] w-[40vw] max-w-[320px] min-w-[240px]",
              "bg-background/80 shadow-xl border-t-8 border-border"
            )}
            onClick={(e) => (e.stopPropagation(), setIsMenuOpen(false))}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            id="mobile-menu"
          >
            <div className="flex flex-col space-y-8 text-xl items-center pt-10">
              <ThemeToggle />
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 w-full border-b border-border pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* End mobile nav */}
      {/* {isMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 top-[64px] md:hidden z-50 transition-opacity duration-200"
          )}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={cn(
              "ml-auto h-[calc(100vh)] w-[40vw] max-w-[320px] min-w-[240px]",
              "bg-background shadow-xl border-l border-border",
              "transition-transform duration-300 translate-x-0"
            )}
            onClick={(e) => (e.stopPropagation(), setIsMenuOpen(false))}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            id="mobile-menu"
          >
            <div className="flex flex-col space-y-8 text-xl items-stretch p-6">
              <ThemeToggle />
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 w-full border-b border-border pb-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
