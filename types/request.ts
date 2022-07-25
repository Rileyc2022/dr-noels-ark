import { DocumentData, DocumentSnapshot, FieldValue, Timestamp } from "firebase/firestore";

// type type of above appointment:
export type AppointmentRequestMetadata = {
  "id": DocumentSnapshot<DocumentData>["id"],
  "timestamp": Timestamp,
  "color": string,
  "read": boolean,
};

export type AppointmentRequestFieldValues = {
  "First name": string,
  "Last name": string,
  "Email address": string,
  "Phone number": string,
  City: string,
  Message: string,
  "Preferred day of week": string,
  "Preferred time of day": string,
};

export type AppointmentRequest = AppointmentRequestFieldValues & AppointmentRequestMetadata;
