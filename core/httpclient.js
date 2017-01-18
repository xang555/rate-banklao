/**
 * Created by xang on 1/13/2017.
 */

"use strict";

var request=require('request');
var promise =require('bluebird');

function httpclient() {

    this.call=function (url) {

        var  option = {};
        option. headers ={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'
        }

        return new promise(function (resolve, reject) {

            request(url,option,function (error, res, body) {
                if (error){
                    reject(error);
                }else  if (res.statusCode==200){
                    resolve(body.toString());
                }

            });

        });

    }

}

module.exports =function () {
    return new httpclient();
};