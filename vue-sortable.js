( function() {

  "use strict"

  var VueSortable = {},
      Sortable = typeof require === "function" ? require( "sortablejs" ) : window.Sortable;

  VueSortable.install = function( Vue ) {
    Vue.directive( "sortable", function( value ) {
      var vm = this.vm,
          key = this.arg;

      // TODO: deep copy
      value = value || {};

      // TODO: bind all callbacks
      value.onUpdate = function() {};

      Sortable.create( this.el, value );
    });
  };

  if ( typeof exports === "object" ) {
    module.exports = VueSortable;
  } else if ( typeof define === "function" && define.amd ) {
    define( [ ], function() { return VueSortable; } );
  } else if ( window.Vue ) {
    window.VueSortable = VueSortable;
    Vue.use( VueSortable );
  }
})();