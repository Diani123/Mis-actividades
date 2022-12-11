import './styles.scss';
import swal from 'sweetalert';
swal('Hello world!');
export default function MainFooter() {
  const mostrAralert = () => {
    swal('Hello world!');
  };
  return (
    <div className="mvl-main-footer">
      <div className="footer-img"></div>

      <div className="footer-win"> gana</div>
    </div>
  );
}
