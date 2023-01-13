import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../database";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query("SELECT * FROM users ");
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const response: QueryResult = await pool.query(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );
  return res.status(200).json(response.rows);
};

export const crateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email } = req.body;
  const respose: QueryResult = await pool.query(
    "INSERT INTO users (name, email) VAlUES($1, $2)",
    [name, email]
  );
  return res.status(200).json({ msj: "Usuario creado correactamente" });
};

// export const updateUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {};

// export const delateUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {};
