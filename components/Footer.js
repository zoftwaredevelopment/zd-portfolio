export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="/" className="logo">
            Zoftware<span>Development</span>
          </a>
          <p className="footer-note">Custom websites & online stores for Ottawa businesses.</p>
        </div>
        <div className="footer-contact">
          <p><strong>Email:</strong> <a href="mailto:zoftwaredevelopment@yahoo.com">zoftwaredevelopment@yahoo.com</a></p>
          <p><strong>Location:</strong> Remote / Ottawa, Canada</p>
          <div className="socials">
            <a href="https://x.com/mishaelwilcox" target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
            <a href="https://www.linkedin.com/in/mishaelwilcox" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">In</a>
            <a href="https://www.instagram.com/zoftwaredevelopment" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          </div>
        </div>
        <div className="footer-copy">
          <p>&copy; <span id="year"></span> Zoftware Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
