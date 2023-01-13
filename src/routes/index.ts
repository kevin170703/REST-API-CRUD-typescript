import { Router } from "express";
const router = Router();

import {
  getUsers,
  getUserById,
  crateUser,
} from "../controllers/index.controllers";

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", crateUser);

export default router;
