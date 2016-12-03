/* 
	optimze.js
	优化选课网细节部分
	上栏，左边栏等

 */



//左边的滚动条
function set_left_scroll()
{
/* 	if (!inUrl("/edu/student/sdtMain.aspx"))
        return 0;
        
    
	frameset1 = jQuery("frameset")[0];
	frameset2 = jQuery("frameset",frameset1)[0];
	frameset2.outerHTML = '<frameset cols="140,*" frameborder="NO" border="0" framespacing="0"><frame src="sdtleft.aspx" name="leftFrame" frameborder="no" marginwidth="0" marginheight="0"><frame src="../newsboard/newsinside.aspx" name="main" frameborder="no" scrolling="auto" marginwidth="0" marginheight="0"></frameset>';
 */
 }
function optimize_sdtleft()
{
	

	if (!inUrl("/edu/student/sdtleft.aspx"))
		return 0;
    
    //增加查询绩点
    var score_line= jQuery("td[colspan=2]").slice(8,9).parent();
    var append_string = '<tr onmouseover="sbar(this)" onmouseout="cbar(this)" style=""><td><img src="../imgs/icon.menu.gif" width="25" height="15"></td><td class="menu"><a href="../StudentScore/StudentScoreQuery.aspx">查询绩点</a></td></tr><tr><td colspan="2"><img src="../imgs/leftline.gif" width="122" height="1"></td></tr>';
    score_line.after(jQuery(append_string));
        
    //分享到人人
    var last_line= jQuery("td[colspan=2]").slice(1,2).parent();
    var line_string = '<tr><td colspan="2"><img src="../imgs/leftline.gif" width="122" height="1"></td></tr>';
    var share_link = '<tr onmouseover="sbar(this)" onmouseout="cbar(this)"><td><img src="../imgs/icon.menu.gif" width="25" height="15"></td><td class="menu"><div style="position:relative;width:110px;"><a href="http://electsys.net/" target="_blank">我爱选课</a></div></td></tr>';
    last_line.after(jQuery(share_link + line_string));
    
    /*
    //可展开、折叠
	var toggle_links = jQuery("a[href=#]");
	var KB = {};
	var KB_name = "";
	for(x = 0; x < toggle_links.length; x++){
		KB_name = toggle_links.slice(x,x+1).attr("onclick").substr(10,3);
		KB[KB_name] = 0;
		toggle_links.slice(x,x+1).click(function(){
			var KB_name = jQuery(this).attr("onclick").substr(10,3);
			jQuery("div#" + KB_name + "Child").slideToggle("fast");
		});
	}
	//预先折叠几个。。。

	jQuery("div#KB2Child").slideToggle(0);
	jQuery("div#KB3Child").slideToggle(0);
	jQuery("div#KB4Child").slideToggle(0);
	jQuery("div#KB7Child").slideToggle(0);
	jQuery("div#KB5Child").slideToggle(0);
	*/
}

