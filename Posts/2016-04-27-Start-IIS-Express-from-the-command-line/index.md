# How to start IIS Express from the command line 

This is something that comes up a lot which I can never seem to remember. I don't want to configure a new website every time I want to treat a directory like a site.

<pre>
    <code>
        C:>cd "C:\Program Files (x86)\IIS Express"
        C:\Program Files (x86)\IIS Express>iisexpress.exe /path:{path_to_directory} /port:{portnumber}
        C:\Program Files (x86)\IIS Express>iexplore "http://localhost:{portnumber}"
    </code>
</pre>