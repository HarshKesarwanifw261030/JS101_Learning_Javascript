let no = [1,2,3,4]
let sum =0;
let count=0;
for(let i =0;i<no.length;i++){
  if(no[i]%2==0){
    sum=sum+no[i];
    count++;
  }
}
console.log(sum/count);