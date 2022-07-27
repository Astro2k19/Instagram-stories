/**
 * Class representing basic overlay
 */
export default class Overlay {

    /**
     * A type of overlay
     * @type {string}
     */
    type;

    /**
     * Additional classes for overlay
     * @type {[] - string}
     */
    classes = [];

    /**
     * Additional css slyles for overlay
     * @type {Object<string, string>>}
     */
    styles = {};

    /**
     * Create an instance of overlay
     * @param {{
     *     type: string,
     *     classes?: string[],
     *     styles?: {Object<string, string>>}
     * }} [params] - overlay options
     */

    constructor(params) {
        this.type = params?.type;

        if (typeof this.type != 'string') {
            throw new TypeError('Type of overlay shoud be sprecified');
        }

        this.classes = params?.classes ?? this.classes;

        if (!Array.isArray(this.classes)) {
            throw new TypeError('Additional classes should be defined only as array');
        }

        this.styles = params?.styles ?? this.styles;

        if (typeof this.styles != 'object') {
            throw new TypeError('Additional styles should be defined only as object');
        }

    }

    render() {
        const classes = this.classes.join('');

        const styles = Object.entries(this.styles)
            .map(el => el.join(':'))
            .join(';');

        const elem = document.createElement('div');
        elem.innerHTML = `<div class="custom-chunk ${classes}" style="${styles}"></div>`;

        return elem.children[0];
    }

}