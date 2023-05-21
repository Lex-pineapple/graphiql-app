import '../styles/header.scss';
import '../styles/hamburgerMenu.scss';

import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderLogo } from './HeaderLogo';
import { LangSwitcher } from './LangSwitcher';
import { UserIcon } from './UserIcon';
import { UserModal } from './UserModal';
import { FormattedMessage } from 'react-intl';
import { Message } from '../languages/messages';
import { useSelector } from 'react-redux';
import { IStore } from '../@types/store';
import AuthComponent from './AuthComponent';
import { IHeaderProps } from '../@types/header';
import WelcomeComponent from './WelcomeComponent';

function Header({ currentLocale, setLocale }: IHeaderProps) {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const logInStatus = useSelector((store: IStore) => store.auth.login);
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (headerRef.current === null) {
  //     return;
  //   }

  //   const header = headerRef.current.getBoundingClientRect();
  //   const handleScrollEvent = () => {
  //     handleScroll(header.top, header.height);
  //   };

  //   window.addEventListener('scroll', handleScrollEvent);

  //   return () => {
  //     window.removeEventListener('scroll', handleScrollEvent);
  //   };
  // }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  return (
    <header className={`header${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
      <div className="header__wrapper container wrapper">
        <HeaderLogo />
        <div className={`header-nav${isOpen ? ' is-open' : ''}`} onClick={toggleMenu}>
          <div className="header-nav-contents">
            {logInStatus ? (
              <WelcomeComponent handleClick={handleUserIconClick} />
            ) : location.pathname !== '/signin' && location.pathname !== '/signup' ? (
              <AuthComponent />
            ) : (
              <></>
            )}
            <LangSwitcher currentLocale={currentLocale} setLocale={setLocale} isOpen={isOpen} />
          </div>
        </div>
      </div>
      {showModal && <UserModal onClickOutside={handleModalClickOutside} />}
      <div className={`hamburger${isOpen ? ' open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-line line1"></div>
        <div className="hamburger-line line2"></div>
        <div className="hamburger-line line3"></div>
      </div>
      <hr className="header__line"></hr>
    </header>
  );
}

export default Header;
