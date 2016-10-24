import * as console from 'console';
import IncrementalPrimeGenerator from '../src/IncrementalPrimeGenerator';

describe("Prime Generator tests", function () {

    it("Should return 2 as first prime", function () {
        let generator = new IncrementalPrimeGenerator();
        expect(generator.next()).toEqual(2);
    });

    it("Should return 2 and 3 as first two primes", function () {
        let generator = new IncrementalPrimeGenerator();
        let primeList: number[] =  [];
        
        primeList.push(generator.next());
        primeList.push(generator.next());

        expect(primeList).toEqual([2,3]);
    });

    it("Tests multiple 'take's", function () {

        let generator = new IncrementalPrimeGenerator();
        let primes = generator.take(3);
        expect(primes).toEqual([2, 3, 5]);

        let nextPrimes = generator.take(3);
        expect(nextPrimes).toEqual([7, 11, 13]); 
    });

    it("Millionth prime (also, shouldn't take longer than the lifetime of the universe)", function () {
        let generator = new IncrementalPrimeGenerator();
        let prime: number;
        for (let i = 0; i < Math.pow(10, 6); i++) {
            prime = generator.next();
        }
        expect(prime).toEqual(15485863);
    });

});