/**
 * Takes two lists of numbers and creates a multiplication table from them (i.e. a matrix)
 */
export default class MultiplicationTable {

    calculate(rows: number[], cols: number[]) : number[][] {

        let cells = this.initialiseTable(rows.length, cols.length);

        // Compute the matrix
        for (let row = 0; row < rows.length; row++) {
            for (let col = 0; col < cols.length; col++) {
                cells[row][col] = rows[row] * cols[col];
            }
        }

        return cells;
    }

    private initialiseTable(numRows: number, numCols: number) : number[][] {
        
        let cells: number[][] = [];

        // Create table 
        for (let row: number = 0; row < numRows; row++) {
            cells[row] = [];
            for (let col: number = 0; col < numCols; col++) {
                cells[row][col] = 0;
            }
        }

        return cells;
    }

}