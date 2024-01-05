/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {},
  screens: {
    sm: { max: "426px" },
    md: { min: '427px', max: '769px' },
  }
};
export const plugins = [];

