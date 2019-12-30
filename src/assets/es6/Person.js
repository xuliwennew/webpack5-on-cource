
function logger(params) {
    console.log("访问了logger在实例化Person时候")
}

@logger
export class Person {

    name=""
    
    say(){
        console.log(`${this.name}  say hello!`)
    }
}