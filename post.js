<div id="recentpostsae">
</div>
<div id="recentpostnavfeed">
</div>
<style scoped="" type="text/css">
*{padding:0;margin:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-box-sizing:border-box}
a,a:link,a:visited{text-decoration:none;transition:all .3s}
button,input[type="button"],input[type="reset"],input[type="submit"],.button{border:0;color:#fff;cursor:pointer;font-size:14px;font-weight:400;padding:12px 16px;white-space:normal;width:auto;border-radius:3px;outline:0}button:focus,button:hover,input[type="button"]:focus,input[type="button"]:hover,input[type="reset"]:focus,input[type="reset"]:hover,input[type="submit"]:focus,input[type="submit"]:hover,.button:focus,.button:hover{color:#fff}
#recentpostnav{border:1px solid #585858;width:100%;margin:0 auto}
#recentpostsae{margin:0}
#recentpostsae .recentpostel{width:48.9%;background:#fff;display:inline-block;margin:0 20px 10px 0;padding:15px;overflow:hidden;box-shadow:0 2px 3px rgba(0,0,0,0.06),0 2px 3px rgba(0,0,0,0.1)}
#recentpostsae .recentpostel:nth-child(even){margin:0 0 10px 0}
#recentpostsae .recentpostel img{background:#ecf0f1;padding:0;float:left;margin:0;margin-right:13px;width:72px}
#recentpostsae .recentpostel h6,.recentpostel h6 a{text-decoration:none;font-size:14px;font-weight:400;margin:0;color:#000}
#recentpostsae .recentpostel:hover{background-color:#fefefe}
#recentpostsae .recentpostel p{font-size:12px;text-align:left;color:#555;line-height:normal;margin:5px 0}
#recentpostload{letter-spacing:-10px;text-align:center;background:transparent url(https://2.bp.blogspot.com/-GeeSB564W-o/Wum3zpg8qNI/AAAAAAAAGmM/aRoomVJFtSQfUoAJrRjD6h1wTSU8J8DUQCLcBGAs/s1600/ellipsis-preloader.gif) no-repeat 50% 50%;height:470px}
#recentpostnavfeed{display:table;padding:5px 10px 5px 0;text-align:left;margin:15px auto}
#recentpostnavfeed a{color:#141414;font-size:12px;font-weight:400;display:block;padding:5px 10px}
#recentpostnavfeed span{padding:0;cursor:pointer;transition:all .3s}
#recentpostnavfeed .next,#recentpostnavfeed .previous{position:relative;overflow:hidden;display:inline-block;background:#fff;color:#222;padding:10px 16px;font-size:1rem;border-radius:99em;box-shadow:0 2px 3px rgba(0,0,0,0.06),0 2px 3px rgba(0,0,0,0.1)}
#recentpostnavfeed .next{float:right;margin:0 0 0 10px}
#recentpostnavfeed .previous{float:left;margin:0 10px 0 0}
#recentpostnavfeed .home{text-align:center;display:table;background:#fff;color:#222;font-size:1rem;float:none;padding:10px 16px;border-radius:99em;margin:auto;box-shadow:0 2px 3px rgba(0,0,0,0.06),0 2px 3px rgba(0,0,0,0.1)}
#recentpostnavfeed a:hover,#recentpostnavfeed span.noactived{color:#ccc}
#recentpostnavfeed i{font-family:fontawesome;font-style:normal}
#recentpostnavfeed .next:hover,#recentpostnavfeed .previous:hover,#recentpostnavfeed .home:hover{background:#fff;color:#222;box-shadow:0 10px 21px rgba(0,0,0,0.15),0 6px 6px rgba(0,0,0,0.12)}
@media screen and (max-width:993px){#recentpostsae .recentpostel{width:100%;margin:0 0 10px 0}}
</style>
<script type='text/javascript'>
//<![CDATA[
var numfeed = 12;
var startfeed = 0;
var urlblog = "https://blog.nurdinsikalem.com";
var charac = 0;
var urlprevious, urlnext;
function arlinafeed(e,t){for(var n=e.split("<"),r=0;r<n.length;r++)-1!=n[r].indexOf(">")&&(n[r]=n[r].substring(n[r].indexOf(">")+1,n[r].length));return n=n.join(""),n=n.substring(0,t-1)}function showrecentpostsae(e){var t,n,r,a,i,s="";urlprevious="",urlnext="";for(var l=0;l<e.feed.link.length;l++)"previous"==e.feed.link[l].rel&&(urlprevious=e.feed.link[l].href),"next"==e.feed.link[l].rel&&(urlnext=e.feed.link[l].href);for(var d=0;d<numfeed&&d!=e.feed.entry.length;d++){t=e.feed.entry[d],n=t.title.$t;for(var l=0;l<t.link.length;l++)if("alternate"==t.link[l].rel){r=t.link[l].href;break}i="content"in t?t.content.$t:"summary"in t?t.summary.$t:"",a="media$thumbnail"in t?t.media$thumbnail.url:"https://3.bp.blogspot.com/-BHuXHny1kOk/VXrkSyxKCjI/AAAAAAAACas/pZLJAEUDtds/s1600/no-image.png",s+="<div class='recentpostel'>",s+="<a href='"+r+"' title='"+n+"'><img alt='"+n+"' src='"+a+"' title='"+n+"'/></a>",s+="<h6><a href='"+r+"' title='"+n+"'>"+n+"</a></h6>",s+="<p>"+arlinafeed(i,charac)+"</p>",s+="</div>"}document.getElementById("recentpostsae").innerHTML=s,s="",s+=urlprevious?"<a href='javascript:navigasifeed(-1);' class='previous' title='Previous'><i class='fas fa-arrow-left'></i></a>":"<span class='noactived previous'><i class='fas fa-arrow-left'></i></span>",s+=urlnext?"<a href='javascript:navigasifeed(1);' class='next' title='Next'><i class='fas fa-arrow-right'></i></a>":"<span class='noactived next'><i class='fas fa-arrow-right'></i></span>",s+="<a href='javascript:navigasifeed(0);' class='home' title='Home'><i class='fas fa-home'></i></a>",document.getElementById("recentpostnavfeed").innerHTML=s}function navigasifeed(e){var t,n;-1==e?(t=urlprevious.indexOf("?"),n=urlprevious.substring(t)):1==e?(t=urlnext.indexOf("?"),n=urlnext.substring(t)):n="?start-index=1&max-results="+numfeed+"&orderby=published&alt=json-in-script",n+="&callback=showrecentpostsae",incluirscript(n)}function incluirscript(e){1==startfeed&&removerscript(),document.getElementById("recentpostsae").innerHTML="<div id='recentpostload'></div>",document.getElementById("recentpostnavfeed").innerHTML="";var t=urlblog+"/feeds/posts/default/-/Review"+e,n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src",t),n.setAttribute("id","arlinalabel"),document.getElementsByTagName("head")[0].appendChild(n),startfeed=1}function removerscript(){var e=document.getElementById("arlinalabel"),t=e.parentNode;t.removeChild(e)}onload=function(){navigasifeed(0)};
//]]>
</script>
