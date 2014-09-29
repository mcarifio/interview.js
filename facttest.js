/**
 * Created by mcarifio on 9/29/14.
 */

// console.log(fact(10))

var fact = require('./fact')

QUnit.test("fact(0)", function (assert) {
    assert.equal(1, fact.fact(0))
});


QUnit.test("fact(1)", function (assert) {
    assert.equal(1, fact.fact(1))
});

QUnit.test("fact(5)", function (assert) {
    assert.equal(120, fact.fact(5))
});

//test("fact(-1)", function () {
//    equal(Error, fact(-1))
//});

