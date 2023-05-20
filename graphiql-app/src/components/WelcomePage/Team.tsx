import { WelcomePageMsg } from '../../languages/welcomePageMsg';
import { FormattedMessage } from 'react-intl';
import TeamItem from './TeamItem';

const TeamLinks = {
  sasha: {
    gmail: 'mailto:pineapplepear55@gmail.com',
    telegram: 'https://t.me/TheShrimpy',
    discord: 'https://discord.com/invite/The Shrimpy#5845',
    github: 'https://github.com/Lex-pineapple',
  },
  alixei: {
    gmail: 'mailto:geklgekleberefin@gmail.com',
    telegram: 'https://t.me/@Rubi_Rod',
    discord: 'https://discord.com/invite/FlexLex#6871',
    github: 'https://github.com/AlexeiKozlovskiy',
  },
  anatoliy: {
    gmail: 'mailto:anatoliyiliiev@gmail.com',
    telegram: 'https://t.me/Anatoliy_Iliev',
    discord: 'https://discord.com/invite/AnatoliyIliev#0257',
    github: 'https://github.com/AnatoliyIliev',
  },
};

function Team() {
  return (
    <section className="team">
      <div className="team__container container wrapper">
        <h2 className="team__main-title">
          <FormattedMessage id={WelcomePageMsg.ourTeamHeader} />
        </h2>
        <ul className="team__list">
          <TeamItem
            nameId={WelcomePageMsg.name1}
            profId={WelcomePageMsg.prof1}
            imgName="Sasha"
            profileLinks={TeamLinks.sasha}
          />
          <TeamItem
            nameId={WelcomePageMsg.name2}
            profId={WelcomePageMsg.prof1}
            imgName="Alixei"
            profileLinks={TeamLinks.alixei}
          />
          <TeamItem
            nameId={WelcomePageMsg.name3}
            profId={WelcomePageMsg.prof1}
            imgName="Anatoliy"
            profileLinks={TeamLinks.anatoliy}
          />
        </ul>
      </div>
    </section>
  );
}

export default Team;
