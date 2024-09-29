import localFont from 'next/font/local';

export const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat.ttf', // Normal weight
      weight: '400', // Regular weight
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat.ttf', // Bold weight
      weight: '550', // Bold weight
      style: 'normal',
    },
  ],
  display: 'swap',
});