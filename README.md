# primetables-typescript

## How to run

### Clone the repository

    git clone https://github.com/gimc/primetables-typescript.git

### Install

    cd primetables-typescript
    npm install

### Run tests

    npm test

(The tests take about 15 seconds on my machine, one checks generation of large primes) 
    
### Run application
I'm not familiar with how to run node applications as a command in their own right. This app can be run using npm:

    npm start <number_of_primes>
    
or node (once the ts file has been compiled by the test runner)

    node .\src\main.js <number_of_primes>

both from the root primetables-typescript directory.

`number_of_primes` is the number of primes to be generated and displayed in the multiplication table.

## What I'm pleased with
1. Simpler, more general design than previous version - the table generation and display classes are now general, not tied specifically to generating prime tables.

2. Prime generation algorithms: sieve of Eratosthenes for bounded prime calculation and an incremental version to support a 'give me n primes' query more efficiently.

3. Typescript/node implementation. I'm not familiar with Typescript (but always liked the sound of it) and I've not used the node toolchain for a while, so used this as an opportunity to learn more. It's been a while since I've been fully immersed in Javascript so I figured Typescript would be safer given my recent C# experience.

## If I had more time...
1. Improve performance of the prime generation algorithms. In particular, the incremental version may benefit from sorting the accumulated composite values in ascending order (to minimise the per-candidate search of the composite array).

2. Investigate other prime generation algorithms. I have a partially-complete segmented sieve but am out of time. Could also investigate wheel factorisation.

3. Create a nicer interface for the application. I've been reading up on Angular 2 and would have liked to used that, but that would probably have been one new thing too far!

4. The table string formatter assumes symmetry in the row/col headers (for determining the cell sizes), this should be addressed to make the code more generally applicable.

5. Code is a bit light on error checking, especially array bounds/null checking. I'm used to having contracts in C# and not sure what's available in Javascript (although a quick search has just thrown up some interesting things).