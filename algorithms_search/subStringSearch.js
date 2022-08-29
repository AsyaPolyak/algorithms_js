function substringSearch (sub, str){
    let n = sub.length;
    let N = str.length - n +1;

    for(let i =0; i< N; i++){
        let j =0;
        while(j < n && sub.charAt(j) === str.charAt(i + j)) {
             j++;
            }
            if(j === n) {
                return i;
            }
    }
    return -1;
}

console.log(substringSearch('ips', 'Lorem ipsum'));
console.log(substringSearch('dolor', 'Lorem ipsum'));