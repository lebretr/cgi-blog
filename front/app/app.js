

angular.module('CGIBlog',['ngSanitize','ui.tinymce', 'ui.bootstrap','ArticleServiceMock', 'ArticleDirective','NouvelArticleDirective','CommentaireDirective'])
.controller('BlogController',function($scope, $location,$sce, articleService){

	$scope.A=[{valeur:"BLOG",label:"Blog"},{valeur:"RH", label:"RH"},{valeur:"MISSIONS", label:"Missions"},{valeur:"CODIR", label:"CODIR"}];
	$scope.B=[{valeur:"NT2I",label:"BT NT2I"},{valeur:"FAMMS", label:"BT FAMMS"},{valeur:"ERP", label:"BT ERP"},{valeur:"SOA", label:"BT SOA"},{valeur:"B.I.", label:"BT B.I."}];
	$scope.C=[{valeur:"ADEO",label:"Adeo"},{valeur:"AECF", label:"AECF"},{valeur:"AUCHAN", label:"Auchan"},{valeur:"BA", label:"Banque Accord"},{valeur:"CAISSEEPARGNE", label:"Caisse d'Epargne"}];

	/**
	*	Navbar
	*/
	//Affichage du li uniquement si le dossier ne contient pas de soous dossier
	$scope.navbarItem=function(dossier){
		if(!dossier.ssdossiers){
			return '<a href="#'+dossier.valeur+'">'+dossier.label+'</a>';
		}
	};

	/**
	*	Gestion du dossier selectionné
	*/
	$scope.dossierCourant=null;
	$scope.dossierParentCourant=null;
	$scope.vueAfficher='Dossier';
	$scope.selectionDossier=function(dossier, ssdossier){
		$scope.vueAfficher='Dossier';

		if(dossier=='nouvelArticle' || dossier=='Previsualisation'){
			$scope.vueAfficher='NouvelArticle';
			$scope.dossierCourant=null;
			$scope.dossierParentCourant=null;
			$scope.$broadcast("initFormNouvelArticle");
		}else if(dossier=='Commentaires'){
			$scope.vueAfficher='Commentaires';
			$scope.dossierCourant=null;
			$scope.dossierParentCourant=null;
			$scope.article=articleService.getArticle('BLOG',ssdossier);
			$scope.$broadcast("initFormCommentaireArticle");
		}else if(ssdossier && $scope.dossiers[ssdossier]){
			$scope.dossierCourant=$scope.dossiers[ssdossier];
			$scope.dossierParentCourant=dossier;
		}else{
			$scope.dossierCourant=$scope.dossiers[dossier];
			$scope.dossierParentCourant=null;
		}
	};

	/**
	*	Router: Gestion URL
	*/
	$scope.$watch(function(){
		return $location.path();
	}, function(path){
		var tabPath=path.split('/');
		var dossier='', ssdossier='';

		if(tabPath.length<=1){
			dossier='BLOG';
		}else{
			dossier=tabPath[1];
			ssdossier=tabPath[2]
		}

		$scope.selectionDossier(dossier,ssdossier);
	});

	/**
	*	Recherche
	*/
	$scope.recherche=null;
	$scope.razRecherche=function(){
		$scope.recherche=null;
	}

	/**
	*	TRI
	*/
	$scope.triChamp='id';
	$scope.triDesc=true;

	/**
	*	Enregistrement article
	*/
	$scope.enregistrerArticle=function(nouvelArticle){
		articleService.enregistrerArticle(nouvelArticle);

		$scope.vueAfficher='Dossier';
		$location.path("BLOG");
	}

	$scope.dossiers = articleService.getDossiers();

});
// .directive('chkboxDossiers', function() {
	// return 
	// if(dossier.ssdossiers){
	// 	var inner="";
	// 	for(var i in dossier.ssdossiers){
	// 		var ssdossier=dossier.ssdossiers[i];
	// 		inner=inner+'<div class="checkbox" ><label><input type="checkbox" ng-model="nouvelArticle.chk'+ssdossier.valeur+'" >'+dossier.label+'</label></div>'
	// 	}

	  	// return {
	  	// 	scope
	  	// 	templateUrl: function(elt, attr){
	  	// 		return 'a'+attr.dossier
	  	// 	}
	   //     	// template: '<div class="checkbox" ><label><input type="text" value="chk{{dossier.label}}" ng-model="nouvelArticle[\'{{dossier.valeur}}\']" >{{dossier.label}}</label></div>'
	   //  };


	// }else{
	//   	return {
	//        template: '{{dossier.valeur}} '
	//     };
	// }
// });