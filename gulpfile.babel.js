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
  const icons = gulp.src(`${paths.src}/**/*.svg`)
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
          removeViewBox: false
        },
        {
          cleanUpEnableBackground: true
        },
        {
          minifyStyles: true
        },
        {
          convertStyleToAttrs: true
        },
        {
          convertColors: false
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
          cleanupIDs: true
        },
        {
          cleanupNumericValues: false
        },
        {
          cleanupListOfValues: false
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
          removeRasterImages: false
        },
        {
          mergepaths: true
        },
        {
          convertShapeToPath: true
        },
        {
          sortAttrs: false
        },
        {
          transformWithOnePath: true
        },
        {
          removeDimensions: false
        },
        {
          removeAttrs: true
        },
        {
          removeElementsByAttr: true
        },
        {
          addClassesToSVGElement: false
        },
        {
          addAttributesToSVGElement: false
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
      (chunk, enc, cb) => {
        const contents = chunk.contents.toString()
        const $ = cheerio.load(contents, { xmlMode: true })
        // const path = $('svg > path')
        console.log(contents) 
        return cb()
      }
    ))

  const component = gulp.src(`${path.src}/components/icon.js`)
    .pipe(plugins.inject.after('/* inject:icon */', '\n      <case'))
  
  return merge(icons, component) 
})

// gulp.task('build', () => )
// gulp.task('lint', () => )
// gulp.task('clean', () => )
// gulp.task('watch', () => )





