import {
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  TextField,
  Stack,
  Autocomplete,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { habits } from "../../utils/helper";
import { useFormik } from "formik";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      password: "",
      profession: "",
      habits: null,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="login-wrapper">
        <h1>Register</h1>
        <div className="login-body">
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            onChange={formik.handleChange}
          />
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
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
          <TextField
            id="contactNumber"
            name="contactNumber"
            label="Contact Number"
            variant="outlined"
            onChange={formik.handleChange}
          />
          <TextField
            id="profession"
            name="profession"
            label="Profession"
            variant="outlined"
            onChange={formik.handleChange}
          />
          <Stack>
            <Autocomplete
              multiple
              id="habits"
              name="habits"
              options={habits}
              getOptionLabel={(option) => option.title}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select your habits"
                  placeholder="Habits"
                />
              )}
            />
          </Stack>
        </div>
        <button className="button-64" type="submit">
          <span className="text">Register</span>
        </button>
      </div>
    </form>
  );
};

export default Register;
