function interpolationSearch (t, arr) {
    let mid,
        i = 0,
        j =arr.length-1;

    while(arr[i] < t && arr[j] > t){
        mid = i+Math.floor(( ( (t -arr[i] ) * (j - i)  ) / (arr[j] - arr[i]) ));

        if( arr[mid] < t){
            i = mid +1;
        }
        else if (arr[mid] > t){
            j =mid-1;
        }
        else{
            return mid;
        }

        if (arr[i] === t) {
            return i;
        }
        else if(arr[j] === t){
            return j;
        }
        else{
            return 'has no element';
        }
}
}
let t = 6,
arr =[2, 3, 4, 7, 5, 6, 8, 9];

console.log(interpolationSearch(t, arr));
