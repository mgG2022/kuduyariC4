
function loadData(){
    let request = sendRequest('administrador/list', 'GET', '')
    let table = document.getElementById('administrador-table');
    table.innerHTML = "";
    request.onload = function(){
        
        let data = request.response;
        console.log(data);
        data.forEach(element => {
            table.innerHTML += `
                <tr>
                    <th>${element.codigoAdministrador}</th>
                    <td>${element.documento}</td>
                    <td>${element.nombre}</td>
                    <td>${element.apellido}</td>
                    <td>${element.telefono}</td>
                    <td>${element.correoElectronico}</td>

                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = "form_administrador.html?id=${element.codigoAdministrador}"'>Editar</button>
                        <button type="button" class="btn btn-danger" onclick='deleteAdministrador(${element.codigoAdministrador})'>Eliminar</button>
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

function loadAdministrador(codigoAdministrador){
    let request = sendRequest('administrador/list/'+codigoAdministrador, 'GET', '')
    let documento = document.getElementById('admin-document')
    let name = document.getElementById('admin-name')
    let lastName = document.getElementById('admin-last-name')
    let telephoneNumber = document.getElementById('admin-telephone-number')
    let email = document.getElementById('admin-email')
    let id = document.getElementById('admin-id')
    request.onload = function(){
        
        let data = request.response
        id.value = data.codigoAdministrador
        documento.value = data.documento
        name.value = data.nombre
        lastName.value = data.apellido
        telephoneNumber.value = data.telefono
        email.value = data.correoElectronico
    }
    request.onerror = function(){
        alert("Error al recuperar los datos.");
    }
}

function deleteAdministrador(codigoAdministrador){
    let request = sendRequest('administrador/'+codigoAdministrador, 'DELETE', '')
    request.onload = function(){
        loadData()
    }
}

function saveAdministrador(){
    let documento = document.getElementById('admin-document').value
    let name = document.getElementById('admin-name').value
    let lastName = document.getElementById('admin-last-name').value
    let telephoneNumber = document.getElementById('admin-telephone-number').value
    let email = document.getElementById('admin-email').value
    let id = document.getElementById('admin-id').value
    let data = {'codigoAdministrador': id,'documento':documento,'nombre':name,'apellido': lastName, 'telefono': telephoneNumber, 'correoElectronico':email }
    let request = sendRequest('administrador/', id ? 'PUT' : 'POST', data)
    request.onload = function(){
        window.location = 'administrador.html';
    }
    request.onerror = function(){
        alert('Error al guardar los cambios.')
    }
}