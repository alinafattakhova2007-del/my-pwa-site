document.querySelector('.feedback-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert(result.success);
            form.reset();
        } else if (result.error) {
            alert(result.error);
        }
    } catch (error) {
        alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
        console.error(error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});