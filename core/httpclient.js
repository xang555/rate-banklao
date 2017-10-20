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
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
        }

        return new promise(function (resolve, reject) {

            request(url,option,function (error, res, body) {
                if (error){
                    reject(error);
                }else  if (res.statusCode==200){
                    resolve(body.toString());
                }else{
                    reject(res.statusCode+" => " + body.toString());
                }

            });

        });

    }

}

module.exports =function () {
    return new httpclient();
};