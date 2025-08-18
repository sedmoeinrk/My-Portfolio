import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={cn(
        "cursor-pointer rounded-full transition-colors duration-300 focus:outline-hidden"
      )}
      type="button"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
