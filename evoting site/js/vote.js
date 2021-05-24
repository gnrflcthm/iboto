

$(document).ready(function() {
    var mayorCandidate = "";
    var vmCandidate = "";
    var spCandidate = "";
    $(".vm-candidates").hide();
    $(".sp-candidates").hide();
    $(".complete-voting").hide();
    $(".mayor-btn").click(function() {
        var mayoralCandidates = $(".mayor-btn");
        for (let i = 0; i < mayoralCandidates.length; i++) {
            if (this === mayoralCandidates[i]) {
                $(this).addClass("selected");
                mayorCandidate = this.value;
                $(this).html("Selected");
            } else {
                $(mayoralCandidates[i]).removeClass("selected");
                $(mayoralCandidates[i]).html("Select");
            }
        }
        var vmBtn = $(".vm");
        vmBtn.removeClass("disabled");
    });
    $('.m').click(function() {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(".vm").removeClass("active");
            $(".spc").removeClass("active");
            $(".sub").removeClass("active");
            toggleTabs(function() {
                $(".m-candidates").slideDown(250);
            });
        }
    });
    $(".vm").click(function() {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(".m").removeClass("active");
            $(".spc").removeClass("active");
            $(".sub").removeClass("active");
            toggleTabs(function() {
                $(".vm-candidates").slideDown(250);
            });
        }
    });
    $(".spc").click(function() {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(".m").removeClass("active");
            $(".vm").removeClass("active");
            $(".sub").removeClass("active");
            toggleTabs(function() {
                $(".sp-candidates").slideDown(250);
            });
        }
    });
    $(".sub").click(function() {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(".m").removeClass("active");
            $(".vm").removeClass("active");
            $(".spc").removeClass("active");
            toggleTabs(function() {
                $(".complete-voting").slideDown(250);
            });
        }
    })
    $(".vm-btn").click(function() {
        var vmCandidates = $(".vm-btn");
        for (let i = 0; i < vmCandidates.length; i++) {
            if (this === vmCandidates[i]) {
                $(this).addClass("selected");
                vmCandidate = this.value;
                $(this).html("Selected");
            } else {
                $(vmCandidates[i]).removeClass("selected");
                $(vmCandidates[i]).html("Select");
            }
        }
        $(".spc").removeClass("disabled");
    });
    
    $(".sp-btn").click(function() {
        var spCandidates = $(".sp-btn");
        var current = 0;
        var maxVotes = 3;
        for (let i = 0; i < spCandidates.length; i++) {
            if ($(spCandidates[i]).hasClass("selected")) {
                current++;
            }
            if (this === spCandidates[i]) {
                if ($(this).hasClass("selected")) {
                    current--;
                    $(this).removeClass("selected");
                    $(this).html("Select");
                } else {
                    if (current < 3) {
                        $(this).addClass("selected");
                        $(this).html("Selected");
                        current++;
                    }
                }
            } 
        }
        if (current === 3) {
            $(".sub").removeClass("disabled");
        }
    });
    $("#submit-vote").click(function() {
        $(".content").hide(250);
        $(".content-box").append(`
        <div class="col-md-12 d-flex justify-content-center h-75">
            <h4 class="align-self-center text-secondary">Thank You For Voting.</h4>
        </div>
        `);
    });
});

function toggleTabs(show) {
    var tabs = $(".process");
    for (let i = 0; i < tabs.length; i++) {
        if ($(tabs[i]).is(":visible")) {
            $(tabs[i]).slideUp(250, function() {
                show();
            });
            break;
        }
    }
}