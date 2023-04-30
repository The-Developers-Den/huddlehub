import WalletConnect from "@/components/Buttons/WalletConnect";
import {useConnect, } from "wagmi";
import ConnectWallet from "@/components/Panels/WalletPanel";

const Walletconnect = () => {
  const { connectors } = useConnect();
  return (
    <div className="flex w-full h-[100vh] font-worksans">
      <section className="basis-[48%] text-center relative bg-white  ">
        <ConnectWallet heading="Connect Wallet" />
      </section>
      <section className="basis-[52%] flex flex-col justify-center text-center">
        <div>
          <h2 className="text-3xl font-semibold my-6">Choose The Wallet</h2>
          {connectors.map((connector, id) => (
            <WalletConnect connector={connector} key={id} id={id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Walletconnect;
