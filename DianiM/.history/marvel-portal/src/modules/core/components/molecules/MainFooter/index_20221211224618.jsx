import './styles.scss';
export default function MainFooter() {
  return (
    <div className="content-footer">
      <div className="main-footers_links">
        <a href="">
          <span>
            <svg></svg>
          </span>
        </a>
        <nav className="main-footer-links1">
          <ul>
            <li>
              <a href="" className="main-footer-link">
                ACERCA DE MARVEl
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                AYUDA/PREGUNTAS FRECUENTES
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                CARRERAS
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                PASANTIAS
              </a>
            </li>
          </ul>
        </nav>
        <nav className="main-footer-links2">
          <ul>
            <li>
              <a href="" className="main-footer-link">
                PUBLICIDAD
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                DISNEY+
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                MARVELHQ.COM
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                CANJEAR COMICS DIGITALES
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav>
        <div>
          <a href="">
            div
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png" srcset="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png" alt="Logotipo de Marvel Insider" class="main-footer__promotion-image">
          </a>
        </div>
      </nav>
    </div>

  );
}
