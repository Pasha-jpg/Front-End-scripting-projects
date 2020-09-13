

 function calc() 

 {
 	var x,j,type;
 	type=document.getElementById('n1').value;
 	x=type*type;
 	document.main.Square.value=x;
 	j=type*type*type;
 	document.main.Cube.value=j;
  	
  	function factorial() 
  	{  
  		if (type > 0 && type <= 1) 
  		{return 1;}

  	   for (var i = type-1;i>=1;i--)
  	   	{type*=i;}
  		
  		return type;
  	}

 	document.main.Factorial.value= factorial();

 	
  
 	}

function myFunction() {
  document.getElementById("myform").reset();
}


 	
  
 
