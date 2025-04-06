import useTitle from "@/hooks/useTitle.ts";

function About() {
  useTitle("About | React Starter Template");

  return (
    <section>
      <div className="space-y-5 md:space-y-8">
        <div className="grid md:grid-cols-3 gap-5">
          <img
            src="/src/assets/images/react.svg"
            alt="react-icon"
            className="size-20"
          />
          <h1 className="font-medium text-3xl sm:text-4xl font-mono dark:text-slate-200 text-slate-700 col-span-2">
            React Vite <br />
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
      </div>
    </section>
  );
}

export default About;
