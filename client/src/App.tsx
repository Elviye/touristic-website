import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageWrapper } from './components/layout/PageWrapper'
import { AghmatPage } from './pages/AghmatPage'
import { ContactPage } from './pages/ContactPage'
import { GalleryPage } from './pages/GalleryPage'
import { HomePage } from './pages/HomePage'
import { LallaTakerkoust } from './pages/LallaTakerkoust'
import { RegionPage } from './pages/RegionPage'
import { SustainablePage } from './pages/SustainablePage'

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/region" element={<RegionPage />} />
          <Route path="/lalla-takerkoust" element={<LallaTakerkoust />} />
          <Route path="/aghmat" element={<AghmatPage />} />
          <Route path="/sustainable-tourism" element={<SustainablePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  )
}

export default App
