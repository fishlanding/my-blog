var posts=["2024/09/01/Bulk_Crap_Uninstaller/","2024/08/14/hello-world/","2024/09/03/LeagueCraft/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };