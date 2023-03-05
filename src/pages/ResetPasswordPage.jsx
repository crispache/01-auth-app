import { useTheme } from "@emotion/react";
import { ArrowBack, Key } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export const ResetPasswordPage = () => {
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
        }}
      >
        <Box
          display="inline-block"
          sx={{
            width: 530,
            minHeight: 600,
            padding: 5,
          }}
        >
          <Box
            sx={{
              width: 15,
              height: 15,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              margin: "0 auto",
              background: "#516b7540",
            }}
          >
            <Key
              color={theme.palette.primary.light}
              sx={{ textAlign: "center", fontSize: 45 }}
            ></Key>
          </Box>

          <Typography
            variant="h4"
            textAlign="center"
            sx={{ mt: 2, fontSize: "1.8rem" }}
          >
            Restablece tu contraseña
          </Typography>

          <Typography textAlign="center" sx={{ mt: 2, fontSize: "0.95rem" }}>
            No te preocupes, recuperar tu cuenta es fácil y rápido. Ingresa tu
            correo electrónico para recuperar tu contraseña.
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
                  Restablecer contraseña
                </Button>
              </Grid>

              <Grid item xs={12} sx={{ mt: 5, textAlign: "center" }}>
                <Button
                  variant="text"
                  color="primary"
                  startIcon={<ArrowBack />}
                >
                  Volver atrás
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </>
  );
};
