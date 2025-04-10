import useTitle from "@/lib/hooks/useTitle.ts";
import reactIcon from "@/assets/images/react.svg";
import { useState } from "react";
import Button from "@/components/ui/Button";

const Home = () => {
  useTitle("Home | React Starter Template");
  const [count, setCount] = useState(0);

  return (
    <section className="space-y-5 md:space-y-10 text-center flex-center flex-col">
      <h1 className="font-medium text-3xl sm:text-4xl font-mono dark:text-slate-200 text-slate-700">
        React Stater Template
      </h1>
      <img src={reactIcon} alt="react-icon" className="react-icon" />
      <Button varient="primary" onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </Button>
    </section>
  );
};

export default Home;