// CMCSA
function optimize_flattop_content(){

	if (!inUrl("/edu/include/flattop.htm"))
		return 0;
	if (localStorage["flattop_slide_cmcsa"] === undefined)
		localStorage["flattop_slide_cmcsa"] = 1;
	if(localStorage["flattop_slide_cmcsa"] == 1){
		var html = '<html>\n\t<head>\n\t\t<title>\u4e0a\u6d77\u4ea4\u901a\u5927\u5b66\u6559\u5b66\u4fe1\u606f\u670d\u52a1\u7f51</title>\n\t\t<meta http-equiv="Content-Type" content="text/html; charset=gb2312">\n\t\t<link href="inner.css" rel="stylesheet" type="text/css">\n\t\t<script type="text/javascript" language="javascript">\n\t\t    function CloseWindow() {\n\t\t        window.open("CloseWindows.aspx", "_self", "height=0, width=0");\n\t\t    }\n\t\t</script><style type="text/css"></style>\n\t</head>\n\t<body marginwidth="0" marginheight="0">\n\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0">\n\t\t\t<tbody><tr>\n\t\t\t\t<td bgcolor="#203139"><table width="860" border="0" cellspacing="0" cellpadding="0">\n\t\t\t\t\t\t<tbody><tr>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col1.jpg" width="650" height="28"></td>\n\t\t\t\t\t\t\t<td width="100%" align="middle" bgcolor="#ffae00"><img src="../imgs/iconhome.gif" width="11" height="10">\n\t\t\t\t\t\t\t\t<a href="../index.aspx" target="_top" class="white">\u8fd4\u56de\u9996\u9875</a>&nbsp;&nbsp;&nbsp;<img src="../imgs/logout.gif" width="11" height="9">\n\t\t\t\t\t\t\t\t<a href="../logOut.aspx" target="_top" class="white">\u6ce8\u9500\u672c\u6b21\u767b\u5f55</a></td>\n\t\t\t\t\t\t\t<td><img src="../imgs/col1_2.jpg" width="13" height="25"></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody></table>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td background="http://cmcsa.org/upload/in.topbg.jpg"><table width="760" border="0" cellspacing="0" cellpadding="0">\n\t\t\t\t\t\t<tbody><tr>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col2-1.jpg" width="120" height="85"></td>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col2-2.jpg" width="663" height="85"></td>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col2-3.jpg" width="164" height="85"></td>\n\t\t\t\t\t\t</tr>\n                  </tbody></table><img src="http://cmcsa.org/upload/qrcode.png" style="position: absolute;top: 0px;left: 811px;width: auto;height: 113px;">\n                  </td></tr>\n\t\t\t<tr>\n\t\t\t\t<td><table width="100%" border="0" cellspacing="0" cellpadding="0">\n\t\t\t\t\t\t<tbody><tr>\n\t\t\t\t\t\t\t<td width="15%" height="9" background="../imgs/col3orangebg.gif"></td>\n\t\t\t\t\t\t\t<td width="85%" height="9" background="../imgs/col3bluebg.gif"></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody></table>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><img src="../imgs/lefttop1.jpg" width="130" height="6"></td>\n\t\t\t</tr>\n\t\t</tbody></table>\n\t\n\n</body></html>';
		jQuery('html').html(html);
	}
}

function optimize_flattop(){
	if (!inUrl("/edu/student/sdtMain.aspx"))
		return 0;
	var div_pos = 80;
	if (localStorage["flattop_slide_cmcsa"] === undefined)
		localStorage["flattop_slide_cmcsa"] = 1;
	if(localStorage["flattop_slide_cmcsa"] == 1){  
		jQuery("frameset").slice(0,1).attr("rows", "120,*");
		div_pos += 15;
	}
	
    var optimize_flattop_fixed_div = jQuery('<div id="optimize_flattop_fixed_div" style="color:white;font-size:12px;margin:0px;width:100px;height:25px;z-index: 999;position:fixed;line-height:25px;top:'+String(div_pos)+'px;right:0px;text-align:center;background-color:#ffae00;cursor:pointer;">隐藏/显示推荐</div>');
    jQuery("html").append(optimize_flattop_fixed_div);

    var optimize_bottom_fixed_div = jQuery('<div id="optimize_bottom_fixed_div" style="color:black;font-size:12px;margin:0px;z-index: 999;position:fixed;bottom:0px;right:20px;a:visited">Optimized by electsys++ - <a href="https://github.com/laohyx/electsys" target="_blank">electsys++ Project</a> - Firefox version - <a href="https://github.com/hczhcz/electsys" target="_blank">electsys++ Project</a></div>');
    jQuery("html").append(optimize_bottom_fixed_div);
    jQuery("#optimize_bottom_fixed_div").click(function(){
        jQuery(this).hide();
    });
    
	jQuery("#optimize_flattop_fixed_div").click(function(){
        localStorage["flattop_slide_cmcsa"] *= -1;
        window.location.reload();
    });
}

