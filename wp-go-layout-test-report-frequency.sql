SELECT 
	strategy, 
	adb, 
	adc, 
	ad_300x600, 
	SUM(hits) hits, 
	COUNT(hits) posts,
	b.*,
	SUM(hits)/total_hits percent_of_hits,
	COUNT(hits)/total_posts percent_of_posts
	FROM wp_go_layout_test,
		( select sum(hits) total_hits, count(1) total_posts from wp_go_layout_test where strategy="control" AND timestamp <> '0000-00-00 00:00:00' ) b
WHERE strategy='control' 
	AND timestamp <> '0000-00-00 00:00:00' 
GROUP BY adb, adc, ad_300x600 
ORDER BY hits DESC;
