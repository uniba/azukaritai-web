import Head from 'next/head'
import Link from 'next/link'

import ContactLink from '../components/ContactLink'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Azukaritai</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/img/azukaritai_favicon.png" />
        <meta name="description" content="新しいビジネスやサービスの立ち上げ、立ち上げた後の運用において成長を加速させていく上で、 優秀なエンジニアチームは必要不可欠です。 私たち Azukaritai は、内製のエンジニアチームのように、御社のビジネスのことを一緒に考えながら成長を目指す、エンジニアチームを、ニーズに合わせて作り上げ提供するサービスを提供します。" />
        <meta property="og:url" content="https://azukaritai.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Azukaritai" />
        <meta property="og:description" content="新しいビジネスやサービスの立ち上げ、立ち上げた後の運用において成長を加速させていく上で、 優秀なエンジニアチームは必要不可欠です。 私たち Azukaritai は、内製のエンジニアチームのように、御社のビジネスのことを一緒に考えながら成長を目指す、エンジニアチームを、ニーズに合わせて作り上げ提供するサービスを提供します。" />
        <meta property="og:site_name" content="azukaritai.com" />
        <meta property="og:image" content="https://www.azukaritai.com/img/azukaritai_main.png" />
      </Head>

      <section>
        <div className="p-section">
          <figure className="p-section__firstview">
            <img src="img/azukaritai_main.png" alt="Azukaritai top image" />
          </figure>
          <h2 className="p-section__main-heading">あなたのオンラインビジネスに伴走するエンジニアチーム、<br className="p-section__main-heading-tab" />準備できています。</h2>
          <p className="p-section__explanation">
            新しいビジネスやサービスの立ち上げ、立ち上げた後の運用において成長を加速させていく上で、
            優秀なエンジニアチームは必要不可欠です。
            私たち Azukaritai は、内製のエンジニアチームのように、御社のビジネスのことを一緒に考えながら成長を目指す、エンジニアチームを、ニーズに合わせて作り上げ提供するサービスを提供します。
          </p>
          <div className="p-section__load-link">
            <Link href="/about">Read more</Link>
          </div>
        </div>
        <div className="p-section">
          <h3 className="p-section__title">SERVICE</h3>
          <figure className="p-section__graph">
            <img src="img/az_service.png" alt="" />
          </figure>
          <p className="p-section__explanation--two">
            プロダクト・サービスの継続的な運用の中で得られる気づきを踏まえて、プロダクトを積極的に変化させていくことがオンラインビジネスの成功には不可欠です。Azukaritai では、SCRUM開発チーム、自動化されたE2EテストをベースにしたQA、モニタリングと徹底した自動化をベースにしたSREと中心に、ビジネスの継続的な成長を実現するエンジニアリングチームを丸ごと提供します。
          </p>
          <div className="p-section__load-link">
            <Link href="/service">Read more</Link>
          </div>
        </div>
      </section>
      <ContactLink />
    </div>
  )
}
