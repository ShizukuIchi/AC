# 我的最愛餐廳

## Contents
- [簡介](#簡介)
- [環境建置與需求](#環境建置與需求)
- [clone 與安裝相依套件](#clone-與安裝相依套件)
- [執行方式](#執行方式)
- [功能](#功能)
- [畫面](#畫面)
- [Change Logs](#change-logs)
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
cd ../..
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
| 1 | 首頁 | ① 顯示所有我的最愛餐廳 <br> ② 滑鼠移到各別餐廳卡片時會改變卡片的背景顏色 <br> ③  當頁面卷軸滑到下方時會出現移到最上方的按鈕，當卷軸在上方時移到最上方的按鈕會消失 |
| 2 | 搜尋 | 依所輸入的條件搜尋所有我的最愛餐廳符合關鍵字的名稱或類別 |


## 畫面

* 首頁


* 搜尋


## Change Logs



## Contributor
* [Archer Huang](https://github.com/archerhuang)
