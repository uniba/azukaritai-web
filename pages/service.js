import Head from 'next/head'
import Link from 'next/link'

export default function Service() {
  return (
    <section>
      <Head>
        <title>SERVICE - Azukaritai</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/img/azukaritai_favicon.png" />
      </Head>

      <article className="center">
        <h3>SERVICE</h3>
        <figure>
          <img className="service" src="img/service.png" alt="" />
        </figure>
        <p className="message">
          プロダクト・サービスの継続的な運用の中で得られる気づきを踏まえて、プロダクトを積極的に変化させていくことが
          オンラインビジネスの成功には不可欠です。Azukaritai では、SCRUM開発チーム、自動化されたE2EテストをベースにしたQA、
          モニタリングと徹底した自動化をベースにしたSREと中心に、ビジネスの継続的な成長を実現するエンジニアリングチームを丸ごと提供します。
        </p>
      </article>

      <article className="center">
        <h3>プロダクト継続保守開発</h3>
        <p className="message">
          アジャイル開発手法のひとつであるSCRUM開発の方法論を取り入れた開発チームを構成し、プロダクトの課題解決に取り組みます。
          一定の期間内に、定められた成果物を構築する開発プロジェクトと異なり、Azukaritaiではサービス・プロダクトを
          継続的に運用しながら、その運用を省力化・安定化させたり、把握した問題の解消、既存機能の改善、新機能の追加開発など、
          さまざまなタスクに同時に取り組んでいきます。チームの人員規模や各課題の影響度、依存関係を考えながら、
          クライアントと一緒に課題の優先順位整理をしつつ、開発チームはそれぞれのタスクを進めていきます。
          また、継続的に運用していく上では、技術的負債のコントロールも重要になります。
          日々のタスクの中で少しずつリファクタリングを進めるなど意識して取り組みます。
        </p>
        <h3>QA エンジニアリングサービス</h3>
        <p className="message">
          ビジネスが成長すればするほど、システムの不具合や障害が発生した場合の影響は大きくなります。
          一方で、アジャイル開発の導入により、システムの改善や機能強化を行いながら頻繁に変更をリリースする場合には、
          変更によって新たな不具合が生じていないことを確認するQAのプロセスが非常に重要になります。Azukaritaiでは、
          mablなどの先進的な自動E2Eテストツールを活用し、リリースの度に繰り返し行うレグレッションテストを自動化することで、
          改善のスピードを損なわずに、十分なQAを行えるようにし、プロダクトの品質リスクへの解決策を提供します。
        </p>
        <h3 className="message">SRE サービス</h3>
        <p className="message">
          システム運用環境においても、ビジネスが成長しトランザクションが増えたり、外的な要因が変化していく中で、
          安定してサービスを提供し続けるためには、継続的なモニタリングと、状況に合わせた運用の改善が重要になります。
          サービスの提供状態及びインフラの内部指標の両方を監視しつつ、異常の兆候を掴みながら、問題が発生した場合も
          可能な限りユーザーに影響が及ぶ前に対処します。
        </p>
      </article>
      <article className="center">
        <h3>契約形態・委託料</h3>
        <p className="message">
          Azukaritaiのエンジニアチームサービスは、3ヶ月単位で更新される準委任型業務委託契約を締結して提供させていただきます。<br />
          月額の委託料は、チームに参加するエンジニアの人数とそれぞれの稼働ボリュームで決まります。
        </p>
      </article>

      <article className="center">
        {/* <h2><Link href="https://form.asana.com?k=ggLvwV5Jy4v6e9WhagMCjg&d=10976309821910" target="_blank" rel="noreferrer">CONTACT</Link></h2> */}
      </article>
    </section>
  )
}
