import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ValuesPage from './pages/ValuesPage';
import ContactPage from './pages/ContactPage';
import Legal from './pages/Legal';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/values" element={<ValuesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
