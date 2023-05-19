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
        <h2 className="aboutProject__main-title">About the QraphiQL</h2>
        <ul className="aboutProject__container container wrapper">
          <li className="aboutProject__item">
            <div className="aboutProject__img-query"></div>
            <div className="aboutProject__info">
              <h3 className="aboutProject__title">A query language for API</h3>
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
              <h3 className="aboutProject__title">Ask for what you need, get exactly that</h3>
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
              <h3 className="aboutProject__title">Get many resources in a single request</h3>
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
      <section className="aboutCourse">
        <div className="aboutCourse__container container wrapper">
          <h2 className="aboutCourse__title">About the course</h2>
          <div className="aboutCourse__info">
            <a target="_blank" href="https://rollingscopes.com/" rel="noreferrer">
              <div className="aboutCourse__img"></div>
            </a>
            <div className="aboutCourse__block">
              <p className="aboutCourse__text">
                <strong className="aboutCourse__name">RS School </strong>is free-of-charge and
                community-based education program conducted by{' '}
                <a
                  className="aboutCourse__RSlink"
                  target="_blank"
                  href="https://rollingscopes.com/"
                  rel="noreferrer"
                >
                  The Rolling Scopes{' '}
                </a>
                developer community since 2013.
              </p>
              <p className="aboutCourse__text">
                Everyone can study at RS School, regardless of age, professional employment, or
                place of residence.
              </p>
              <p className="aboutCourse__text">
                The mentors and trainers of our school are front-end and javascript developers from
                different companies and countries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="team__container container wrapper">
          <h2 className="team__main-title">Our team</h2>
          <ul className="team__list">
            <li className="team__item">
              <div className="team__img-Sasha"></div>
              <div className="team__info">
                <h3 className="team__name">Sasha Sonich</h3>
                <p className="team__profession">Frontend Developer</p>
                <div className="team__contacts">
                  <a className="team__contacts-icon" href="mailto:pineapplepear55@gmail.com">
                    <div className="team__chome"></div>
                  </a>
                  <a
                    className="team__contacts-icon"
                    target="_blank"
                    href="https://t.me/TheShrimpy"
                    rel="noreferrer"
                  >
                    <div className="team__telegram"></div>
                  </a>
                  <a
                    className="team__contacts-icon"
                    target="_blank"
                    href="https://discord.com/invite/The Shrimpy#5845"
                    rel="noreferrer"
                  >
                    <div className="team__discord"></div>
                  </a>
                  <a
                    className="team__contacts-icon"
                    target="_blank"
                    href="https://github.com/Lex-pineapple"
                    rel="noreferrer"
                  >
                    <div className="team__github"></div>
                  </a>
                </div>
              </div>
            </li>
            <li className="team__item">
              <div className="team__img-Alixei"></div>
              <div className="team__info">
                <h3 className="team__name">Alexei Kozlovskiy</h3>
                <p className="team__profession">Frontend Developer</p>
                <div className="team__contacts">
                  <a className="team__contacts-icon" href="mailto:geklgekleberefin@gmail.com">
                    <div className="team__chome"></div>
                  </a>
                  <a
                    className="team__contacts-icon"
                    target="_blank"
                    href="https://t.me/@Rubi_Rod"
                    rel="noreferrer"
                  >
                    <div className="team__telegram"></div>
                  </a>
                  <a
                    className="team__contacts-icon"
                    target="_blank"
                    href="https://discord.com/invite/FlexLex#6871"
                    rel="noreferrer"
                  >
                    <div className="team__discord"></div>
                  </a>
                  <a
                    className="team__contacts-icon"
                    target="_blank"
                    href="https://github.com/AlexeiKozlovskiy"
                    rel="noreferrer"
                  >
                    <div className="team__github"></div>
                  </a>
                </div>
              </div>
            </li>
            <li className="team__item">
              <div className="team__img-Anatoliy"></div>
              <div className="team__info">
                <h3 className="team__name">Anatoliy Iliev</h3>
                <p className="team__profession">Frontend Developer</p>
                <div className="team__contacts">
                  <a className="team__contacts-icon" href="mailto:anatoliyiliiev@gmail.com">
                    <div className="team__chome"></div>
                  </a>
                  <a
                    className="team__contacts-icon"
                    target="_blank"
                    href="https://t.me/Anatoliy_Iliev"
                    rel="noreferrer"
                  >
                    <div className="team__telegram"></div>
                  </a>
                  <a
                    className="team__contacts-icon"
                    target="_blank"
                    href="https://discord.com/invite/AnatoliyIliev#0257"
                    rel="noreferrer"
                  >
                    <div className="team__discord"></div>
                  </a>
                  <a
                    className="team__contacts-icon"
                    target="_blank"
                    href="https://github.com/AnatoliyIliev"
                    rel="noreferrer"
                  >
                    <div className="team__github"></div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
