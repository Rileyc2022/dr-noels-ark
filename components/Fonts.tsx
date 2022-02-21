import { Global } from "@emotion/react";
const Fonts = () => (
    <Global
        styles={`
    /* latin */
      @font-face {
        font-family: 'Gotham Pro Regular';
        src: url("/fonts/Gotham_Pro_Regular.ttf") format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'Quantify Bold';
        src: url("/fonts/Quantify_Bold.ttf") format('truetype');
      }
      `}
    />
);
export default Fonts;
