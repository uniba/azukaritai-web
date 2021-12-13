import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Head>
        <title>Azukaritai</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/img/azukaritai_favicon.png" />
      </Head>

      <figure className="main">
        <img src="img/azukaritai_main.png" alt="" />
      </figure>
      
      <section>
        <article className="center">
          <h2>あなたのオンラインビジネスに伴走するエンジニアチーム、<br />準備できています。</h2>
          <p className="message">
            新しいビジネスやサービスの立ち上げ、立ち上げた後の運用において成長を加速させていく上で、
            優秀なエンジニアチームは必要不可欠です。
            私たち Azukaritai は、内製のエンジニアチームのように、御社のビジネスのことを一緒に考えながら成長を目指す、エンジニアチームを、ニーズに合わせて作り上げ提供するサービスを提供します。
          </p>
          <h2>
            <Link href="/about">Read more</Link>
          </h2>
        </article>
        
        <article className="center">
          <h3>SERVICE</h3>
          <figure>
            <img className="service" src="img/service.png" alt="" />
          </figure>
          <p className="message">
            プロダクト・サービスの継続的な運用の中で得られる気づきを踏まえて、プロダクトを積極的に変化させていくことがオンラインビジネスの成功には不可欠です。Azukaritai では、SCRUM開発チーム、自動化されたE2EテストをベースにしたQA、モニタリングと徹底した自動化をベースにしたSREと中心に、ビジネスの継続的な成長を実現するエンジニアリングチームを丸ごと提供します。
          </p>
          <h2>
            <Link href="/service">Read more</Link>
          </h2>
        </article>
        
        <article className="center">
          <h3>CONTACT</h3>
          <p>お気軽にお問い合わせ下さい。</p>
          <h2>
            <Link href="https://form.asana.com?k=ggLvwV5Jy4v6e9WhagMCjg&d=10976309821910" target="_blank" rel="noreferrer">Read more</Link>
          </h2>
        </article>
      </section>
    </>    
  )
}
