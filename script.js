// alert ('view my page');

//Javascript type script
var string = "It boosts the Immune System. It makes you  live a longer and healthier life.  It improves mental clarity and focus. It increases the body's energy levels.It helps promote optimal levels of Glutathione. Get more energy, recover faster and sleep better.  It Contains Vitamin C. Neutralizes free radical damages and slows the aging process.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate, 90);
})();