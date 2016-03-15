function delegate(parentEl, child, eventName, handler) {
    var childCollection = parentEl.querySelectorAll(child);
    // TODO:使用Array.prototype.slice()方法将集合转化为真正的数组
    var childs = Array.prototype.slice.apply(childCollection);

    parentEl.addEventListener(eventName, function(e) {
        var eventTarget = e.target;

        if (~childs.indexOf(eventTarget)) {
            handler(e);
        }
    }, false);
}

delegate(document.querySelector('#test'), 'li.active', 'click', function(e) {
    console.log(e.target);
});
