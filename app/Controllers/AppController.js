const database = require('../Config/database.js');

class AppController {
	constructor() {
		database.on('error', console.error.bind(console, 'connection error:'));
		database.once('open', function() {    
			console.log('conexão com o banco bem sucedida');
		});
	}
	
}

var appController = new AppController();