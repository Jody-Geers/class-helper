/*
  "repo": "Jody-Geers/class-helper",
  "description": "css class helper.",
*/

/**
*	DOM El Class Manipulation
*/
function classHelper( args ) {

  /**
  * Sets class on el
  */
  this.setClass = function( args, cb ) {
  
    for ( var key in args.elIds ) {
	
      this.setClassNull( document.querySelector( "#" + args.elIds[key] ), args.class );
      
	  document.querySelector( "#" + args.elIds[key] ).className += " " + args.class;
	  
    }

    if ( cb )
	  cb( args.elIds );
    else
      return args.elIds;

  };

  /**
  * Returns class from el
  */
  this.getClass = function ( ele, cls ) {
  
    return ele.className.match( new RegExp( '(\\s|^)' + cls + '(\\s|$)' ) );
	
  };

  /**
  * Removes class from el
  */
  this.setClassNull = function ( ele, cls ) {
    
	if ( this.getClass( ele, cls ) ) {
	
      var reg = new RegExp( '(\\s|^)' + cls + '(\\s|$)' );
	  
      ele.className = ele.className.replace( reg, '' );
	  
    }
	
  };

};

module.exports = classHelper();