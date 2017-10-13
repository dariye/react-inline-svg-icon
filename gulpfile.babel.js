'use strict'

import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import del from 'del'
import runSequence from 'run-sequence'
import merge from 'merge-stream'
import through from 'through2'
import slug from 'slug'

const plugins = gulpLoadPlugins({
  rename: {
    'gulp-inject-string': 'inject'
  }
})

const paths = {
  src: './lib',
  build: './build'
}

gulp.task('hello', () => console.log('howdy'))

gulp.task('icons', () => {
  const svgo = gulp.src(`${paths.src}/**/*.svg`)
    .pipe(plugis.svgo())

  const component = gulp.src(`${path.src}/components/icon.js`)
    .pipe(plugins.inject.after('/* inject:icon */', '\n      <case'))

})

gulp.task('build', () => )
gulp.task('lint', () => )
gulp.task('clean', () => )
gulp.task('watch', () => )





