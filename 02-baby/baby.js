var args = process.argv.slice(2);

var sum = args.reduce(function (acc, cur) { return +acc + +cur });

console.log(sum);
