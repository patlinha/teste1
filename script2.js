var mudafam = document.getElementsByTagName('p');
var i;


function mudar_familia(){
	for(i = 0; i < mudafam.length; i++){
	mudafam[i].style.fontFamily='Arial';
	}
}

function mudar_familia2(){
	for(i = 0; i < mudafam.length; i++){
	mudafam[i].style.fontFamily='';
	}
}

function adicionaID(){
	document.getElementsByTagName('div')[1].id = 'divyellow';
}

function removeID(){
	document.getElementsByTagName('div')[1].id = '';
}



function testaID(){

mudacor = document.getElementsByTagName('div');

	if(mudacor[1].id=='divyellow'){
		mudacor[1].id = 'divgreen';
	}
}
