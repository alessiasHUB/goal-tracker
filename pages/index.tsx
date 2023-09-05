import { useState } from "react";

const Home: React.FC = () => {
  const [downloads, setDownloads] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const getDownloads = async () => {
    const deployed = true; //true if deployed
    const baseUrl = deployed
      ? "https://package-downloads-webscraper.vercel.app/"
      : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/getDownloads`, {
      method: "POST",
      body: JSON.stringify({ input }),
    });
    const { downloads } = await res.json();
    setDownloads(downloads);
  };

  return (
    <>
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter package name"
        />
        {input.length > 0 ? (
          <button className="main-button" onClick={getDownloads} type="button">
            ✨
          </button>
        ) : (
          <button className="main-button" disabled type="button">
            ✨
          </button>
        )}
      </div>
      {downloads && <p className="downloads-txt">downloads: {downloads}</p>}
    </>
  );
};

export default Home;
