import Button from "@/components/ui/Button";
import useTitle from "@/lib/hooks/useTitle.ts";

function About() {
  useTitle("About");

  return (
    <section>
      <div className="space-y-4 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-2 place-items-center">
          <img
            src="/src/assets/images/react.svg"
            alt="react-icon"
            className="size-36 md:size-full"
          />
          <h1 className="col-span-2 font-medium text-3xl sm:text-4xl font-mono dark:text-slate-200 text-slate-700 text-center md:text-left">
            React Vite <br className="hidden md:block" />
            Stater Template
          </h1>
        </div>

        <p className="font-mono dark:text-slate-200 text-slate-700 text-lg">
          This template provides a foundational structure for building a modern
          and efficient React application using Vite. It&apos;s designed to help
          you quickly set up a scalable and maintainable frontend with React,
          TailwindCSS for styling, and React Router for navigation. It also
          includes a theme toggle functionality for an enhanced user experience.
        </p>

        <Button>
          <a
            href="https://github.com/treehouse-archives/react-starter"
            target="_blank"
          >
            Source Code
          </a>
        </Button>
      </div>
    </section>
  );
}

export default About;
