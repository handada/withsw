//총합계를 구하는 함수 add 생성
function add(a,b,c){
	return a + b + c;
}
function check(){
var	v1 = Number(document.getElementById('first').value);
var	v2 = Number(document.getElementById('second').value);
var	v3 = Number(document.getElementById('third').value);
//경고 요소 값 담기
var p = document.getElementById('ready');
var result = document.getElementById('result');

result.value = add(v1,v2,v3);
};

(function(){
	var inputTag = document.getElementsByTagName("input");
	inputTag[0].addEventListener('change', check);
	inputTag[1].addEventListener('change', check);
	inputTag[2].addEventListener('change', check);
})();
