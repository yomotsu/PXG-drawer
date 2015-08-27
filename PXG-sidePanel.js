/**
 * @author yomotsu / http://yomotsu.net
 * repository: https://github.com/yomotsu/PXG-sidePanel
 *
 */

window.addEventListener( 'DOMContentLoaded', function () {

  'use strict';

  var i = 0;
  var modifier = 'js-sidePanel--show'
  var html = document.documentElement;
  var body = document.body
  var scrollTop;
  var scrollbarWidth = ( function () {

    // http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript

    var outer = document.createElement( 'div' );
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';

    document.body.appendChild( outer );

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = 'scroll';

    // add innerdiv
    var inner = document.createElement( 'div' );
    inner.style.width = '100%';
    outer.appendChild( inner );

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild( outer );

    return widthNoScroll - widthWithScroll;

  } )();

  var openEl, closeEl;
  var openEls  = document.querySelectorAll( '[data-sidepanel-show]' );
  var closeEls = document.querySelectorAll( '[data-sidepanel-hide]' );

  for ( i = 0, openEl; openEl = openEls[ i ]; i = ( i + 1 )|0 ) {

    openEl.addEventListener( 'click', navOpen );

  }

  for ( i = 0, closeEl; closeEl = closeEls[ i ]; i = ( i + 1 )|0 ) {

    closeEl.addEventListener( 'click', navClose );

  }

  function navOpen () {

    scrollTop = html.scrollTop || body.scrollTop;
    html.className += ' ' + modifier;
    html.style.paddingLeft   = scrollbarWidth + 'px';
    body.style.top           = -scrollTop     + 'px';
    body.style.paddingBottom =  scrollTop     + 'px';

  };

  function navClose () {

    var re = new RegExp( ' ' + modifier );
    html.className = html.className.replace( re, '' );
    html.style.paddingLeft   = 0;
    body.style.top           = 0;
    body.style.paddingBottom = 0;
    window.scrollTo( 0, scrollTop );

  };

} );
