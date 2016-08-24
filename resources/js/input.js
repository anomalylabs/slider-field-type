$(function () {

    // Initialize sliders
    $('[data-provides="anomaly.field_type.slider"]').each(function () {

        var slider = $(this);

        var value = String(slider.data('value')).split(',');
        slider.slider({
            min: slider.data('min'),
            max: slider.data('max'),
            step: slider.data('step'),
            range: slider.data('range')
        });

        if (value.length > 1) {
            slider.slider('values', value);
        } else {
            slider.slider('value', value);
        }

        slider.addSliderSegments(slider.data('max'));

        slider.on('slide', function(event, ui) {
            var result = window[slider.data('name') + "__onslide"](slider, event, ui);
            if(!result) { event.preventDefault(); return false; }
        });

        // execute the onslide function once to get everything synced up.
        slider.trigger('slide');

    });
});
