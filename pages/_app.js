import '../styles/globals.css'

function AzukaritaiWeb({ Component, pageProps }) {
  return (
    <div className="container">
      <header className="site-title">
        <a href="/">
          <img src="/img/logo1.png" alt="" />
        </a>
      </header>
      
      <nav className="header">
        <ul>
          <li><a href="about">ABOUT US</a></li>
          <li><a href="service">SERVICE</a></li>
          <li><a href="careers">CAREERS</a></li>
          <li><a href="https://form.asana.com?k=ggLvwV5Jy4v6e9WhagMCjg&d=10976309821910" target="_blank">CONTACT</a></li>
          <li><a href="https://note.com/azukaritai"target="_blank">BLOG(note)</a></li>
        </ul>
      </nav>
      <Component {...pageProps} />

      <article className="footer">
        <nav>
          <ul>
            <li><a href="about">ABOUT US</a></li>
            <li><a href="service">SERVICE</a></li>
            <li><a href="careers">CAREERS</a></li>
            <li><a href="https://form.asana.com?k=ggLvwV5Jy4v6e9WhagMCjg&d=10976309821910">CONTACT</a></li>
            <li><a href="https://note.com/azukaritai"target="_blank">BLOG(note)</a></li>
          </ul>
        </nav>
      </article>

      <footer>
        <a href="https://uniba.jp/" target="_blank">
          <img className="footer" src="/img/footer.png" />
        </a>
      </footer>
    </div>
  )
}

export default AzukaritaiWeb
