SELECT
	strategy,
	headers_blocking,
	blockquotes_blocking,
	SUM( ad_impressions ) ad_impressions
FROM
	(
		SELECT
			strategy,
			IF ( headers_blocking, 'Blocking headers', 'Not blocking headers' ) headers_blocking,
			IF ( blockquotes_blocking, 'Blocking blockquotes', 'Not blocking blockquotes' ) blockquotes_blocking,
			( 1 + adb + adc + ad_300x600 ) * hits ad_impressions
		FROM
			wp_go_layout_test
		WHERE
			`timestamp` <> '0000-00-00 00:00:00'
			AND headers_blocking = 1
			AND blockquotes_blocking = 1
		GROUP BY
			strategy
		UNION
		SELECT
			strategy,
			IF ( headers_blocking, 'Blocking headers', 'Not blocking headers' ) headers_blocking,
			IF ( blockquotes_blocking, 'Blocking blockquotes', 'Not blocking blockquotes' ) blockquotes_blocking,
			( 1 + adb + adc + ad_300x600 ) * hits ad_impressions
		FROM
			wp_go_layout_test
		WHERE
			`timestamp` <> '0000-00-00 00:00:00'
			AND headers_blocking = 1
			AND blockquotes_blocking = 0
		GROUP BY
			strategy
		UNION
		SELECT
			strategy,
			IF ( headers_blocking, 'Blocking headers', 'Not blocking headers' ) headers_blocking,
			IF ( blockquotes_blocking, 'Blocking blockquotes', 'Not blocking blockquotes' ) blockquotes_blocking,
			( 1 + adb + adc + ad_300x600 ) * hits ad_impressions
		FROM
			wp_go_layout_test
		WHERE
			`timestamp` <> '0000-00-00 00:00:00'
			AND headers_blocking = 0
			AND blockquotes_blocking = 1
		GROUP BY
			strategy
		UNION
		SELECT
			strategy,
			IF ( headers_blocking, 'Blocking headers', 'Not blocking headers' ) headers_blocking,
			IF ( blockquotes_blocking, 'Blocking blockquotes', 'Not blocking blockquotes' ) blockquotes_blocking,
			( 1 + adb + adc + ad_300x600 ) * hits ad_impressions
		FROM
			wp_go_layout_test
		WHERE
			`timestamp` <> '0000-00-00 00:00:00'
			AND headers_blocking = 0
			AND blockquotes_blocking = 0
		GROUP BY
			strategy
	) t
GROUP BY
	strategy,
	headers_blocking,
	blockquotes_blocking;