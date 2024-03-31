
import kasandraIMG from '../img/kasandra.png';
import lab2 from '../img/lab2.png';
import lab3 from '../img/lab3.png';
import lab4 from '../img/lab4.png';
import lab5 from '../img/lab5.png';
import lab6 from '../img/lab6.png';
import lab7 from '../img/lab7.png';
import lab8 from '../img/lab8.png';
import lab9 from '../img/lab9.png';
import lab10 from '../img/lab10.png';
import lab11 from '../img/lab11.png';
import lab12 from '../img/lab12.png';
import lab13 from '../img/lab13.png';
import lab14 from '../img/lab14.png';

// export const API_URL = "http://127.0.0.1:8000"
export const API_URL = "https://backend1-production-9b7e.up.railway.app"

export const MENU = [
    {
        name:"Главная",
        link: "/"
    },
    {
        name:"Автоматизированные обучающие системы",
        link: "sims-page"
    },
    {
        name:"Преподователям",
        link: "proffesors"
    },
    {
        name:"Обучающимся",
        link: "student"
    },
];


export const EXPANDLISTLABS = {
    "Электронные учебные пособия": [
        {
            name:"Локатор нелинейных переходов NR2000",
            link:"NR2000"
        },
        {
            name:"Анализаторы проводных линий",
            link:"linanalyz"
        }
    ],

    "Обучающие программы": [
        {
            name:"Обнаружители видеокамер",
            link:"videtect"
        }
    ],

    "Программные тренажеры": [
        {
            name:"КАССАНДРА - комплекс радиомониторинга и анализа сигналов серии",
            link:"kasandra"
        }
    ],

    "Тренажеры": [
        {
            name:"Устройство поиска жучков",
            link:"bugsearch"
        }
    ],

}


export const IMAGES = [
    {
        id: 1,
        imgURL: kasandraIMG,
        imgAlt: "kasandra",
        name: "КАССАНДРА - комплекс радиомониторинга и анализа сигналов серии",
        descption: "Касандра",
    },
    {
        id: 2,
        imgURL: lab2,
        imgAlt: "lab2",
        name: "Название 2",
        descption: "Описание 2",
    },
    {
        id: 3,
        imgURL: lab3,
        imgAlt: "lab3",
        name: "Название 3",
        descption: "Описание 3",
    },
    {
        id: 4,
        imgURL: lab4,
        imgAlt: "lab4",
        name: "Название 4",
        descption: "Описание 4",
    },
    {
        id: 5,
        imgURL: lab5,
        imgAlt: "lab5",
        name: "Название 5",
        descption: "Описание 5",
    },
    {
        id: 6,
        imgURL: lab6,
        imgAlt: "lab6",
        name: "Название 6",
        descption: "Описание 6",
    },
    {
        id: 7,
        imgURL: lab7,
        imgAlt: "lab7",
        name: "Название 7",
        descption: "Описание 7",
    },
    {
        id: 8,
        imgURL: lab8,
        imgAlt: "lab8",
        name: "Название 8",
        descption: "Описание 8",
    },
    {
        id: 9,
        imgURL: lab9,
        imgAlt: "lab9",
        name: "Название 9",
        descption: "Описание 9",
    },
    {
        id: 10,
        imgURL: lab10,
        imgAlt: "lab10",
        name: "Название 10",
        descption: "Описание 10",
    },
    {
        id: 11,
        imgURL: lab11,
        imgAlt: "lab11",
        name: "Название 11",
        descption: "Описание 11",
    },
    {
        id: 12,
        imgURL: lab12,
        imgAlt: "lab12",
        name: "Название 12",
        descption: "Описание 12",
    },
    {
        id: 13,
        imgURL: lab13,
        imgAlt: "lab13",
        name: "Название 13",
        descption: "Описание 13",
    },
    {
        id: 14,
        imgURL: lab14,
        imgAlt: "lab14",
        name: "Название 14",
        descption: "Описание 14",
    },

];


export const TABLINKS = [
    {
        name:"Программное обеспечение",
        link:"programa"
    },
    {
        name:"Методическое обеспечение",
        link:"about"
    },
    {
        name:"Справка",
        link:"info"
    },
]
