$(document).ready(function(){

	var choix = ["racisme", "sexisme", "islamophobie", "élections présidentielles", "handicap", "vérifier des informations fournies par les médias", "addictions"];
	 var i;
	 	$("#choix").text(choix[(Math.floor(Math.random()*choix.length))]);
		console.log(choix[(Math.floor(Math.random()*choix.length))]);
		
		if (choix===i) {
			while(choix===i){
				i=Math.floor(Math.random()*choix.length);
			}

			$("choix").text(choix[i]);
			i = choix;
		}
});