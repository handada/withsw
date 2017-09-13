
function add(a,b,c){
	return a + b + c;
}
function total(){
	var	v1 = Number(document.getElementById('first').value);
	var	v2 = Number(document.getElementById('second').value);
	var	v3 = Number(document.getElementById('third').value);
	var result = document.getElementById('result');
	var p = document.querySelector('p');
	if (isNaN(v1+v2+v3)){
			p.style.fontColor="red";
		}else{
			var sum = add(v1,v2,v3);
			result.value = sum;
		}
};
var btn = document.getElementById('bnt');
btn.addEventListener('click', total);

(function(){
	var aler = document.getElementsByTagName("input");
	aler[0].addEventListener('change', total);
	aler[1].addEventListener('change', total);
	aler[2].addEventListener('change', total);
})();
