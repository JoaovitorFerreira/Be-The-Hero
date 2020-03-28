const express = require('express');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//GET
routes.get('/ongs', OngController.index);
routes.get('/incidents', IncidentController.index);
routes.get('/profile', ProfileController.index);

//POST
routes.post('/session',SessionController.create );
routes.post('/ongs', OngController.create);
routes.post('/incidents',IncidentController.create);

//DELETE
routes.delete('/incidents/:id',IncidentController.delete);


module.exports = routes;