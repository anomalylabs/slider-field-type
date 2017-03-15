$(document).on('ajaxComplete ready', function () {
    // Initialize $sliders
    $('[data-provides="anomaly.field_type.slider"]:not([data-initialized])')
        .each(function () {
            var $slider = $(this);
            var value = String($slider.data('value')).split(',');

            $slider
                .attr('data-initialized', '')
                .slider({
                    min: $slider.data('min'),
                    max: $slider.data('max'),
                    step: $slider.data('step'),
                    range: $slider.data('range')
                });

            if (value.length > 1) {
                $slider.slider('values', value);
            } else {
                $slider.slider('value', value);
            }

            $slider.addSliderSegments($slider.data('max'));

            $slider.on('slide', function (event, ui) {
                var $input = $slider.find('input');
                var $value = $slider.prev('.value-label').find('.value');

                if (ui.values === undefined) {
                    $value.text(ui.value);
                    $input.val(ui.value);
                } else {
                    $value.text(String(ui.values).replace(',', '-'));
                    $input.val(ui.values);
                }
            });
        });
});
