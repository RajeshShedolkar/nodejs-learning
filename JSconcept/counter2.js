var counter = 0;

function increment(){
    counter += 1;
    console.log(counter);
    setTimeout(increment, 1000)
}

function increment2(){
    counter += 1;
    console.log(counter);
    setTimeout(increment, 1000)
}

increment()
