
 function display(input) 
 {
    document.getElementById("output-screen").value += input;
   }

function eql()
{
    var a=document.getElementById("output-screen").value;
    var b=eval(a);
    document.getElementById("output-screen").value=b;
    document.getElementById("hist").value+=`${a}=${b}`
}
function CLS() 
{
    document.getElementById("output-screen").value = "  ";
}
  