//take only needed user fields to avoid sensitive ones (such as password)
const sensitiveFields = ['email', 'emailVerified', 'password']
export function extractUser(user) {
    if (!user) return nul
}