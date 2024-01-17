import { NextResponse } from 'next/server';
import connectDB from '@/utils/connect';
import Project from '@/models/Project';

export const GET = async () => {
    await connectDB();
    const projects = await Project.find({});
    return NextResponse.json(projects);
}

export const POST = async (req) => {
    try {
        let bodyText = '';
        for await (const chunk of req.body) {
            bodyText += chunk;
        }
        console.log(bodyText);
        const { prjId, prjName, prjDesc, prjCell, prjComponet, prjCode, prjLang } = JSON.parse(bodyText);
        // Check if all fields are present
        if (!prjId || !prjName || !prjDesc || !prjCell || !prjComponet || !prjCode || !prjLang) {
            return NextResponse.json({
                "status": "error",
                "error": "All fields are required"
            }, { status: 400 });
        }
        await connectDB();
        const project = await new Project({
           prjId,
           prjName,
           prjDesc,
           prjCell,
           prjComponet,
           prjCode,
           prjLang
        });
        await project.save();
        return NextResponse.json({
            "status": "success",
            project
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            "status": "error",
            error
        }, { status: 500 });
    }
}