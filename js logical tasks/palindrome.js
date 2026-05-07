palindrom()

function palindrom (){

let str=""
let rev=""

for (let i=str.length-1 ;i>=0;i--){

   rev+=str[i]
}

if(rev===str){
    console.log("palindrome");
    
}

else{
    console.log("not a palindrom");
    
}

}



const palindrome=()=>{
let str=""
let rev=""

for (let i=str.length-1 ;i>=0;i--){

   rev+=str[i]
}

if(rev===str){
    console.log("palindrome");
    
}

else{
    console.log("not a palindrom");
    
}

}

palindrome()


function isPalindrome(str){

    let rev=""

    for(let i=str.length-1;i>=0;i--){

        rev+=str[i]
    }

    if(rev===str){

        console.log("palindrome");
        
    }

    else{
        console.log("not a palindrome" );
        
    }
}

isPalindrome("mada")