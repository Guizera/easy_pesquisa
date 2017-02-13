(function ($) {
    "use strict";

    $(document).ready(function() {

        $(".switch-btn").on("click", function () {
            var e = this.io ^= 1;
            $(".switcher").animate({right: e ? 0 : -180}, "medium");
        });

        /*Color sheets Switching
         * -----------------------------------------------------------------------------------------------------------*/
        $("#c-orange-black").on('click', function() {
            $("#color-switcher").attr('href','css/colors/orange-black.css');
        });

        $("#c-red").on('click', function() {
            $("#color-switcher").attr('href','css/colors/red.css');
        });

        $("#c-blue").on('click', function() {
            $("#color-switcher").attr('href','css/colors/blue.css');
        });

        $("#c-green").on('click', function() {
            $("#color-switcher").attr('href','css/colors/green.css');
        });

        $("#c-purple").on('click', function() {
            $("#color-switcher").attr('href','css/colors/purple.css');
        });

        $("#c-mint").on('click', function() {
            $("#color-switcher").attr('href','css/colors/mint.css');
        });

        $("#c-orange").on('click', function() {
            $("#color-switcher").attr('href','css/colors/orange.css');
        });

        $("#c-light-blue").on('click', function() {
            $("#color-switcher").attr('href','css/colors/light-blue.css');
        });
        
    });

})(jQuery);