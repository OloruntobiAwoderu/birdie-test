const db = require('../config/dbConfig');


function getAll() {
	return db('events').select('payload').limit(100);
}


module.exports = { 
	getAll,
}