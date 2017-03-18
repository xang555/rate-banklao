# rate-banklao

## retrieve rate money from any bank in laos

### support bank list 

- **BCEL bank** http://bcel.la/
- **Lao Development Bank (LDB)** http://www.ldblao.la
- **GOVERNOR OF BANK THE LAO PDR (BOL)** http://www.bol.gov.la
- **LaoVietBank (LVB)** http://laovietbank.com.la
- **Banque Franco-Lao (BFL)** http://www.banquefrancolao.com
- **ACLEDA Bank Lao (ACLEDA)** http://www.acledabank.com.la
- **Phongsavanh bank (PSB)** http://www.phongsavanhbank.com
- **ST bank (STB)** http://stbanklaos.la
- **Joint Development Bank (JDB)** http://www.jdbbank.com.la
- **Kasikornthai bank (KSKB)** http://www.kasikornbank.com.la
- **Anz bank (ANZ)**  http://www.anz.com
- **Maruhanjapan bank lao (MHJB)** http://www.maruhanjapanbanklao.com
- **Sacombank (scb)** https://www.sacombank.com.la/la/Pages/default.aspx

# install

```
$ npm install rate-banklao --save

```
# usage

retrieve rate money bcel bank 

```
var rate =require('rate-banklao');
var util =require('util');

rate.bcel()
.then(function (rate) {
    console.log(util.inspect(rate, false, null));
}).catch(function (err) {
    console.log(err);
});

```
result from runing above code 

```
{ date: '2017-01-13',
  rate: 
   [ { Currency: 'US Dollar',
       CurrencyCode: 'USD 1-20',
       Sale: '8,207',
       Buy: { Note: '8,169', Bill: '8,170', Efi: '8,172' } },
     { Currency: 'US Dollar',
       CurrencyCode: 'USD 50-100',
       Sale: '8,207',
       Buy: { Note: '8,170', Bill: '8,170', Efi: '8,172' } },
     { Currency: 'Thai Baht',
       CurrencyCode: 'THB',
       Sale: '233.2',
       Buy: { Note: '231.47', Bill: '231.47', Efi: '231.52' } },
     { Currency: 'Euro',
       CurrencyCode: 'EUR 1-20',
       Sale: '8,513',
       Buy: { Note: '8,470', Bill: '8,471', Efi: '8,473' } },
     { Currency: 'Euro',
       CurrencyCode: 'EUR 50-500',
       Sale: '8,513',
       Buy: { Note: '8,471', Bill: '8,471', Efi: '8,473' } },
       .
       .
       .
       
  ```
  
 **you have to use promise style coding** 
  
  
# Method

when you install and require module like this :

```
var rate =require('rate-banklao');

```
you will have instane's module. so you can use any method below.
  
### bcel()  -> promise

 return promise object which it is money rate from bcel bank
    
    example :
    
    
```
var rate =require('rate-banklao');
var util =require('util');

rate.bcel()
.then(function (rate) {
    console.log(util.inspect(rate, false, null));
}).catch(function (err) {
    console.log(err);
});

```

method return json object like this :

```
{ date: '2017-01-13',
  rate: 
   [ { Currency: 'US Dollar',
       CurrencyCode: 'USD 1-20',
       Sale: '8,207',
       Buy: { Note: '8,169', Bill: '8,170', Efi: '8,172' } },
     { Currency: 'US Dollar',
       CurrencyCode: 'USD 50-100',
       Sale: '8,207',
       Buy: { Note: '8,170', Bill: '8,170', Efi: '8,172' } },
     { Currency: 'Thai Baht',
       CurrencyCode: 'THB',
       Sale: '233.2',
       Buy: { Note: '231.47', Bill: '231.47', Efi: '231.52' } },
     { Currency: 'Euro',
       CurrencyCode: 'EUR 1-20',
       Sale: '8,513',
       Buy: { Note: '8,470', Bill: '8,471', Efi: '8,473' } },
     { Currency: 'Euro',
       CurrencyCode: 'EUR 50-500',
       Sale: '8,513',
       Buy: { Note: '8,471', Bill: '8,471', Efi: '8,473' } },
       .
       .
       .

```
    

### ldb() -> promise

 return  promise object which it is money rate from Lao Development Bank (LDB)

example result :

