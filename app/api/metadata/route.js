import connectMongoDB from "@/app/libs/mongodb";
import Metadata from '@/app/models/metadata';
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description, url, image, category} = await request.json();

    await connectMongoDB();
    await Metadata.create({title, description, url, image, category});
    return NextResponse.json({message: " Metadata Added"},{status: 200})
}

export async function GET(){
    await connectMongoDB();
    const metadata = await Metadata.find();
    return NextResponse.json({metadata})
}