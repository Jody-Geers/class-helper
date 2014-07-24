# class-helper

  DOM El Class Manipulation.

## Installation

  Install with [component(1)](http://component.io):

    $ component install Jody-Geers/class-helper

## API

	<!-- example ui -->
	<span class="class-el" id="test-el">Hello World, Here I AM...</span>
	
	<script>
		var cssHelper = require('Jody-Geers-class-helper');
		
		// el testo
		var testEl = document.getElementById( 'test-el' );
		
		// has it got the class?
		if ( cssHelper.getClass( testEl, 'class-el' ) ) testEl.innerText = 'el testo has class class-el';
		
		// remove class
		cssHelper.setClassNull( testEl, 'class-el' );
		
		// add class
		cssHelper.setClass( testEl, 'class-el-new' );
		
	</script>


## License

  MIT