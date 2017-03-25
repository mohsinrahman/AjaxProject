var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');



gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport,cssvars,nested,autoprefixer]))
	.on('error', function(errorinfo){
        console.log(errorinfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'))
});

/*
gulp.task('default', function(){
    console.log("Hurray");
});

gulp.task('html', function(){
    console.log("Hurray HTML");
});

*/