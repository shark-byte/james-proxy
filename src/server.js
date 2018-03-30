const express = require('express');
const React = require('react');
// const { renderToString } = require('react-dom/server');
// const App = require('./client/App');
const Html = require('./client/Html');
// const { ServerStyleSheet } = require('styled-components'); // <-- importing ServerStyleSheet

const request = require('request-promise-native');

const port = 3000;
const server = express();

// server.get('/', (req, res) => {
//   const sheet = new ServerStyleSheet(); // <-- creating out stylesheet

//   const body = renderToString(sheet.collectStyles(<App />)); // <-- collecting styles
//   const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
//   const title = 'Server side Rendering with Styled Components';

//   res.send(
//     Html({
//       body,
//       styles, // <-- passing the styles to our Html template
//       title
//     })
//   );
// });

// Creating a single index route to server our React application from.
server.get('/restaurants/:id', async (req, res) => {
  let { id } = req.params;
  let galleryHtml;
  let nearbyHtml;
  let sidebarHtml;
  let overviewHtml;
  const services = {
    'sidebar': `http://sidebar:3003/restaurants/${id}`,
  }
  // var components = {};
  // const services = {
  //   'gallery': `http://localhost:3001/restaurant/${id}`,
  //   'nearby': `http://localhost:8000/restaurant/${id}`,
  //   'sidebar': `http://localhost:3003/restaurant/${id}`,
  //   'overview': '',
  // }

  // request(services['gallery'], (error, response, body) => {
  //   if (error) {
  //     throw error;
  //   } else {
  //     galleryHtml = body;
  //   }
  // });

  // request(services['nearby'], (error, response, body) => {
  //   if (error) {
  //     throw error;
  //   } else {
  //     nearbyHtml = body;
  //   }
  // });

  await request(services['sidebar'], (error, response, body) => {
    if (error) {
      throw error;
    } else {
      // sidebarHtml = body;;
      // console.log(body);
      sidebarHtml = body;
    }
  });

  // let components = {
  //   gallery: galleryHtml,
  //   nearby: nearbyHtml,
  //   sidebar: sidebarHtml,
  //   overview: overviewHtml
  // }
  // let components = {
  //   sidebar: sidebarHtml
  // }
  // const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
  // console.log('components', components);
  // const body = renderToString(sheet.collectStyles(<App components={components}/>)); // <-- collecting styles
  // const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
  console.log('sidebarHtml', sidebarHtml);
  res.send(
    Html({
      sidebarHtml
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);

