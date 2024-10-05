import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const BackgroundColorContext = createContext();

// Компонент провайдер
export const BackgroundColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('white'); // Устанавливаем начальный цвет фона

  return (
    <BackgroundColorContext.Provider
      value={{ backgroundColor, setBackgroundColor }}
    >
      {children}
    </BackgroundColorContext.Provider>
  );
};

// Компонент для загрузки изображения
const ImageUploader = () => {
  const { setBackgroundColor } = useContext(BackgroundColorContext);

  const handleImageUpload = event => {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Получаем данные пикселей
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let r = 0,
        g = 0,
        b = 0,
        count = 0;

      // Обрабатываем пиксели
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        count++;
      }

      // Находим средний цвет
      r = Math.floor(r / count);
      g = Math.floor(g / count);
      b = Math.floor(b / count);

      // Устанавливаем цвет фона
      const backgroundColor = `rgb(${r}, ${g}, ${b})`;
      setBackgroundColor(backgroundColor);
    };
  };

  return <input type='file' accept='image/*' onChange={handleImageUpload} />;
};

// Компонент, который использует цвет фона
