/// <reference path="../typings/globals/jasmine/index.d.ts" />
import PrimeGenerator from '../src/PrimeGenerator';

describe("Prime Generator tests", function () {

    it("Should return 2 as first prime", function () {
        let generator = new PrimeGenerator(100);
        expect(generator.next()).toEqual(2);
    });

    it("Should return 2 and 3 as first two primes", function () {
        let generator = new PrimeGenerator(100);
        let primeList: number[] =  [];
        
        primeList.push(generator.next());
        primeList.push(generator.next());

        expect(primeList).toEqual([2,3]);
    });

    it("Tests multiple 'take's", function () {

        let generator = new PrimeGenerator(100);
        let primes = generator.take(3);
        expect(primes).toEqual([2, 3, 5]);

        let nextPrimes = generator.take(3);
        expect(nextPrimes).toEqual([7, 11, 13]); 
    });

});