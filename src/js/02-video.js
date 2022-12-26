import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const KEY_VIDEO_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let savedTime = 0;
try {
  savedTime = localStorage.getItem(KEY_VIDEO_STORAGE);
  //console.log(savedTime);
} catch (err) {
  savedTime = 0;
}

if (savedTime !== 0) {
  player
    .setCurrentTime(Number(savedTime))
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    const seconds = currentTime.seconds;
    // console.log(currentTime);
    localStorage.setItem(KEY_VIDEO_STORAGE, JSON.stringify(seconds));
  }, 1000)
);
