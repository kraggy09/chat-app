import jwt from "jsonwebtoken";
export const checkAuth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        msg: "No token found pls relogin",
        success: false,
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        error: "Unauthorize-- Inavlid token",
        success: false,
        msg: "Bad Auth",
      });
    }
    req.senderId = decoded.userId;
    next();
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      error: error.message,
      msg: "Error in protected route",
    });
  }
};
