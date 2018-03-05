/**
 * Created by xang on 6/17/2016.
 */
"use strict";

function conf() {

    this.serverurl={
        bcel:"http://www.bcel.com.la/bcel/exchange-rate.html",
        bol:"http://www.bol.gov.la/upload_reference/opd/rate/allrate.php",
        ldb:"http://www.ldblao.la/ldblao/index.php",
        stb:"http://stbanklaos.la/index_la.php",
        psb:"http://www.phongsavanhbank.com/psv/index.php",
        acleda:"http://www.acledabank.com.la/la/eng/",
        bfl:"https://www.banquefrancolao.com/",
        lvb:"http://laovietbank.com.la/la/",
        jdb:"http://www.jdbbank.com.la/index.php?r=site/exchange",
        kskb:'http://www.kasikornbank.com.la/LA/Rate/Pages/foreign_exchange_rate.aspx',
        anz:'http://www.anz.com/aus/ratefee/fxrates/fxpopup.asp',
        mhjb:'http://www.maruhanjapanbanklao.com/rates/',
        scb:'https://www.sacombank.com.la/la/en/Pages/default.aspx',
        lcnb:'http://www.laochinabank.com/index.php?r=site/rate',
        icbc:'http://vientiane.icbc.com.cn/ICBC/%E6%B5%B7%E5%A4%96%E5%88%86%E8%A1%8C/%E4%B8%87%E8%B1%A1%E7%BD%91%E7%AB%99/en/ProductsServices1/ExchangeRateofForeignCurrency/exchangerateofforeigncurrency.htm',
        byb:'http://www.booyoungbank.com/main.php',
        apb:'https://apb.com.la/exchange-rate-detail.php'
    }

}

module.exports=function () {
    return new conf();
}