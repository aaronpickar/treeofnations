import Article from '../models/article.js'

class ArticleController {
	constructor(){
		this.showArticle = this.showArticle.bind(this);
	}

	showArticle(req,res){
		var article_htmlref = req.params.article_htmlref;
		Article.findByHtmlRef(article_htmlref).then(function(article){
			if(article == null) {
				res.send(404);
			}
			// res.send(`hello article ${article.get('title')}`);
			res.render('article', {
				title: article.get('title'),
				description: article.get('description')
			});
		});

	}
}

module.exports = ArticleController;