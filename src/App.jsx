
import MainPage from "./components/MainPage"
import Catalog from "./components/Catalog"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Faq from "./components/Faq"
import Wishlist from "./components/Wishlist"
import ProductPage from "./components/ProductPage"

import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
