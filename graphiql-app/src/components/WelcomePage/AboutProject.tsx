import { WelcomePageMsg } from '../../languages/welcomePageMsg';
import { FormattedMessage } from 'react-intl';
import AboutProjectItem from './AboutProjectItem';

function AboutProject() {
  return (
    <section className="aboutProject">
      <h2 className="aboutProject__main-title">
        <FormattedMessage id={WelcomePageMsg.aboutMainHeader} />
      </h2>
      <ul className="aboutProject__container container wrapper">
        <AboutProjectItem
          headerId={WelcomePageMsg.aboutHeader1}
          msgId={WelcomePageMsg.aboutDescr1}
          imgName="query"
        />
        <AboutProjectItem
          headerId={WelcomePageMsg.aboutHeader2}
          msgId={WelcomePageMsg.aboutDescr2}
          imgName="what-you-need"
        />
        <AboutProjectItem
          headerId={WelcomePageMsg.aboutHeader3}
          msgId={WelcomePageMsg.aboutDescr3}
          imgName="request"
        />
      </ul>
    </section>
  );
}

export default AboutProject;
