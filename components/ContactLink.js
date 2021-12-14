import Link from 'next/link'

export default function contactLink() {
  return (
    <div className="p-contact-info">
      <h3 className="p-contact-info__title">CONTACT</h3>
      <p className="p-contact-info__text">お気軽にお問い合わせ下さい。</p>
      <div className="p-contact-info__load-link">
        <Link href="https://form.asana.com?k=ggLvwV5Jy4v6e9WhagMCjg&d=10976309821910" target="_blank" rel="noreferrer">Read more</Link>
      </div>
    </div>
  )
}
