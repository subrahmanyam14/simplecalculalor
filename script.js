function add()
{
    let a=parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a+b;
    document.getElementById("ans1").innerHTML="Addition is "+c;
}
function sub()
{
    let a=parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c;
    if(b>a)
    {
         c=b-a;
    }
    else
    {
         c=a-b;
    }
    document.getElementById("ans1").innerHTML="Subtraction is "+c;
}
function mul()
{
    let a=parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a*b;
    document.getElementById("ans1").innerHTML="Multiplication is "+c;
}
function div()
{
    let a=parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    if(b==0)
    {
        document.getElementById("ans1").innerHTML="Zero Division Error"; 
    }
    else{
        let c=a/b;
        document.getElementById("ans1").innerHTML="Division is "+c;
    }
    
}