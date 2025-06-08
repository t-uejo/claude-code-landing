"use client";

import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Claude Code講座</h3>
            <p className="text-gray-300 mb-4">
              AI時代のプログラミングスキルを
              <br />
              身につけるための総合講座
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                🐦
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                📘
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                💼
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">YouTube</span>
                📺
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">講座について</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-300 hover:text-white">
                  特徴・概要
                </Link>
              </li>
              <li>
                <Link href="#curriculum" className="text-gray-300 hover:text-white">
                  カリキュラム
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-300 hover:text-white">
                  料金プラン
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-white">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">サポート</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-300 hover:text-white">
                  返金ポリシー
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300">📧 メール</p>
                <Link 
                  href="mailto:support@claude-code-course.com" 
                  className="text-blue-400 hover:text-blue-300"
                >
                  support@claude-code-course.com
                </Link>
              </div>
              <div>
                <p className="text-gray-300">📞 電話</p>
                <Link 
                  href="tel:03-1234-5678" 
                  className="text-blue-400 hover:text-blue-300"
                >
                  03-1234-5678
                </Link>
              </div>
              <div>
                <p className="text-gray-300">🕒 受付時間</p>
                <p className="text-gray-300">平日 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">
                © 2024 Claude Code講座. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm">
                利用規約
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm">
                プライバシーポリシー
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white text-sm">
                サイトマップ
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            ※ Claude CodeはAnthropic社の商標です。本講座はAnthropic社とは独立した第三者によって提供されています。
          </p>
        </div>
      </div>
    </footer>
  );
}