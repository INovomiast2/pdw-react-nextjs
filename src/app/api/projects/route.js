import { NextResponse } from 'next/server';
import connectDB from '@/utils/connect';
import Project from '@/models/Project';

export const GET = async () => {
    await connectDB();
    const projects = await Project.find({});
    return NextResponse.json(projects);
}

export const POST = async ({ body }) => {
    await connectDB();
    const project = await Project.create(body);
    return NextResponse.json(project);
}