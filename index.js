// function sum(a,b) {
//     var sum = Number(a) + Number(b);

//     if(sum)
//     {
//         sum = Number.parseFloat(sum).toFixed(1);
//         return Number(sum)
//     }
//     else
//     {
//         return 'sum invoked without arguments'
//     }

    

// }


// TO SUCCEED THREE NUMBERS.

function sum(...args) {
    if(args.length === 0)
    {
        return 'sum invoked without arguments'
    }
    
    const sumVal = [...args].reduce((a,c)=> a + Number(c),0);

    return Number(sumVal.toFixed(1));

}

module.exports = sum;