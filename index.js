const notifier = require('node-notifier');
const path = require('path');

console.log('Running!')

let notifications = 0

setInterval(() => {
  let exercise = false
  if (notifications === 10) {
    notifications = 0
    exercise = true
  } else {
    notifications++
  }
  notifier.notify(
    {
      title: 'POSTURE!',
      message: exercise ? 'Time for exercises!' : 'Watch that posture!',
      icon: path.join(__dirname, exercise ? 'images/sloth.png' : 'images/koala.png'), // Absolute path (doesn't work on balloons)
      sound: true,
      wait: true,
      timeout: 15,
    },
    function(err, response) {
      // Response is response from notification
    }
  );
}, 300000)

process.on('SIGINT', () => {
  console.log('\nBye bye!')
  process.exit()
});
