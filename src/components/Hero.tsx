import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Moein{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Reiskarami
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-h-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a junior web developer, learning to develop web ...{" "}
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className="cursor-pointer">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">scroll</span>

          <ArrowDown className="h-8 w-8 p-1 text-primary bg-foreground rounded-full" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
