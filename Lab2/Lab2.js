var part4 = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

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

	if(getAverage2([17,42,72,39])==42)
	{
		console.log("Part 3 OK");
	}
	else
	{
		console.log("Part 3 FAIL");
	}

	if(cannonsReady(part4)==0)
	{
		console.log("Part 4 OK");
	}
	else
	{
		console.log("Part 4 FAIL");
	}

	if(aliasGen("Carrick", "Dolan")=="Cancel Dio")
	{
		console.log("Part 5 OK");
	}
	else
	{
		console.log("Part 5 FAIL");
	}

	var BlackPearl = new Ship(50,10);
	if(BlackPearl.isWorthIt())
	{
		console.log("Part 6 OK");
	}
	else
	{
		console.log("Part 6 FAIL");
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

//Part 3
function getAverage2(marks)
{
	var sum = 0;
	marks.forEach(item =>
	{
		sum+=item;
	});
	var result = 0;
	result = Math.floor(sum / marks.length);
	return result;
}

//Part 4
function cannonsReady(dict)
{
	for( var name in dict)
	{
		if(dict[name] === "nay")
		{
			return 0
		}
	}
	return 1;
}

//Part 5
function aliasGen(first, surname)
{
	var firstName = {A : "Alpha", B : "Bravo", C : "Cancel", D : "Dio"};
	var secondname = {A : "Answer", B : "Boio", C : "Corner", D : "Dio"};

	var answer = 0;
	if (!isNaN(first[0]) || !isNaN(surname[0]))
	{
		console.log("Who named you that?");
		return 0;
	}
	first = first[0].toUpperCase();
	surname = surname[0].toUpperCase();
	answer = firstName[first[0]] + " " + secondname[surname[0]];
	return answer;
}

//Part 6
function Ship(draft,crew) 
{
	this.draft = draft;
	this.crew = crew;
}

Ship.prototype.isWorthIt = function()
{
	if (this.draft - (this.crew * 1.5) > 20)
	{
		return true;
	}
	else
	{
		return false;
	}
}