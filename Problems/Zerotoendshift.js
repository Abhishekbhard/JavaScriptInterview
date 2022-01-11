let arr=[1,0,6,0,21,0,5,9];

let count=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        arr[count++]=arr[i];
    }
    
}
while(count<arr.length){
    arr[count++]=0;
}

console.log(arr);

