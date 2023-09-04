import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const years = [
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
];

type Category =
  | "fiction"
  | "mystery-thriller"
  | "historical-fiction"
  | "fantasy"
  | "romance"
  | "science-fiction"
  | "horror"
  | "humor"
  | "nonfiction"
  | "memoir-autobiography"
  | "history-biography"
  | "poetry"
  | "young-adult-fiction";

const categories: Category[] = [
  "fiction",
  "mystery-thriller",
  "historical-fiction",
  "fantasy",
  "romance",
  "science-fiction",
  "horror",
  "humor",
  "nonfiction",
  "memoir-autobiography",
  "history-biography",
  "poetry",
  "young-adult-fiction",
];

const Home: React.FC = () => {
  const [title, setTitle] = useState<string>();
  const [year, setYear] = useState<string>("");
  const [category, setCategory] = useState<Category>();
  const [loading, setLoading] = useState(false);

  const deployed = false;
  const baseUrl = deployed ? "" : "http://localhost:3000";

  const getBook = async () => {
    setLoading(true);
    const res = await fetch(`${baseUrl}/api/getTitle`, {
      method: "POST",
      body: JSON.stringify({ year, category }),
    });
    const { title } = await res.json();
    setTitle(title);
    setLoading(false);
  };

  const handleCategorySelection = (e) => {
    setCategory(e.target.value);
  };

  const handleButtonClick = () => {
    setYear("");
    setTitle("");
  };

  return (
    <>
      <div className="main-page">
        {loading ? (
          <FontAwesomeIcon className="book-icon-loading" icon={faBook} />
        ) : (
          <FontAwesomeIcon className="book-icon" icon={faBook} />
        )}
        <div className="interactive-container">
          <div className="input-container">
            <div className="input-year">
              <input
                className="input-year-box"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="year..."
                onKeyDown={(e) => {
                  if (e.key === "Backspace" || e.key === "Delete") {
                    return;
                  }
                  // Check if the pressed key is not a number (0-9)
                  if (isNaN(parseInt(e.key, 10))) {
                    e.preventDefault(); // Prevent the character from being entered
                  }
                }}
              />
              {!years.includes(year) && year.length > 3 && (
                <p className="year-tooltip">You can only check 2011 til 2022</p>
              )}
            </div>
            <select
              className="dropdown"
              onChange={handleCategorySelection}
              value={category}
            >
              <option disabled selected>
                pick a genre
              </option>
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option.split("-").join(" ")}
                </option>
              ))}
            </select>
          </div>
          {year.length > 3 && years.includes(year) && category ? (
            <button className="main-button" onClick={getBook} type="button">
              ✨
            </button>
          ) : (
            <button className="main-button-disabled" disabled type="button">
              ✨
            </button>
          )}
        </div>
      </div>
      {title && (
        <div className="result-container">
          <p className="result-txt-1">
            Top {category.split("-").join(" ")} book {year} was:
          </p>
          <p className="result-txt-2">{title}</p>
          <button className="close-button" onClick={handleButtonClick}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
