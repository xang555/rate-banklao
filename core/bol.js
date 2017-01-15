/**
 * Created by xang on 6/18/2016.
 */
"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();

function bol() {

    this.rateinfo=function (okcallback, errorcallback) {

        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale'];
        var labelrateinfo = ['Date','rate'];
        var rateinfo ={};

        httpclient.call(conf.serverurl.bol,function ok(stringhtml) {

           //get date
            var startdateproint=stringhtml.indexOf("Exchange Rates on")+'Exchange Rates on'.length;
            var enddateproint=stringhtml.indexOf("</span></span>");
            var date=stringhtml.substring(startdateproint,enddateproint).trim();


           // get rate information
            var startproint=stringhtml.indexOf("<tr bgcolor=\"#D2EDFF\">");
            var endproint=stringhtml.lastIndexOf("</table>",stringhtml.length-1);
            var newstringhtml=stringhtml.substring(startproint,endproint);
            var spile=newstringhtml.split("</tr>");

            for (var i=0;i<spile.length-1;i++){
                var valrateinfo={};
                var newsubstringhtml=spile[i].substring(spile[i].indexOf("</div></td>"),spile[i].length-1).split("</div></td>");
                valrateinfo[lablearray[0]]=newsubstringhtml[3].substring(newsubstringhtml[3].indexOf("<strong>")+8,newsubstringhtml[3].lastIndexOf("</strong>")).trim();
                valrateinfo[lablearray[1]]=newsubstringhtml[4].substring(newsubstringhtml[4].indexOf("<strong>")+8,newsubstringhtml[4].lastIndexOf("</strong>")).trim();
                valrateinfo[lablearray[2]]=newsubstringhtml[5].substring(newsubstringhtml[5].indexOf("<strong>")+8,newsubstringhtml[5].lastIndexOf("</strong>")).trim();
                if (i===4){
                    valrateinfo[lablearray[0]]=newsubstringhtml[3].substring(newsubstringhtml[3].indexOf("<strong>")+8,newsubstringhtml[3].lastIndexOf("</strong>")).trim();
                    valrateinfo[lablearray[1]]=newsubstringhtml[4].substring(newsubstringhtml[4].indexOf("style42\"")+9,newsubstringhtml[4].length).replace("<strong>,</strong>",",").trim();
                    valrateinfo[lablearray[2]]=newsubstringhtml[5].substring(newsubstringhtml[5].lastIndexOf("style42\"")+9,newsubstringhtml[5].length).trim();
                }else if (i===13){
                    valrateinfo[lablearray[2]]=newsubstringhtml[5].substring(newsubstringhtml[5].lastIndexOf("<strong>")+8,newsubstringhtml[5].lastIndexOf("</strong>")-9).trim();
                }else if (i===16){
                    valrateinfo[lablearray[0]]=newsubstringhtml[3].substring(newsubstringhtml[3].lastIndexOf("style42\"")+9,newsubstringhtml[3].length).trim();
                    valrateinfo[lablearray[1]]=newsubstringhtml[4].substring(newsubstringhtml[4].indexOf("style42\"")+9,newsubstringhtml[4].length).trim();
                    valrateinfo[lablearray[2]]=newsubstringhtml[5].substring(newsubstringhtml[5].lastIndexOf("style42\"")+9,newsubstringhtml[5].length).trim();
                }

                storeratearray.push(valrateinfo);
            }

            rateinfo[labelrateinfo[0]] = date;
            rateinfo[labelrateinfo[1]] = storeratearray;

            okcallback(rateinfo);

        },function error(err) {
            errorcallback(err);
        });

    }//rateinfo

}


new bol().rateinfo(function (rate) {
    console.log(rate);
},function (err) {
    console.log(err);
});


module.exports=function () {
    return new bol();
};
