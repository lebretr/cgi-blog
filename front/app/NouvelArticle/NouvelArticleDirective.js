
angular.module('NouvelArticleDirective',['CheckboxDossierDirective'])
.directive('nouvelArticle',function(){
	return {
		restrict:'E',
		templateUrl: '/app/NouvelArticle/NouvelArticleTemplate.html',
		scope: {
			A: "=a",
			B: "=b",
			C: "=c",
        	enregistrerArticle: "&"
		},
		controller: function($scope, $sce){
			$scope.nouvelArticle={
				auteur:"Remi Lebret",
				date: new Date(),
				dossiers:{
					BLOG:true
				}
			}

			$scope.$on("initFormNouvelArticle",function(){
				$scope.nouvelArticle={
					auteur:"Remi Lebret",
					date: new Date(),
					dossiers:{
						BLOG:true
					}
				}
			})

			$scope.clicEnregistrerArticle = function() {
				$scope.enregistrerArticle({ nouvelArticle: $scope.nouvelArticle });				
			}


			/**
			* tinyMce
			*/
			$scope.optionsTinyMce={
				height : 350,
				language:'fr_FR',
				stausbar:false,
				menubar:false,
			    plugins: [
			        "advlist autolink lists link image charmap print preview anchor",
			        "searchreplace visualblocks code fullscreen",
			        "insertdatetime media table contextmenu paste"
			    ],
			    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
			}
		}
	}
})