hexo.extend.tag.register('highlight', function(content,type){
  var className =  args.join(' ');
  return '<pre><code class='+type+'>' + content + '</code></pre>';
}, {ends: true});
