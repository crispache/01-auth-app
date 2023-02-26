import { Google } from "@mui/icons-material";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          }}
        >
          <Typography variant="h4" textAlign="center" sx={{mt:2}}>
            Login
          </Typography>

          <Typography textAlign="center" sx={{mt:2}} color="grey">
            Amet irure do minim non irure cillum consectetur quis incididunt sunt sint sint.
          </Typography>

          <form>
            <Grid
              container
              sx={{
                marginTop: 3,
                backgroundColor: "white",
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
                  type="password"
                  label="Contraseña"
                  name="password"
                  fullWidth
                ></TextField>
              </Grid>

              <Grid item xs={12} sx={{ mt: 5 }} display="flex" justifyContent="end">
                <Link href="#"> ¿Te has olvidado de la contraseña? </Link>
              </Grid>

              <Grid item xs={12} sx={{ mt: 5 }}>
                <Button variant="contained" fullWidth sx={{ height: 55 }} color="secondary"> Login </Button>
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button variant="outlined" startIcon={ <Google/> } fullWidth sx={{ height: 55 }}> Sign in with Google </Button>
              </Grid>

            </Grid>
          </form>

          <Box sx={{mt:5}} display="flex" justifyContent="center">
                <Typography> ¿Aún no tienes una cuenta? <Link href="#">Registrarse </Link> </Typography>
          </Box>

        </Box>
      </Grid>
    </>
  );
};
