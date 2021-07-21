var clans = ['C', 'C++', 'Java', '.NET','Golang'];
document.getElementById("btnlangs").addEventListener('click',
function() {

    var msg = "Computer languages are \r\n" +  clans;
alert(msg);
  
});

/*Write  JavaScript  to  store  the  employee  object  information  
(Employee  name, employee no, age and department) and display as Employee
 <name> is working in  <department>  department. Here  <name>  is  name  of 
  the  employee  and <department> is the stored employee's department*/

  var person = {
    "name":"anshuman",
    "employee_no": 136294,
    "age": 40,
    "dept": "VES",
    displayEmpWorkInDeptInfo : function() {
    return "Employee " + this.name + " is working in " + this.dept;
    }
   }

   document.getElementById("btnObjects").addEventListener('click',
function() {

   document.getElementById("empInfo").innerHTML = person.displayEmpWorkInDeptInfo();
  
});


/* Write a JavaScript function to find largest of 3 numbers and display it */

function largestNumber(...arg) {
    const arr = [];
    console.log("arguments = " + arg);
    for (var i = 0; i < arg.length; i++) {
        
     arr.push(parseInt(arg[i]));
    }
    console.log("arr = " + arr);

    return Math.max.apply(null, arr);
  }

  document.getElementById("btnMax").addEventListener('click',
function() {
    var txtVal = document.getElementById("numbers");
    var numStrings  = txtVal.value.split(",");
    console.log("numStrings = " + numStrings);
    var result = largestNumber.apply(null, numStrings);
    console.log("result = " + result);
    var msg = " maximum number is " + result;
    document.getElementById("maxNum").innerHTML = msg;
     
});


/* Write JavaScript to display an alert message 
"You have moved the mouse on the button" whenthe mouse is moved on a button*/

document.getElementById("eventListnBtn").addEventListener('mouseover',
function() {

    var msg = "You have moved mouse over me";
alert(msg);
  
});

/*
Write  JavaScript  to  accept  a  name  in  prompt  and  
validate  whether  name  is entered  or not. If the  name  is not entered  then  display a message 
 "Sorry, you have  not  entered  any name". If  the  name is  entered  by the  user  then  display 
 
 
 "Hello <entered name>, welcome".  Here <entered name> is the name entered by the user

*/

document.getElementById("btn_prompt").addEventListener('click',
function() {
    var result = prompt('Enter Name')
    var msg;
    if (result) {
        msg = "Hello "+ result +" , Welcome.";
    } else if (result === "") {
        msg = "Name is not entered in the prompt.";
    } else {
        msg = "Bye.";
    }

    document.getElementById("promtpSpan").innerHTML = msg;
});
  