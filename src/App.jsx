import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Solutions from './pages/Solutions/Solutions';
import Industries from './pages/Industries/Industries';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Insights from './pages/Insights/Insights';
import ArticlePage from './pages/Insights/ArticlePage';
import ClientsExperience from './pages/ClientsExperience/ClientsExperience';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import Company from './pages/Company/Company';
import Contact from './pages/Contact/Contact';
import Careers from './pages/Careers/Careers';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<ArticlePage />} />
              <Route path="/clients-experience" element={<ClientsExperience />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              {/* Additional routes will be added as we build pages */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;




