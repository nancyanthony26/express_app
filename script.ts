import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main(){

    const technicalskills = await prisma.technicalSkills.findMany()
    console.log(technicalskills);

    const workexperience = await prisma.workExperience.findMany({include:{TechnicalSkills:{}}});
    console.log(workexperience);

}


main()
.then (async () => {
    await prisma.$disconnect()
}) 
.catch(async e => {
    console.error()
    await prisma.$disconnect()
    process.exit(1)
})