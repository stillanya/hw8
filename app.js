const answerButton=document.querySelectorAll('.get_answer')
answerButton.forEach(button=>{
    button.onclick=()=>{
        const answer = button.nextElementSibling;
        answer.classList.toggle('visible');
        button.innerText = (button.innerText === 'Показать ответ') ? 'Скрыть ответ' : 'Показать ответ';
    };
});