const AboutPage: React.FC = () => (
  <div className="about-page-container">
    <h1>About this app</h1>
    <p>
      This app was made with NextJS, Typescript and is my first project with
      both NextJS and webscraping. For the webscraping I used jsdom to get data
      from{" "}
      <a href="https://www.npmjs.com/" className="about-link">
        npmjs.com
      </a>
    </p>
  </div>
);

export default AboutPage;
