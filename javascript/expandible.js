
document.addEventListener("DOMContentLoaded", function() {
    let toggles = document.querySelectorAll('.toggle h2');
    

    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var listItem = toggle.parentElement.parentElement;
            console.log(toggles);
            var text = listItem.querySelector('.texto_expandir');
            text.style.display = text.style.display === 'block' ? 'none' : 'block'; // Alternar visibilidad
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let toggles = document.querySelectorAll('.toggle h1');
    

    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var listItem = toggle.parentElement.parentElement;
            console.log(listItem);
            var text = listItem.querySelector('.texto_expandir');
            text.style.display = text.style.display === 'block' ? 'none' : 'block'; // Alternar visibilidad
        });
    });
});


