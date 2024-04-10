// Create a data model and reference the User model in the data model.

import { Schema, model, models } from 'mongoose';

const DataSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    // ...add more fields here
  },
  {
    timestamps: true,
  }
);

const Data = models?.Data || model('Data', DataSchema);

export default Data;
