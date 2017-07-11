import { Horloge } from './02-horloge/horloge';

const div = document.getElementById('horloge');

if (div) {
  const horloge = new Horloge({
    container: div,
    delay: 1000,
    format: 'HH:mm:ss'
  });
  horloge.start();
}