```
{ Date: '13-01-2017',
  rate: 
   [ { Currency: 'USD', Buy: '8,187.00', Sale: '8,207.00' },
     { Currency: 'THB', Buy: '233.41', Sale: '235.14' },
     { Currency: 'GBP', Buy: '9,691.00', Sale: '9,911.00' },
     { Currency: 'CHF', Buy: '7,579.00', Sale: '7,779.00' },
     { Currency: 'JPY', Buy: '69.81', Sale: '71.06' },
     { Currency: 'AUD', Buy: '5,893.00', Sale: '6,063.00' },
     { Currency: 'CNY', Buy: '1,158.00', Sale: '1,181.00' },
     { Currency: 'VND', Buy: '0.3663', Sale: '0.3736' },
     { Currency: 'CAD', Buy: '5,820.00', Sale: '6,010.00' } ] }

```

### bol()  -> promise 

 return  promise object which it is money rate from GOVERNOR OF BANK THE LAO PDR (BOL)

example result :

```
{ Date: '03 Jan 2017',
  rate: 
   [ { Currency: 'USD', Buy: '8,203', Sale: '8,207' },
     { Currency: 'EUR', Buy: '8,559', Sale: '8,602' },
     { Currency: 'JPY', Buy: '68.60', Sale: '69.97' },
     { Currency: 'GBP', Buy: '9,899', Sale: '10,097' },
     { Currency: 'CHF', Buy: '7,647', Sale: '7,800' },
     { Currency: 'AUD', Buy: '5,800', Sale: '5,916' },
     { Currency: 'NZD', Buy: '5,598', Sale: '5,710' },
     { Currency: 'CAD', Buy: '5,817', Sale: '5,933' },
     { Currency: 'BND', Buy: '5,339', Sale: '5,446' },
     { Currency: 'CNY', Buy: '1,169', Sale: '1,180' },
     { Currency: 'DKK', Buy: '1,090', Sale: '1,112' },
     { Currency: 'HKD', Buy: '997', Sale: '1,017' },
     { Currency: 'KRW', Buy: '6.40', Sale: '6.52' },
     { Currency: 'MYR', Buy: '1,722', Sale: '1,757' },
     { Currency: 'NOK', Buy: '896', Sale: '913' },
     { Currency: 'PHP', Buy: '155.47', Sale: '158.58' },
     { Currency: 'SEK', Buy: '849', Sale: '866' },
     { Currency: 'SGD', Buy: '5,338', Sale: '5,445' },
     { Currency: 'THB', Buy: '228.81', Sale: '230.53' },
     { Currency: 'TWD', Buy: '239.36', Sale: '244.15' },
     { Currency: 'SDR', Buy: '10,920', Sale: '11,138' } ] }


```

### stb()  -> promise

 return  promise object which it is money rate from ST bank (STB)

example result :

```
{ Date: 'January 13, 2017',
  rate: 
   [ { Currency: 'USD', Buy: '8,187', Sale: '8,207' },
     { Currency: 'THB', Buy: '231.47', Sale: '233.20' },
     { Currency: 'EUR', Buy: '8,440', Sale: '8,482' },
     { Currency: 'AUD', Buy: '5,876', Sale: '5,990' },
     { Currency: 'JPY', Buy: '69.58', Sale: '70.91' },
     { Currency: 'CNY', Buy: '1,151', Sale: '1,173' } ] }

```

### lvb() -> promise

 return  promise object which it is money rate from LaoVietBank (LVB)

example result :

```
{ Date: '13-01-2017',
  rate: 
   [ { Currency: 'USD', Buy: '8,169', Sale: '8,207' },
     { Currency: 'VND', Buy: '0.3708', Sale: '0.3782' },
     { Currency: 'THB', Buy: '232.59', Sale: '234.34' },
     { Currency: 'EUR', Buy: '8,630', Sale: '8,673' },
     { Currency: 'AUD', Buy: '5,924', Sale: '6,043' },
     { Currency: 'CHF', Buy: '7,625', Sale: '7,777' },
     { Currency: 'GBP', Buy: '9,672', Sale: '9,865' },
     { Currency: 'JPY', Buy: '68.20', Sale: '69.57' },
     { Currency: 'CAD', Buy: '5,841', Sale: '5,957' },
     { Currency: 'SGD', Buy: '5,321', Sale: '5,427' },
     { Currency: 'CNY', Buy: '1,158', Sale: '1,181' } ] }

```

