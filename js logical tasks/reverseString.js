
// function ReserveString(str){


//     let rev=""

//     for(let i=str.length-1;i>=0;i--){

//         rev+=str[i]

//     }

//             console.log(rev);

    
// }


// ReserveString("Hello")




// console.log("printing numbers 1 to 10");

// for(let i=1;i<=10;i++){
    
//     console.log(i);
    
// }


// for(let i=10;i>=0;i--){
//     i+=""
//     console.log(i);
    
// }



// function evennumber(n){


//     for(let i=0;i<=n;i++){

//         if(i%2===0){
//             console.log(i);
            
//         }

//     }
// }

// evennumber(50)


// function oddNumber(n){


//     for(let i=0;i<=n;i++){

//         if(i%2!==0){
//             console.log(i);
            
//         }

//     }
// }

// oddNumber(50)



// sum of numbers

// let sum=0;

// for(let i=1;i<=10;i++){

//   sum+=i
// }

// console.log("sum of number",sum);


//factorial


// let fact=1;

// for (let i=1;i<=8;i++){

//     fact*=i
// }

// console.log(fact);

//SWAP two number

// let a=10,b=2;

// [a,b]=[b,a]

// console.log(a,b);



//sum of array

// const arr=[10,20,30]
// let sum=0;


// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum);


// const arr=[1,2,3,4,5,6,7,8,9,10]

// for(let i=0;i<arr.length;i++){

//     if(arr[i]%2===0){
//         console.log(arr[i]," even number");
        
//     }
//     // else{
//     //     console.log(arr[i]," odd number")
//     // }
// }




// function checkPrimenumber(n){
// let isPrime =true;

// if(n<=1){
//     isPrime=false
// }

// for(let i=2;i*i<=n;i++){
//     if(n%i===0){
//         isPrime=false
//         break;
//     }
// }
// if(isPrime){
//     console.log(n,"is a prime number");
    
// }
// else{
//         console.log(n,"not is a prime number");

// }
// }

// checkPrimenumber(13)


// function isPrime(n) {
//     if (n <= 1) return false;

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPrime(7));


//largest number in array 

// const arr=[1,4,7,2,3]


// let smallest=arr[0]

// for(let i=0;i<arr.length;i++){

//     if(arr[i]<smallest)
// {
// largest=arr[i];
// }
        


// }
// console.log(smallest);


// const arr=[1,2,3,4,5,1,5,5];

// let result =[]

// for(let i=0;i<arr.length;i++){
//     let isDuplicate=false;

//     for(let j=0;j<result.length;j++){
//         if(arr[i]===result[j]){
//             isDuplicate=true
//             break;
//         }
//     }
//     if(!isDuplicate){
//         result[result.length]=arr[i]
//     }
// }

// console.log(result);


// console.log(1+"2"+3);


// const str="hello"

// let rev=""

// for(let i=str.length-1;i>=0;i--){
//     rev+=str[i]
// }

// console.log(rev);


console.log([] + [])        
