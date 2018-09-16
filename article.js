
class Article {
	constructor(title, description, language) {
		this.title = title;
		this.description = description;
		this.language = language;
	}
} 

let newArticle = new Article("This is the title", "Description of the article", "Language");

document.querySelector(".title").innerHTML = newArticle.title;
document.querySelector(".description").innerHTML = newArticle.description;
document.querySelector(".language").innerHTML = newArticle.language; 

export default Article;

