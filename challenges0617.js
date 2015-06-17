// Write a function memoize that takes a callback function, and returns a "memoized" 
// function that only runs for new inputs. In otherwords, a memoized function will 
// store return values related to an input and return that cached value immediately if 
// it has been computed before:

function expensiveOperation() {
    console.log('this should be shown once')
    return 22
}


function memoize(cb){
    var memo = {}
    return function(...args){
    	var str = args.join(',')
    	if(memo[str]) return memo[str]
    	//can pass arguments in as an array using spread operator
    	memo[str] = cb(...args)
    	return memo[str]
    }


}

var memoized = memoize(expensiveOperation)
console.log(memoized())
console.log(memoized())

// the console should show:
// 'this should be shown once'
// 22
// 22


// Write a method complements(array, number) 
// which returns true if any two numbers in
// the array sum to the number.

function complements(array, number){
	for(var i=0; i < array.length - 1; i++){
		for(var j = i+1; j < array.length; j++){
			if(array[i] + array[j] === number) return true
		}
	}
	return false
}

var odds = [1, 3, 5, 7, 9, 11]
var ints = [-11, 40, 17, -5, -1, -11, 2, 9]

console.assert( complements(odds, 4) === true )
console.assert( complements(odds, 1) === false )
console.assert( complements(ints, -22) === true )
console.assert( complements(ints, 16) === true )
console.assert( complements(ints, 40) === false )