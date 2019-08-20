/*
 *  Algoritmo de Punto Fijo
 *  Autor: Cristian Jiménez
 */
const makeRow = (k, xk, f, ea) => {
    addRow([k, xk, f, ea]);
};

const calculate = (x0, f, g, eai, containerId, trunc = false) => {
    initializeTable(
        [
            'k',
            'x<sub>k</sub>',
            '|f(x<sub>k</sub>)|',
            'E<sub>A</sub> = |x<sub>k</sub> - x<sub>k - 1</sub>|'
        ],
        containerId
    );

    fixedPoint(x0, f, g, trunc, eai);
};

const fixedPoint = (x0, f, g, trunc, eai = 0) => {
    let xk1 = x0,
        xk = -1,
        k = 1,
        ea = 999;

    const isNotTrunc = trunc === false;

    if (isNaN(eai)) {
        eai = 0;
    }

    while (ea > eai) {
        xk = !isNotTrunc ? Math.round10(g(xk1), -trunc) : g(xk1);
        ea = Math.abs(!isNotTrunc ? Math.round10(xk - xk1, -trunc) : xk - xk1);
        makeRow(
            k,
            xk,
            Math.abs(!isNotTrunc ? Math.round10(f(xk), -trunc) : f(xk)),
            ea
        );
        k++;
        xk1 = xk;
    }
    closeResults();
};
