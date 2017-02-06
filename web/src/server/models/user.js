const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const findOrCreate = require('mongoose-findorcreate');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, lowercase: true },
  password: String,
  userName: String, // for posting
  accessToken: String,
  resourceState: Number,
  firstname: String,
  lastname: String,
  profile_medium: String,
  profile: String,
  locStreet: String,  // from user input
  locCity: String,  // from user input
  locState: String,  // from user input
  locCountry: String,  // from user input
  locZip: String,  // from user input
  geoFormattedAddress: String,
  geoCoordinates: { type: [Number], index: '2dsphere' }, // type: [lon,lat]
  geoLongitude: Number,
  geoLatitude: Number,
  geoLevel1Long: String,
  geoLevel2Long: String,
  geoStreetNumber: String,
  geoStreetName: String,
  geoCity: String,
  geoCountry: String,
  geoCountryCode: String,
  geoZipCode: String,
  geoProvider: String,
  locationPref: { type: String, enum: ['Manual', 'Magic'], default: 'Manual' },
  sex: String,
  premium: Boolean,
  created_at: String,
  updated_at: String,
  date_preference: String,
  measurement_preference: String,
  week_start_day: Number, // 0 - Sun, 1 - Mon...
});

userSchema.pre('save', function userSchemaPre(next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function userSchemaCompPasswords(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err);

    callback(null, isMatch);
  });
};

userSchema.plugin(findOrCreate);

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
