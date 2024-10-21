import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface ColorContextType {
  darkColor: string;
  contentColor: string;
  darkerColor: string;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const params = useParams();
  const [color ,setColor] = useState('')
  console.log(params);

  
  

  // const color =
  //   params.color && /^([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(params.color)
  //     ? `#${params.color}`
  //     : '#000000';

  const [darkColor, setDarkColor] = useState<string>('');
  const [contentColor, setContentColor] = useState<string>('');
  const [darkerColor, setDarkerColor] = useState<string>(''); // Добавляем состояние для более темного цвета

  // Функция для затемнения цвета
  const darkenColor = (hex: string, percent: number) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    r = Math.max(0, Math.min(255, r * (1 - percent)));
    g = Math.max(0, Math.min(255, g * (1 - percent)));
    b = Math.max(0, Math.min(255, b * (1 - percent)));

    return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
  };

  // Обработка темного цвета
  useEffect(() => {
    if (!/^#[0-9A-Fa-f]{6}$/.test(color)) {
      console.error('Invalid color format:', color);
      return;
    }

    const newDarkColor = darkenColor(color, 0.7); // Темнеем на 70%
    setDarkColor(newDarkColor);
  }, [color]);

  // Обработка более темного цвета
  useEffect(() => {
    if (!/^#[0-9A-Fa-f]{6}$/.test(darkColor)) {
      console.error('Invalid dark color format:', darkColor);
      return;
    }

    const newDarkerColor = darkenColor(darkColor, 0.3); // Делаем темнее темного цвета, но не черный
    setDarkerColor(newDarkerColor);
  }, [darkColor]);

  // Обработка цвета для контента
  useEffect(() => {
    if (!/^#[0-9A-Fa-f]{6}$/.test(darkColor)) {
      console.error('Invalid dark color format:', darkColor);
      return;
    }

    const newContentColor = darkenColor(darkColor, 0.2); // Темнеем на 20% для контента
    setContentColor(newContentColor);
  }, [darkColor]);

  return (
    <ColorContext.Provider value={{ darkColor, contentColor, darkerColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Хук для использования контекста
export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColorContext must be used within a ColorProvider');
  }
  return context;
};