### bfl() -> promise

 return  promise object which it is money rate from Banque Franco-Lao (BFL)

example result :

```
{ Date: '04/01/2017',
  rate: 
   [ { Currency: 'EUR', Buy: '8,494.00', Sale: '8,537.00' },
     { Currency: 'USD', Buy: '8,182.00', Sale: '8,210.00' },
     { Currency: 'THB', Buy: '229.44', Sale: '231.16' } ] }

```

### psb() -> promise 

return  promise object which it is money rate from Phongsavanh bank (PSB)

example result :

```
{ Date: '13/01/2017',
  rate: 
   [ { Currency: 'USD', Buy: '8,187', Sale: '8,207' },
     { Currency: 'THB', Buy: '234.18', Sale: '235.93' },
     { Currency: 'EUR', Buy: '8,460', Sale: '8,502' },
     { Currency: 'GBP', Buy: '9,679', Sale: '9,873' },
     { Currency: 'AUD', Buy: '5,842', Sale: '5,958' },
     { Currency: 'CAD', Buy: '5,794', Sale: '5,910' },
     { Currency: 'CHF', Buy: '7,571', Sale: '7,722' },
     { Currency: 'CNY', Buy: '1,161', Sale: '1,184' },
     { Currency: 'SGD', Buy: '5,151', Sale: '5,254' },
     { Currency: 'JPY', Buy: '68.56', Sale: '69.93' },
     { Currency: 'VND', Buy: '0.354', Sale: '0.360' },
     { Currency: 'MYR', Buy: '1,653', Sale: '1,686' },
     { Currency: 'KRW', Buy: '6.38', Sale: '6.51' },
     { Currency: 'HKD', Buy: '958', Sale: '978' } ] }

```

### acleda() -> promise 
return  promise object which it is money rate from ACLEDA Bank Lao (ACLEDA)

example result :

```
{ Date: 'January 13, 2017  1:15 pm',
  rate: 
   [ { Currency: 'AUD', Buy: '5,890.00', Sale: '6,008.00' },
     { Currency: 'CAD', Buy: '5,781.00', Sale: '5,896.00' },
     { Currency: 'EUR', Buy: '8,469.00', Sale: '8,511.00' },
     { Currency: 'GBP', Buy: '9,707.00', Sale: '9,901.00' },
     { Currency: 'JPY', Buy: '69.88', Sale: '71.28' },
     { Currency: 'KHR', Buy: '1.9823', Sale: '2.0219' },
     { Currency: 'THB', Buy: '234.18', Sale: '235.93' },
     { Currency: 'USD', Buy: '8,187.00', Sale: '8,207.00' },
     { Currency: 'VND', Buy: '0.3678', Sale: '0.3751' } ] }

```

### jdb() -> promise 

return  promise object which it is money rate from Joint Development Bank (JDB)

example result :

