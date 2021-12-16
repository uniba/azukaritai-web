import Head from 'next/head'

import ContactLink from '../components/ContactLink'

export default function Careers() {
  return (
    <>
      <Head>
        <title>CAREERS - Azukaritai</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/img/azukaritai_favicon.png" />
      </Head>

      <section className="p-careers">
        <div className="p-section">
          <h3 className="p-section__title--two">CAREERS</h3>
          <p className="p-section__explanation">
            Azukaritaiでは、一緒にクライアントのプロダクトを育てていくメンバーを常時募集しています。
            興味を持っていただける方は、お気軽にご連絡ください。
          </p>
        </div>
        <div className="p-careers__container">
          <h4 className="p-careers__position">アカウントマネージャー(ミドル)</h4>
          <p className="p-careers__subtitle">期待される責務</p>
          <ul>
            <li>クライアントのビジネスを的確に理解し、解決すべきクライアントの課題の整理をサポートする</li>
            <li>新規クライアントの引き合い対応、予算調整、契約実務</li>
          </ul>
          <p className="p-careers__subtitle">必要なスキル・経験</p>
          <ul>
            <li>Web技術 / IT技術全般についての知識</li>
            <li>論理的な思考を行い、他者とのコミュニケーションをリードするスキル</li>
            <li>プロジェクトマネジメント全般についての経験・スキル</li>
          </ul>
          <p className="p-careers__subtitle">報酬</p>
          <ul>
            <li>月額 30万円〜</li>
          </ul>
          <p className="p-careers__subtitle">契約形態</p>
          <ul>
            <li>正社員(3ヶ月間の試用期間の間は契約社員)</li>
          </ul>
        </div>
        <div className="p-careers__container">
          <h4 className="p-careers__position">アプリケーションエンジニア・SRE(ミドル)</h4>
          <p className="p-careers__subtitle">期待される責務</p>
          <ul>
            <li>クライアントのビジネスを的確に理解し、エンジニアリングスキルを用いてその課題の解決を提供する</li>
            <li>JavaScript (React / Node.js) あるいは Ruby on Rails ベースのアプリケーションの新規開発及び保守開発</li>
            <li>サービスの運用に必要なクラウドインフラ環境の構築・保守</li>
          </ul>
          <p className="p-careers__subtitle">必要なスキル・経験</p>
          <ul>
            <li>JavaScript (React / Node.js) または Ruby on Rails でのアプリケーション開発の経験及びスキル</li>
            <li>クラウドベースのインフラ環境 (AWSなど) についての全般的な知識・経験</li>
          </ul>
          <p className="p-careers__subtitle">報酬</p>
          <ul>
            <li>月額 30万円〜</li>
          </ul>
          <p className="p-careers__subtitle">契約形態</p>
          <ul>
            <li>正社員(3ヶ月間の試用期間の間は契約社員)</li>
          </ul>
        </div>
      </section>
      <ContactLink />
    </>
  )
}
