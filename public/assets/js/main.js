var pinArray = [];
var cordData = cordData = {'x': 0, 'y': 0, 'width': 0, 'height': 0,'comment':''};
function initCustomScrollBar() {

    $(".c-scrollbar").each(function () {
        $(this).mCustomScrollbar("update");
    });


}
function isMobile() {
    if ($(window).width() < 767) {
        return true;
    } else {
        return false;
    }
}

$(document).on('click', function (e) {
    if ($(e.target).is('.c_dropdown_box,.c_dropdown_box *')) {
    }
    else if ($(e.target).is('.datedropper,.datedropper *')) {
    }
    else if ($(e.target).is('.c_dropdown_toogler, .c_dropdown_toogler *')) {
        var parent = $(e.target).parents(".c_dropdown");
        if (parent.hasClass('show')) {
            parent.removeClass('show');
        } else {
            parent.addClass('show');
        }
    }
    else if ($('.c_dropdown').hasClass('show')) {
        $('.c_dropdown').removeClass('show');
    }
});


$(document).on("focus",".search_tag_box input",function () {
    var obj = $(this);
    obj.closest(".super_adder").addClass("show");
    $("body").addClass("super_adder_activated");
});


(function() {
    var $offline, $online;

    $online = $('.online');

    $offline = $('.offline');

    Offline.options = {
        // to check the connection status immediatly on page load.
        checkOnLoad: false,

        // to monitor AJAX requests to check connection.
        interceptRequests: true,

        // to automatically retest periodically when the connection is down (set to false to disable).
        reconnect: {
            // delay time in seconds to wait before rechecking.
            initialDelay: 3,

            // wait time in seconds between retries.
            delay: 10
        },

        // to store and attempt to remake requests which failed while the connection was down.
        requests: true
    };

    Offline.on('confirmed-down', function() {
        return $online.fadeOut(function() {
            return $offline.fadeIn();
        });
    });



    Offline.on('confirmed-up', function() {
        return $offline.fadeOut(function() {
            return $online.fadeIn();
        });
    });

}).call(this);


var run = function(){
	if (Offline.state === 'up'){
 		
 		Offline.check();
 	}
}
 setInterval(run, 5000); 

function generateRows(value,obj){

    console.log(value,obj);

    var tableParent = obj.closest(".super_adder").find(".super_adder_table");

    var lengthofTr = tableParent.find("table tbody tr").length;

    if (tableParent.css("display") != "block") {
        tableParent.slideDown();
    }

    var rowHtml = $("#demo_row").html();

    tableParent.find("table tbody").append(rowHtml);
    var lastRow = tableParent.find("table tbody tr").last();
    lastRow.find(".sno").html(lengthofTr+1);
    lastRow.find(".namer").html(value);

    setTimeout(function () {
        lastRow.addClass("setIt");
    }, 400);

}

console.log($('input[data-role="tagsinput"].create_items_table'))

$('input[data-role="tagsinput"].create_items_table').on('itemAdded', function(event) {
    
    console.log("ADDED!!!")
    var obj = $(this);
    generateRows(event.item,obj);
});



function removeItem(deletedValue,obj){
    var tableParent =  obj.closest(".super_adder");

    var allTr = tableParent.find("table tbody tr");

    allTr.each(function () {
        var obj = $(this);
        if(obj.find(".namer").html()==deletedValue){
            obj.addClass("removing_upper");

            setTimeout(function () {
                obj.remove();
            }, 600);
        }
    });

}



$('input[data-role="tagsinput"].create_items_table').on('itemRemoved', function(event) {
    var obj = $(this);
    removeItem(event.item,obj );
    obj.closest(".super_adder").addClass("show");
});

$(document).on("click",".perform_tbl2_delete",function () {
    var obj = $(this);
    var removableTr = obj.closest("tr");
    var deletedVal = removableTr.find(".namer").text();
    obj.closest(".super_adder").find('input[data-role="tagsinput"].create_items_table').tagsinput('remove', deletedVal);
});

$(document).on("click",".add_all_btn",function () {
    $(".super_adder").removeClass("show");
    $("body").removeClass("super_adder_activated");

    $(".super_adder_table").slideUp();
    $('input[data-role="tagsinput"].create_items_table').tagsinput('removeAll');
    var tableParent = $(".super_adder_table");
    tableParent.find("table tbody").html("");
});


