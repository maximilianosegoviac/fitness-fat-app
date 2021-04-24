import pectorales from '../assets/img/pectorales.jpg'
//ejercicios
import pressB from '../assets/img/pectorales/press_banca.jpeg'
import pressB_inclinada from '../assets/img/pectorales/press_banca_inclinada.jpeg'
import pressB_declinado from '../assets/img/pectorales/press_banca_declinado.jpeg'
import pullover from '../assets/img/pectorales/pullover.jpg'

/* --- */
import triceps from '../assets/img/triceps.jpg'
//ejercicios
import extencion_apoyo from '../assets/img/triceps/extenciones_apoyo.webp'
import crossface from '../assets/img/triceps/crossface.png'
import patadas_traceras from '../assets/img/triceps/patadas_traceras.jpg'
import extenciones_polea from '../assets/img/triceps/extenciones_polea.jpg'

/* --- */
import biceps from '../assets/img/biceps.jpg'
//ejercicios
import predicador_barra from '../assets/img/biceps/predicador_barra.jpg'
import curl_mancuerna from '../assets/img/biceps/curl_mancuerna.jpg'
import curl_martillo from '../assets/img/biceps/curl_martillo.png'
import curl_barra from '../assets/img/biceps/curl_barra.jpg'
/* --- */
import espalda from '../assets/img/espalda.jpg'
//ejercicios
import polea_nuca from '../assets/img/espalda/polea_nuca.jpg'
import polea_pecho from '../assets/img/espalda/polea_pecho.png'
import remo from '../assets/img/espalda/remo.jpg'
import remo_inclinado from '../assets/img/espalda/remo_inclinado.jpg'
 
export const rutinas = [
    {
        id: 1,
        img: pectorales,
        title: 'Pectorales',
        description: 'Rutina para aumentar Pectorales',
        time: 20,
        colorText: '#ffff',
        exercises: [
            { 
                id: 1,
                title: 'Press de banca',
                series: 4,
                repetitions: 10,
                img: pressB,
                time: 5
            },
            {
                id: 2,
                title: 'Press de banca inclinada',
                series: 4,
                repetitions: 10,
                img: pressB_inclinada,
                time: 5
            },
            {
                id: 3,
                title: 'Press de banca declinado',
                series: 4,
                repetitions: 10,
                img: pressB_declinado,
                time: 5
            },
            {
                id: 4,
                title: 'Pullover',
                series: 3,
                repetitions: 10,
                img: pullover,
                time: 5
            },

        ]
    },
    {
        id: 2,
        img: triceps,
        title: 'Triceps',
        description: 'Rutina para aumentar masa muscular en tricep',
        time: 11,
        colorText: '#ffff',
        exercises: [
            { 
                id: 1,
                title: 'Extenciones con apoyo',
                series: 3,
                repetitions: 10,
                img: extencion_apoyo,
                time: 3
            },
            { 
                id: 2,
                title: 'Crossface',
                series: 3,
                repetitions: 10,
                img: crossface,
                time: 2
            },
            { 
                id: 3,
                title: 'Patadas traseras',
                series: 3,
                repetitions: 10,
                img: patadas_traceras,
                time: 3
            },
            { 
                id: 4,
                title: 'Extenciones de polea',
                series: 3,
                repetitions: 10,
                img: extenciones_polea,
                time: 3
            },

        ]
    },
    {
        id: 3,
        img: biceps,
        title: 'Biceps',
        description: 'Rutina para aumentar masa muscular en bicep',
        time: 9,
        colorText: '#ffff',
        exercises: [
            { 
                id: 1,
                title: 'Predicador con barra',
                series: 3,
                repetitions: 10,
                img: predicador_barra,
                time: 3
            },
            { 
                id: 2,
                title: 'Curl concentración con mancuerna',
                series: 3,
                repetitions: 10,
                img: curl_mancuerna,
                time: 2
            },
            { 
                id: 3,
                title: 'Curl en martillo',
                series: 3,
                repetitions: 10,
                img: curl_martillo,
                time: 2
            },
            { 
                id: 4,
                title: 'Curl con barra',
                series: 3,
                repetitions: 10,
                img: curl_barra,
                time: 2
            },
            

        ]
    },
    {
        id: 4,
        img: espalda,
        title: 'Espalda',
        description: 'Rutina para aumentar masa muscular en la Espalda',
        time: 16,
        colorText: '#ffff',
        exercises: [
            { 
                id: 1,
                title: 'Polea tras la nuca',
                series: 3,
                repetitions: 10,
                img: polea_nuca,
                time: 3
            },
            { 
                id: 2,
                title: 'Polea al pecho',
                series: 3,
                repetitions: 10,
                img: polea_pecho,
                time: 3
            },
            { 
                id: 3,
                title: 'Remo',
                series: 3,
                repetitions: 10,
                img: remo,
                time: 5
            },
            { 
                id: 4,
                title: 'Remo Inclinado',
                series: 3,
                repetitions: 10,
                img: remo_inclinado,
                time: 5
            },
            

        ]
    },
]