'use strict';

var express = require('express');

var app = express();


app.get('/', function(req,res){
	res.send("<p> Nama : Riza Ega Satyabudhi</p> <p> Universitas: Universitas Gadjah Mada </p> <p> Jurusan: Ilmu Komputer </p> <p> Angkatan: 2015 </p> <p>Motivasi: Saat ini sedang belajar backend, tetapi penasaran juga dengan frontend, terutama dengan javascript yang saat ini sangat populer dan memiliki segudang framework (meteor, vue.js, angular.js, react, dll). Dengan mengikuti workshop ini, saya harap dapat memenuhi ke ingin tahuan saya tentang JS, dan dapat belajar banyak dari wonderlabs </p>");
});

app.listen(3000,function(){
console.log("The frontend server is running on port 3000!")

});