$(document).on("click",".save_all_btn",function () {
    $(".super_adder").removeClass("show");
    $("body").removeClass("super_adder_activated");

    $(".super_adder_table").slideUp();
    $('input[data-role="tagsinput"].create_items_table').tagsinput('removeAll');
    var tableParent = $(".super_adder_table");
    tableParent.find("table tbody").html("");
});

$(document).on("change","#on_change_medication",function () {
   var obj = $(this);
   var selectedVal = obj.val();
   console.log(selectedVal);

    $(".manage_area_onchange").hide();
    $('input[data-role="tagsinput"].create_items_table').tagsinput('removeAll');


   if(selectedVal=="add_drug"){

       $(".add_drug_area").slideDown();

   }else if(selectedVal=="chemo_regimens"){

       $(".chemo_regims_area").slideDown();

   }
   else if(selectedVal=="infusions"){

       $(".infusions_area").slideDown();

   }
});


$(document).on("click",".save_manage_area",function () {
    $(".manage_area_onchange").slideUp();
});


$(document).on('click', function (e) {
    if ($(e.target).is('.c_dropdown_box2,.c_dropdown_box2 *')) {
    }
    else if ($(e.target).is('.datedropper,.datedropper *')) {
    }
    else if ($(e.target).is('.c_dropdown_toogler2, .c_dropdown_toogler2 *')) {
        var parent = $(e.target).parents(".c_dropdown2");
        if (parent.hasClass('show')) {
            parent.removeClass('show');
        } else {
            parent.addClass('show');
        }
    }
    else if ($('.c_dropdown2').hasClass('show')) {
        $('.c_dropdown2').removeClass('show');
    }
});


$(document).on("click", ".form_inputer", function (e) {
    if ($(e.target).is('.inlint_form,.inlint_form *')) {
        return true;
    }
    var obj = $(this);
    var mainParenter = obj.parents(".c_dropdown2");
    mainParenter.find(".form_inputer").removeClass("active");
    obj.addClass("active");
    mainParenter.find(".c_dropdown_toogler2").text(obj.text());
    if (obj.hasClass("openselectDate")) {
        mainParenter.find(".my_log_dates").show();
    } else {
        mainParenter.find(".my_log_dates").hide();
    }
});

$(document).on("click", ".right_sidebar_toggler", function () {
    var obj = $(this);
    $(".siderbar_op").hide();
    if (obj.hasClass("first")) {
        $("#sidebar1").show();
    } else if (obj.hasClass("second")) {
        $("#sidebar2").show();
    } else if (obj.hasClass("third")) {
        $("#sidebar3").show();
    } else {
        var sidebarAttr = obj.attr('data-sidebar');
        if (typeof sidebarAttr !== typeof undefined && sidebarAttr !== false) {
            $("#"+sidebarAttr).show();
        }else {
            $("#sidebar1").show();
        }
    }
});


$(document).on('click', function (e) {
    var body = $("body");
    if ($(e.target).is('.right-sidebar,.right-sidebar *')) {
    }
    else if ($(e.target).is('.right_sidebar_toggler, .right_sidebar_toggler *')) {
        if (body.hasClass('show_sidebar')) {
            body.removeClass('show_sidebar');
        } else {
            body.addClass('show_sidebar');
        }
    }
    else if (body.hasClass('show_sidebar')) {
        body.removeClass('show_sidebar');
    }
});

$(document).on("keyup", ".searchassignlist", function () {
    var obj = $(this);
    var string = obj.val().toLowerCase();
    var iserList = obj.closest(".user_assign_box").find(".assign_user_list");
    iserList.find(".us_name").each(function () {
        var obj2 = $(this);
        var txtString = obj2.text().toLowerCase();
        var u_list = obj2.closest(".sm_user_box");
        if (txtString.indexOf(string) != -1) {
            u_list.show();
        } else {
            u_list.hide();
        }
    });
});

$(document).on("change", ".onchkshow", function () {
    var obj = $(this);
    var shower = obj.attr("data-show");
    var viewer = obj.parents(".onchkshowparent").find("#" + shower);
    if (obj.is(":checked") === true) {
        viewer.show();
    } else {
        viewer.hide();
    }
});

