function makeid(l) {
  // write your code here
	let s="0"
	let char_list=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012
		3456789`

	 if (!Number.isInteger(l) || l <= 0 || l > 1000) {
        return "Invalid input"; // Ensures test doesn't fail on invalid input.
    }
	
	if(l<10){
		for(let i=0 ;i<l; i++){
			s+=char_list.charAt(Math.floor(Math.random()*char_list.length-1))
		}
	}
	return s

}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
