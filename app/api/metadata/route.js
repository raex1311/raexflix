import connectMongoDB from "@/app/libs/mongodb";
import Metadata from '@/app/models/metadata';
import Metadata2 from '@/app/models/metadata2';
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description, url, image, category,subtitle} = await request.json();
    console.log(subtitle);
    await connectMongoDB();
    await Metadata2.create({title, description, url, image, category, subtitle});
    return NextResponse.json({message: " Metadata Added"},{status: 200})
}

export async function GET(){
    await connectMongoDB();
    const metadata2 = await Metadata2.find();
    return NextResponse.json({metadata2})
}

export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle: title, newDescription: description} = await request.json();
    await connectMongoDB();
    await Metadata2.findByIdAndUpdate({id}, {title, description});
    return NextResponse.json({message: " Metadata Updated"},{status: 200})
}