const exec = require('child_process').exec;

const reviewPrefix = 'bundle exec '
const reviewCompile = `${reviewPrefix}review-compile`
const reviewWebMaker = `${reviewPrefix}review-webmaker`
const reviewPdfMaker = `${reviewPrefix}review-pdfmaker`
const reviewEpubMaker = `${reviewPrefix}review-epubmaker`