$(document).on("click",".assign_user",function () {
    var obj = $(this);
    var u_name = obj.find(".us_name").text();
    obj.closest(".c_dropdown").find(".c_dropdown_toogler").find("p").text(u_name);
});



function removetextxtItem(deletedValue){
    var valuedElem = $("#textToTag.create_items_table").parent().find('input[type="hidden"]');
    var valuesOfElem = valuedElem.val();
    var myarray = JSON.parse(valuesOfElem,true);

    myarray = jQuery.grep(myarray, function(value) {
        return value != deletedValue;
    });

    valuedElem.val(JSON.stringify(myarray));
}


$(document).on("click",".text-remove",function () {
    var obj = $(this);
    if(obj.parent().attr("class")=="text-button"){
        var deletedValue = obj.parent().find(".text-label").text();
        removetextxtItem(deletedValue);

        $(".namer").each(function () {
            var obr = $(this);
            if(obr.text()==deletedValue) {
                var removableTr = obr.closest("tr");

                removableTr.addClass("removing_upper");

                setTimeout(function () {
                    removableTr.remove();
                }, 600);
            }

        });
    }
});

/*
var oldAdArrayLength = 0;
function generateRows(values){
    var myarray = JSON.parse(values,true);

    var tableParent = $(".super_adder_table");

    if(myarray.length>oldAdArrayLength) {
        oldAdArrayLength = myarray.length;
        //new values added
        var newAddedItem = myarray[oldAdArrayLength-1];
        newAddedItem = $.trim(newAddedItem);

        if(newAddedItem!="") {
            if (myarray.length > 0) {
                if (tableParent.css("display") != "block") {
                    tableParent.slideDown();
                }

                var sno = myarray.length;
                var rowHtml = $("#demo_row").html();


                tableParent.find("table tbody").append(rowHtml);
                var lastRow = tableParent.find("table tbody tr").last();
                lastRow.find(".sno").html(sno);
                lastRow.find(".namer").html(newAddedItem);
                setTimeout(function () {
                    lastRow.addClass("setIt");
                }, 400);
            }
        }
    }
}*/


