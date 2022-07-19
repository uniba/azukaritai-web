import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>ABOUT US - Azukaritai</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/img/azukaritai_favicon.png" />
      </Head>

      <section className="p-about">
        <div className="p-section">
          <h3 className="p-section__title--two">ABOUT US</h3>
          <h2 className="p-section__main-heading">
            あなたのオンラインビジネスに伴走するエンジニアチーム、
            <br className="p-section__main-heading-tab" />
            準備できています。
          </h2>
          <p className="p-section__explanation">
            新しいビジネスやサービスの立ち上げ、立ち上げた後の運用において成長を加速させていく上で、
            優秀なエンジニアチームは必要不可欠です。 私たち Azukaritai
            は、内製のエンジニアチームのように、御社のビジネスのことを一緒に考えながら成長を目指す、エンジニアチームを、ニーズに合わせて作り上げ提供するサービスを提供します。
          </p>
        </div>
        <div className="p-section--two">
          <h4 className="p-section__sub">チームが重視する行動・価値観</h4>
          <ul className="p-section__sub-lists">
            <li>徹底した自動化</li>
            <li>計測による定量評価</li>
            <li>長期的な視点</li>
            <li>属人化の排除</li>
            <li>コードによる解決</li>
            <li>レビュープロセスによる学習</li>
            <li>チームとしての学習</li>
            <li>多様なバックグラウンドを持ったメンバーによる協業</li>
          </ul>
        </div>
        <div className="p-about__member">
          <h4 className="p-about__mb-title">チームメンバー</h4>
          <div className="p-about__mb-container--odd">
            <div className="p-about__mb-image">
              <img src="img/az_jun.png" />
            </div>
            <p className="p-about__mb-name">
              <span> Jun Komatsu</span>
            </p>
            <p className="p-about__mb-intro">
              さまざまなサービスの成長に貢献していけるよう、チームを盛り上げていきたいと思います。よろしくお願いします。
            </p>
          </div>
          <div className="p-about__mb-container--even">
            <p className="p-about__mb-name">
              <span> Keiichi Tanifuji</span>
            </p>
            <p className="p-about__mb-intro">
              「半歩先の理解」をモットーに、QA領域のサポートを中心に活動していきます。
            </p>
            <div className="p-about__mb-image">
              <img src="img/az_keiichi.png" />
            </div>
          </div>
          <div className="p-about__mb-container--odd">
            <div className="p-about__mb-image">
              <img src="img/az_satoshi.png" />
            </div>
            <p className="p-about__mb-name">
              <span> Satoshi Mochizuki</span>
            </p>
            <p className="p-about__mb-intro">
              お客様と連携して常にアップデートし続けたいです。
            </p>
          </div>
          <div className="p-about__mb-container--even">
            <p className="p-about__mb-name">
              <span> Cazunari Muraho</span>
            </p>
            <p className="p-about__mb-intro">
              人間のフレキシビリティを支える堅牢なプロダクト作りに貢献したいです。
            </p>
            <div className="p-about__mb-image">
              <img src="img/az_caz.png" />
            </div>
          </div>
          {/* 
            <div className="p-about__mb-container--odd">
            <div className="p-about__mb-image"><img src="img/az_daichi.png" /></div>
            <p className="p-about__mb-name">佐藤 大地 /<span> Daichi Sato/</span><span>（卒業）</span></p>
            <p className="p-about__mb-intro">クライアントが直面する課題に取り組むために、システム運用の方からサポートさせていただきます。</p>
          </div>
          */}
          <div className="p-about__mb-container--odd">
            <div className="p-about__mb-image">
              <img src="img/az_andrii.png" />
            </div>
            <p className="p-about__mb-name">
              <span>Platonov Andrii</span>
            </p>
            <p className="p-about__mb-intro">
              I want to hone my understanding of the user&apos;s pain and search
              for ways to solve it.
            </p>
          </div>
          <div className="p-about__mb-container--even">
            <div className="p-about__mb-image">
              <img src="img/az_serhii.png" />
            </div>
            <p className="p-about__mb-name">
              <span>Montashevych Serhii</span>
            </p>
            <p className="p-about__mb-intro">
              I want to create cool applications, help people automatize
              processes, work with great people, write perfect code without
              bugs, and, of course, worldwide domination.
            </p>
          </div>
          <div className="p-about__mb-container--odd">
            <div className="p-about__mb-image">
              <img src="img/az_member_settingup.png" />
            </div>
            <p className="p-about__mb-name">
              <span>Jun Shirai</span>
            </p>
            <p className="p-about__mb-intro">準備中</p>
          </div>
        </div>
        <div className="p-about__careers-info">
          {/* <div className="p-about__careers-image">
            <img src="img/az_minirobot.png"/>
          </div> */}
          <h4 className="p-about__careers-title">
            Azukaritaiは新たなメンバーを募集しています。
          </h4>
          <div className="p-section__load-link">
            <Link href="/careers">採用情報を見る</Link>
          </div>
        </div>
      </section>
    </>
  )
}
