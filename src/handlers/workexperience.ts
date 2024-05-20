import { validationResult } from "express-validator";
import prisma from "../db";

export const createworkexperience = async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const workexperience = await prisma.workExperience.create({
        data:{
            company: req.body.company,
            role: req.body.role,
            years:req.body.years,
            technicalskillsId:req.body.technicalskillsId
        }
    });

    return res.status(201).json(workexperience);
}
export const getworkexperience = async (req,res) => {
const workexperience = await prisma.workExperience.findMany({
    where:{
     technicalskillsId: +req.params.technicalskillsId
    },
    include:{
        TechnicalSkills: true
    }
});

return res.status(200).json(workexperience);

}