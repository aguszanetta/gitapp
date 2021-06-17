const BASE_URL = '/api/v1';

async function getLast() {
    const resp = await fetch(`${BASE_URL}/movements`);
    const { movements } = await resp.json();
    return movements;
}

async function getIncomes() {
    const resp = await fetch(`${BASE_URL}/movements?type=income`);
    const { movements } = await resp.json();
    return movements;
}

async function update(movement) {
    const resp = await fetch(`${BASE_URL}/movements/${movement.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movement),
    });

    return resp.json();
}

async function create(movement) {
	const resp = await fetch(`${BASE_URL}/movements`, {
	method: 'POST',
	headers: {
	'Content-Type': 'application/json'
	},
	body: JSON.stringify(movement),
	});
	console.log(resp);
	if(resp.status == 201){
		alert('Se creo correctamente');
	}else{
		alert('Error del Servidor');
	}
	return resp.json();
}

async function remove(movement) {
    console.log('delete:', movement.id);
    const resp = await fetch(`${BASE_URL}/movements/${movement.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },        
    });

    return resp.json();
}

export default {
    create,
    update,
    remove,
    getLast,
    getIncomes,
};
