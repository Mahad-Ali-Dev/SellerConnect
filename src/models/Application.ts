import mongoose, { Schema, Document, Model } from "mongoose";

export interface IApplication extends Document {
    _id: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    storeName?: string;
    storeUrl?: string;
    productCount: string;
    services: string[];
    message?: string;
    status: "pending" | "approved" | "rejected";
    userId?: mongoose.Types.ObjectId;
    createdAt: Date;
}

const ApplicationSchema = new Schema<IApplication>(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            trim: true,
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            lowercase: true,
            trim: true,
        },
        phone: {
            type: String,
            required: [true, "Phone is required"],
            trim: true,
        },
        company: {
            type: String,
            trim: true,
        },
        storeName: {
            type: String,
            trim: true,
        },
        storeUrl: {
            type: String,
            trim: true,
        },
        productCount: {
            type: String,
            required: [true, "Product count is required"],
        },
        services: {
            type: [String],
            default: [],
        },
        message: {
            type: String,
        },
        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending",
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Application: Model<IApplication> =
    mongoose.models.Application ||
    mongoose.model<IApplication>("Application", ApplicationSchema);

export default Application;
