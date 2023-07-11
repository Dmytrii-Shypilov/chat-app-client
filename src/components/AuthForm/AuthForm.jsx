import { Form } from "react-router-dom";
import s from "./auth-form.module.scss";

import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const AuthForm = () => {
  return (
    <form className={s.form}>
      <fieldset className={s.fieldset}>
        <TextField
          size="small"
          id="user"
          label="user name"
          variant="outlined"
          className={s.field}
        />
        <TextField
          size="small"
          id="password"
          label="password"
          variant="outlined"
          type="password"
          className={s.field}
        />
      </fieldset>
      <div className={s.btnWrapper}>
        <Button className={s.btn} variant="contained" size="small">log in</Button>
        <Button className={s.btn} variant="contained" size="small">register</Button>
      </div>
    </form>
  );
};

export default AuthForm;
