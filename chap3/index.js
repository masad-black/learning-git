function printSomething(){
    let array = [1,2,3,4,"Hello"];

    for (let item of array){
        console.log(`item: ${item}`)
    }
}

function write(){
    console.log("This is written in js!!")
}

write()
printSomething();
