import Overlay from "./Overlay";

export class Text extends Overlay {

    /**
     * A content of text overlay
     * @type {string}
     */
    text;

    constructor(params) {
        super(params);
        this.text = params?.text;

        if(typeof this.text != 'string') {
            throw new TypeError('A text to the created overlay is not specified');
        }
    }

    render() {
        const elem = super.render();

        const textElem = document.createElement('span');
        textElem.textContent = this.text;

        elem.append(textElem);
        return elem;
    }

}