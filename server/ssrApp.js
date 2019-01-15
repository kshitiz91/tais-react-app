import configureStore from '../src/store/configureStore';
import serverHtml from './serverHtml';
import rootSaga from '../src/saga';

const ssrApp = (app)=>{
	app.get('*', (req, res)=>{

	const store = configureStore();
		const context = {};
		if (context.url){
			return res.redirect(301, context.url);
		}

		// store.runSaga(rootSaga).done.then(()=>{
		// 		const content = serverHtml(req, store, context);
		// 		res.status(200).send(content);
		// }).catch(()=>{
		// 	console.log('store saga gives error');
		// })
			const content = serverHtml(req, store, context);
			 res.status(200).send(content);
		//	store.close();
	});
}

export default ssrApp;