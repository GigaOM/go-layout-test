SELECT
	*,
	(ad_impressions - current_impressions) `change`,
	concat( round( ( (ad_impressions - current_impressions) / current_impressions ) * 100, 2), '%') percent_change
FROM
	(
		SELECT
			strategy,
			IF ( headers_blocking, 'Blocking headers', 'Not blocking headers' ) headers_blocking,
			IF ( blockquotes_blocking, 'Blocking blockquotes', 'Not blocking blockquotes' ) blockquotes_blocking,
			sum( ( 1 + adb + adc + ad_300x600 ) * hits ) ad_impressions,
			sum( hits * 4 ) current_impressions
		FROM
			wp_go_layout_test
		WHERE
			`timestamp` <> '0000-00-00 00:00:00'
		GROUP BY
			strategy,
			headers_blocking,
			blockquotes_blocking
	) t