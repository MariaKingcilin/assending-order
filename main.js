// assending-order


var a=prompt("Enter the A value");
var b=prompt("Enter the B value");
var c=prompt("Enter the C value");
			
if(a<b)
{
	if(a<c)
	{
		if(b<c)
		{
			console.log(a,b,c);
		}
		else
		{
			console.log(a,c,b);
		}
	}
	else
	{
		console.log(c,a,b);
	}
}
else if(b<c)
{
	if(c<a)
	{
		console.log(b,c,a);
	}
	else
	{
		console.log(b,a,c);
	}
}
else
{
	console.log(c,b,a);
}