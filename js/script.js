function sendEmail() {
    let params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_08bl6js";
    const templateID = "template_gcgpi6s";

    emailjs.send(serviceID, templateID, params).then(res => {
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("sua mensagem foi enviada com sucesso!");
        })
        .catch((err) => console.log(err));
};