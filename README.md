# AI業務改善サイト（静的サイト）

## ファイル構成
index.html / services.html / works.html / profile.html / faq.html / contact.html / style.css / script.js

## 【要確認】の探し方
`grep -rn "要確認\|【" *.html`

## Cloudflare Pagesへの公開手順
1. GitHubにこのリポジトリをpushする。
2. Cloudflareにログイン →「Workers & Pages」→「作成」→「Pages」→「Gitに接続」。
3. このリポジトリを選ぶ。
4. ビルドコマンドは空欄、出力ディレクトリは `/`（ルート）にする。
5. 「保存してデプロイ」。発行されたURLで表示を確認する。
6. 独自ドメインは、プロジェクトの「カスタムドメイン」から設定する。
