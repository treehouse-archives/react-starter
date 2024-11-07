import usePageTitle from '@/hooks/useTitle.js';
import useTitle from "@/hooks/useTitle.js";

const NotFound = () => {
  useTitle('Page not found!');

  return (
    <section>
      <div className='font-medium font-mono dark:text-slate-200 text-slate-700 text-center space-y-5'>
        <h2 className='font-semibold text-9xl'>404</h2>
        <p className='text-2xl lg:text-4xl '>Page not found!</p>
      </div>
    </section>
  );
};

export default NotFound;
