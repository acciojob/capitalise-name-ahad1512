//your JS code here. If required.
const input = document.getElementsByTagName("input")[0];
input.addEventListener("blur",function(){
	alert(input.value.toUpperCase());
})