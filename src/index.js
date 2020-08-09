(function () {
    var customElements = $('#custom-elements'),
        results = $('#results');

    function displayCheckedValues() {
        var values = $.map(
            customElements.find('input:checked'),
            el => $(el).val()
        ).join(' - ');
        results.html(values);
    }

    function setCheck(checked) {
        customElements.find('input').prop('checked', checked);
        displayCheckedValues();
    }

    $('#check-all').click(() => setCheck(true));
    $('#check-none').click(() => setCheck(false));

    customElements.change(displayCheckedValues);
    displayCheckedValues();
})();
