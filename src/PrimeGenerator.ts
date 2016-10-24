export default class PrimeGenerator {

    index: number;

    constructor() {
        this.index = 0;
    }

    next() : number {
        ++this.index;

        if (this.index === 1) {
            return 2;
        }

        return null;
    }

}