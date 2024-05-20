import { validationResult } from "express-validator";
import prisma from "../db";
import { userInfo } from "os";

export const createemployees = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const employees = await prisma.employees.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            city: req.body.city,
            user:{
                connect:{
                    id: req.user
                }
            }
        }
    });

    return res.status(201).json(employees);

};
export const getemployees = async (req,res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const employees = await prisma.employees.findUnique({
        where: {id : +req.params.id},
        include:{
            technicalskills: true
        }
    });
    return res.status(200).json(employees);
}