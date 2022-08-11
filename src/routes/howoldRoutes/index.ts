import { Router } from "express";
import Howold from "../../controllers/Howold";
import apiRateLimit from "../../middleware/apiRateLimit";


const howoldRoutes = Router();

howoldRoutes.get("/howold/:dob", apiRateLimit, Howold.calculateAge);

export default howoldRoutes;