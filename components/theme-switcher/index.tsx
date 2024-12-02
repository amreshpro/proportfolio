"use client"
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="z-50 fixed bottom-16  left-3  w-fit h-fit   m-2 p-0.5 rounded-full "
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <FaMoon size={30} className="text-gray-900 " />
      ) : (
        <FaSun size={30} className="text-yellow-500  " />
      )}
    </button>
  );
};

export default ThemeSwitcher;
