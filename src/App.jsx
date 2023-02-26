/* import { AppRouter } from "./router/AppRouter" */
// TODO: CONFIGURAR ROUTES
import { AppTheme } from "./theme"
import { LoginPage } from "./pages/LoginPage"

export const App = () => {
  return (
    <AppTheme>
       {/*  <AppRouter/> */}
       <LoginPage/>
    </AppTheme>
  )
}
