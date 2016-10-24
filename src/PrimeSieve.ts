export default class PrimeSieve {

    calculatePrimes(sieveSize: number) : number[] {
        
        // Initialise the sieve
        let sieve: boolean[] = [];
        for (let i = 0; i < sieveSize; i++) {
            sieve[i] = true;
        }

        // Sieve with primes up to the root of the sieve size
        let primes: number[] = [];
        let candidate = 2;
        let maxCandidate = Math.floor(Math.sqrt(sieveSize));
        for (; candidate <= maxCandidate; candidate++) {
            // If the sieve value is false, this is a composite number
            if (!sieve[candidate-1]) continue;

            // This is prime, store it and calculate its composites for the rest of the sieve
            primes.push(candidate);
            let multiple = candidate * candidate;
            while (multiple <= sieveSize) {
                sieve[multiple-1] = false;
                multiple += candidate;
            }
        }

        // Collect the remaining primes from the sieve
        for (let i = maxCandidate + 1; i < sieveSize; i++) {
            if (sieve[i-1]) {
                primes.push(i);
            }
        }

        return primes;
    }

}