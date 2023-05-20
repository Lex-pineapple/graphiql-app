import '../styles/welcomePage.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStore } from '../@types/store';
import { FormattedMessage } from 'react-intl';
import { WelcomePageMsg } from '../components/languages/welcomePageMsg';

function WelcomePage() {
  const logInStatus = useSelector((store: IStore) => store.auth.login);

  return (
    <>
      <section className="hero">
        <div className="hero__container container wrapper">
          <div className="hero__info">
            <h1 className="hero__graph">GraphiQl</h1>
            <p className="hero__text">
              <FormattedMessage id={WelcomePageMsg.mainDescr} />
            </p>
            <Link to={logInStatus ? '/graphiql' : '/signin'}>
              <button className="hero__button">
                <FormattedMessage id={WelcomePageMsg.getStartedBtn} />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="aboutProject">
        <h2 className="aboutProject__main-title">
          <FormattedMessage id={WelcomePageMsg.aboutMainHeader} />
        </h2>
        <ul className="aboutProject__container container wrapper">
          <li className="aboutProject__item">
            <div className="aboutProject__img-query"></div>
            <div className="aboutProject__info">
              <h3 className="aboutProject__title">
                <FormattedMessage id={WelcomePageMsg.aboutHeader1} />
              </h3>
              <p className="aboutProject__text">
                <FormattedMessage id={WelcomePageMsg.aboutDescr1} />
              </p>
            </div>
          </li>
          <li className="aboutProject__item">
            <div className="aboutProject__img-what-you-need"></div>
            <div className="aboutProject__info">
              <h3 className="aboutProject__title">
                <FormattedMessage id={WelcomePageMsg.aboutHeader2} />
              </h3>
              <p className="aboutProject__text">
                <FormattedMessage id={WelcomePageMsg.aboutDescr2} />
              </p>
            </div>
          </li>
          <li className="aboutProject__item">
            <div className="aboutProject__img-request"></div>
            <div className="aboutProject__info">
              <h3 className="aboutProject__title">
                <FormattedMessage id={WelcomePageMsg.aboutHeader3} />
              </h3>
              <p className="aboutProject__text">
                <FormattedMessage id={WelcomePageMsg.aboutDescr3} />
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="aboutCourse">
        <div className="aboutCourse__container container wrapper">
          <h2 className="aboutCourse__title">
            <FormattedMessage id={WelcomePageMsg.courseAboutHeader} />
          </h2>
          <div className="aboutCourse__info">
            <a target="_blank" href="https://rollingscopes.com/" rel="noreferrer">
              <div className="aboutCourse__img"></div>
            </a>
            <div className="aboutCourse__block">
              <p className="aboutCourse__text">
                <strong className="aboutCourse__name">RS School </strong>
                <FormattedMessage id={WelcomePageMsg.courseAboutDescr1p1} />{' '}
                <a
                  className="aboutCourse__RSlink"
                  target="_blank"
                  href="https://rollingscopes.com/"
                  rel="noreferrer"
                >
                  The Rolling Scopes{' '}
                </a>
                <FormattedMessage id={WelcomePageMsg.courseAboutDescr1p2} />
              </p>
              <p className="aboutCourse__text">
                <FormattedMessage id={WelcomePageMsg.courseAboutDescr2} />
              </p>
              <p className="aboutCourse__text">
                <FormattedMessage id={WelcomePageMsg.courseAboutDescr3} />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="team__container container wrapper">
          <h2 className="team__main-title">
            <FormattedMessage id={WelcomePageMsg.ourTeamHeader} />
          </h2>
          <ul className="team__list">
            <li className="team__item">
              <div className="team__img-Sasha"></div>
              <div className="team__info">
                <h3 className="team__name">
                  <FormattedMessage id={WelcomePageMsg.name1} />
                </h3>
                <p className="team__profession">
                  <FormattedMessage id={WelcomePageMsg.prof1} />
                </p>
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
                <h3 className="team__name">
                  <FormattedMessage id={WelcomePageMsg.name2} />
                </h3>
                <p className="team__profession">
                  <FormattedMessage id={WelcomePageMsg.prof1} />
                </p>
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
                <h3 className="team__name">
                  <FormattedMessage id={WelcomePageMsg.name3} />
                </h3>
                <p className="team__profession">
                  <FormattedMessage id={WelcomePageMsg.prof1} />
                </p>
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
