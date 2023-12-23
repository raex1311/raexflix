import connectMongoDB from "@/app/libs/mongodb";
import Metadata from "@/app/models/metadata";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {id} = params;
    await connectMongoDB();
    const metadata = await Metadata.findById({_id: id});
    return NextResponse.json({metadata},{status:200})
}