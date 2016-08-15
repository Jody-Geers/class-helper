# class-helper

  DOM El Class Manipulation.

## Installation

  Install with [component(1)](http://component.io):

    $ component install Jody-Geers/class-helper

## API

<body>
    <!-- example ui -->
    <span class="class-el" id="test-el">Hello World, Here I AM...</span>
</body>
<script>

    // the meat
    var classHelper = require( 'class-helper' );
    
    // el testo
    var testEl = document.getElementById( 'test-el' );
    
    	// TEST - has it got the class?
    	if ( classHelper.getClass( testEl, 'class-el' ) ) testEl.innerText = 'el testo has class class-el';

    // remove class
    classHelper.removeClass( testEl, 'class-el' );
    
    	// TEST - has it got the class?
    	if ( !classHelper.getClass( testEl, 'class-el' ) ) testEl.innerText = 'el testo DOES NOT has class class-el';

    // add class
    classHelper.setClass( testEl, 'class-el-new' );
    
    	// TEST - has it got the class?
    	if ( classHelper.getClass( testEl, 'class-el-new' ) ) testEl.innerText = 'el testo has class class-el-new';

</script>


## License

  MIT
