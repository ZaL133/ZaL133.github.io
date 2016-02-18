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
                 tagList.append("<li>" + tags[i].TagName + "<ul><li><a href='/Posts/" + tags[i].PostKeys[0] + "'>" + tags[i].PostKeys[0] + "</a></li></ul></li>");
             }
         });
    });
</script>