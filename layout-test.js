var gigaom_layout_test = {};

(function( $ ) {
	'use strict';

	gigaom_layout_test.init = function( auto_inject ) {
		this.$the_body = $( 'body' );
		this.$body = $( '.post section.body.entry-content' );
		this.$content = this.$body.find( '> div' );

		this.current_strategy = 'ordered';
		this.current_strategy_type = 'many_300x250';

		this.init_widgets();
		this.init_panel();

		if ( auto_inject ) {
			this.test_control();
		}
	};

	gigaom_layout_test.clear_test = function() {
		$( '.layout-box-thing, .layout-box-css, .layout-box-insert, #hidden-sidebar, #gigaom-layout-test-json-data' ).remove();

		// allow tests to clean up after themselves
		$( document ).trigger( 'gigaom-layout-test-clear' );
	};

	gigaom_layout_test.init_widgets = function() {
		this.widgets = {};
		this.widgets.adb = {
			name: 'Ad 300x250 B',
			html_id: 'adb',
			element_id: 'adb',
			color: 'red',
			location: 'right',
			height: 250
		};

		this.widgets.ad_2 = {
			name: 'Ad 300x600',
			html_id: 'ad-300x600',
			element_id: 'ad_300x600',
			color: 'red',
			location: 'right',
			height: 600
		};
		this.widgets.adc = {
			name: 'Ad 300x250 C',
			html_id: 'adc',
			element_id: 'adc',
			color: 'red',
			location: 'right',
			height: 250,
		};
		go_contentwidgets.layout_preferences.adc = {
			direction: 'bottom'
		}

		this.widgets.auto3 = {
			name: 'Auto 3',
			html_id: 'auto3',
			element_id: 'auto3',
			color: 'blue',
			location: 'left',
			height: 370
		};
		this.widgets.autoe = {
			name: 'Auto E',
			html_id: 'autoe',
			element_id: 'autoe',
			color: 'blue',
			location: 'left',
			height: 270,
		};
		go_contentwidgets.layout_preferences.autoe = {
			direction: 'bottom'
		}

		this.widgets.newsletter = {
			name: 'Newsletter Subscription',
			html_id: 'newsletter-sub',
			element_id: 'newsletter',
			color: 'blue',
			location: 'left',
			height: 250
		};
		this.widgets.add = {
			name: 'Ad 300x250 D',
			html_id: 'add',
			element_id: 'add',
			color: 'red',
			location: 'right',
			height: 250
		};
		this.widgets.ade = {
			name: 'Ad 300x250 E',
			html_id: 'ade',
			element_id: 'ade',
			color: 'red',
			location: 'right',
			height: 250
		};
		this.widgets.adf = {
			name: 'Ad 300x250 F',
			html_id: 'adf',
			element_id: 'adf',
			color: 'red',
			location: 'right',
			height: 250
		};
	};

	gigaom_layout_test.init_sidebar = function() {
		this.$hidden_sidebar = $( '<div id="hidden-sidebar"></div>' );
		this.$the_body.prepend( this.$hidden_sidebar );

		this.$hidden_sidebar.css( {
			opacity: 0.075,
			position: 'absolute',
			right: 0,
			top: 0,
		} );

		for ( var i in this.widgets ) {
			var widget = this.widgets[ i ];
			this.$hidden_sidebar.append( '<div id="' + widget.html_id + '" data-element="' + widget.element_id + '" class="layout-box-insert layout-box-insert-' + widget.location + '" style="height:' + widget.height + 'px;background:' + widget.color + '"><div>' + widget.name + '</div></div>' );
		}
	};

	gigaom_layout_test.init_style = function() {
		this.$the_body.addClass( 'go-layout-test' );

		this.css = '<style class="layout-box-css">' +
			'.go-layout-test .post section.body.entry-content {' +
				'overflow: visible;' +
			'}' +
			'.go-layout-test .post section.body.entry-content > div {' +
				'position: relative;' +
			'}' +
			'.go-layout-test .post section.body.entry-content > div .alignright {' +
				'margin-right: -172px;' +
			'}' +
			'.go-layout-test .post section.body.entry-content > div .alignleft {' +
				'margin-left: -112px;' +
				'border-left: 1.25rem solid #fff;' +
				'border-right: 1.25rem solid #fff;' +
			'}' +
			'.go-layout-test #body {' +
				'float: none;' +
				'left: -48px;' +
				'margin: 0 auto;' +
				'position: relative;' +
			'}' +
			'.go-layout-test .post {' +
				'width: 624px;' +
			'}' +
			'.go-layout-test.go-layout-test-narrower .post {' +
				'width: 565px;' +
			'}' +
			'.go-layout-test.go-layout-test-narrowest .post {' +
				'width: 500px;' +
			'}' +
			'.go-layout-test.text-size-normal .entry-content > div {' +
				'font-size: 1.125rem;' +
				'line-height: 24px;' +
			'}' +
			'.go-layout-test.go-layout-test-bigger-font .entry-content > div {' +
				'font-size: 1.25rem;' +
				'line-height: 26px;' +
			'}' +
			'.go-layout-test.go-layout-test-bigger-font-22 .entry-content > div {' +
				'font-size: 1.375rem;' +
				'line-height: 26px;' +
			'}' +
			'.go-layout-test .entry-content p {' +
				'margin-bottom: 24px;' +
			'}' +
			'.go-layout-test #sidebar {' +
				'opacity: 0.075;' +
				'position: absolute;' +
				'right: 0;' +
				'top: 0;' +
			'}' +
			'.layout-box-thing {' +
				'position: absolute;' +
				'width: 100%;' +
			'}' +
			'.layout-box-thing div {' +
				'bottom: 0;' +
				'color: white;' +
				'font-size: 1.5rem;' +
				'max-height: 3em;' +
				'left: 0;' +
				'line-height: 1.5em;' +
				'margin: auto;' +
				'position: absolute;' +
				'right: 0;' +
				'text-align: center;' +
				'top: 0;' +
			'}' +
			 '.layout-box-insert div {' +
			 	'text-align: center;' +
			 	'margin-top: 1em;' +
			 	'font-size: 1.5em;' +
			 	'color: white' +
			 '}' +
			'.layout-box-insert {' +
				'background: red;' +
				'margin-bottom: 1rem;' +
				'width:300px;' +
			'}' +
			'.layout-box-insert.layout-box-insert-right {' +
				'float: right;' +
				'clear: right;' +
				'margin-left: 1.5rem;' +
				'margin-right: -172px;' +
			'}' +
			'.layout-box-insert.layout-box-insert-left {' +
				'float: left;' +
				'clear: left;' +
				'margin-left: -112px;' +
				'margin-right: 1.5rem;' +
			'}' +
			'.inject-point {' +
				'background: green;' +
			'}' +
			'.go-layout-test .go-inject-content {' +
				'display: none;' +
			'}' +
			'.go-contentwidgets-spacer.layout-box-insert-left {' +
				'float: left;' +
				'clear: left;' +
			'}' +
			'.go-contentwidgets-spacer.layout-box-insert-right {' +
				'float: right;' +
				'clear: right;' +
			'}' +
		'</style>';

		this.$the_body.append( this.css );
	};

	gigaom_layout_test.init_panel = function() {
		var i;

		$( '.gigaom-layout-test-panel' ).remove();
		var $panel = $( '<div class="gigaom-layout-test-panel"/>' );

		$panel.prepend( '<style>' +
			'.gigaom-layout-test-panel {' +
				'background: #f5f5f5;' +
				'border-top: 1px solid #ccc;' +
				'bottom: 0;' +
				'box-shadow: 0 0 5px 0 rgba( 10, 10, 10, 0.2 );' +
				'left: 0;' +
				'position: fixed;' +
				'right: 0;' +
				'z-index: 9999999999;' +
			'}' +
			'.gigaom-layout-test-panel-json {' +
				'bottom: 0;' +
				'left: 0;' +
				'position: fixed;' +
				'right: 0;' +
				'z-index: 0;' +
			'}' +
			'.gigaom-layout-test-panel div {' +
				'padding: .5rem 1rem;' +
			'}' +
			'.gigaom-layout-test-panel .info {' +
				'display: none;' +
				'font-size: .875rem;' +
				'padding-bottom: .25rem;' +
				'padding-right: 200px;' +
				'padding-top: .25rem;' +
			'}' +
			'.gigaom-layout-test-panel .info ul {' +
				'display: inline-block;' +
				'margin-left: 1.5rem;' +
			'}' +
			'.gigaom-layout-test-panel .info ul li {' +
				'background: #fff;' +
				'border: 1px solid #ccc;' +
				'border-radius: 4px;' +
				'line-height: 1.3rem;' +
				'padding: 0 .5rem;' +
			'}' +
			'.gigaom-layout-test-panel .info.injection {' +
				'background: #fafafa;' +
				'border-bottom: 1px solid #eee;' +
			'}' +
			'.gigaom-layout-test-panel .info.order {' +
				'background: #fafafa;' +
				'border-bottom: 1px solid #eee;' +
			'}' +
			'.gigaom-layout-test-panel .commands {' +
				'list-style-type: none;' +
			'}' +
			'.gigaom-layout-test-panel .commands li,' +
			'.gigaom-layout-test-panel .info li {' +
				'display: inline-block;' +
				'list-style-type: none;' +
				'margin-right: 1rem;' +
			'}' +
			'.gigaom-layout-test-panel .command .selected {' +
				'font-weight: bold;' +
			'}' +
			'</style>'
		);

		var $json_panel = $( '<div class="gigaom-layout-test-panel-json"></div>' );
		$( 'body' ).append( $json_panel );

		$panel.append( '<div class="info injection"><strong>Injection order:</strong></div>' );
		$panel.append( '<div class="command-container"><ul class="commands" /></div>' );

		var $injection = $panel.find( '.info.injection' );
		var $commands = $panel.find( '.commands' );

		$injection.append( '<ul class="inserted"/>' );

		var $inserted = $injection.find( '.inserted' );
		var is_checked = true;

		$commands.append( '<li class="command"><button type="button" class="action button link" data-action="clear_test">Clear</button></li>' );
		$commands.append( '<li class="command"><button type="button" class="action button link" data-action="init_style">Style</button></li>' );

		$commands.append( '<li class="command-label">Tests:</li>' );
		$commands.append( '<li class="command"><button type="button" class="action button link" data-action="test_control">Control</button></li>' );
		$commands.append( '<li class="command"><button type="button" class="action button link" data-action="test_alt_gap">Alt Gap</button></li>' );


		$( document ).on( 'click', '.gigaom-layout-test-panel .action', function() {
			var $el = $( this );
			gigaom_layout_test[ $el.data( 'action' ) ]();
			gigaom_layout_test.build_injected_json();
		});

		$( document ).on( 'gigaom-layout-test-clear', function( e, data ) {
			$injection.hide();
			$inserted.html( '' );
		});

		$( document ).on( 'go-contentwidgets-injected', function( e, data ) {
			$injection.show();
			$inserted.append( '<li class="item">' + data.injected.name + '</li>' );
		});

		$( 'body' ).append( $panel );
	};

	gigaom_layout_test.build_injected_json = function() {
		var data = {
			elements: [],
			comments: parseInt( $( '#comment-count' ).data( 'comment-count' ), 10 ),
			font_size: this.$the_body.hasClass( '.go-layout-test-bigger-font' ) ? '20px' : '18px'
		};

		this.$content.find( '.layout-box-insert' ).each( function() {
			var $el = $( this );
			data.elements.push( $el.data( 'element' ) );
		});

		$( '.gigaom-layout-test-panel-json' ).html( '<div id="gigaom-layout-test-json-data">' + JSON.stringify( data ) + '</div>' );
	};

	/**
	 * tests the baseline control
	 */
	gigaom_layout_test.test_control = function() {
		this.clear_test();

		this.init_style();

		this.init_sidebar();
		go_contentwidgets.init();
	};

	/**
	 * tests the baseline control
	 */
	gigaom_layout_test.test_alt_gap = function() {
		this.clear_test();

		this.init_style();

		go_contentwidgets.single_use_gap_per_pass = true;
		this.init_sidebar();
		go_contentwidgets.init();
		go_contentwidgets.single_use_gap_per_pass = false;
	};
})( jQuery );

