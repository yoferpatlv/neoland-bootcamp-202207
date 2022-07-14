console.log('%cTESTY👌%cv0.0', 'color: white; font-size: 24px; font-weight: bold; background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,255,0,1) 100%);', 'color: black;')

function describe(description, suite) {
    console.log('%c' + description, 'font-size: 14px; font-weigth: bold; color: white; background-color:brown; text-transform:uppercase;')

    suite()
}

function test(description, test) {
    console.log('%c' + description, 'font-size: 13px; font-weigth: bold; color: dodgerblue;')

    test()
}

function check(result, expected) {
    if (result === expected)
        console.log('result %c' + result + '%c, expected %c' + expected + ' %c ok ', 'font-weight: bold;', '', 'font-weight: bold;', 'background-color: greenyellow;')
    else
        console.log('result %c' + result + '%c, expected %c' + expected + ' %c ko ', 'font-weight: bold;', '', 'font-weight: bold;', 'background-color: red; color: white;')
}