import Link from 'next/link';

function Header() {
  return (
    <header>
      <Link href="/">
        <a>
          <div className="c-site-logo">
            <img src="/img/logo1.png" alt="" />
          </div>
        </a>
      </Link>
    </header>
  )
}

export default Header;
