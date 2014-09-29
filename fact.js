/**
 * Mike Carifio <mike@carif.io>
 *
 * ubuntu:
 * sudo apt-get install nodejs
 * sudo npm install qunit
 *
 *
 * osx:
 * brew install nodejs
 * nps install yunit
 *
 * run:
 * qunit -c fact.js -t facttest.js
 *
 */


// require('./fact')
exports.fact = function(n) {
    if (0 == n || 1 == n) return 1;
    return n * fact(n - 1);

}


