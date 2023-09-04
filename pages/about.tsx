const AboutPage: React.FC = () => (
  <div className="about-page-container">
    <h1 className="about-title">About this app</h1>
    <div className="about-txt">
      <p>
        This app was made with NextJS, Typescript and is my first project with
        both NextJS and webscraping. For the webscraping I used jsdom to get
        data from{" "}
        <a href="https:/www.goodreads.com/" className="about-link">
          goodreads.com
        </a>{" "}
        to fetch the most popular book for a specific year and genre.
      </p>
      <p>
        Other than that I had fun playing around with routes to add an about
        page as well as some fun css animations, as well as improving
        accessibilty by using REM and the 62.5% trick.
      </p>
    </div>
  </div>
);

export default AboutPage;
