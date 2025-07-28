function functionWithMultipleParams(first, second, third, fourth) {
    console.log(first)
    console.log(second)
    console.log(third)
    console.log(fourth)
}

function functionWithOneParam(options) {
    console.log(console.log(options.first))
    console.log(console.log(options.second))
    console.log(console.log(options.third))
    console.log(console.log(options.fourth))
}

functionWithMultipleParams(1, 2, 3, 4)
functionWithOneParam({
    first: 1,
    second: 2,
    third: 3, 
    fourth: 4
})
