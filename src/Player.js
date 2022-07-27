import * as overlays from './overlays/index';
import Switcher from "./Switcher";

/**
 *
 * @param {{
 *     target: string,
 *     slides: Array<{url: string, alt?: string}>>,
 *     delay: number
 * }} params - initialization arguments
 * 1. target - place for initialization player, css class
 * 2. slides - List of player's slides
 * 3. delay - Delay for automate switching slides
 *
 * @return {Element|null}
 */

export class Player {
    /**
     *
     * @type {number}
     */
    delayPerSlide = 2;

    constructor(params) {
        this.target = document.querySelector(params?.target);

        if (this.target == null) {
            throw new Error('Player target is not sprecified');
        }
        this.slides = params?.slides;

        if (!Array.isArray(this.slides)) {
            throw new Error('Player slides should be in array');
        }

        this.delayPerSlide = params?.delayPerSlide ?? this.delayPerSlide;
        this.switcher = new Switcher(this.target);

        this.init();
    }

    /**
     *
     */
    init() {
        this.target.append(this.renderPlayerLayout());
        this.target.querySelector('.player__content-switcher--prev').addEventListener('click', this.switcher.switchToPrevSlide.bind(this.switcher));
        this.target.querySelector('.player__content-switcher--next').addEventListener('click', this.switcher.switchToNextSlide.bind(this.switcher));
        // this.autoToggle = this.switcher.autoToggleSlide(this.delayPerSlide , 1);

        this.target.addEventListener('mousedown', () => clearInterval(this.autoToggle));
        this.target.addEventListener('mouseup', () => {
            this.autoToggle = this.switcher.autoToggleSlide(this.delayPerSlide , 1);
        });
    }

    generateTimelineChunk() {
        const wrapper = document.createDocumentFragment();

        for (const index of this.slides.keys()) {
            const el = document.createElement('div');
            el.innerHTML = `<div class="player__timeline-chunk ${index === 0 ? 'player__timeline-chunk_active' : ''}">
                                <div class="player__timeline-chunk__inner"></div>
                            </div>`;

            wrapper.append(el.children[0]);
        }

        return wrapper;
    }

    generateContentChunk() {
        const wrapper = document.createDocumentFragment();

        for (const [index, slide] of this.slides.entries()) {
            let filter = '';

            if (slide.filters !== undefined) {
                filter = `style="filter: ${slide.filters.join(' ')}"`;
            }

            const el = document.createElement('div');
            el.innerHTML = `<div class="player__content-chunk ${index === 0 ? 'player__content-chunk_active' : ''}">
                                <img src="${slide.url}" alt="${slide.alt || ''}" class="player__content-image" ${filter}>
                            </div>`;

            const chunk = el.children[0];

            chunk.append(this.renderOverlays(slide));

            wrapper.append(chunk);
        }

        return wrapper;
    }

    /**
     *
     * @param slide
     * @returns {DocumentFragment}
     */

    renderOverlays(slide) {

        const wrapper = document.createDocumentFragment();

        if (slide.overlays == null) {
            return wrapper;
        }

        for (const params of slide.overlays) {
            if(!(params.type in overlays)) {
                throw new Error(`The specified type of overlay ${params.type} is not defined`);
            }

            const overlay = new overlays[params.type.charAt(0).toUpperCase() + params.type.slice(1)](params);

            wrapper.append(overlay.render());
        }

        return wrapper;
    }

    /**
     *
     * @returns {Element}
     */

    renderPlayerLayout() {

        const timeline = document.createElement('div');

        timeline.setAttribute('class', 'player__timeline');
        timeline.append(this.generateTimelineChunk());

        const content = document.createElement('div');

        content.setAttribute('class', 'player__content');
        content.append(this.generateContentChunk());

        const contentWrapper = document.createElement('div');

        contentWrapper.setAttribute('class', 'player__content-wrapper');
        contentWrapper.innerHTML = `
                     <div class="player__content-switcher player__content-switcher--prev"></div>
                     <div class="player__content-switcher player__content-switcher--next"></div>`;
        contentWrapper.append(content);

        const player = document.createElement('div');

        player.setAttribute('class', 'player');
        player.append(timeline);
        player.append(contentWrapper);

        return player;
    }
}