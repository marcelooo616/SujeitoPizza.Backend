import { prisma } from "@prisma/client";
import prismaClient from "../../prisma/Index";

interface ProductRequest{
    category_id: string;
}

class ListByCategoryService{
    async execute({category_id}: ProductRequest){

        const findByCategory =  await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        })

        return findByCategory;

    }
}

export {  ListByCategoryService }