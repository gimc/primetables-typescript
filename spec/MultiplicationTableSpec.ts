import MultiplicationTable from '../src/MultiplicationTable';

describe("MultiplicationTable tests", function () {

    it("Checks that the data table is correctly calculated", function () {

        let table = new MultiplicationTable();

        // The table produced by multiplying first three primes together
        let expected: number[][] = [[4, 6, 10],[6, 9, 15],[10, 15, 25]];

        expect(table.calculate([2, 3, 5], [2, 3, 5])).toEqual(expected);
    });

});