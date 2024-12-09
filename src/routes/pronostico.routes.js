import { Router } from 'express';
import { 
    getPronosticos, 
    getPronosticoPorId, 
    postPronostico, 
    putPronostico, 
    patchPronostico, 
    deletePronostico 
} from '../controladores/pronosticosCtrl.js'; // Asegúrate de tener los controladores para pronóstico

const router = Router();

// Rutas para el manejo de pronósticos
router.get('/pronosticos', getPronosticos);  // Obtener todos los pronósticos
router.get('/pronosticos/:id', getPronosticoPorId);  // Obtener pronóstico por ID
router.post('/pronosticos', postPronostico);  // Crear un nuevo pronóstico
router.put('/pronosticos/:id', putPronostico);  // Actualizar un pronóstico por ID
router.patch('/pronosticos/:id', patchPronostico);  // Actualizar parcialmente un pronóstico por ID
router.delete('/pronosticos/:id', deletePronostico);  // Eliminar un pronóstico por ID

export default router;
