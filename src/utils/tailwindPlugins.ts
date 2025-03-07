
import plugin from 'tailwindcss/plugin';

// Custom plugin to add SVG stroke utilities
export const svgStrokePlugin = plugin(({ addUtilities }) => {
  const newUtilities = {
    '.stroke-dasharray-\\[10\\,5\\]': {
      'stroke-dasharray': '10,5',
    },
    '.stroke-dasharray-\\[1000\\]': {
      'stroke-dasharray': '1000',
    },
    '.stroke-\\[3\\]': {
      'stroke-width': '3',
    },
  };

  addUtilities(newUtilities);
});