$(document).ready(function () {

    $('.starrr').starrr();




    jQuery("#textToTag")
        .textext({
            plugins: 'tags'
        })
        .keypress(function (event) {
            //'Space' key is pressed in keyboard
            if (event.which == 32) {
                addTag();
            }
        });


    jQuery("#textToTag.create_items_table").bind('setFormData', function(e, data, isEmpty)
    {
        var textext = $(e.target).textext()[0];
        generateRows(textext.hiddenInput().val());
    });



    function addTag() {
        //Take the value from text input
        var tag = $('#textToTag').val();

        //Clear the text input and add tag
        if ($.trim(tag) != "") {
            $('#textToTag').val('').textext()[0]
                .tags().addTags([tag]);
        }
    }



    $(".dropzone").dropzone({
        url: 'upload.php',
        height: 235,
        width: '100%',
        text: '',
        border: '1px solid #ebebeb',
        maxFileSize: '9MB',
    })


    $('.syllabus-owl').owlCarousel({
        loop: false,
        margin: 15,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    $('.pin_comm_box').owlCarousel({
        loop: false,
        margin: 15,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.sidebar-tickets').owlCarousel({
        loop: false,
        margin: 15,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(document).on("click", ".ticket_owl_controls a.prev", function () {
        var obj = $(".sidebar-tickets");
        obj.find('.owl-prev').trigger("click");
    });

    $(document).on("click", ".ticket_owl_controls a.next", function () {
        var obj = $(".sidebar-tickets");
        obj.find('.owl-next').trigger("click");
    });


    $(".c-scrollbar").mCustomScrollbar({
        theme: "inset-2-dark",
        axis: "x",
        scrollInertia: 0,
        mouseWheelPixels: 500,
        autoDraggerLength: false
    });

    $(".c_vertical_scrollbar").mCustomScrollbar({
        theme: "inset-2-dark",
        axis: "y",
        scrollInertia: 0,
        mouseWheelPixels: 250,
        autoDraggerLength: false
    });


    $('.printMe').click(function () {
        window.print();
    });

    var current_yyyymm_ = moment().format("YYYYMM");
    $("#event-calendar").pb_calendar({
        schedule_list: function (callback_, yyyymm_) {
            var temp_schedule_list_ = {};
            temp_schedule_list_[current_yyyymm_ + "03"] = [
                {'ID': 1, style: "orange"}
            ];
            temp_schedule_list_[current_yyyymm_ + "10"] = [
                {'ID': 2, style: "purple"},
                {'ID': 3, style: "yellow"},
            ];
            temp_schedule_list_[current_yyyymm_ + "20"] = [
                {'ID': 4, style: "red"},
                {'ID': 5, style: "blue"},
                {'ID': 6, style: "green"},
            ];
            callback_(temp_schedule_list_);
        },
        schedule_dot_item_render: function (dot_item_el_, schedule_data_) {
            dot_item_el_.addClass(schedule_data_['style'], true);
            return dot_item_el_;
        }
    });


    $(document).on("click", ".perform_tbl_delete", function () {
        $(this).parents("tr").addClass("delete_perform");
    });

    $(document).on("click", ".evidence_box .trigger", function () {
        $(this).parents("li").toggleClass("active");
    });


    $(document).on("click", ".hide_tbl_del_action", function () {
        $(this).parents("tr").removeClass("delete_perform");
    });


    $(document).on("click", ".setting_box_toogle", function () {
        $(this).parents(".setting_box").toggleClass("open");
    });

    $(document).on("click",".rejectIt",function () {
       $("body").toggleClass("show_reject_box");
    });

    $(document).on("click",".approveIt",function () {
        $("body").toggleClass("show_approve_box");
    });

    $(document).on("click",".start_pin",function () {
        $("body").toggleClass("pin_active");
    });

    $(document).on("click",".cancel_rejection",function () {
        $("body").removeClass("show_reject_box");
    });

    $(document).on("click",".cancel_approve",function () {
        $("body").removeClass("show_approve_box");
    });

    //pin custom code

   $(".pin_zone").prepend('<a href="javascript:;" class="pin_picker"></a>');

    $(document).on("click",".pin_picker",function (e) {
        var obj = $(this);
        if($("body").hasClass("pin_active")){
            if ($(e.target).is('.close_me,.close_me *')) {
                return true;
            }
            if ($(e.target).is('.close_me,.close_me *')) {
                return true;
            }
            var xLocation = e.offsetX === undefined ? e.originalEvent.layerX : e.offsetX;
            var yLocation = e.offsetY === undefined ? e.originalEvent.layerY : e.offsetY;
            var documentWidth = $(window).width();
            var documentHeight = $(window).height();

            cordData = {'x': xLocation, 'y': yLocation, 'width': documentWidth, 'height': documentHeight,'comment':''};

            var commentBoxi = $(".comment_popup_box");


            var cBoxwidth = commentBoxi.width();
            var cBoxheight = commentBoxi.height();

            var newY = yLocation-cBoxheight-25;
            if(newY<0){
                newY = 0;
            }

            var newX = xLocation-(cBoxwidth/2);
            if(newX<0){
                newX = 0;
            }

            var styleAttr = "top:" + newY + "px;";

            //if not mobile
            if(documentWidth>767) {
                styleAttr += "left:" + newX + "px;";
            }

            commentBoxi.attr("style",styleAttr);
            $("#comment_data").val('');
            commentBoxi.show();

        }
    });

    $(document).on("submit",".commenter_box",function (e) {
        var commentData = $("#comment_data").val();
        cordData.comment = commentData;
        pinArray.push(cordData);
        console.log(pinArray);
        $(".comment_popup_box").hide();
        e.preventDefault();
    });

    $(document).on("click",".close_me",function () {
       $(".comment_popup_box").hide();
    });

    $(document).on("click",".collapse_trigger",function () {
        var obj = $(this);
        var parent = obj.closest(".collapse_box");
        parent.toggleClass("show");
    });

    $(document).on("click",".custom_selecter",function () {
        var obj = $(this);
        var selectedValue = obj.attr("data-val");
        var parent = obj.closest(".custom_selecter_box");
        parent.find(".custom_selecter_value").val(selectedValue);
        parent.find(".custom_selecter").removeClass("active");
        obj.addClass("active");
    });

    $(document).on("click",".select_opt",function () {
        var obj = $(this);
        var parent = obj.closest(".options_list");
        parent.find(".select_opt").removeClass("active");
        obj.addClass("active");
    });

    $(document).on("click",".tab_swicther",function () {
        var obj = $(this);
        var targetElem = obj.attr("data-id");
        targetElem = $("#"+targetElem);
        var parent = obj.closest(".custom_tabi");
        parent.find(".c_tab").removeClass("active");
        parent.find(".tab_swicther").removeClass("active");
        obj.addClass("active");
        targetElem.addClass("active");
    });

    $(document).on("click",".close_card",function () {
       $(this).closest(".card").remove();
    });


    $(document).on("click", ".show_inline_form", function () {
        var mainBox = $(this).parents(".card_box").find(".adder_box");
        mainBox.addClass("open");
        var inputArea = mainBox.find(".input_zone");
        if (isMobile()) {
            inputArea.css("height", inputArea.attr("data-height"));
        } else {
            inputArea.css("width", inputArea.attr("data-width"));
        }
        var triggerer = mainBox.find(".show_inline_form");
        triggerer.find(".add").hide();
        triggerer.find(".cancel").show();
        triggerer.removeClass("show_inline_form").addClass("hide_inline_form");
    });

    $(document).on("click", ".hide_inline_form", function () {
        var mainBox = $(this).parents(".card_box").find(".adder_box");
        mainBox.removeClass("open");
        var inputArea = mainBox.find(".input_zone");
        if (isMobile()) {
            inputArea.css("height", 0);
        } else {
            inputArea.css("width", 0);
        }
        var triggerer = mainBox.find(".hide_inline_form");
        triggerer.find(".add").show();
        triggerer.find(".cancel").hide();
        triggerer.removeClass("hide_inline_form").addClass("show_inline_form");
    });


    $(".input_zone").each(function () {
        var obj = $(this);
        if (isMobile()) {
            obj.attr("data-height", obj.height());
            obj.css("height", 0);
        } else {
            obj.attr("data-width", obj.width());
            obj.css("width", 0);
        }
    });

    $(window).on('resize', function () {
        $(".input_zone").each(function () {
            var obj = $(this);
            if (isMobile()) {
                obj.attr("data-height", obj.height());
                obj.css("height", 0);
                obj.css("width", 'auto');
            } else {
                obj.attr("data-width", obj.width());
                obj.css("width", 0);
                obj.css("height", 'auto');
            }
        });
    });


    $(".datepicker").each(function () {
       $(this).attr( "data-format","d-m-Y");
    });

    $('.datepicker').dateDropper();

    $('.datepicker_2').datepicker({
        format: 'dd-MM-yyyy'
    });


    $('.timepicker').timeDropper();

});

$(document).on("click", ".tabe_menu .list-group-item-action", function () {
    setTimeout(function () {
        initCustomScrollBar();
    }, 600);
});

$(document).on("click",".search_shower a",function () {
   $(this).closest(".search_shower").toggleClass("show_input");
});

$(document).on('click', function (e) {
    if ($(e.target).is('.menu-left,.menu-left *')) {
    }
    else if ($(e.target).is('.menu_opener, .menu_opener *')) {
        if ($('body').hasClass('show_menu')) {
            $('body').removeClass('show_menu')
        } else {
            $('body').addClass('show_menu')
        }
    }
    else if ($('body').hasClass('show_menu')) {
        $('body').removeClass('show_menu')
    }
});


$(document).on("change", ".onchangeTickethandler", function () {
    var obj = $(this);
    obj.parents(".ticket_hanlder").attr("data-ticket", obj.val());
});

$(document).on("change", ".onchangePriorityhandler", function () {
    var obj = $(this);
    obj.parents(".priority_handler").attr("data-priority", obj.val());
});


$(document).on("click", ".file_upload", function () {
    var parent = $(this).parent();
    parent.find('input[type="file"]').click();
});

$(document).on("click",".delete_student_box",function () {
    var obj = $(this);
    obj.closest(".student_box").attr("data-request","delete_request").addClass("show_form");
});

$(document).on("click",".block_student_box",function () {
    var obj = $(this);
    obj.closest(".student_box").attr("data-request","block_request").addClass("show_form");
});

$(document).on("click",'.alert_form button[type="reset"]',function () {
    var obj = $(this);
    obj.closest(".student_box").attr("data-request","").removeClass("show_form");
});

$(document).on("click",".show_all_delete",function () {
   $("body").toggleClass("show_deletes");
});

$(document).on("click", ".c_acccordin_link", function () {
    var obj = $(this);
    var parent = obj.closest(".c_accordin_row");
    if (parent.hasClass("active")) {
        parent.removeClass("active");
        parent.find(".c_accordin_body").first().slideUp();
    } else {
        parent.addClass("active");
        parent.find(".c_accordin_body").first().slideDown();
    }
});

$(document).on("click", ".toggler_icon", function () {
    var obj = $(this);
    obj.toggleClass("active");
    var parent = obj.closest(".c_accordin_row");
    if (parent.hasClass("active")) {
        parent.removeClass("active");
        parent.find(".c_accordin_body").first().slideUp();
    } else {
        parent.addClass("active");
        parent.find(".c_accordin_body").first().slideDown();
    }
});


$(".c_accordin_row").each(function () {
    var parent = $(this);
    if (parent.hasClass("active")) {
        parent.find(".c_accordin_body").first().slideDown();
    }
});

$(document).on("click", ".role_select", function () {
    var obbj = $(this);
    $(".role_select").html("Select");
    obbj.html('<i class="fas fa-check">&nbsp;</i>Selected');
    $(".removeDisable").attr("disabled", false);
});


$(document).ready(function () {
    CanvasJS.addColorSet("myShaded", ['#fec400', '#29cc97', '#4b7efe', '#5b6378']);
    var chart = new CanvasJS.Chart("donutchart", {
        animationEnabled: true,
        colorSet: "myShaded",
        legend: {
            itemWidth: 50       // Comment itemWidth to see the difference
        },
        data: [{
            radius: "65%",  //change the radius here
            showInLegend: true,
            legendText: "{label}",
            type: "doughnut",
            startAngle: 60,
            innerRadius: 45,
            indexLabelLineColor: "transparent",
            indexLabelFontSize: 18,
            indexLabelFontFamily: "Quicksand",
            indexLabelFontWeight: 600,
            indexLabel: "#percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                {y: 34, label: "ADR", indexLabelFontColor: "#fcc600"},
                {y: 34, label: "ADR", indexLabelFontColor: "#40cc91"},
                {y: 23, label: "ADR", indexLabelFontColor: "#4d7aff", exploded: true},
                {y: 23, label: "ADR", indexLabelFontColor: "#5b637a"},
            ]
        }]
    });
    chart.render();


    CanvasJS.addColorSet("myShaded", ['#fec400', '#29cc97', '#4b7efe', '#5b6378']);
    var chart2 = new CanvasJS.Chart("performance_chart", {
        animationEnabled: true,
        dataPointWidth: 10,
        theme: "light1",
        axisX: {
            gridThickness: 1,
            gridColor: "#eee",
            lineColor: "#eee",
        },
        axisY: {
            gridThickness: 0,
            lineThickness: 0,
            labelFontColor: "transparent",
            tickColor: "transparent"
        },
        data: [{
            type: "column",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                {x: 10, y: 71, color: '#2dcb86'},
                {x: 20, y: 55, color: '#2dcb86'},
                {x: 30, y: 50, color: '#2dcb86'},
                {x: 40, y: 65, color: '#2dcb86'},
                {x: 50, y: 92, color: '#2dcb86'},
                {x: 60, y: 68, color: '#2dcb86'},
                {x: 70, y: 38, color: '#2dcb86'},
                {x: 80, y: 71, color: '#2dcb86'},
                {x: 90, y: 54, color: '#2dcb86'},
                {x: 150, y: 60, color: '#ff5e72'},
                {x: 40, y: 65, color: '#2dcb86'},
                {x: 140, y: 92, color: '#ff5e72'},
                {x: 60, y: 68, color: '#2dcb86'},
                {x: 70, y: 38, color: '#2dcb86'},
                {x: 80, y: 71, color: '#2dcb86'},
                {x: 90, y: 54, color: '#2dcb86'},
                {x: 100, y: 60, color: '#ff5e72'},
                {x: 110, y: 36, color: '#ff5e72'},
                {x: 40, y: 65, color: '#2dcb86'},
                {x: 50, y: 92, color: '#2dcb86'},
                {x: 60, y: 68, color: '#2dcb86'},
                {x: 70, y: 38, color: '#2dcb86'},
                {x: 80, y: 71, color: '#2dcb86'},
                {x: 90, y: 54, color: '#2dcb86'},
                {x: 100, y: 60, color: '#2dcb86'},
                {x: 110, y: 36, color: '#ff5e72'},
                {x: 110, y: 36, color: '#ff5e72'},
                {x: 120, y: 49, color: '#ff5e72'},
                {x: 130, y: 21, color: '#ff5e72'}
            ]
        }]
    });
    chart2.render();
});


var color = Chart.helpers.color;
window.onload = function () {


    var chartContainer = $('.chart');

    chartContainer.each(function (index) {
        var canvas = $(this);

        var chartDataFromAttr = canvas.attr("data-chart");
        var chartDataFromAttrArray = chartDataFromAttr.split(',');

        var attrColor = canvas.attr("data-color");

        ctx = canvas.get(0).getContext("2d");

        var gradient = ctx.createLinearGradient(0, 0, 0, 70);
        gradient.addColorStop(0, 'rgba(48, 204, 136, 0.8)');
        gradient.addColorStop(0.5, 'rgba(48, 204, 136, 0.20)');
        gradient.addColorStop(1, 'rgba(48, 204, 136, 0)');


        var chartyColor = window.chartColors.green;
        if (typeof attrColor !== typeof undefined && attrColor !== false) {
            if (attrColor == "red") {
                chartyColor = window.chartColors.red;

                gradient = ctx.createLinearGradient(0, 0, 0, 70);
                gradient.addColorStop(0, 'rgba(255, 33, 33, 0.8)');
                gradient.addColorStop(0.5, 'rgba(255, 33, 33, 0.20)');
                gradient.addColorStop(1, 'rgba(255, 33, 33, 0)');

            }
        }


        var lineChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: '',
                backgroundColor: gradient,
                borderWidth: 2,
                radius: 2,
                borderColor: chartyColor,
                pointBackgroundColor: chartyColor,
                data: chartDataFromAttrArray
            }]
        };

        new Chart(ctx, {
            type: 'line',
            data: lineChartData,
            options: {
                layout: {
                    padding: {
                        right: 5
                    }
                },
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            display: false,
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }], xAxes: [{
                        ticks: {
                            display: false,
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }]
                },
                tooltips: {
                    enabled: false,
                    mode: 'index',
                    intersect: false
                }
            }
        });


    });


};


