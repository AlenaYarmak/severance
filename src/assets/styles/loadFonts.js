const fontFiles = import.meta.glob('/src/assets/fonts/**/*.woff2', { eager: true, query: '?url', import: 'default' });
const fallbackFiles = import.meta.glob('/src/assets/fonts/**/*.woff', { eager: true, query: '?url', import: 'default' });

export function resolveFontPath(name) {
  const woff2 = Object.entries(fontFiles).find(([path]) => path.includes(`${name}.woff2`))?.[1];
  const woff = Object.entries(fallbackFiles).find(([path]) => path.includes(`${name}.woff`))?.[1];
  return [woff, woff2];
}