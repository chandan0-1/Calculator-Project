console.log(1);
var dig = document.getElementsByClassName("digit");
var out = document.getElementById("output");
var secout = document.getElementById("sec-output");
var op1 = 0;
var sign = null;
var op2 = 0;
var reset = 0;
for (var i = 0; i < dig.length; i++){
  dig[i].addEventListener('click',function(){
    var val = this.getAttribute('val');

    if (val == '+'){
      op1 = parseFloat(out.innerText);
      out.innerText = "" ;
      sign = '+';
    }
    else if (val == '-'){
      op1 = parseFloat(out.innerText);
      out.innerText = "" ;
      sign = '-';
    }
    else if (val == '*'){
      op1 = parseFloat(out.innerText);
      out.innerText = "" ;
      sign = '*';
    }

    else if (val == '/'){
      op1 = parseFloat(out.innerText);
      out.innerText = "" ;
      sign = '/';
    }

    else if(val == '='){
      op2 = parseFloat(out.innerText);
      var temp = eval (op1 + sign + op2) ;
      if(temp){
        out.innerText = temp;
      }
    }

    else if(val == 'clear'){
      out.innerText = " ";
      secout.innerText = "";
      op1 = op2 = 0;
      sign = null;
    }

    else if( val == '+/-'){
      var temp = parseFloat(out.innerText);
        out.innerText = temp * -1;
    }
    else if( val == '%'){
      var temp = parseFloat(out.innerText);
        out.innerText = temp /100;
    }

    else{
      out.innerText += val;
    }

    if (val == 'clear' ){
      secout.innerText = "";
    }
    else if (val == "="){
      if (temp){
        secout.innerText += "=" + temp;
      }
      else{
        secout.innerText = "";
      }
    }
      
    
    else{
      
      secout.innerText +=val;}
  })
}
