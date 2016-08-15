/*
  'repo': 'Jody-Geers/class-helper',
  'description': 'css class helper.',
*/


/**
* DOM El Class Manipulation
* @param {obj} args - not yet used.
*/
function ClassHelper( args ) {

	  
	/**
	* Checks if el has a class
	* @param {el} el - focus dom element
	* @param {string} className - class name to find
	* @return {bool} - true if has class
	* @access public
	*/
	this.getClass = function( el, className ) {
	  
		return el.className.match( new RegExp( '(\\s|^)' + className + '(\\s|$)' ) )? true : false;
		
	};
  
  
	/**
	* Sets class on el
	* @param {el} el - focus dom element
	* @param {string} className - class name to set
	* @return not yet used
	* @access public
	*/
	this.setClass = function( el, className ) {
	
		// incase it allready exists
		this.removeClass( el, className );
    
		el.className += ' ' + className;
	
	};

	
	/**
	* Sets class on multiple els
	* @param {array} args.elIds - string array of element id's
	* @param {string} args.className - string class name to set
	* @param {function} cb - optional return updated element id's
	* @return {array} elIds - string array of updated element id's
	* @access public
	*/
	this.setMultipleClass = function( args, cb ) {
	  
		// for all elements in array
		// find dom item - give it its new class.
		for ( var key in args.elIds ) {
		
			this.setClassNull( document.querySelector( '#' + args.elIds[key] ), args.className );
		  
			document.querySelector( '#' + args.elIds[key] ).className += ' ' + args.className;
		  
		}
		
		// return
		if ( cb )
			cb( args.elIds );
		else
			return args.elIds;
	
	};

  
	/**
	* Removes class from el
	* @param {el} el - focus dom element
	* @param {string} className - class name to find
	* @return not yet used
	* @access public
	*/
	this.removeClass = function( el, className ) {
	
		if ( this.getClass( el, className ) ) {
			  
			var reg = new RegExp( '(\\s|^)' + className + '(\\s|$)' );
			
			el.className = el.className.replace( reg, '' );
		
		}
	
	};
  

};


// make public
// return instance
module.exports = new ClassHelper();
