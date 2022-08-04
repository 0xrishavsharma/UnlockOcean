import Head from "next/head";
import { useAddress, useMetamask } from "@thirdweb-dev/react";


const style = {
  wrapper: `flex h-screen items-center justify-center`,
}

export default function Home() {
  
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const connectBtn = () => {
    let connectBtnHtml = document.getElementById("connectBtn");
    if (address != "undefined") {
      connectBtnHtml.innerHTML = "Connected";
    } 
  }

  const Auth = () => {
    return (
      <main className="">
        <button onClick={() => { connectWithMetamask(), connectBtn() } } id="connectBtn">Connect with Metamask</button>
      </main>
    )
    
  }
  return (
    <div className="">
      <Head>
        <title>UnlockOcean - Decentralised clone of OpenSea</title>
        <meta name="description" content="A minimal decentralised clone of OpenSea" />
      </Head>

      <main className={style.wrapper}>
        { address ? <h1 className="text-green"> Successfully logged in </h1> : Auth() }
      </main>
     
    </div>
  )
}
