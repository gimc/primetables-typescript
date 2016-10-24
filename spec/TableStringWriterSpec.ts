import TableStringWriter from '../src/TableStringWriter';

describe("Tests for formatting table data as a string.", function () {

    it("Checks that the table string representation is formatted correctly.", function () {

        let writer = new TableStringWriter();
        let rowHeadings = [2, 3, 5];
        let colHeadings = rowHeadings;
        let data = [[4, 6, 10],[6, 9, 15],[10, 15, 25]];
        let output = writer.write(rowHeadings, colHeadings, data);

        let expected = `
===============
 x|  2|  3|  5|
===============
 2|  4|  6| 10|
 3|  6|  9| 15|
 5| 10| 15| 25|
===============`;

        expect(output).toEqual(expected);

    });

    it("Checks the symmetric table interface.", function () {

        let writer = new TableStringWriter();
        let headings = [2, 3, 5];
        let data = [[4, 6, 10],[6, 9, 15],[10, 15, 25]];
        let output = writer.writeSymmetric(headings, data);

        let expected = `
===============
 x|  2|  3|  5|
===============
 2|  4|  6| 10|
 3|  6|  9| 15|
 5| 10| 15| 25|
===============`;

        expect(output).toEqual(expected);

    });

    it("Throws when 'write' is not given equal headings for rows and columns", function () {
        let writer = new TableStringWriter();
        expect(() => writer.write([1], [2], [])).toThrowError("This implementation only currently renders correctly when rowHeadings === colHeadings.");
    });

});