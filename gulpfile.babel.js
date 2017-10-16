'use strict'

import fs from 'fs'
import path from 'path'
import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import del from 'del'
import runSequence from 'run-sequence'
import merge from 'merge-stream'
import through from 'through2'
import cheerio from 'cheerio'
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
  const icons = []

  const optimizeIcons = gulp.src(`${paths.src}/**/*.svg`)
    .pipe(plugins.svgmin({
      plugins: [
        {
          removeDoctype: true
        },
        {
          removeComments: true
        },
        { 
          cleanupAttrs: true
        },
        {
          removeXMLProclnst: true
        },
        {
          removeMetadata: true
        },
        {
          removeTitle: true
        },
        {
          removeDesc: true
        },
        {
          cleanupIDs: false
        },
        {
          removeUselessDefs: true
        },
        {
          removeXMLNS: true
        },
        {
          removeEmptyAttrs: true
        },
        {
          removeHiddenElems: true
        },
        {
          removeEmptyText: true
        },
        {
          removeEmptyContainers: true
        },
        {
          cleanUpEnableBackground: true
        },
        {
          convertPathData: true
        },
        {
          converTransform: true
        },
        {
          removeUnkownsAndDefaults: true
        },
        {
          removeNonInheritableGroupAttrs: true
        },
        {
          removeUselessStrokeAndFill: true
        },
        {
          removeUnusedNS: true
        },
        {
          moveElemsAttrsToGroup: true
        },
        {
          moveGroupAttrsToElems: true
        },
        {
          collapseGroups: true
        },
        {
          mergepaths: true
        },
        {
          convertShapeToPath: true
        },
        {
          transformWithOnePath: true
        },
        {
          removeAttrs: {
            attrs: ["class"]
          }
        },
        {
          removeStyleElement: true
        },
        {
          removeScriptElement: true
        }
      ]
    }))
    .pipe(through({ objectMode: true }, 
      function (chunk, enc, cb) {
        const name = slug(path.basename(chunk.path, path.extname(chunk.path)))
       
        const $ = cheerio.load(chunk.contents.toString())
        const data = $('svg').html()

        this.push({ name, data })

        return cb()
      }
    ))
    .pipe(plugins.tap(function(icon) {
      console.log(icon)
      // DOESN'T Work!
      gulp.src(`${path.src}/components/icon.js`)
        .pipe(plugins.inject.after('/* inject:icon */', '\n      <case'))
        .pipe(gulp.dest('.build'))

    }))

  // const component = gulp.src(`${path.src}/components/icon.js`)
  //   .pipe(plugins.tap(function
  //   .pipe(plugins.inject.after('#<{(| inject:icon |)}>#', '\n      <case'))
  //
  // return merge(icons, component) 
})

// gulp.task('build', () => )
// gulp.task('lint', () => )
// gulp.task('clean', () => )
// gulp.task('watch', () => )





