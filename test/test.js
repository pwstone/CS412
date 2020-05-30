// const assert = require('chai').assert;
// const inOrder = require('../ps1.p1')

const {describe, it} = require('mocha');
const {expect} = require('chai');

const inOrder = require('../ps1.p1');
const findOperator = require('../ps1.p2');
const problemThree = require('../ps1.p3');

describe('Testing part 1', () => {
    // test 1
    it('should return aaacccdeefgiiiiiiillloopprrssstuux', function() {
        let ps1test1 = inOrder('supercalifragilisticexpialidocious');
        expect(ps1test1).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });

    // test 2
    it('should return aelprtxzz', function () {
        let ps1test2 = inOrder('xzazret!lp.?673');
        expect(ps1test2).to.be.equal('aelprtxzz');
    });

    // test 3
    it('should return abcdefghijklmnopqrstuvwxyz', function () {
        let ps1test2 = inOrder('1234567890?.,!zyxwvutsrqponmlkjihgfedcba');
        expect(ps1test2).to.be.equal('abcdefghijklmnopqrstuvwxyz');
    });
})

describe('Testing part 2', () => {
    // test 1
    it('should return 35', function () {
        let ps2test1 = findOperator('5*7')();
        expect(ps2test1).to.be.equal(35);
    });

    // test 2
    it('should return 0', function () {
        let ps2test1 = findOperator('9%3')();
        expect(ps2test1).to.be.equal(0);
    });

    // test 3
    it('should return 10', function () {
        let ps2test1 = findOperator('8+2')();
        expect(ps2test1).to.be.equal(10);
    });
})


describe('Testing part 3', function() {
    // test 1
     describe('splitOnC', function () {
         it('returns ab cd cf with input: abcdcf', function () {
             const ps3test1 = problemThree('abcdcf', (input) => {
                 return input.split(/(?=c)/g);
             });
             expect(ps3test1[0]).to.be.equal('ab');
             expect(ps3test1[1]).to.be.equal('cd');
             expect(ps3test1[2]).to.be.equal('cf');
         });
     });
     // test 2
     describe('capitilizeA', function () {
         it('returns object with input: banana', function () {
             const ps3test2 = problemThree('banana', (input) => {
                 stringObject = {
                     originalString: input,
                     modifiedString: input.replace(/a/g, 'A'),
                     numberReplaced: input.split('a').length - 1,
                     length: input.length
                 }
                 return stringObject;
             });
             expect(ps3test2.originalString).to.be.equal('banana');
             expect(ps3test2.modifiedString).to.be.equal('bAnAnA');
             expect(ps3test2.numberReplaced).to.be.equal(3);
             expect(ps3test2.length).to.be.equal(6);
         })
     })
    // test 3
    describe('splitOnC', function () {
        it('returns \'\' with input: (empty string)', function () {
            const ps3test1 = problemThree('', (input) => {
                return input.split(/(?=c)/g);
            });
            expect(ps3test1[0]).to.be.equal('');
        });
    });
});

