/*
 * @Author: gene.jiang
 * @Date: 2024-04-23 19:47:53
 * @LastEditors: gene.jiang
 * @LastEditTime: 2024-04-23 19:50:36
 * @Description: file content
 * @FilePath: \learning_typescript\es6\async_timesleep.js
 */
class Sleep{
    constructor(ms){
        this.ms = ms;
    }

    then(resolve, reject){
        const startTime = Date.now();
        setTimeout(() => {
            resolve(Date.now() - startTime);
        }, this.ms);
    }


}

(async () => {
    const time = await new Sleep(1000);
    console.log(time);
})();