/*
 * AllInOne Banner - Carousel v3.4
 *
 * Copyright 2012-2013, LambertGroup
 * 
 */


(function(c){function I(b,a){a.responsive&&(newCss="",-1!=b.css("font-size").lastIndexOf("px")?(fontSize=b.css("font-size").substr(0,b.css("font-size").lastIndexOf("px")),newCss+="font-size:"+fontSize/(a.origWidth/a.width)+"px;"):-1!=b.css("font-size").lastIndexOf("em")&&(fontSize=b.css("font-size").substr(0,b.css("font-size").lastIndexOf("em")),newCss+="font-size:"+fontSize/(a.origWidth/a.width)+"em;"),-1!=b.css("line-height").lastIndexOf("px")?(lineHeight=b.css("line-height").substr(0,b.css("line-height").lastIndexOf("px")), newCss+="line-height:"+lineHeight/(a.origWidth/a.width)+"px;"):-1!=b.css("line-height").lastIndexOf("em")&&(lineHeight=b.css("line-height").substr(0,b.css("line-height").lastIndexOf("em")),newCss+="line-height:"+lineHeight/(a.origWidth/a.width)+"em;"),b.wrapInner('<div class="newFS" style="'+newCss+'" />'))}function G(b,a){nowx=(new Date).getTime();b.mouseOverBanner||b.effectIsRunning||!a.showCircleTimer||(b.ctx.clearRect(0,0,b.canvas.width,b.canvas.height),b.ctx.beginPath(),b.ctx.globalAlpha=a.behindCircleAlpha/ 100,b.ctx.arc(a.circleRadius+2*a.circleLineWidth,a.circleRadius+2*a.circleLineWidth,a.circleRadius,0,2*Math.PI,!1),b.ctx.lineWidth=a.circleLineWidth+2,b.ctx.strokeStyle=a.behindCircleColor,b.ctx.stroke(),b.ctx.beginPath(),b.ctx.globalAlpha=a.circleAlpha/100,b.ctx.arc(a.circleRadius+2*a.circleLineWidth,a.circleRadius+2*a.circleLineWidth,a.circleRadius,0,(b.timeElapsed+nowx-b.arcInitialTime)/1E3*2/a.autoPlay*Math.PI,!1),b.ctx.lineWidth=a.circleLineWidth,b.ctx.strokeStyle=a.circleColor,b.ctx.stroke())} function A(b,a,f,l,g,n,p,w,e){f.effectIsRunning=!0;a.showCircleTimer&&c(".mycanvas",n).css({display:"none"});var h,k,q,r;"true"==c(g[f.current_img_no]).attr("data-video")&&(c("#contentHolderUnit_"+f.current_img_no,n).html(c(g[f.current_img_no]).html()),a.responsive&&a.width!=a.origWidth&&F(c("#contentHolderUnit_"+f.current_img_no,n),0,a,f));c(l[f.current_img_no]).removeClass("bottomNavButtonON");f.current_img_no=C(f.current_img_no,b,p);"true"!=c(g[f.current_img_no]).attr("data-video")&&w.css("display", "none");c(l[f.current_img_no]).addClass("bottomNavButtonON");f.currentZ_index=100;f.currentImg=c("#contentHolderUnit_"+f.current_img_no,n);h=a.contentHolderUnitOrigWidth/(a.origWidth/a.width);k=a.contentHolderUnitOrigHeight/(a.origWidth/a.width);q=parseInt((a.width-a.contentHolderUnitOrigWidth/(a.origWidth/a.width))/2,10);r=parseInt(a.height-a.contentHolderUnitOrigHeight/(a.origWidth/a.width),10)-a.verticalAdjustment/(a.origWidth/a.width);D(f.currentImg,q,r,h,k,1,!1,b,f,a,e,g,p,w,l,n);u=f.current_img_no; for(m=1;m<=Math.floor(a.numberOfVisibleItems/2);m++)f.currentZ_index--,u=C(u,-1,p),f.currentImg=c("#contentHolderUnit_"+u,n),f.currentImg.css("z-index",f.currentZ_index),m==Math.floor(a.numberOfVisibleItems/2)&&(1===b?(last_aux_img_no=C(u,-1,p),last_currentImg=c("#contentHolderUnit_"+last_aux_img_no,n),k=a.contentHolderUnitOrigHeight/(a.origWidth/a.width)-2*(m+1)*a.elementsVerticalSpacing/(a.origWidth/a.width),h=parseInt(k*f.aspectOrig,10),q=parseInt((a.width-a.contentHolderUnitOrigWidth/(a.origWidth/ a.width))/2,10)-(m+1)*a.elementsHorizontalSpacing/(a.origWidth/a.width),r=parseInt(a.height-a.contentHolderUnitOrigHeight/(a.origWidth/a.width),10)-a.verticalAdjustment/(a.origWidth/a.width)+(m+1)*a.elementsVerticalSpacing/(a.origWidth/a.width),D(last_currentImg,q,r,h,k,0,!1,b,f,a,e,g,p,w,l,n)):(k=a.contentHolderUnitOrigHeight/(a.origWidth/a.width)-2*(m+1)*a.elementsVerticalSpacing/(a.origWidth/a.width),parseInt(k*f.aspectOrig,10),F(f.currentImg,m+1,a,f),q=parseInt((a.width-a.contentHolderUnitOrigWidth/ (a.origWidth/a.width))/2,10)-(m+1)*a.elementsHorizontalSpacing/(a.origWidth/a.width),r=parseInt(a.height-a.contentHolderUnitOrigHeight/(a.origWidth/a.width),10)-a.verticalAdjustment/(a.origWidth/a.width)+(m+1)*a.elementsVerticalSpacing/(a.origWidth/a.width),f.currentImg.css({left:q+"px",top:r+"px",opacity:0}))),f.currentImg.css("display","block"),k=a.contentHolderUnitOrigHeight/(a.origWidth/a.width)-2*m*a.elementsVerticalSpacing/(a.origWidth/a.width),h=parseInt(k*f.aspectOrig,10),q=parseInt((a.width- a.contentHolderUnitOrigWidth/(a.origWidth/a.width))/2,10)-m*a.elementsHorizontalSpacing/(a.origWidth/a.width),r=parseInt(a.height-a.contentHolderUnitOrigHeight/(a.origWidth/a.width),10)-a.verticalAdjustment/(a.origWidth/a.width)+m*a.elementsVerticalSpacing/(a.origWidth/a.width),D(f.currentImg,q,r,h,k,1,!1,b,f,a,e,g,p,w,l,n);var u=f.current_img_no;for(m=1;m<=Math.floor(a.numberOfVisibleItems/2);m++)f.currentZ_index--,u=C(u,1,p),f.currentImg=c("#contentHolderUnit_"+u,n),f.currentImg.css("z-index",f.currentZ_index), m==Math.floor(a.numberOfVisibleItems/2)&&(1===b?(F(f.currentImg,m+1,a,f),f.currentImg.css({left:parseInt((a.width-a.contentHolderUnitOrigWidth/(a.origWidth/a.width))/2,10)+(a.contentHolderUnitOrigWidth/(a.origWidth/a.width)+(m+1)*a.elementsHorizontalSpacing/(a.origWidth/a.width)-f.currentImg.width())+"px",top:parseInt(a.height-a.contentHolderUnitOrigHeight/(a.origWidth/a.width),10)-a.verticalAdjustment/(a.origWidth/a.width)+(m+1)*a.elementsVerticalSpacing/(a.origWidth/a.width)+"px",opacity:0})):(last_aux_img_no= C(u,1,p),last_currentImg=c("#contentHolderUnit_"+last_aux_img_no,n),k=a.contentHolderUnitOrigHeight/(a.origWidth/a.width)-2*(m+1)*a.elementsVerticalSpacing/(a.origWidth/a.width),h=parseInt(k*f.aspectOrig,10),q=parseInt((a.width-a.contentHolderUnitOrigWidth/(a.origWidth/a.width))/2,10)+(a.contentHolderUnitOrigWidth/(a.origWidth/a.width)+(m+1)*a.elementsHorizontalSpacing/(a.origWidth/a.width)-h),r=parseInt(a.height-a.contentHolderUnitOrigHeight/(a.origWidth/a.width),10)-a.verticalAdjustment/(a.origWidth/ a.width)+(m+1)*a.elementsVerticalSpacing/(a.origWidth/a.width),D(last_currentImg,q,r,h,k,0,!1,b,f,a,e,g,p,w,l,n))),f.currentImg.css("display","block"),k=a.contentHolderUnitOrigHeight/(a.origWidth/a.width)-2*m*a.elementsVerticalSpacing/(a.origWidth/a.width),h=parseInt(k*f.aspectOrig,10),q=parseInt((a.width-a.contentHolderUnitOrigWidth/(a.origWidth/a.width))/2,10)+(a.contentHolderUnitOrigWidth/(a.origWidth/a.width)+m*a.elementsHorizontalSpacing/(a.origWidth/a.width)-h),r=parseInt(a.height-a.contentHolderUnitOrigHeight/ (a.origWidth/a.width),10)-a.verticalAdjustment/(a.origWidth/a.width)+m*a.elementsVerticalSpacing/(a.origWidth/a.width),m==Math.floor(a.numberOfVisibleItems/2)?D(f.currentImg,q,r,h,k,1,!0,b,f,a,e,g,p,w,l,n):D(f.currentImg,q,r,h,k,1,!1,b,f,a,e,g,p,w,l,n)}function F(b,a,c,l){a=c.contentHolderUnitOrigHeight/(c.origWidth/c.width)-c.elementsVerticalSpacing/(c.origWidth/c.width)*a*2;l=parseInt(a*l.aspectOrig,10);b.css({height:a+"px",width:l+"px"});c.resizeImages&&(imgInside=b.find("img:first"),imgInside.is("img")&& imgInside.css({height:a+"px",width:l+"px"}))}function D(b,a,f,l,g,n,p,w,e,h,k,q,r,u,x,s){e.slideIsRunning=!0;k.html(c(q[e.current_img_no]).attr("data-title"));h.responsive&&I(k,h);0===n?b.css("z-index",e.currentZ_index-1):b.css("z-index",e.currentZ_index);b.css("display","block");b.animate({left:a+"px",top:f+"px",width:l+"px",height:g+"px",opacity:n},1E3*h.animationTime,h.easing,function(){if(p){e.slideIsRunning=!1;e.effectIsRunning=!1;e.arcInitialTime=(new Date).getTime();e.timeElapsed=0;h.showCircleTimer&& (clearInterval(e.intervalID),e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height),e.ctx.beginPath(),e.ctx.globalAlpha=h.behindCircleAlpha/100,e.ctx.arc(h.circleRadius+2*h.circleLineWidth,h.circleRadius+2*h.circleLineWidth,h.circleRadius,0,2*Math.PI,!1),e.ctx.lineWidth=h.circleLineWidth+2,e.ctx.strokeStyle=h.behindCircleColor,e.ctx.stroke(),e.ctx.beginPath(),e.ctx.globalAlpha=h.circleAlpha/100,e.ctx.arc(h.circleRadius+2*h.circleLineWidth,h.circleRadius+2*h.circleLineWidth,h.circleRadius,0,0,!1),e.ctx.lineWidth= h.circleLineWidth,e.ctx.strokeStyle=h.circleColor,e.ctx.stroke(),e.intervalID=setInterval(function(){G(e,h)},125),cLeftPos=c("#contentHolderUnit_"+e.current_img_no,s).css("left"),cTopPos=c("#contentHolderUnit_"+e.current_img_no,s).css("top"),c(".mycanvas",s).css({display:"block",left:parseInt(cLeftPos.substr(0,cLeftPos.lastIndexOf("px")),10)+parseInt(h.circleLeftPositionCorrection/(h.origWidth/h.width),10)+"px",top:parseInt(cTopPos.substr(0,cTopPos.lastIndexOf("px")),10)+parseInt(h.circleTopPositionCorrection/ (h.origWidth/h.width),10)+"px"}));"true"==c(q[e.current_img_no]).attr("data-video")&&u.css("display","block");if(0<h.autoPlay&&1<r&&!e.mouseOverBanner&&!e.fastForwardRunning||e.current_img_no!=e.img_no_where_to_stop&&e.fastForwardRunning)clearTimeout(e.timeoutID),e.timeoutID=setTimeout(function(){A(w,h,e,x,q,s,r,u,k)},1E3*h.autoPlay);e.current_img_no==e.img_no_where_to_stop&&e.fastForwardRunning&&(e.fastForwardRunning=!1,h.animationTime=e.animationTimeOrig,h.autoPlay=e.autoPlayOrig)}});h.resizeImages&& (imgInside=b.find("img:first"),imgInside.is("img")&&imgInside.animate({width:l+"px",height:g+"px"},1E3*h.animationTime,h.easing,function(){}))}function C(b,a,c){return b+a>=c?0:0>b+a?c-1:b+a}function J(b,a,c,l,g,n,p,w,e){-1===c.current_img_no-b?A(1,a,c,l,g,n,p,w,e):1===c.current_img_no-b?A(-1,a,c,l,g,n,p,w,e):(c.fastForwardRunning=!0,a.animationTime=0.4,a.autoPlay=0.1,c.img_no_where_to_stop=b,c.current_img_no<b?b-c.current_img_no<p-b+c.current_img_no?A(1,a,c,l,g,n,p,w,e):A(-1,a,c,l,g,n,p,w,e):c.current_img_no> b&&(c.current_img_no-b<p-c.current_img_no+b?A(-1,a,c,l,g,n,p,w,e):A(1,a,c,l,g,n,p,w,e)))}function M(b,a,f,l,g,n,p,w,e,h,k,q,r,u,x,s,t){u.css("display","none");a.enableTouchScreen?(responsiveWidth=g.parent().parent().parent().width(),responsiveHeight=g.parent().parent().parent().height()):(responsiveWidth=g.parent().parent().width(),responsiveHeight=g.parent().parent().height());a.responsiveRelativeToBrowser&&(responsiveWidth=c(window).width(),responsiveHeight=c(window).height());a.width100Proc&&(a.width= responsiveWidth);a.height100Proc&&(a.height=responsiveHeight);if(a.origWidth!=responsiveWidth||a.width100Proc)a.origWidth>responsiveWidth||a.width100Proc?a.width=responsiveWidth:a.width100Proc||(a.width=a.origWidth),a.height100Proc||(a.height=a.width/b.bannerRatio),a.width=parseInt(a.width,10),a.height=parseInt(a.height,10),a.enableTouchScreen&&a.responsive&&(a.width-=1),p.width(a.width),p.height(a.height),s.width(a.width),s.height(a.height),a.enableTouchScreen&&(p.parent().width(a.width+1),p.parent().height(a.height)), n.css("margin-top",parseInt((a.height-w.height())/2,10)+a.nextPrevMarginTop/(a.origWidth/a.width)+"px"),e.css("left",parseInt((p.width()-e.width())/2,10)+"px"),h.css("left",parseInt(e.css("left").substring(0,e.css("left").length-2),10)-h.width()+"px"),k.css("left",parseInt(e.css("left").substring(0,e.css("left").length-2),10)+e.width()+parseInt(q.css("padding-left").substring(0,q.css("padding-left").length-2),10)+"px"),u.css({left:parseInt((a.width-u.width())/2,10)+"px",top:parseInt(a.height-a.contentHolderUnitOrigHeight/ (a.origWidth/a.width),10)+parseInt((a.contentHolderUnitOrigHeight/(a.origWidth/a.width)-u.height())/2,10)-parseInt(a.verticalAdjustment/(a.origWidth/a.width),10)+"px","margin-top":a.playMovieMarginTop/(a.origWidth/a.width)}),x.css("top",parseInt(a.elementOrigTop/(a.origWidth/a.width),10)),clearTimeout(b.timeoutID),clearInterval(b.intervalID),b.timeoutID=setTimeout(function(){A(1,a,b,r,l,p,f,u,x)},0.1)}function K(){var b=-1;"Microsoft Internet Explorer"==navigator.appName&&null!=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)&& (b=parseFloat(RegExp.$1));return parseInt(b,10)}var E=!1;c.fn.allinone_carousel=function(b){b=c.extend({},c.fn.allinone_carousel.defaults,b);return this.each(function(){var a=c(this);responsiveWidth=a.parent().width();responsiveHeight=a.parent().height();b.responsiveRelativeToBrowser&&(responsiveWidth=c(window).width(),responsiveHeight=c(window).height());b.origWidth=b.width;b.width100Proc&&(b.width=responsiveWidth);b.origHeight=b.height;b.height100Proc&&(b.height=responsiveHeight);b.responsive&& (b.origWidth!=responsiveWidth||b.width100Proc)&&(b.width=b.origWidth>responsiveWidth||b.width100Proc?responsiveWidth:b.origWidth,b.height100Proc||(b.height=b.width/(b.origWidth/b.origHeight)));b.width=parseInt(b.width,10);b.height=parseInt(b.height,10);b.enableTouchScreen&&b.responsive&&(b.width-=1);var f=c("<div></div>").addClass("allinone_carousel").addClass(b.skin),l=c('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <div class="contentHolder"></div> <div class="elementTitle"></div>\t<div class="playOver"></div> <canvas class="mycanvas"></canvas>'); a.wrap(f);a.after(l);var g=a.parent(".allinone_carousel"),l=c(".bannerControls",g),n=c(".contentHolder",g),f=c('<div class="bottomNavLeft"></div>'),p=c('<div class="bottomNav"></div>'),w=c('<div class="bottomNavRight"></div>');a.after(f);a.after(p);a.after(w);b.showAllControllers||l.css("display","none");var e=c(".leftNav",g),h=c(".rightNav",g);e.css("display","none");h.css("display","none");b.showNavArrows&&b.showOnInitNavArrows&&(e.css("display","block"),h.css("display","block"));var k=c(".bottomNav", g),q=c(".bottomNavLeft",g),r=c(".bottomNavRight",g),u;k.css("display","block");q.css("display","block");r.css("display","block");k.css({bottom:b.bottomNavMarginBottom+"px",top:"auto"});q.css({bottom:b.bottomNavMarginBottom+"px",top:"auto"});r.css({bottom:b.bottomNavMarginBottom+"px",top:"auto"});b.showBottomNav||(k.css("display","none"),q.css("display","none"),r.css("display","none"));b.showOnInitBottomNav||(k.css("left","-5000px"),q.css("left","-5000px"),r.css("left","-5000px"));var x=c(".elementTitle", g);b.showElementTitle||x.css("display","none");b.elementOrigTop=parseInt(x.css("top").substr(0,x.css("top").lastIndexOf("px")),10);x.css("top",parseInt(b.elementOrigTop/(b.origWidth/b.width),10));var s=c(".playOver",g),f=K(),t=0,d={current_img_no:0,currentImg:0,currentZ_index:101,slideIsRunning:!1,effectIsRunning:!1,mouseOverBanner:!1,fastForwardRunning:!1,isVideoPlaying:!1,img_no_where_to_stop:0,aspectOrig:0,timeoutID:"",animationTimeOrig:b.animationTime,autoPlayOrig:b.autoPlay,timeoutID:"",intervalID:"", arcInitialTime:(new Date).getTime(),timeElapsed:0,windowWidth:0,canvas:"",ctx:"",bannerRatio:b.origWidth/b.origHeight},D;d.canvas=c(".mycanvas",g)[0];d.canvas.width=2*b.circleRadius+4*b.circleLineWidth;d.canvas.height=2*b.circleRadius+4*b.circleLineWidth;-1!=f&&9>f&&(b.showCircleTimer=!1);b.showCircleTimer&&(d.ctx=d.canvas.getContext("2d"));g.width(b.width);g.height(b.height);n.width(b.width);n.height(b.height);l.css("margin-top",parseInt((b.height-e.height())/2,10)+b.nextPrevMarginTop/(b.origWidth/ b.width)+"px");var v=a.find("ul:first").children();b.numberOfVisibleItems>a.find("ul:first li").length&&(b.numberOfVisibleItems=a.find("ul:first li").length);b.numberOfVisibleItems%2||b.numberOfVisibleItems--;var y,B,C=0,L=0;v.each(function(){d.currentImg=c(this);d.currentImg.is("li")||(d.currentImg=d.currentImg.find("li:first"));d.currentImg.is("li")&&(t++,y=c('<div class="contentHolderUnit" rel="'+(t-1)+'" id="contentHolderUnit_'+(t-1)+'">'+d.currentImg.html()+"</div>"),n.append(y),y.css("display", "none"),0===b.contentHolderUnitOrigWidth&&(b.contentHolderUnitOrigWidth=y.width(),b.contentHolderUnitOrigHeight=y.height(),d.aspectOrig=b.contentHolderUnitOrigWidth/b.contentHolderUnitOrigHeight),F(y,0,b,d),y.css({left:parseInt((b.width-y.width())/2,10)+"px",top:parseInt(b.height-y.height(),10)-b.verticalAdjustment/(b.origWidth/b.width)+"px"}),1==t?(y.css({left:parseInt((b.width-y.width())/2,10)+"px",top:parseInt(b.height-y.height(),10)-b.verticalAdjustment/(b.origWidth/b.width)+"px","z-index":d.currentZ_index, display:"block"}),"true"==c(v[d.current_img_no]).attr("data-video")&&s.css("display","block")):t<=Math.ceil(b.numberOfVisibleItems/2)&&(d.currentZ_index--,F(y,t-1,b,d),y.css({left:parseInt((b.width-b.contentHolderUnitOrigWidth/(b.origWidth/b.width))/2,10)+(b.contentHolderUnitOrigWidth/(b.origWidth/b.width)+(t-1)*b.elementsHorizontalSpacing/(b.origWidth/b.width)-y.width())+"px",top:parseInt(b.height-b.contentHolderUnitOrigHeight/(b.origWidth/b.width),10)-b.verticalAdjustment/(b.origWidth/b.width)+ (t-1)*b.elementsVerticalSpacing/(b.origWidth/b.width)+"px","z-index":d.currentZ_index,display:"block"})),B=c('<div class="bottomNavButtonOFF" rel="'+(t-1)+'"></div>'),k.append(B),C+=parseInt(B.css("padding-left").substring(0,B.css("padding-left").length-2),10)+B.width(),L=parseInt((k.height()-parseInt(B.css("height").substring(0,B.css("height").length-2)))/2,10),B.css("margin-top",L+"px"))});s.css({left:parseInt((b.width-s.width())/2,10)+"px",top:parseInt(b.height-b.contentHolderUnitOrigHeight/(b.origWidth/ b.width),10)+parseInt((b.contentHolderUnitOrigHeight/(b.origWidth/b.width)-s.height())/2,10)-parseInt(b.verticalAdjustment/(b.origWidth/b.width),10)+"px","margin-top":b.playMovieMarginTop/(b.origWidth/b.width)});b.showCircleTimer&&(cLeftPos=c("#contentHolderUnit_"+d.current_img_no,g).css("left"),cTopPos=c("#contentHolderUnit_"+d.current_img_no,g).css("top"),c(".mycanvas",g).css({left:parseInt(cLeftPos.substr(0,cLeftPos.lastIndexOf("px")),10)+parseInt(b.circleLeftPositionCorrection/(b.origWidth/b.width), 10)+"px",top:parseInt(cTopPos.substr(0,cTopPos.lastIndexOf("px")),10)+parseInt(b.circleTopPositionCorrection/(b.origWidth/b.width),10)+"px"}));d.currentZ_index=100;for(m=1;m<=Math.floor(b.numberOfVisibleItems/2);m++)d.currentZ_index--,F(c("#contentHolderUnit_"+(t-m),g),m,b,d),c("#contentHolderUnit_"+(t-m),g).css({left:parseInt((b.width-b.contentHolderUnitOrigWidth/(b.origWidth/b.width))/2,10)-m*b.elementsHorizontalSpacing/(b.origWidth/b.width)+"px",top:parseInt(b.height-b.contentHolderUnitOrigHeight/ (b.origWidth/b.width),10)-b.verticalAdjustment/(b.origWidth/b.width)+m*b.elementsVerticalSpacing/(b.origWidth/b.width)+"px","z-index":d.currentZ_index,display:"block"});x.html(c(v[0]).attr("data-title"));b.responsive&&I(x,b);k.width(C);b.showOnInitBottomNav&&(k.css("left",parseInt((g.width()-C)/2,10)+"px"),q.css("left",parseInt(k.css("left").substring(0,k.css("left").length-2),10)-q.width()+"px"),r.css("left",parseInt(k.css("left").substring(0,k.css("left").length-2),10)+k.width()+parseInt(B.css("padding-left").substring(0, B.css("padding-left").length-2),10)+"px"));c("iframe",g).each(function(){var a=c(this).attr("src"),b="?wmode=transparent";-1!=a.indexOf("?")&&(b="&wmode=transparent");c(this).attr("src",a+b)});d.current_img_no=0;d.currentImg=c(v[d.current_img_no]);g.mouseenter(function(){d.mouseOverBanner=!0;d.effectIsRunning||(clearTimeout(d.timeoutID),nowx=(new Date).getTime(),d.timeElapsed+=nowx-d.arcInitialTime,b.autoHideNavArrows&&b.showNavArrows&&(e.css("display","block"),h.css("display","block")),b.autoHideBottomNav&& b.showBottomNav&&(k.css({display:"block",left:parseInt((g.width()-C)/2,10)+"px"}),q.css({display:"block",left:parseInt(k.css("left").substring(0,k.css("left").length-2),10)-q.width()+"px"}),r.css({display:"block",left:parseInt(k.css("left").substring(0,k.css("left").length-2),10)+k.width()+parseInt(B.css("padding-left").substring(0,B.css("padding-left").length-2),10)+"px"})))});g.mouseleave(function(){d.mouseOverBanner=!1;if(!d.effectIsRunning&&(nowx=(new Date).getTime(),b.autoHideNavArrows&&b.showNavArrows&& (e.css("display","none"),h.css("display","none")),b.autoHideBottomNav&&b.showBottomNav&&(k.css("display","none"),q.css("display","none"),r.css("display","none")),0<b.autoPlay&&1<t&&!d.fastForwardRunning&&!d.isVideoPlaying)){clearTimeout(d.timeoutID);d.arcInitialTime=(new Date).getTime();var a=parseInt(1E3*b.autoPlay-(d.timeElapsed+nowx-d.arcInitialTime),10);d.timeoutID=setTimeout(function(){A(1,b,d,z,v,g,t,s,x)},a)}});y=c(".contentHolderUnit",g);y.click(function(){if(!d.slideIsRunning&&!d.fastForwardRunning){var a= c(this).attr("rel");a!=d.current_img_no?(d.isVideoPlaying=!1,c(z[d.current_img_no]).removeClass("bottomNavButtonON"),J(parseInt(a,10),b,d,z,v,g,t,s,x)):"true"==c(v[d.current_img_no]).attr("data-video")?(s.css("display","none"),D=c(this).find("img:first"),D.css("display","none"),d.isVideoPlaying=!0):void 0==c(v[d.current_img_no]).attr("data-link")||""==c(v[d.current_img_no]).attr("data-link")||d.effectIsRunning||E||(a=b.target,void 0!=c(v[d.current_img_no]).attr("data-target")&&""!=c(v[d.current_img_no]).attr("data-target")&& (a=c(v[d.current_img_no]).attr("data-target")),"_blank"==a?window.open(c(v[d.current_img_no]).attr("data-link")):window.location=c(v[d.current_img_no]).attr("data-link"))}});s.click(function(){b.showCircleTimer&&c(".mycanvas",g).css({display:"none"});s.css("display","none");D=c("#contentHolderUnit_"+d.current_img_no,g).find("img:first");D.css("display","none");d.isVideoPlaying=!0});e.mousedown(function(){E=!0;d.slideIsRunning||d.fastForwardRunning||(d.isVideoPlaying=!1,clearTimeout(d.timeoutID),A(-1, b,d,z,v,g,t,s,x))});e.mouseup(function(){E=!1});h.mousedown(function(){E=!0;d.slideIsRunning||d.fastForwardRunning||(d.isVideoPlaying=!1,clearTimeout(d.timeoutID),A(1,b,d,z,v,g,t,s,x))});h.mouseup(function(){E=!1});var z=c(".bottomNavButtonOFF",g);z.mousedown(function(){E=!0;if(!d.slideIsRunning&&!d.fastForwardRunning){var a=c(this).attr("rel");a!=d.current_img_no&&(d.isVideoPlaying=!1,c(z[d.current_img_no]).removeClass("bottomNavButtonON"),J(parseInt(a,10),b,d,z,v,g,t,s,x))}});z.mouseup(function(){E= !1});z.mouseenter(function(){var a=c(this),d=a.attr("rel");b.showPreviewThumbs&&(u=c('<div class="bottomOverThumb"></div>'),a.append(u),d=c(v[d]).attr("data-bottom-thumb"),u.html('<img src="'+d+'">'));a.addClass("bottomNavButtonON")});z.mouseleave(function(){var a=c(this),e=a.attr("rel");b.showPreviewThumbs&&u.remove();d.current_img_no!=e&&a.removeClass("bottomNavButtonON")});b.enableTouchScreen&&(f=Math.floor(1E5*Math.random()),g.wrap('<div id="carouselParent_'+f+'" style="position:relative;" />'), c("#carouselParent_"+f).width(b.width+1),c("#carouselParent_"+f).height(b.height),g.css({cursor:"url("+b.absUrl+"skins/hand.cur),url("+b.absUrl+"skins/hand.cur),move",left:"0px",position:"absolute"}),rightVal=parseInt(h.css("right").substring(0,h.css("right").length-2),10),g.mousedown(function(){rightVal=parseInt(h.css("right").substring(0,h.css("right").length-2),10);0>rightVal&&!E&&(h.css({visibility:"hidden",right:"0"}),e.css("visibility","hidden"))}),g.mouseup(function(){E=!1;0>rightVal&&(h.css({right:rightVal+ "px",visibility:"visible"}),e.css("visibility","visible"))}),g.draggable({axis:"x",containment:"parent",distance:10,start:function(a,b){origLeft=c(this).css("left")},stop:function(a,f){d.effectIsRunning||(finalLeft=c(this).css("left"),direction=1,origLeft<finalLeft&&(direction=-1),A(direction,b,d,z,v,g,t,s,x));0>rightVal&&(h.css({right:rightVal+"px",visibility:"visible"}),e.css("visibility","visible"));c(this).css("left","0px")}}));var H=!1;c(window).resize(function(){var f=K();doResizeNow=!0;-1!= navigator.userAgent.indexOf("Android")&&(0==b.windowOrientationScreenSize0&&0==window.orientation&&(b.windowOrientationScreenSize0=c(window).width()),0==b.windowOrientationScreenSize90&&90==window.orientation&&(b.windowOrientationScreenSize90=c(window).height()),0==b.windowOrientationScreenSize_90&&-90==window.orientation&&(b.windowOrientationScreenSize_90=c(window).height()),b.windowOrientationScreenSize0&&0==window.orientation&&c(window).width()>b.windowOrientationScreenSize0&&(doResizeNow=!1), b.windowOrientationScreenSize90&&90==window.orientation&&c(window).height()>b.windowOrientationScreenSize90&&(doResizeNow=!1),b.windowOrientationScreenSize_90&&-90==window.orientation&&c(window).height()>b.windowOrientationScreenSize_90&&(doResizeNow=!1),0==d.windowWidth&&(doResizeNow=!1,d.windowWidth=c(window).width()));-1!=f&&9==f&&0==d.windowWidth&&(doResizeNow=!1);d.windowWidth==c(window).width()?(doResizeNow=!1,b.windowCurOrientation!=window.orientation&&-1!=navigator.userAgent.indexOf("Android")&& (b.windowCurOrientation=window.orientation,doResizeNow=!0)):d.windowWidth=c(window).width();b.responsive&&doResizeNow&&(!1!==H&&clearTimeout(H),H=setTimeout(function(){M(d,b,t,v,a,l,g,e,k,q,r,B,z,s,x,n,y)},300))});c(z[d.current_img_no]).addClass("bottomNavButtonON");f=g.find("img:first");f[0].complete?(c(".myloader",g).css("display","none"),0<b.autoPlay&&1<t&&(b.showCircleTimer&&(d.arcInitialTime=(new Date).getTime(),d.timeElapsed=0,d.intervalID=setInterval(function(){G(d,b)},125)),d.timeoutID=setTimeout(function(){A(1, b,d,z,v,g,t,s,x)},1E3*b.autoPlay))):f.load(function(){c(".myloader",g).css("display","none");0<b.autoPlay&&1<t&&(b.showCircleTimer&&(d.arcInitialTime=(new Date).getTime(),d.timeElapsed=0,d.intervalID=setInterval(function(){G(d,b)},125)),d.timeoutID=setTimeout(function(){A(1,b,d,z,v,g,t,s,x)},1E3*b.autoPlay))})})};c.fn.allinone_carousel.defaults={skin:"attractive",width:960,height:384,width100Proc:!1,height100Proc:!1,autoPlay:4,numberOfVisibleItems:7,elementsHorizontalSpacing:120,elementsVerticalSpacing:20, verticalAdjustment:0,animationTime:0.8,easing:"easeOutQuad",resizeImages:!0,target:"_blank",showElementTitle:!0,showAllControllers:!0,showNavArrows:!0,showOnInitNavArrows:!0,autoHideNavArrows:!0,showBottomNav:!0,showOnInitBottomNav:!0,autoHideBottomNav:!0,showPreviewThumbs:!0,nextPrevMarginTop:0,playMovieMarginTop:0,enableTouchScreen:!0,absUrl:"",showCircleTimer:!0,showCircleTimerIE8IE7:!1,circleRadius:10,circleLineWidth:4,circleColor:"#FF0000",circleAlpha:100,behindCircleColor:"#000000",behindCircleAlpha:50, circleLeftPositionCorrection:3,circleTopPositionCorrection:3,responsive:!1,responsiveRelativeToBrowser:!0,bottomNavMarginBottom:0,origWidth:0,origHeight:0,contentHolderUnitOrigWidth:0,contentHolderUnitOrigHeight:0,elementOrigTop:0,origthumbsHolder_MarginTop:0,windowOrientationScreenSize0:0,windowOrientationScreenSize90:0,windowOrientationScreenSize_90:0,windowCurOrientation:0}})(jQuery);