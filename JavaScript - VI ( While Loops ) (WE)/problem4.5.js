let n =1;
let ave;
let n2 = 100;
let sum=0;
while(n<=n2){
  if(n%2==0){
    // console.log(n);
    sum = sum +n;
  }
  n++
}
console.log(sum);
n2 = n2/2;
ave = sum/n2;
console.log(ave);