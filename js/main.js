$(function(){
	bars_xf();
	cgal_scroll();
	cgal_scroll_s();
	cgal_scroll_hover();
})

function bars_xf(){//导航栏悬浮
	var b=$("#bars").offset().top;
	var m=$("#myjs").offset().top;
	var l=$("#bqfl").offset().top;
	var c=$("#cgal").offset().top;
	var y=$("#yfzs").offset().top;
	var f=$("#footer").offset().top;
	$(".bars-list-a").click(function(event) {
		var name=$(this).attr('name');
		var v=$("#"+name).offset().top;
		$(window).scrollTop((v-72))
	});
	$(window,document).scroll(function(event) {
		var s=$(this).scrollTop();
		if (s>b) {
			$("#bars").addClass('bars-xf');
			$("#banner").css('margin-top', '53px');
		} else{
			$("#bars").removeClass('bars-xf');
			$("#banner").removeAttr('style');
			// 
		}
		// console.log('s='+s+', '+'b='+b+', m='+m+', l='+l+', c='+c+', y='+y);
		if (s<(m-73)||s>=f) {
			$(".bars-list a").removeClass('bars-list-a1');
		}
		if ((m-73)<=s && s<(l-73)) {
			$(".bars-list a").removeClass('bars-list-a1');
			$(".bars-list a[name='myjs']").addClass('bars-list-a1');
		}
		if ((l-73)<=s && s<(c-73)) {
			$(".bars-list a").removeClass('bars-list-a1');
			$(".bars-list a[name='bqfl']").addClass('bars-list-a1');
		}
		if ((c-73)<=s && s<(y-73)) {
			$(".bars-list a").removeClass('bars-list-a1');
			$(".bars-list a[name='cgal']").addClass('bars-list-a1');
		}
		if ((y-73)<=s && s<f) {
			$(".bars-list a").removeClass('bars-list-a1');
			$(".bars-list a[name='yfzs']").addClass('bars-list-a1');
		}
	});
}
var s_t='';
function cgal_scroll_s(){
	cgal_scroll_e();
	s_t=setInterval("cgal_scroll()",20);
}
function cgal_scroll_e(){
	clearInterval(s_t);
	s_t='';
}
function cgal_scroll(){
	var l=$(".cgal-con").position().left;
	var a=0;
	if (Math.abs(l)>=966) {
		a='0px';
	} else{
		a=(l-1)+'px';
	};
	$(".cgal-con").css('left', a);
}
function cgal_scroll_hover(){
	$(".cgal-w").hover(function() {
		cgal_scroll_e();
	}, function() {
		cgal_scroll_s();
	});
}