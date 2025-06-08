"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";

const faqs = [
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
  },
  {
    question: "講座内容は定期的に更新されますか？",
    answer: "はい、Claude Codeの機能追加やアップデートに合わせて、講座内容も定期的に更新しています。永続アクセスをお持ちの方は、追加料金なしで新しい内容もご覧いただけます。"
  },
  {
    question: "他の受講生との交流はありますか？",
    answer: "スタンダード・プレミアムプランでは、学習コミュニティにご参加いただけます。他の受講生との情報交換や質問の共有が可能で、学習のモチベーション維持にも役立ちます。"
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            よくある
            <span className="text-blue-600 block">質問</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            受講前の疑問や不安にお答えします
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion 
            variant="splitted"
            selectionMode="multiple"
            className="gap-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                aria-label={faq.question}
                title={
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                }
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gray-600 leading-relaxed pb-4">
                  {faq.answer}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-lg p-8 shadow-sm">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}