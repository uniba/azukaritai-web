import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Footer() {
  return (
    <footer>
      <Navbar />
      <Link href="https://uniba.jp/" target="_blank">
        <div className="c-footer-logo" >
          <img className="footer" src="/img/footer.png" />
        </div>
      </Link>
    </footer>
  )
}