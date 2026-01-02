import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ValuesPage from './pages/ValuesPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/values" element={<ValuesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
