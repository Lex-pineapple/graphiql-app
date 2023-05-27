import { IStore } from '../../@types/store';
import { WelcomePageMsg } from '../../languages/welcomePageMsg';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function HeadSection() {
  const logInStatus = useSelector((store: IStore) => store.auth.login);

  return (
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
  );
}

export default HeadSection;
