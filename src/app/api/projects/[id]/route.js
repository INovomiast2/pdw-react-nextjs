import { NextResponse } from 'next/server';
import connectDB from '@/utils/connect';
import Project from '@/models/Project';

export const GET = async (req) => {
    const id = req.url.split('api/projects/')[1].split('/')[0];
    await connectDB();
    const project = await Project.findById(id);
    return NextResponse.json(project);
}

export const UPDATE = async (req) => {
    
}