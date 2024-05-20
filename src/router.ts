import { Router } from "express";
import { body, param } from "express-validator";
import { createtechnicalskills, gettechnicalskills} from "./handlers/technicalskills";
import { createemployees, getemployees } from "./handlers/employees";
import { privateRoute, signin, signup } from "./handlers/user";
import { createworkexperience, getworkexperience } from "./handlers/workexperience";
import { authenticate } from "./middlewares/auth";
const router = Router();

router.get('/technicalskills', gettechnicalskills);
router.post('/technicalskills',
body('title').isString().notEmpty(),
body('tools').isString().notEmpty(),
body('proficiency').isString().notEmpty(),
body('employeesId').isInt().optional(),
createtechnicalskills);

/**
 * employees Routes
 */
router.post('/employees', authenticate,
body('name').isString().notEmpty(),
body('email').isString().notEmpty(),
body('gender').isString().notEmpty(),
body('city').isString().notEmpty(),
createemployees);

router.get('/employees/:id', param('id').isInt() ,getemployees);

/**
 * workexperience Routes
 */

router.post('/workexperience',
body('company').isString().notEmpty(),
body('role').isString().notEmpty(),
body('years').isInt().notEmpty(),
body('technicalskillsId').isInt().optional(),
createworkexperience);

router.get('/workexperience', getworkexperience);



router.post('/signup', 
body('email').isString().isEmail().notEmpty(),
body('password').isString().notEmpty(),
signup);

router.post('/signin', 
body('email').isString().isEmail().notEmpty(),
body('password').isString().notEmpty(),
signin);

router.get('/private',authenticate, privateRoute)


export default router;