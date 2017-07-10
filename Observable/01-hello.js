const Rx = require('rxjs');

/*
Rx.Observable.interval(1000)
  .delay(3000)
  .filter(i => i % 2 === 0)
  .map(i => i + 1)
  .subscribe((val) => {
    console.log(val);
  });
  */

const observable$ = Rx.Observable.from([{
  prenom: 'Romain',
  adresse: {
    ville: 'Paris'
  }
}]);

observable$
.delay(200)
.map(contact => contact.prenom)
.catch((err) => {
})
.subscribe((prenom) => {
  console.log(prenom);
})