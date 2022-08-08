import rateLimit from "express-rate-limit";

const apiLimit = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, //1000, // 1 second in milliseconds
    max: 3,
    message: 'You have exceeded the 3 requests in 1 second limit!',
    standardHeaders: true,
    legacyHeaders: false,
});


export default apiLimit;