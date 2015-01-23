
angular.module('MesDirectives',[])
.directive('contenuArticle',function(){
	return{
		restrict: 'E', //A:atribut, E:element, C:CSS, M:commentaire
		template: '<div class="bs-example"> \
					<h1 ng-bind-html="article.titre | surbrillanceRecherche:recherche"></h1> \
					<p ng-bind-html="article.corps | surbrillanceRecherche:recherche"></p> \
				</div> \
				<div class="highlight"> \
					posté le {{article.date | date:"short"}} par {{article.auteur}} \
				</div> ',
		scope: {
			article: "=article",
			recherche:"="
		}
	}
})
.directive('nouvelArticle',function(){
	return {
		restrict:'E',
		template: '<div class="spacer"> \
				<form name="formNouvelArticle"> \
					<div class="row"> \
						<div class="col-md-12"> \
							<div class="input-group"> \
								<span class="input-group-addon">Titre</span> \
								<input type="text" class="form-control" ng-model="nouvelArticle.titre"/> \
							</div> \
						</div> \
					</div> \
					<br/> \
					<div class="row"> \
						<div class="col-sm-2"> \
 							\
							<H4>Générale</H4> \
							<div ng-repeat="dossier in A" ng-bind-html="dossierItemcheckbox(dossier)"> \
							</div> \
							<H4>BT</H4> \
							<div ng-repeat="dossier in B" ng-bind-html="dossierItemcheckbox(dossier)"> \
							</div> \
							<H4>Clients</H4>							 \
							<div ng-repeat="dossier in C" ng-bind-html="dossierItemcheckbox(dossier)"> \
							</div> \
						</div> \
						<div class="col-sm-10"> \
							<textarea ui-tinymce="optionsTinyMce" rows="10" class="corpNouvelArticle" ng-model="nouvelArticle.corps"></textarea> \
						</div> \
					</div> \
					<div class="row"> \
						<div class="col-sm-12"> \
							<div class="spacer text-center"> \
								<button class="btn btn-success" ng-click="clicEnregistrerArticle()">Poster</button> \
							</div> \
						</div> \
					</div> \
				</form> \
			</div> \
			<div class="space"> \
				DEBUG: \
				<pre>{{nouvelArticle | json}}</pre> \
			</div> \
			<contenu-article article="nouvelArticle"></contenu-article>' ,
		scope: {
			A: "=a",
			B: "=b",
			C: "=c",
        	enregistrerArticle: "&"
		},
		controller: function($scope, $sce){

			$scope.$on("initFormNouvelArticle",function(){
				$scope.nouvelArticle={
					auteur:"Remi Lebret",
					date: new Date()
				}
			})

			$scope.clicEnregistrerArticle = function() {
				$scope.enregistrerArticle({ nouvelArticle: $scope.nouvelArticle });				
			}

			/**
			*	Checkbox
			*/
			//Affichage du checkbox uniquement si le dossier ne contient pas de soous dossier
			$scope.dossierItemcheckbox=function(dossier){
				if(!dossier.ssdossiers){
					return $sce.trustAsHtml('<div class="checkbox" ><label><input type="checkbox" ng-model="nouvelArticle.chk'+dossier.valeur+'" >'+dossier.label+'</label></div>');
				}
										
			};


			/**
			* tinyMce
			*/
			$scope.optionsTinyMce={
				height : 350,
				language:'fr_FR',
				stausbar:false,
				menubar:false
			}
		}
	}
})