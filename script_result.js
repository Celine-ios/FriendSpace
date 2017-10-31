

function quick_line(event_charger_0, event_charger_1, event_charger_2, event_charger_3) {

          
     document.getElementsByClassName('cool_line')[0].style.width='100%';




}

   function elements () {

   					/* Links de perfil y publicidad */
   					
   					document.getElementsByTagName('a')[0].onclick=quick_line;
   						document.getElementsByTagName('a')[1].onclick=quick_line;

   							/* Links de resultados de busqueda */

   				document.getElementsByTagName('a')[2].onclick=quick_line;
             document.getElementsByTagName('a')[3].onclick=quick_line;
              document.getElementsByTagName('a')[4].onclick=quick_line;
              document.getElementsByTagName('a')[5].onclick=quick_line;
            document.getElementsByTagName('a')[6].onclick=quick_line;
            	document.getElementsByTagName('a')[7].onclick=quick_line;
            	document.getElementsByTagName('a')[8].onclick=quick_line;
            	document.getElementsByTagName('a')[9].onclick=quick_line;





}
window.onload=elements;
