import Head from "next/head";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Main from "../components/home"


const style = {
  wrapper: `flex h-screen items-center justify-center`,
}

export default function Home() {
  
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const connectBtn = () => {
    let connectBtnHtml = document.getElementById("connectBtn");
    if (address != "undefined") {
      connectBtnHtml.innerHTML = "Connecting...";
    } 
  }

  const Auth = () => {
    return (
      <main className={style.wrapper}>
        <button className="py-3 px-4 text-purple-700 font- border-2 border-purple-700 border-1 rounded-md bg-transparent hover:bg-purple-700 hover:text-white transition" onClick={() => { connectWithMetamask(), connectBtn() }} id="connectBtn">Connect with Metamask</button>
      </main>
    )
    
  }
  return (
    <div className="">
      <Head>
        <title>UnlockOcean - Decentralised clone of OpenSea</title>
        <meta name="description" content="A minimal decentralised clone of OpenSea" />
      </Head>
      
      {address ? <Main /> : Auth()}
    </div>
  )
}
