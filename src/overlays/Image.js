import Overlay from "./Overlay";

export class Image extends Overlay {
    /**
     * src of image overlay
     */

    src;

    /**
     * Alternative text of image
     * @type {string}
     */
    alt = '';

    constructor(params) {
        super(params);
        this.src = params?.src;

        if(typeof this.src != 'string') {
            throw new TypeError('URL to the created image overlay is not specified');
        }

        this.alt = params?.src ?? this.alt;
    }

    render() {
        const elem = super.render();

        elem.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;

        return elem;
    }
}