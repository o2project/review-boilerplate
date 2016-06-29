const exec = require('child_process').exec
const execSync = require('child_process').execSync
const gulp = require('gulp')
const gulpExec = require('gulp-exec')
const del = require('del')

const targetDir = 'articles'
const webrootDir = 'webroot'

const redpenBin = 'redpen-distribution-*/bin/redpen'
const redpenTargetFile = '*.re'

const reviewConfig = 'config.yml'
const reviewPrefix = 'bundle exec'
const reviewCompile = `${reviewPrefix} review-compile`
const reviewWebMaker = `${reviewPrefix} review-webmaker`
const reviewPdfMaker = `${reviewPrefix} review-pdfmaker`
const reviewEpubMaker = `${reviewPrefix} review-epubmaker`

gulp.task('web', done => {
  process.chdir(targetDir)
  exec(`${reviewWebMaker} ${reviewConfig}`, (error) => {
    if (error != null) {
      console.error(error)
    }
    done()
  })
})

gulp.task('pdf', done => {
  process.chdir(targetDir)
  exec(`${reviewPdfMaker} ${reviewConfig}`, (error) => {
    if (error != null) {
      console.error(error)
    }
    done()
  })
})

gulp.task('redpen', done => {
  execSync(`${redpenBin} -v`)
  gulp.src(`${targetDir}/${redpenTargetFile}`)
    .pipe(gulpExec(`${redpenBin} <%= file.path %>`))
    .pipe(gulpExec.reporter({ err: true, stderr: true, stdout: true }))
})

gulp.task('clean', done => {
  del([`${targetDir}/${webrootDir}`])
    .then(paths => {
      console.log('Deleted files and folders:\n', paths.join('\n'))
      done()
    })
})
