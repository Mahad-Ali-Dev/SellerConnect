import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContactSubmission extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    subject: string;
    message: string;
    status: "new" | "read" | "replied";
    createdAt: Date;
}

const ContactSubmissionSchema = new Schema<IContactSubmission>(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            lowercase: true,
            trim: true,
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
            trim: true,
        },
        message: {
            type: String,
            required: [true, "Message is required"],
        },
        status: {
            type: String,
            enum: ["new", "read", "replied"],
            default: "new",
        },
    },
    {
        timestamps: true,
    }
);

const ContactSubmission: Model<IContactSubmission> =
    mongoose.models.ContactSubmission ||
    mongoose.model<IContactSubmission>("ContactSubmission", ContactSubmissionSchema);

export default ContactSubmission;
