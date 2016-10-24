import PrimeSieve from './PrimeSieve';

/**
 * Simple generator that could be sufficient when there is a bound on the maximum prime number to be generated.
 * 
 */
export default class PrimeGenerator {

    index: number;
    primes: number[];
    upperPrimeBound: number;

    constructor(upperPrimeBound: number) {
        this.index = 0;
        this.upperPrimeBound = upperPrimeBound;
    }

    /**
     * Returns null if there are no more primes in the list
     */
    next() : number {

        // Initialise the list
        if (this.index == 0) {
            var sieve = new PrimeSieve();
            this.primes = sieve.calculatePrimes(this.upperPrimeBound);
        }

        // Have reached the end of our prime list
        if (this.index >= this.primes.length) {
            return null;
        }

        ++this.index;

        return this.primes[this.index-1];
    }

}