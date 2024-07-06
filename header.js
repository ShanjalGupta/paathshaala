import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-4 bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold">My Website</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
