import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Header() {
  return (
    <header>
      <div className="c-site-logo">
        <Link href="/">
          <a>
            <img src="/img/logo1.png" alt="" />
          </a>
        </Link>
      </div>
      <Navbar />
    </header>
  )
}
