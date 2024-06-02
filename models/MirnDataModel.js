const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mirnDataSchema = new Schema({

    mirn : {
        type : Number
    },
    mirnchecksum : {
        type:Number
    },
    flatorunittype : {
        type:String
    },
    flatorunitnumber : {
        type:String
    },
    floororleveltype : {
        type:String
    },
    floororlevelnumber : {
        type:String
    },
    buildingorpropertyname1 : {
        type:String
    },
    buildingorpropertyname2 : {
        type:String
    },
    locationdescriptor : {
        type:String
    },
    housenumber : {
        type:String
    },
    housenumbersuffix : {
        type:String
    },
    lotnumber : {
        type:String
    },
    streetname : {
        type:String
    },
    streettype : {
        type:String
    },
    streetsuffix  : {
        type:String
    },
    siteaddresscity : {
        type:String
    },
    siteaddressstate : {
        type:String
    },
    siteaddresspostcode : {
        type:Number
    },
    siteaddressdpid : {
        type:String
    },
    gasmeternumber : {
        type:String
    },
    sourcefileid : {
        type:Number
    },
    claimed : {
        type:String
    },
    nsrd : {
        type:String
    },
    metertype : {
        type:String
    },
    mirnstatus : {
        type:String
    },
    networkid : {
        type:String
    },
    sn : {
        type:Number
    }
    
})

const mirnData = mongoose.model('mirnDataSet',mirnDataSchema);
module.exports = mirnData; 