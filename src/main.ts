import PrimeGenerator from './PrimeGenerator';
import MultiplicationTable from './MultiplicationTable';
import TableStringWriter from './TableStringWriter';

console.info(process.argv[2]);

let range = +process.argv[2];

let generator = new PrimeGenerator(Math.pow(range, 2));
let primes = [];
for (let i = 0; i < range; i++) {
    primes.push(generator.next());
}

let multiplicationTable = new MultiplicationTable();
let tableData = multiplicationTable.calculateSymmetric(primes);

let writer = new TableStringWriter();
let output = writer.writeSymmetric(primes, tableData);

console.log(output);