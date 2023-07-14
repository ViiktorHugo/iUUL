

const { DateTime } = require('luxon');


/**
 * Formata data
 * 
 * @params data
 * @returns data no modelo dd/MM/yyyy
 */
function formataData (data) {
    let dataFormatada = DateTime.fromFormat(data, 'dd/MM/yyyy', { locale: 'pt-BR' })
    let dataFinal = dataFormatada.toLocaleString(DateTime.DATE_SHORT)

    return (dataFinal);
}

/**
 * Formata horario
 * 
 * @params horario
 * @returns horario no modelo HH:mm
 */
function formataHorario(horario) {
    let hora = horario.substring(0, 2);
    let minuto = horario.substring(2,4);

    let horario2 = DateTime.fromFormat(`${hora}:${minuto}`, 'HH:mm', { locale: 'pt-BR' });

    let horarioFinal = horario2.toFormat(DateTime.TIME_24_SIMPLE);

    return (horarioFinal);
}

module.exports = { 
    formataData, formataHorario 
};