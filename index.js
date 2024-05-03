let message = document.getElementById("message");
const name = document.currentScript.getAttribute('data-payload');

console.log('name', JSON.parse(name));

window.addEventListener('keydown', function (event) {
    if (event.ctrlKey)
        if (event.altKey)
            if (event.key === 'l') {
                message.innerHTML = 'Logout successfull';
                message.classList.remove('text-orange-500');
                message.classList.add('text-emerald-300');
            }
});