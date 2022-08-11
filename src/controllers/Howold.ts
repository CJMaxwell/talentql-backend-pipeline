import { Request, Response } from "express";

class Howold {
    static calculateAge(req: Request, res: Response) {
        try {
            const { dob } = req.params;

            const birthYear = new Date(dob).getFullYear();

            if (isNaN(birthYear)) {
                res.status(400).json({
                    message: "Bad date format. Use this format yyyy-mm-dd or yy-mm-dd"
                });
                return;
            };

            const currentYear = new Date().getFullYear();

            if (birthYear > currentYear) {
                res.status(400).json({
                    message: "You cannot be born in the futures"
                });

                return;
            }

            let age = currentYear - birthYear;

            res.status(200).json({
                age
            });


        } catch (error) {
            res.status(500).json({
                message: "An error occured"
            })
        }
    }
}


export default Howold;