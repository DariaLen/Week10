function sayHello(){
    console.log("Я учу JavaScript!");
}
sayHello()



const img = document.getElementById('img')

const array = ['./images/2.jpeg','./images/3.jpeg','./images/4.jpeg']

let i = 0

function rewNextImg(){
    if (i < array.length) {
        img.src = array[i];
        ++i
    }
}

 function rewNewImg(){
    i = i -1
    if (i > 0) {
        --i
        img.src = array[i];
    } else if (i == 0) {
        img.src = array[i];
    }
 }