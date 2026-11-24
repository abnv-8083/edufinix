import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeId = 'cobalt' | 'emerald' | 'amber';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  accent: string;
  dark: string;
  light: string;
  description: string;
}

export const THEMES: ThemeConfig[] = [
  {
    id: 'cobalt',
    name: 'Classic Cobalt',
    tagline: 'The Market Journal',
    accent: '#315FEA',
    dark: '#101C32',
    light: '#F5F4EF',
    description: 'Refined cobalt and midnight navy. High-authority institutional financial branding.',
  },
  {
    id: 'emerald',
    name: 'Alpine Emerald',
    tagline: 'Swiss Institutional',
    accent: '#0D8253',
    dark: '#0B1B14',
    light: '#F3F6F4',
    description: 'Deep forest pine and alpine emerald. Evoking European wealth management discipline.',
  },
  {
    id: 'amber',
    name: 'Oxford Amber',
    tagline: 'Heritage Broadside',
    accent: '#C2781D',
    dark: '#1A1512',
    light: '#F6F3EC',
    description: 'Obsidian espresso and imperial bronze. Prestigious financial editorial heritage.',
  },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  currentTheme: ThemeConfig;
  allThemes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    const saved = localStorage.getItem('edufinix_theme') as ThemeId;
    if (saved && (saved === 'cobalt' || saved === 'emerald' || saved === 'amber')) {
      return saved;
    }
    return 'cobalt';
  });

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    localStorage.setItem('edufinix_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const currentTheme = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme, allThemes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

