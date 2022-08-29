
function linearSearch(t, arr) {
    let i =0;
    while( arr[i] !== t) {
         i++;
        } {
        if(i < arr.length){
            return `Індекс елемента ${t} дорівнює ${i}`;
        }
        else {
            return `no such element exists!`;
        }
    }
}
let t = 6,
    arr =[2, 3, 4, 7, 5, 6, 8, 9];
    
console.log(linearSearch(t, arr));
