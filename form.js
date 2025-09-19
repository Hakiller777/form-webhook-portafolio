document.getElementById('myForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const data = {
        Nombre: this.Nombre.value.trim(),
        Apellido: this.Apellido.value.trim(),
        Email: this.Email.value.trim(),
        Ciudad: this.Ciudad.value.trim(),
        Pais: this.Pais.value.trim(),
        Telefono: this.Telefono.value.trim()
    };

    const responseEl = document.getElementById('response');

    try {
        const response = await fetch('https://hook.us2.make.com/h82hnxdjmxhht2kr6ug7i37myjvwlan8', { // Reemplaza con tu webhook
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        responseEl.innerText = '¡Datos enviados correctamente!';
        responseEl.style.color = 'green';
        this.reset();
    } catch (error) {
        responseEl.innerText = 'Error al enviar los datos.';
        responseEl.style.color = 'red';
        console.error('Error al enviar datos al webhook:', error);
    }
});
