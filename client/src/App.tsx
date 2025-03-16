import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { getTokens } from "./utils/auth-util"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import MyCourse from "./pages/MyCourses/MyCourse";
import CourseCatalog from "./pages/CourseCatalog/CourseCatalog";

function App() {
  const [accessToken, setAccessToken ] = useState<string | null>(getTokens().accessToken);

  useEffect(() => {
    const handleStorageChange = () => {
      setAccessToken(getTokens().accessToken);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={!accessToken ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!accessToken ? <Register /> : <Navigate to='/dashboard' />} />
        <Route path="/dashboard" element={accessToken ? <Dashboard /> : <Navigate to='/login' />} />
        <Route path="/courses" element={accessToken ? <MyCourse /> : <Navigate to ="/login" />} />
        <Route path="/catalog" element={accessToken ? <CourseCatalog /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
