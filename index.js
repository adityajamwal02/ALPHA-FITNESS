function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false

    var name = document.forms['myForm']["name"].value;
    if (name.length<1){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Must Fill the Entry");
        returnval = false;
    }

    var email = document.forms['myForm']["email"].value;
    if (email.length>25){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["phone"].value;
    if (phone.length<10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["password"].value;
    if (password.length < 6)
    {
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var password = document.forms['myForm']["password"].value;
    if(!/[A-Z]/.test(password))
    {
        seterror("pass", "*Password should have atleast one character in uppercase!");
        returnval = false;
    }

    var password = document.forms['myForm']["password"].value;
    if(!/[0-9]/.test(password))
    {
        seterror("pass", "*Password should have atleast one numeric value!");
        returnval = false;
    }


    var cpassword = document.forms['myForm']["cpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

