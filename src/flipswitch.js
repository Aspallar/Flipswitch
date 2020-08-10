class FlipswitchCheckbox extends HTMLInputElement {
    constructor() {
        super();
        const classPrefix = this.getAttribute('data-css-prefix') || 'onoffswitch';
        this.type = 'checkbox';
        this.classList.add(classPrefix + '-checkbox');

        var checkboxId = this.getAttribute('id');
        if (!checkboxId) {
            checkboxId = FlipswitchCheckbox._randomId();
            this.setAttribute('id', checkboxId);
        }

        const label = document.createElement('label');
        label.htmlFor = checkboxId;
        label.classList.add(classPrefix + '-label');

        const dataOn = 'data-on',
            dataOff = 'data-off',
            onText = this.getAttribute(dataOn),
            offText = this.getAttribute(dataOff),
            innerSpan = document.createElement('span');
        innerSpan.classList.add(classPrefix + '-inner');
        if (onText !== null) innerSpan.setAttribute(dataOn, onText);
        if (offText !== null) innerSpan.setAttribute(dataOff, offText);

        const switchSpan = document.createElement('span');
        switchSpan.classList.add(classPrefix + '-switch');

        label.appendChild(innerSpan);
        label.appendChild(switchSpan);

        const addditionalClasses = this.getAttribute('data-class'),
            style = this.getAttribute('style'),
            wrapper = document.createElement('div');
        if (style !== null) {
            this.removeAttribute('style');
            wrapper.setAttribute('style', style);
        }
        if (addditionalClasses !== null) wrapper.className = addditionalClasses;
        wrapper.classList.add(classPrefix);
        this.parentNode.insertBefore(wrapper, this);
        wrapper.appendChild(this);
        wrapper.appendChild(label);
    }

    static _randomId() {
        var randomString = () => Math.random().toString(36).substring(2, 15);

        do var id = randomString() + randomString();
        while (FlipswitchCheckbox._randomIds.has(id));

        FlipswitchCheckbox._randomIds.add(id);
        return 'FlipswitchCheckbox-' + id;
    }
}

FlipswitchCheckbox._randomIds = new Set();

customElements.define('flip-switch', FlipswitchCheckbox, {
    extends: 'input',
});
