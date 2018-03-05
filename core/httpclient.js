/**
 * Created by xang on 1/13/2017.
 */

"use strict";

var request=require('request');
var promise =require('bluebird');
var agents = require('browser-agents');

function httpclient() {

    var  option = {};
    option.headers ={
        'User-Agent': agents.random(),
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
    }

    this.call=function (url, opt = option) {

        return new promise(function (resolve, reject) {

            request(url,opt,function (error, res, body) {
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