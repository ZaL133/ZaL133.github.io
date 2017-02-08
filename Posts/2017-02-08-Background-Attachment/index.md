

# Background-Attachment

I came across this cool effect when looking at a website today and wanted to know how it worked. It's a little tough to describe. 

When you scroll down the page, you come across multiple panels of content, each with a picture separting them. And as you scroll though, the picture doesn't move. 

Scroll down to see what I mean. 

<style>
    .panel { font-size: 1.5em; line-height: 1.5em; position: relative; }
    .panel-image, .panel-body { height: 100%; position: relative; }
    .panel-image { 
        background-repeat: no-repeat; 
        background-attachment: fixed; 
        background-position: center;
        background-size:  auto 100%;
        max-height: 100%;
    }
    .panel-body { padding-top: 20%; }
</style>

<div class='panel'>
    <div class='panel-image' style='background-image: url("IMG_2592.jpg"); '>
    </div>
    <div class='panel-body'>
        The CSS is very simple. 
        <pre><code>    .panel { font-size: 1.5em; line-height: 1.5em; position: relative; }
    .panel-image, .panel-body { height: 100%; position: relative; }
    .panel-image { 
        background-repeat: no-repeat; 
        background-attachment: fixed; 
        background-position: center;
        background-size:  auto 100%;
        max-height: 100%;
    }
        </code></pre>
    </div>
</div>

<div class='panel'>
    <div class='panel-image' style='background-image: url("P1050781.JPG"); '>
    </div>
    <div class='panel-body'>
        CSS is strange in that often when I see a creative web page, I assume it's done with Javascript only to find out it's simple css that has been available for years, and yet is never used. I have to wonder how much of CSS3 I've yet to discover. 
    </div>
</div>