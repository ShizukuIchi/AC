# 透過程式測試程式

## 套件與軟體
* Node.js 和 npm
  * macOS
    * 更新與安裝
      * brew update
      * brew install node
    * 查看版本
      * node -v
      * npm -v
* [Mocha 和 Chai](#用-mocha-寫測試)
* 瀏覽器

## FizzBuzz 功能
* 將一個大於 0 的整數傳到 fizzBuzz() 函式，並且該函式可以依下面的規則回傳結果
  * 若該整數能被 3 整除，回傳 Fizz
  * 若該整數能被 5 整除，回傳 Buzz
  * 若該整數能被 3 和 5 同時整除，回傳 FizzBuzz
  * 若都不能整除，回傳該整數

## 用 Mocha 寫測試
* 初始化專案
  * npm init
* npm 安裝 Mocha 和 Chai
  * npm install mocha chai --save-dev
* 執行
  * ../test/index.html

## 測試案例
* 【 Case 1 】input: 4 , expect output : 4
* 【 Case 2 】input: 6 , expect output : Fizz
* 【 Case 3 】input: 10, expect output : Buzz
* 【 Case 4 】input: 30, expect output : FizzBuzz

## 輸出測試報告

![](https://oranwind.s3.amazonaws.com/2019/May/_____2019_05_13___3_37_42-1557733079490.png)


## GitHub Page
* https://archerhuang.github.io/AC/Mocha_Chai/FizzBuzz/test/

## 檔案說明

| 編號 | 資料夾 |  檔案名稱 | 說明  |
|:---:|---|---|---|
|1| node_modules |   | 存放 Mocha 和 Chai 的函式庫  |
|2| js |  fizzbuzz.js | FizzBuzz 功能程式碼  |
|3| test | fizzbuzz_spec.js  | 測試程式碼 |
|3| test | index.html  |  輸出測試報告的 HTML 頁面 |
