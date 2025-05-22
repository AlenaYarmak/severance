import { css } from 'styled-components'
import fonts from './fontsConfig'
import { resolveFontPath } from './loadFonts'

const createFontFaces = (familyConfig, style = 'normal') => {
  let styles = '';

  const weights = familyConfig[style];
  if (!weights) return styles;

  for (const [weight, fontNames] of Object.entries(weights)) {
    for (const fontName of fontNames) {
      const [woff, woff2] = resolveFontPath(fontName);
      if (!woff && !woff2) continue;

      styles += `
        @font-face {
          font-family: '${familyConfig.name}';
          src: ${
            woff2 ? `url(${woff2}) format('woff2')` : ''
          }${woff2 && woff ? ',' : ''}${woff ? `url(${woff}) format('woff')` : ''};
          font-weight: ${weight};
          font-style: ${style};
          font-display: swap;
        }
      `;
    }
  }

  return styles;
};

let allFontFaces = '';

for (const family of Object.values(fonts)) {
  allFontFaces += createFontFaces(family, 'normal');
}

const FontFaces = css`
  ${allFontFaces}
`;

export default FontFaces;