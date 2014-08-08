INSERT INTO wp_go_layout_test (url, hits, strategy, `timestamp`, headers_blocking, blockquotes_blocking)
SELECT t.url, SUM(t.views) hits, 'ordered', '0000-00-00 00:00:00', 1, 1 FROM (
	SELECT DISTINCT IF( LOCATE( '?', url ), SUBSTRING( url, 1, LOCATE( '?', url ) - 1 ), url ) url, views
	FROM wp_go_content_stats
	WHERE `date` = '2014-08-05'
	AND property = 'gigaom'
	AND url REGEXP '.*gigaom.com/[0-9]{4}/[0-9]{2}/[0-9]{2}/.*'
	AND url NOT LIKE '%translate.googleusercontent.com%'
	AND url NOT LIKE '%webcache.googleusercontent.com%'
	AND url NOT LIKE 'http://(NOT SET)%'
	AND url NOT LIKE '%translate.ru%'
) t
GROUP BY t.url
;

INSERT INTO wp_go_layout_test (url, hits, strategy, `timestamp`, headers_blocking, blockquotes_blocking)
SELECT t.url, SUM(t.views) hits, 'ordered', '0000-00-00 00:00:00', 1, 0 FROM (
	SELECT DISTINCT IF( LOCATE( '?', url ), SUBSTRING( url, 1, LOCATE( '?', url ) - 1 ), url ) url, views
	FROM wp_go_content_stats
	WHERE `date` = '2014-08-05'
	AND property = 'gigaom'
	AND url REGEXP '.*gigaom.com/[0-9]{4}/[0-9]{2}/[0-9]{2}/.*'
	AND url NOT LIKE '%translate.googleusercontent.com%'
	AND url NOT LIKE '%webcache.googleusercontent.com%'
	AND url NOT LIKE 'http://(NOT SET)%'
	AND url NOT LIKE '%translate.ru%'
) t
GROUP BY t.url
;

INSERT INTO wp_go_layout_test (url, hits, strategy, `timestamp`, headers_blocking, blockquotes_blocking)
SELECT t.url, SUM(t.views) hits, 'ordered', '0000-00-00 00:00:00', 0, 1 FROM (
	SELECT DISTINCT IF( LOCATE( '?', url ), SUBSTRING( url, 1, LOCATE( '?', url ) - 1 ), url ) url, views
	FROM wp_go_content_stats
	WHERE `date` = '2014-08-05'
	AND property = 'gigaom'
	AND url REGEXP '.*gigaom.com/[0-9]{4}/[0-9]{2}/[0-9]{2}/.*'
	AND url NOT LIKE '%translate.googleusercontent.com%'
	AND url NOT LIKE '%webcache.googleusercontent.com%'
	AND url NOT LIKE 'http://(NOT SET)%'
	AND url NOT LIKE '%translate.ru%'
) t
GROUP BY t.url
;

INSERT INTO wp_go_layout_test (url, hits, strategy, `timestamp`, headers_blocking, blockquotes_blocking)
SELECT t.url, SUM(t.views) hits, 'ordered', '0000-00-00 00:00:00', 0, 0 FROM (
	SELECT DISTINCT IF( LOCATE( '?', url ), SUBSTRING( url, 1, LOCATE( '?', url ) - 1 ), url ) url, views
	FROM wp_go_content_stats
	WHERE `date` = '2014-08-05'
	AND property = 'gigaom'
	AND url REGEXP '.*gigaom.com/[0-9]{4}/[0-9]{2}/[0-9]{2}/.*'
	AND url NOT LIKE '%translate.googleusercontent.com%'
	AND url NOT LIKE '%webcache.googleusercontent.com%'
	AND url NOT LIKE 'http://(NOT SET)%'
	AND url NOT LIKE '%translate.ru%'
) t
GROUP BY t.url
;