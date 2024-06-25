
import './App.css'
import Logo from "./components/Logo/Logo.tsx";

import GoogleButton from "./components/GoogleButton/GoogleButton.tsx";
import SiteButton from "./components/SiteButton/SiteButton.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

  return (
      <>
        <header>
          <Logo/>
        </header>
        <main>
          <h1>Non technical SEO audit</h1>
          <p className="description">
            Google Search Console hides many valuable insights about your website. Buddler helps to find the most
            important of them — those which could bring maximum results with minimum effort
          </p>
          <p className="description">
            Login to start app or visit site
          </p>
          <div className="buttons">
            <GoogleButton/>
            <SiteButton/>
          </div>
          <div className="card">
          </div>
        </main>
        <Footer/>
      </>
  )
}

export default App