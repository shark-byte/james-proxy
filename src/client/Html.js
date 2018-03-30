module.exports = ({ sidebarHtml }) => `
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="styles.css">
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,700|Roboto:400,700" rel="stylesheet">
        <link rel="shortcut icon" href="http://res.cloudinary.com/madlicorice/image/upload/v1520448614/WeGot-favicon.ico">
        <title>Shark Byte</title>
        <style>
          #midsection {
            margin: 40px 0;
            padding: 0 40px;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          #overview-wrapper {
            margin: 0 40px 0 0;
          }
        </style>
    </head>
    <body>
      ${sidebarHtml}
    </body>
  </html>
`;
