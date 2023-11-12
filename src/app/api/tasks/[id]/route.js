import { NextResponse } from "next/server";
import { getServerSupabaseClient } from "@/utils/supabaseutils";

export async function GET(request, {params}) {
  const origin = request.headers.get('origin');
  const supabase = getServerSupabaseClient();
  const { data: task, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('id', params.id);

  return NextResponse.json(task, {
    headers: {
      'Access-Control-Allow-Origin': origin || '*'
    }
  });
}

export async function PUT(request, {params}) {
  const supabase = getServerSupabaseClient();
  const reqBody = await request.json();
  const {data: taskUpdated, error} = await supabase
    .from('tasks')
    .update(reqBody)
    .eq('id', params.id)
    .select();

  return NextResponse.json(taskUpdated);
}

export async function DELETE(request, {params}) {
  const supabase = getServerSupabaseClient();
  const {data: taskRemoved, error} = await supabase
    .from('tasks')
    .delete()
    .eq('id', params.id)
    .select();

  return NextResponse.json(taskRemoved);
}