
function funny_button() {


	document.getElementsByClassName('boton_aceptar')[0].style.visibility='visible';
    document.getElementsByClassName('boton_aceptar')[0].style.top='51px';

}
function changer() {
	
   document.getElementById('header').style.boxShadow='none';
   document.getElementById('fast_line').style.width='100%';	
}
function event_logger() {
	
	document.getElementsByClassName('boton_aceptar')[0].onclick=changer;

}
window.onload=event_logger;