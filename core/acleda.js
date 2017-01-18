/**
 * Created by xang on 7/2/2016.
 */
"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();
var promise =require('bluebird');

function acleda() {

 this.rateinfo=function () {

     var storeratearray=[];
     var lablearray=['Currency','Buy','Sale'];
     var labelrateinfo = ['Date','rate'];
     var rateinfo ={};

     return new promise(function (resolve, reject) {

         httpclient.call(conf.serverurl.acleda)
             .then(function (stringhtml) {

                 var stardatetproint=stringhtml.indexOf('span style="font-size:85%;">')+'span style="font-size:85%;">'.length;
                 var enddateproint=stringhtml.indexOf('</span>',stardatetproint);
                 var date=stringhtml.substring(stardatetproint,enddateproint).replace('&nbsp;','').trim();

                 var startproint=stringhtml.indexOf("<tr><td");
                 var endproint=stringhtml.indexOf("</table>");
                 var newstringhtml=stringhtml.substring(startproint,endproint);
                 var spile=newstringhtml.split("</tr><tr>");

                 for (var i=0;i<spile.length;i++){
                     var newsplite=spile[i].split("</td>");
                     var storerate={};

                     var curency=newsplite[0].substring(newsplite[0].lastIndexOf("'>")+"'>".length,newsplite[0].length);
                     var buy=newsplite[1].substring(newsplite[1].lastIndexOf("'>")+"'>".length,newsplite[1].length);
                     var sale=newsplite[2].substring(newsplite[2].lastIndexOf("'>")+"'>".length,newsplite[2].length);
                     storerate[lablearray[0]]=curency.trim();
                     storerate[lablearray[1]]=buy.trim();
                     storerate[lablearray[2]]=sale.trim();

                     storeratearray.push(storerate);

                 }
                 rateinfo[labelrateinfo[0]] = date;
                 rateinfo[labelrateinfo[1]] = storeratearray;
                 resolve(rateinfo);

             }).catch(function (err) {
                reject(err);
         });

     });

 }

}

module.exports=function () {
    return new acleda();
};