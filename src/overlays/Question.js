import Overlay from "./Overlay";

export class Question extends Overlay {
    /**
     *
     * @type {string}
     */
    question;

    /**
     * Varians of answers
     * @type {string[]}
     */
    variants = ['Yes', 'No'];

    constructor(params) {
        super(params);

        this.question = params?.question;

        if(typeof this.question != 'string') {
            throw new ReferenceError('A question text to the created overlay should be sprecidied');
        }

        this.variants = params?.variants ?? this.variants;

        if(this.variants.length === 0) {
            throw new Error('There is should be al least one variant of the answer');
        }
    }

    /** @override*/
    render() {
        const elem = super.render();

        elem.innerHTML = `<div class="question-overlay">
                            <p class="question-overlay__title">${this.question}</p>
                                <div class="question-overlay__inner">
                                    ${this.variants.map((label, index) => `<button value="${index}" class="answer">${label}</button>`).join('')}
                                </div>
                         </div>`;

        return elem;
    }
}