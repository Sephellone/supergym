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
          // 'onStateChange': onPlayerStateChange,
        },
      });

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // let done = false;
      // function onPlayerStateChange(event) {
      //   if (event.data === YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }
      // }

      // function stopVideo() {
      //   player.stopVideo();
      // }

      videoCover.classList.add('hidden');
    });
    // // // 4. The API will call this function when the video player is ready.


    // // // 5. The API calls this function when the player's state changes.
    // // //    The function indicates that when playing a video (state=1),
    // // //    the player should play for six seconds and then stop.


  }
};

export {initYTapi, initVideoButton};
