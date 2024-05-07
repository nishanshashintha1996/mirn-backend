const router = require('express').Router();
const mirnData = require('../models/MirnDataModel');

router.route('/add').post((req,res)=>{
    // const mirn = req.body.mirn;

    const mirn = "";
    const mirnchecksum = "";
    const flatorunittype = "";
    const flatorunitnumber = "";
    const floororleveltype = "";
    const floororlevelnumber = "";
    const buildingorpropertyname1 = "";
    const buildingorpropertyname2 = "";
    const locationdescriptor = "";
    const housenumber = "";
    const housenumbersuffix = "";
    const lotnumber = "";
    const streetname = "";
    const streettype = "";
    const streetsuffix = "";
    const siteaddresscity = "";
    const siteaddressstate = "";
    const siteaddresspostcode = "";
    const siteaddressdpid = "";
    const gasmeternumber = "";
    const sourcefileid = "";
    const claimed = "";
    const nsrd = "";
    const metertype = "";
    const mirnstatus = "";
    const networkid = "";
    const sn = "";

    const newMirnDataSet = new mirnData({
        mirn,
        mirnchecksum,
        flatorunittype,
        flatorunitnumber,
        floororleveltype,
        floororlevelnumber,
        buildingorpropertyname1,
        buildingorpropertyname2,
        locationdescriptor,
        housenumber,
        housenumbersuffix,
        lotnumber,
        streetname,
        streettype,
        streetsuffix,
        siteaddresscity,
        siteaddressstate,
        siteaddresspostcode,
        siteaddressdpid,
        gasmeternumber,
        sourcefileid,
        claimed,
        nsrd,
        metertype,
        mirnstatus,
        networkid,
        sn
    })

    newMirnDataSet.save().then(()=>{
        res.json('data added!')
    }).catch((err)=>{
        console.log(err)
    })
})

router.route('/view').get((req,res)=>{
    mirnData.find().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
});

router.route('/view/:mirnid').get( async (req,res) => {
    let mirnId = req.params.mirnid;
    mirnData.findOne({mirn:mirnId}).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;