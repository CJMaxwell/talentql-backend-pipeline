import { Request, Response } from "express";

class Howold {
    static calculateAge(req: Request, res: Response) {
        try {
            const { dob } = req.params;
            const birthYear = new Date(dob).getFullYear();

            if (isNaN(birthYear)) {
                res.status(400).json({
                    message: 'Bad date format. Use this format yyyy-mm-dd or yy-mm-dd'
                });
                return;
            };
            const currentYear = new Date().getFullYear();

            let age = currentYear - birthYear;

            console.log(age, 'Calc')

            res.status(200).json({
                age
            });


        } catch (error) {
            res.status(500).json({
                // @ts-ignore
                error: error.RangeError
            })
        }
    }
}


export default Howold;