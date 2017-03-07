function baby(arg) {
	var sum = 0;
	for (var i = 2; i < arg.length; i++ ){
		sum += Number(arg[i]);
	}
	return sum
}

console.log(baby(process.argv));
