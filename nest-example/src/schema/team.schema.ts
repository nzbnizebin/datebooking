import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
    title: String,
    begin_time: Number,
    total_need: Number,
    created_by: String,
    users: Array,
});
