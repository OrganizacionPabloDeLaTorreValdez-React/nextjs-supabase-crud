function supabaseLoader({src, width, quality}) {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${src}?w=${width}&q=${quality || 75}`
}

export default supabaseLoader;