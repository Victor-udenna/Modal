let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn')
// calls element inthe html dom

openBtn.addEventListener('click', function () {
    modalContainer.style.display = 'block'; 
})

// displays the modal on click

closeBtn.addEventListener('click', function () {
    modalContainer.style.display = 'none';
})

// close the button on click of the "x" icon.

window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }

    // closes button with the click of the body
});


