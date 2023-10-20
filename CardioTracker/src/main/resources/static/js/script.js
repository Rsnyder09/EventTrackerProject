console.log('script.js');

window.addEventListener('load', function(e) {
	console.log('Page loaded');
	init();

});

function init() {
	//ADD event listeners for existing button
	loadAllCardioSessions();
	
	document.cardioForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let cardioId = document.cardioForm.cardioId.value;
		if (!isNaN(cardioId) && cardioId > 0) {
			getCardioSessionById(cardioId);
		}
	});
	
	

	document.newCardioForm.addCardioButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		let newCardio = {
			enabled: document.newCardioForm.enabled.value,
			title: document.newCardioForm.title.value,
			description: document.newCardioForm.description.value,
			cardioDate: document.newCardioForm.cardioDate.value,
			startTime: document.newCardioForm.startTime.value,
			stopTime: document.newCardioForm.stopTime.value,
			distance: document.newCardioForm.distance.value,
			urlimage: document.newCardioForm.urlimage.value,
			type: { id: document.newCardioForm.type.value },
			difficultyLevel: { id: document.newCardioForm.difficultyLevel.value },
		}
		addCardioSession(newCardio);
	});

	document.updateFormDiv.updateCardioButton.addEventListener('click', function(e) {
		e.preventDefault();
		
		let updateCardio = {
			/*id: cardioId.id,*/
			enabled: document.updateFormDiv.enabled.value,
			title: document.updateFormDiv.title.value,
			description: document.updateFormDiv.description.value,
			cardioDate: document.updateFormDiv.cardioDate.value,
			startTime: document.updateFormDiv.startTime.value,
			stopTime: document.updateFormDiv.stopTime.value,
			distance: document.updateFormDiv.distance.value,
			urlimage: document.updateFormDiv.urlimage.value,
			//type: { id: document.updateFormDiv.type.id.value },
			//difficultyLevel: { id: document.updateFormDiv.difficultyLevel.id.value },
		}
		updateCardioSession(updateCardio);
	});



};

function updateButtonFunction(){
	
	
	let div = document.getElementById('editCardioFormDiv')
	div.textContent = "";
	
	
	let button = document.createElement('button')
	button.name = "updateButton";
	button.textContent = "Update Session";
	
	
	button.addEventListener('click', displayUpdateCardioSession )
	div.appendChild(button);
}



function displayError(message) {
	let detailDiv = document.getElementById('CardioDetailDiv');
	detailDiv.textContent = '';

	let cardioDiv = document.getElementById('cardioListDiv');
	cardioDiv.textContent = '';

	let h2 = document.createElement('h2');
	h2.textContent = message;

	detailDiv.appendChild(h2);
	cardioDiv.appendChild(h2);

}


function loadAllCardioSessions() {

	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/workouts');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let cardio = JSON.parse(xhr.responseText);
				displayAllCardioSessions(cardio);
			}
			else {
				displayError('Cardio Session not found')
			}
		}
	};
	xhr.send();
}



function displayAllCardioSessions(cardioList) {

	let div = document.getElementById('cardioListDiv');

	let h3 = document.createElement('h3');
	h3.textContent = 'All Cardio sessions';
	div.appendChild(h3);


	let table = document.createElement('table');
	div.appendChild(table);

	let thead = document.createElement('thead');
	table.appendChild(thead);

	let trHead = document.createElement('tr');
	thead.appendChild(trHead);

	let thID = document.createElement('th');
	thID.textContent = 'ID';
	trHead.appendChild(thID);

	let thTitle = document.createElement('th');
	thTitle.textContent = 'Title';
	trHead.appendChild(thTitle);

	if (cardioList && Array.isArray(cardioList) && cardioList.length > 0) {
		for (let cardio of cardioList) {



			let tbody = document.createElement('tbody');
			table.appendChild(tbody);

			let trBody = document.createElement('tr');
			tbody.appendChild(trBody);

			let tdID = document.createElement('td');
			tdID.textContent = cardio.id
			trBody.appendChild(tdID);

			let tdTitle = document.createElement('td');
			tdTitle.textContent = cardio.title
			trBody.appendChild(tdTitle);

			/*let ol = document.createElement('ol')
			div.appendChild(ol);
		    
					let li = document.createElement('li');
					li.value = cardio.id;
					li.textContent = cardio.title;
					ol.appendChild(li);*/

		}
	}
};

