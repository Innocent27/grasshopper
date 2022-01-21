//  let a = [1,2,3];
// let sum=0;
// for(let i=0;i<a.length;i++){
//     sum+=a[i];
// }
// console.log(sum);
function sum( a, b, c){
    let k=[a,b,c];
    let sum =0;
    for(let i=0;i<3;i++){
        sum+=k[i];
        return sum;
    }
}
 console.log(sum(1,2,3));

// 
// function x([a,b,c]){
// return a+b+c;
// }
// console.log(x([100,2,3]));