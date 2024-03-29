import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage, ResetPasswordPage, NotFoundPage  } from "../pages"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Navigate to="/login" /> } /> 
            <Route path="login" element={ <LoginPage/>} />
            <Route path="register" element={ <RegisterPage/>} />
            <Route path="reset-password" element={ <ResetPasswordPage/>} />
            <Route path="*" element={ <NotFoundPage/>} />
        </Routes>
    </>
  )
}
