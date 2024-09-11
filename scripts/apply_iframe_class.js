document.addEventListener('DOMContentLoaded', function() {
    
    // Select the iframe by its ID (or other selector)
    var iframe = document.getElementById('mainframe');

    // Add an event listener for when the iframe finishes loading
    iframe.addEventListener('load', function() {
        // Access the iframe's document
        var iframeDocument = iframe.contentWindow.document;
        
        // Add a class to the body or another specific element
        iframeDocument.documentElement.classList.add('in-frame');
    });
});