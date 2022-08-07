import { Router } from "express";
import Howold from "../../controllers/Howold";


const howoldRoutes = Router();

howoldRoutes.get('/howold/:dob', Howold.calculateAge);

export default howoldRoutes;