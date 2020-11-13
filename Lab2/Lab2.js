function square(n)
{
  return n*n;
}

function main()
{
	if(square(5)==25)
	{
		console.log("OK");
	}	
	else
	{
		console.log("square FAIL");
	}

	if(howManyLightsabersDoYouOwn("Zach")==18)
	{
		console.log("Part 1 OK");
	}
	else
	{
		console.log("Part 1 FAIL");
	}
}

//Part 1
function howManyLightsabersDoYouOwn(name)
{
	if(name === "Zach")
	{
		return 18;
	}
	else
	{
		return 0;
	}
}