import ratelimit from "../config/upstash.js";

const ratelimiter = async (req,res,next) => {
    try {
        const {success} = await ratelimit.limit("my-limit-key"); //here, my-limit-key can be userid(if you have authentication system) or ip addresses too.
        if(!success){
            return res.status(429).json({
                message:"Too many requests, please try again later"
            })
        }
        next()
    } catch (error) {
        console.error("Rate limit error : ",error)
        next(error)
    }
}

export default ratelimiter