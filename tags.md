<ul id='tagList'>
</ul>


<script>
    var tags = [],
        rowTemplate = "<tr><td>{{DATE}}</td><td><a href='{{LINK}}'>{{TITLE}}</a></td></tr>";
        
    $(function() {
        $.ajax("/js/tags.json")
         .done(function(results) {
             tags = results;
             
             var tagList = $("#tagList");
             for(var i = 0; i < tags.length; i++) {
                 var tag = tags[i];
                 
                 var list = "<li>" + tag.TagName + "<ul>";
                 for(var j = 0; j < tag.PostKeys.length; j++) {
                     var post       = tag.PostKeys[j];
                     var postTitle  = tag.PostNames[j];
                     list += "<li><a href='/Posts/" + post + "'>" + postTitle + "</a></li>";
                 }
                 list += "</ul></li>";
                 
                 tagList.append(list);
             }
         });
    });
</script>