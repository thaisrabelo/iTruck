function validateLogin()
{
    var email = document.loginForm.email.value;
    var senha = document.loginForm.senha.value;

    if(email == null || email == "")
    {
        alert("Email não pode estar vazio");
        return false;
    }
    else if (senha.length < 6)
    {
        alert ("Senha necessita ter mais de 6 caracteres");
        return false;
    }
    else
    {
        return true;
    }
}