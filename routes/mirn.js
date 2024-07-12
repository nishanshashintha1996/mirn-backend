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

router.route('/searchaddress').post((req,res)=>{

    if(req != ""){
        let street = req.body.street.toUpperCase();
        let city = req.body.city.toUpperCase();
        let state = req.body.state.toUpperCase();
        let postal = req.body.postal;

        // siteaddresspostcode:postal, siteaddressstate:state, siteaddresscity:city, housenumber:housenumber, streetname:street

        mirnData.find({ streetname:street, siteaddresspostcode:postal, siteaddressstate:state, siteaddresscity:city }).then((data)=>{
            if(data != null){
                res.json(data);
            }else{
                res.json('not found');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }else{
        res.json('not found params');
    }

})

router.route('/lv1').post((req,res)=>{

    if(req != ""){
        let type = req.body.stype;
        let value = req.body.svalue;
        let state = req.body.state.toUpperCase();
        let postal = req.body.postal;

        mirnData.find({ siteaddresspostcode:postal, siteaddressstate:state }).then((data)=>{
            let foundData = new Array();
            if(data != null){
                if(type == 'lot'){
                    data.forEach((element) => {
                        if(element.lotnumber == value){
                            foundData.push(element);
                        }
                    });
                }else{
                    data.forEach((element) => {
                        if(element.housenumber == value){
                            foundData.push(element);
                        }
                    });
                }
                res.json(foundData);
            }else{
                res.json('null');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }else{
        res.json('not found params');
    }

})

router.route('/lv2').post((req,res)=>{

    if(req != ""){
        let gdata = req.body.data;
        console.log('hit')
        mirnData.find( gdata ).then((data)=>{
            if(data != null){
                res.json(data);
            }else{
                res.json('null');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }else{
        res.json('not found params');
    }

})

module.exports = router;