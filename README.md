# Re:VIEW boilerplate

Re:VIEWビルド + RedPenによるテスト + Travis CIによる継続的インテグレーション環境を構築できるリポジトリです。
Node.jsとRuby + Bundlerのインストールが必要です。

## 準備

```shell
npm run setup
```

## ブラウザ上でプレビューする

```shell
npm run web
open articles/webroot/index.html
```

## PDFを出力する

TeXのインストールが必要です。

```shell
npm run pdf
```
