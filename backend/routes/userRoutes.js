import { Router } from "express";
import { registerUser,login,profileInfo,logout} from "../controller/userController.js";
const router=Router();

router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/profile').get(profileInfo);
router.route('/logout').post(logout);




export default router;