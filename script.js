// ? Task -1
// class Hesablama{
//     constructor(initialValue){
//         this.value=initialValue
//     }
//     plus(num){
//         this.value+=num;
//         return this;
//     }
//     divide(num){
//         this.value/=num;
//         return this;
//     }
//     minus(num){
//         this.value-=num;
//         return this;
//     }
//     multiply(num){
//         this.value*=num;
//         return this;
//     }
// }

// let answer = new Hesablama(50).plus(6).minus(30).multiply(3).divide(2);
// let checkanswer = new Hesablama(20).divide(2).divide(5);

// console.log(checkanswer.value);
// ? Task -1


function myFunc(arr,cb) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = cb(arr[i],i)
    }
    return arr
}
const arr =[1,2,3,4]
// let res = myFunc(arr,(x)=>x*2)
// console.log(res);
const arr1 = myFunc(arr,(x)=>{return x-5})
console.log("arr1",arr1);
const arr2 = myFunc(arr,(x,i)=>{return i*5})
console.log("arr2",arr2);