$('.custom-number-field').each(function () {
    var spinner = $(this);
    var inHtml = spinner.html();

    var nHtml = '<div class="quantity-nav"><div class="quantity-button quantity-down">-</div>' + inHtml + '<div class="quantity-button quantity-up">+</div></div>';

    spinner.html(nHtml);

    var input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});


$(function () {

    $('.sort_box').sortable({connectWith: ".sort_box"});

})
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
if (x.length > 0) {
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 0; j < selElmnt.length; j++) {
            /*for each option in the original select element,
             create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                 and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        $(".custom-select").find("select").trigger("change");
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);


        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
             and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
}



function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
     except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
 then close all select boxes:*/
document.addEventListener("click", closeAllSelect);



$(document).on("click",".chkgetdata",function () {
    var obj = $(this);
    var parent = obj.closest(".custom-control");
    var superparent = obj.closest(".insertchkgetdatabox");
    var input = superparent.find(".insertchkgetdata");

    var Uname = parent.find("label").text();

    allValues = [];

    var inputval = input.val();
    var allValues = inputval.split(',');

    Uname = $.trim(Uname);

    if(obj.is(":checked")) {
        allValues.push(Uname);
    }else{
        allValues.splice( $.inArray(Uname,allValues) ,1 );
    }
    //removing empty values
    allValues = allValues.filter(function(v){return v!==''});

    input.val(allValues.join());
});

