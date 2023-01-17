import { Router } from "express";
const router = Router();

import {
  getUsers,
  getUserById,
  crateUser,
  delateUser,
} from "../controllers/index.controllers";

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", crateUser);
router.delete("/users/:id", delateUser);

export default router;
