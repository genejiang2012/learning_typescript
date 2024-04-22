/*
 * @Author: gene.jiang
 * @Date: 2024-04-22 19:47:05
 * @LastEditors: gene.jiang
 * @LastEditTime: 2024-04-22 19:54:43
 * @Description: 数组解构赋值
 * @FilePath: \learning_typescript\es6\array_de.js
 */
let a = 1;
let b = 2;
let c = 3;

console.log(a, b, c);           //1, 2, 3

let [foo, [[bar], baz]] = [1, [[2], 3]]
console.log(foo, bar, baz);     //1, 2, 3


let [, , third] = ['foo', 'bar', 'baz']
console.log(third);             //baz

let [x, , y] = [1, 2, 3]
console.log(x, y);              // 1, 3

let [head, ...tail] = [1, 2, 3, 4, 5]
console.log(head, tail);        //1, [2, 3, 4, 5]

let [u, v, ...w] = ['a']
console.log(u, v, w);          //a, undefined, []

