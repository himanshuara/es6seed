import {sum, square, variable, MyClass} from './import';
import {singleDD} from './nauk-singleDD';
// 25
console.log(square(5) );

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
}

var x = new MyClass(cred);

//Ritesh Kumar
console.log(x.getName());