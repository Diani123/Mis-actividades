import './styles.scss';
import swal from 'sweetalert';
const mostrarAlert = () => {
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
        <h2>INFORMACIÒN PRIVILEGIADA DE MARVEL</h2>
        <h1>¡Mira,gana,canjea!</h1>
        h
        <button onClick={() => mostrarAlert()}>ÙNETE AHORA</button>
      </div>
    </div>
  );
}
