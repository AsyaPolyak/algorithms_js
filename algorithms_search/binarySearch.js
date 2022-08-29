function BinarySearch(t, arr) {
    let i = 0,
        j = arr.length - 1,
        k;

        while(i <= j) {
            k = Math.floor((i + j)/2);
            if(t === arr[k]){
                return `index: ${k}`;
            }
            else if(t < arr[k]){
                j =k-1;
            }
            else {
                i =k +1;
            }
        } 
        return 'has no element';
}

let t = 9;
let arr =[2, 3, 4, 5, 6, 7, 8,9];
console.log(BinarySearch(t, arr));
