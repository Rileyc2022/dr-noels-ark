import {
    DocumentData,
    DocumentSnapshot,
    FieldValue,
    Timestamp,
} from "firebase/firestore";

// type type of above appointment:
export type AppointmentRequestMetadata = {
    id: DocumentSnapshot<DocumentData>["id"];
    timestamp: Timestamp;
    read: boolean;
};

export type AppointmentRequestFieldValues = {
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
    "Preferred day of week": string;
    "Preferred time of day": string;
    Message: string;
};

export type AppointmentRequest = AppointmentRequestFieldValues &
    AppointmentRequestMetadata;
