//import Article from “article”;
const apiKey = "d903e914caa1410daaa22bed9a8dfb06";

const receivedNews = (newsData) => {

	newsData.sort(function(a, b) {
  return (new Date(b.publishedAt)) - (new Date(a.publishedAt))
  })
	newsData.articles.forEach((article) =>{



		if(article.urlToImage) {
			document.querySelector(".allNews").innerHTML +=
			`
			<div class="news grid__cell 1/2">
			<h2>${article.title}</h2>		
			<a href="${article.url}"><img src ="${article.urlToImage}" /></a>
			<span>${article.source.name} </span>
			<p>${article.description}</p>
			<a href="${article.url}">Read full article</a>
			</div>`;
		}
		
	})
};	

function getSearchInput(){
	let qString ="";
	let value = document.querySelector(".search-input").value;

	document.querySelector(".allNews").innerHTML ="";
	console.log(value);

	
	let newsUrl = `https://newsapi.org/v2/everything?language=en&q=${value}&apiKey=${apiKey}`;
	console.log(newsUrl);

	getNewsData(newsUrl);
}

function getNewsData(newsUrl){
	fetch(newsUrl)
	.then(response => response.json())
	.then(receivedNews)
}

// Get the input field
var input = document.querySelector(".search-input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.querySelector(".search-button").click();
  }
});
