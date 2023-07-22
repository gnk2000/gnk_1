var arr = new Array("#home","#qualification","#languages_known");
var count_page_no = 0;

var colors = Array("blue","rgb(250, 5, 46)","rgb(192, 11, 228)","rgb(12, 218, 245)","rgb(12, 245, 206)","rgb(20, 245, 12)","rgb(245, 230, 12)","rgb(245, 136, 12)","rgb(245, 12, 12)");

var color_count = 0;
var change = 0;

setInterval(change_border,1000);
setInterval(change_profile_background,1000);

function change_border(){
    document.getElementById("brand-name").style.borderColor = colors[color_count];
    color_count++;
    if(color_count == colors.length) color_count = 0;
}

function change_profile_background(){
    if(change == 0){
        document.getElementById("profile-photo").style.background = "rgb(247, 5, 45)";
        change = 1;
    }else if(change == 1){
        document.getElementById("profile-photo").style.background = "aqua";
        change = 2;
    }else{
        document.getElementById("profile-photo").style.background = "rgb(0, 60, 255";
        change = 0;
    }
}


function previous(){
    if(count_page_no > 0){
        count_page_no--;
        document.getElementById("prev").setAttribute("href",arr[count_page_no]);
    }
}

function next(){
    if(count_page_no < arr.length - 1){
        count_page_no++;
        document.getElementById("next").setAttribute("href",arr[count_page_no]);
    }
}

function change_count(element){
    var text = element.text;
    switch(text){
        case "Home", "Naveen Kumar Gandham":
            count_page_no = 0;
            break;
        case "Qualification":
            count_page_no = 1;
            break;
        case "Languages Known":
            count_page_no = 2;
            break;
    }
}