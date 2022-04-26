import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://reaxt-my-burger-7f8cf.firebaseio.com/',
});

export default instance;
