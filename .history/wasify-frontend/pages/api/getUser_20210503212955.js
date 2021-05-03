import { supabase } from '../../utils/initSupabase'

const getUser  = async (req, res) => {
    const token = req.headers.token
    const { data: user, error } = 
}