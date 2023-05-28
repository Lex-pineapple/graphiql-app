import { WelcomePageMsg } from '../../languages/welcomePageMsg';
import { FormattedMessage } from 'react-intl';

function AboutCourse() {
  return (
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
  );
}

export default AboutCourse;
