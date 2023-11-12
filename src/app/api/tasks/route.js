import { NextResponse } from "next/server";
import { getServerSupabaseClient } from "@/utils/supabaseutils";

export async function GET() {
  const supabase = getServerSupabaseClient();
  const {data: tasks, error} = await supabase
    .from('tasks')
    .select('*');

  return NextResponse.json(tasks);
}

export async function POST(request) {
  const supabase = getServerSupabaseClient();
  const {title, description} = await request.json();
  const {data: newTask, error} = await supabase
    .from('tasks')
    .insert([
      {
        title,
        description,
      }
    ])
    .select();

  return NextResponse.json(newTask, {
    status: 201
  });
}