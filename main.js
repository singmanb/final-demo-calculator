var answer_click="no";
function click_me(valnum)
{
	// alert(answer_click);
if(answer_click=="no")
{
let numb=document.getElementsByClassName('display');
numb[0].textContent+= valnum;
}
else
{
let numb=document.getElementsByClassName('display');
numb[0].textContent=0;
numb[0].textContent=valnum;
answer_click="no";
// alert(answer_click);
}
}; 
function clear_screen()
{
let numb=document.getElementsByClassName('display');
numb[0].textContent="0";
};
function get_operator(ops)
{
let numb=document.getElementsByClassName('display');
numb[0].textContent+=ops;
};
function answer1()
{
let func=operationplus();
let numb=document.getElementsByClassName('display');
numb[0].textContent=func;
answer_click="yes";
// alert(answer_click);
};

function operationplus()
// for add operator
{
	var pluscnt=0;
	var ind=0;
	var sum=0;
	var tot= document.getElementsByClassName('display')[0].textContent;
	var pluscnt=tot.split("+");
	var minuscnt=tot.split("-");
	var mult=tot.split("X");
		ind=pluscnt.length;
		minusind=minuscnt.length;
		multind=mult.length;
	var divid= tot.split("÷");
	var divind= divid.length;
			if(ind>1)
	{ sum=0
			for(i=0;i<ind;i++)
			{
			sum=  Number(pluscnt[i])+Number(sum);
				
			}
	} 
//  for minus operator
	else if(minusind>1)
	{ 
	sum=0;
	var pluscnt=tot.split("-");
	ind=pluscnt.length;
		for(i=0;i<ind;i++)
		{
		if(i==0)
		{
			sum= Number(pluscnt[i]);
		}
		else
		{
			sum= sum - Number(pluscnt[i]);
		}
	}	
	} 
		// for multiplication
		else if(multind>1)
     {
			 sum=1;
			 var mult=tot.split("X");
			 multind=mult.length;
			 
			 	for(i=0;i<multind;i++)
				 {
					 if(i==0)
					 {
						 sum= Number(mult[i]);
					 }
					 else
					 {
						sum= Number(sum)*Number(mult[i]);
					 }
				 }
	}
	// for division
	 else if(divind>1)
	 {
		 sum=1;
	 
	 		var divid= tot.split("÷");
	 		var divind= divid.length;
	
 	for(i=0;i<divind;i++)
 {
	 if(i==0)
	{
	sum=divid[i];
	}
	if(i>0)
	{
		sum=Number(sum)/Number(divid[i]);
	}
 }
} 
//   rounding off the output
sum=Number((sum).toFixed(2));
return sum;
}; 






