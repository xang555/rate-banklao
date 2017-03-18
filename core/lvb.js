/**
 * Created by xang on 7/3/2016.
 */

"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();
var promise =require('bluebird');


var lvbdateurl = 'http://laovietbank.com.la/la/exchange/exchange-rate.html';

function lvb() {

    this.rateinfo = function () {

        var storeratearray = [];
        var lablearray = ['Currency', 'Buy', 'Sale'];
        var labelrateinfo = ['Date', 'rate'];
        var rateinfo = {};

        return new promise(function (resolve, reject) {

            httpclient.call(conf.serverurl.lvb)
                .then(function (stringhtml) {


                    var startproint = stringhtml.indexOf("<tbody>");
                    var endproint = stringhtml.indexOf("</tbody>");
                    var newstringhtml = stringhtml.substring(startproint + "<tbody>".length, endproint);
                    var spile = newstringhtml.split("</tr>");

                    for (var i = 0; i < spile.length - 1; i++) {
                        var newspile = spile[i].split("</td>");
                        var storerate = {};

                        var curency = newspile[0].substring(newspile[0].indexOf("width=\"64\">") + "width=\"64\">".length, newspile[0].lastIndexOf("&nbsp"));
                        var buy = newspile[2].substring(newspile[2].indexOf("width=\"64\">") + "width=\"64\">".length, newspile[2].length);
                        var sale = newspile[3].substring(newspile[3].indexOf("width=\"64\">") + "width=\"64\">".length, newspile[3].length);

                        if (i === 2 || i === 7) {
                            curency = newspile[0].substring(newspile[0].indexOf("width=\"64\">") + "width=\"64\">".length, newspile[0].length);
                            buy = newspile[2].substring(newspile[2].indexOf("width=\"64\">") + "width=\"64\">".length, newspile[2].length);
                            sale = newspile[3].substring(newspile[3].indexOf("width=\"64\">") + "width=\"64\">".length, newspile[3].length);
                        }

                        storerate[lablearray[0]] = curency.trim();
                        storerate[lablearray[1]] = buy.trim();
                        storerate[lablearray[2]] = sale.trim();
                        storeratearray.push(storerate);

                    }

                    //get date

                    httpclient.call(lvbdateurl)
                        .then(function (html) {


                            var startdateproint = html.indexOf('value="') + 'value="'.length;
                            var enddateproint = html.indexOf('"/>', startdateproint);
                            var date = html.substring(startdateproint, enddateproint).trim();

                            rateinfo[labelrateinfo[0]] = date;
                            rateinfo[labelrateinfo[1]] = storeratearray;
                            resolve(rateinfo);

                }).catch(function (err) {
                   reject(err);
                 });

                }).catch(function (err) {
               reject(err);
            });

        });

    }

}

module.exports=function () {
    return new lvb();
}