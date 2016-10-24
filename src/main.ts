import PrimeGenerator from './PrimeGenerator';
import IncrementalPrimeGenerator from './IncrementalPrimeGenerator';
import MultiplicationTable from './MultiplicationTable';
import TableStringWriter from './TableStringWriter';

// Get range from command line
if (process.argv[2] == null) {
    console.log("Please provide a number of primes greater than zero")
    process.exit(0);
}

let range = +process.argv[2];

// Check not less than 1 and is a valid number
if (range < 1 || isNaN(range)) {
    console.log("Number of primes must be a number greater than zero");
    process.exit(0);
}

console.info("Prime Table with " + range + " primes");

// Create some primes using the incremental method
let generator = new IncrementalPrimeGenerator();
let primes = generator.take(range);

// Create the multiplication matrix
let multiplicationTable = new MultiplicationTable();
let tableData = multiplicationTable.calculateSymmetric(primes);

// Write out the matrix with the prime values as row/col headers
let writer = new TableStringWriter();
let output = writer.writeSymmetric(primes, tableData);
console.log(output);