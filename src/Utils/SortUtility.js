
/**
 * @name multisort
 * @desc sorts the user list in ascending or decending according to object keys.
 * @param {array} [arr] Source array
 * @param {array} [columns] List of columns to sort
 * @param {array} [order_by] List of directions (ASC, DESC)
 * @returns {array}
 */
export const multisort = (arr = [], columns = [], order_by=[]) => {
    if (typeof columns === 'undefined') {
        columns = [];
        for (let x = 0; x < arr[0].length; x++) {
            columns.push(x);
        }
    }

    if (typeof order_by === 'undefined') {
        order_by = [];
        for (let x = 0; x < arr[0].length; x++) {
            order_by.push('ASC');
        }
    }

    function multisort_recursive(a , b, cols = [], orderBy = [], index) {
        const direction = orderBy[index] === 'DESC' ? 1 : 0;
        const is_numeric = !isNaN(+a[cols[index]] - +b[cols[index]]);
        const x = is_numeric ? +a[cols[index]] : a[cols[index]].toLowerCase();
        const y = is_numeric ? +b[cols[index]] : b[cols[index]].toLowerCase();

        if (x < y) {
            return direction === 0 ? -1 : 1;
        }
        if (x === y) {
            return cols.length - 1 > index ? multisort_recursive(a, b, cols, orderBy, index + 1) : 0;
        }
        return direction === 0 ? 1 : -1;
    }

    return arr.sort(function (a, b) {
        return multisort_recursive(a, b, columns, order_by, 0);
    });

};