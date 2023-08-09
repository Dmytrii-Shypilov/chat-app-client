import s from "./auth-page.module.scss";

import icon from "../../images/chat-icon.png";

import AuthForm from "../../components/AuthForm";
import { Container } from "@mui/material";
import Logo from "../../images/svg/Logo";

const AuthPage = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.contentWrapper}>
            <div className={s.iconWrapper}>
              <Logo height="112" width="300" />
              <img className={s.icon} src={icon} alt="" />
            </div>

            <AuthForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AuthPage;
