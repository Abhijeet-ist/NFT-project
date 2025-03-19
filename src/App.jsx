import Artworks from "./components/Artworks"
import CreateNFT from "./components/CreateNFT"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Transactions from "./components/Transactions"


const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks />
      <Transactions />
      <Footer />
      <CreateNFT />
    </div>
  )
}

export default App
