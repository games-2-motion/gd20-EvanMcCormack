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

	if(getAverage([45,76,28])==49)
	{
		console.log("Part 2 OK");
	}
	else
	{
		console.log("Part 2 FAIL");
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

//Part 2
function getAverage(marks)
{
	var sum = 0;
	for (var i = 0; i < marks.length; i++)
	{
		sum += marks[i];
	}
	return Math.floor(sum / marks.length);
}