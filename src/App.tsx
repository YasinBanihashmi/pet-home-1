import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Products from "./pages/Products"
import Gallery from "./pages/Gallery"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
     <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </Layout>
    </>
  )
}

export default App
