export default class Switcher {
    constructor(root) {
        if (!(root instanceof Element)) {
            throw new Error('The root element should be instance of Element');
        }

        this.root = root;
    }

    moveClass(activeClassName, method, pred) {
        const active = this.root.querySelector(`.${activeClassName}`),
            next = active[method];

        if (pred && pred(active)) {
            return null;
        }

        if (next) {
            active.classList.remove(activeClassName);
            next.classList.add(activeClassName);


            return active;
        }

        return null;
    }



    switchToNextSlide() {
        this.moveClass('player__content-chunk_active', 'nextElementSibling');
        const elem = this.moveClass('player__timeline-chunk_active', 'nextElementSibling');

        if (elem) {
            elem.querySelector('.player__timeline-chunk__inner').style.width = '';
        }
    };

    switchToPrevSlide() {
        const prev = this.moveClass('player__timeline-chunk_active', 'previousElementSibling', (element) => {
            const inner = element.querySelector('.player__timeline-chunk__inner');
            const width = parseFloat(inner.style.width) || 0;
            inner.style.width = '';

            return width < 20;
        });

        if (prev) {
            this.moveClass('player__content-chunk_active', 'previousElementSibling');
        }
    };

    autoToggleSlide(time, step) {
        return setInterval(() => {
            const active = this.root.querySelector('.player__timeline-chunk_active')
                .querySelector('.player__timeline-chunk__inner');

            let width = parseFloat(active.style.width) || 0;

            if (width === 100) {
                this.switchToNextSlide()
                return;
            }

            active.style.width = `${width + step}%`;

        }, time * 1000 * step / 100);
    };
}