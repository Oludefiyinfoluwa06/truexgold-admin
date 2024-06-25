import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgetPassword from "./pages/ForgetPassword";
import ForgetPassword1 from "./pages/ForgetPassword1";
import Dashboard from "./pages/Dashboard";
import TransactionMonitoring from "./pages/TransactionMonitoring";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/forget-password":
        title = "";
        metaDescription = "";
        break;
      case "/forget-password1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/transaction-monitoring":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/forget-password1" element={<ForgetPassword1 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/transaction-monitoring"
        element={<TransactionMonitoring />}
      />
    </Routes>
  );
}
export default App;
