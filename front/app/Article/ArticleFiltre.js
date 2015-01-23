
angular.module('ArticleFiltre',[])
.filter('surbrillanceRecherche', function(){
	return function(input, recherche){
		if(recherche){
			return input.replace(new RegExp('(' + recherche + ')','gi'),'<span class="surbrillanceRecherche">$1</span>')
		}else{
			return input;	
		}		
	}
})