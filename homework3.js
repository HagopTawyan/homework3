//1st question
const delta = function(a, b, c, o) {
	return (b*b -4*a*c + o);
};

console.log(delta(4, 5, 6, 8));

//2nd question
const q = function(){
	return ("you messed up your code kid!!");

};
console.log(q());

//3rd question
const f = function(Fname, Lname) {

};
console.log(f("hagop", " Tawyan"));

//4th question
const j = function(a, b, c){
      
      if(a.length > b.length && a.length > c.length ){
      		return (a);
      
      }
       if(b.length > a.length && b.length > c.length ){
      		return (b);
      
      }
       if(c.length > b.length && c.length > a.length ){
      		return (c);
      
      }
      
      
    }
		console.log(j("Hagop", "Tawyan", "Hayrabedian"));

 //5th question 
 	const p = function(x, y){
 	if (x === y){
 		return (0);
 	}		
	 else if (x>y){
		return (1);
	}
	else if (x<y){
		return (-1);
	}
};
		console.log(p(5, 6));

 //6th question 

 	const fun = function(num1, num2){
 		return (num1*num2);
 	}
 		console.log(fun(3, 4));

 //7th question 

 	const fun2 = function(numb1, numb2){
 		return (numb1/numb2);
 	}
 		console.log(fun2(8, 2));

 //8th question 

 	const triangleArea = function(base, height){

 		return fun2(fun(base, height), 2);
 	}
 			console.log(triangleArea(12, 4));
 		


 //9th question

 	const numLength = function(number){
 		return (number.length);
 	}
 			console.log(numLength("4604982"));

 //10th question 
 				
 	const g = function(string11, string22, number00){

 		if (string11.length + string22.length > number00){

 			return (1);

 		}	
		else{

 			return (-1);
 		}
 	};

 			console.log(g("hey there", "I love CS boyyy", 8));

 //11th question
 
 	const  runStuff = function(number100, number101, string102){

 			if (string102 === "rectangle"){

 				return (number100*number101);
 			}
 			else if (string102 === "triangle"){

 				return (number100*number101 / 2);
 			}

 			else (string102 !== "rectangle" && string102 !=="triangle");{

 				return (-1);
 			}
 		};		
 				console.log(runStuff(8, 3, "triangle"));