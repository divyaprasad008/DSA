/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (const ast of asteroids) {
        if(stack.length==0){
            stack.push(ast)
        }
        else{
            // let lastElement = stack[stack.length-1]
            let lastElement = stack.pop()
            // while(stack.length>0 && ast<0 && lastElement>0){

                // console.log(lastElement)
                if(Math.sign(lastElement) === Math.sign(ast)){
                    stack.push(lastElement)
                    stack.push(ast)
                }
                else{
                    // console.log(Math.sign(lastElement),Math.sign(ast))
                    // while(stack.pop())
                    

                    // while(stack.length>0 && Math.sign(lastElement) !== Math.sign(ast)){
                        // stack.pop()
                        insertElement = (Math.abs(ast)<Math.abs(lastElement))?lastElement:ast;

                        while(stack.length>0 && insertElement==ast && lastElement+ast!=0){
                            let lastElement = stack.pop()
                            // console.log(lastElement)
                            // if(ast+lastElement==0){

                            // }
                            insertElement = (Math.abs(ast)<Math.abs(lastElement))?lastElement:ast;

                        }
                        if(lastElement+ast!=0){
                            stack.push(insertElement);
                        }
                    // }
                }
            // }
        }
    }
    return stack
};

asteroids = [5,10,-5]
// Output: [5,10]
// console.log(asteroidCollision(asteroids))
console.log("=================")

asteroids = [8,-8]
// Output: []
// console.log(asteroidCollision(asteroids))
console.log("=================")


asteroids = [10,2,-5]
// Output: [10]
// console.log(asteroidCollision(asteroids))
console.log("=================")


asteroids =[-2,-1,1,2]
//output: []
console.log(asteroidCollision(asteroids))
console.log("=================")

asteroids = [-2,-2,1,-2]
// console.log(asteroidCollision(asteroids))
