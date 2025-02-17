function makeid(l) {
  // write your code here
	let s=""
	let char_list=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012
		3456789`
	
	if(l<10){
		for(let i=0 ;i<=l; i++){
			s=charAt(Math.floor(Math.random()*char_list.length))+s
		}
	}
	return s


}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
