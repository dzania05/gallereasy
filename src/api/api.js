import app from 'firebase/app';
import 'firebase/database';

const config = {
	apiKey: "AIzaSyD7O6_g_h4c8JV0rJGWc9Bfse2Ac4nM1Nc",
    authDomain: "gipheasy.firebaseapp.com",
    databaseURL: "https://gipheasy.firebaseio.com",
    projectId: "gipheasy",
    storageBucket: "gipheasy.appspot.com",
    messagingSenderId: "607036294710",
    appId: "1:607036294710:web:50d94b7d642838a9477a97"
}

const API_KEY = 'FygBnn4VIU3FSMY4PGN5QLtJFtQODAQw';

class Api {
	constructor(){
		app.initializeApp(config);
		this.db = app.database();
	}

	getData = (q) => {
		return fetch(`http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${API_KEY}&limit=8`);
	}

	favourites = () => this.db.ref('favourites');
}

export default Api;