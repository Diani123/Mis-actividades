import './styles.scss';
import swal from 'sweetalert';
const mostrarAlert = () => {
  swal({
    text: '¡Oye, esto aún no está listo, vuelve más tarde!',
    icon: 'info',
    button: 'Aceptar'
  });
};
const mostrarAlert2 = () => {
  swal({
    text: '¡Oye, esto aún no está listo, vuelve más tarde!',
    icon: 'info',
    button: 'Aceptar'
  });
};
export default function MainFooter() {
  return (
    <div className="mvl-main-footer">
      <div className="footer-img"></div>

      <div className="footer-win">
        <h2 className="title-footer">INFORMACION PRIVILEGIADA DE MARVEL</h2>
        <h1 className="prom-footer">¡Mira, gana, canjea!</h1>
        <h4 className="info-footer">Obtenga recompensas por hacer lo que ya hace como fan.</h4>
        <button onClick={() => mostrarAlert()} className="button-footer">
          ÙNETE AHORA
        </button>
        <br />
        <a href="" onClick={() => mostrarAlert2()}>
          Los terminos y condiciones aplican
        </a>
      </div>
      <div className="content-footer">
        <div className="main-footers_links">
          <a href="public/images/logoM.png"><img src="main-footer-links" alt="" /></a>
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
    </div>
  );
}
