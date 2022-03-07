$( function() {
    $( "#slider" ).slider({
        min: 1,
        max: 20000,
        value: 10500,
        orientation: "horizontal",
        range: "min",
        animate: true,
        slide : function(event, ui) {
            $("#result-sum").text(ui.value);
        }
    });
});

