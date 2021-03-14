var tabclass = document.getElementsByClassName ("contacttab");
function contacttabfun (tabid){
	for (var i=0; i<tabclass.length; i++){
		tabclass[i].style.display = 'none';
	}
	document.getElementById (tabid).style.display = 'block';
}
var menuBorder = document.getElementById ('mobile-menu');
var menuBurger = document.getElementById ('burger');
var k = 0;
function mobileMenu (){
	
	if (k == 0) {
		menuBorder.style.display = 'block';
		menuBurger.style.opacity = '0';
		k++;
	}
	else{
		menuBorder.style.display = 'none';
		menuBurger.style.opacity = '1';
		k--;
	}
}
menuBorder.innerHTML += document.getElementById ('header-nav').innerHTML;

var totop = document.getElementById ('to-top');
document.addEventListener ("scroll", function (){
	var scrollvalue = scrollY;
	if (scrollvalue > 200) {
		totop.style.display = "block";
	}
	else{
		totop.style.display = "none";
	}
})