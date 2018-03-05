/**
 * Created by xang on 3/19/2017.
 */

"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();
var promise =require('bluebird');

function apb() {

    this.rateinfo=function () {

        var storeratearray=[];
        var lablearray=['Currency','Buy_cash','Buy_traff','Sale'];
        var labelrateinfo = ['Date','rate'];
        var rateinfo ={};

        return new promise(function (resolve, reject) {

            httpclient.call(conf.serverurl.apb)
                .then(function (stringhtml) {

                    var stardatetproint=stringhtml.indexOf('<h5>ອັດຕາແລກປ່ຽນວັນທີ:')+'<h5>ອັດຕາແລກປ່ຽນວັນທີ:'.length;
                    var enddateproint=stringhtml.indexOf('</h5>',stardatetproint);
                    var date=stringhtml.substring(stardatetproint,enddateproint).trim();
                    rateinfo[labelrateinfo[0]] = date;

                    var startproint=stringhtml.indexOf('<img src="images/usd_flag.jpg"');
                    var endproint=stringhtml.indexOf("</table>",startproint);
                    var newstringhtml=stringhtml.substring(startproint,endproint);
                    var spile=newstringhtml.split('</tr>');

                    for (var i=0 ; i <spile.length -1 ; i++){
                        var rate = {};
                        var ratedatelists = spile[i].split('<td class="agileits_w3layouts_td">');
                        var curency = ratedatelists[0].substring(ratedatelists[0].indexOf(' />')+' />'.length,ratedatelists[0].lastIndexOf('</th>'));
                        var buy_cash = ratedatelists[1].substring(ratedatelists[1].indexOf('class="big_title">')+'class="big_title">'.length,ratedatelists[1].lastIndexOf('</span>'));
                        var buy_traff = ratedatelists[2].substring(ratedatelists[2].indexOf('class="big_title">')+'class="big_title">'.length,ratedatelists[2].lastIndexOf('</span>'));
                        buy_traff = buy_traff.replace('&nbsp;</td>','-');
                        var sell = ratedatelists[3].substring(ratedatelists[3].indexOf('class="big_title">')+'class="big_title">'.length,ratedatelists[3].lastIndexOf('</span>'));
                        rate[lablearray[0]] = curency.trim();
                        rate[lablearray[1]] = buy_cash.trim();
                        rate[lablearray[2]] = buy_traff.trim();
                        rate[lablearray[3]] = sell.trim();
                        storeratearray.push(rate);
                    }

                    rateinfo[labelrateinfo[1]] = storeratearray;

                    resolve(rateinfo);

                }).catch(function (err) {
                reject(err);
            });

        });

    }

}

module.exports=function () {
    return new apb();
};