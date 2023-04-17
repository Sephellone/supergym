const VIDEO_ID = '9TZXsZItgdw';

const initYTapi = () => {
  let tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

const onPlayerReady = (event) => {
  event.target.mute();
  event.target.playVideo();
};

const createPlayer = (id) => {
  const player = new YT.Player('player', {
    videoId: id,
    playerVars: {
      'playsinline': 1,
      'autoplay': 1,
    },
    events: {
      'onReady': onPlayerReady,
    },
  });
};

const initVideoButton = () => {
  const videoCover = document.querySelector('[data-video-cover]');
  if (videoCover) {
    const videoButton = videoCover.querySelector('[data-video-button]');
    const playerElement = document.querySelector('#player');

    if (videoButton && playerElement) {
      videoButton.addEventListener('click', () => {
        createPlayer(VIDEO_ID);
        videoCover.classList.add('hidden');
      });
    }
  }
};

export {initYTapi, initVideoButton};
