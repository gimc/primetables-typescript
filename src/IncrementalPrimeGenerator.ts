import { runInThisContext } from 'vm';
import * as console from 'console';
import PrimeSieve from './PrimeSieve';

export default class IncrementalPrimeGenerator {

    candidate: number;
    primes: number[];
    composites: number[];

    constructor() {
        this.candidate = 1;
        this.primes = [2, 3];
        this.composites = [4, 9];
    }

    next() : number {
        this.candidate++;

        if (this.candidate === 2 || this.candidate == 3) {
            return this.candidate;
        }

        let isPrime = false;
        while (!isPrime) {
            // Inspect each of the composite values for all primes up to the root of the candidate
            let maxPrime = Math.floor(Math.sqrt(this.candidate));
            isPrime = true;
            let i = 0;
            while (i < this.primes.length && this.primes[i] <= maxPrime) {
                // If the candidate matches one of the composite values, it's not prime
                if (this.composites[i] === this.candidate) {
                    isPrime = false;
                    // Move the composite value to the next multiple
                    this.composites[i] += this.primes[i];
                }

                // Note we don't break out when a non-prime value is discovered, there may be multiple matching composites and they all must be updated
                i++;
            }

            if (!isPrime) {
                this.candidate++;
            }
        }

        // We have evaluated all the composites and not found the candidate value, so it is prime
        this.primes.push(this.candidate);
        this.composites.push(this.candidate * this.candidate);
        return this.candidate;
    }

    take(amountToTake: number) : number[] {
        let values: number[] = [];
        
        for (let i = 0; i < amountToTake; i++) {
            values.push(this.next());
        }

        return values;
    }

}