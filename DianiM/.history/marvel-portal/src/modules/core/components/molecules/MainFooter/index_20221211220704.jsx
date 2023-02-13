import './styles.scss';
export default function MainFooter() {
  return (
    <div className="content-footer">
      <div className="main-footers_links">
        <a href="">
          <span>
            <svg viewBox="0 0 841.9 595.3" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
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
    </div>
  );
}
