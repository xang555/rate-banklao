/**
 * Created by xang on 6/19/2016.
 */
"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();
var promise =require('bluebird');

function stb() {

 this.rateinfo=function () {

     var storeratearray=[];
     var lablearray=['Currency','Buy','Sale'];
     var labelrateinfo = ['Date','rate'];
     var rateinfo ={};

        return new promise(function (resolve, reject) {

            httpclient.call(conf.serverurl.stb)
                .then(function (stringhtml) {

                    //get date
                    var startdateproint=stringhtml.indexOf('Date (')+'Date ('.length;
                    var enddateproint=stringhtml.indexOf(')',startdateproint);
                    var date=stringhtml.substring(startdateproint,enddateproint);

                    //get rate information
                    var startproint=stringhtml.indexOf('<td bgcolor="#ffffff">');
                    var endproint=stringhtml.lastIndexOf('<!--end-laonews-feed//-->');
                    var newstringhtml=stringhtml.substring(startproint+5,endproint);
                    var htmlarray=newstringhtml.split('</tr>');

                    for (var i=2;i<htmlarray.length-3;i++) {

                        var storerate ={};
                        var buy =null;
                        var ratecontainerarray = htmlarray[i].split('</td>');
                        var curency =ratecontainerarray[0].substring(ratecontainerarray[0].length-4,ratecontainerarray[0].length).trim();
                        if (i == 2 ){
                            buy =ratecontainerarray[1].substring(ratecontainerarray[1].indexOf('<p>')+'<p>'.length,ratecontainerarray[1].lastIndexOf('</p>')).trim();
                        } else if (i == 3){
                            buy =ratecontainerarray[1].substring(ratecontainerarray[1].indexOf('\r\n\t\t\t\t\t\t\t\t\t'),ratecontainerarray[1].indexOf('</p>') ).trim();
                        } else if (i == 4) {
                            curency =ratecontainerarray[0].substring(ratecontainerarray[0].indexOf('<p>\r\n\t\t\t\t\t\t\t\t\t') + '<p>\r\n\t\t\t\t\t\t\t\t\t'.length,ratecontainerarray[0].lastIndexOf('</p>\r\n\t\t\t\t\t\t\t')).trim();
                            buy =ratecontainerarray[1].substring(ratecontainerarray[1].indexOf('<span style="font-size: 12px;">')+'<span style="font-size: 12px;">'.length,ratecontainerarray[1].lastIndexOf('</span></p>')).trim();
                        }else {
                            buy =ratecontainerarray[1].substring(ratecontainerarray[1].indexOf('\r\n\t\t\t\t\t\t\t\t'),ratecontainerarray[1].length).trim();
                        }

                        var sale =ratecontainerarray[2].substring(ratecontainerarray[2].indexOf('class="senratebot">')+'class="senratebot">'.length,ratecontainerarray[2].length).trim();

                        storerate[lablearray[0]]=curency;
                        storerate[lablearray[1]]=buy;
                        storerate[lablearray[2]]=sale;

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

}//class


module.exports=function () {
    return new stb();
};
