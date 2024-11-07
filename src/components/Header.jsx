import { Link } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  return (
    <header>
      <div className='p-6 flex-between'>
        <ul className='flex-between space-x-5'>
          <li className='font-medium text-lg font-mono dark:text-slate-200 text-slate-700'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='font-medium text-lg font-mono dark:text-slate-200 text-slate-700'>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
