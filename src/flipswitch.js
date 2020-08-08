class FlipswitchCheckbox extends HTMLInputElement {
    constructor() {
        super();
        const classPrefix = this.getAttribute('data-class') || 'onoffswitch';
        this.type = 'checkbox';
        this.classList.add(classPrefix + '-checkbox');

        var checkboxId = this.getAttribute('id');
        if (!checkboxId) {
            checkboxId = this._randomId();
            this.setAttribute('id', checkboxId);
        }

        const label = document.createElement('label');
        label.htmlFor = checkboxId;
        label.classList.add(classPrefix + '-label');

        const onText = this.getAttribute('data-on');
        const offText = this.getAttribute('data-off');
        const innerSpan = document.createElement('span');
        innerSpan.classList.add(classPrefix + '-inner');
        if (onText !== null) innerSpan.setAttribute('data-on', onText);
        if (offText !== null) innerSpan.setAttribute('data-off', offText);

        const switchSpan = document.createElement('span');
        switchSpan.classList.add(classPrefix + '-switch');

        label.appendChild(innerSpan);
        label.appendChild(switchSpan);

        const wrapper = document.createElement('div');
        wrapper.classList.add(classPrefix);
        this.parentNode.insertBefore(wrapper, this);
        wrapper.appendChild(this);
        wrapper.appendChild(label);
    }

    _randomId() {
        var randomString = () => Math.random().toString(36).substring(2, 15);
        do {
            var id = randomString() + randomString();
        } while (FlipswitchCheckbox._randomIds.has(id));
        FlipswitchCheckbox._randomIds.add(id);
        return 'FlipswitchCheckbox-' + id;
    }
}

FlipswitchCheckbox._randomIds = new Set();

customElements.define('flip-switch', FlipswitchCheckbox, {
    extends: 'input',
});
