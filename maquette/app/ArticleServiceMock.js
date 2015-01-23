
angular.module('ArticleServiceMock',[])
.factory('articleService',function(){

	var A=[{valeur:"BLOG",label:"Blog"},{valeur:"RH", label:"RH"},{valeur:"MISSIONS", label:"Missions"},{valeur:"CODIR", label:"CODIR"}];
	var B=[{valeur:"NT2I",label:"BT NT2I"},{valeur:"FAMMS", label:"BT FAMMS"}];
	var C=[{valeur:"ADEO",label:"Adeo"},{valeur:"AECF", label:"AECF"},{valeur:"AUCHAN", label:"Auchan"},{valeur:"BA", label:"Banque Accord"},{valeur:"CAISSEEPARGNE", label:"Caisse d'Epargne"}];

	var dossiers={
		"BLOG":{ valeur: "BLOG", label: "Blog", articles:[
			{id:5, date: new Date(2014, 09, 06, 17, 51), auteur:"Remi Lebret", titre:"Lorem Ipsum", corps:"Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.<br/><br/>Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat.<br/><br/>Ob haec et huius modi multa, quae cernebantur in paucis, omnibus timeri sunt coepta. et ne tot malis dissimulatis paulatimque serpentibus acervi crescerent aerumnarum, nobilitatis decreto legati mittuntur: Praetextatus ex urbi praefecto et ex vicario Venustus et ex consulari Minervius oraturi, ne delictis supplicia sint grandiora, neve senator quisquam inusitato et inlicito more tormentis exponeretur.", tags:[]},
			{id:4, date: new Date(2014, 09, 06, 14, 51), auteur:"Alexandra Viade", titre:"Arrivée de John Doe", corps:"Bienvenue à John Doe qui nous à rejoint ce lundi...", tags:['NT2I', 'ADEO']},
			{id:3, date: new Date(2014, 09, 02, 11, 35), auteur:"Remy Delmotte", titre:"IT Toolbox: Drupal", corps:"bla bla bla IT Toolbox... <br/>bla bla bla Drupal<br/>bla bla bla ...", tags:['NT2I', 'ADEO']},
			{id:2, date: new Date(2014, 09, 02, 11, 30), auteur:"Remi Lebret", titre:"Soron: Suppervision $U avec Backbone et NodeJS", corps:"Soron est une appli developpée chez ADEO...<br/>Backbone, Nodejs,...", tags:['NT2I', 'ADEO']},
			{id:1, date: new Date(2014, 09, 01, 9, 00), auteur:"Remi Lebret", titre:"Ouverture du Blog", corps:"Voici le proto du blog CGI<br/>Partagez toutes les infos de vos projets, client, ...<br/>Retrouvez egalement ici toutes les infos RH, Codir, ...", tags:['CGI']}
		]},
		"MISSIONS":{ valeur: "MISSIONS", label:"RH", articles:[]},
		"CODIR":{ valeur: "CODIR", label:"RH", articles:[]},
		"RH":{ valeur: "RH", label:"RH", articles:[
			{id:4, date: new Date(2014, 09, 06, 14, 51), auteur:"Alexandra Viade", titre:"Arrivée de John Doe", corps:"Bienvenue à John Doe qui nous à rejoint ce lundi...", tags:['NT2I', 'ADEO']}
		]},
		"BT":{ valeur: "BT", label:"BT", ssdossiers:{
			"NT2I":{ valeur: "NT2I", label:"BT NT2I",articles:[
				{id:3, date: new Date(2014, 09, 02, 11, 35), auteur:"Remy Delmotte", titre:"IT Toolbox: Drupal", corps:"bla bla bla IT Toolbox... <br/>bla bla bla Drupal<br/>bla bla bla ...", tags:['NT2I', 'ADEO']},
				{id:2, date: new Date(2014, 09, 02, 11, 30), auteur:"Remi Lebret", titre:"Soron: Suppervision $U avec Backbone et NodeJS", corps:"Soron est une appli developpée chez ADEO...<br/>Backbone, Nodejs,...", tags:['NT2I', 'ADEO']}
			]},
			"FAMMS":{ valeur: "FAMMS", label:"BT FAMMS",articles:[
			]}
		}},
		"CLIENT":{ valeur: "CLIENT", label:"Clients", ssdossiers:{
			"ADEO":{ valeur: "ADEO", label:"Adeo", articles:[
				{id:2, date: new Date(2014, 09, 02, 11, 30), auteur:"Remi Lebret", titre:"Soron: Suppervision $U avec Backbone et NodeJS", corps:"Soron est une appli developpée chez ADEO...<br/>Backbone, Nodejs,...", tags:['NT2I', 'ADEO']}
			]},
			"AECF":{ valeur: "AECF", label:"AECF", articles:[]},
			"AUCHAN":{ valeur: "AUCHAN", label:"Auchan", articles:[]}
		}}
	};


	return{
		getDossiers: function(){
			return dossiers;
		},
		getDossier: function(valDossier){
			var dossierTrouve=null;
			for (i in dossiers){
				var dossier=dossiers[i];
				if(dossier.valeur == valDossier){
					return dossierTrouve=dossier
				}
			}			
		},
		getArticle: function(valDossier, idArticle){
			var dossier = this.getDossier(valDossier);
			if(dossier){
				for (var i in dossier.articles){
					var article=dossier.articles[i];
					if(article.id==idArticle){
						return article;
					}
				}
			}
		},
		enregistrerArticle: function(article){
			var eltsEnregistes=this.getDossier('BLOG');
			var idDernierArticle=0;
			eltsEnregistes.articles.forEach(function(article){
				if(article.id > idDernierArticle){
					idDernierArticle=article.id
				}
			});
			article.id=idDernierArticle+1;
			eltsEnregistes.articles.push(article);
			console.log(article);
		}
	}


});