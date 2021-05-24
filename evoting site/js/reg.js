
$(document).ready(function() {
    var citySelect = false;
    var form = $("#regForm");
    $(".name").hide();
    $(".complete-registration").hide();
    $("#city-select").change(function() {
        if (!citySelect) {
            $(".name").show(250);
            citySelect = true;
        } else {
            $("#validate").prop("disabled", false);
            $(".complete-registration").hide(250);
            $(".name-field").prop("disabled", false);
            $(".name-field").removeClass("is-valid");
            clearCompleteReg();
        }
    });
    $("#validate").click(function() {
        var nameFields = $(".name-field");
        let valid = false;
        for (let i = 0; i < nameFields.length; i++) {
            if (nameFields[i].value.length === 0) {
                if (!nameFields[i].classList.contains("is-invalid")) {
                    $(nameFields[i]).addClass("is-invalid");
                }
            } else {
                $(nameFields[i]).removeClass("is-invalid");
                $(nameFields[i]).addClass("is-valid");
                $(this).prop("disabled", true);
            }
        }
        if (validFields(nameFields)) {
            $(".name-field").prop("disabled", true);
            setTimeout(() => {$(".complete-registration").show(250)}, 1500);
        }
    });
});

function validFields(fields) {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].classList.contains("is-invalid")) {
            return false;
        } 
    }
    return true;
}

function validatePassword() {
    let passFields = $(".pwd");
    return passFields[0].value === passFields[1].value; 
}

function validateBirthday() {
    let birthday = $("input[type=date]")[0].value;
    console.log(birthday);
}

function clearCompleteReg() {
    $(".bday").val("");
    $("#district-select").val("");
    $(".pwd").val("");
    $("#email").val("");
    $("#phoneNum").val("");
}