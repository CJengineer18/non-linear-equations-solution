/*
 *  Algoritmo de Bisección
 *  Autor: Cristian Jiménez
 */

const makeRow = (k, a, b, c, fa, fb, fc, ea) => {
    addRow([k, a, c, b, fa, fc, fb, ea]);
};

const bisection = (f, a, b, c, k, rk1, eai, trunc) => {
    const isNotTrunc = trunc === false;

    let r = c(a, b, f);

    r = !isNotTrunc ? Math.round10(r, -trunc) : r;

    const fa = !isNotTrunc ? Math.round10(f(a), -trunc) : f(a),
        fb = !isNotTrunc ? Math.round10(f(b), -trunc) : f(b),
        fr = !isNotTrunc ? Math.round10(f(r), -trunc) : f(r),
        ea = Math.abs(!isNotTrunc ? Math.round10(r - rk1, -trunc) : r - rk1);

    makeRow(k, a, b, r, fa, fb, fr, k === 0 ? '' : ea);

    if (fr === 0 || ea <= eai) {
        closeResults();
        return r;
    } else if (fa * fr < 0) {
        k++;
        r = bisection(f, a, r, c, k, r, eai, trunc);
    } else if (fr * fb < 0) {
        k++;
        r = bisection(f, r, b, c, k, r, eai, trunc);
    }

    return r;
};

const middle = (a, b) => {
    return (a + b) / 2;
};

const fakeRule = (a, b, f) => {
    const fa = f(a),
        fb = f(b);

    return (a * fb - b * fa) / (fb - fa);
};

const calculate = (f, ai, bi, eai, containerId, fake, trunc = false) => {
    const c = fake ? fakeRule : middle;

    initializeTable(
        [
            'k',
            'a<sub>k</sub>',
            'c<sub>k</sub>',
            'b<sub>k</sub>',
            'f(a<sub>k</sub>)',
            'f(c<sub>k</sub>)',
            'f(b<sub>k</sub>)',
            'E<sub>A</sub> = |c<sub>k</sub> - c<sub>k - 1</sub>|'
        ],
        containerId
    );

    bisection(f, ai, bi, c, 0, 0, eai, trunc);
};
