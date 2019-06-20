# 我的最愛餐廳

## Contents
- [簡介](#簡介)
- [環境建置與需求](#環境建置與需求)
- [clone 與安裝相依套件](#clone-與安裝相依套件)
- [執行方式](#執行方式)
- [功能](#功能)
- [畫面](#畫面)
- [Change Logs](#change_logs)
- [Contributor](#contributor)

## 簡介
* 使用者可新增、修改、刪除、搜尋與查看餐廳詳細資訊

## 環境建置與需求
* Node.js : v10.16.0
* express : ^4.17.1
* express-handlebars : ^3.1.0
* express-validator" : ^5.3.1
* handlebars : ^4.1.2
* method-override : ^3.0.0
* mongoose : ^5.6.0

## clone 與安裝相依套件
* 請在 `Console 1` 輸入下方指令
```
git clone https://github.com/ArcherHuang/AC.git
cd ./AC/RestaurantList_CRUD/models/seeds
node restaurantSeeder.js
cd ./AC/RestaurantList_CRUD
npm install
```

* 請在 `Console 2` 輸入下方指令
```
cd /Users/{使用者名稱}/mongodb/bin
./mongod --dbpath ~/mongodb-data --bind_ip 127.0.0.1
```

## 執行方式
* 請在 `Console 1` 輸入下方指令
```
npm run dev
```

## 網址

* http://localhost:3000/

## 功能

| 編號 | 功能 | 說明  |
|:---:|:---:|---|
| 1 | 首頁 | 顯示所有我的最愛餐廳 |
| 2 | 首頁與<br>詳細資訊頁 | 當頁面卷軸滑到下方時會出現移到最上方的按鈕，當卷軸在上方時移到最上方的按鈕會消失 |
| 3 | 搜尋 | 依所輸入的條件搜尋所有我的最愛餐廳符合關鍵字的名稱或類別 |
| 4 | 新增資訊 | 新增餐廳資訊 <br> ① 中文名稱、英文名稱、類別、電話、評分等欄位必填 <br> ② 透過 `express-validator` 驗證電話欄位是否為數字與 10 位數 <br> ③ 簡介欄位最多輸入 200 個字且即時顯示目前剩餘的字數 |
| 5 | 修改資訊 | 修改餐廳資訊 <br> ① 中文名稱、英文名稱、類別、電話、評分等欄位必填 <br> ② 透過 `express-validator` 驗證電話欄位是否為數字與 10 位數 <br> ③ 簡介欄位最多輸入 200 個字且即時顯示目前剩餘的字數 |
| 6 | 刪除餐廳 | 刪除餐廳 <br> ① 顯示提示訊息讓使用者確認 |
| 7 | 詳細資訊 | 顯示餐廳詳細資訊 |

## 畫面



## Change Logs

* https://github.com/ArcherHuang/AC/commits/master/RestaurantList_CRUD

## Contributor
* [Archer Huang](https://github.com/archerhuang)
