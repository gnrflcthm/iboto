
$(document).ready(function() {
    const voteSummary = $("#vote-summary");
    const electionResults = $("#election-results");
    electionResults.hide();
    $("#elres").click(function() {
        electionResults.removeClass("d-none");
        voteSummary.slideUp(250, function() {
            electionResults.slideDown(250);
            if (!$("#elres").hasClass("active")) {
                $("#elres").toggleClass("active");
                $("#vsum").toggleClass("active");
            }
        });
    });

    $("#vsum").click(function() {
        electionResults.slideUp(250, function() {
            voteSummary.slideDown(250);
            if (!$("#vsum").hasClass("active")) {
                $("#vsum").toggleClass("active");
                $("#elres").toggleClass("active");
            }
        });
    });

    var mayorCarousel = $(".m-carousel");
    mayorCarousel.jcarousel({
        items: '.m-candidate'
    });
    $("#m-car-next").jcarouselControl({
        target: "+=1",
        carousel: mayorCarousel
    });
    $("#m-car-prev").jcarouselControl({
        target: "-=1",
        carousel: mayorCarousel
    });

    var vmayorCarousel = $(".vm-carousel");
    vmayorCarousel.jcarousel({
        items: '.vm-candidate'
    });
    $("#vm-car-next").jcarouselControl({
        target: "+=1",
        carousel: vmayorCarousel
    });
    $("#vm-car-prev").jcarouselControl({
        target: "-=1",
        carousel: vmayorCarousel
    });

    var spCarousel = $(".sp-carousel");
    spCarousel.jcarousel({
        items: '.sp-candidate'
    });
    $("#sp-car-next").jcarouselControl({
        target: "+=1",
        carousel: spCarousel
    });
    $("#sp-car-prev").jcarouselControl({
        target: "-=1",
        carousel: spCarousel
    });

});