function flattopToggle(){
    theta = 0;
    if(localStorage["flattop_slide_cmcsa"] == 1)
    {
		jQuery("frameset").slice(0,1).attr("rows", "120,*");
		var html = '<html>\n\t<head>\n\t\t<title>\u4e0a\u6d77\u4ea4\u901a\u5927\u5b66\u6559\u5b66\u4fe1\u606f\u670d\u52a1\u7f51</title>\n\t\t<meta http-equiv="Content-Type" content="text/html; charset=gb2312">\n\t\t<link href="inner.css" rel="stylesheet" type="text/css">\n\t\t<script type="text/javascript" language="javascript">\n\t\t    function CloseWindow() {\n\t\t        window.open("CloseWindows.aspx", "_self", "height=0, width=0");\n\t\t    }\n\t\t</script><style type="text/css"></style>\n\t</head>\n\t<body marginwidth="0" marginheight="0">\n\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0">\n\t\t\t<tbody><tr>\n\t\t\t\t<td bgcolor="#203139"><table width="860" border="0" cellspacing="0" cellpadding="0">\n\t\t\t\t\t\t<tbody><tr>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col1.jpg" width="650" height="28"></td>\n\t\t\t\t\t\t\t<td width="100%" align="middle" bgcolor="#ffae00"><img src="../imgs/iconhome.gif" width="11" height="10">\n\t\t\t\t\t\t\t\t<a href="../index.aspx" target="_top" class="white">\u8fd4\u56de\u9996\u9875</a>&nbsp;&nbsp;&nbsp;<img src="../imgs/logout.gif" width="11" height="9">\n\t\t\t\t\t\t\t\t<a href="../logOut.aspx" target="_top" class="white">\u6ce8\u9500\u672c\u6b21\u767b\u5f55</a></td>\n\t\t\t\t\t\t\t<td><img src="../imgs/col1_2.jpg" width="13" height="25"></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody></table>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td background="http://cmcsa.org/upload/in.topbg.jpg"><table width="760" border="0" cellspacing="0" cellpadding="0">\n\t\t\t\t\t\t<tbody><tr>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col2-1.jpg" width="120" height="85"></td>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col2-2.jpg" width="663" height="85"></td>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col2-3.jpg" width="164" height="85"></td>\n\t\t\t\t\t\t</tr>\n                  </tbody></table><img src="http://cmcsa.org/upload/qrcode.png" style="position: absolute;top: 0px;left: 811px;width: auto;height: 113px;">\n                  </td></tr>\n\t\t\t<tr>\n\t\t\t\t<td><table width="100%" border="0" cellspacing="0" cellpadding="0">\n\t\t\t\t\t\t<tbody><tr>\n\t\t\t\t\t\t\t<td width="15%" height="9" background="../imgs/col3orangebg.gif"></td>\n\t\t\t\t\t\t\t<td width="85%" height="9" background="../imgs/col3bluebg.gif"></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody></table>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><img src="../imgs/lefttop1.jpg" width="130" height="6"></td>\n\t\t\t</tr>\n\t\t</tbody></table>\n\t\n\n</body></html>';
		jQuery('html').html(html);
    }else{
        jQuery("frameset").slice(0,1).attr("rows", "105,*");
		var html = '\n<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"\n"http://www.w3.org/TR/html4/loose.dtd">\n<html>\n\t<head>\n\t\t<title>\u4e0a\u6d77\u4ea4\u901a\u5927\u5b66\u6559\u5b66\u4fe1\u606f\u670d\u52a1\u7f51</title>\n\t\t<meta http-equiv="Content-Type" content="text/html; charset=gb2312">\n\t\t<link href="inner.css" rel="stylesheet" type="text/css">\n\t\t<script type="text/javascript" language="javascript">\n\t\t    function CloseWindow() {\n\t\t        window.open("CloseWindows.aspx", "_self", "height=0, width=0");\n\t\t    }\n\t\t</script>\n\t</head>\n\t<body >\n\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0">\n\t\t\t<tr>\n\t\t\t\t<td bgcolor="#203139"><table width="760" border="0" cellspacing="0" cellpadding="0">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col1.jpg" width="513" height="25"></td>\n\t\t\t\t\t\t\t<td width="100%" align="middle" bgcolor="#ffae00"><img src="../imgs/iconhome.gif" width="11"height="10">\n\t\t\t\t\t\t\t\t<a href="../index.aspx" target="_top" class="white">\u8fd4\u56de\u9996\u9875</a>&nbsp;&nbsp;&nbsp;<img src="../imgs/logout.gif" width="11" height="9">\n\t\t\t\t\t\t\t\t<a href="../logOut.aspx" target="_top" class="white">\u6ce8\u9500\u672c\u6b21\u767b\u5f55</a></td>\n\t\t\t\t\t\t\t<td><img src="../imgs/col1_2.jpg" width="13" height="25"></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td background="../imgs/in.topbg.jpg"><table width="760" border="0" cellspacing="0" cellpadding="0">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col2-1.jpg" width="96" height="65"></td>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col2-2.jpg" width="520" height="65"></td>\n\t\t\t\t\t\t\t<td><img src="../imgs/in.col2-3.jpg" width="144" height="65"></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><table width="100%" border="0" cellspacing="0" cellpadding="0">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width="15%" height="9" background="../imgs/col3orangebg.gif"></td>\n\t\t\t\t\t\t\t<td width="85%" height="9" background="../imgs/col3bluebg.gif"></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><img src="../imgs/lefttop1.jpg" width="130" height="6"></td>\n\t\t\t</tr>\n\t\t</table>\n\t</body>\n</html>\n\n';
		jQuery('html').html(html);
    }

}
// END OF CMCSA
/*
function optimize_flattop(){
	if (!inUrl("/edu/student/sdtMain.aspx"))
		return 0;
    var optimize_flattop_fixed_div = jQuery('<div id="optimize_flattop_fixed_div" style="color:white;font-size:12px;margin:0px;width:100px;height:25px;z-index: 999;position:fixed;line-height:25px;top:80px;right:0px;text-align:center;background-color:#ffae00;cursor:pointer;">展开/收起上栏</div>');
    jQuery("html").append(optimize_flattop_fixed_div);

    var optimize_bottom_fixed_div = jQuery('<div id="optimize_bottom_fixed_div" style="color:black;font-size:12px;margin:0px;z-index: 999;position:fixed;bottom:0px;right:20px;a:visited">Optimized by electsys++ ' + localStorage['extension_version'] + ' - <a href="https://github.com/laohyx/electsys" target="_blank">electsys++ Project</a></div>');
    jQuery("html").append(optimize_bottom_fixed_div);
    jQuery("#optimize_bottom_fixed_div").click(function(){
        jQuery(this).hide();
    });
    
    if (localStorage["flattop_slide"] < 0){
		jQuery("frameset").slice(0,1).attr("rows", "25,*");
        jQuery("#optimize_flattop_fixed_div").css("top","0");
    }else{
		localStorage["flattop_slide"] = 1;
    }
   	    jQuery("#optimize_flattop_fixed_div").click(function(){
        flattopToggle(500);
        localStorage["flattop_slide"] *= -1;
    });
}

function flattopToggle(time){
    theta = 0;
    if(jQuery("frameset").slice(0,1).attr("rows") == "105,*")
    {  
        slide_id = setInterval("slide_flattop(-1);",time / 100);
    }else{
        slide_id = setInterval("slide_flattop(1);",time / 100);
    }

}
function slide_flattop(height_direction){
    delta_h = Math.sin((theta - 0.5) * Math.PI) * (40 * height_direction) + 65;
    theta += 0.01;
    jQuery("#optimize_flattop_fixed_div").css("top",delta_h - 25);
    jQuery("frameset").slice(0,1).attr("rows", delta_h + ",*");
    if(theta > 0.98)
    {
        jQuery("#optimize_flattop_fixed_div").css("top",40 + 40 * height_direction);
        jQuery("frameset").slice(0,1).attr("rows", 65 + 40 * height_direction + ",*");
        clearInterval(slide_id);
    }
}
*/
// 快速评教，不用蛋疼点下一步了~
function fast_eval_index () {
	if (!inUrl("/edu/N10_pingjiao/N4_pingjiaoXKLB.aspx"))
		return;
	var eval_table = jQuery("table").slice(3,4).find("table");
	var trs = eval_table.find("tr");
	for (var i = 1; i < trs.length; i++) {
		trs.slice(i,i+1).children().slice(2,3).css("width","120px");
		var alink = trs.slice(i,i+1).children().slice(2,3).children().clone(true);

		alink.text("快速评教");
		alink.css("margin-left","1em");
		alink.attr("href",alink.attr("href") + "#laohyx_fast_eval");
		trs.slice(i,i+1).children().slice(2,3).append(alink);
	};
}

