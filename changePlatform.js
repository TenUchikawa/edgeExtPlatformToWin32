var codeToInject = 'Object.defineProperty(navigator,"platform", { \
    get: function () { return "Win32"; }, \
    set: function (a) {} \
   });';
var script = document.createElement('script');
script.appendChild(document.createTextNode(codeToInject));
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);