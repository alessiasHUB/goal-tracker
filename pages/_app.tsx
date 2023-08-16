import Footer from "../components/Footer";
import "../styles/global.css";
import { useState } from "react";
import Header from "../components/Header";
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [downloads, setDownloads] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const getDownloads = async () => {
    const res = await fetch("http://localhost:3000/api/getDownloads", {
      method: "POST",
      body: JSON.stringify({ input }),
    });
    const { downloads } = await res.json();
    setDownloads(downloads);
  };

  return (
    <div className="background">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
