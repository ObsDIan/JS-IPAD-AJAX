function $g(selector) {

    //nobelist至少包含一個node - Element object
    //如果有多個，只取第一個

    let nobelist = document.querySelectorAll(selector);

    if (nobelist.length == 0) {
        return null;
    }

    return nobelist.length == 1 ? nobelist[0] : nobelist;
}

export { $g };