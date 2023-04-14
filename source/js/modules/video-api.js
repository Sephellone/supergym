// 2. This code loads the IFrame Player API code asynchronously.
const initYTapi = () => {
  let tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

const initVideoButton = () => {
  const videoCover = document.querySelector('[data-video-cover]');
  if (videoCover) {
    const videoButton = videoCover.querySelector('[data-video-button]');

    videoButton.addEventListener('click', () => {
      let player = new YT.Player('player', {
        videoId: '9TZXsZItgdw',
        playerVars: {
          'playsinline': 1,
          'autoplay': 1,
        },
        events: {
          'onReady': onPlayerReady,
        },
      });

      function onPlayerReady(event) {
        event.target.mute();
        event.target.playVideo();
      }

      videoCover.classList.add('hidden');
    });
  }
};

export {initYTapi, initVideoButton};
