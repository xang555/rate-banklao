# rate-banklao

## this project is rate bot retrieve rate money from any bank in laos

### list bank that support 

- **BCEL**
- **LDB**
- **BOL**
- **LVB**
- **BFL**
- **ACLEDA**
- **PSB**
- **STB**

# install

```
$ npm install rate-banklao --save

```
# usage

retrieve rate money bcel bank 

```
var rate =require('rate-banklao');

rate.bcel(function (rate) {
    console.log(rate);
},function (err) {
    console.log(err);
});

```
result from runing above code 

```
[ { Currency: 'USD', Buy: '8,169.00', Sale: '8,207.00' },
  { Currency: 'THB', Buy: '231.47', Sale: '233.20' },
  { Currency: 'AUD', Buy: '5,922.00', Sale: '6,040.00' },
  { Currency: 'CAD', Buy: '5,843.00', Sale: '5,959.00' },
  { Currency: 'CHF', Buy: '7,598.00', Sale: '7,753.00' },
  { Currency: 'CNY', Buy: '1,173.00', Sale: '1,197.00' },
  { Currency: 'DKK', Buy: '-', Sale: '1,225.00' },
  { Currency: 'EUR', Buy: '8,470.00', Sale: '8,513.00' },
  { Currency: 'GBP', Buy: '9,723.00', Sale: '9,921.00' },
  { Currency: 'HKD', Buy: '-', Sale: '1,098.00' },
  { Currency: 'JPY', Buy: '69.91', Sale: '71.31' },
  { Currency: 'NOK', Buy: '-', Sale: '1,006.00' },
  { Currency: 'SEK', Buy: '-', Sale: '953.00' },
  { Currency: 'SGD', Buy: '-', Sale: '5,933.00' },
  { Currency: 'VND', Buy: '-', Sale: '0.37' } ]
  
  ```
  
  # Method
  
### rate-banklao.bcel(success,error) -> retrieve rate money from bcel bank.

### rate-banklao.ldb(success,error) -> retrieve rate money from ldb bank.

### rate-banklao.bol(success,error) -> retrieve rate money from bol bank.

### rate-banklao.stb(success,error) -> retrieve rate money from stb bank.

### rate-banklao.lvb(success,error) -> retrieve rate money from lvb bank.

### rate-banklao.bfl(success,error) -> retrieve rate money from bfl bank.

### rate-banklao.psb(success,erro) -> retrieve rate money from psb bank.

### rate-banklao.acleda(success,error) ->  retrieve rate money from acleda bank.
 
  
  - success is a function when success retrieve rate from bank and pass rate parameter instead Rate  **#success(rate){}**
  - errorr is a function when error retrieve rate and return error pass to parameter err **#error(err){}**
  
  
  