```
{ Date: '13-01-2017 09:35:31',
  rate: 
   [ { Currency: 'USD',
       Buy: { Note: '8,167.00', TC_SB_TT: '8,167.00' },
       Sale: { TC_SB_TT: '8,205.00', Note: '8,207.00' } },
     { Currency: 'THB',
       Buy: { Note: '233.36', TC_SB_TT: '233.36' },
       Sale: { TC_SB_TT: '235.11', Note: '235.11' } },
     { Currency: 'GBP',
       Buy: { Note: '9,659.00', TC_SB_TT: '9,659.00' },
       Sale: { TC_SB_TT: '9,850.00', Note: '9,852.00' } },
     { Currency: 'CAD',
       Buy: { Note: '5,885.00', TC_SB_TT: '5,885.00' },
       Sale: { TC_SB_TT: '6,000.00', Note: '6,002.00' } },
     { Currency: 'AUD',
       Buy: { Note: '5,904.00', TC_SB_TT: '5,904.00' },
       Sale: { TC_SB_TT: '6,020.00', Note: '6,022.00' } },
     { Currency: 'JPY',
       Buy: { Note: '69.00', TC_SB_TT: '69.00' },
       Sale: { TC_SB_TT: '70.18', Note: '70.38' } },
     { Currency: 'EUR',
       Buy: { Note: '8,518.00', TC_SB_TT: '8,518.00' },
       Sale: { TC_SB_TT: '8,559.00', Note: '8,561.00' } },
     { Currency: 'SGD',
       Buy: { Note: '5,363.00', TC_SB_TT: '5,363.00' },
       Sale: { TC_SB_TT: '5,468.00', Note: '5,470.00' } },
     { Currency: 'HKD',
       Buy: { Note: '889.00', TC_SB_TT: '889.00' },
       Sale: { TC_SB_TT: '904.00', Note: '906.00' } },
     { Currency: 'CHF',
       Buy: { Note: '7,682.00', TC_SB_TT: '7,682.00' },
       Sale: { TC_SB_TT: '7,834.00', Note: '7,836.00' } },
     { Currency: 'NZD',
       Buy: { Note: '5,624.00', TC_SB_TT: '5,624.00' },
       Sale: { TC_SB_TT: '5,734.00', Note: '5,736.00' } },
     { Currency: 'DKK',
       Buy: { Note: '982.00', TC_SB_TT: '982.00' },
       Sale: { TC_SB_TT: '999.00', Note: '1,001.00' } },
     { Currency: 'SEK',
       Buy: { Note: '744.00', TC_SB_TT: '744.00' },
       Sale: { TC_SB_TT: '756.00', Note: '758.00' } },
     { Currency: 'NOK',
       Buy: { Note: '812.00', TC_SB_TT: '812.00' },
       Sale: { TC_SB_TT: '826.00', Note: '828.00' } },
     { Currency: 'CNY',
       Buy: { Note: '1,015.00', TC_SB_TT: '1,015.00' },
       Sale: { TC_SB_TT: '1,033.00', Note: '1,035.00' } },
     { Currency: 'BND',
       Buy: { Note: '5,363.00', TC_SB_TT: '5,363.00' },
       Sale: { TC_SB_TT: '5,468.00', Note: '5,470.00' } } ] }

```

### kskb() -> promise 
return  promise object which it is money rate from Kasikornthai bank (KSKB)

example result :

```
{ Date: '13/01/2017',
  rate: 
   [ { CurrencyType: 'US Dollar (1-20)',
       Currency: 'USD',
       Buy: { Note: '8,180.00', Bill: '8,180.00', TT: '8,180.00' },
       Sale: { Note: '8,207.00', TT: '8,207.00' } },
     { CurrencyType: 'US Dollar (50-100)',
       Currency: 'USD',
       Buy: { Note: '8,180.00', Bill: '8,180.00', TT: '8,180.00' },
       Sale: { Note: '8,207.00', TT: '8,207.00' } },
     { CurrencyType: 'Thai Baht',
       Currency: 'THB',
       Buy: { Note: '233.35', Bill: '233.35', TT: '233.35' },
       Sale: { Note: '235.10', TT: '235.10' } } ] }
```

### anz() -> promise 

return  promise object which it is money rate from Anz bank (ANZ)

example result :

