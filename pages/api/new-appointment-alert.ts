import sgMail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
sgMail.setApiKey(
    process.env.SENDGRID_KEY as string
);

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type AppointmentRequestFieldValues = {
    "Appointment Type":
        | "Free 15-Minute Consultation"
        | "Initial Consultation"
        | "Phone Follow-Up"
        | "House Call Follow-Up";
    "First name": string;
    "Last name": string;
    "Email address": string;
    "Phone number": string;
    City: string;
    Message: string;
    "Preferred day of week": string;
    "Preferred time of day": string;
};

type Data = {
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== "POST") {
        res.status(405).send({ message: "Only POST requests allowed" });
        return;
    }
    let emailData = req.body as AppointmentRequestFieldValues;

    // res.status(200).json({ name: "John Doe" });
    const msg = {
        to: "drnoelsarknvc@gmail.com",
        from: "drnoel@drnoelsark.com",
        templateId: "d-dc0588bc1518404a9942817a5f656ddf",
        dynamicTemplateData: {
            appointment_type: emailData["Appointment Type"],
            name: emailData["First name"] + " " + emailData["Last name"],
            email_address: emailData["Email address"],
            phone_number: emailData["Phone number"],
            city: emailData.City,
            time_and_day_preferences: `${
                (emailData["Preferred day of week"] ||
                    emailData["Preferred time of day"]) &&
                `Prefers ${
                    emailData["Preferred day of week"] &&
                    emailData["Preferred day of week"] +
                        (emailData["Preferred time of day"] ? " " : "s")
                }${
                    emailData["Preferred time of day"] &&
                    emailData["Preferred time of day"] + "s"
                }`
            }`,
            message: emailData.Message,
        },
    };
    sgMail
        .send(msg)
        .then(() => {
            res.status(200).send({ message: "Success" });
        })
        .catch((err) => {
            res.status(500).send({ message: err });
        });
}
