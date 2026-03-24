import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const signup = async(req, res,next) => {
   const { username, email, password } = req.body;

   if (!username || !email || !password || username==='' || email==='' || password==='') {
      next(errorHandler("All fields are required"));
   }

   const hashedPassword = await bcrypt.hash(password, 10);

   const newUser = new User({
       username,
       email,
       password : hashedPassword,
   });

   try {await newUser.save();
   res.json({message: "signed up successfully"});}
   catch (error) {
         console.error(error);
         next(error);
   }
};
