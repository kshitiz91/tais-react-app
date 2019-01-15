import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {BaseLayout} from '../src/templates/BaseLayout';

export default (req, store, context) =>{

	const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context = {context}>
					<BaseLayout/>
				</StaticRouter>
			</Provider>
	);
	const htmlString = `<!DOCTYPE html>
    <html>
      <head>
				<title>React starter app From Server</title>
				<link rel="stylesheet" href="style.css">
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
      </head>
      <body>
        <div id="app">${content}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(
            /</g,
            '\\u003c'
          )}
				</script>
        <script src="/bundle.js"></script>
      </body>
		</html>`;
//	console.log(htmlString);
	return htmlString;

}