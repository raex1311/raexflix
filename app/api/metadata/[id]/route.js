import connectMongoDB from "@/app/libs/mongodb";
import Metadata from "@/app/models/metadata";
import Metadata2 from "@/app/models/metadata2";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {id} = params;
    await connectMongoDB();
    const metadata2 = await Metadata2.findById(id);
    return NextResponse.json({metadata2},{status:200})
}