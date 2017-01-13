/**
 * Created by xang on 6/19/2016.
 */
"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();



function stb() {

 this.rateinfo=function (okcallback, errorcallback) {

     var storeratearray=[];
     var lablearray=['Currency','Buy','Sale'];

     httpclient.call(conf.serverurl.stb,function ok(stringhtml) {

         var startproint=stringhtml.indexOf('<td bgcolor="#ffffff">');
         var endproint=stringhtml.lastIndexOf('<!--end-laonews-feed//-->');
         var newstringhtml=stringhtml.substring(startproint+5,endproint);
         var htmlarray=newstringhtml.split('</tr>');

         // var ratecontainerarray = htmlarray[3].split('</td>');

        for (var i=2;i<htmlarray.length-3;i++) {

            var storerate ={};
            var buy =null;
            var ratecontainerarray = htmlarray[i].split('</td>');
            var curency =ratecontainerarray[0].substring(ratecontainerarray[0].length-4,ratecontainerarray[0].length).trim();
            if (i == 2 ){
                buy =ratecontainerarray[1].substring(ratecontainerarray[1].indexOf('<p>')+'<p>'.length,ratecontainerarray[1].lastIndexOf('</p>')).trim();
            }else {
                buy =ratecontainerarray[1].substring(ratecontainerarray[1].indexOf('\r\n\t\t\t\t\t\t\t\t'),ratecontainerarray[1].length).trim();
            }

            var sale =ratecontainerarray[2].substring(ratecontainerarray[2].indexOf('class="senratebot">')+'class="senratebot">'.length,ratecontainerarray[2].length).trim();

            storerate[lablearray[0]]=curency;
            storerate[lablearray[1]]=buy;
            storerate[lablearray[2]]=sale;

            storeratearray.push(storerate);

        }


         okcallback(storeratearray);
         
     },function error(err) {
         errorcallback(err);
     });

 }

}//class


module.exports=function () {
    return new stb();
};
