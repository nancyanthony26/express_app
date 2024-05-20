import { validationResult } from "express-validator";
import prisma from "../db";

export const gettechnicalskills = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const technicalSkills = await prisma.technicalSkills.findMany({
        where:{
         employeesId: +req.params.employeesId
        },
        include:{
            Employees: true
        }
    });
    res.status(200).json(technicalSkills);
}
export const createtechnicalskills = async (req, res) => { 

    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()});
    }
    
    const technicalSkills = await prisma.technicalSkills.create({
        data: {
            title: req.body.title,
            tools: req.body.tools,
            proficiency: req.body.proficiency,
            employeesId: req.body.employeesId
        }
    })
    return res.status(201).json(technicalSkills);
}


