/*
 *  Algoritmo de Punto Fijo
 *  Autor: Cristian Jiménez
 */
const makeRow = (k, xk, f, ea) => {
    addRow([k, xk, f, ea]);
};

const calculate = (x0, f, g, eai, containerId) => {
    initializeTable(
        [
            'k',
            'x<sub>k</sub>',
            '|f(x<sub>k</sub>)|',
            'E<sub>A</sub> = |x<sub>k</sub> - x<sub>k - 1</sub>|'
        ],
        containerId
    );

    fixedPoint(x0, f, g, eai);
};

const fixedPoint = (x0, f, g, eai = 0) => {
    let xk1 = x0,
        xk = -1,
        k = 1,
        ea = 999;

    if (isNaN(eai)) {
        eai = 0;
    }

    while (ea > eai) {
        xk = g(xk1);
        ea = Math.abs(xk - xk1);
        makeRow(k, xk, Math.abs(f(xk)), ea);
        k++;
        xk1 = xk;
    }
    closeResults();
};
