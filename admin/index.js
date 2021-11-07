$(document).ready(function(){
    //dashboard
    $(".btn-class1").hide();
    $(".t-admin").hide();
    $(".t-teacher").hide();
    $(".t-student").hide();
    $(".t-parents").hide();

    //teacher
    $(".btn-teacherClick").hide();
    $(".btn-allTeacher").hide();
    $(".btn-teacherDetail").hide();
    $(".btn-addTeacher").hide();
    $(".btn-teacherPayment").hide();
    
    //student
    $(".btn-studentClick").hide();
    $(".btn-admission").hide();
    $(".btn-studentDetail").hide();
    $(".btn-cancellAdmission").hide();
    $(".btn-studentPromotion").hide();

    $(".btn-dashboard").on("click", function (){
        $(".btn-studentClick").hide();
        $(".btn-admission").hide();
        $(".btn-studentDetail").hide();
        $(".btn-cancellAdmission").hide();
        $(".btn-studentPromotion").hide();
        $(".btn-teacherClick").hide();
        $(".btn-allTeacher").hide();
        $(".btn-teacherDetail").hide();
        $(".btn-addTeacher").hide();
        $(".btn-teacherPayment").hide();
        $(".btn-class1").toggle();
        $(".t-admin").toggle(300);
        $(".t-teacher").toggle(600);
        $(".t-student").toggle(900);
        $(".t-parents").toggle(1200);
    });

    $(".btn-teacher").on("click", function(){
        $(".btn-studentClick").hide();
        $(".btn-admission").hide();
        $(".btn-studentDetail").hide();
        $(".btn-cancellAdmission").hide();
        $(".btn-studentPromotion").hide();
        $(".btn-class1").hide();
        $(".t-admin").hide();
        $(".t-teacher").hide();
        $(".t-student").hide();
        $(".t-parents").hide();
        $(".btn-teacherClick").toggle();
        $(".btn-allTeacher").toggle(300);
        $(".btn-teacherDetail").toggle(600);
        $(".btn-addTeacher").toggle(900);
        $(".btn-teacherPayment").toggle(1200);
    })


    $(".btn-student").on("click", function (){
        $(".btn-class1").hide();
        $(".t-admin").hide();
        $(".t-teacher").hide();
        $(".t-student").hide();
        $(".t-parents").hide();
        $(".btn-teacherClick").hide();
        $(".btn-allTeacher").hide();
        $(".btn-teacherDetail").hide();
        $(".btn-addTeacher").hide();
        $(".btn-teacherPayment").hide();
        $(".btn-studentClick").toggle();
        $(".btn-admission").toggle(300);
        $(".btn-studentDetail").toggle(600);
        $(".btn-cancellAdmission").toggle(900);
        $(".btn-studentPromotion").toggle(1200);
    });

    //body content
    $(".student-admission").hide(); 
    $(".student-details").hide();
    $(".student-promotion").hide();

    $(".t-admin").on("click", function(){
        $(".body-dashboard").show();
        $(".student-admission").hide();
        $(".student-details").hide();
        $(".student-promotion").hide();
    });
    $(".btn-admission").on("click", function(){
        $(".student-admission").show();
        $(".student-details").hide();
        $(".body-dashboard").hide();
        $(".student-promotion").hide();
    });
    $(".btn-studentDetail").on("click", function(){
        $(".student-details").show();
        $(".student-admission").hide();
        $(".body-dashboard").hide();
        $(".student-promotion").hide();
    });
    $(".btn-studentPromotion").on("click", function(){
        $(".student-promotion").show();
        $(".student-details").hide();
        $(".student-admission").hide();
        $(".body-dashboard").hide();
    });


});