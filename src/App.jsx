import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayouts from "./components/layouts/UserLayouts";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Wallet from "./components/pages/Wallet";
import Account from "./components/pages/Account";
import PrivateRoute from "./components/routes/PrivateRoute";
import ActivityPage from "./components/pages/ActivityPage";
import Deposit from "./components/pages/Deposit";
import MinimalLayout from "./components/layouts/MinimalLayout";
import Withdraw from "./components/pages/Withdraw";
import ForgotPassword from "./components/pages/password/ForgotPassword";
import ResetPassword from "./components/pages/password/ResetPassword";
import RequestResetCode from "./components/pages/changePassword/RequestResetCode";
import VerifyResetCode from "./components/pages/changePassword/VerifyResetCode";
import Lottery from "./components/pages/Lottery";
import NewGame from "./components/pages/NewGame";
import Mine from "./components/pages/Mine";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Routes that use UserLayouts (with Header/Footer) */}
        <Route path="/" element={<UserLayouts />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Private Routes WITH Header/Footer */}
          <Route
            path="wallet"
            element={
              <PrivateRoute>
                <Wallet />
              </PrivateRoute>
            }
          />
          <Route
            path="account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
          <Route
            path="activity"
            element={
              <PrivateRoute>
                <ActivityPage />
              </PrivateRoute>
            }
          />
          <Route
            path="lottery"
            element={
              <PrivateRoute>
                {/* <Lottery/> */}
                <NewGame/>
              </PrivateRoute>
            }
          />
          <Route
            path="mine"
            element={
              <PrivateRoute>
                {/* <Lottery/> */}
                <Mine/>
              </PrivateRoute>
            }
          />
        </Route>





        {/* ✅ Minimal Layout (no header/footer) for special pages */}
        <Route path="/wallet" element={<MinimalLayout />}>
          <Route
            path="deposit"
            element={
              <PrivateRoute>
                <Deposit />
              </PrivateRoute>
            }
          />
          <Route
            path="withdraw"
            element={
              <PrivateRoute>
                <Withdraw />
              </PrivateRoute>
            }
          />
        </Route>

        {/* ✅ Public Routes for Password Reset */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />



          // PASSWORD RESET BY CODE METHOD    
        <Route path="/request-reset-code" element={<RequestResetCode />} />
        <Route path="/verify-reset-code" element={<VerifyResetCode />} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
