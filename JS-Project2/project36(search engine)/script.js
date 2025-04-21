const searchform = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchresult = document.getElementById("search-result")
const showBtn = document.getElementById("more-btn")


const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}`