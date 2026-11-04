/**
 * _app.jsx — Next.js Pages Router entry point
 *
 * Mounts global CSS, then delegates to RootLayout which provides:
 *  - ThemeProvider  (useTheme hook)
 *  - LoadingScreen  (Framer Motion splash)
 *  - Ambient mesh   (background blobs + dot-grid)
 */

import "@/styles/globals.css";
import RootLayout from "./layout";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
