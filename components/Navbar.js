import Link from 'next/link';

function Navbar() {
  return (
    <nav className="c-global-nav">
      <ul>
        <li>
          <Link href="/about">
            <a>
              ABOUT US
            </a>
          </Link>
        </li>
        <li>
          <Link href="/service">
            <a>
              SERVICE
            </a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a>
              WORKS
            </a>
          </Link>
        </li>
        <li>
          <Link href="/careers">
            <a>
              CAREERS
            </a>
          </Link>
        </li>
        <li>
          <a href="https://forms.gle/zceqossRX6NnwY2X8" target="_blank" rel="noopener noreferrer">
            CONTACT
          </a>
        </li>
        <li>
          <a href="https://note.com/azukaritai" target="_blank" rel="noopener noreferrer">
            BLOG(note)
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
