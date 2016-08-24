<?php

return [
	'range'         => [
		'label'        => 'Range Input',
		'instructions' => 'Capture a range of values with two drag handles?',
		'disabled'     => 'Disabled',
		'enabled'      => 'Enabled',
		'min'          => 'Fixed to minimum value',
		'max'          => 'Fixed to maximum value'
	],
	'min'           => [
		'label'        => 'Minimum Value',
		'instructions' => 'What is the minimum value allowed?'
	],
	'max'           => [
		'label'        => 'Maximum Value',
		'instructions' => 'What is the maximum value allowed?'
	],
	'step'          => [
		'label'        => 'Step',
		'instructions' => 'Enter the slider\'s step size.'
	],
	'minstep'          => [
		'label'        => 'Minimum Interval',
		'instructions' => 'Only applicable for ranged sliders.'
	],
	'maxstep'          => [
		'label'        => 'Maximum Interval',
		'instructions' => 'Only applicable for ranged sliders.'
	],
	'unit'          => [
		'label'        => 'Unit',
		'instructions' => 'Enter the value unit.'
	],
	'notnull'		=> [
		'label'		   => 'Not Null',
		'instructions' => 'Ranged slider points cannot be equal. Non ranged slider cannot be zero. Set a default value for ranged slider if you enable this.'
	],
	'default_value' => [
		'label'        => 'Default Value',
		'instructions' => 'Enter the default value or value range if any.',
		'placeholder'  => '4,9'
	],
	'onslide' => [
		'label'		   => 'onSlide Event Override',
		'instructions' => 'Leave blank or enter contents of onslide function. See documentation for more info.'
	]
];
