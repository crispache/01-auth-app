/* import { AppRouter } from "./router/AppRouter" */
// TODO: CONFIGURAR ROUTES
import { AppTheme } from "./theme"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage  } from "./pages/RegisterPage"

export const App = () => {
  return (
    <AppTheme>
       {/*  <AppRouter/> */}
       <RegisterPage/>
    </AppTheme>
  )
}
