import React, { useEffect } from "react";
import { useHuddle01 } from "@huddle01/react";
import Head from "next/head";
import { useAcount } from "wagmi";
import axios from "axios";
import { useLobby } from "@huddle01/react/hooks";

const Home = () => {
  const { initialize, isInitialized } = useHuddle01();
  const handleOnClick = async () => {
    const headers = {
      "x-api-key": process.env.NEXT_PUBLIC_HUDDLE_API_KEY,
      "Content-Type": "application/json",
    };
    const data = await axios.post(
      "https://iriko.testing.huddle01.com/api/v1/create-room",
      {
        title: "Test",
      },
      {
        headers: headers,
      }
    );
    console.log(data);
  };
  useEffect(() => {
    if (!isInitialized) initialize(process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID);
  }, [initialize, isInitialized]);

  const { joinLobby, isLoading, isLobbyJoined, error } = useLobby();

  if (error) {
    console.error(error);
    return <div>Could not join lobby</div>;
  }

  const handleLobbyJoined = () => {
    if (isLoading) {
      alert("Lobby is loading");
      return;
    }
    if (isLobbyJoined) {
      alert("Lobby joined");
      return;
    }

    if (!roomId) {
      alert("No room id");
      return;
    }

    joinLobby(roomId);
  };

  return (
    <>
      <Head>
        <title>Huddle01 - Test App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div>Test1233</div>

        <buttton onClick={handleOnClick}>Make meet</buttton>
        <div>{isLobbyJoined ? "Lobby Joined" : "Lobby not Joined"}</div>
        <button onClick={handleLobbyJoined}>join lobby</button>
      </main>
    </>
  );
};

export default Home;
