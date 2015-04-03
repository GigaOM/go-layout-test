<?php

$args = getopt( '', array(
	'width:',
) );

if ( empty( $args['width'] ) )
{
	die( 'You must specify a browser width with --width [value]' );
}//end if

$zoom = 1.0;

if ( $args['width'] < 641 ) {
	$zoom = 2.0;
}//end if

$db = new mysqli( '127.0.0.1', 'root', '', 'pro' );
if ( $db->connect_errno > 0 )
{
	die( 'Unable to connect to database [' . $db->connect_error . ']' );
}// end if

$sql = "SELECT * FROM wp_go_layout_screenshot WHERE `timestamp` = '0000-00-00 00:00:00' AND strategy = 'control' ORDER BY hits DESC  LIMIT 1000";
if ( ! $result = $db->query( $sql ) )
{
	die( 'There was an error running the query [' . $db->error . ']' );
}// end if

while ( $row = $result->fetch_assoc() )
{
	/*
	`webkit2png --ignore-ssl-check -F -W 1000 \
--js='webkit2png.stop();( function() {function callback() {gigaom_layout_test.init(true);jQuery("#comments-list,#hidden-sidebar,#sidebar,.gigaom-layout-test-panel,gigaom-layout-test-panel-json,#add,#ade,#adf").remove();webkit2png.start();}var s = document.createElement( "script" );s.src = "https://localhost/layout-test.js";if ( s.addEventListener ) {s.addEventListener( "load", callback, false );} else if( s.readyState ) {s.onreadystatechange = callback;}document.body.appendChild( s );} )();' {$row['url']}`;
	*/

	`webkit2png --ignore-ssl-check -F --width {$args['width']} -z {$zoom} {$row['url']}?gigaom-theme-preview`;

	$sql = "UPDATE wp_go_layout_screenshot SET
		`timestamp` = NOW()
		WHERE url = ?
		  AND strategy = 'control'
		  AND `timestamp` = '0000-00-00 00:00:00'";
	$stmt = $db->prepare( $sql );

	$stmt->bind_param( 's',
		$row['url']
	);

	$ok = $stmt->execute();

	if ( ! $ok )
	{
		die( 'There was an error running the query [' . $db->error . ']' );
	}//end if
	$stmt->close();
}//end while
