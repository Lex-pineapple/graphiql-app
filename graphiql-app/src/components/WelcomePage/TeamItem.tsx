import { ITeamItemProps } from '../../@types/welcomePage';
import { FormattedMessage } from 'react-intl';

function TeamItem({ nameId, profId, imgName, profileLinks }: ITeamItemProps) {
  return (
    <li className="team__item">
      <div className={`team__img-${imgName}`}></div>
      <div className="team__info">
        <h3 className="team__name">
          <FormattedMessage id={nameId} />
        </h3>
        <p className="team__profession">
          <FormattedMessage id={profId} />
        </p>
        <div className="team__contacts">
          <a className="team__contacts-icon" href={profileLinks.gmail}>
            <div className="team__chome"></div>
          </a>
          <a
            className="team__contacts-icon"
            target="_blank"
            href={profileLinks.discord}
            rel="noreferrer"
          >
            <div className="team__telegram"></div>
          </a>
          <a
            className="team__contacts-icon"
            target="_blank"
            href={profileLinks.discord}
            rel="noreferrer"
          >
            <div className="team__discord"></div>
          </a>
          <a
            className="team__contacts-icon"
            target="_blank"
            href={profileLinks.github}
            rel="noreferrer"
          >
            <div className="team__github"></div>
          </a>
        </div>
      </div>
    </li>
  );
}

export default TeamItem;
