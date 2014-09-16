SELECT
	strategy,
	SUM( adb * hits ) adb_count,
	SUM( adc * hits ) adc_count,
	SUM( ad_300x600 * hits ) ad_300x600_count,
	SUM( auto3 * hits ) auto3_count,
	SUM( autoe * hits ) autoe_count,
	SUM( newsletter * hits ) newsletter_count,
	SUM( `add` * hits ) add_count,
	SUM( ade * hits ) ade_count,
	SUM( adf * hits ) adf_count,
	SUM( adg * hits ) adg_count,
	SUM( hits ),
	SUM( IF( comments > 5, 1, 0 ) * hits ) ad_comment,
	SUM( IF( comments > 50, 1, 0 ) * hits ) ad_comment2
FROM
	wp_go_layout_test
WHERE
	`timestamp` <> '0000-00-00 00:00:00'
GROUP BY
	strategy;
