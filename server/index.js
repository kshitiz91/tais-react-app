import 'babel-polyfill';
import express from 'express';
import bodyParser  from 'body-parser';
import ssrApp from './ssrApp';
import Loadable from 'react-loadable';

const port = process.env.PORT || 3000 ;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('dist'));

ssrApp(app);

 Loadable.preloadAll().then(()=>{
		app.listen(port, () => {
			console.log(`Running on the ${port}`);
		});
 }).catch((err)=>console.log(err));
