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

    //student
    $(".student-admission").hide(); 
    $(".student-details").hide();
    $(".student-promotion").hide();

    //teacher
    $(".all-teacher").hide();
    $(".add-teacher").hide();
    $(".teacher-details").hide();

    // Subject
    $(".add-subject").hide();

    // Subject
    $(".show-class").hide();

    $(".t-admin").on("click", function(){
        $(".student-admission").hide();
        $(".student-details").hide();
        $(".student-promotion").hide();
        $(".all-teacher").hide();
        $(".add-teacher").hide();
        $(".teacher-details").hide();
        $(".add-subject").hide();
        $(".show-class").hide();
        $(".body-dashboard").show();
    });
    $(".btn-admission").on("click", function(){
        $(".student-details").hide();
        $(".body-dashboard").hide();
        $(".student-promotion").hide();
        $(".all-teacher").hide();
        $(".add-teacher").hide();
        $(".teacher-details").hide();
        $(".add-subject").hide();
        $(".show-class").hide();
        $(".student-admission").show();
    });
    $(".btn-studentDetail").on("click", function(){
        $(".student-admission").hide();
        $(".body-dashboard").hide();
        $(".student-promotion").hide();
        $(".all-teacher").hide();
        $(".add-teacher").hide();
        $(".teacher-details").hide();
        $(".add-subject").hide();
        $(".show-class").hide();
        $(".student-details").show();
    });
    $(".btn-studentPromotion").on("click", function(){
        $(".student-promotion").show();
        $(".student-details").hide();
        $(".student-admission").hide();
        $(".body-dashboard").hide();
        $(".all-teacher").hide();
        $(".add-teacher").hide();
        $(".add-subject").hide();
        $(".show-class").hide();
        $(".teacher-details").hide();
    });
    $(".btn-allTeacher").on("click", function(){
        $(".student-promotion").hide();
        $(".student-details").hide();
        $(".student-admission").hide();
        $(".body-dashboard").hide();
        $(".add-teacher").hide();
        $(".teacher-details").hide();
        $(".add-subject").hide();
        $(".show-class").hide();
        $(".all-teacher").show();
    });
    $(".btn-addTeacher").on("click", function(){
        $(".student-promotion").hide();
        $(".student-details").hide();
        $(".student-admission").hide();
        $(".body-dashboard").hide();
        $(".all-teacher").hide();
        $(".teacher-details").hide();
        $(".add-subject").hide();
        $(".show-class").hide();
        $(".add-teacher").show();
    });
    $(".btn-teacherDetail").on("click", function(){
        $(".student-promotion").hide();
        $(".student-details").hide();
        $(".student-admission").hide();
        $(".body-dashboard").hide();
        $(".all-teacher").hide();
        $(".add-teacher").hide();
        $(".add-subject").hide();
        $(".show-class").hide();
        $(".teacher-details").show();
    });
    $(".btn-subject").on("click", function(){
        $(".student-promotion").hide();
        $(".student-details").hide();
        $(".student-admission").hide();
        $(".body-dashboard").hide();
        $(".all-teacher").hide();
        $(".add-teacher").hide();
        $(".teacher-details").hide();
        $(".show-class").hide();
        $(".add-subject").show();
    });
    $(".btn-classes").on("click", function(){
        $(".student-promotion").hide();
        $(".student-details").hide();
        $(".student-admission").hide();
        $(".body-dashboard").hide();
        $(".all-teacher").hide();
        $(".add-teacher").hide();
        $(".teacher-details").hide();
        $(".add-subject").hide();
        $(".show-class").show();
    });


});