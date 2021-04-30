export const collect = `
console.log('começou a coleta');
var tempoCaixa= 0;
var caixa = setInterval(() => {
    try {
        document.querySelector('.tw-button').click();
        tempoCaixa =0;
    } catch (e) {
        tempoCaixa++;
    }
}, 60000);`;
