let smile = [':)',
             '=)',
             ':)',
             '=)',
             ':)',
             '=)'];

console.log(`Original array: ${smile}`);

for (let i = 0; i < smile.length; i++){
    if (smile[i] === '=)') 
        smile[i] = ';)';
}

console.log(`Modified array: ${smile}`);