function getCardioSessionById(cardioId) {

	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/workouts/' + cardioId);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let cardio = JSON.parse(xhr.responseText)
				displayCardioSessionById(cardio);
			}
			else {
				displayError('Cardio Session not found')
			}
		}
	}
	xhr.send();
};

function displayCardioSessionById(cardio) {
	let cardioDetailDiv = document.getElementById('CardioDetailDiv');
	cardioDetailDiv.textContent = '';
	

	let title = document.createElement('h1');
	title.name = "title"
	title.id = "title"
	title.textContent = cardio.title;
	cardioDetailDiv.appendChild(title);
	
	let id = document.createElement('h1')
	id.textContent = cardio.id
	id.id = 'id';
	id.name = 'id';	
	cardioDetailDiv.appendChild(id)

	let blockQ = document.createElement('blockquote')
	blockQ.textContent = cardio.description;
	cardioDetailDiv.appendChild(blockQ)

	let ul = document.createElement('ul');
	cardioDetailDiv.appendChild(ul);

	let liDate = document.createElement('li');
	liDate.textContent = 'Date: ' + cardio.cardioDate;
	ul.appendChild(liDate)

	let liStartTime = document.createElement('li');
	liStartTime.textContent = 'Start: ' + cardio.startTime;
	ul.appendChild(liStartTime);

	let liStopTime = document.createElement('li');
	liStopTime.textContent = 'Stop: ' + cardio.stopTime;
	ul.appendChild(liStopTime);

	let liDistance = document.createElement('li');
	liDistance.textContent = 'Distance: ' + cardio.distance;
	ul.appendChild(liDistance);

	let liType = document.createElement('li');
	liType.textContent = 'Cardio Type: ' + cardio.type.name;
	ul.appendChild(liType);

	let liDifficultyLevel = document.createElement('li');
	liDifficultyLevel.textContent = 'Difficulty Level: ' + cardio.difficultyLevel.name;
	ul.appendChild(liDifficultyLevel);
	
	let br =  document.createElement('br');
	cardioDetailDiv.appendChild(br);

	let urlimage = document.createElement('IMG');
	urlimage.src = cardio.urlimage;
	urlimage.height = 400;
	urlimage.width = 400;
	cardioDetailDiv.appendChild(urlimage);
	
	cardioDetailDiv.appendChild(br);
	
	let form = document.createElement('form');
	form.name = "updateForm"
	cardioDetailDiv.appendChild(form);
	
	/*let button = document.createElement('button')
	button.name = "updateButton";
	button.textContent = "Update Session";
	
	
	button.addEventListener('click', displayUpdateCardioSession )
	form.appendChild(button);*/
	
	//OR
	
	updateButtonFunction();
	
}



function addCardioSession(newCardio) {
	console.log(newCardio)
	let xhr = new XMLHttpRequest();

	xhr.open('POST', 'api/workouts');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let createdCardio = JSON.parse(xhr.responseText);
				displayCardioSessionById(createdCardio);
			}
			else {
				displayError("ERROR Creating Cardio Session" + xhr.status);
			}
		}


	};
	xhr.setRequestHeader('Content-type', 'application/json');
	let newCardioJson = JSON.stringify(newCardio);
	console.log(newCardioJson);
	xhr.send(newCardioJson);

}





function updateCardioSession(cardioId){
	console.log(cardioId)
	let xhr = new XMLHttpRequest();

	xhr.open('PUT', 'api/workouts/' + cardioId);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let updated = JSON.parse(xhr.responseText);
				displayCardioSessionById(updated);
			}
			else {
				displayError("ERROR updating Cardio Session" + xhr.status);
			}
		}


	}
	xhr.setRequestHeader('Content-type', 'application/json');
	let updateCardioJson = JSON.stringify(cardioId);
	console.log(updateCardioJson);
	xhr.send(updateCardioJson);
	
	
};

