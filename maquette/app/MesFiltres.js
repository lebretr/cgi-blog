
angular.module('MesFiltres',[])
.filter('surbrillanceRecherche', function(){
	return function(input, recherche){
		if(recherche){
			console.log("lk")
			return input.replace(new RegExp('(' + recherche + ')','gi'),'<span class="surbrillanceRecherche">$1</span>')
		}else{
			return input;	
		}		
	}
})