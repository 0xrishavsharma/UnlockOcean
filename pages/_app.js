import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Goerli}
      chainRpc={{
        [ChainId.Rinkeby]: process.env.ALCHEMY_GOERLI_RPC
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp;