function displayUpdateCardioSession(cardio){
	cardio.preventDefault();
	
	let updateDiv = document.getElementById('editCardioFormDiv');
	updateDiv.textContent = '';
	
	let br = document.createElement('br');
	updateDiv.appendChild(br);
	
	let h3 = document.createElement('h3');
	h3.textContent = 'Update Cardio Session';
	updateDiv.appendChild(h3);
	
	let updateForm = document.createElement('form');
	updateForm.name = "updateFormDiv";
	updateForm.id = "updateFormDiv";
	updateDiv.appendChild(updateForm);
	
	/*let id = document.createElement('input');
	id.type = "number";
	id.name = "id";
	id.id = 'id';
	updateForm.appendChild(id);*/
	
	let enabled = document.createElement('input');
	enabled.type = "hidden";
	enabled.name = "enabled";
	enabled.id = "enabled";
	enabled.value = "true";
	updateForm.appendChild(enabled);
	
	let titleLabel = document.createElement('label');
	let titleInput = document.createElement('input');
	
	titleLabel.textContent = 'Title';
	titleLabel.htmlFor = "title";
	titleInput.name = "title";
	titleInput.type = "text";
	updateForm.appendChild(titleLabel);
	updateForm.appendChild(titleInput);
	
	let br1 = document.createElement('br');
	updateForm.appendChild(br1);
	
	let descriptionLabel = document.createElement('label');
	let descriptionInput = document.createElement('input');
	
	descriptionLabel.textContent = 'Description';
	updateForm.appendChild(descriptionLabel);
	updateForm.appendChild(descriptionInput);
	
	let br2 = document.createElement('br');
	updateForm.appendChild(br2);
	
	let cdLabel = document.createElement('label');
	let cdInput = document.createElement('input');
	
	cdLabel.textContent = 'Date';
	cdLabel.htmlFor = 'date';
	cdInput.type = "date";
	cdInput.name = 'date'
	updateForm.appendChild(cdLabel);
	updateForm.appendChild(cdInput);
	
	let br3 = document.createElement('br');
	updateForm.appendChild(br3);
	
	let startLabel = document.createElement('label');
	let startInput = document.createElement('input');
	
	startLabel.textContent = 'Start Time';
	startLabel.htmlFor = 'startTime';
	startInput.name = 'startTime';
	startInput.type = "time";
	updateForm.appendChild(startLabel);
	updateForm.appendChild(startInput);
	
	let br4 = document.createElement('br');
	updateForm.appendChild(br4);
	
	let stopLabel = document.createElement('label');
	let stopInput = document.createElement('input');
	
	stopLabel.textContent = 'Stop Time';
	stopLabel.htmlFor = 'stopTime';
	stopInput.name = 'stopTime';
	stopInput.type = "time";
	updateForm.appendChild(stopLabel);
	updateForm.appendChild(stopInput);
	
	let br5 = document.createElement('br');
	updateForm.appendChild(br5);
	
	let distanceLabel = document.createElement('label');
	let distanceInput = document.createElement('input');
	
	distanceLabel.textContent = 'Distance';
	distanceLabel.htmlFor = 'distance';
	distanceInput.name = 'distance';
	distanceInput.type = "number";
	updateForm.appendChild(distanceLabel);
	updateForm.appendChild(distanceInput);
	
	let br6 = document.createElement('br');
	updateForm.appendChild(br6);
	
	let urlImageLabel = document.createElement('label');
	let urlImageInput = document.createElement('input');
	
	urlImageLabel.textContent = 'Image-URL';
	urlImageLabel.htmlFor = 'urlimage';
	urlImageInput.name = 'urlimage';
	updateForm.appendChild(urlImageLabel);
	updateForm.appendChild(urlImageInput);
	
	let br7 = document.createElement('br');
	updateForm.appendChild(br7);
	
	let typeLabel = document.createElement('label');
	let typeSelect = document.createElement('select');
	let typeOption1 = document.createElement('option');
	let typeOption2 = document.createElement('option');
	let typeOption3 = document.createElement('option');
	let typeOption4 = document.createElement('option');
	let typeOption5 = document.createElement('option');
	let typeOption6 = document.createElement('option');
	let typeOption7 = document.createElement('option');
	let typeOption8 = document.createElement('option');
	
	typeLabel.textContent = 'Choose the type of cardio: ';
	typeLabel.htmlFor = 'type';
	typeSelect.name = 'type';
	typeSelect.id = 'type';
	updateForm.appendChild(typeLabel);
	updateForm.appendChild(typeSelect);
	
	typeOption1.value = 1;
	typeOption2.value = 2;
	typeOption3.value = 3;
	typeOption4.value = 4;
	typeOption5.value = 5;
	typeOption6.value = 6;
	typeOption7.value = 7;
	typeOption8.value = 8;
	
	typeOption1.textContent = "Walk";
	typeOption2.textContent = "Hike";
	typeOption3.textContent = "Run";
	typeOption4.textContent = "Jump Rope";
	typeOption5.textContent = "Row";
	typeOption6.textContent = "Bike";
	typeOption7.textContent = "Stairs";
	typeOption8.textContent = "Swim";
	
	typeSelect.appendChild(typeOption1);
	typeSelect.appendChild(typeOption2);
	typeSelect.appendChild(typeOption3);
	typeSelect.appendChild(typeOption4);
	typeSelect.appendChild(typeOption5);
	typeSelect.appendChild(typeOption6);
	typeSelect.appendChild(typeOption7);
	typeSelect.appendChild(typeOption8);
	
	let br8 = document.createElement('br');
	updateForm.appendChild(br8);
	
	
	let DifficultyLabel = document.createElement('label');
	let DifficultyeSelect = document.createElement('select');
	let DifficultyOption1 = document.createElement('option');
	let DifficultyOption2 = document.createElement('option');
	let DifficultyOption3 = document.createElement('option');
	let DifficultyOption4 = document.createElement('option');
	let DifficultyOption5 = document.createElement('option');
	let DifficultyOption6 = document.createElement('option');
	let DifficultyOption7 = document.createElement('option');
	let DifficultyOption8 = document.createElement('option');
	let DifficultyOption9 = document.createElement('option');
	let DifficultyOption10 = document.createElement('option');
	
	DifficultyLabel.textContent = 'Choose the difficulty level: '
	DifficultyLabel.htmlFor = 'difficultyLevel';
	DifficultyeSelect.name = 'difficultyLevel';
	DifficultyeSelect.id = 'difficultyLevel';
	updateForm.appendChild(DifficultyLabel);
	updateForm.appendChild(DifficultyeSelect);
	
	DifficultyOption1.value = 1;
	DifficultyOption2.value = 2;
	DifficultyOption3.value = 3;
	DifficultyOption4.value = 4;
	DifficultyOption5.value = 5;
	DifficultyOption6.value = 6;
	DifficultyOption7.value = 7;
	DifficultyOption8.value = 8;
	DifficultyOption9.value = 9;
	DifficultyOption10.value = 10;
	
	DifficultyOption1.textContent = "Minimum Effort";
	DifficultyOption2.textContent = "Light And Easy";
	DifficultyOption3.textContent = "Comfortable Pace";
	DifficultyOption4.textContent = "Comfortable With Some Effort";
	DifficultyOption5.textContent = "Progressive Pace";
	DifficultyOption6.textContent = "Hard Activity";
	DifficultyOption7.textContent = "Vigorous Activity";
	DifficultyOption8.textContent = "Hard Intensity";
	DifficultyOption9.textContent = "Very Hard Intensity";
	DifficultyOption10.textContent = "All-Out Sprint";
	
	DifficultyeSelect.appendChild(DifficultyOption1);
	DifficultyeSelect.appendChild(DifficultyOption2);
	DifficultyeSelect.appendChild(DifficultyOption3);
	DifficultyeSelect.appendChild(DifficultyOption4);
	DifficultyeSelect.appendChild(DifficultyOption5);
	DifficultyeSelect.appendChild(DifficultyOption6);
	DifficultyeSelect.appendChild(DifficultyOption7);
	DifficultyeSelect.appendChild(DifficultyOption8);
	DifficultyeSelect.appendChild(DifficultyOption9);
	DifficultyeSelect.appendChild(DifficultyOption10);
	
	let br9 = document.createElement('br');
	updateForm.appendChild(br9);
	
	let button = document.createElement('button');
	button.name = "updateCardioButton";
	button.id = "updateCardioButton";
	button.textContent = "Update";
	updateForm.appendChild(button);
}



