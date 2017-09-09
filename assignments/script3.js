function add(a,b,c){
	return a + b + c;
}
btn = document.getElementById('bnt');
btn.addEventListener('click',function(){
	var	v1 = Number(document.getElementById('first').value);
	var	v2 = Number(document.getElementById('second').value);
	var	v3 = Number(document.getElementById('third').value);
	var answer = document.getElementById('answer');
	var result = add(v1,v2,v3);
	answer.value = result;
});
