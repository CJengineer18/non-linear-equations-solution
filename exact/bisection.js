/*
 *  Algoritmo de Bisección
 *  Autor: Cristian Jiménez
 */

const makeRow = (k, a, b, c, fa, fb, fc, ea) => {
    addRow([k, a, c, b, fa, fc, fb, ea]);
};

const biseccion = (f, a, b, c, k, rk1, eai) => {
    let r = c(a, b, f);

    const fa = f(a),
        fb = f(b),
        fr = f(r),
        ea = Math.abs(r - rk1);

    makeRow(k, a, b, r, fa, fb, fr, k === 0 ? '' : ea);

    if (fr === 0 || ea <= eai) {
        closeResults();
        return r;
    } else if (fa * fr < 0) {
        k++;
        r = biseccion(f, a, r, c, k, r, eai);
    } else if (fr * fb < 0) {
        k++;
        r = biseccion(f, r, b, c, k, r, eai);
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

const calculate = (f, ai, bi, eai, containerId, fake) => {
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

    biseccion(f, ai, bi, c, 0, 0, eai);
};
