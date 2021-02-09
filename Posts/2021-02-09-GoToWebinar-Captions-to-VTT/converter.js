(function() {

    // StackOverflow: https://stackoverflow.com/a/30740104/972250
    function saveTextAsFile() {
        var textToWrite = document.getElementById('after').value;
        var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
        var fileNameToSaveAs = "Converted.vtt"; //filename.extension

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            // Chrome allows the link to be clicked without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
            // Firefox requires the link to be added to the DOM before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }

        downloadLink.click();
    }

    function convertBefore(before) {
        var lines   = before.split('\n');
        var parsed  = parseLines(lines);
        
        var rv = [];
        rv.push("WEBVTT");
        rv.push("");

        for(var i = 0; i < parsed.length; i++) {
            var line = parsed[i];

            rv.push(line.start + " --> " + line.end + " align:middle line:90%");
            rv.push(parsed[i].text);
            rv.push("");
        }

        return rv.join('\n');
    }

    function getFormattedTimestamp(timestamp) {
        var parts   = timestamp.split(':');
        if (parts[0].length == 1) parts[0] = "0" + parts[0];
        if (parts.length < 3) parts.unshift("00");
        return parts.join(":") + ".000";
    }

    function parseLines(lines) {
        var rv = [], 
            current = -1;

        for(var i = 0; i < lines.length; i = i + 2) {
            rv.push({
                    start: (i == 0 
                                ? getFormattedTimestamp("00:00") 
                                : getFormattedTimestamp(lines[i - 2])), 
                    end: getFormattedTimestamp(lines[i]), 
                    text: lines[i + 1] });
        }

        return rv;
    }

    function convertBeforeToAfter() {
        var before = document.getElementById('before');
        var after = document.getElementById('after');

        var converted = convertBefore(before.value);
        after.value = converted;
    }
    var convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convertBeforeToAfter);

    var download = document.getElementById('download');
    download.addEventListener('click', saveTextAsFile);
})();