$(function(){
	bars_xf();
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
	$(window).scroll(function(event) {
		var s=$(this).scrollTop();
		if (s>b) {
			$("#bars").addClass('bars-xf');
			$("#banner").css('margin-top', '53px');
		} else{
			$("#bars").removeClass('bars-xf');
			$("#banner").removeAttr('style');
			// 
		}
		console.log('s='+s+', '+'b='+b+', m='+m+', l='+l);
		if (s<(m-73)||s>=f) {
			$(".bars-list a").removeClass('bars-list-a1');
		}
		if ((m-73)<=s && s<l) {
			$(".bars-list a").removeClass('bars-list-a1');
			$(".bars-list a[name='myjs']").addClass('bars-list-a1');
		}
		if ((l-73)<=s && s<c) {
			$(".bars-list a").removeClass('bars-list-a1');
			$(".bars-list a[name='bqfl']").addClass('bars-list-a1');
		}
		if ((c-73)<=s && s<y) {
			$(".bars-list a").removeClass('bars-list-a1');
			$(".bars-list a[name='cgal']").addClass('bars-list-a1');
		}
		if ((y-73)<=s && s<f) {
			$(".bars-list a").removeClass('bars-list-a1');
			$(".bars-list a[name='yfzs']").addClass('bars-list-a1');
		}
	});
}