function add(a,b,c){
	return a + b + c;
}

function total(){
	var v1 =Number(document.getElementById('first').value);
	var v2 =Number(document.getElementById('second').value);
	var v3 =Number(document.getElementById('third').value);
	var answer = document.getElementById('answer');
	if(isNaN(v1+v2+v3)){
		alert("숫자만 적어야지");
	}else{
		answer.value=add(v1,v2,v3);
	}

	if (answer.value <= 7){
        document.getElementById('picture').src="images/andae.jpg";
    }else if(answer.value > 7 && answer.value <= 23){
        document.getElementById('picture').src="images/taltal.png";
    }else {
        document.getElementById('picture').src="images/gae.jpg";
    }
}

(function(){
	var inputTag = document.getElementsByTagName("input");
	inputTag[0].addEventListener('keyup', total);
	inputTag[1].addEventListener('keyup', total);
	inputTag[2].addEventListener('keyup', total);
})();
