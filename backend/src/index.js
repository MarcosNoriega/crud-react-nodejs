const app = require('./config/serve');

app.listen(app.get('port'), () => {
    console.log('aplicacion en el puerto', app.get('port'));
    
});