import { Router } from "express";
import { signin , login  } from "../controllers/user.controller.js";  

const router = Router() ;



router.route("signin").post(signin)
router.route("/login").post(login) ;


export default router ; 