function fast_eval_process () {
	if(!inUrl("#laohyx_fast_eval"))
		return;
    if (!inUrl("/edu/N10_pingjiao/N4_pingjiao.aspx"))
		return;
	//增加分数联动功能
	jQuery("#sBoundControl_1_1").parent().css("width","120px");
	jQuery("#sBoundControl_1_1").parent().append('<input type="checkbox" id="fast_eval_interlock" checked="checked"/><lable for="fast_eval_interlock">分数联动</lable>');

	
	document.intervalID = setInterval(function(){
		if(jQuery('.ui-label').text() == "100%"){
			clearInterval(document.intervalID);
			jQuery("#sText_1_1_railElement").click(function(){
				jQuery("#sBoundControl_1_1").trigger("change");
			});
			jQuery("#sBoundControl_1_1").change(function(){
				var first_eval = jQuery(this).val();
				fast_eval_interlock(first_eval);
			});
		}
		
		//显示全部表单
		jQuery("input").removeAttr("disabled");
		areaSelector = "#t1,#t2,#t3";
		areas = jQuery(areaSelector);
		heads = areas.prev();
		areas.children("tbody").children("tr").show();
		heads.show();
		areas.show();
		jQuery(".ui-progress").animate({width: '100%'}, 
		{duration: 500,easing: 'swing'});
		jQuery(".ui-progress").children().text("100%");
	},300);	
}

