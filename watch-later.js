function addToWatchLater(title, thumbnail) {
    const watchLaterList = document.getElementById('watch-later-list');

    // Create video card element
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';

    // Create and append thumbnail image
    const img = document.createElement('img');
    img.src = thumbnail;
    img.alt = title;
    videoCard.appendChild(img);

    // Create and append video info
    const videoInfo = document.createElement('div');
    videoInfo.className = 'video-info';
    const videoTitle = document.createElement('h3');
    videoTitle.textContent = title;
    videoInfo.appendChild(videoTitle);

    videoCard.appendChild(videoInfo);

    // Append the video card to the Watch Later list
    watchLaterList.appendChild(videoCard);
}
