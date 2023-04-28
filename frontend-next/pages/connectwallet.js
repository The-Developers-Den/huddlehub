import WalletConnect from "@/components/Buttons/WalletConnect";
import { useAccount, useConnect, useDisconnect, useNetwork } from "wagmi";
import ConnectWallet from "@/components/Panels/WalletPanel";

const Walletconnect = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connectors } = useConnect();
  return (
    <div className="flex w-full h-[100vh] font-worksans">
      <section className="basis-[48%] text-center relative bg-white  ">
        <ConnectWallet heading="Connect Wallet" />
      </section>
      <section className="basis-[52%] flex flex-col justify-center text-center">
        {!isConnected && (
          <div>
            <h2 className="text-3xl font-semibold my-4">Choose The Wallet</h2>
            {connectors.map((connector, id) => (
              <WalletConnect connector={connector} key={id} id={id} />
            ))}
          </div>
        )}

        {isConnected && (
          <section className="flex flex-col mx-16">
            <h2 className="text-3xl font-semibold my-4">
              Sign The Message In Your Wallet To Continue
            </h2>

            <h2 className="text-lg my-4 text-[#ffffffb1]">
              {" "}
              Adventurse Dao uses this signature to verify that you are the
              owner of this Ethereum address.
            </h2>
            <section className="flex justify-around my-5">
              <button
                className=" border rounded-lg px-5 py-2 hover:scale-105 ease-in-out duration-300 w-[40%]"
                onClick={() => disconnect()}
              >
                Disconnect
              </button>
              {/* <SignMessage /> */}
            </section>
          </section>
        )}
      </section>
    </div>
  );
};

export default Walletconnect;
