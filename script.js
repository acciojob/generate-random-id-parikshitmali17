function makeid(l) {
  // write your code here
	let s=""
	let char_list=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012
		3456789`
	
	if(l<10){
		for(let i=0 ;i<l; i++){
			s+=char_list.charAt(Math.floor(Math.random()*char_list.length))
		}
	}
	return s

}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
