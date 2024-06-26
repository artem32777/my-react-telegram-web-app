import './site-button.css'
import WebApp from "@twa-dev/sdk";

console.log(WebApp)

function SiteButton() {

  return (
      <>
        <a className="site-button"
        onClick={() => WebApp.openLink('https://buddler.com')}
        >
          Visit Buddler Site
        </a>
      </>
  )
}

export default SiteButton