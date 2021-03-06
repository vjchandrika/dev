/**
 * @param window = Window Object
 * @param document = Document Object
 * @param $ = jQuery Object
 * @param wpo = $wponion object
 * @param wpf = $wonion.field object
 * @param wpt = $wponion.theme object.
 */
( ( window, document, $, wpo, wpt, wp ) => {
	let wphooks = wp.hooks;

	/**
	 * Handles Single Submenu
	 * @returns {wpt.fn.WP_submenu}
	 * @constructor
	 */
	wpt.fn.WP_submenu = function () {
		let $this = this;
		$this.elem.find( '.wponion-submenus.subsubsub a' ).on( 'click', function ( e ) {
			e.preventDefault();
			let $href = $( this ).attr( 'href' );
			$href     = wpo.url_to_object( $href );

			if ( $href[ 'section-id' ] !== undefined && $href[ 'parent-id' ] !== undefined ) {
				let $parent      = 'wponion-tab-' + $href[ 'parent-id' ];
				let $section     = $parent + '-' + $href[ 'section-id' ];
				let $all_actives = $this.elem.find( 'div#' + $parent + ' div.wponion-section-wraps' );
				let $current     = $this.elem.find( 'div#' + $parent + ' div#' + $section );

				$all_actives.hide();
				$current.show();
				$( this ).parent().parent().find( 'a.current' ).removeClass( 'current' );
				$( this ).addClass( 'current' );
			} else {
				window.location.href = $( this ).attr( 'href' );
			}
		} );
		return $this;
	};

	/**
	 * Handles Main Menu.
	 * @returns {wpt.fn.WP_main_menu}
	 * @constructor
	 */
	wpt.fn.WP_main_menu = function () {
		let $this = this;
		$this.elem.find( 'nav.nav-tab-wrapper a' ).on( 'click', function ( e ) {
			e.preventDefault();

			let $href = $( this ).attr( 'href' );
			$href     = wpo.url_to_object( $href );

			if ( $href[ 'parent-id' ] !== undefined ) {
				let $parent      = 'wponion-tab-' + $href[ 'parent-id' ];
				let $all_actives = $this.elem.find( ' div.wponion-parent-wraps' );
				let $current     = $this.elem.find( 'div#' + $parent );
				$all_actives.hide();
				$current.show();
				$( this ).parent().find( 'a.nav-tab-active ' ).removeClass( 'nav-tab-active ' );
				$( this ).addClass( 'nav-tab-active ' );
			} else {
				window.location.href = $( this ).attr( 'href' );
			}
		} )
		return $this;
	};

	wphooks.addAction( 'wponion_before_init', ( () => {
		var $elem = $( '.wponion-framework' );
		if ( $elem.hasClass( 'wponion-submenu-single-page' ) ) {
			wponion_theme( '.wponion-framework' ).WP_submenu();
		}

		if ( $elem.hasClass( 'wponion-single-page' ) ) {
			wponion_theme( '.wponion-framework' ).WP_main_menu().WP_submenu();
		}
	} ) );

} )( window, document, jQuery, $wponion, $wponion_theme, wp );
