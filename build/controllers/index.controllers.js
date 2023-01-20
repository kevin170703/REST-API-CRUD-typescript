"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delateUser = exports.updateUser = exports.crateUser = exports.getUserById = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM users ");
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json("Internal server error");
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield database_1.pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return res.status(200).json(response.rows);
});
exports.getUserById = getUserById;
const crateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    yield database_1.pool.query("INSERT INTO users (name, email) VAlUES($1, $2)", [
        name,
        email,
    ]);
    return res.status(200).json({ msj: "Usuario creado correactamente" });
});
exports.crateUser = crateUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email } = req.body;
    yield database_1.pool.query("UPDATE users SET name = $1, email= $2 WHERE id = $3 ", [
        name,
        email,
        id,
    ]);
    return res.json({
        msj: `el usuario con la id ${id} se actualizo correctamente`,
    });
});
exports.updateUser = updateUser;
const delateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield database_1.pool.query("DELETE FROM users WHERE id = $1", [id]);
    return res.json(`Usuario con el id ${id} eliminado correactamente`);
});
exports.delateUser = delateUser;
