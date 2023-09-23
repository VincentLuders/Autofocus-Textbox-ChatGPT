
(function() {
    console.log("ensureFocus called");
    'use strict';
    function initScript() {
   
        ensureFocus();
        forceFocus();
        toggleFocus(); // If toggleFocus doesn't take any parameters
    }
    
    // Run the script when the page is loaded
    window.addEventListener('DOMContentLoaded', initScript);
    
    // Run the script when the URL changes
    window.addEventListener('popstate', initScript);
    // Get the reference to the main text area
    var textArea = document.getElementById('prompt-textarea');

    function ensureFocus() {
        console.log("ensureFocus called");
        // Get all textareas present on the page
        var textAreas = document.querySelectorAll('textarea');

        // If another textarea exists (more than 1), we do not set focus to the main textarea
        if (textAreas.length > 1) {
            return;
        }

        // Set focus to the main textarea if no text is selected and no other textareas are present
        if (document.activeElement !== textArea && !window.getSelection().toString()) {
            textArea.focus();
        }
    }

    function forceFocus(e) {
        // Ignore if Ctrl or Shift or Alt or Meta (Cmd) key is pressed
        if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
            return;
        }

        var textAreas = document.querySelectorAll('textarea');
        if (textAreas.length > 1) {
            return;
        }

        textArea.focus();
    }

    function toggleFocus(e) {
        console.log("ensureFocus called");
        // If the Tab key is pressed
        if (e.key === 'Tab') {
            e.preventDefault();  // Prevent the default action of the Tab key

            // Get all textareas present on the page
            var textAreas = document.querySelectorAll('textarea');

            // If there are exactly 2 textareas on the page
            if (textAreas.length === 2) {
                // If the first textarea is focused, focus the second one, and vice versa
                if (document.activeElement === textAreas[0]) {
                    textAreas[1].focus();
                } else if (document.activeElement === textAreas[1]) {
                    textAreas[0].focus();
                }
            }
        }
    }

    // Create a mutation observer to watch for changes in the document
    var observer = new MutationObserver(ensureFocus);

    // Start observing the document with configured parameters
    observer.observe(document, { childList: true, subtree: true, attributes: true });

    // Add event listeners for click and keydown events
    document.addEventListener('click', ensureFocus);
    document.addEventListener('keydown', forceFocus);
    document.addEventListener('keydown', toggleFocus);


        // ... (existing script)

        document.addEventListener('keydown', function(event) {
            const saveSubmitButton = Array.from(document.querySelectorAll('.flex.w-full.gap-2.items-center.justify-center')).find(element => element.textContent === 'Save & Submit');
            const cancelButton = Array.from(document.querySelectorAll('.flex.w-full.gap-2.items-center.justify-center')).find(element => element.textContent === 'Cancel');
    
            if (event.ctrlKey && event.key === 'Enter' && saveSubmitButton) {
                saveSubmitButton.click();
            } else if (event.key === 'Escape' && cancelButton) {
                cancelButton.click();
            }
        });
    
    
})();

