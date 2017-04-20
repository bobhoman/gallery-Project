
$(document).ready(function(){
    $("#search").keyup(function(){
 
        // Retrieve the input field text
        var filter = $(this).val();
 
        // Loop through the captions
        $(".gallery-section a").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).attr('data-title').search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).fadeIn();
            }
        });

    });
});
