

// Task 1

var City = prompt("Your City?", "city");
 if(City==="karachi")
 {
     alert("Welcome to city of lights");
 }

// Task 2

 var gender = prompt("Your Gender?", "gender");
 if(gender==="male")
 {
     alert("Welcome Sir");
 }

  else if(gender==="female")
 {
     alert("Welcome Ma'am");
 }


 // Task 3
 var TrafSig = prompt("Traffic Signal Color", "color");

  if(TrafSig==="red")
 {
     alert("Must Stop");
 }

  else if(TrafSig==="green")
 {
     alert("Move Now");
 }

  else if(TrafSig==="yellow")
 {
     alert("Ready to Move");
 }

 // Task 4
 var RemFuel = prompt("Remaining Fuel", "");
  if(parseFloat(RemFuel)<0.25)
 {
     alert("Please Refill the Fuel Tank");
 }


 // Task 5

 var a = 4; 
 if (++a === 5){ alert("given condition for variable a is true"); }

 var b = 82; 
 if (b++ === 83){ alert("given condition for variable b is true"); }
 else
 { alert("given condition for variable b is false"); }



 var c = 12; 
 if (c++ === 13){ alert("condition 1 is true"); } 
 if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } 
 if(c === 14){ alert("condition 4 is true"); }


 var materialCost = 20000; 
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost; 
 if (totalCost === laborCost + materialCost){ alert("The cost equals"); }


 if (true){ alert("True"); } 
 if (false){ alert("False"); }

 if("car" < "cat"){ alert("car is smaller than cat"); }


 // Task 6

 var s1 = prompt("Enter Sub1 Marks", "");
 var s2 = prompt("Enter Sub2 Marks", "");
 var s3 = prompt("Enter Sub3 Marks", "");

document.write("<br> <b> Marks Sheet </b> ");
document.write("<br>"+ "Total Marks :"+ 300);
document.write("<br>"+ "Marks Obtained :"+ (parseInt(s1)+ parseInt(s2) + parseInt(s3)));



 var  sT= ((parseInt(s1)+ parseInt(s2) + parseInt(s3))/300)*100;
 document.write("<br>"+ "Percentage :"+ sT );

   if(sT >= 80)
 {
     document.write("<br> Grade: A1 ");
     document.write("<br> Remarks: Excellent ");

 }

   else if(sT >=70 && sT<80)
 {
     document.write("<br> Grade: A ");
     document.write("<br> Remarks: Good ");

 }

    else if(sT >=60 && sT<70)
 {
     document.write("<br> Grade: B ");
     document.write("<br> Remarks: You Need To Improve ");

 }

     else if(sT<60)
 {
     document.write("<br> Grade: Fail ");
     document.write("<br> Remarks: Sorry");

 }

// Task 7
var sec_num = 5;
var guess_num = prompt("Guess the Number", "");
if(parseInt(guess_num) === sec_num)
 {
     document.write("<br> Bingo! Correct answer ");

 }

 else if(parseInt (guess_num) === (sec_num+1))
 {
     document.write("<br> Close enough to the correct answer");

 }

// Task 8
 var chk_num=prompt("Give Number", "");
 if(((parseInt(chk_num))%3)===0)
 {
     document.write("<br> Number is divisible by 3");

 }

 else
 {
    document.write("<br> Number is not divisible by 3");

}

// Task 9

var chkEnum=prompt("Give Number", "");
if(((parseInt(chkEnum))%2)===0)
{
    document.write("<br> Number is Even");

}

else
{
   document.write("<br> Number is Odd");

}

// Task 10

var temp=prompt("Give Temperature", "");
if(parseFloat(temp)  > 40)
{
    document.write("<br> Its too Hot Outside.");

}

 else if(parseFloat(temp)  > 30  &&  parseFloat(temp) <=40) 
{
    document.write("<br> The Weather today is Normal.");

}

else if(parseFloat(temp)  > 20  &&  parseFloat(temp) <=30) 
{
    document.write("<br> Today’s Weather is cool.");

}

else if(parseFloat(temp)  > 10  &&  parseFloat(temp) <=20) 
{
    document.write("<br> OMG! Today’s weather is so Cool.");

}

//Task 11

var firstNum=prompt("First Number", "");
var secondNum=prompt("Second Number", "");
var operation=prompt("Operation", "");

if( operation === "+")
{
    document.write("<br> Addition of two  number is: "+ (parseInt(firstNum)+ parseInt(secondNum)));

}

else if( operation === "-")
{
    document.write("<br> Substration of two  number is: "+ (parseInt(firstNum)- parseInt(secondNum)));

}

else if( operation === "*")
{
    document.write("<br> Multiplication of two  number is: "+ (parseInt(firstNum) * parseInt(secondNum)));

}

else if( operation === "/")
{
    document.write("<br> Division of two  number is: "+ (parseInt(firstNum) / parseInt(secondNum)));

}
else if( operation === "%")
{
    document.write("<br> Modulus of two  number is: "+ (parseInt(firstNum) % parseInt(secondNum)));

}



