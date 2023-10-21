document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const btn = document.getElementById('add');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');

    /*btn.onclick = function (){
        console.log('Title: ', title.value);
        console.log('Desc: ', description.value);
    }*/
    btn.onclick = addTodo;

    function addTodo()
    {
        if(title.value === ''||description.value==='')
        {
            console.error('titulo y descripcion son obligatorios');
            alert.classList.remove('d-none');
            alert.innerText = 'Titulo y descripcion son requeridos!';

        }
        else
        {
            alert.classList.add('d-none');
            console.log('sape');
            const row = table.insertRow();
            row.innerHTML = `
                <td>${title.value}</td>
                <td>${description.value}</td>
                <td class="text-center">
                    <input type="checkbox">
                </td>
                <td class="text-right">
                    <button class="btn btn-primary mb-1">
                        <i class="fa fa-pencil"></i>
                    </button>
                    <button class="btn btn-danger mb-1 ml-1">
                        <i class="fa fa-trash"></i>
                    </button>
              </td>
            `;
        }
    }

})

//btn.addEventListener('click', function(){console.log('Clickeado')});