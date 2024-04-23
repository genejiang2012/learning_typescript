/*
 * @Author: gene.jiang
 * @Date: 2024-04-23 19:37:51
 * @LastEditors: gene.jiang
 * @LastEditTime: 2024-04-23 19:47:11
 * @Description: file content
 * @FilePath: \learning_typescript\es6\async.js
 */
async function hello() {

    return 'hello';
}

f().then(res => console.log(res))

async function helloAysnc() {

    return 'hello';
}

console.log(helloAysnc());

helloAysnc().then(res => {
    console.log(res);
})  


async function f(){
    throw new Error('出错了');
}

f().then(
    res => console.log('resolved', res),
    err => console.log('rejected', err)
)


async function getTitle(url){
    let response = await fetch(url);
    let html = await response.text();
    return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}

getTitle('https://tc39.github.io/ecma262/').then(console.log);