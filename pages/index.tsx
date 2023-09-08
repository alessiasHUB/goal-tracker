import { useState } from "react";

const Home: React.FC = () => {
  // const [downloads, setDownloads] = useState<string>("");
  const [input, setInput] = useState<string>("");

  // const deployed = false;
  // const baseUrl = deployed
  //   ? "https://goal-tracker.vercel.app/"
  //   : "http://localhost:3000";

  //conditionally render home screen if you're logged in or not
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
          <button className="main-button" type="button">
            ✨
          </button>
        ) : (
          <button className="main-button" disabled type="button">
            ✨
          </button>
        )}
      </div>
      {/* {downloads && <p className="downloads-txt">downloads: {downloads}</p>} */}
    </>
  );
};

export default Home;
