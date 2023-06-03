import { Schema, model } from 'mongoose';

const propertySchema = new Schema({
  type: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  address: {
    required: true,
    type: String
  },
  size: {
    required: true,
    type: Number
  },
  price: {
    required: true,
    type: String
  },
  // Additional optional fields
  bedrooms: {
    type: Number,
    sparse: true,
  },
  hasGarden: {
    type: Boolean,
    sparse: true,
  },
});

const agentSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  phone: {
    required: true,
    type: String
  },
  // Additional optional fields
  experience: {
    type: String,
    sparse: true,
  },
  languages: {
    type: [String],
    sparse: true,
  },
});

const clientSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  phone: {
    required: true,
    type: String
  },
  // Additional optional fields
  budget: {
    type: Number,
    sparse: true,
  },
  requirements: {
    type: [String],
    sparse: true,
  },
});

const transactionSchema = new Schema({
  property: {
    type: Schema.Types.ObjectId,
    ref: 'Property',
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
  },
  agent: {
    type: Schema.Types.ObjectId,
    ref: 'Agent',
  },
  date: {
    required: true,
    type: Date
  },
  // Additional optional fields
  interval: {
    type: Number,
    sparse: true
  },
  type: {
    type: String,
    sparse: true,
  },
  additionalFees: {
    type: Number,
    sparse: true,
  },
});

const propertyImageSchema = new Schema({
  property: {
    type: Schema.Types.ObjectId,
    ref: 'Property',
  },
  imageURL: {
    required: true,
    type: String
  },
  // Additional optional fields
  caption: {
    type: String,
    sparse: true,
  }
});

const propertyReviewSchema = new Schema({
  property: {
    type: Schema.Types.ObjectId,
    ref: 'Property',
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
  },
  rating: {
    required: true,
    type: Number
  },
  comment: {
    required: true,
    type: String
  },
  // Additional optional fields
  reviewerName: {
    type: String,
    sparse: true,
  },
  reviewDate: {
    type: Date,
    sparse: true,
  },
});

const propertyFeatureSchema = new Schema({
  property: {
    type: Schema.Types.ObjectId,
    ref: 'Property',
  },
  name: {
    required: true,
    type: String
  },
  featureValue: {
    required: true,
    type: String
  },
  // Additional optional fields
  isImportant: {
    type: Boolean,
    sparse: true,
  },
  notes: {
    type: String,
    sparse: true,
  },
});

const Property = model('Property', propertySchema);
const Agent = model('Agent', agentSchema);
const Client = model('Client', clientSchema);
const Transaction = model('Transaction', transactionSchema);
const PropertyImage = model('PropertyImage', propertyImageSchema);
const PropertyReview = model('PropertyReview', propertyReviewSchema);
const PropertyFeature = model('PropertyFeature', propertyFeatureSchema);

export {
  Property,
  Agent,
  Client,
  Transaction,
  PropertyImage,
  PropertyReview,
  PropertyFeature,
};