// ================================================================================================
// ================================================================================================
// All code below here is a copy/paste of go-contentwidgets.js
// with the one exception that automatic function calls are commented out (init and events)
// ================================================================================================
// ================================================================================================

if ( 'undefined' === typeof go_contentwidgets ) {
	var go_contentwidgets = {
		layout_preferences: {},
		single_use_gap_per_pass: false
	};
}//end id

(function( $ ) {
	'use strict';

	go_contentwidgets.current = Date.now();
	go_contentwidgets.blackout_selector = '> *:not(p,blockquote,h1,h2,h3,h4,h5,h6,ol,ul,script,address)';

	go_contentwidgets.log = function( text ) {
		go_contentwidgets.current = Date.now();
		console.info( text, go_contentwidgets.current - go_contentwidgets.last );
		go_contentwidgets.last = go_contentwidgets.current;
	};

	go_contentwidgets.events = function() {
		// compatibility with bcms wijax widgets
		$( document ).on( 'wijax-loaded', function( event, widget_id ) {
			var $widget = $( '#' + widget_id );
			if ( $widget.closest( '#hidden-sidebar' ).length > 0 ) {
				go_contentwidgets.single_widget_inject( $widget );
			}//end if
		} );

		// watch for resizes and re-inject all the things
		$( document ).on( 'go-resize', function() {
			go_contentwidgets.$widgets.each( function() {
				$( '#hidden-sidebar' ).append( $( this ) );
			});

			go_contentwidgets.auto_inject();
		});
	};

	go_contentwidgets.init = function() {
		this.loading = true;

		this.start = Date.now();
		this.last = this.start;
		this.log( 'begin init' );

		this.shortest_widget_height = 10000;
		this.tallest_widget_height = 0;
		this.insert = [];
		this.inventory = {
			blackouts: [],
			gaps: []
		};

		this.$body = $( '#body' ).find( '.post section.body.entry-content' );
		this.$content = this.$body.find( '> div' );

		this.$first_element = this.$content.find( ':first' );
		this.$images = this.$content.find( 'img' );

		this.$images.each( function() {
			var $img = $( this );

			if ( $img.attr( 'width' ) < $img.closest( '.entry-content' ).width() ) {
				$img.css( 'height', $img.attr( 'height' ).concat( 'px' ) );
			} else {
				$img.css( 'height', 'auto' );
			}//end else
		});

		this.collect_widgets();

		this.auto_inject();

		this.$content.find( '.layout-box-thing' ).remove();
		$( '#body' ).addClass( 'rendered' );
		go_contentwidgets.current = Date.now();
		console.info( 'Took this long:', go_contentwidgets.current - go_contentwidgets.start );

		$( document ).trigger( 'go-contentwidgets-complete' );
		this.loading = false;
	};

	go_contentwidgets.collect_widgets = function() {
		go_contentwidgets.log( 'collecting widgets' );
		this.$widgets = $( '#hidden-sidebar > div:not(.widget_wijax)' );
		this.$widgets.each( function() {
			go_contentwidgets.add_widget( $( this ) );
		} );
		go_contentwidgets.log( 'finished collecting widgets' );
	};

	go_contentwidgets.add_widget = function( $widget ) {
		var widget_id = $widget.attr( 'id' );

		$widget.addClass( 'layout-box-insert' ); // @todo, this may not be needed long term, but for now it makes the CSS easier

		var widget = {
			name: widget_id,
			$el: $widget,
			height: parseInt( $widget.outerHeight( true ), 10 ) + 16, // reported height of the element and about 16px for some buffer
			location: 'right',
			preferbottom: false
		};

		if ( widget.height < this.shortest_widget_height ) {
			this.shortest_widget_height = widget.height;
		}//end if

		if ( widget.height > this.tallest_widget_height ) {
			this.tallest_widget_height = widget.height;
		}//end if

		if ( 'undefined' !== typeof this.layout_preferences[ widget_id ] ) {
			if (
				'undefined' !== typeof this.layout_preferences[ widget_id ].direction
				&& 'bottom' === this.layout_preferences[ widget_id ].direction
			) {
				widget.preferbottom = true;
			}//end if

			if (
				'undefined' !== typeof this.layout_preferences[ widget_id ].location
				&& 'any' !== this.layout_preferences[ widget_id ].location
			) {
				widget.location = this.layout_preferences[ widget_id ].location;
			}//end if
		}//end if

		if ( widget.location ) {
			$widget.addClass( 'layout-box-insert-'.concat( widget.location ) );
		}//end if

		this.insert.push( widget );
		return( widget );
	};

	go_contentwidgets.single_widget_inject = function( $widget ) {
		if ( this.loading ) {
			// sleep here and try again since other injections are actively happening.
			setTimeout( function() {
				go_contentwidgets.single_widget_inject( $widget );
			}, 10 );
		}//end if

		this.loading = true;

		this.reset();

		// identify all the normal blackouts and gaps
		this.identify_blackouts();

		// blackout everything from the bottom of the current viewport and up!
		var scroll_bottom = $( window ).scrollTop() + $( window ).height();
		var content_scroll_top = this.$content.offset().top;

		var end = scroll_bottom - content_scroll_top;

		var blackout = {
			$el: this.$first_element,
			start: 0,
			end: end,
			height: end
		};

		var new_blackouts = [ blackout ];
		for ( var i in this.inventory.blackouts ) {
			if ( this.inventory.blackouts[ i ].end > blackout.end ) {
				 new_blackouts.push( this.inventory.blackouts[ i ] );

				 if ( blackout.end > this.inventory.blackouts[ i ].start ) {
					blackout.end = this.inventory.blackouts[ i ].start;
					blackout.height = blackout.end;
				}//end if
			}
		}//end for
		this.inventory.blackouts = new_blackouts;

		this.identify_gaps();

		var injectable = this.add_widget( $widget );
		this.inject_item( injectable );

		this.loading = false;
	};

	/**
	 * auto injects items in order
	 */
	go_contentwidgets.auto_inject = function() {
		for ( var i = 0, length = go_contentwidgets.insert.length; i < length; i++ ) {
			go_contentwidgets.calc();
			go_contentwidgets.inject_item( go_contentwidgets.insert[ i ] );
		}// end foreach
	};

	/**
	 * get measurement attributes for a given element
	 *
	 * @param $el jQuery element to measure
	 * @return object with measurement attributes
	 */
	go_contentwidgets.attributes = function( $el ) {
		var margin_top = $el.css( 'margin-top' );
		margin_top = parseInt( margin_top.replace( 'px', '' ), 10 );

		var start = $el.get( 0 ).offsetTop;
		start -= margin_top;

		var height = parseInt( $el.outerHeight( true ), 10 );
		var end = start + height;

		var data = {
			$el: $el,
			start: start,
			end: end,
			height: height
		};

		return data;
	};

	go_contentwidgets.overlay = function( $el, start, height, type ) {
		var $overlay = $( '<div class="layout-box-thing" style="top:' + start + 'px;height:' + height + 'px;"></div>' );

		if ( 'gap' === type ) {
			$el.before( $overlay );
		} else if( 'solo-gap' === type ) {
			$el.append( $overlay );
		} else {
			$el.after( $overlay );
		}// end else

		return $overlay;
	};

	go_contentwidgets.reset = function() {
		this.$content.find( '.layout-box-thing, .go-contentwidgets-spacer' ).remove();
		this.inventory = {
			blackouts: [],
			gaps: []
		};
	};

	go_contentwidgets.calc = function() {
		go_contentwidgets.log( 'begin calc and reset' );
		this.reset();
		go_contentwidgets.log( 'end reset/begin identify blackouts' );
		this.identify_blackouts();
		go_contentwidgets.log( 'end identify blackouts/begin identify gaps' );
		this.identify_gaps();
		go_contentwidgets.log( 'end identify gaps and calc' );
	};

	go_contentwidgets.identify_blackouts = function() {

		go_contentwidgets.log( 'before find :visible' );
		// find top level blackouts
		// since :visible isn't native CSS, following the jQuery recommendation of running it after a pure CSS selector
		this.$content.find( this.blackout_selector ).filter( ':visible' ).each( function() {
			var $el = $( this );
			var attr = go_contentwidgets.attributes( $el );
			go_contentwidgets.inventory.blackouts.push( attr );
		});

		go_contentwidgets.log( 'after find :visible / before find children' );
		// find child blackouts
		this.$content.find( '> p *' ).filter( 'img,iframe,.layout-box-insert' ).each( function() {
			var $el = $( this );
			var attr = go_contentwidgets.attributes( $el );
			// since this is a child, after we've calculated the blackout grab its parent p
			attr.$el = $el.closest( 'p' );
			go_contentwidgets.inventory.blackouts.push( attr );
		});

		this.inventory.blackouts.sort( this.sort_by_start );

		go_contentwidgets.log( 'after find children / before blackout overlay generation' );
	};

	/**
	 * sorting function used only by identify_blackouts
	 */
	go_contentwidgets.sort_by_start = function( a, b ) {
		var a_start = a.start;
		var b_start = b.start;
		return ( ( a_start < b_start ) ? -1 : ( ( a_start > b_start ) ? 1 : 0 ) );
	};

	go_contentwidgets.adjust_down = function( $injectable, distance ) {
		var alignment_class = 'layout-box-insert-right';
		if ( ! $injectable.hasClass( alignment_class ) ) {
			alignment_class = 'layout-box-insert-left';
		}//end if

		$injectable.before( $( '<div class="go-contentwidgets-spacer '+ alignment_class + '" style="height:' + distance +'px"/>' ) );
	};

	go_contentwidgets.identify_gaps = function( include_all ) {
		var start = 0;
		var gap;
		var i;
		var gap_height;
		var length;

		if ( 0 === this.inventory.blackouts.length ) {
			gap = {};
			gap.$overlay = this.overlay( this.$content, start, this.$content.outerHeight(), 'solo-gap' );
			gap.$first_el = this.$first_element;

			this.inventory.gaps.push( gap );
		}//end if
		else {
			var previous_blackout = null;
			for ( i = 0, length = this.inventory.blackouts.length; i < length; i++ ) {
				var blackout = this.inventory.blackouts[ i ];

				if ( blackout.start > start ) {
					gap_height = blackout.start - start;

					// if the gap height isn't tall enough for our shortest widget, don't bother with it
					if ( 0 === gap_height || gap_height < this.shortest_widget_height ) {
						if ( previous_blackout.$el.hasClass( 'layout-box-insert' ) ) {
							this.adjust_down( previous_blackout.$el, gap_height / 2 );
						}//end if

						start = blackout.end;
						previous_blackout = blackout;
						continue;
					}//end if

					gap = {};
					gap.$overlay = this.overlay( blackout.$el, start, gap_height, 'gap' );
					gap.$first_el = [];
					gap.height = gap_height;

					if ( 0 === start ) {
						var tmp = this.attributes( this.$first_element );

						if ( tmp.end <= blackout.start ) {
							gap.$first_el = this.$first_element;
						}//end if
					}//end if
					else {
						var tmp = this.attributes( previous_blackout.$el.next() );

						// find an element below the blackout
						while ( tmp.start < previous_blackout.end ) {
							tmp.$el = tmp.$el.next();
							if ( tmp.$el.is( '.layout-box-thing' ) ) {
								continue;
							}//end if

							tmp = this.attributes( tmp.$el );
						}// end while

						if ( tmp.start >= previous_blackout.end && tmp.end <= blackout.start ) {
							gap.$first_el = tmp.$el;
						}//end if
					}//end else

					if ( gap.$first_el.length ) {
						this.inventory.gaps.push( gap );
					}//end if
				}//end if

				start = blackout.end;
				previous_blackout = blackout;
			}//end for

			if ( previous_blackout && previous_blackout.end < this.$content.outerHeight() ) {
				gap_height = this.$content.outerHeight() - previous_blackout.end;
				// find the last gap below the final blackout

				// if the gap height isn't tall enough for our shortest widget, don't bother doing more stuff with it
				if ( gap_height > this.shortest_widget_height ) {
					gap = {};
					gap.$overlay = this.overlay( previous_blackout.$el, start, ( this.$content.outerHeight() - start ), 'last-gap' );
					gap.$first_el = gap.$overlay.next();
					gap.height = gap_height;

					// check that the element we found is below the blackout
					// @note: slight fear that this could cause an infinite loop
					while ( gap.$first_el.length && 'undefined' != typeof gap.$first_el.get( 0 ).offsetTop && gap.$first_el.get( 0 ).offsetTop < previous_blackout.end ) {
						gap.$first_el = gap.$first_el.next();
					}// end while

					// make sure the gap has an element in it, if not, it can't be counted
					if ( gap.$first_el.length && gap.$first_el.get( 0 ).offsetTop ) {
						this.inventory.gaps.push( gap );
					}//end if
				}//end if
			}//end if
		}//end else
	};

	go_contentwidgets.inject_item = function( injectable ) {
		var i;
		var length = 0;
		var $injection_point = null;
		var gap = null;
		go_contentwidgets.log( 'injecting injectable' );

		for ( i = 0, length = this.inventory.gaps.length; i < length; i++ ) {
			gap = this.attributes( this.inventory.gaps[ i ].$overlay );
			gap.$overlay = this.inventory.gaps[ i ].$overlay;
			gap.$first_el = this.inventory.gaps[ i ].$first_el;
			if ( gap.height > injectable.height ) {
				$injection_point = gap.$first_el;

				if ( injectable.preferbottom ) {
					// find the last injection_point in the gap where injectable will fit
					var next_injection_point = this.attributes( $injection_point );
					while ( next_injection_point.end <= gap.end && ( gap.end - next_injection_point.start ) > injectable.height ) {
						$injection_point = next_injection_point.$el;
						next_injection_point = this.attributes( $injection_point.next() );
					}// end while
				}//end if
				else {
					break;
				}//end else
			}//end if
		}//end for

		if ( ! $injection_point ) {
			// Failed to inject
			return false;
		}// end if

		$injection_point.before( injectable.$el );

		$( document ).trigger( 'go-contentwidgets-injected', {
			injected: injectable
		} );

		go_contentwidgets.log( 'end injecting injectable' );
	};

	$( function() {
		//go_contentwidgets.init();
		//go_contentwidgets.events();
	});
})( jQuery );

