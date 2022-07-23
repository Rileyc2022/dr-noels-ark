import { Global } from "@emotion/react";
const Fonts = () => (
    <Global
        styles={`
    /* latin */
      @font-face {
        font-family: 'Gotham Pro Regular';
        src: url("/fonts/Gotham_Pro_Regular.ttf") format('truetype');
        font-display: fallback;
      }
      /* latin */
      @font-face {
        font-family: 'Quantify Bold';
        src: url("/fonts/Quantify_Bold.ttf") format('truetype');
        font-display: fallback;
      }
      `}
    />
);
export default Fonts;
