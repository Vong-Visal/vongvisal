document.addEventListener('DOMContentLoaded', function() {
    const tracks = document.querySelectorAll('.track');
    
    tracks.forEach(track => {
        track.addEventListener('click', function() {
            alert(`Playing ${track.querySelector('h3').innerText} by ${track.querySelector('p').innerText}`);
        });
    });
});
