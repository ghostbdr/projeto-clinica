
const form = document.getElementById("formCreate");

form.addEventListener("submit", async (event) => {
        try{
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const response = await fetch('http://127.0.0.1/PROJETO/create.php', {
                        method: 'POST',
                        headers: {'Content-Type':'application/json'},
                        body:JSON.stringify(data)
                        
                        });
        
        const resposta = await response.json();
        if (resposta == true) {
            window.location.href = './pages/home.html'
        }

       


        }catch(error) { console.log(error) }
        
            
})