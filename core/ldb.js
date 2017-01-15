/**
 * Created by xang on 7/2/2016.
 */

"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();


function ldb() {

    this.rateinfo=function (okcallback, errorcallback) {

        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale'];
        var labelrateinfo = ['Date','rate'];
        var rateinfo ={};

        httpclient.call(conf.serverurl.ldb,function ok(stringhtml) {

            //date
            var startdateindex =stringhtml.indexOf('Date:')+'Date:'.length;
            var lastdateindex =stringhtml.indexOf('</td>',startdateindex);
            var date = stringhtml.substring(startdateindex,lastdateindex).trim();

            //get rate
            var startindex =stringhtml.indexOf('<tr bgcolor="#c2c2c2">');
            var lastindex =stringhtml.lastIndexOf('<td align="center" >');
            var ratehtml = stringhtml.substring(startindex,lastindex);
            var ratearrayhtml = ratehtml.split('<td align="center" >');

                for(var i =0 ;i < ratearrayhtml.length-1;i++){
                    var storerate = {};
                    var curencyhtml = ratearrayhtml[i].split('<td height="20"');
                    var curency = curencyhtml[1].substring(curencyhtml[1].indexOf('<td align="right" >') + '<td align="right" >'.length,curencyhtml[1].lastIndexOf('</td>')).trim();
                    var buy = curencyhtml[2].substring(curencyhtml[2].indexOf('align="right" >')+'align="right" >'.length,curencyhtml[2].lastIndexOf('</td>')).trim();
                    var sale =curencyhtml[4].substring(curencyhtml[4].indexOf('align="right" >')+'align="right" >'.length,curencyhtml[4].lastIndexOf('</td>')).trim();

                    storerate[lablearray[0]]=curency;
                    storerate[lablearray[1]]=buy;
                    storerate[lablearray[2]]=sale;

                    storeratearray.push(storerate);
                }

            rateinfo[labelrateinfo[0]] = date;
            rateinfo[labelrateinfo[1]] = storeratearray;
            okcallback(rateinfo);

        },function error(err) {
            errorcallback(err);
        });

    }

}

module.exports=function () {
    return new ldb();
};