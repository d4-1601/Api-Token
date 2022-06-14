const { mongoose } = require('./indexDB.js');

const dataSchema = new mongoose.Schema({
  id: Number,
  ref_id: String,
  twitch_user_id: String,
  login: String,
  display_name: String,
  type: String,
  broadcaster_type: String,
  description: String,
  profile_image_url: String,
  offline_image_url: String,
  view_count: String,
  channel_created_at: String,
  created_at: String,
  updated_at: String
});

const VenturesModel = mongoose.model('dataobjects', dataSchema);

module.exports = VenturesModel;