/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Residential from './pages/Residential';
import PropertyDetail from './pages/PropertyDetail';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Residential />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/rent" element={<div className="pt-32 px-4 text-center h-[60vh]">Rent Section (Coming Soon)</div>} />
          <Route path="/commercial" element={<div className="pt-32 px-4 text-center h-[60vh]">Commercial Section (Coming Soon)</div>} />
          <Route path="/plots" element={<div className="pt-32 px-4 text-center h-[60vh]">Plots Section (Coming Soon)</div>} />
          <Route path="/new-projects" element={<div className="pt-32 px-4 text-center h-[60vh]">New Projects Section (Coming Soon)</div>} />
          <Route path="/blog" element={<div className="pt-32 px-4 text-center h-[60vh]">Blog Section (Coming Soon)</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

