let message = document.getElementById("message");

window.addEventListener('keydown', function (event) {
    if (event.ctrlKey)
        if (event.altKey)
            if (event.key === 'l') {
                message.innerHTML = 'Logout successfull';
                message.classList.remove('text-orange-500');
                message.classList.add('text-emerald-300');
            }
});