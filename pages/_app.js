import '../styles/globals.css';
import { ChainId, ThirdWebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdWebProvider>
      <Component {...pageProps} />
    </ThirdWebProvider>
  )
}

export default MyApp;
