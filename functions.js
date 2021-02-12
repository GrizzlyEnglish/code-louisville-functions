submitForm = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    console.log(username);
    console.log(password);
    test();

    if (username === "ryan" && password == "password") {
        window.location = "file:///C:/Users/formy/Workspace/code-louisville-functions/auth.html";
    }
};