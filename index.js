/* ------------------ */
/* Search App project */
/* ------------------ */

/* pseudo-Constants */

var EVENT_COLL="Event"


/* Initializations */

var express=require('express');

var app=express();
app.set('views', __dirname + '/views');
app.use('/Search/static',express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.set('view options', {layout: false});
app.use(express.favicon());


/* Util functions */

function fnRenderMain(pRequest,pResponse)
{
 pResponse.render('main',{title: 'MAIINN'});
}


function fnGenericResponse(pError,pResult,pResponse)
{
	if (pError)
	{
		pResponse.send({Status: "KO", Message: pError});
	}
	else
	{
		pResponse.send(pResult);
	}
}


/* More inits */

app.configure('development', function(){
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});


app.configure('production', function(){
        app.use(express.errorHandler()); 
});


/* Define Routing */

app.get('/Search',fnRenderMain);

/* Start Server Listening */
app.listen(7777);