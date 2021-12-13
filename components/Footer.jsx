import Link from 'next/link'

function Footer() {
  return (
    <footer>
      <Link href="https://uniba.jp/" target="_blank">
        <div className="c-footer-logo" >
          <img className="footer" src="/img/footer.png" />
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
