let max_limit = Number(prompt('Enter max limit, please'));
let min_limit = 0;
let min_lim_v = min_limit;

if (!(max_limit < 0)){
    for (min_limit; min_limit <= max_limit; min_limit++){
        if (min_limit%2===0){
            console.log(`Value ${min_limit} in range from ${min_lim_v} to ${max_limit} is even`);
        } else {
            console.log(`Value ${min_limit} in range from ${min_lim_v} to ${max_limit} is odd`);
        }
    }
} else {
    console.log("Max limit can not be less than 0")
}