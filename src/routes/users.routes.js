import { Router } from "express";
import { verificarToken } from "../controllers/verificarToken.js";
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserByCorreo,
  getUsersByIdUser
  
} from "../controllers/users.controller.js";

const router = Router();
const path = "/usuarios"

// POST One
router.post(path, verificarToken, createUser);

// GET All
router.get(path, verificarToken, getUsers);

// GET One
router.get(path+"/:id", verificarToken, getUser);

// PATCH One
router.patch(path+"/:id", verificarToken, updateUser);

// DELETE One
router.delete(path+"/:id", verificarToken, deleteUser);

// GET One By
router.get(path+"/usuarioxcorreo/:correo", verificarToken, getUserByCorreo)

// GET All By
router.get(path+"/usuario/:id", verificarToken, getUsersByIdUser);


export default router;