```
{ Date: ' Friday, 13 January 2017',
  rate: 
   [ { Currency: 'USD',
       Buy: { IMT_TT: '0.7816', Travel_Card_Chq: '0.7858', Notes: '0.7913' },
       Sale: { IMT_TT: '0.7176', Travel_Card_Chq: '0.7176', Notes: '0.7176' } },
     { Currency: 'EUR',
       Buy: { IMT_TT: '0.7374', Travel_Card_Chq: '0.7492', Notes: '0.7629' },
       Sale: { IMT_TT: '0.6704', Travel_Card_Chq: '0.6704', Notes: '0.6704' } },
     { Currency: 'GBP',
       Buy: { IMT_TT: '0.6437', Travel_Card_Chq: '0.6493', Notes: '0.6551' },
       Sale: { IMT_TT: '0.5875', Travel_Card_Chq: '0.5875', Notes: '0.5875' } },
     { Currency: 'CAD',
       Buy: { IMT_TT: '1.0318', Travel_Card_Chq: '1.0425', Notes: '1.0769' },
       Sale: { IMT_TT: '0.9415', Travel_Card_Chq: '0.9415', Notes: '0.9415' } },
     { Currency: 'CNY',
       Buy: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: '5.4760' },
       Sale: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: '4.8762' } },
     { Currency: 'DKK',
       Buy: { IMT_TT: '5.5490', Travel_Card_Chq: '5.5620', Notes: '6.0040' },
       Sale: { IMT_TT: '4.9900', Travel_Card_Chq: 'N/A', Notes: '4.9900' } },
     { Currency: 'FJD',
       Buy: { IMT_TT: '1.6037', Travel_Card_Chq: '1.6070', Notes: '1.7171' },
       Sale: { IMT_TT: '1.4995', Travel_Card_Chq: 'N/A', Notes: '1.4995' } },
     { Currency: 'HKD',
       Buy: { IMT_TT: '6.0770', Travel_Card_Chq: '6.1140', Notes: '6.4740' },
       Sale: { IMT_TT: '5.5640', Travel_Card_Chq: '5.5640', Notes: '5.5640' } },
     { Currency: 'INR',
       Buy: { IMT_TT: '53.4540', Travel_Card_Chq: '54.5230', Notes: 'N/A' },
       Sale: { IMT_TT: '48.4740', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'IDR',
       Buy: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'JPY',
       Buy: 
        { IMT_TT: '90.0800',
          Travel_Card_Chq: '91.0600',
          Notes: '95.6100' },
       Sale: 
        { IMT_TT: '81.7900',
          Travel_Card_Chq: '81.7900',
          Notes: '81.7900' } },
     { Currency: 'KES',
       Buy: { IMT_TT: 'O/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: 'O/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'MTL',
       Buy: { IMT_TT: 'O/A', Travel_Card_Chq: 'O/A', Notes: 'O/A' },
       Sale: { IMT_TT: 'O/A', Travel_Card_Chq: 'O/A', Notes: 'O/A' } },
     { Currency: 'XPF',
       Buy: { IMT_TT: '88.7630', Travel_Card_Chq: '89.1510', Notes: 'N/A' },
       Sale: { IMT_TT: '78.5260', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'NZD',
       Buy: { IMT_TT: '1.0832', Travel_Card_Chq: '1.0955', Notes: '1.1358' },
       Sale: { IMT_TT: '1.0148', Travel_Card_Chq: '1.0148', Notes: '1.0148' } },
     { Currency: 'NOK',
       Buy: { IMT_TT: '6.6920', Travel_Card_Chq: '6.7160', Notes: 'N/A' },
       Sale: { IMT_TT: '6.0710', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'PGK',
       Buy: { IMT_TT: 'O/A', Travel_Card_Chq: 'O/A', Notes: 'O/A' },
       Sale: { IMT_TT: '2.1195', Travel_Card_Chq: 'N/A', Notes: '2.0453' } },
     { Currency: 'PHP',
       Buy: { IMT_TT: '39.3540', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '35.2340', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'SAR',
       Buy: { IMT_TT: '2.9840', Travel_Card_Chq: '2.9960', Notes: 'N/A' },
       Sale: { IMT_TT: '2.6730', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'SGD',
       Buy: { IMT_TT: '1.1250', Travel_Card_Chq: '1.1380', Notes: '1.2190' },
       Sale: { IMT_TT: '1.0180', Travel_Card_Chq: '1.0180', Notes: '1.0180' } },
     { Currency: 'SBD',
       Buy: { IMT_TT: '6.0372', Travel_Card_Chq: '6.0531', Notes: 'N/A' },
       Sale: { IMT_TT: '5.4923', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'ZAR',
       Buy: 
        { IMT_TT: '10.6884',
          Travel_Card_Chq: '10.7686',
          Notes: '11.3975' },
       Sale: { IMT_TT: '9.5297', Travel_Card_Chq: 'N/A', Notes: '9.5297' } },
     { Currency: 'LKR',
       Buy: { IMT_TT: '117.8650', Travel_Card_Chq: '118.3320', Notes: 'N/A' },
       Sale: { IMT_TT: '106.1170', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'SEK',
       Buy: { IMT_TT: '7.0260', Travel_Card_Chq: '7.0440', Notes: 'N/A' },
       Sale: { IMT_TT: '6.3730', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'CHF',
       Buy: { IMT_TT: '0.8320', Travel_Card_Chq: '0.8330', Notes: '0.8920' },
       Sale: { IMT_TT: '0.7210', Travel_Card_Chq: 'N/A', Notes: '0.7210' } },
     { Currency: 'THB',
       Buy: 
        { IMT_TT: '28.6680',
          Travel_Card_Chq: '28.9380',
          Notes: '30.3270' },
       Sale: 
        { IMT_TT: '25.2810',
          Travel_Card_Chq: '25.2810',
          Notes: '25.2810' } },
     { Currency: 'AED',
       Buy: { IMT_TT: '2.8930', Travel_Card_Chq: '2.9045', Notes: '3.2708' },
       Sale: { IMT_TT: '2.6194', Travel_Card_Chq: 'N/A', Notes: '2.6194' } },
     { Currency: 'VUV',
       Buy: { IMT_TT: '86.4059', Travel_Card_Chq: '86.5655', Notes: 'N/A' },
       Sale: { IMT_TT: '76.3071', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'WST',
       Buy: { IMT_TT: '1.9866', Travel_Card_Chq: '1.9945', Notes: 'N/A' },
       Sale: { IMT_TT: '1.7170', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'BHD',
       Buy: { IMT_TT: '0.3140', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '0.2680', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'BDT',
       Buy: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '55.4580', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'CZK',
       Buy: { IMT_TT: '20.8822', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '17.9976', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'HUF',
       Buy: { IMT_TT: '244.0739', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '204.4664', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'JOD',
       Buy: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'MUR',
       Buy: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '25.3770', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'PKR',
       Buy: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'PLN',
       Buy: { IMT_TT: '3.3313', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '2.9310', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'TOP',
       Buy: { IMT_TT: '1.6880', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '1.6171', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'MYR',
       Buy: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: '3.5184' },
       Sale: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: '3.1496' } },
     { Currency: 'KRW',
       Buy: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: '938.1982' },
       Sale: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: '820.7904' } },
     { Currency: 'MXN',
       Buy: { IMT_TT: '17.5540', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '15.4639', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'TRY',
       Buy: { IMT_TT: '2.9747', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '2.6739', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'OMR',
       Buy: { IMT_TT: '0.3165', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '0.2710', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'QAR',
       Buy: { IMT_TT: '2.9594', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '2.5959', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'HRK',
       Buy: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: 'N/A', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'ILS',
       Buy: { IMT_TT: '3.2626', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '2.7265', Travel_Card_Chq: 'N/A', Notes: 'N/A' } },
     { Currency: 'KWD',
       Buy: { IMT_TT: '0.2484', Travel_Card_Chq: 'N/A', Notes: 'N/A' },
       Sale: { IMT_TT: '0.2168', Travel_Card_Chq: 'N/A', Notes: 'N/A' } } ] }
```


