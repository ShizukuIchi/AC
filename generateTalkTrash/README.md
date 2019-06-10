# 餐廳清單
* 使用者可查看餐廳資訊與搜尋

## 環境建置與需求
* Node.js : v10.16.0
* express : 4.17.1
* express-handlebars : 3.1.0

## clone 與安裝相依套件
* 請在 `Console` 輸入下方指令
```
git clone https://github.com/ArcherHuang/AC.git
cd ./restaurant_list
npm install
```

## 功能

| 編號 | 功能 | URL | 說明  |
|:---:|:---:|:---:|---|
| 1 | 首頁 | http://localhost:3000/ | 看到所有餐廳與它們的簡單資料，簡單資料如餐廳照片、餐廳名稱、餐廳分類、餐廳評分 |
| 2 | 查看餐廳的詳細資訊 | http://localhost:3000/restaurants/1 | 詳細資訊如類別、地址、電話、描述、圖片 |
| 3 | 搜尋餐廳 | http://localhost:3000/search?keyword=cafe | 依使用者輸入項目搜尋相關餐廳 |

## 畫面
* 首頁
![](https://oranwind.s3.amazonaws.com/2019/Jun/_____2019_06_04___10_52_32-1559616770279.png)

* 查看餐廳的詳細資訊
![](https://oranwind.s3.amazonaws.com/2019/Jun/_____2019_06_04___10_53_13-1559616816287.png)

* 搜尋餐廳
  * 輸入關鍵字
![](https://oranwind.s3.amazonaws.com/2019/Jun/_____2019_06_04___10_54_30-1559616896993.png)

  * 搜尋結果
![](https://oranwind.s3.amazonaws.com/2019/Jun/_____2019_06_04___10_54_36-1559616918172.png)

  * 結果餐廳的詳細資訊
![](https://oranwind.s3.amazonaws.com/2019/Jun/_____2019_06_04___10_55_57-1559616978499.png)

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
|9| views | show.handlebars | 顯示餐廳詳細資訊 |
|10| --- | app.js | 主程式設定路由等資訊 |
|11| --- | package-lock.json | 用以記錄當前狀態下實際安裝的各個　npm package　的具體來源和版本號 |
|12| --- | package.json | 套件資訊 |
|13| --- | restaurant.json | 餐廳資料 |

## Contributor
* [Archer Huang](https://github.com/archerhuang)