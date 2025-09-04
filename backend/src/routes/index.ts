const expressRouter = require('express');
const router = expressRouter.Router();

const projectsRoutes = require('./project.routes');
const chatRoutes = require('./chat.routes');

router.get('/', (req:any, res:any) => res.send('Bienvenido al backend de este proyecto!'));
router.use('/projects', projectsRoutes);
router.use('/chatai', chatRoutes);


module.exports = router;