function add(a,b,c){
	return a + b + c;
}
var pTag = document.getElementById('ready');
		pTag.style.color = "black";
function check(){
	var	v1 = Number(document.getElementById('first').value);
	var	v2 = Number(document.getElementById('second').value);
	var	v3 = Number(document.getElementById('third').value);
	var result = document.getElementById('result');

		if(isNaN(v1+v2+v3)){
			pTag.style.color = "red";
			pTag.innerText = "숫자만 입려해라 제발"
			pTag.className = "redBorder";
		}else{
			btn = document.getElementById('bnt');
			btn.addEventListener('click',function(){
			 result.value=add(v1,v2,v3);
		 	});
				}};
(function(){
	var inputTag = document.getElementsByTagName("input");
	inputTag[0].addEventListener('change', check);
	inputTag[1].addEventListener('change', check);
	inputTag[2].addEventListener('change', check);
})();
