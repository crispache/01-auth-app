import { useTheme } from "@emotion/react";
import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

export const NotFoundPage = () => {
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
        margin="0 auto"
        maxWidth={{
          xl: 1200,
          lg: 960,
          md: 960,
          sm: 480,
          xs: 480,
        }}
        sx={{
          height: "100vh",
        }}
      >
        <Box
          display="inline-block"
          sx={{
            width: "100%",
            minHeight: 600,
            padding: 1,
            backgroundColor: "white",
          }}
        >
          <Grid
            container
            direction="row"
            height="100%"
            sx={{
              marginTop: 3,
              padding: 2,
            }}
          >
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }} className="animate__animated animate__fadeIn">
              <Typography variant="h3" textAlign="left" sx={{ mt: 2 }}>
                ¡Ups!
              </Typography>
              <Typography variant="h4" textAlign="left" sx={{ mt: 2 }}>
                Página no encontrada
              </Typography>
              <Typography textAlign="left" sx={{ mt: 2 }}>
                Lo sentimos, la página que buscas no está disponible. Sint sint
                qui nisi mollit sunt tempor anim veniam voluptate. Sint sint qui
                nisi mollit sunt tempor anim veniam voluptate.
              </Typography>
              <Button
                component={ RouterLink }
                to="/login"
                variant="contained"
                size="large"
                color="secondary"
                sx={{
                  height: 50,
                  fontFamily: "Open Sans",
                  fontWeight: 500,
                  fontSize: "15px",
                  mt: 3,
                  ":hover": { background: theme.palette.secondary.light },
                }}
                startIcon={<ArrowBack />}
              >
                Volver atrás
              </Button>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }} className="animate__animated animate__zoomIn">
              <img
                src="/src/assets/404-error.svg"
                alt="Imagen de un astronauta con un 404"
                height={550}
                width="100%"
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
