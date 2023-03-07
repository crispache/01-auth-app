import { useTheme } from "@emotion/react";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom'

export const LoginPage = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Grid
        className="animate__animated animate__fadeIn"
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
            Login
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
                  type="email"
                  label="Email"
                  name="email"
                  fullWidth
                ></TextField>
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <TextField
                  type={showPassword ? 'text' : 'password'}
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

              <Grid
                item
                xs={12}
                sx={{ mt: 5 }}
                display="flex"
                justifyContent="end"
              >
                <Link
                  component={ RouterLink }
                  to="/reset-password"
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    color: "black",
                    fontSize: "14px",
                  }}
                >
                  
                  ¿Te has olvidado de la contraseña?
                </Link>
              </Grid>

              <Grid item xs={12} sx={{ mt: 5 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    height: 55,
                    fontFamily: "Open Sans",
                    fontWeight: 500,
                    fontSize: "15px",
                    ":hover": { background: theme.palette.secondary.light },
                  }}
                  color="secondary"
                >
                  
                  Iniciar sesión
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
                  
                  Sign in with Google
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
              ¿Aún no tienes una cuenta?
              <Link
                component={ RouterLink }
                to="/register"
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  color: "black",
                }}
              >
                
                <b>Registrarse </b>
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
