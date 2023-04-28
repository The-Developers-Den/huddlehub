import "@/styles/globals.css";
import React from "react";
import Image from "next/image";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { filecoin, filecoinHyperspace } from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [filecoin, filecoinHyperspace],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "HuddleHub",
        appLogoUrl:
          "https://png.pngtree.com/png-vector/20211106/ourlarge/pngtree-pizza-pixel-png-image_4023257.png",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: process.env.WALLETCONNECT_PROJECT_ID,
        metadata: {
          name: "HuddleHub",
          description: "Social Media for Filecoin",
          url: "",
          icons: [
            "https://png.pngtree.com/png-vector/20211106/ourlarge/pngtree-pizza-pixel-png-image_4023257.png",
          ],
        },
      },
    }),
  ],
  provider,
});

export default function App({ Component, pageProps }) {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    setReady(true);
  }, []);
  return (
    <>
      {ready ? (
        <WagmiConfig client={client}>
          <Component {...pageProps} />
        </WagmiConfig>
      ) : (
        <div className="w-[100vw] h-[100vh] flex justify-center">
          <Image
            src="https://icons.veryicon.com/png/o/system/bicolor-line-icon/loading-20.png"
            width="200"
            height="200"
            alt="loading"
            className="animate-spin w-28 h-28 my-auto"
          />
        </div>
      )}
    </>
  );
}