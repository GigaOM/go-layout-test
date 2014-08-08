var gigaom_layout_test = {
	layout_strategy: {}
};
(function( $ ) {
	'use strict';

	gigaom_layout_test.init = function( auto_inject ) {
		this.$body = $( '.post section.body.entry-content' );
		this.$content = this.$body.find( '> div' );
		this.$alignleft = this.$content.find( '.alignleft' );
		this.$alignright = this.$content.find( '.alignright' );
		this.current_strategy = 'ordered';
		this.current_strategy_type = 'tower_second';

		this.$body.css( 'overflow', 'visible' );
		this.$content.css( 'position', 'relative' );
		this.$alignleft.css( 'margin-left', '-159px' );
		this.$alignright.css( 'margin-right', '-203px' );

		this.insert = {};
		this.insert.adb = {
			name: 'Ad 300x250 B',
			$el: $( '<div id="adB" data-element="adb" class="layout-box-insert layout-box-insert-right" style="height:266px;"><div>Ad 300x250 B</div></div>' ),
			height: 260 // set to the required height, not the actual height
		};
		this.insert.ad_300x600 = {
			name: 'Ad 300x600',
			$el: $( '<div id="ad-300x600" data-element="ad_300x600" class="layout-box-insert layout-box-insert-right tall" style="height:616px;"><div>Ad 300x600</div></div>' ),
			height: 535 // set to the required height, not the actual height
		};
		this.insert.adc = {
			name: 'Ad 300x250 C',
			$el: $( '<div id="adC" data-element="adc" class="layout-box-insert layout-box-insert-right" style="height:266px;"><div>Ad 300x250 C</div></div>' ),
			height: 260, // set to the required height, not the actual height
			preferbottom: true
		};
		this.insert.auto3 = {
			name: 'Auto 3',
			$el: $( '<div id="auto3" data-element="auto3" class="layout-box-insert layout-box-insert-left" style="height:375px;background:blue;"><div>Auto 3</div></div>' ),
			height: 370 // set to the required height, not the actual height
		};
		this.insert.autoe = {
			name: 'Auto E',
			$el: $( '<div id="autoe" data-element="autoe" class="layout-box-insert layout-box-insert-left" style="height:325px;background:blue;"><div>Auto E</div></div>' ),
			height: 270 // set to the required height, not the actual height
		};
		this.insert.newsletter = {
			name: 'Newsletter Subscription',
			$el: $( '<div id="newsletter-sub" data-element="newsletter" class="layout-box-insert layout-box-insert-left" style="height:280px;background:blue;"><div>Newsletter Subscription</div></div>' ),
			height: 260 // set to the required height, not the actual height
		};

		this.strategies = {
			tower_second: [
				'adb',
				'ad_300x600',
				'adc',
				'auto3',
				'autoe',
				'newsletter'
			],
			tower_third: [
				'adb',
				'adc',
				'ad_300x600',
				'auto3',
				'autoe',
				'newsletter'
			]
		};

		this.inventory = {
			p: [],
			blackouts: [],
			gaps: [],
			spaces: []
		};

		this.css = '<style class="layout-box-css">' +
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
			'.gigaom-layout-test-panel .blocker-container {' +
				'background: #f5f5f5;' +
				'border-left: 1px solid #eee;' +
				'border-top: 1px solid #eee;' +
				'border-radius: 4px;' +
				'bottom: 0;' +
				'box-shadow: 0 0 5px 0 rgba( 10, 10, 10, 0.2 );' +
				'padding: 1rem;' +
				'position: absolute;' +
				'right: 0;' +
				'width: 200px;' +
			'}' +
			'.gigaom-layout-test-panel .blockers {' +
				'list-style-type: none;' +
				'margin-top: .5rem;' +
			'}' +
			'.gigaom-layout-test-panel .blockers li {' +
				'font-size: .875rem;' +
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
				'margin-left: .5rem;' +
				'margin-right: -203px;' +
			'}' +
			'.layout-box-insert.layout-box-insert-left {' +
				'float: left;' +
				'margin-left: -159px;' +
				'margin-right: .5rem;' +
			'}' +
			'.inject-point {' +
				'background: green;' +
			'}' +
		'</style>';

		$( '.layout-box-thing, .layout-box-css, .layout-box-insert' ).remove();
		this.$content.before( this.css );
		this.calc();
		this.init_panel();

		if ( auto_inject ) {
			this.auto_inject();
		}
	};

	gigaom_layout_test.init_panel = function() {
		var i;

		$( '.gigaom-layout-test-panel' ).remove();
		var $panel = $( '<div class="gigaom-layout-test-panel"/>' );
		var $json_panel = $( '<div class="gigaom-layout-test-panel-json"></div>' );
		$( 'body' ).append( $json_panel );

		var possible_nonblockers = {
			blocker_images: {
				name: 'Aligned images',
				selector: 'img.alignleft,img.alignright,.wp-caption.alignleft,.wp-caption.alignright'
			},
			blocker_blockquotes: {
				name: 'Blockquotes',
				selector: 'blockquote'
			},
			blocker_headers: {
				name: 'Headers',
				selector: 'h1,h2,h3,h4,h5,h6'
			},
			blocker_pullquotes: {
				name: 'Pullquotes',
				selector: '.pullquote'
			},
			blocker_tables: {
				name: 'Tables',
				selector: 'table:not(.right):not(.left):not(.sidebar)'
			}
		};

		$panel.append( '<div class="info injection"><strong>Injection order:</strong></div>' );
		$panel.append( '<div class="info order"><strong>Order on page:</strong></div>' );
		$panel.append( '<div class="command-container"><ul class="commands" /></div>' );
		$panel.append( '<div class="blocker-container"><strong>Avoid these:</strong><ul class="blockers" /></div>' );

		var $injection = $panel.find( '.info.injection' );
		var $order = $panel.find( '.info.order' );
		var $commands = $panel.find( '.commands' );
		var $blockers = $panel.find( '.blockers' );

		$injection.append( '<ul class="inserted"/>' );
		$order.append( '<ul class="order-on-page"/>' );

		var $inserted = $injection.find( '.inserted' );
		var $order_on_page = $order.find( '.order-on-page' );

		for ( i in possible_nonblockers ) {
			$blockers.append( '<li class="blocker"><label for="' + i + '"><input type="checkbox" class="go-checkbox" name="' + i + '" id="' + i + '" value="1" data-selector="' + possible_nonblockers[ i ].selector + '" checked/><span>' + possible_nonblockers[ i ].name + '</span></label></li>' );
		}//end for

		$commands.append( '<li class="command"><button type="button" class="action button link" data-action="calc">Calculate</button></li>' );
		$commands.append( '<li class="command"><button type="button" class="action button link" data-action="clear">Clear injections</button></li>' );
		$commands.append( '<li class="command"><button type="button" class="action button link" data-action="reset">Clear overlay</button></li>' );
		$commands.append( '<li class="command-label">Strategy:</li>' );
		$commands.append( '<li class="command"><button type="button" class="action button link" data-action="auto_inject" data-strategy="ordered" data-strategy-type="tower_second">Tower second</button></li>' );
		$commands.append( '<li class="command"><button type="button" class="action button link" data-action="auto_inject" data-strategy="ordered" data-strategy-type="tower_third">Tower third</button></li>' );
		/*
		$commands.append( '<li class="command-label">Add:</li>' );

		for ( i in this.insert ) {
			$commands.append( '<li class="command"><button type="button" class="inject-element button link" data-element="' + i + '">' + this.insert[ i ].name + '</button></li>' );
		}
		*/

		$( document ).on( 'click', '.gigaom-layout-test-panel .action', function() {
			var $el = $( this );
			if ( 'auto_inject' === $el.data( 'action' ) ) {
				gigaom_layout_test.current_strategy = $el.data( 'strategy' );
				gigaom_layout_test.current_strategy_type = $el.data( 'strategy-type' );
				gigaom_layout_test.clear();
				gigaom_layout_test.calc();
			}//end if

			gigaom_layout_test[ $el.data( 'action' ) ]( $el.data( 'param' ) );
		});

		$( document ).on( 'click', '.gigaom-layout-test-panel .inject-element', function() {
			var $el = $( this );
			gigaom_layout_test.inject_item( gigaom_layout_test.insert[ $el.data( 'element' ) ] );
			gigaom_layout_test.calc();
		});

		$( document ).on( 'change', '.gigaom-layout-test-panel .blockers .blocker input', function() {
			gigaom_layout_test.clear();
			gigaom_layout_test.calc();
			gigaom_layout_test.auto_inject();
		});

		$( document ).on( 'gigaom-layout-test-clear', function( e, data ) {
			$injection.hide();
			$order.hide();
			$inserted.html( '' );
		});

		$( document ).on( 'gigaom-layout-test-injected', function( e, data ) {
			$injection.show();
			$order.show();
			$inserted.append( '<li class="item">' + data.injected.name + '</li>' );
			$order_on_page.html( '' );

			$( '.layout-box-insert' ).each( function() {
				var $el = $( this );
				$order_on_page.append( '<li class="item">' + $el.find( 'div' ).html() + '</li>' );
			});
		});

		$( 'body' ).append( $panel );
	};

	gigaom_layout_test.build_injected_json = function() {
			var elements = [];
			$( '.layout-box-insert' ).each( function() {
				var $el = $( this );
				elements.push( $el.data( 'element' ) );
			});

			$( '.gigaom-layout-test-panel-json' ).html( '<div id="gigaom-layout-test-json-data">' + JSON.stringify( elements ) + '</div>' );
	};

	/**
	 * auto injects items in order
	 */
	gigaom_layout_test.auto_inject = function() {
		$( '.gigaom-layout-test-panel .command button' ).removeClass( 'selected' );
		$( '.gigaom-layout-test-panel button[data-action="auto_inject"][data-strategy="' + this.current_strategy + '"][data-strategy-type="' + this.current_strategy_type + '"]' ).addClass( 'selected' );
		this.layout_strategy[ this.current_strategy ]( this.current_strategy_type );
		this.build_injected_json();
	};

	gigaom_layout_test.layout_strategy.ordered = function( type ) {
		for ( var key in gigaom_layout_test.strategies[ type ] ) {
			gigaom_layout_test.inject_item( gigaom_layout_test.insert[ gigaom_layout_test.strategies[ type ][ key ] ] );
			gigaom_layout_test.calc();
		}// end foreach
	};

	/**
	 * clears injected units
	 */
	gigaom_layout_test.clear = function() {
		$( '.layout-box-insert,#gigaom-layout-test-json-data' ).remove();
		this.calc();
		$( document ).trigger( 'gigaom-layout-test-clear' );
	};


	gigaom_layout_test.attributes = function( $el ) {
		var margin_top = $el.css( 'margin-top' );
		var margin_bottom = $el.css( 'margin-bottom' );

		margin_top = parseInt( margin_top.replace( 'px', '' ), 10 );
		margin_bottom = parseInt( margin_bottom.replace( 'px', '' ), 10 );

		var top = parseInt( $el.position().top, 10 );
		var height = parseInt( $el.outerHeight( true ), 10 );
		top -= margin_top;
		var end = top + height;

		var data = {
			$el: $el,
			start: top,
			end: end,
			height: height,
			margin_top: margin_top,
			margin_bottom: margin_bottom
		};

		return data;
	};

	gigaom_layout_test.sort_by_start = function( a, b ) {
		var a_start = a.start;
		var b_start = b.start;
		return ( ( a_start < b_start ) ? -1 : ( ( a_start > b_start ) ? 1 : 0 ) );
	};

	gigaom_layout_test.overlay = function( $el, start, height, color, type, additional_text ) {
		additional_text = typeof additional_text !== 'undefined' ? '<br/>' + additional_text : '';

		var $overlay = $( '<div class="layout-box-thing ' + type + '" style="background: ' + color + ';top:' + start + 'px;height:' + height + 'px;"><div>' + height + 'px tall' + additional_text + '</div></div>' );
		if ( 'gap' === type ) {
			$el.before( $overlay );
		}//end if
		else if( 'solo-gap' === type ) {
			$el.append( $overlay );
		}//end if
		else {
			$el.after( $overlay );
		}// end else

		return $overlay;
	};

	gigaom_layout_test.reset = function() {
		$( '.layout-box-thing' ).remove();
		this.inventory = {
			p: [],
			blackouts: [],
			gaps: [],
			spaces: []
		};
		$( '.inject-point' ).removeClass( 'inject-point' );
	};

	gigaom_layout_test.calc = function() {
		this.reset();

		// find things (not sure what we are using this for)
		this.$content.find( '> p, > ol, > ul' ).each( function() {
			var $el = $( this );
			var attr = gigaom_layout_test.attributes( $el );
			gigaom_layout_test.inventory.p.push( attr );
		});

		this.identify_blackouts();

		this.identify_gaps();
	};

	gigaom_layout_test.identify_blackouts = function() {
		// find top level blackouts
		this.$content.find( '> *:visible:not(p):not(ol):not(ul):not(script)' ).each( function() {
			var $el = $( this );
			var $non_blockers = $( '.gigaom-layout-test-panel .blockers input:not(:checked)' );
			var non_blockers = {};

			$non_blockers.each( function() {
				non_blockers[ $( this ).attr( 'name' ) ] = $( this ).data( 'selector' );
			});

			for ( var i in non_blockers ) {
				if ( $el.is( non_blockers[ i ] ) ) {
					return;
				}//end if
			}//end for

			var attr = gigaom_layout_test.attributes( $el );
			attr.is_child = false;
			gigaom_layout_test.inventory.blackouts.push( attr );
		});

		// find child blackouts
		this.$content.find( '> p *' ).each( function() {
			var $el = $( this );
			if ( ! $el.is( 'img' ) && ! $el.is( 'iframe' ) && ! $el.is( '.layout-box-insert' ) ) {
				return;
			}//end if

			var attr = gigaom_layout_test.attributes( $el );
			attr.is_child = true;
			gigaom_layout_test.inventory.blackouts.push( attr );
		});

		// draw the blackout overlays
		for ( var i in this.inventory.blackouts ) {
			var blackout = this.inventory.blackouts[ i ];
			blackout.ref = gigaom_layout_test.get_element_type( blackout.$el );
			if ( blackout.is_child ) {
				blackout.$overlay = this.overlay( blackout.$el.closest( 'p' ), blackout.start, blackout.height, 'rgba( 0, 0, 0, 0.5 )', 'blackout', blackout.ref );
			}// end if
			else {
				blackout.$overlay = this.overlay( blackout.$el, blackout.start, blackout.height, 'rgba( 0, 0, 0, 0.5 )', 'blackout', blackout.ref );
			}// end else
		}//end for

		this.inventory.blackouts.sort( this.sort_by_start );
	};

	gigaom_layout_test.identify_gaps = function() {
		var start = 0;
		var gap;
		var $overlay;
		var i;

		if ( 0 === this.inventory.blackouts.length ) {
			$overlay = this.overlay( this.$content, start, this.$content.outerHeight(), 'rgba( 0, 255, 0, 0.5 )', 'solo-gap' );
			gap = this.attributes( $overlay );
			gap.$overlay = $overlay;
			gap.$first_el = this.$content.find( ':first' );

			this.inventory.gaps.push( gap );
		}//end if
		else {
			var previous_blackout = null;
			for ( i in this.inventory.blackouts ) {
				var blackout = this.inventory.blackouts[ i ];

				if ( blackout.start > start ) {
					var gap_height = blackout.start - start;
					if ( 0 === gap_height ) {
						continue;
					}//end if

					$overlay = this.overlay( blackout.$overlay, start, gap_height, 'rgba( 0, 255, 0, 0.5 )', 'gap' );
					gap = this.attributes( $overlay );
					gap.$overlay = $overlay;

					if ( 0 === start ) {
						gap.$first_el = this.$content.find( ':first' );
					}//end if
					else {
						var tmp = this.attributes( previous_blackout.$overlay.next() );

						// find an element below the blackout
						while ( tmp.start < previous_blackout.end ) {
							tmp = this.attributes( tmp.$el.next() );
						}// end while

						if ( tmp.start >= previous_blackout.end && tmp.end <= blackout.start ) {
							gap.$first_el = tmp.$el;
						}//end if
						else {
							// console.info( "failed to find an injection point - " + gap.height );
							// console.log( tmp.start + " > " + previous_blackout.end + " && " + tmp.end + " < " + blackout.start );
						}
					}//end else

					if ( gap.$first_el ) {
						this.inventory.gaps.push( gap );
					}//end if
					else {
						// should we hide the gap overlay if there is no injection point?
						this.inventory.spaces.push( gap );
					}
				}//end if

				start = blackout.end;
				previous_blackout = blackout;
			}//end for

			if ( previous_blackout.end < this.$content.outerHeight() ) {
				// find the last gap below the final blackout
				$overlay = this.overlay( previous_blackout.$overlay, start, ( this.$content.outerHeight() - start ), 'rgba( 0, 255, 0, 0.5 )', 'last-gap' );
				gap = this.attributes( $overlay );
				gap.$overlay = $overlay;
				gap.$first_el = gap.$overlay.next();

				// check that the element we found is below the blackout
				// @note: slight fear that this could cause an infinite loop
				while ( gap.$first_el && gap.$first_el.position() && gap.$first_el.position().top < previous_blackout.end ) {
					gap.$first_el = gap.$first_el.next();
				}// end while

				// make sure the gap has an element in it, if not, it can't be counted
				if ( gap.$first_el && gap.$first_el.position() ) {
					this.inventory.gaps.push( gap );
				}//end if
				else {
					// should we hide gaps with no injection point?
					//gap.$overlay.remove();
				}
			}//end if

			// execute common code on gaps
			for ( i in this.inventory.gaps ) {
				gap = this.inventory.gaps[ i ];

				gap.$first_el.addClass( 'inject-point' );
			}
		}//end else
	};

	gigaom_layout_test.inject_item = function( item ) {
		var $element = null;

		for ( var i in this.inventory.gaps ) {
			var gap = this.inventory.gaps[ i ];
			if ( gap.height > item.height ) {
				$element = gap.$first_el;

				if ( item.preferbottom ) {
					// find the last element in the gap where item will fit
					var next_element = this.attributes( $element );
					while ( next_element.end <= gap.end && ( gap.end - next_element.start ) > item.height ) {
						//console.info( next_element.end + "<=" + gap.end + " && ( " + gap.end + " - " + next_element.start + " ) > " + item.height );
						$element = next_element.$el;
						next_element = this.attributes( $element.next() );
					}// end while
				}//end if
				else {
					break;
				}//end else
			}//end if
		}//end for

		if ( ! $element ) {
			//console.info( 'Failed to inject ' + item.name );
			return false;
		}// end if

		//console.info( 'successfully injected ' + item.name + ' into a ' + $element[0].outerHTML );

		var injected = $element.before( item.$el );

		$( document ).trigger( 'gigaom-layout-test-injected', {
			injected: item
		} );

		return injected;
	};

	gigaom_layout_test.get_tag_ref = function( $el ) {
		var ref = $el.prop( 'tagName' ).toLowerCase();

		var id = $el.attr( 'id' );
		if ( id ) {
			ref += '#' + id;
		}//end if

		var classes = $el.attr( 'class' );
		if ( classes ) {
			ref += '.' + classes.replace(/ /g, '.' );
		}//end if

		return ref;
	};

	gigaom_layout_test.get_element_type = function( $el ) {
		var alignment;
		var id;
		var tagname;
		var classes;

		if ( $el.is( '.pullquote' ) ) {
			return 'pullquote';
		}//end if

		id = $el.attr( 'id' );

		if ( id && id.match( /attachment_/g ) ) {
			alignment = '';
			if ( $el.is( '.aligncenter' ) ) {
				alignment = 'centered';
			}//end if
			else if ( $el.is( '.alignleft' ) ) {
				alignment = 'left';
			}//end else if
			else if ( $el.is( '.alignright' ) ) {
				alignment = 'right';
			}//end else if
			return 'attachment ' + alignment;
		}//end if

		if ( $el.is( '.layout-box-insert' ) ) {
			return id;
		}//end if

		tagname = $el.prop( 'tagName' ).toLowerCase();
		if ( tagname.match( /^h[0-9]$/ ) ) {
			return 'heading';
		}//end if

		if ( 'iframe' === tagname ) {
			return 'iframe';
		}//end if
		if ( 'blockquote' === tagname ) {
			return 'blockquote';
		}//end if
		if ( 'img' === tagname ) {
			alignment = '';
			if ( $el.is( '.aligncenter' ) ) {
				alignment = 'centered';
			}//end if
			else if ( $el.is( '.alignleft' ) ) {
				alignment = 'left';
			}//end else if
			else if ( $el.is( '.alignright' ) ) {
				alignment = 'right';
			}//end else if

			return 'image ' + alignment;
		}//end if

		classes = '.' + $el.prop( 'class' ).replace( / /g, '.' );
		if ( classes.match( /\.embed-/g ) ) {
			return 'embed';
		}//end if

		return gigaom_layout_test.get_tag_ref( $el );
	};

})( jQuery );
