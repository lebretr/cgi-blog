
angular.module('ArticleServiceMock',[])
.factory('articleService',function(){

	var A=[{valeur:"BLOG",label:"Blog"},{valeur:"RH", label:"RH"},{valeur:"MISSIONS", label:"Missions"},{valeur:"CODIR", label:"CODIR"}];
	var B=[{valeur:"NT2I",label:"BT NT2I"},{valeur:"FAMMS", label:"BT FAMMS"}];
	var C=[{valeur:"ADEO",label:"Adeo"},{valeur:"AECF", label:"AECF"},{valeur:"AUCHAN", label:"Auchan"},{valeur:"BA", label:"Banque Accord"},{valeur:"CAISSEEPARGNE", label:"Caisse d'Epargne"}];

	var dossiers={
		"BLOG":{ valeur: "BLOG", label: "Blog", articles:[
			{id:7, date: new Date(2014, 10, 06, 17, 51), auteur:"Remi Lebret", titre:"Lorem Ipsum", corps:"Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.<br/><br/>Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat.<br/><br/>Ob haec et huius modi multa, quae cernebantur in paucis, omnibus timeri sunt coepta. et ne tot malis dissimulatis paulatimque serpentibus acervi crescerent aerumnarum, nobilitatis decreto legati mittuntur: Praetextatus ex urbi praefecto et ex vicario Venustus et ex consulari Minervius oraturi, ne delictis supplicia sint grandiora, neve senator quisquam inusitato et inlicito more tormentis exponeretur.", tags:[], commentaires:[
				{id:1,  date: new Date(2014, 09, 22, 18, 11), auteur:"Jean Martin", titre:"Lorem Ipsum", corps: "J'ai rien compris!!! <br/>C'est normal?"},
				{id:2,  date: new Date(2014, 09, 07, 09, 02), auteur:"Martin Dubois", titre:"aléatoire", corps: "C'est Normal.<br>Le \"Lorem Ipsum\" est un texte aléatoire"}
			]},
			{id:6, date: new Date(2014, 09, 06, 17, 51), auteur:"Remi Lebret", titre:"Anniversaires du mois de novembre.", corps:'02/11: Martin Dupond<br/><br/>15/11: Frederic Martin<br/><br/>21/11: Marc Dubois<br/><br/> ...', tags:[]},
			{id:5, date: new Date(2014, 09, 06, 17, 51), auteur:"Remi Lebret", titre:"Septembris ab ad in refertum.", corps:'Dein Syria per speciosam interpatet diffusa planitiem. hanc nobilitat Antiochia, mundo cognita civitas, cui non certaverit alia advecticiis ita adfluere copiis et internis, et Laodicia et Apamia itidemque Seleucia iam inde a primis auspiciis florentissimae.<br/><img src="http://www.stoimen.com/blog/wp-content/uploads/2011/02/TinyMCE_Full_Featured.png" class="img-responsive" alt="Responsive image"><br/><img src="http://i0.wp.com/alisothegeek.com/wp-content/uploads/2011/05/styles-dropdown-results.png" class="img-responsive" alt="Responsive image">', tags:[]},
			{id:4, date: new Date(2014, 09, 06, 14, 51), auteur:"Alexandra Viade", titre:"Arrivée de John Doe", corps:"Bienvenue à John Doe qui nous à rejoint ce lundi...", tags:['NT2I', 'ADEO']},
			{id:3, date: new Date(2014, 09, 02, 11, 35), auteur:"Remy Delmotte", titre:"IT Toolbox: Drupal", corps:"bla bla bla IT Toolbox... <br/>bla bla bla Drupal<br/>bla bla bla ...", tags:['NT2I', 'ADEO']},
			{id:2, date: new Date(2014, 09, 02, 11, 30), auteur:"Remi Lebret", titre:"Soron: Suppervision $U avec Backbone et NodeJS", corps:"Soron est une appli developpée chez ADEO...<br/>Backbone, Nodejs,...", tags:['NT2I', 'ADEO']},
			{id:1, date: new Date(2014, 09, 01, 9, 00), auteur:"Remi Lebret", titre:"Ouverture du Blog", corps:"Voici le proto du blog CGI<br/>Partagez toutes les infos de vos projets, client, ...<br/>Retrouvez egalement ici toutes les infos RH, Codir, ...", tags:['CGI']}
		]},
		"RH":{ valeur: "RH", label:"RH", articles:[
			{id:4, date: new Date(2014, 09, 06, 14, 51), auteur:"Alexandra Viade", titre:"Arrivée de John Doe", corps:"Bienvenue à John Doe qui nous à rejoint ce lundi...", tags:['NT2I', 'ADEO']}
		]},
		"MISSIONS":{ valeur: "MISSIONS", label:"RH", articles:[]},
		"CODIR":{ valeur: "CODIR", label:"RH", articles:[]},
		// "BT":{ valeur: "BT", label:"BT", ssdossiers:{
			"NT2I":{ valeur: "NT2I", label:"BT NT2I",articles:[
				{id:3, date: new Date(2014, 09, 02, 11, 35), auteur:"Remy Delmotte", titre:"IT Toolbox: Drupal", corps:"bla bla bla IT Toolbox... <br/>bla bla bla Drupal<br/>bla bla bla ...", tags:['NT2I', 'ADEO']},
				{id:2, date: new Date(2014, 09, 02, 11, 30), auteur:"Remi Lebret", titre:"Soron: Suppervision $U avec Backbone et NodeJS", corps:"Soron est une appli developpée chez ADEO...<br/>Backbone, Nodejs,...", tags:['NT2I', 'ADEO']}
			]},
			"FAMMS":{ valeur: "FAMMS", label:"BT FAMMS",articles:[
			]},
		// }},
		// "CLIENT":{ valeur: "CLIENT", label:"Clients", ssdossiers:{
			"ADEO":{ valeur: "ADEO", label:"Adeo", articles:[
				{id:2, date: new Date(2014, 09, 02, 11, 30), auteur:"Remi Lebret", titre:"Soron: Suppervision $U avec Backbone et NodeJS", corps:"Soron est une appli developpée chez ADEO...<br/>Backbone, Nodejs,...", tags:['NT2I', 'ADEO']}
			]},
			"AECF":{ valeur: "AECF", label:"AECF", articles:[]},
			"AUCHAN":{ valeur: "AUCHAN", label:"Auchan", articles:[]},
			"BA":{ valeur: "BA", label:"Banque Accord", articles:[]},
			"CAISSEEPARGNE":{ valeur: "CAISSEEPARGNE", label:"Caisse d'Epargne", articles:[]},
			"TOPCOMMENT":{ valeur: "TOPCOMMENT", label:"TOPCOMMENT", articles:[]}
		// }}
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
					return dossierTrouve=dossier;
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
		getMaxArticleId: function(){
			var idDernierArticle=0;
			var dossiers=this.getDossiers();

			for(var i in dossiers){
				var dossier=dossiers[i];
				for (var i in dossier.articles){
					var article=dossier.articles[i];
					if(article.id > idDernierArticle){
						idDernierArticle=article.id
					}
				};
			}
			return idDernierArticle;
		},
		enregistrerArticle: function(article){
			var idDernierArticle=this.getMaxArticleId();
			var dossiers=this.getDossiers();
			article.id=idDernierArticle+1;

			for(var i in article.dossiers){
				var dossier=article.dossiers[i];
				
				if(dossier){
					dossier = dossiers[i];
					if(dossier && dossier.articles){
						dossier.articles.push(article);
					}
				}

				
				// var eltsEnregistes=this.getDossier('BLOG');
				// for (var i in eltsEnregistes.articles){
				// 	var article=eltsEnregistes.articles[i];
				// 	if(article.id > idDernierArticle){
				// 		idDernierArticle=article.id
				// 	}
				// };
			}

			console.log(article);
		}
	}


});