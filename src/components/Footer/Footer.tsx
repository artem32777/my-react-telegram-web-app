import './footer.css'


function Footer() {

  return (
      <>
        <footer>
          © Buddler 2024
          <div className="footer__socials">
            <a href="https://www.linkedin.com/company/buddler-com/" target="_blank" title="Linkedin">
              <img src="https://buddler.com/wp-content/uploads/2023/11/Linkedin-min.svg" width="20" height="20"
                   alt="Linkedin"/>
            </a>
            <a href="https://twitter.com/Buddler_com" target="_blank" title="X">
              <img src="https://buddler.com/wp-content/uploads/2023/11/twitter.svg" width="20" height="20"
                   loading="lazy" alt="X"/>
            </a>
          </div>
        </footer>
      </>
  )
}

export default Footer