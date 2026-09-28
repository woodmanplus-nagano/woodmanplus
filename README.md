# WOODMAN plus（ウッドマン プラス） 公式Webサイト

信州和牛・信州牛・蓼科豚を使用した、こだわりの信州ハンバーグ＆ステーキ専門店「WOODMAN plus」の公式Webサイトです。

---

## ディレクトリ構成

```text
ウッドマンーサイト/
├── css/                  # スタイルシート
│   ├── style.css         # メインスタイルシート
│   └── reset.css         # リセットCSS
├── js/                   # JavaScript
│   └── script.js         # ハンバーガーメニュー、動的データ制御等のスクリプト
├── images/               # 画像アセット（料理、店舗、ストーリー、周辺観光等）
│   ├── hero.jpg
│   ├── shop.jpg
│   ├── hamburg01.jpg〜04.jpg
│   ├── steak01.jpg〜04.jpg
│   └── ...
├── index.html            # トップページ
├── menu.html             # メニュー紹介
├── commitment.html       # こだわり
├── access.html           # アクセス・店舗情報
├── reservation.html      # ご予約案内
├── story.html            # ブランドストーリー
├── chef-story.html       # シェフストーリー
├── english.html          # 英語ページ（ENGLISH）
├── .gitignore            # Git除外設定
└── README.md             # プロジェクト説明書（本ファイル）
```

---

## ページ構成

| ページ名 | ファイル | 説明 |
| :--- | :--- | :--- |
| **ホーム** | `index.html` | 店舗のメインビジュアル、コンセプト、おすすめメニュー、アクセス等の概要 |
| **メニュー** | `menu.html` | こだわりハンバーグ、ステーキ、サイドメニュー、ドリンク一覧 |
| **こだわり** | `commitment.html` | 信州食材、蓼科牛・豚、契約農家、スープ・米へのこだわり |
| **アクセス** | `access.html` | 店舗所在地、営業時間、周辺マップ、観光スポット情報 |
| **ご予約** | `reservation.html` | お電話やWEBでの事前予約案内・注意事項 |
| **ストーリー** | `story.html` | ウッドマンの誕生ストーリー・コンセプト漫画・図解 |
| **シェフストーリー** | `chef-story.html` | オーナーシェフの歩みと思いの詳細ストーリー |
| **ENGLISH** | `english.html` | インバウンド観光客向けの英語概要案内 |

---

## ローカル環境でのプレビュー方法

VS Code の「Live Server」拡張機能を利用するか、以下のコマンドで簡易ローカルサーバーを起動してブラウザで確認できます。

### Python を使用する場合
```bash
# 本フォルダでターミナルを開き実行
python -m http.server 8000
```
起動後、ブラウザで `http://localhost:8000` にアクセスしてください。

---

## GitHubへの公開手順（後から公開する場合）

1. [GitHub](https://github.com/new) で新しいリポジトリ（例: `woodman-site`）を作成します（README等の初期ファイルは作成せず、空のリポジトリにしてください）。
2. 本フォルダのターミナルで以下のコマンドを実行します：
   ```bash
   git remote add origin https://github.com/<あなたのユーザー名>/<リポジトリ名>.git
   git branch -M main
   git push -u origin main
   ```
3. GitHubのリポジトリ設定「Settings」>「Pages」から、Source を「Deploy from a branch」、Branch を「main」に設定することで、無料のWebサイトとして世界中に公開できます。
