SELECT 
	format( a.complete_hits / c.total_hits, 3 ) percentage_complete, 
	format( a.complete_hits, 0 ) complete_hits,
	format( b.pending_hits, 0 ) pending_hits, 
	format( c.total_hits, 0 ) total_hits,

	format( a.complete_records, 0 ) complete_records,
	format( b.pending_records, 0 ) pending_records, 
	format( c.total_records, 0 ) total_records
FROM 
(select count(1) complete_records, sum(hits) complete_hits from wp_go_layout_test WHERE `timestamp` <> '0000-00-00 00:00:00') a,
(select count(1) pending_records, sum(hits) pending_hits from wp_go_layout_test WHERE `timestamp` = '0000-00-00 00:00:00') b,
(select count(1) total_records, sum(hits) total_hits from wp_go_layout_test) c;
