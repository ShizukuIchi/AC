// API URL 設定
const baseURL = "https://movie-list.alphacamp.io/api/v1"
const movieURL = baseURL + "/movies"
const postURL = "https://movie-list.alphacamp.io/posters/"

// 選取 genres_pannel 與 movies_pannel
const genresPanel = document.getElementById("genres_pannel")
const moviesPannel = document.getElementById("movies_pannel")

// 電影種類
const genres = {
  "1": "Action",
  "2": "Adventure",
  "3": "Animation",
  "4": "Comedy",
  "5": "Crime",
  "6": "Documentary",
  "7": "Drama",
  "8": "Family",
  "9": "Fantasy",
  "10": "History",
  "11": "Horror",
  "12": "Music",
  "13": "Mystery",
  "14": "Romance",
  "15": "Science Fiction",
  "16": "TV Movie",
  "17": "Thriller",
  "18": "War",
  "19": "Western"
}

const movieInfo = []

// 呼叫 API 取得電影資訊
axios.get(movieURL).then(response => {
  console.log(response.data.results)
  movieInfo.push(...response.data.results)
  displayMovieInfo(movieInfo, 1)
})

// 呼叫顯示分類清單函式
displayGenres(genres)

// 新增電影類別監聽事件
genresPanel.addEventListener("click", function (event) {
  let selectGenre = parseInt(event.target.dataset.id)
  const current = document.getElementsByClassName("active")
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "")
  }
  displayMovieInfo(movieInfo, selectGenre)
})

// 顯示分類清單
function displayGenres(data) {
  let listContent = ""
  Object.keys(data).forEach((key) => {
    listContent += `<li class="list-group-item" data-id=${key}>${data[key]}</li>`
  })

  genresPanel.innerHTML = listContent
}

// 顯示電影資訊
function displayMovieInfo(data, selectNumber) {
  const selectGenre = document.querySelector('[data-id="' + selectNumber + '"')
  selectGenre.className += ' active'

  let moviePannelContent = ""

  data.forEach(item => {
    if (item.genres.includes(selectNumber)) {

      const genresArray = item.genres
      let tagHTML = ""
      genresArray.forEach(item => {
        let tag = genres[item]
        tagHTML += `<span class="badge badge-secondary">${tag}</span>`
      })

      moviePannelContent += `
      <div class="col-sm-4">
        <div class='card' style="width: 18rem">
        <img class="card-img-top" src="${postURL}${item.image}" alt="${item.id}" >
        <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        ${tagHTML}
        </div>
        </div>
        </div>
        `
    }
  })

  moviesPannel.innerHTML = moviePannelContent
}
