'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { CgDarkMode } from 'react-icons/cg';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (resolvedTheme === 'dark') {
    return (
      <CgDarkMode
        className='text-xl md:text-3xl '
        onClick={() => setTheme('light')}
      />
    );
  }
  if (resolvedTheme === 'light') {
    return (
      <CgDarkMode
        className='text-xl md:text-3xl text-indigo-800'
        onClick={() => setTheme('dark')}
      />
    );
  }

  return <div>ThemeSwitch</div>;
}
