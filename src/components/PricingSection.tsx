"use client";

import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "ベーシック",
    price: "19,800",
    duration: "買い切り",
    description: "Claude Codeの基本を学びたい方におすすめ",
    features: [
      "モジュール1-3（9時間）",
      "基本的なハンズオン演習",
      "30日間のメールサポート",
      "修了証発行",
      "永続アクセス"
    ],
    popular: false,
    color: "default"
  },
  {
    name: "スタンダード", 
    price: "39,800",
    duration: "買い切り",
    description: "実践的なスキルを身につけたい方に最適",
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
    color: "primary"
  },
  {
    name: "プレミアム",
    price: "79,800", 
    duration: "買い切り",
    description: "本格的にマスターしたい方向け",
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
    color: "secondary"
  }
];

const benefits = [
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
];

export default function PricingSection() {
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
            受講メリット &
            <span className="text-blue-600 block">料金プラン</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あなたの学習スタイルに合わせて最適なプランをお選びください
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6">
              <CardBody>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Chip color="primary" variant="solid">
                      最人気
                    </Chip>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-blue-600">
                        ¥{plan.price}
                      </span>
                      <span className="text-gray-500 ml-2">
                        {plan.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {plan.description}
                    </p>
                  </div>
                </CardHeader>
                
                <CardBody className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    color={plan.color as any}
                    variant={plan.popular ? "solid" : "bordered"}
                    className="w-full font-semibold"
                    size="lg"
                  >
                    {plan.name}を選択
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-4xl mx-auto p-8 bg-blue-50">
            <CardBody>
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
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}