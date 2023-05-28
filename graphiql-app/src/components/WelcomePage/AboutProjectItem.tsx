import { IAboutProjectItemProps } from '../../@types/welcomePage';
import { FormattedMessage } from 'react-intl';

function AboutProjectItem({ headerId, msgId, imgName }: IAboutProjectItemProps) {
  return (
    <li className="aboutProject__item">
      <div className={`aboutProject__img-${imgName}`}></div>
      <div className="aboutProject__info">
        <h3 className="aboutProject__title">
          <FormattedMessage id={headerId} />
        </h3>
        <p className="aboutProject__text">
          <FormattedMessage id={msgId} />
        </p>
      </div>
    </li>
  );
}

export default AboutProjectItem;
