module.exports = Array.prototype.mySort = function () {

    let hasChanged = true;

    while (hasChanged) {

        hasChanged = false;

        for (let iterator = 0; iterator < this.length - 1; iterator++) {
            const actual = this[iterator];
            const next = this[iterator + 1];

            if (actual < next) {
                this[iterator] = next;
                this[iterator + 1] = actual;
                hasChanged = true;
            }

            if (iterator === this.length - 2 && !hasChanged) {
                hasChanged = false;
            }
        }
    }
}
