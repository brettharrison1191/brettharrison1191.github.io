
// create a function that counts down from 99

for (i = 99; i >0; i--){
	var minusOne = i - 1;
	if (i > 2) {
		$("#lyrics").append("<li>"+i+" bottles of beer on the wall, "+i+" bottles of beer, take one down, pass it around, "+ minusOne+" bottles of beer on the wall </li>")
	} else if (i===2) {
		$("#lyrics").append("<li>"+i+" bottles of beer on the wall, "+i+" bottles of beer, take one down, pass it around, "+ minusOne+" bottle of beer on the wall </li>")
	} else {
		$("#lyrics").append("<li>"+i+" bottle of beer on the wall, "+i+" bottle of beer, take it down, pass it around, "+ minusOne+" bottles of beer on the wall </li>")
	}
}

// prints out the lyrics using jquery