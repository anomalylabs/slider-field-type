# Slider Field Type

- [Introduction](#introduction)
- [Configuration](#configuration)
- [Output](#output)


<a name="introduction"></a>
## Introduction

`anomaly.field_type.slider`

The slider field type provides a range slider input that allows users to select a value between a range of values.


<a name="configuration"></a>
## Configuration

**Example Definition:**

    protected $fields = [
        'example' => [
            'type'   => 'anomaly.field_type.slider',
            'config' => [
                'range' => 'max',
                'min' => 1,
                'max' => 10,
                'step' => 2,
                'notnull' => false,
                'unit' => 'ms',
                'default_value' => 5,
                'onslide' => '',
            ]
        ]
    ];

### `range`

The range selection mode:
  
`false`: Single value only - no range selection.

`true`: Range value only - select bottom and top value.

`'min'`: Range range value only - select top value from minimum value only.

`'max'`: Range range value only - select bottom value from maximum value only.  

### `min`

Minimum allowed value of the slider. The default value is `0`.

### `max`

Maximum allowed value of the slider. The default value is `10`.

### `step`

The value of each notch of the slider. The default value is `1`.

### `unit`

A suffex after the displayed value that represent the unit being changed, for example, milliseconds (ms).The default value is empty ``.

### `notnull`
The "Not Null" option, when set, will return false before executing the slide event if the two slider values are equal, preventing the slide from occurring. If the ranged option is not set, then "Not Null" will prevent the slider from stopping on zero. 

### `default_value`

The default value of the slider.

### `onslide`

Custom 'slide' event code. 

OPTIONAL  - You can leave this blank to use the [default slide event code](#slidedefault).

DRAGONS AHEAD: This field takes javascript code to override the default slide event code. Do not use this field unless you know what you are doing.

The code you provide will always be proceeded by the following code block, which handles the 'onload' call to slide function where the `ui` variable will be `undefined` and attempts to set it based on the default value before executing the actual slide event code.

The pre-slide event code:

	if (ui === undefined) {
	    var curval = slider.find('input').val();
	    var ui;
	    if(curval.match(/^\d+,\s*\d+$/)) {
	        var vals = curval.split(', ');
	        var ui = {};
	        ui.values = [$.trim(vals[0]), $.trim(vals[1])];
	    } else if(curval.match(/^\d+$/)) {
	        ui = { value: curval };
	    } else {
	        return false;
	    }
	}
	
If you enable `notnull` then this block is executed next:

	# Range Enabled:
	if(ui.values[0] == ui.values[1]) { return false; }
	
	# Range Disabled:
	if(ui.value == 0) { return false; }
	
After your code block, there is an automatic: (so you dont have to remember to this)

	return true;

Please keep in mind that whatever you do in your slide event code, you always need to set the field label and field input with something like the following: (this is the default code used when left blank)

<a name="slidedefault"></a>

	# Default event code:
	    
	if (ui.values === undefined) {
	    slider.prev('.value-label').find('.value').text(ui.value);
	    slider.find('input').val(ui.value);
	} else {
	    slider.prev('.value-label').find('.value').text(String(ui.values).replace(',', '-'));
	    slider.find('input').val(ui.values);
	}
        

<a name="output"></a>
## Output

This field type returns the value as stored in the database by default.

For non range this will be a single value. For range sliders the values are separated with a comma.

### `top()`

Returns the top value if a range was selected.

    // Twig usage
    {{ entry.example.top }}
    
    // API usage
    $entry->example->top();

### `bottom()`

Returns the bottom value if a range was selected.

    // Twig usage
    {{ entry.example.bottom }}
    
    // API usage
    $entry->example->bottom();

### `values()`

Returns the values as an array if a range was selected.

    // Twig usage
    {{ entry.example.values }}
    
    // API usage
    $entry->example->values();
