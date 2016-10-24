import PrimeGenerator from './PrimeGenerator';
import IncrementalPrimeGenerator from './IncrementalPrimeGenerator';
import MultiplicationTable from './MultiplicationTable';
import TableStringWriter from './TableStringWriter';

let range = +process.argv[2];

if (range < 1) {
    console.log("Number of primes must be at least 1");
    process.exit(0);
}

//let generator = new PrimeGenerator(Math.pow(range, 2));
let generator = new IncrementalPrimeGenerator();
let primes = generator.take(range);

let multiplicationTable = new MultiplicationTable();
let tableData = multiplicationTable.calculateSymmetric(primes);

let writer = new TableStringWriter();
let output = writer.writeSymmetric(primes, tableData);

console.info("Prime Table with " + process.argv[2] + " primes");
console.log(output);