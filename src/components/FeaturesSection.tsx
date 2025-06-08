"use client";

// import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Claude Codeとは？",
    description: "AnthropicのClaude Codeは、AIを活用した革新的な開発ツールです。自然言語でコードを生成・編集し、開発効率を大幅に向上させます。",
    icon: "🤖"
  },
  {
    title: "ファイル操作の自動化",
    description: "複数ファイルの編集、リファクタリング、テスト作成など、煩雑な作業をAIが自動化。開発者は創造的な作業に集中できます。",
    icon: "📁"
  },
  {
    title: "コード品質の向上",
    description: "AI がベストプラクティスに従ったコードを提案。バグの早期発見とセキュリティ強化により、高品質なソフトウェアを開発できます。",
    icon: "✨"
  },
  {
    title: "学習効率の最大化",
    description: "AI がコードの説明や改善点を提案してくれるため、プログラミングスキルを効率的に向上させることができます。",
    icon: "📚"
  },
  {
    title: "チーム開発の強化",
    description: "一貫したコーディングスタイルとドキュメント生成により、チーム全体の開発効率と品質を向上させます。",
    icon: "👥"
  },
  {
    title: "将来性のあるスキル",
    description: "AI時代のプログラミングに必要なスキルを習得し、キャリアアップと市場価値の向上を実現できます。",
    icon: "🚀"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Claude Codeで変わる
            <span className="text-blue-600 block">プログラミングの世界</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIの力を借りて、より効率的で創造的なプログラミングを実現しましょう
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}