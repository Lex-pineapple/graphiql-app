import '../styles/header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogo } from './HeaderLogo';
import { LangSwitcher } from './LangSwitcher';
import { UserIcon } from './UserIcon';
import { UserModal } from './UserModal';
import { FormattedMessage } from 'react-intl';
import { Message } from './languages/messages';

interface HeaderProps {
  currentLocale: string;
  setLocale: (locale: string) => void;
}

function Header({ currentLocale, setLocale }: HeaderProps) {
  const [showModal, setShowModal] = useState(false);

  const handleUserIconClick = () => {
    setShowModal(!showModal);
  };

  const handleModalClickOutside = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      const modalWindow = document.querySelector('.modal-window') as HTMLDivElement;
      modalWindow.classList.toggle('hide-modal-user');
      setTimeout(() => {
        setShowModal(false);
      }, 300);
    }
  };

  return (
    <header className="header">
      <div className="header__wrapper container wrapper">
        <HeaderLogo />
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-list__item">
              <Link to="/">
                <FormattedMessage id={Message.Home} />
              </Link>
            </li>
            <li className="header-nav-list__item">
              <Link to="/graphiql">GraphiQL</Link>
            </li>
            <li className="header-nav-list__item">
              <Link to="/unknown">
                <FormattedMessage id={Message.PAGE404TEST} />
              </Link>
            </li>
          </ul>
        </nav>
        <UserIcon onClick={handleUserIconClick} />
        <LangSwitcher currentLocale={currentLocale} setLocale={setLocale} />
      </div>
      {showModal && <UserModal onClickOutside={handleModalClickOutside} />}
    </header>
  );
}

export default Header;