function fast_eval_interlock(eval_num){
	console.log(jQuery("#fast_eval_interlock").attr("checked"));
	if(jQuery("#fast_eval_interlock").attr("checked") != "checked")
		return;
	var eval1 = eval_num;
	var eval2 = Math.round(eval1 / 10);
	jQuery("#sText_1_2").val(eval1);
	jQuery("#sText_1_3").val(eval1);
	jQuery("#sText_2_1").val(eval2);
	jQuery("#sText_2_2").val(eval2);
	jQuery("#sText_2_3").val(eval2);
	jQuery("#sText_2_4").val(eval2);
	jQuery("#sText_2_5").val(eval2);
	jQuery("#sText_2_6").val(eval2);
	jQuery("#sText_2_7").val(eval2);
	jQuery("#sText_2_8").val(eval2);
	jQuery("#sText_2_9").val(eval2);
	jQuery("#sText_2_10").val(eval2);
	
	jQuery("#sBoundControl_1_2").val(eval1);
	jQuery("#sBoundControl_1_3").val(eval1);
	jQuery("#sBoundControl_2_1").val(eval2);
	jQuery("#sBoundControl_2_2").val(eval2);
	jQuery("#sBoundControl_2_3").val(eval2);
	jQuery("#sBoundControl_2_4").val(eval2);
	jQuery("#sBoundControl_2_5").val(eval2);
	jQuery("#sBoundControl_2_6").val(eval2);
	jQuery("#sBoundControl_2_7").val(eval2);
	jQuery("#sBoundControl_2_8").val(eval2);
	jQuery("#sBoundControl_2_9").val(eval2);
	jQuery("#sBoundControl_2_10").val(eval2);
	var width1 = Number(jQuery("#sText_1_2_handleImage").parent().parent().css("width").slice(0,-2));
	var width2 = Number(jQuery("#sText_2_1_handleImage").parent().parent().css("width").slice(0,-2));
	jQuery("#sText_1_2_handleImage").parent().css("left",eval1 / 100 * width1 + "px");
	jQuery("#sText_1_3_handleImage").parent().css("left",eval1 / 100 * width1 + "px");
	jQuery("#sText_2_1_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_2_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_3_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_4_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_5_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_6_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_7_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_8_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_9_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_10_handleImage").parent().css("left",eval2 / 10 * width2 + "px");



}



