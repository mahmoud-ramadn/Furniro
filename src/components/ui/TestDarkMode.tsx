import { useTheme } from '../../context/ThemeContext';

const TestDarkMode = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Dark Mode Test
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Current theme:{' '}
        <span className="font-semibold">{darkMode ? 'Dark' : 'Light'}</span>
      </p>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600 transition-colors"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default TestDarkMode;
