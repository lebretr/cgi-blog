angular.module('CommentaireDirective',[])
.directive('commentaireArticle',function(){
	return{
		restrict: 'E', //A:atribut, E:element, C:CSS, M:commentaire
		templateUrl: '/app/Commentaire/CommentaireTemplate.html',
		scope: {
			article: "=article",
			recherche:"="
		},
		controller: function($scope, $sce){
		}
	}
})