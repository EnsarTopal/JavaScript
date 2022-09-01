/*
var harry = 'potter'
var voldemort = 'He who must not be named'
function jump() {
}

export function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}

console.log(fight(harry, voldemort))
*/

/*
define([
    'module1',
    'module2'
], function (moduleImport, module2Import) {
    var fight = moduleImport//.fight;
    var module2 = module2Import//.importedFunc2;
    function dance() {

    }
    return {
        dance: dance,
    };
});

var fightModule = (function () {
    var harry = 'potter'
    var voldemort = 'He who must not be named'



    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
        console.log(attack2)
        return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
    }
    return {
        fight: fight
    }
})()
*/


/*
function fail() {
    try {
        console.log('this works');
        throw new Error('oopsie');
    } catch (e) {
        console.log('error', e);
    } finally {
        console.log('still good');
        return 'returning from fail';
    }
    console.log('never going to get here'); // not reachable
}
fail();
*/

/*
Promise.resolve('asyncfail')
    .then(response => {
        console.log(response)
        throw new Error('#1 fail')
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.error('error', err.message)
    })
    .then(response => {
        console.log('hi am I still needed?', response)
        return 'done'
    })
    .catch(err => {
        console.error(err)
        return 'failed'
    })
*/

/*
(async function () {
try {
    await Promise.reject('oopsie')
} catch (err) {
    console.error(err)
}

console.log('This is still good!')
})()
*/

class authenticationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationError'
        this.message = message
    }
}
class PermissionError extends Error {
    constructor(message) {
        super(message)
        this.name = 'PermissionError'
        this.message = message
        this.favouriteSnack = 'grapes'
    }
}
class DatabaseError extends Error {
    constructor(message) {
        super(message)
        this.name = 'DatabaseError'
        this.message = message
    }
}

throw new PermissionError('A permission error')