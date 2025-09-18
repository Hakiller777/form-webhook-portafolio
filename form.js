document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
        Nombre: this.Nombre.value,
        Apellido: this.Apellido.value,
        Email: this.Email.value,
        Ciudad: this.Ciudad.value,
        Pais: this.Pais.value,
        Telefono: this.Telefono.value
    };

    fetch('https://hook.us2.make.com/h82hnxdjmxhht2kr6ug7i37myjvwlan8', {  // <-- reemplaza con tu URL del webhook
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => {
        document.getElementById('response').innerText = '¡Datos enviados correctamente!';
        this.reset();
    })
    .catch(error => {
        document.getElementById('response').innerText = 'Error al enviar los datos.';
        console.error(error);
    });
});
