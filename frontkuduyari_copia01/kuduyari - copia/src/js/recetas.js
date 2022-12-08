
function loadData(){
    let request = sendRequest('receta/list', 'GET', '')
    let table = document.getElementById('recipe-table');
    table.innerHTML = "";
    request.onload = function(){
        
        let data = request.response;
        console.log(data);
        data.forEach(element => {
            table.innerHTML += `
                <tr>
                    <th>${element.codigoReceta}</th>
                    <th>${element.codigoMultimedia}</th>
                    <td>${element.tipo}</td>
                    <td>${element.nombre}</td>
                    <td>${element.ingredientes}</td>
                    <td>${element.preparacion}</td>
                    <td>${element.pueblo}</td>
                    <td>${element.comunidad}</td>

                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = "form_recetas.html?id=${element.codigoReceta}"'>Editar</button>
                        <button type="button" class="btn btn-danger" onclick='deleteReceta(${element.codigoReceta})'>Eliminar</button>
                    </td>
                </tr>

                `
        });
    }
    request.onerror = function(){
        table.innerHTML = `
            <tr>
                <td colspan="6">Error al recuperar los datos.</td>
            </tr>
        `;
    }
}

function loadReceta(codigoReceta){
    let request = sendRequest('receta/list/'+codigoReceta, 'GET', '')
    let multiID = document.getElementById('recipe-multiID')
    let type = document.getElementById('recipe-type')
    let name = document.getElementById('recipe-name')
    let ingredients = document.getElementById('recipe-ingredients')
    let preparation = document.getElementById('recipe-preparation')
    let town = document.getElementById('recipe-town')
    let community = document.getElementById('recipe-community')
    let id = document.getElementById('recipe-id')
    request.onload = function(){
        
        let data = request.response
        id.value = data.codigoReceta
        multiID.value = data.codigoMultimedia
        type.value = data.tipo
        name.value = data.nombre
        ingredients.value = data.ingredientes
        preparation.value = data.preparacion
        town.value = data.pueblo
        community.value = data.comunidad
    }
    request.onerror = function(){
        alert("Error al recuperar los datos.");
    }
}

function deleteReceta(codigoReceta){
    let request = sendRequest('receta/'+codigoReceta, 'DELETE', '')
    request.onload = function(){
        loadData()
    }
}

function saveReceta(){
    let multiID = document.getElementById('recipe-multiID').value
    let type = document.getElementById('recipe-type').value
    let name = document.getElementById('recipe-name').value
    let ingredients = document.getElementById('recipe-ingredients').value
    let preparation = document.getElementById('recipe-preparation').value
    let town = document.getElementById('recipe-town').value
    let community = document.getElementById('recipe-community').value
    let id = document.getElementById('recipe-id').value
   
    let data = {'codigoReceta': id,'codigoMultimedia': multiID, 'tipo': type, 'nombre':name,'ingredientes': ingredients, 'preparacion': preparation, 'pueblo':town, 'comunidad':community  }
  
    let request = sendRequest('receta/', id ? 'PUT' : 'POST', data)
    request.onload = function(){
        window.location = 'recetas.html';
    }
    request.onerror = function(){
        alert('Error al guardar los cambios.')
    }
}