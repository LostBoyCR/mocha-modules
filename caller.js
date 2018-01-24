var calculator = require('./moduleoperators.js');
var rs = require('readline-sync');

switch(rs){

case `+`:
calculator.add(x, y);
break;

case '-':
calculator.subtract(x - y);
break;

case '*':
calculator.multiply(x * y);
break;

case '/':
calculator.divide(x / y);
break;

}
