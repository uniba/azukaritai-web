import Navbar from '../components/Navbar'

export default function Footer() {
  return (
    <footer>
      <Navbar />
      <a href="https://uniba.jp/" target="_blank" rel="noopener noreferrer">
        <div className="c-footer-logo" >
          <img className="footer" src="/img/footer.png" />
        </div>
      </a>
    </footer>
  )
}
