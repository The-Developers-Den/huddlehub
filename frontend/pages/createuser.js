import { useAccount, useConnect, useDisconnect } from "wagmi";
import ConnectWallet from "@/components/Panels/WalletPanel";
import UserForm from "@/components/Forms/CreateUser";

const Walletconnect = () => {
  const { isConnected } = useAccount();

  return (
    <div className="flex w-full h-[100vh] font-worksans">
      <section className="basis-[48%] text-center relative bg-white  ">
        <ConnectWallet heading="Create Profile" />
      </section>
      <section className="basis-[52%] flex flex-col justify-center text-center">
        {isConnected && (
          <section className="font-worksans h-full flex py-7 px-10  ">
            <UserForm />
          </section>
        )}
      </section>
    </div>
  );
};

export default Walletconnect;
