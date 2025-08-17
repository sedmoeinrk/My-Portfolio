import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
  // frontend
  {
    name: "HTML/CSS",
    level: 90,
    category: "frontend",
  },
  {
    name: "JavaScript",
    level: 75,
    category: "frontend",
  },
  {
    name: "TypeScript",
    level: 75,
    category: "frontend",
  },
  {
    name: "Tailwind",
    level: 90,
    category: "frontend",
  },
  {
    name: "React",
    level: 80,
    category: "frontend",
  },
  {
    name: "Next.js",
    level: 20,
    category: "frontend",
  },

  // Tools
  {
    name: "Git/GitHub",
    level: 85,
    category: "tools",
  },
  {
    name: "VS Code",
    level: 85,
    category: "tools",
  },

  // Not Coding related
  {
    name: "Photoshop",
    level: 80,
    category: "graphics",
  },
  {
    name: "Illustrator",
    level: 80,
    category: "graphics",
  },
];

const categories = ["all", "frontend", "tools", "graphics"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center mb-12 w-full gap-5">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer card-hover",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              )}
            >
              {category}
            </button>
          ))}{" "}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 shadow-xs rounded-lg card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                <div className="text-right text-sm">
                  <span>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
