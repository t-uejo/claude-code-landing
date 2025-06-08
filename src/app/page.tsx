"use client";

import { motion } from "framer-motion";
import { ModernCard, ModernButton, GradientText, FloatingElement } from "@/components/ModernCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <FloatingElement delay={0}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 mb-6">
                <span className="text-2xl">🤖</span>
              </div>
            </motion.div>
          </FloatingElement>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="text-white">Claude Code</span>
              <br />
              <GradientText className="block">マスター講座</GradientText>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              AnthropicのClaude Codeを使いこなして、
              <br />
              <GradientText gradient="from-cyan-400 to-blue-400">AI時代のプログラミングスキル</GradientText>
              を身につけよう
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <ModernButton variant="gradient" size="lg">
                ✨ 今すぐ申し込む
              </ModernButton>
              <ModernButton variant="glass" size="lg">
                📖 詳細を見る
              </ModernButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              { icon: "⚡", title: "実践重視", desc: "実際のプロジェクトで使える実践的なスキルを習得", color: "from-yellow-400 to-orange-500" },
              { icon: "🎯", title: "初心者OK", desc: "プログラミング未経験者も安心して学習できる", color: "from-green-400 to-blue-500" },
              { icon: "🌙", title: "24時間", desc: "いつでもどこでも自分のペースで学習", color: "from-purple-400 to-pink-500" }
            ].map((item, index) => (
              <FloatingElement key={index} delay={index * 0.2}>
                <ModernCard variant="glass" className="text-center text-white h-full">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.desc}</p>
                </ModernCard>
              </FloatingElement>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/60"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Claude Codeで変わる
              <br />
              <GradientText>プログラミングの世界</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              AIの力を借りて、より効率的で創造的なプログラミングを実現しましょう
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Claude Codeとは？", icon: "🤖", desc: "AIを活用した革新的な開発ツール", gradient: "from-blue-500 to-cyan-500" },
              { title: "ファイル操作の自動化", icon: "📁", desc: "複数ファイルの編集を自動化", gradient: "from-purple-500 to-pink-500" },
              { title: "コード品質の向上", icon: "✨", desc: "ベストプラクティスに従ったコード", gradient: "from-yellow-500 to-orange-500" },
              { title: "学習効率の最大化", icon: "📚", desc: "AIがコードを説明・改善提案", gradient: "from-green-500 to-teal-500" },
              { title: "チーム開発の強化", icon: "👥", desc: "一貫したコーディングスタイル", gradient: "from-indigo-500 to-purple-500" },
              { title: "将来性のあるスキル", icon: "🚀", desc: "AI時代のプログラミングスキル", gradient: "from-red-500 to-pink-500" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ModernCard variant="glass" className="h-full group">
                  <div className={`text-6xl mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              体系的な学習
              <br />
              <GradientText>カリキュラム</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              初心者から上級者まで、段階的にスキルアップできる構成
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                module: "Module 01",
                title: "Claude Code 基礎",
                duration: "2時間",
                level: "初級",
                levelColor: "from-green-400 to-emerald-500",
                topics: ["Claude Codeの概要と特徴", "インストールと初期設定", "基本的なコマンドの使い方", "ファイル操作の基本"]
              },
              {
                module: "Module 02", 
                title: "実践的なコード生成",
                duration: "3時間",
                level: "初級",
                levelColor: "from-green-400 to-emerald-500",
                topics: ["自然言語でのコード生成", "コードの説明と理解", "バグ修正とデバッグ", "コードリファクタリング"]
              },
              {
                module: "Module 03",
                title: "プロジェクト管理",
                duration: "4時間", 
                level: "中級",
                levelColor: "from-yellow-400 to-orange-500",
                topics: ["複数ファイルの同時編集", "プロジェクト構造の最適化", "テストコードの自動生成", "ドキュメント作成"]
              },
              {
                module: "Module 04",
                title: "チーム開発での活用",
                duration: "3時間",
                level: "中級", 
                levelColor: "from-yellow-400 to-orange-500",
                topics: ["コードレビューの効率化", "一貫したコーディングスタイル", "CI/CDパイプラインとの連携", "チームでのベストプラクティス"]
              },
              {
                module: "Module 05",
                title: "高度なテクニック",
                duration: "4時間",
                level: "上級",
                levelColor: "from-red-400 to-pink-500",
                topics: ["カスタムプロンプトの作成", "API連携とデータ処理", "パフォーマンス最適化", "セキュリティ考慮事項"]
              },
              {
                module: "Module 06",
                title: "実践プロジェクト",
                duration: "6時間",
                level: "上級",
                levelColor: "from-red-400 to-pink-500",
                topics: ["Webアプリケーションの開発", "API開発とテスト", "デプロイメントの自動化", "総合的なプロジェクト完成"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ModernCard variant="glow" className="h-full group overflow-hidden relative">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.levelColor} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className={`text-sm font-bold bg-gradient-to-r ${item.levelColor} bg-clip-text text-transparent mb-2`}>
                          {item.module}
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-center mb-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.levelColor} text-white shadow-lg`}>
                        {item.level}
                      </span>
                      <span className="text-gray-500 text-sm">{item.duration}</span>
                    </div>
                    
                    <ul className="space-y-3">
                      {item.topics.map((topic, topicIndex) => (
                        <motion.li 
                          key={topicIndex} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (topicIndex * 0.1) }}
                          className="flex items-start gap-3"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.levelColor} mt-2 flex-shrink-0`}></span>
                          <span className="text-gray-600 text-sm leading-relaxed">{topic}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <ModernCard variant="gradient" className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                総学習時間: <GradientText>22時間</GradientText>
              </h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                実践的なハンズオン形式で、すぐに業務で活用できるスキルを身につけられます
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { text: "ハンズオン形式", color: "from-blue-500 to-cyan-500" },
                  { text: "実践プロジェクト", color: "from-purple-500 to-pink-500" },
                  { text: "修了証発行", color: "from-green-500 to-teal-500" },
                  { text: "質問サポート", color: "from-yellow-500 to-orange-500" }
                ].map((badge, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`px-4 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${badge.color} shadow-lg`}
                  >
                    {badge.text}
                  </motion.span>
                ))}
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              受講
              <GradientText>メリット</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Claude Code講座で得られる具体的なメリットをご紹介します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💰",
                title: "投資対効果",
                description: "業務効率化により月数万円の価値創出が期待できます",
                gradient: "from-yellow-400 to-orange-500"
              },
              {
                icon: "⏰", 
                title: "時間短縮",
                description: "開発時間を50%以上短縮し、より創造的な作業に集中",
                gradient: "from-blue-400 to-cyan-500"
              },
              {
                icon: "📈",
                title: "キャリアアップ",
                description: "AI時代に必要なスキルを習得し、市場価値を向上",
                gradient: "from-green-400 to-teal-500"
              },
              {
                icon: "🎯",
                title: "即戦力化",
                description: "学習後すぐに業務で活用できる実践的なスキル",
                gradient: "from-purple-400 to-pink-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ModernCard variant="glass" className="text-center h-full group">
                  <div className="text-5xl mb-6">{benefit.icon}</div>
                  <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              料金
              <GradientText>プラン</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              あなたの学習スタイルに合わせて最適なプランをお選びください
            </p>
          </motion.div>

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
                popular: false,
                gradient: "from-blue-500 to-cyan-500"
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
                popular: true,
                gradient: "from-purple-500 to-pink-500"
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
                popular: false,
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ModernCard 
                  variant="glass"
                  className={`h-full relative overflow-hidden ${plan.popular ? 'ring-2 ring-purple-400/50' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-20">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                      >
                        ✨ 最人気
                      </motion.div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8 pt-4">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className={`text-5xl font-bold mb-4 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      ¥{plan.price}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{plan.desc}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-start gap-3"
                      >
                        <span className={`text-sm bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent font-bold`}>✓</span>
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <ModernButton 
                    variant={plan.popular ? "gradient" : "glass"}
                    className="w-full"
                  >
                    {plan.name}を選択
                  </ModernButton>
                </ModernCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <ModernCard variant="glass" className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                🎁 早期申込み特典
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                先着50名様限定で、追加の特典をご用意しています
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Claude Code活用事例集（非売品）",
                  "30日間返金保証", 
                  "優先サポート対応",
                  "追加学習動画プレゼント"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="text-white font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              よくある
              <GradientText>質問</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              受講前の疑問や不安にお答えします
            </p>
          </motion.div>

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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ModernCard variant="glass" className="group">
                  <details className="group">
                    <summary className="cursor-pointer list-none">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {faq.question}
                        </h3>
                        <div className="text-blue-400 group-open:rotate-180 transition-transform duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </summary>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6 pt-6 border-t border-white/20"
                    >
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </details>
                </ModernCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <ModernCard variant="glow" className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                他にご質問がある場合は
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                お気軽にお問い合わせください。24時間以内にご回答いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="mailto:support@claude-code-course.com" 
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span className="text-lg">📧</span>
                  support@claude-code-course.com
                </a>
                <span className="hidden sm:block text-gray-400">|</span>
                <a 
                  href="tel:03-1234-5678" 
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span className="text-lg">📞</span>
                  03-1234-5678
                </a>
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              お申し込み &
              <br />
              <GradientText>お問い合わせ</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              今すぐ始めてAI時代のプログラミングスキルを身につけましょう
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ModernCard variant="glow">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  お申し込みフォーム
                </h3>
                
                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="お名前" 
                      className="w-full p-4 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="メールアドレス" 
                      className="w-full p-4 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="電話番号" 
                      className="w-full p-4 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <select className="w-full p-4 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                      <option>プランを選択してください</option>
                      <option>ベーシック（¥19,800）</option>
                      <option>スタンダード（¥39,800）</option>
                      <option>プレミアム（¥79,800）</option>
                      <option>企業研修について相談</option>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      placeholder="ご質問・ご要望" 
                      rows={4}
                      className="w-full p-4 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 resize-none"
                    ></textarea>
                  </div>
                  <ModernButton variant="gradient" className="w-full">
                    ✨ 申し込み・問い合わせを送信
                  </ModernButton>
                </form>
              </ModernCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  title: "📞 お電話でのお問い合わせ",
                  subtitle: "お急ぎの方は直接お電話ください",
                  content: "03-1234-5678",
                  detail: "受付時間: 平日 9:00 - 18:00",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "💰 お支払い方法",
                  subtitle: "複数の決済方法に対応",
                  content: ["クレジットカード（一括・分割）", "銀行振込", "PayPal", "企業請求書払い"],
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  title: "🎓 受講開始までの流れ",
                  subtitle: "簡単3ステップでスタート",
                  content: [
                    { step: "1", text: "お申し込み", desc: "フォーム送信後、確認メールを送信" },
                    { step: "2", text: "お支払い", desc: "お支払い完了後、アカウント作成" },
                    { step: "3", text: "受講開始", desc: "すぐに学習を開始していただけます" }
                  ],
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "🔒 安心の保証制度",
                  subtitle: "安心してご受講いただけます",
                  content: ["30日間返金保証", "個人情報保護", "SSL暗号化通信", "24時間以内返信保証"],
                  gradient: "from-orange-500 to-red-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ModernCard variant="glass" className="h-full">
                    <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {item.subtitle}
                    </p>
                    {typeof item.content === 'string' ? (
                      <>
                        <p className="text-2xl font-bold text-white mb-2">{item.content}</p>
                        {item.detail && <p className="text-gray-400 text-sm">{item.detail}</p>}
                      </>
                    ) : Array.isArray(item.content) && typeof item.content[0] === 'string' ? (
                      <div className="space-y-2">
                        {(item.content as string[]).map((contentItem, contentIndex) => (
                          <div key={contentIndex} className="flex items-center gap-3">
                            <span className={`text-sm bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>✓</span>
                            <span className="text-gray-300 text-sm">{contentItem}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {(item.content as any[]).map((step, stepIndex) => (
                          <div key={stepIndex} className="flex gap-4">
                            <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                              {step.step}
                            </div>
                            <div>
                              <p className="font-semibold text-white text-sm">{step.text}</p>
                              <p className="text-gray-400 text-xs">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ModernCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-6">
              <GradientText>Claude Code講座</GradientText>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              AI時代のプログラミングスキルを身につけるための総合講座
            </p>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © 2024 Claude Code講座. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                ※ Claude CodeはAnthropic社の商標です。本講座はAnthropic社とは独立した第三者によって提供されています。
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}