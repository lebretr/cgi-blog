angular.module('ArticleDirective',['ArticleFiltre'])
.directive('contenuArticle',function(){
	return{
		restrict: 'E', //A:atribut, E:element, C:CSS, M:commentaire
		templateUrl: '/app/Article/ArticleTemplate.html',
		scope: {
			article: "=article",
			recherche:"="
		}
	}
})