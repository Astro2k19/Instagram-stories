import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import './styles/app.scss';
import {Player} from './Player';

new Player({
    target: '.root',
    delayPerSlide: 2,

    slides: [
        {
            url: slide1,
            alt:'first slide',
            filters: ['blur(5px)' ],
            overlays:[
                {
                    type: 'Text',
                    text: 'Test text',
                    classes: ['watermark'],

                    styles: {
                        color: 'black',
                        'font-size': '50px',
                        top: '50%',
                        transform:'translate(-50%, -50%)',
                        left: '50%',
                        'text-decoration': 'underline',
                        'text-shadow': '1px 1px #0000'
                    }
                },
                {
                    type: 'Question',
                    question: 'How you doinf?',
                    answers:[
                        'Ok',
                        'Not'
                    ],

                    styles: {
                        color: 'black',
                        'font-size': '50px',
                        top: '20%',
                        left: '15%',
                        background:'burlywood',
                        'text-shadow': '1px 1px #0000'
                    }
                },
            ]
        },
        {
            url: slide2,
            alt:'second slide',
            overlays: [
                {
                    type: 'Text',
                    text: 'Test text2',

                    styles: {
                        color: 'red',
                        'font-size': '50px',
                        top: '50%',
                        left: '15%',
                        'font-weight':'bold',
                        'text-shadow': '1px 1px #0000'
                    }
                },
                {
                    type: 'Image',
                    src: slide1,

                    styles: {
                        width: '150px',
                        height: '150px',
                        'object-fit': 'cover',
                        top: '15%',
                        left: '15%'
                    }
                }

            ]
        },
        {
            url: slide1,
            alt:'second slide',
            overlays:[
                {
                    type: 'Question',
                    question: 'How you doinf?',
                    answers:[
                        'Ok',
                        'Not'
                    ],

                    styles: {
                        color: 'black',
                        'font-size': '50px',
                        top: '20%',
                        left: '15%',
                        background:'burlywood',
                        'text-shadow': '1px 1px #0000'
                    }
                },
            ]
        },
        {
            url: slide2,
            alt:'first slide'
        },
        {
            url: slide1,
            alt:'second slide'
        },
    ],
});