// 快速评教 for 期中
function fast_eval_midterm_index () {
	if (!inUrl("/edu/N10_pingjiao/Midterm_pingjiaoXKLB.aspx"))
		return;
    console.log("midterm");
	var eval_table = jQuery("table").slice(3,4).find("table");
	var trs = eval_table.find("tr");
	for (var i = 1; i < trs.length; i++) {
		trs.slice(i,i+1).children().slice(2,3).css("width","120px");
		var alink = trs.slice(i,i+1).children().slice(2,3).children().clone(true);

		alink.text("快速评教");
		alink.css("margin-left","1em");
		alink.attr("href",alink.attr("href") + "#laohyx_fast_eval");
		trs.slice(i,i+1).children().slice(2,3).append(alink);
	};
}


function fast_eval_midterm_process () {
	if(!inUrl("#laohyx_fast_eval"))
		return;
    if (!inUrl("/edu/N10_pingjiao/Midterm_pingjiao.aspx"))
		return;

	//增加分数联动功能
	jQuery("#sBoundControl_2_1").parent().css("width","120px");
	jQuery("#sBoundControl_2_1").parent().append('<input type="checkbox" id="fast_eval_interlock" checked="checked"/><lable for="fast_eval_interlock">分数联动</lable>');
    
	console.log("midterm_process");
	
    document.intervalID = setInterval(function(){
        console.log("not readey");
		if(jQuery("#sText_2_1_railElement").length == 1){
            clearInterval(document.intervalID);
            console.log("clear");
			jQuery("#sText_2_1_railElement").click(function(){
                jQuery("#sBoundControl_2_1").trigger("change");
            });

            jQuery("#sBoundControl_2_1").change(function(){
                var first_eval = jQuery(this).val();
                fast_eval_midterm_interlock(first_eval);
            });

		}
		
    },300);	

    
    }


function fast_eval_midterm_interlock(eval_num){
	console.log(jQuery("#fast_eval_interlock").attr("checked"));
	if(jQuery("#fast_eval_interlock").attr("checked") != "checked")
		return;
	var eval1 = eval_num;
	var eval2 = Math.round(eval1);
	jQuery("#sText_2_2").val(eval2);
	jQuery("#sText_2_3").val(eval2);
	jQuery("#sText_2_4").val(eval2);
	jQuery("#sText_2_5").val(eval2);
	jQuery("#sText_2_6").val(eval2);
	jQuery("#sText_2_7").val(eval2);
	jQuery("#sText_2_8").val(eval2);
	jQuery("#sText_2_9").val(eval2);
	jQuery("#sText_2_10").val(eval2);
	
	jQuery("#sBoundControl_2_2").val(eval2);
	jQuery("#sBoundControl_2_3").val(eval2);
	jQuery("#sBoundControl_2_4").val(eval2);
	jQuery("#sBoundControl_2_5").val(eval2);
	jQuery("#sBoundControl_2_6").val(eval2);
	jQuery("#sBoundControl_2_7").val(eval2);
	jQuery("#sBoundControl_2_8").val(eval2);
	jQuery("#sBoundControl_2_9").val(eval2);
	jQuery("#sBoundControl_2_10").val(eval2);
	var width2 = Number(jQuery("#sText_2_1_handleImage").parent().parent().css("width").slice(0,-2));

	jQuery("#sText_2_2_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_3_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_4_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_5_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_6_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_7_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_8_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_9_handleImage").parent().css("left",eval2 / 10 * width2 + "px");
	jQuery("#sText_2_10_handleImage").parent().css("left",eval2 / 10 * width2 + "px");



}


