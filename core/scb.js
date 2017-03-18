/**
 * Created by xang on 1/18/2017.
 */

"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();
var promise =require('bluebird');

function scb() {

    this.rateinfo=function () {

        var storerate = {};
        var lablearray=['Currency','CurrencyCode','Buy','Sale','Transfer','Cash'];
        var lablerateinfo =['Date','rate'];
        var rateinfo={};
        var transferitem = {};
        var transferrates = [];
        var cashitem = {};
        var cashrates = [];

        return new promise(function (resolve, reject) {

            httpclient.call(conf.serverurl.scb)
                .then(function (stringhtml) {

                    // get date
                    var startdatepoint = stringhtml.indexOf('Updated at ') + 'Updated at '.length;
                    var enddatepoint = stringhtml.indexOf('</span>',startdatepoint);
                    var date = stringhtml.substring(startdatepoint,enddatepoint).trim();
                    rateinfo[lablerateinfo[0]] = date;

                    //get transfer rate information
                    var startproint=stringhtml.indexOf('<tr style="background-color: #F0F9FD;">');
                    var endproint=stringhtml.indexOf("</table>",startproint);
                    var newstringhtml=stringhtml.substring(startproint,endproint);
                    var spile=newstringhtml.split('<tr style="background-color:');

                    for (var i = 1 ; i < spile.length ;i++){
                        var tranferdataitem = spile[i].split('</td>');
                        var  curency = tranferdataitem[0].substring(tranferdataitem[0].indexOf('<td align="left">') + '<td align="left">'.length,tranferdataitem[0].length);
                        var  buy = tranferdataitem[1].substring(tranferdataitem[1].indexOf('<td align="right">') + '<td align="right">'.length,tranferdataitem[1].length);
                        var sell = tranferdataitem[2].substring(tranferdataitem[2].indexOf('<td align="right">') + '<td align="right">'.length,tranferdataitem[2].length);
                        transferitem[lablearray[0]] = curency.trim();
                        transferitem[lablearray[2]] = buy.trim();
                        transferitem[lablearray[3]] = sell.trim();
                        transferrates.push(transferitem);
                    }

                    storerate[lablearray[4]] = transferrates;

                    // get transfer rate information
                    var startproint=stringhtml.indexOf('<tr style="background-color: #F0F9FD;">',endproint);
                     var endproint=stringhtml.indexOf("</table>",startproint);
                     var newstringhtml=stringhtml.substring(startproint,endproint);
                    var spile=newstringhtml.split('<tr style="background-color:');

                    for (var i = 1 ; i < spile.length ;i++){
                        var tranferdataitem = spile[i].split('</td>');
                        var  curency = tranferdataitem[0].substring(tranferdataitem[0].indexOf('<td align="left">') + '<td align="left">'.length,tranferdataitem[0].length);
                        var  buy = tranferdataitem[1].substring(tranferdataitem[1].indexOf('<td align="right">') + '<td align="right">'.length,tranferdataitem[1].length);
                        var sell = tranferdataitem[2].substring(tranferdataitem[2].indexOf('<td align="right">') + '<td align="right">'.length,tranferdataitem[2].length);
                        cashitem[lablearray[0]] = curency.trim();
                        cashitem[lablearray[2]] = buy.trim();
                        cashitem[lablearray[3]] = sell.trim();
                        cashrates.push(cashitem);
                    }

                    storerate[lablearray[5]] = cashrates;
                    rateinfo[lablerateinfo[1]] = storerate;

                    resolve(rateinfo);

                }).catch(function (err) {
                reject(err);
            });

        });

    }


}//class cur string


module.exports = function () {
    return new scb();
}