
angular.module('CheckboxDossierDirective',[])
.directive('chkDossier',function(){
	return {
		restrict:'E',
        // replace: true,
        // transclude:true,
		templateUrl: '/app/NouvelArticle/CheckboxDossier/CheckboxDossierTemplate.html',
		scope: {
            nouvelArticle : '=ngModel',
			dossier:"="//,
		}
	}
})