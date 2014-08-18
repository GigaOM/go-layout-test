SELECT a.*, b.* FROM 
(select count(1) complete_records, sum(hits) complete_hits from wp_go_layout_test WHEre `timestamp` <> '0000-00-00 00:00:00') a,
(select count(1) pending_records, sum(hits) pending_hits from wp_go_layout_test WHEre `timestamp` = '0000-00-00 00:00:00') b;
