"use client";

import { Button, Card, CardBody, Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  { key: "basic", label: "ベーシック（¥19,800）" },
  { key: "standard", label: "スタンダード（¥39,800）" },
  { key: "premium", label: "プレミアム（¥79,800）" },
  { key: "enterprise", label: "企業研修について相談" }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("お申し込みありがとうございます！24時間以内にご連絡いたします。");
  };

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
            お申し込み &
            <span className="text-blue-600 block">お問い合わせ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            <Card className="p-8">
              <CardBody>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  お申し込みフォーム
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="お名前"
                    placeholder="山田太郎"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    isRequired
                    variant="bordered"
                  />
                  
                  <Input
                    label="メールアドレス"
                    placeholder="example@email.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    isRequired
                    variant="bordered"
                  />
                  
                  <Input
                    label="電話番号"
                    placeholder="090-1234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    variant="bordered"
                  />
                  
                  <Select
                    label="ご希望のプラン"
                    placeholder="プランを選択してください"
                    value={formData.plan}
                    onChange={(e) => setFormData({...formData, plan: e.target.value})}
                    variant="bordered"
                    isRequired
                  >
                    {plans.map((plan) => (
                      <SelectItem key={plan.key}>
                        {plan.label}
                      </SelectItem>
                    ))}
                  </Select>
                  
                  <Textarea
                    label="ご質問・ご要望"
                    placeholder="何かご質問やご要望がございましたらお聞かせください"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    variant="bordered"
                    minRows={4}
                  />
                  
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    className="w-full font-semibold"
                  >
                    申し込み・問い合わせを送信
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-6">
              <CardBody>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  📞 お電話でのお問い合わせ
                </h3>
                <p className="text-gray-600 mb-4">
                  お急ぎの方は直接お電話ください
                </p>
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  03-1234-5678
                </p>
                <p className="text-gray-500 text-sm">
                  受付時間: 平日 9:00 - 18:00
                </p>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  💰 お支払い方法
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">クレジットカード（一括・分割）</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">銀行振込</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">PayPal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">企業請求書払い</span>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🎓 受講開始までの流れ
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">お申し込み</p>
                      <p className="text-gray-600 text-sm">フォーム送信後、確認メールを送信</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">お支払い</p>
                      <p className="text-gray-600 text-sm">お支払い完了後、アカウント作成</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">受講開始</p>
                      <p className="text-gray-600 text-sm">すぐに学習を開始していただけます</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="p-6 bg-blue-50">
              <CardBody>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🔒 安心の保証制度
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">30日間返金保証</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">個人情報保護</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">SSL暗号化通信</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">24時間以内返信保証</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}