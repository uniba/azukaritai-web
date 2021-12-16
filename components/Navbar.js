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
          <Link href="/careers">
            <a>
              CAREERS
            </a>
          </Link>
        </li>
        <li>
          <a href="https://form.asana.com?k=ggLvwV5Jy4v6e9WhagMCjg&d=10976309821910" target="_blank" rel="noopener noreferrer">
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
