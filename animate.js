function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //把步长值写入定时器中  
        // var step = (target - obj.offsetLeft) / 10;
        //把步长值取整,不要出现小数的问题
        //var step = Math.ceil((target - obj.offsetLeft) / 10);
        //把步长取整,回退和前进的时候都不出现小数 
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数写在定时器结束里面,等定时器结束后再执行,而不是一调用就执行
            if (callback) {
                callback();
            }
        } else {
            //把每次变化的步长改为一个慢慢变小的值  步长公式:(目标值-当前的位置)
            obj.style.left = obj.offsetLeft + step + 'px'
        }

    }, 50)
}