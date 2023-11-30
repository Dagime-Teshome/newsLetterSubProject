import dialogImg from "./assets/images/icon-success.svg";
import { useNavigate } from "react-router-dom";

export function ConfirmationDialog() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div className="dialog_wrapper">
      <div className="dialog_container">
        <img className="dialog_img" src={dialogImg} />
        <h1 className="header_text spacing">Thanks for subscribing</h1>
        <p className="par_class">
          A confirmation email has been sent to "some@email.com".Please open it
          and click the button inside to confirm your subscription.
        </p>
        <button onClick={handleClick} className="btn_class">
          Dismiss Message
        </button>
      </div>
    </div>
  );
}
