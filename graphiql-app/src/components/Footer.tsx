import './../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="footer__line"></hr>
      <div className="footer__container container wrapper">
        <div className="footer__wrapper">
          <a
            className="github-link"
            href="https://github.com/Lex-pineapple"
            target="_blank"
            rel="noreferrer"
          >
            Lex-pineapple
          </a>
          <a
            className="github-link"
            href="https://github.com/AlexeiKozlovskiy"
            target="_blank"
            rel="noreferrer"
          >
            alexeikozlovskiy
          </a>
          <a
            className="github-link"
            href="https://github.com/AnatoliyIliev"
            target="_blank"
            rel="noreferrer"
          >
            AnatoliyIliev
          </a>
          <a
            className="footer__school-link"
            href="https://rs.school/react/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="footer__school-img"></p>
          </a>
          <span className="footer__year">2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
