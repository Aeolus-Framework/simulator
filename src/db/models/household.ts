import { Schema, model } from "mongoose";

interface Household {
    owner: string;
    area: number;
    location: {
        latitude: number;
        longitude: number;
    };
    blackout: boolean;
    baseConsumption: number;
    heatingEfficiency: number;
    battery: {
        maxCapacity: number;
    };
    windTurbines: {
        active: number;
        maximumProduction: number;
        cutinWindspeed: number;
        cutoutWindspeed: number;
    };
    consumptionSpike: {
        AmplitudeMean: number;
        AmplitudeVariance: number;
        DurationMean: number;
        DurationVariance: number;
    };
}

var householdSchema = new Schema<Household>(
    {
        owner: String,
        area: Number,
        location: {
            latitude: Number,
            longitude: Number
        },
        blackout: Boolean,
        baseConsumption: Number,
        heatingEfficiency: Number,
        battery: {
            maxCapacity: Number
        },
        windTurbines: {
            active: Number,
            maximumProduction: Number,
            cutinWindspeed: Number,
            cutoutWindspeed: Number
        },
        consumptionSpike: {
            AmplitudeMean: Number,
            AmplitudeVariance: Number,
            DurationMean: Number,
            DurationVariance: Number
        }
    },
    { versionKey: false }
);

export const household = model<Household>("household", householdSchema);