import '../styles/welcomePage.scss';

function WelcomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__container container wrapper">
          <div className="hero__info">
            <div className="auth__img-bigtext">
              <p className="auth__img-bigtext--highlight">GraphiQl</p>
            </div>
            <p className="auth__img-smalltext">
              A powerful tool that offers syntax highlighting, intellisense autocompletion,
              automatic documentation, and much more.
            </p>
            <button className="hero__button">Get Started</button>
          </div>
        </div>
      </section>
      <section className="aboutProject">
        <ul className="aboutProject__container container wrapper">
          <li className="aboutProject__item">
            <div className="aboutProject__img-query"></div>
            <div className="aboutProject__info">
              <h2 className="aboutProject__title">A query language for API</h2>
              <p className="aboutProject__text">
                GraphQL is a query language for APIs and a runtime for fulfilling those queries.
                GraphQL provides a complete and understandable description of the data in API, gives
                your the power to ask for exactly what need and nothing more.
              </p>
            </div>
          </li>
          <li className="aboutProject__item">
            <div className="aboutProject__img-what-you-need"></div>
            <div className="aboutProject__info">
              <h2 className="aboutProject__title">Ask for what you need, get exactly that</h2>
              <p className="aboutProject__text">
                Send a GraphQL query to our API and get exactly what you need, nothing more and
                nothing less. GraphQL queries always return predictable results. Apps using GraphQL
                are fast and stable because they control the data they get, not the server.
              </p>
            </div>
          </li>
          <li className="aboutProject__item">
            <div className="aboutProject__img-request"></div>
            <div className="aboutProject__info">
              <h2 className="aboutProject__title">Get many resources in a single request</h2>
              <p className="aboutProject__text">
                GraphQL queries access not just the properties of one resource but also smoothly
                follow references between them. While typical REST APIs require loading from
                multiple URLs, GraphQL APIs get all the data our needs in a single request. App
                GraphQL quick even on slow mobile network connections.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <h2>About the course</h2>
          <p>
            <strong>RS School </strong>is free-of-charge and community-based education program
            conducted by{' '}
            <a target="_blank" href="https://rollingscopes.com/" rel="noreferrer">
              The Rolling Scopes
            </a>
            developer community since 2013.
          </p>
          <p>
            Everyone can study at RS School, regardless of age, professional employment, or place of
            residence.
          </p>
          <p>
            The mentors and trainers of our school are front-end and javascript developers from
            different companies and countries.
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>Our team</h2>
          <ul>
            <li>fdgsdfg</li>
            <li>sgsdgdfg</li>
            <li>sdfgsdfgdsf</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
