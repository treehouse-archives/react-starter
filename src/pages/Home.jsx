import usePageTitle from '@/hooks/usePageTitle';
import { useState } from 'react';

const Home = () => {
  usePageTitle('Home | Starter Template');

  const [count, setCount] = useState(0);

  return (
    <section className='space-y-5 md:space-y-10 text-center flex-center flex-col'>
      <h1 className='font-medium text-3xl sm:text-4xl font-mono dark:text-slate-200 text-slate-700'>
        React Stater Template
      </h1>
      <img src='/react.svg' alt='react-icon' className='size-80 md:size-96' />

      <button
        className='rounded-md cursor-pointer py-2 px-3 md:py-3 md:px-5 text-xl dark:bg-slate-700 bg-slate-200 shadow-sm dark:text-slate-200 text-slate-700'
        onClick={() => setCount((prev) => prev + 1)}
      >
        Count: {count < 10 && count > 0 ? '0' : ''}
        {count}
      </button>
    </section>
  );
};

export default Home;
