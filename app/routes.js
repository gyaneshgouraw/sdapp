

var DataCollection = require('./models/DataCollection');


function getDataCollection(res){
	DataCollection.find(function(err, cust) {
			if (err)
				res.send(err)
			res.json(cust); // return all todos in JSON format
		});
};

module.exports = function(app) {

	//--------====================================--customer collection------start------------=======================--------------
	app.get('/api/DataCollection', function (req, res) {
		getDataCollection(res);
	});


app.post('/api/DataCollection',function(req, res) {
    var collection = new DataCollection();
	var obj = { [req.body.key]: req.body.value}
	collection.data=obj;
    collection.save(function(err) {
        if(err) res.send(err);
        getDataCollection(res);
    });
});






	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});


};
