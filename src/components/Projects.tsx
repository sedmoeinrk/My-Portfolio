import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CarHub Website",
    description:
      "A beautiful CarHub Website that you can find your favorite car.",
    demoLink: "https://car-show-pearl.vercel.app/",
    githubLink: "https://github.com/sedmoeinrk/Car-Show",
    imgUrl: "/Car-Show.png",
    tags: ["TypeScript", "Next.js", "Tailwind"],
  },
];
const Projects = () => {
  return (
    <section id="projects">
      <div className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl text-center mb-4 font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are my some recent projects. Feel free to take a look at them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-card overflow-hidden shadow-xs rounded-lg card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <a target=" _blank" href={project.demoLink}>
                    <img
                      src={project.imgUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </a>
                </div>

                <div className="flex flex-col px-6 py-4 gap-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl text-left font-semibold">
                      {project.title}
                    </h3>

                    <div className="flex gap-2 items-center justify-center">
                      <a
                        target="_blank"
                        href={project.githubLink}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github />
                      </a>
                      <a
                        target="_blank"
                        href={project.demoLink}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink />
                      </a>
                    </div>
                  </div>
                  <p className="text-left text-sm text-muted-foreground mb-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium rounded-full border border-secondary bg-secondary/30 text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center text-center mt-12">
            <a
              target="_blank"
              href="https://github.com/sedmoeinrk"
              className="cosmic-button flex items-center justify-center gap-3 mx-auto"
            >
              Check out my Github <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
