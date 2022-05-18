import Head from 'next/head'
import Link from 'next/link'

export default function Works() {
  return (
    <>
      <Head>
        <title>WORKS - Azukaritai</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/img/azukaritai_favicon.png" />
      </Head>

      <section className="p-about">
        <div className="p-section">
          <h3 className="p-section__title--two">WORKS</h3>
        </div>
        <div className="p-about__work">
          <div className="p-about__mb-container--odd">
            <div className="p-about__mb-image"><img src="img/shinkenchiku-works.png" /></div>
            <p className="p-about__mb-name">新建築 WEBサービス</p>
            <p className="p-about__mb-intro">株式会社新建築社が運用する<a href="https://id.shinkenchiku.online/">『新建築ID』</a><a href="https://compe.shinkenchiku.online/">『新建築コンペ』</a><a href="https://shinkenchiku.online/">『新建築オンライン』</a>。株式会社新建築データが運用する<a href="https://data.shinkenchiku.online/">『新建築データ』</a>。これらのサービスの運用と改修業務に取り組んでいます。新規開発を得意とする<a href="https://z-1.works/">Z1</a>チームと連携し、開発と運用の両面からクライアントのビジネスをサポートしています。</p>
          </div>
        </div>
        <div className="p-about__careers-info">
          {/* <div className="p-about__careers-image">
            <img src="img/az_minirobot.png"/>
          </div> */}
          <h4 className="p-about__careers-title">
            案件のご相談はこちらから
          </h4>
          <div className="p-section__load-link">
            <Link href="/careers">
              CONTACT
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
