const FORM_WEBHOOK_URL = "FORM_WEBHOOK_URL_AQUI";
const REQUEST_TIMEOUT_MS = 15000;

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
    const submitBtn = this.querySelector('button[type="submit"], input[type="submit"]');

    responseEl.innerText = 'Enviando...';
    responseEl.style.color = '';

    if (submitBtn) submitBtn.disabled = true;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
        const response = await fetch(FORM_WEBHOOK_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
            signal: controller.signal
        });

        if (!response.ok) {
            responseEl.innerText = `Error al enviar (HTTP ${response.status}).`;
            responseEl.style.color = 'red';
            return;
        }

        // No asumir que la respuesta es JSON.
        responseEl.innerText = '¡Datos enviados correctamente!';
        responseEl.style.color = 'green';
        this.reset();
    } catch (error) {
        if (error && (error.name === 'AbortError' || String(error).includes('AbortError'))) {
            responseEl.innerText = 'Tiempo de espera agotado. Intenta de nuevo.';
        } else {
            responseEl.innerText = 'Error al enviar los datos.';
        }
        responseEl.style.color = 'red';
        console.error('Error al enviar datos al webhook:', error);
    } finally {
        clearTimeout(timeoutId);
        if (submitBtn) submitBtn.disabled = false;
    }
});

