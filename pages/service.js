import Head from 'next/head'

import ContactLink from '../components/ContactLink'

export default function Service() {
  return (
    <>
      <Head>
        <title>SERVICE - Azukaritai</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/img/azukaritai_favicon.png" />
        <meta name="description" content="新しいビジネスやサービスの立ち上げ、立ち上げた後の運用において成長を加速させていく上で、 優秀なエンジニアチームは必要不可欠です。 私たち Azukaritai は、内製のエンジニアチームのように、御社のビジネスのことを一緒に考えながら成長を目指す、エンジニアチームを、ニーズに合わせて作り上げ提供するサービスを提供します。" />
        <meta property="og:url" content="https://azukaritai.com/service" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="SERVICE - Azukaritai" />
        <meta property="og:description" content="新しいビジネスやサービスの立ち上げ、立ち上げた後の運用において成長を加速させていく上で、 優秀なエンジニアチームは必要不可欠です。 私たち Azukaritai は、内製のエンジニアチームのように、御社のビジネスのことを一緒に考えながら成長を目指す、エンジニアチームを、ニーズに合わせて作り上げ提供するサービスを提供します。" />
        <meta property="og:site_name" content="azukaritai.com" />
        <meta property="og:image" content="https://www.azukaritai.com/img/azukaritai_main.png" />
      </Head>

      <section className="p-service">
        <div className="p-section">
          <h3 className="p-section__title--two">SERVICE</h3>
          <figure className="p-section__graph">
            <img className="service" src="img/az_service.png" alt="SERVICE" />
          </figure>
          <p className="p-section__explanation--two">
            プロダクト・サービスの継続的な運用の中で得られる気づきを踏まえて、プロダクトを積極的に変化させていくことが
            オンラインビジネスの成功には不可欠です。Azukaritai では、SCRUM開発チーム、自動化されたE2EテストをベースにしたQA、
            モニタリングと徹底した自動化をベースにしたSREと中心に、ビジネスの継続的な成長を実現するエンジニアリングチームを丸ごと提供します。
          </p>
        </div>
        <div className="p-service__icon-one">
          <img src="img/az_toolbox.png" alt="" />
        </div>
        <div className="p-section p-section__sub-container">
          <h3 className="p-section__sub p-service__sub-heding">
            <img src="img/az_hummer.png" alt="プロダクト継続保守開発" />
            プロダクト継続保守開発
          </h3>
          <p className="p-section__text">
            アジャイル開発手法のひとつであるSCRUM開発の方法論を取り入れた開発チームを構成し、プロダクトの課題解決に取り組みます。
            一定の期間内に、定められた成果物を構築する開発プロジェクトと異なり、Azukaritaiではサービス・プロダクトを
            継続的に運用しながら、その運用を省力化・安定化させたり、把握した問題の解消、既存機能の改善、新機能の追加開発など、
            さまざまなタスクに同時に取り組んでいきます。チームの人員規模や各課題の影響度、依存関係を考えながら、
            クライアントと一緒に課題の優先順位整理をしつつ、開発チームはそれぞれのタスクを進めていきます。
            また、継続的に運用していく上では、技術的負債のコントロールも重要になります。
            日々のタスクの中で少しずつリファクタリングを進めるなど意識して取り組みます。
          </p>
          <h3 className="p-section__sub p-service__sub-heding">
            <img src="img/az_pench.png" alt="QA エンジニアリングサービス" />
            QA エンジニアリングサービス
          </h3>
          <p className="p-section__text">
            ビジネスが成長すればするほど、システムの不具合や障害が発生した場合の影響は大きくなります。
            一方で、アジャイル開発の導入により、システムの改善や機能強化を行いながら頻繁に変更をリリースする場合には、
            変更によって新たな不具合が生じていないことを確認するQAのプロセスが非常に重要になります。Azukaritaiでは、
            mablなどの先進的な自動E2Eテストツールを活用し、リリースの度に繰り返し行うレグレッションテストを自動化することで、
            改善のスピードを損なわずに、十分なQAを行えるようにし、プロダクトの品質リスクへの解決策を提供します。
          </p>
          <h3 className="p-section__sub p-service__sub-heding">
            <img src="img/az_driver_2.png" alt="SRE サービス" />
            SRE サービス
          </h3>
          <p className="p-section__text">
            システム運用環境においても、ビジネスが成長しトランザクションが増えたり、外的な要因が変化していく中で、
            安定してサービスを提供し続けるためには、継続的なモニタリングと、状況に合わせた運用の改善が重要になります。
            サービスの提供状態及びインフラの内部指標の両方を監視しつつ、異常の兆候を掴みながら、問題が発生した場合も
            可能な限りユーザーに影響が及ぶ前に対処します。
          </p>
          <h3 className="p-section__sub p-service__sub-heding">
            <img src="img/az_driver.png" alt="契約形態・委託料" />
            契約形態・委託料
          </h3>
          <p className="p-section__text">
            Azukaritaiのエンジニアチームサービスは、3ヶ月単位で更新される準委任型業務委託契約を締結して提供させていただきます。<br />
            月額の委託料は、チームに参加するエンジニアの人数とそれぞれの稼働ボリュームで決まります。
          </p>
        </div>
      </section>
      <ContactLink />
    </>
  )
}
