

const { DateTime } = require('luxon');

class Utils {

    /**
    * @description Formata a entrada da string como uma data valida
    * @params data
    * @returns data no modelo dd/MM/yyyy
    */
    formataData(data){
        let dataFormatada = DateTime.fromFormat(data, 'dd/MM/yyyy', { locale: 'pt-BR' })

        return (dataFormatada.toLocaleString(DateTime.DATE_SHORT));
    }

    /**
     * @description Formata a entrada da string como um horario valido
     * @params horario
     * @returns horario no modelo HH:mm
     */
    formataHorario(horario) {
        let hora = horario.substring(0, 2);
        let minuto = horario.substring(2,4);

        let horarioFormatado = DateTime.fromFormat(`${hora}:${minuto}`, 'HH:mm', { locale: 'pt-BR' });

        return (horarioFormatado.toLocaleString(DateTime.TIME_24_SIMPLE));
    }
}

module.exports = Utils;