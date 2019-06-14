# 幹話產生器

## Contents
- [簡介](#簡介)
- [環境建置與需求](#環境建置與需求)
- [clone 與安裝相依套件](#clone-與安裝相依套件)
- [功能](#功能)
- [畫面](#畫面)
- [執行方式](#執行方式)
- [檔案說明](#檔案說明)
- [Contributor](#contributor)

## 簡介

* 依不同的職業產生不同的幹話 ......

## 環境建置與需求

* Node.js : v10.16.0
* express : ^4.17.1
* express-handlebars : ^3.1.0
* handlebars: ^4.1.2"

## clone 與安裝相依套件

* 請在 `Console` 輸入下方指令
```
git clone https://github.com/ArcherHuang/AC.git
cd ./AC/generateTalkTrash
npm i
```

## 功能

| 編號 | 功能 | URL | 說明  |
|:---:|:---:|:---:|---|
| 1 | 首頁 | http://localhost:3000/ | 依不同的職業產生不同的幹話 |


## 畫面

* 首頁
![](https://oranwind.s3.amazonaws.com/2019/Jun/_____2019_06_10___8_08_06-1560169052549.png)


## 執行方式

* 請在 `Console` 輸入下方指令
```
npm run dev
```

## 檔案說明

| 編號 | 資料夾 |  檔案名稱 | 說明  |
|:---:|:---:|---|---|
|1| public | /javascripts/bootstrap.js | bootstrap 的 js 檔案 |
|2| public | /javascripts/jquery-3.4.1.js | jquery 的 js 檔案 |
|3| public | /javascripts/popper.min.js | popper 的 js 壓縮檔案 |
|4| public | /stylesheets/bootstrap.css | bootstrap 的 css 檔案 |
|5| public | /stylesheets/bootstrap.css.map | debug 用 |
|6| public | /stylesheets/index.css | 存放首頁的 css |
|7| views | /layouts/main.handlebars | 存放 Layout |
|8| views | index.handlebars | 顯示餐廳 |
|9| --- | app.js | 主程式設定路由等資訊 |
|10| --- | generate_talkTrash.js | 依不同的職業隨機產生不同的幹話 |
|11| --- | handlebars-helpers.js | Handlebars Custom Helpers |
|12| --- | package-lock.json | 用以記錄當前狀態下實際安裝的各個　npm package　的具體來源和版本號 |
|13| --- | package.json | 套件資訊 |


## Contributor

* [Archer Huang](https://github.com/archerhuang)
