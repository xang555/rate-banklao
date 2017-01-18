/**
 * Created by xang on 1/13/2017.
 */

"use strict";

var bcel =require('./core/bcel')();
var ldb =require('./core/ldb')();
var acleda =require('./core/acleda')();
var bfl =require('./core/bfl')();
var bol =require('./core/bol')();
var lvb =require('./core/lvb')();
var psb =require('./core/psb')();
var stb =require('./core/stb')();
var jdb =require('./core/jdb')();
var kskb =require('./core/kskb')();
var anz =require('./core/anz')();
var mhjb =require('./core/mhjb')();

exports.bcel = function () {return bcel.rateinfo();}
exports.ldb = function(){return ldb.rateinfo()};
exports.acleda = function(){return acleda.rateinfo()};
exports.bfl = function(){return bfl.rateinfo()};
exports.bol = function(){return bol.rateinfo()};
exports.lvb = function(){return lvb.rateinfo()};
exports.psb = function (){return psb.rateinfo()};
exports.stb = function (){return stb.rateinfo()};
exports.jdb = function (){return jdb.rateinfo()};
exports.kskb = function (){return kskb.rateinfo()};
exports.anz = function (){return anz.rateinfo()};
exports.mhjb = function (){return mhjb.rateinfo()};