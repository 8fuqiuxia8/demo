console.log('hello world!');
//let age: number = 2023
/**
 * 原始类型
 * let id: number = 1
 * let name: string = 'phenomenon'
 * let isLoading: boolean = false
 * let a: null = null
 * let b: undefined = undefined
 * let s: symbol = Symbol()
 * //数组类型
 * let arr0: number[] = [1, 2, 3]
 * let arr1: Array<number> = [1, 2, 3] //不推荐使用
 */
/**
 * //联合类型
 * 添加小括号，表示这个arr2首先是数组，其次这个数组的中可以出现number或string类型元素
 * let arr2: (number | string)[] = [1, 2, 3, 'a', 'b']
 * 不添加小括号，表示arr3既可以是number类型，也可以是string[]
 * let arr3: number | string[] = [ 'a', 'b']
 * let arr3: number | string[] = 123
 * //类型别名
 * type custom = (string | number)[]
 * let arr4: custom = [1, 'f', 3, 'q']
 * let arr5: custom = [2, 'x', '4']
 */
/**
 *单独指定参数和返回值类型
 * @param num1
 * @param num2
 */
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(20, 30));
var sub = function (num3, num4) {
    return num3 - num4;
};
console.log(sub(20, 30));
/**
 * 同时指定函数参数和返回值类型
 * @param num5
 * @param num6
 */
var mul = function (num5, num6) {
    return num5 * num6;
};
console.log(mul(30, 2));
/**
 *
 * @param num7
 * @param num8
 */
var div = function (num7, num8) {
    return num7 / num8;
};
console.log(div(20, 5));
var hello = function (name) {
    console.log('hello', name);
};
hello('world');
var age = 18;
console.log(age);
// 参数个数不同
// type F1 = (a: number) => void
// type F2 = (a: number, b: number) => void
// let f1: F1
// let f2: F2
// f2 = f1
//
// 参数个数、类型、返回值类型均相同
// type F1 = (a: number) => string
// type F2 = (a: number) => string
// let f1: F1
// let f2: F2=f1
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
