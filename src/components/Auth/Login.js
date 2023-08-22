import "./auth.css";
import { useFormik } from "formik";
import {
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);
      console.log(data);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="login-wrapper">
        <h1>Login</h1>
        <div className="login-body">
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              onChange={formik.handleChange}
            />
          </FormControl>
        </div>
        <button className="button-64" type="submit">
          <span className="text">Submit</span>
        </button>
      </div>
    </form>
  );
};

export default Login;
