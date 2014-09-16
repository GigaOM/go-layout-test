INSERT INTO wp_go_layout_test (url, hits, strategy, `timestamp`)
SELECT t.url, SUM(t.views) hits, 'proposed', '0000-00-00 00:00:00' FROM (
	SELECT DISTINCT IF( LOCATE( '?', url ), SUBSTRING( url, 1, LOCATE( '?', url ) - 1 ), url ) url, views
	FROM wp_go_content_stats
	WHERE `date` BETWEEN '2014-08-01' AND '2014-08-31'
	AND property = 'gigaom'
	AND url REGEXP '.*gigaom.com/[0-9]{4}/[0-9]{2}/[0-9]{2}/.*'
	AND url NOT LIKE '%translate.googleusercontent.com%'
	AND url NOT LIKE '%webcache.googleusercontent.com%'
	AND url NOT LIKE 'http://(NOT SET)%'
	AND url NOT LIKE '%translate.ru%'
) t
GROUP BY t.url
;

INSERT INTO wp_go_layout_test (url, hits, strategy, `timestamp`)
SELECT t.url, SUM(t.views) hits, 'narrower', '0000-00-00 00:00:00' FROM (
	SELECT DISTINCT IF( LOCATE( '?', url ), SUBSTRING( url, 1, LOCATE( '?', url ) - 1 ), url ) url, views
	FROM wp_go_content_stats
	WHERE `date` BETWEEN '2014-08-01' AND '2014-08-31'
	AND property = 'gigaom'
	AND url REGEXP '.*gigaom.com/[0-9]{4}/[0-9]{2}/[0-9]{2}/.*'
	AND url NOT LIKE '%translate.googleusercontent.com%'
	AND url NOT LIKE '%webcache.googleusercontent.com%'
	AND url NOT LIKE 'http://(NOT SET)%'
	AND url NOT LIKE '%translate.ru%'
) t
GROUP BY t.url
;

INSERT INTO wp_go_layout_test (url, hits, strategy, `timestamp`)
SELECT t.url, SUM(t.views) hits, 'font_size_change', '0000-00-00 00:00:00' FROM (
	SELECT DISTINCT IF( LOCATE( '?', url ), SUBSTRING( url, 1, LOCATE( '?', url ) - 1 ), url ) url, views
	FROM wp_go_content_stats
	WHERE `date` BETWEEN '2014-08-01' AND '2014-08-31'
	AND property = 'gigaom'
	AND url REGEXP '.*gigaom.com/[0-9]{4}/[0-9]{2}/[0-9]{2}/.*'
	AND url NOT LIKE '%translate.googleusercontent.com%'
	AND url NOT LIKE '%webcache.googleusercontent.com%'
	AND url NOT LIKE 'http://(NOT SET)%'
	AND url NOT LIKE '%translate.ru%'
) t
GROUP BY t.url
;

INSERT INTO wp_go_layout_test (url, hits, strategy, `timestamp`)
SELECT t.url, SUM(t.views) hits, 'font_size_change_22', '0000-00-00 00:00:00' FROM (
	SELECT DISTINCT IF( LOCATE( '?', url ), SUBSTRING( url, 1, LOCATE( '?', url ) - 1 ), url ) url, views
	FROM wp_go_content_stats
	WHERE `date` BETWEEN '2014-08-01' AND '2014-08-31'
	AND property = 'gigaom'
	AND url REGEXP '.*gigaom.com/[0-9]{4}/[0-9]{2}/[0-9]{2}/.*'
	AND url NOT LIKE '%translate.googleusercontent.com%'
	AND url NOT LIKE '%webcache.googleusercontent.com%'
	AND url NOT LIKE 'http://(NOT SET)%'
	AND url NOT LIKE '%translate.ru%'
) t
GROUP BY t.url
;

INSERT INTO wp_go_layout_test (url, hits, strategy, `timestamp`)
SELECT t.url, SUM(t.views) hits, 'block_ends', '0000-00-00 00:00:00' FROM (
	SELECT DISTINCT IF( LOCATE( '?', url ), SUBSTRING( url, 1, LOCATE( '?', url ) - 1 ), url ) url, views
	FROM wp_go_content_stats
	WHERE `date` BETWEEN '2014-08-01' AND '2014-08-31'
	AND property = 'gigaom'
	AND url REGEXP '.*gigaom.com/[0-9]{4}/[0-9]{2}/[0-9]{2}/.*'
	AND url NOT LIKE '%translate.googleusercontent.com%'
	AND url NOT LIKE '%webcache.googleusercontent.com%'
	AND url NOT LIKE 'http://(NOT SET)%'
	AND url NOT LIKE '%translate.ru%'
) t
GROUP BY t.url
;

INSERT INTO wp_go_layout_test (url, hits, strategy, `timestamp`)
SELECT t.url, SUM(t.views) hits, 'no_tower', '0000-00-00 00:00:00' FROM (
	SELECT DISTINCT IF( LOCATE( '?', url ), SUBSTRING( url, 1, LOCATE( '?', url ) - 1 ), url ) url, views
	FROM wp_go_content_stats
	WHERE `date` BETWEEN '2014-08-01' AND '2014-08-31'
	AND property = 'gigaom'
	AND url REGEXP '.*gigaom.com/[0-9]{4}/[0-9]{2}/[0-9]{2}/.*'
	AND url NOT LIKE '%translate.googleusercontent.com%'
	AND url NOT LIKE '%webcache.googleusercontent.com%'
	AND url NOT LIKE 'http://(NOT SET)%'
	AND url NOT LIKE '%translate.ru%'
) t
GROUP BY t.url
;

INSERT INTO wp_go_layout_test (url, hits, strategy, `timestamp`)
SELECT t.url, SUM(t.views) hits, 'control', '0000-00-00 00:00:00' FROM (
	SELECT DISTINCT IF( LOCATE( '?', url ), SUBSTRING( url, 1, LOCATE( '?', url ) - 1 ), url ) url, views
	FROM wp_go_content_stats
	WHERE `date` BETWEEN '2014-08-01' AND '2014-08-31'
	AND property = 'gigaom'
	AND url REGEXP '.*gigaom.com/[0-9]{4}/[0-9]{2}/[0-9]{2}/.*'
	AND url NOT LIKE '%translate.googleusercontent.com%'
	AND url NOT LIKE '%webcache.googleusercontent.com%'
	AND url NOT LIKE 'http://(NOT SET)%'
	AND url NOT LIKE '%translate.ru%'
) t
GROUP BY t.url
;
