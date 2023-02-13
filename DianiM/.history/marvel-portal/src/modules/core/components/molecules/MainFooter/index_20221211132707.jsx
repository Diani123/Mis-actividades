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
        <h2 className="title-fotter">INFORMACIÒN PRIVILEGIADA DE MARVEL</h2>
        <h1 className="prom-footer">¡Mira,gana,canjea!</h1>
        <h4>Obtenga recompensas por hacer lo que ya hace como fan.</h4>
        <button onClick={() => mostrarAlert()}>ÙNETE AHORA</button> <br />
        <a href="">Los terminos y condiciones aplican</a>
      </div>
    </div>
  );
}
