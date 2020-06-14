
// Task#1 & 2
var a = 3;
var b = 5;
var c1 = a + b;
var c2 = a - b;
var c3 = a * b;
var c4 = a / b;
var c5 = a % b;
document.write("Sum of " + a + " and " + b + "is: " + c1);
document.write("<br>")
document.write("Subtraction of " + a + " and " + b + "is: " + c2)
document.write("<br>")
document.write("Multiplication of " + a + " and " + b + "is: " + c3)
document.write("<br>")
document.write("Division of " + a + " and " + b + "is: " + c4)
document.write("<br>")
document.write("Modolus of " + a + " and " + b + "is: " + c5)

document.write("<br>")
document.write("<br>")
document.write("<br>")
// Task#3
var x;
document.write("Value after declaration is : " + x);
x = 5;
document.write("<br>")
document.write("Initial value is : " + x);
document.write("<br>");
x++;
document.write("Value after increment is: " + x);
document.write("<br>");
x = x + 7;
document.write("Value after addition is: " + x);
document.write("<br>");
x--;
document.write("Value after decrement is: " + x);
document.write("<br>");

document.write("The Remainder is: " + x % 3);
document.write("<br>");
document.write("<br>");
document.write("<br>");

// Task#4
var cost = 600;
var qun = 5;
document.write("Total cost to buy " + qun + " Tickets to a movie is " + (cost * qun));

document.write("<br>");
document.write("<br>");
document.write("<br>");

// Task#5
document.write("<b>Table of 4</b>");
document.write("<br>");
document.write(4 + "x" + 1 + "=" + 4);
document.write("<br>");
document.write(4 + "x" + 2 + "=" + 8);
document.write("<br>");
document.write(4 + "x" + 3 + "=" + 12);
document.write("<br>");
document.write(4 + "x" + 4 + "=" + 16);
document.write("<br>");
document.write(4 + "x" + 5 + "=" + 20);
document.write("<br>");
document.write(4 + "x" + 6 + "=" + 24);
document.write("<br>");
document.write(4 + "x" + 7 + "=" + 28);
document.write("<br>");
document.write(4 + "x" + 8 + "=" + 32);
document.write("<br>");
document.write(4 + "x" + 9 + "=" + 36);
document.write("<br>");
document.write(4 + "x" + 10 + "=" + 40);

document.write("<br>");
document.write("<br>");
document.write("<br>");

// Task#6
document.write("<br>");
var temp_c = 25;
var temp_f = (temp_c * 9 / 5) + 32;
var temp_ff = 70;
var temp_cc = (temp_ff - 32) * 5 / 9;
document.write(temp_c + " is " + temp_f + " F");
document.write("<br>");
document.write(temp_ff + " is " + temp_cc + " F");


// Task#7
document.write("<br>");
var P_iteam1 = 650;
var Q_iteam1 = 3;
var P_iteam2 = 100;
var Q_iteam2 = 7;
var ship_char = 100;

document.write("<br> <br><br>  <b> Shopping Cart </b> <br> <br><br>  ");
document.write("<br> Price of Item_1 is " + P_iteam1);
document.write("<br> Quantity of Item_1 is " + Q_iteam1);
document.write("<br> Price of Item_2 is " + P_iteam2);
document.write("<br> Quantity of Item_2 is " + Q_iteam2);
document.write("<br><br> <br>  Total Cost of your order is : " + ((P_iteam1 * Q_iteam1) + (P_iteam2 * Q_iteam2) + ship_char));

document.write("<br>");
document.write("<br>");

// Task#8
document.write("<b>Marks Sheet</b>");
var tot_marks= 980;
var obt_marks= 804;
var percentage = (obt_marks/tot_marks)*100;
document.write("<br> Total Marks: "+tot_marks);
document.write("<br> Obtained Marks: "+obt_marks);
document.write("<br> Percentage: "+percentage);


document.write("<br>");
document.write("<br>");

// Task#9
document.write("<b>Currency in Pakistan </b>");
document.write("<br> Total Currency in PKR :"+ ((10*104.80)+(25*28)));

// Task#10
document.write("<br> <br><br>");
document.write("Task#10: ");
var w=10;
document.write((((w+5)*10)/2));

// Task#11
document.write("<br> <br><br>");
document.write(" <b>Age Calculator</b>");

var curr_year=2020;
var birth_year=1992;
document.write("<br> Current Year: "+curr_year);
document.write("<br> Birth Year: "+birth_year);
document.write("<br> Your Age is: "+(curr_year-birth_year));


// Task#12
document.write("<br> <br><br>");
var rad=20;
var cirmf=2*3.14*rad;
var Area=3.14*rad*rad;

document.write("<br> The Geometrizer <br> <br>");
document.write("<br> Radius of Circle is " + rad);
document.write("<br> Circumference of Circle is " + cirmf);
document.write("<br> Area of Circle is " + Area);

// Task#13
document.write("<br> <br><br>");

var favSnack= "Lays";
var cnt_age=15;
var max_Age=65;
var ext_amt=3;

document.write("<br> The Lifrtime Supply Calculator <br> <br>");
document.write("<br> Favourite Snack :" + FavSnack);
document.write("<br> Estimated Max. Age : " + cnt_age);
document.write("<br> Amount of Snacks per day " + max_Age);
document.write("<br>");
document.write("You will need "+((max_Age-cnt_age)*ext_amt)+" "+FavSnack+" to last you until the ripe old age of  "+max_Age);


