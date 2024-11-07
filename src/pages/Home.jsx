import useTitle from "@/hooks/useTitle.js";
import reactIcon from "@/assets/images/react.svg";
import { useState } from "react";

const Home = () => {
  useTitle("Home | React Starter Template");
  const [count, setCount] = useState(0);

  return (
    <section className="space-y-5 md:space-y-10 text-center flex-center flex-col">
      <h1 className="font-medium text-3xl sm:text-4xl font-mono dark:text-slate-200 text-slate-700">
        React Stater Template
      </h1>
      <img src={reactIcon} alt="react-icon" className="size-80 md:size-96" />

      <button className="btn-primary" onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>
    </section>
  );
};

export default Home;
