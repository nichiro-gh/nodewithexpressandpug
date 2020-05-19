import express from 'express';
import path from 'path';
import http from 'http';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: number = 3000;
var events = new Array<CatchEvent>(); 

//Locals.config().port;

class CatchEvent {
	public data: string;

	constructor(data: string) {
		this.data = data;
	}
}

app.set('view engine', 'pug');
app.set('view options', { pretty: true });
app.set('views', path.join(__dirname, '../views'));

app.locals.pretty = true;

app.use(bodyParser.json());

app.get("/helloworld", function (req, res) {
	res.render('helloworld', { title: 'Hello World', app})
});

app.use(favicon(path.join(__dirname,'../assets','favicon.ico')));
app.use(express.static(path.join(__dirname, '../assets')));

// Start the server on the specified port
app.listen(port, (_error: any) => {
	if (_error) {
		return console.log("Error: ", _error);
	}
	console.log("\x1b[33m%s\x1b[0m", `Server :: Running @ http://localhost:${port}`);
});

