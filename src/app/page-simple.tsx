import { SimpleCard, SimpleButton } from "@/components/SimpleCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Claude Code
            <span className="text-blue-600 block">マスター講座</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AnthropicのClaude Codeを使いこなして、AI時代のプログラミングスキルを身につけよう
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <SimpleButton>今すぐ申し込む</SimpleButton>
            <SimpleButton variant="secondary">詳細を見る</SimpleButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <SimpleCard>
              <div className="text-3xl font-bold text-blue-600 mb-2">実践重視</div>
              <p className="text-gray-600">
                実際のプロジェクトで使える実践的なスキルを習得
              </p>
            </SimpleCard>
            
            <SimpleCard>
              <div className="text-3xl font-bold text-blue-600 mb-2">初心者OK</div>
              <p className="text-gray-600">
                プログラミング未経験者も安心して学習できる
              </p>
            </SimpleCard>
            
            <SimpleCard>
              <div className="text-3xl font-bold text-blue-600 mb-2">24時間</div>
              <p className="text-gray-600">
                いつでもどこでも自分のペースで学習
              </p>
            </SimpleCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Claude Codeで変わる
              <span className="text-blue-600 block">プログラミングの世界</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AIの力を借りて、より効率的で創造的なプログラミングを実現しましょう
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Claude Codeとは？", icon: "🤖", desc: "AIを活用した革新的な開発ツール" },
              { title: "ファイル操作の自動化", icon: "📁", desc: "複数ファイルの編集を自動化" },
              { title: "コード品質の向上", icon: "✨", desc: "ベストプラクティスに従ったコード" },
              { title: "学習効率の最大化", icon: "📚", desc: "AIがコードを説明・改善提案" },
              { title: "チーム開発の強化", icon: "👥", desc: "一貫したコーディングスタイル" },
              { title: "将来性のあるスキル", icon: "🚀", desc: "AI時代のプログラミングスキル" }
            ].map((feature, index) => (
              <SimpleCard key={index} className="hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.desc}</p>
              </SimpleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              体系的な学習
              <span className="text-blue-600 block">カリキュラム</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              初心者から上級者まで、段階的にスキルアップできる構成になっています
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                module: "モジュール 1",
                title: "Claude Code 基礎",
                duration: "2時間",
                level: "初級",
                topics: ["Claude Codeの概要と特徴", "インストールと初期設定", "基本的なコマンドの使い方", "ファイル操作の基本"]
              },
              {
                module: "モジュール 2", 
                title: "実践的なコード生成",
                duration: "3時間",
                level: "初級",
                topics: ["自然言語でのコード生成", "コードの説明と理解", "バグ修正とデバッグ", "コードリファクタリング"]
              },
              {
                module: "モジュール 3",
                title: "プロジェクト管理",
                duration: "4時間", 
                level: "中級",
                topics: ["複数ファイルの同時編集", "プロジェクト構造の最適化", "テストコードの自動生成", "ドキュメント作成"]
              },
              {
                module: "モジュール 4",
                title: "チーム開発での活用",
                duration: "3時間",
                level: "中級", 
                topics: ["コードレビューの効率化", "一貫したコーディングスタイル", "CI/CDパイプラインとの連携", "チームでのベストプラクティス"]
              },
              {
                module: "モジュール 5",
                title: "高度なテクニック",
                duration: "4時間",
                level: "上級",
                topics: ["カスタムプロンプトの作成", "API連携とデータ処理", "パフォーマンス最適化", "セキュリティ考慮事項"]
              },
              {
                module: "モジュール 6",
                title: "実践プロジェクト",
                duration: "6時間",
                level: "上級",
                topics: ["Webアプリケーションの開発", "API開発とテスト", "デプロイメントの自動化", "総合的なプロジェクト完成"]
              }
            ].map((item, index) => (
              <SimpleCard key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <p className="text-blue-600 font-semibold mb-1">{item.module}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <div className="flex gap-4 items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.level === '初級' ? 'bg-green-100 text-green-800' :
                      item.level === '中級' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.level}
                    </span>
                    <span className="text-gray-500">{item.duration}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-600">{topic}</span>
                    </li>
                  ))}
                </ul>
              </SimpleCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <SimpleCard className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                総学習時間: 22時間
              </h3>
              <p className="text-gray-600 mb-6">
                実践的なハンズオン形式で、すぐに業務で活用できるスキルを身につけられます
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ハンズオン形式</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">実践プロジェクト</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">修了証発行</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">質問サポート</span>
              </div>
            </SimpleCard>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              受講メリット
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Claude Code講座で得られる具体的なメリットをご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: "💰",
                title: "投資対効果",
                description: "業務効率化により月数万円の価値創出が期待できます"
              },
              {
                icon: "⏰", 
                title: "時間短縮",
                description: "開発時間を50%以上短縮し、より創造的な作業に集中"
              },
              {
                icon: "📈",
                title: "キャリアアップ",
                description: "AI時代に必要なスキルを習得し、市場価値を向上"
              },
              {
                icon: "🎯",
                title: "即戦力化",
                description: "学習後すぐに業務で活用できる実践的なスキル"
              }
            ].map((benefit, index) => (
              <SimpleCard key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </SimpleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              料金プラン
            </h2>
            <p className="text-xl text-gray-600">
              あなたの学習スタイルに合わせて最適なプランをお選びください
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "ベーシック", 
                price: "19,800", 
                desc: "Claude Codeの基本を学びたい方におすすめ",
                features: [
                  "モジュール1-3（9時間）",
                  "基本的なハンズオン演習", 
                  "30日間のメールサポート",
                  "修了証発行",
                  "永続アクセス"
                ],
                popular: false 
              },
              { 
                name: "スタンダード", 
                price: "39,800", 
                desc: "実践的なスキルを身につけたい方に最適",
                features: [
                  "全モジュール1-6（22時間）",
                  "実践プロジェクト付き",
                  "90日間のメールサポート", 
                  "1対1メンタリング（2回）",
                  "修了証発行",
                  "永続アクセス",
                  "学習コミュニティ参加"
                ],
                popular: true 
              },
              { 
                name: "プレミアム", 
                price: "79,800", 
                desc: "本格的にマスターしたい方向け",
                features: [
                  "全モジュール1-6（22時間）",
                  "実践プロジェクト付き",
                  "6ヶ月間のメールサポート",
                  "1対1メンタリング（5回）", 
                  "チーム開発ワークショップ",
                  "修了証発行",
                  "永続アクセス",
                  "学習コミュニティ参加",
                  "追加学習リソース"
                ],
                popular: false 
              }
            ].map((plan, index) => (
              <SimpleCard key={index} className={`${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      最人気
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">¥{plan.price}</div>
                  <p className="text-gray-600 text-sm">{plan.desc}</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <SimpleButton className="w-full">
                  {plan.name}を選択
                </SimpleButton>
              </SimpleCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <SimpleCard className="max-w-4xl mx-auto bg-blue-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎁 早期申込み特典
              </h3>
              <p className="text-gray-600 mb-6">
                先着50名様限定で、追加の特典をご用意しています
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Claude Code活用事例集（非売品）</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">30日間返金保証</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">優先サポート対応</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">追加学習動画プレゼント</span>
                </div>
              </div>
            </SimpleCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              よくある
              <span className="text-blue-600 block">質問</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              受講前の疑問や不安にお答えします
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "プログラミング未経験でも受講できますか？",
                answer: "はい、大丈夫です。ベーシックプランでは基礎から丁寧に説明し、プログラミング未経験の方でも理解できるよう構成されています。ただし、Claude Codeはプログラミングツールなので、基本的なコンピューター操作はできることが望ましいです。"
              },
              {
                question: "Claude Codeを使うのに費用はかかりますか？",
                answer: "Claude Codeの利用には、Anthropic社のAPIキーが必要で、使用量に応じた料金が発生します。ただし、学習レベルの使用であれば月額数百円～数千円程度です。講座では効率的な使用方法もお教えします。"
              },
              {
                question: "どのような開発環境が必要ですか？",
                answer: "Windows、Mac、Linuxいずれでも受講可能です。インターネット接続とテキストエディタ（VS Codeを推奨）があれば始められます。詳細な環境設定は講座内で説明します。"
              },
              {
                question: "受講期間はありますか？",
                answer: "いえ、期間制限はありません。すべてのプランで永続アクセスが可能です。お忙しい方でも自分のペースで学習を進めていただけます。"
              },
              {
                question: "サポートはどのように受けられますか？",
                answer: "プランに応じてメールサポートをご利用いただけます。スタンダード・プレミアムプランでは1対1のメンタリングも含まれており、個別の質問や相談にお答えします。"
              },
              {
                question: "修了証は発行されますか？",
                answer: "はい、すべてのプランで修了証をデジタル形式で発行いたします。LinkedInなどのプロフィールにも追加できる形式です。"
              },
              {
                question: "企業向けの研修は対応していますか？",
                answer: "はい、企業向けの研修プログラムもご用意しています。チーム単位での受講割引や、カスタマイズした内容での研修も可能です。お気軽にお問い合わせください。"
              },
              {
                question: "返金保証はありますか？",
                answer: "早期申込み特典として30日間の返金保証をご用意しています。内容にご満足いただけない場合は、受講開始から30日以内であれば全額返金いたします。"
              }
            ].map((faq, index) => (
              <SimpleCard key={index} className="hover:shadow-md transition-shadow">
                <details className="group">
                  <summary className="cursor-pointer list-none">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="text-blue-600 group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </SimpleCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <SimpleCard className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                他にご質問がある場合は
              </h3>
              <p className="text-gray-600 mb-6">
                お気軽にお問い合わせください。24時間以内にご回答いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@claude-code-course.com" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  📧 support@claude-code-course.com
                </a>
                <span className="hidden sm:block text-gray-400">|</span>
                <a 
                  href="tel:03-1234-5678" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  📞 03-1234-5678
                </a>
              </div>
            </SimpleCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            お申し込み・お問い合わせ
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            今すぐ始めてAI時代のプログラミングスキルを身につけましょう
          </p>
          
          <SimpleCard className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="お名前" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="メールアドレス" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <select className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>プランを選択してください</option>
                  <option>ベーシック（¥19,800）</option>
                  <option>スタンダード（¥39,800）</option>
                  <option>プレミアム（¥79,800）</option>
                </select>
              </div>
              <div>
                <textarea 
                  placeholder="ご質問・ご要望" 
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <SimpleButton className="w-full">申し込み・問い合わせを送信</SimpleButton>
            </form>
          </SimpleCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Claude Code講座</h3>
          <p className="text-gray-300 mb-8">
            AI時代のプログラミングスキルを身につけるための総合講座
          </p>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-300">
              © 2024 Claude Code講座. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}