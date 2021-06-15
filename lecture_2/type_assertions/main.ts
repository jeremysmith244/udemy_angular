let message; 
message = 'abc';

// This is only an intellisense convenience, dont think this fixes it
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
console.log(endsWithC);