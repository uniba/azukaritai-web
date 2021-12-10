import Head from 'next/head'

export default function About() {
  return (
    <section>
      <Head>
        <title>ABOUT US - Azukaritai</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/img/azukaritai_favicon.png" />
      </Head>

      <article className="center">
        <h3>ABOUT US</h3>
        <h2>あなたのオンラインビジネスに伴走するエンジニアチーム、<br />準備できています。</h2>
        <p className="message">
          新しいビジネスやサービスの立ち上げ、立ち上げた後の運用において成長を加速させていく上で、
          優秀なエンジニアチームは必要不可欠です。
          私たち Azukaritai は、内製のエンジニアチームのように、御社のビジネスのことを一緒に考えながら成長を目指す、エンジニアチームを、ニーズに合わせて作り上げ提供するサービスを提供します。
        </p>
      </article>

      <article className="center">
        <h3>チームが重視する行動・価値観</h3>
        <ul className="values">
          <li>徹底した自動化</li>
          <li>計測による定量評価</li>
          <li>長期的な視点</li>
          <li>属人化の排除</li>
          <li>コードによる解決</li>
          <li>レビュープロセスによる学習</li>
          <li>チームとしての学習</li>
          <li>多様なバックグラウンドを持ったメンバーによる協業</li>
        </ul>
      </article>

      <article className="center"> 
        <h3>チームメンバー</h3>
        <nav>
          <ul className="member">
            <li><img src="img/jun.png" className="member" /></li>
            <li><h4>小松 純 Jun Komatsu</h4></li>
            <p>さまざまなサービスの成長に貢献していけるよう、チームを盛り上げていきたいと思います。<br />よろしくお願いします。</p>
          </ul>
          <ul className="member">
            <li><img src="img/keiichi.png" className="member" /></li>
            <li><h4>谷藤 圭一 Keiichi Tanifuji</h4></li>
            <p>「半歩先の理解」をモットーに、QA領域のサポートを中心に活動していきます。</p>
          </ul>
          <ul className="member">
            <li><img src="img/satoshi.png" className="member" /></li>
            <li><h4>望月 聡 Satoshi Mochizuki</h4></li>
            <p>お客様と連携して常にアップデートし続けたいです。</p>
          </ul>
          <ul className="member">
            <li><img src="img/caz.jpg" className="member" /></li>
            <li><h4>村穂 紀成 Cazunari Muraho</h4></li>
            <p>人間のフレキシビリティを支える堅牢なプロダクト作りに貢献したいです。</p>
          </ul>
          <ul className="member">
            <li><h3>Azukaritaiは新たなメンバーを募集しています。</h3></li>
            <h2><a href="careers.html">採用情報を見る</a></h2>
          </ul>
        </nav>
      </article>
    </section>
  )
}
