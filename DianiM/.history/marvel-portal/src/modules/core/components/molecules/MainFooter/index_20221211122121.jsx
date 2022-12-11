import './styles.scss';
import swal from 'sweetalert';
swal('Hello world!');
export default function MainFooter() {
  const mostrarAlert = () => {
    swal({
      text: '¡Oye, esto aún no está listo, vuelve más tarde!',
      ic
    });
  };
  return (
    <div className="mvl-main-footer">
      <div className="footer-img"></div>

      <div className="footer-win">
        <button onClick={() => mostrarAlert()}>ÙNETE AHORA</button>
      </div>
    </div>
  );
}
