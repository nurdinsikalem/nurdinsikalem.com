<style scoped='' type="text/css">
ul#recent-posts{list-style:none;margin:0;padding:0}li.recent-posts{display:block;clear:both;overflow:hidden;list-style:none;border-bottom:1px solid #e3e3e3;word-break:break-word;padding:10px 0;margin:0;}
li.recent-posts:last-child{border-bottom:0;}
li.recent-posts a{color:#444;}li.recent-posts a:hover{color:#444;text-decoration:underline}
</style>
<ul id="recent-posts"></ul>
<script>
//<![CDATA[
var homePage = "http://www.klikalem.blogspot.com",
numPosts = 10;
function recentPosts(a){if(document.getElementById("recent-posts")){var e=a.feed.entry,title,link,content="",ct=document.getElementById("recent-posts");for(var i=0;i<numPosts;i++){for(var j=0;j<numPosts;j++){if(e[i].link[j].rel=="alternate"){link=e[i].link[j].href;break}}var title=e[i].title.$t;content+='<li class="recent-posts"><a href="'+link+'" title="'+title+'" target="_blank" rel="nofollow">'+title+'</a></li>'}ct.innerHTML=content}}var rcp=document.createElement('script');rcp.src=homePage+'/feeds/posts/summary?alt=json-in-script&orderby=published&max-results='+numPosts+'&callback=recentPosts';document.getElementsByTagName('head')[0].appendChild(rcp);
//]]>
</script>
