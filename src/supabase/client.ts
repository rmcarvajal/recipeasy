import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://jpbhoewdewoerilaypxj.supabase.co"
const supabaseKey = "sb_publishable_DDGoatxvt48W3Z7Y5x2ApA_0G3FO8T1"

export const supabase = createClient(supabaseUrl, supabaseKey)