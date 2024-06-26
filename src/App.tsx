import './App.css'
import Logo from "./components/Logo/Logo.tsx";
import Footer from "./components/Footer/Footer.tsx";
import WebApp from "@twa-dev/sdk";


// const appState = {
//   previousPage: ''
// };
//
// // Function to setup the back button behavior
// function setupBackButton() {
//
//   WebApp.BackButton.show()
//   WebApp.BackButton.onClick(() => {
//     if (appState.previousPage) {
//       window.location.href = appState.previousPage;
//     } else {
//       window.history.back();
//     }
//   });
//
//   appState.previousPage = document.referrer || ''; // Store the referrer or any specific previous page URL
// }
//
// // Call the setup function to initialize the back button behavior
// setupBackButton();


function App() {

  return (
      <>
        <header>
          <Logo/>
        </header>
        <main>
          <div className="info">
            <h1>Non technical SEO audit</h1>
            <p className="description">
              Google Search Console hides many valuable insights about your website. Buddler helps to find the most
              important of them — those which could bring maximum results with minimum effort
            </p>
          </div>
          <div className="buttons">
            <a className="site-button"
               onClick={() => WebApp.openLink('https://app.buddler.com')}
            >
              Start App
            </a>
            <a className="site-button"
               onClick={() => WebApp.openLink('https://buddler.com')}
            >
              Visit Site
            </a>
          </div>
        </main>
        <Footer/>
      </>
  )
}

export default App