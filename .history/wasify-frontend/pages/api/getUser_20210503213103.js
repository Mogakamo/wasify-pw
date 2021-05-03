import { supabase } from '../../utils/initSupabase'

const getUser  = async (req, res) => {
    const token = req.headers.token
    const { data: user, error } = await supabase.auth.api.getUser(token)

    if (error) return res.status(401).json({})
}