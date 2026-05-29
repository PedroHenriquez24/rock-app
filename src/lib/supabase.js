import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hlpmhdutbcgnhgvqlbav.supabase.co'
const supabaseKey = 'sb_publishable_yg3yNtceZhYu6xksNTZaYw__f1eoPBJ'

export const supabase = createClient(supabaseUrl, supabaseKey)