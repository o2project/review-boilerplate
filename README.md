# Re:VIEW boilerplate

Re:VIEWビルド + RedPenでのテスト + Travis CIによる継続的インテグレーション環境を構築できるリポジトリです。
Node.jsとRuby + Bundlerのインストールが必要です。

## 準備

```shell
npm run setup
```

gulpfile.js内にあるrepositoryNameの値も、変更する必要があります。o
https://github.com/kubosho/review-boilerplate/blob/aabcec6/gulpfile.js#L6

## RedPenでテストする

```shell
npm test
```

## ブラウザ上でプレビューする

```shell
npm run web
open articles/book/index.html
```

## PDFを出力する

TeXのインストールが必要です。

```shell
npm run pdf
```

## ライセンス

MIT License
