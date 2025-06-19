import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TrackPage from "./pages/TrackPage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/track" element={<TrackPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;