### mhjb() -> promise 
   return  promise object which it is money rate from Maruhanjapan bank lao (MHJB)

example result :

```
{ Date: '13-01-2017',
  rate: 
   [ { Currency: 'USD', Buy: '8,170', Sale: '8,207' },
     { Currency: 'THB', Buy: '231.47', Sale: '233.20' },
     { Currency: 'JPY', Buy: '69.91', Sale: '71.30' },
     { Currency: 'EUR', Buy: '8,470', Sale: 'N/A' },
     { Currency: 'AUD', Buy: '5,922', Sale: 'N/A' } ] }
```

### scb() -> promise
     return  promise object which it is money rate from Sacombank (scb)
example result :
```
{ Date: '9:40, 17/03/2017',
  rate: 
   { Transfer: 
      [ { Currency: 'VND', Buy: '0.3703', Sale: '0.3777' },
        { Currency: 'USD', Buy: '8,198', Sale: '8,221' },
        { Currency: 'THB', Buy: '238.50', Sale: '240.30' },
        { Currency: 'EUR', Buy: '8,663', Sale: '8,707' },
        { Currency: 'GBP', Buy: '9,813', Sale: '10,009' },
        { Currency: 'JPY', Buy: '69.80', Sale: '71.19' },
        { Currency: 'CNY', Buy: '1,208', Sale: '1,226' } ],
     Cash: 
      [ { Currency: 'VND', Buy: 'N/A', Sale: 'N/A' },
        { Currency: 'USD', Buy: '8,198', Sale: 'N/A' },
        { Currency: 'THB', Buy: '238.50', Sale: 'N/A' },
        { Currency: 'EUR', Buy: '8.663', Sale: 'N/A' },
        { Currency: 'GBP', Buy: '9,813', Sale: 'N/A' },
        { Currency: 'JPY', Buy: '69.80', Sale: 'N/A' },
        { Currency: 'CNY', Buy: 'N/A', Sale: 'N/A' } ] } }
```
  
  
