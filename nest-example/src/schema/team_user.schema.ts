import * as mongoose from 'mongoose';

export const TeamUserSchema = new mongoose.Schema({
    team_id: mongoose.Schema.Types.ObjectId,
    open_id: String,
    user_name: String,
});
