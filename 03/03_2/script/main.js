let min_limit = Number(prompt("Enter min limit for loop, please"));
let max_limit = Number(prompt("Enter max limit for loop, please"));
let min_lim_v = min_limit;
let sum_of_evens = 0;


while (min_limit <= max_limit){
    if (min_limit%2 === 0)
        sum_of_evens = sum_of_evens + min_limit;
    min_limit++;
} 

alert(`Sum of all evens in range from ${min_lim_v} to ${max_limit} is ${sum_of_evens}`)