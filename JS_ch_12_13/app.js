

var letter=prompt("Enter Letter or Alphabet", "");
var ww;

ww=letter.charCodeAt(0);



document.write("<br>  "+ ww);

if(ww >= 97 &&  ww<= 122)
{
    
    document.write("<br> Small Alphabet ");

}

else if( ww>= 65 && ww<=90)
{
    
    document.write("<br> Capital Alphabet ");

}