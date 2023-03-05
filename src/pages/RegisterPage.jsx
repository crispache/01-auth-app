import { useTheme } from "@emotion/react";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import es from 'date-fns/locale/es';




export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        component="main"
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: 0,
          height: "100vh",
          backgroundColor: "#eceff1",
        }}
      >
        <Box
          display="inline-block"
          sx={{
            width: 500,
            minHeight: 600,
            padding: 5,
            border: 1,
            borderColor: "gainsboro",
            borderRadius: 2,
            backgroundColor: "white",
            boxShadow: "0px 1px 25px #90a4ae",
          }}
        >
          <Typography variant="h4" textAlign="center" sx={{ mt: 2 }}>
            Crear cuenta
          </Typography>

          <form>
            <Grid
              container
              sx={{
                marginTop: 3,
                padding: 2,
              }}
            >
              <Grid item xs={12} sx={{ mt: 1 }}>
                <TextField
                  type="text"
                  label="Nombre"
                  name="name"
                  fullWidth
                ></TextField>
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <TextField
                  type="email"
                  label="Email"
                  name="email"
                  fullWidth
                ></TextField>
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                <div className="custom-date-picker">
                  <DatePicker label="Fecha de nacimiento" />
                  </div>
                </LocalizationProvider>
              </Grid>


              <Grid item xs={12} sx={{ mt: 3 }}>
                <TextField
                  type={showPassword ? "text" : "password"}
                  label="Contraseña"
                  name="password"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {
                          <IconButton
                            onClick={() => setShowPassword((show) => !show)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        }
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <TextField
                  type={showPassword ? "text" : "password"}
                  label="Repetir contraseña"
                  name="password"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {
                          <IconButton
                            onClick={() => setShowPassword((show) => !show)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        }
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </Grid>

         


              <Grid item xs={12} sx={{ mt: 3 }}>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked color="info" />} label="Aceptar términos y condiciones" />
         
                </FormGroup>
              </Grid>



              <Grid item xs={12} sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    height: 55,
                    fontFamily: "Open Sans",
                    fontWeight: 500,
                    fontSize: "15px",
                    ":hover": { background: theme.palette.success.light },
                    "& .MuiTextField-root": {
                        width: '100%',
                      }
                  }}
                  color="success"
                >
                  Registrar
                </Button>
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<Google />}
                  fullWidth
                  sx={{
                    height: 55,
                    fontFamily: "Open Sans",
                    fontWeight: 500,
                    fontSize: "15px",
                  }}
                >
                  Sign up with Google
                </Button>
              </Grid>
            </Grid>
          </form>

          <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 500,
                color: "black",
              }}
            >
              ¿Ya tienes una cuenta?
              <Link
                href="#"
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  color: "black",
                }}
              >
                <b> Iniciar sesión </b>
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
