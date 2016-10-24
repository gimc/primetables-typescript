import PrimeSieve from '../src/PrimeSieve';

describe("Sieve tests", function () {

    it("Correctly generates primes in the first 10 integers", function () {
        let sieve = new PrimeSieve();
        expect(sieve.calculatePrimes(10)).toEqual([2, 3, 5, 7]);
    });

});
