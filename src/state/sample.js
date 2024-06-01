

// array.map((item,index) => {
//     const [a,b,c] =array[1]
//     console.log(a)
// })
const array = [[1,2,3],[3,4,5],[4,5,6]]
console.log(array[1])
for (let index = 0; index < array.length; index++) {
    const [a,b,c] = array[1];
    console.log(b)
    
}