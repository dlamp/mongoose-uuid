mongoose-uuid
=============

mongoose-uuid is a plugin which adds uuid _id to a model

## Example

```javascript
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var uuid = require('mongoose-uuid');

var UserSchema = new Schema({}, {_id: false});

UserSchema.plugin(uniqueid, {
  models: ['users']
});

UserSchema.plugin(uuid.plugin, 'User');

```

## Installation
* `npm install mongoose-uuid --save`

## License
Copyright (c) 2014 Darin Lampson. Licensed under the MIT license.