import Link from 'next/link';

function Navbar() {
  return (
    <nav className="c-global-nav">
      <ul>
        <li>
          <Link href="/pages/about.js">
            <a>
              ABOUT US
            </a>
          </Link>
        </li>
        <li>
          <Link href="/pages/service.js">
            <a>
              SERVICE
            </a>
          </Link>
        </li>
        <li>
          <Link href="/pages/careers.js">
            <a>
              CAREERS
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://form.asana.com?k=ggLvwV5Jy4v6e9WhagMCjg&d=10976309821910" target="_blank" rel="noreferrer">
            <a>
              CONTACT
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://note.com/azukaritai" target="_blank">
            <a>
              BLOG(note)
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
