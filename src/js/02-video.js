import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// console.log(Player);
//console.log(throttle);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let savedTime = 0;
try {
  savedTime = localStorage.getItem('videoplayer-current-time');
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
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  }, 1000)
);
