/**
 * Created by xang on 6/17/2016.
 */
"use strict";

function conf() {

    this.serverurl={
        bcel:"https://www.bcel.com.la:8083/services/exchange.php?langid=1",
        bol:"http://www.bol.gov.la/upload_reference/opd/rate/allrate.php",
        ldb:"http://www.ldblao.la/ldblao/index.php",
        stb:"http://stbanklaos.la/index_la.php",
        psb:"http://www.phongsavanhbank.com/psv/index.php",
        acleda:"http://www.acledabank.com.la/la/eng/",
        bfl:"http://www.banquefrancolao.com/index.aspx",
        lvb:"http://laovietbank.com.la/la/"
    }

}

module.exports=function () {
    return new conf();
}