import img from "./assets/images/illustration-sign-up-desktop.svg";
import mobileImg from "./assets/images/illustration-sign-up-mobile.svg";
import checkMark from "./assets/images/icon-list.svg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export function NewsLetterComponent() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      navigate("/confirmation");
    },
  });

  return (
    <div className="newsLetter_container">
      <div className="mobile_img_class">
        <img style={{ width: "100%" }} src={mobileImg} />
      </div>
      <div className="letter_box_Wrapper">
        <div className="letter_container">
          <h1 className="header_text">Stay updated!</h1>
          <p className="par_class">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="list_class">
            <li>
              <img src={checkMark} /> Product discovery and building what
              matters
            </li>
            <li>
              <img src={checkMark} /> Measuring to ensure updates are a success
            </li>
            <li>
              <img src={checkMark} /> And much more!
            </li>
          </ul>
          <form className="form_class" onSubmit={formik.handleSubmit}>
            <div className="email_class">
              <span className="err-flex">
                <label htmlFor="email" className="lbl_class">
                  Email address*
                </label>
                {formik.touched.email && formik.errors.email ? (
                  <div className="err_text">{formik.errors.email}</div>
                ) : null}
              </span>
              <input
                id="email"
                name="email"
                className="input_class"
                placeholder="email@company.com"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            <button className="btn_class" type="submit">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
      <div className="img_container display_none">
        <img className="img_class" src={img} />
      </div>
    </div>
  );
}
