import { app } from './src/express-app';

import './src/controller';

const port = process.env.PORT || 8005;
app.listen(port, function () {
    console.log('Listening on port ' + port);
});
