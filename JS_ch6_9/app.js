// Task#1
document.write("<br> ");
var a=10;
document.write("<br> <b> Result </b>");
document.write("<br> The Value of a is :"+ a );
document.write("<br> ");
document.write("<br> ");
document.write("<br> The Value of ++a is :"+ ++a );
document.write("<br> Now The Value of a is :"+ a );
document.write("<br> ");
document.write("<br> ");
document.write("<br> The Value of a++ is :"+ a++ );
document.write("<br> Now The Value of a is :"+ a );
document.write("<br> ");
document.write("<br> ");
document.write("<br> The Value of --a is :"+ --a );
document.write("<br> Now The Value of a is :"+ a );
document.write("<br> ");
document.write("<br> ");
document.write("<br> The Value of a-- is :"+ a-- );
document.write("<br> Now The Value of a is :"+ a );

document.write("<br> ");
document.write("<br> ");
document.write("<br> ");


// Task#2
var a = 2; 
var b = 1;
document.write("<br> The value of a is " + a);
document.write("<br> The value of b is " + b);
var result = --a - --b + ++b + b--;
document.write("<br> The value of result is " + result);

document.write("<br> ");
document.write("<br> ");
document.write("<br> ");
// Task#3

var name = prompt("Please enter your name", "");
alert("Welcome "+ name);

// Task#4

var num = prompt("Please enter Number", "");

if (num !== null) {
    document.write("<br>"+ 5 +" x "+ 1 +" = "+ 5*1);
    document.write("<br>"+ 5 +" x "+ 2 +" = "+5*2);
    document.write("<br>"+ 5 +" x "+ 3 +" = "+ 5*3);
    document.write("<br>"+ 5 +" x "+ 4 +" = "+ 5*4);
    document.write("<br>"+ 5 +" x "+ 5 +" = "+ 5*5);
    document.write("<br>"+ 5 +" x "+ 6 +" = "+ 5*6);
    document.write("<br>"+ 5 +" x "+ 7 +" = "+ 5*7);
    document.write("<br>"+ 5 +" x "+ 8 +" = "+ 5*8);
    document.write("<br>"+ 5 +" x "+ 9 +" = "+ 5*9);
    document.write("<br>"+ 5 +" x "+ 10 +" = "+ 5*10);
  }

  else
  {
document.write("<br> The Table of Entered No. is");
document.write("<br>"+ num +" x "+ 1 +" = "+ num*1);
document.write("<br>"+ num +" x "+ 2 +" = "+ num*2);
document.write("<br>"+ num +" x "+ 3 +" = "+ num*3);
document.write("<br>"+ num +" x "+ 4 +" = "+ num*4);
document.write("<br>"+ num +" x "+ 5 +" = "+ num*5);
document.write("<br>"+ num +" x "+ 6 +" = "+ num*6);
document.write("<br>"+ num +" x "+ 7 +" = "+ num*7);
document.write("<br>"+ num +" x "+ 8 +" = "+ num*8);
document.write("<br>"+ num +" x "+ 9 +" = "+ num*9);
document.write("<br>"+ num +" x "+ 10 +" = "+ num*10);
  }

//   Task#6
var sub1 = [];
var sub2 = [];
var sub3 = [];
var sub = [];
var subT = [];
sub[0]="<b>Subject</b>";
sub[1]="<b>Total Marks</b>";
sub[2]="<b>Obt. Marks</b>";
sub[3]="<b>Percentage</b>";


 sub1[0] = prompt("Please enter subject#1", "");
 sub2[0] = prompt("Please enter subject#2", "");
 sub3[0] = prompt("Please enter subject#3", "");
var totNum=100;

subT[0]='0';
subT[1]=300;
subT[2]=sub1[3] + sub2[2] + sub3[2];
subT[3]= sub1[3]+sub2[3]+sub3[3];


sub1[1]=100;
sub2[1]=100;
sub3[1]=100;


 sub1[2] = prompt("Please enter obtained subject#1", "");
 sub2[2] = prompt("Please enter obtained subject#2", "");
 sub3[2] = prompt("Please enter obtained subject#3", "");

 sub1[3] = (sub1[2]/totNum)*100;
 sub2[3] = (sub2[2]/totNum)*100;
 sub3[3] = (sub3[2]/totNum)*100;

 subT[1]=300;
subT[2]=(parseInt(sub1[2]) + parseInt(sub2[2]) + parseInt(sub3[2]));
subT[3]= (((sub1[3]+sub2[3]+sub3[3]))/300)*100;


var table='';
var rows=1;
var cols=4;

for (var r=0; r<rows ; r++)
{
    table +='<tr>';
    for(var c=0;c<cols;c++)
    {
        table+='<td>'+sub[c]+'</td>';
    }
    table +='</tr>';
}

for (var r=0; r<rows ; r++)
{
    table +='<tr>';
    for(var c=0;c<cols;c++)
    {
        table+='<td>'+sub1[c]+'</td>';
    }
    table +='</tr>';
}

for (var r=0; r<rows ; r++)
{
    table +='<tr>';
    for(var c=0;c<cols;c++)
    {
        table+='<td>'+sub2[c]+'</td>';
    }
    table +='</tr>';
}

for (var r=0; r<rows ; r++)
{
    table +='<tr>';
    for(var c=0;c<cols;c++)
    {
        table+='<td>'+sub3[c]+'</td>';
    }
    table +='</tr>';
}

for (var r=0; r<rows ; r++)
{
    table +='<tr>';
    for(var c=0;c<cols;c++)
    {
        table+='<td>'+subT[c]+'</td>';
    }
    table +='</tr>';
}


document.write('<table>' + table + '</table>');























