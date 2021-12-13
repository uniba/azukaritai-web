import Link from 'next/link'
import '../styles/globals.css'

function AzukaritaiWeb({ Component, pageProps }) {
  return (
    <div className="container">
      <header className="site-title">
        <Link href="/">
          <img src="/img/logo1.png" alt="" />
        </Link>
      </header>
      
      <nav className="header">
        <ul>
          <li><Link href="/about">ABOUT US</Link></li>
          <li><Link href="/service">SERVICE</Link></li>
          <li><Link href="/careers">CAREERS</Link></li>
          <li><Link href="https://form.asana.com?k=ggLvwV5Jy4v6e9WhagMCjg&d=10976309821910" target="_blank" rel="noreferrer">CONTACT</Link></li>
          <li><Link href="https://note.com/azukaritai"target="_blank">BLOG(note)</Link></li>
        </ul>
      </nav>
      <Component {...pageProps} />

      <article className="footer">
        <nav>
          <ul>
            <li><Link href="/about">ABOUT US</Link></li>
            <li><Link href="/service">SERVICE</Link></li>
            <li><Link href="/careers">CAREERS</Link></li>
            <li><Link href="https://form.asana.com?k=ggLvwV5Jy4v6e9WhagMCjg&d=10976309821910" target="_blank" rel="noreferrer">CONTACT</Link></li>
            <li><Link href="https://note.com/azukaritai"target="_blank">BLOG(note)</Link></li>
          </ul>
        </nav>
      </article>

      <footer>
        <Link href="https://uniba.jp/" target="_blank">
          <img className="footer" src="/img/footer.png" />
        </Link>
      </footer>
    </div>
  )
}

export default AzukaritaiWeb
