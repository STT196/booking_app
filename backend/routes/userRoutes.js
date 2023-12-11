import { Router } from "express";
import { registerUser,login,profileInfo} from "../controller/userController.js";
const router=Router();

router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/profile').get(profileInfo);



export default router;