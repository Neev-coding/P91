function send(){
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
actual_ans=parseInt(number1) * parseInt(number2);
question_number="<h4>" + number1 + "X" + number2 + "</h4>";
input_type="<br> Answer: <input type='text id='input_text_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</butto>";
row=question_number+input_type+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}