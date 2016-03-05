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
    var cls=false;
    $("#leftgn_close").click(function(event) {
        $("#leftgn").hide();
        $("#leftgn_h").show();
        cls=true;
    });
    $("#leftgn_h").click(function(event){
        $("#leftgn").show();
        $("#leftgn_h").hide();
        cls=false;
    });
	$(".bars-list-a").click(function(event) {
		var name=$(this).attr('name');
		var v=$("#"+name).offset().top;
		// $(window).scrollTop((v-72))
        var explorer =navigator.userAgent;
        if(!explorer.match(/Mobile/i)){
            $('html,body').animate({scrollTop:(v-72)},'fast');
        }else{
            $('html,body').animate({scrollTop:(v)},'fast');
        }
	});
	$(window,document).scroll(function(event) {
		var s=$(this).scrollTop();
        
        //console.log('s='+s+', '+'b='+b+', m='+m+', l='+l+', c='+c+', y='+y);
        // console.log($("#myjs").scrollTop());
        var explorer =navigator.userAgent;
        if(!explorer.match(/Mobile/i)){
            if (s>b) {
                $("#bars").addClass('bars-xf');
                $("#banner").css('margin-top', '53px');
                if(cls){
                    $("#leftgn_h").show();                
                }else{
                    $("#leftgn").show();
                }
            } else{
                $("#bars").removeClass('bars-xf');
                $("#banner").removeAttr('style');
                $("#leftgn").hide();
                $("#leftgn_h").hide();                
            }
        }
		
        
		// // console.log('s='+s+', '+'b='+b+', m='+m+', l='+l+', c='+c+', y='+y);
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