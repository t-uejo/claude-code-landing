"use client";

import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";

const curriculum = [
  {
    module: "モジュール 1",
    title: "Claude Code 基礎",
    duration: "2時間",
    level: "初級",
    topics: [
      "Claude Codeの概要と特徴",
      "インストールと初期設定",
      "基本的なコマンドの使い方",
      "ファイル操作の基本"
    ]
  },
  {
    module: "モジュール 2", 
    title: "実践的なコード生成",
    duration: "3時間",
    level: "初級",
    topics: [
      "自然言語でのコード生成",
      "コードの説明と理解",
      "バグ修正とデバッグ",
      "コードリファクタリング"
    ]
  },
  {
    module: "モジュール 3",
    title: "プロジェクト管理",
    duration: "4時間", 
    level: "中級",
    topics: [
      "複数ファイルの同時編集",
      "プロジェクト構造の最適化",
      "テストコードの自動生成",
      "ドキュメント作成"
    ]
  },
  {
    module: "モジュール 4",
    title: "チーム開発での活用",
    duration: "3時間",
    level: "中級", 
    topics: [
      "コードレビューの効率化",
      "一貫したコーディングスタイル",
      "CI/CDパイプラインとの連携",
      "チームでのベストプラクティス"
    ]
  },
  {
    module: "モジュール 5",
    title: "高度なテクニック",
    duration: "4時間",
    level: "上級",
    topics: [
      "カスタムプロンプトの作成",
      "API連携とデータ処理",
      "パフォーマンス最適化",
      "セキュリティ考慮事項"
    ]
  },
  {
    module: "モジュール 6",
    title: "実践プロジェクト",
    duration: "6時間",
    level: "上級",
    topics: [
      "Webアプリケーションの開発",
      "API開発とテスト",
      "デプロイメントの自動化",
      "総合的なプロジェクト完成"
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "初級": return "success";
    case "中級": return "warning"; 
    case "上級": return "danger";
    default: return "default";
  }
};

export default function CurriculumSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            体系的な学習
            <span className="text-blue-600 block">カリキュラム</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            初心者から上級者まで、段階的にスキルアップできる構成になっています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {curriculum.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start w-full">
                    <div>
                      <p className="text-blue-600 font-semibold mb-1">{item.module}</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <div className="flex gap-2 items-center">
                        <Chip size="sm" variant="flat" color={getLevelColor(item.level)}>
                          {item.level}
                        </Chip>
                        <span className="text-sm text-gray-500">{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <ul className="space-y-2">
                    {item.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
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
          <Card className="max-w-4xl mx-auto p-8">
            <CardBody>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                総学習時間: 22時間
              </h3>
              <p className="text-gray-600 mb-6">
                実践的なハンズオン形式で、すぐに業務で活用できるスキルを身につけられます
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Chip color="primary" variant="flat">ハンズオン形式</Chip>
                <Chip color="secondary" variant="flat">実践プロジェクト</Chip>
                <Chip color="success" variant="flat">修了証発行</Chip>
                <Chip color="warning" variant="flat">質問サポート</Chip>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}