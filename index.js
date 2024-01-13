// variables 
const generalBtn = document.querySelector("#General");
const businessBtn = document.querySelector("#Business");
const sportsBtn = document.querySelector("#Sports");
const technologyBtn = document.querySelector("#Technology");
const entertainmentBtn = document.querySelector("#Entertainment");
const searchBtn = document.querySelector("#Search");

const newsQuery = document.querySelector("#newsQuery");
const newsType = document.querySelector("#newsType");
const newsDetails = document.querySelector("#newsDetails");

// Array
let newsDataArr = [];

//apis  2da8843ee8dd417b8583f0113135ac08

const API_KEY = "2da8843ee8dd417b8583f0113135ac08";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function(){
  newsType.innerHTML = "<h4> Headlines </h4>";
  fetchHeadlines();
};


generalBtn.addEventListener("click",function(){
  newsType.innerHTML = "<h4> General News</h4>";
  fetchGeneralNews();
});

businessBtn.addEventListener("click",function(){
  newsType.innerHTML = "<h4>Business News </h4>";
  fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
  newsType.innerHTML = "<h4>Sports News</h4>";
  fetchSportsNews();
});

technologyBtn.addEventListener("click",function(){
  newsType.innerHTML = "<h4>Technology News </h4>";
  fetchTechnologyNews();
});

entertainmentBtn.addEventListener("click",function(){
  newsType.innerHTML = "<h4>Entertainment News </h4>";
  fetchEntertainmentNews();
});

searchBtn.addEventListener("click",function(){
  newsType.innerHTML = "<h4>Search : "+newsQuery.value+ "</h4>";
  fetchQueryNews();
});

const fetchHeadlines = async () => {
  const response = await fetch(HEADLINES_NEWS + API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300){
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  }else{
    // handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();

}



const fetchGeneralNews = async () => {
  const response = await fetch(GENERAL_NEWS + API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300){
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  }else{
    // handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();

}

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS + API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300){
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  }else{
    // handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();

}

const fetchSportsNews = async () => {
  const response = await fetch(SPORTS_NEWS + API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300){
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  }else{
    // handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();

}

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300){
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  }else{
    // handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();

}

const fetchEntertainmentNews = async () => {
  const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300){
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  }else{
    // handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();

}

const fetchQueryNews = async () => {

  if(newsQuery.value == null){
    return;
  }
  const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300){
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  }else{
    // handle errors
    console.log(response.status, response.statusText);
  } 
  displayNews();

}



function displayNews(){

  newsDetails.innerHTML = "";
  if(newsDataArr.length == 0){
    newsDetails.innerHTML = "<h5> No Data found </h5>"
  }

  newsDataArr.forEach(news => {

    let date = news.publishedAt.split("T");

    let col = document.createElement('div');
    col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

    let card = document.createElement('div');
    card.className="p-2";

    let image = document.createElement('img');
    image.setAttribute("height","matchparent");
    image.setAttribute("width","100%");
    image.src= news.urlToImage;

    let cardBody = document.createElement('div');

    let newsHeading = document.createElement('h5');
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    let dateHeading = document.createElement('h6');
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    let description = document.createElement('p');
    description.className="text-muted";
    description.innerHTML=news.description;

    let link = document.createElement('a');
    link.className = "btn btn-dark";
    link.setAttribute("target","_blank");
    link.href = news.url;
    link.innerHTML="Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(description);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsDetails.appendChild(col);




  })


}