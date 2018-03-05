var assert = require('assert');
const rate = require('../index');

 /* bcel */
 describe('#BCEL blank', function() {
    
        it("Should return json object",async function() {
            const bcel = await rate.bcel();
            assert.equal(typeof bcel,'object')

        }); 
        
    });    
    
     /* ldb blank */
    describe('#LDB blank', function() {
        
            it("Should return json object",async function() {
                const ldb = await rate.ldb();
                assert.equal(typeof ldb,'object')
            });
    });


    /* bol blank */
    describe('#BOL blank', function() {
        
        it("Should return json object",async function() {
            const bol = await rate.bol();
             assert.equal(typeof bol,'object')
        });
    });


    /* stb blank */
    describe('#STB blank', function() {
            
            it("Should return json object",async function() {
                const stb = await rate.stb();
                 assert.equal(typeof stb,'object')

            });
    });

    /* lvb blank */
    describe('#LVB blank', function() {
                                    
        it("Should return json object",async function() {
            const lvb = await rate.lvb();
            assert.equal(typeof lvb,'object')
        });
        
    });



    /* bfl blank */
    describe('#bfl blank', function() {
        
        it("Should return json object",async function() {
             const blf = await rate.bfl();
            assert.equal(typeof blf,'object')

        });
    });


    /* psb blank */
    describe('#psb blank', function() {
        
        it("Should return json object",async function() {
            const psb = await rate.psb();
            assert.equal(typeof psb,'object')
        });
    });


    /* acleda blank */
    describe('#acleda blank', function() {
        
        it("Should return json object",async function() {
            const acleda = await rate.acleda();
            assert.equal(typeof acleda,'object')

        });
    });


    /* jdb blank */
    describe('#jdb blank', function() {
        
        it("Should return json object",async function() {
            const jdb = await rate.jdb();
            assert.equal(typeof jdb,'object')
        });
    });


    /* kskb blank */
    describe('#kskb blank', function() {
        
        it("Should return json object",async function() {
            const kskb = await rate.kskb();
            assert.equal(typeof kskb,'object')
        });
    });

    /* anz blank */
    describe('#anz blank', function() {
        
        it("Should return json object",async function() {
            const anz = await rate.anz();
            assert.equal(typeof anz,'object')
        });
    });


     /* mhjb blank */
     describe('#mhjb blank', function() {
        
        it("Should return json object",async function() {
            const mhjb = await rate.mhjb();
            assert.equal(typeof mhjb,'object')
        });
    });



      /* scb blank */
    describe('#scb blank', function() {
        
        it("Should return json object",async function() {
            const scb = await rate.scb();
            assert.equal(typeof scb,'object')
        });
    });


       /* apb blank */
       describe('#apb blank', function() {
        
        it("Should return json object",async function() {
            const apb = await rate.apb();
            assert.equal(typeof apb,'object')

        });
    });




