const users = require('../service/users'); 

const getAll =  async (req, res, next) => {
	try {
		const response = await users.getAll();
  
		res.status(200).json(response);
    
	} catch (error) {
		next(error);
	}
};

const add =  async (req, res, next) => {
	try {
    
		const result = await users.add(req.body);
  
		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
};

const att =  async (req, res, next) => {
	try {
		const result = await users.att(req.body);
  
		res.status(200).json(result);
    
	} catch (error) {
		next(error);
	}
};

const del =  async (req, res, next) => {
	try {
		const result = await users.del(req.params);
  
		res.status(200).json(result);
    
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAll,
	add,
	att,
	del
};