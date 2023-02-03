const express = require("express");
const app = express();
const mysql = require("mysql2");
var cors = require('cors')
app.use(cors())
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const mime = require('mime-types');
const db = mysql.createPool({
    host : "localhost",
    user: "root",
    password : "",
    database : "app_shalleh"
});


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// Set up Multer for file handling
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
const upload = multer({ storage: storage });

// Define a route for uploading a photo


app.post('/api/upload', upload.array('photos', 7), (req, res) => {
    const UserName = req.body.UserName;
    let ArraytosaveinDB = [];
    if (!req.files) {
      return res.status(400).send('No files were uploaded.');
    }
    console.log(req.files)
    req.files.forEach((file,index) => {
        if(index == 0){
           fs.rename(`uploads/${file.filename}`, `uploads/${UserName}_prim.jpg`, function (err) {
            if (err) throw err;
            console.log('File renamed!');
            
        }); 
        ArraytosaveinDB.push(`${UserName}_prim.jpg`)
        }
        else{
            fs.rename(`uploads/${file.filename}`, `uploads/${UserName}_sec${index}.jpg`, function (err) {
                
                console.log('File renamed!');
            }); 
            ArraytosaveinDB.push(`${UserName}_sec${index}.jpg`)
        }
    });
    //**************************saving Photos in DB ******************/
    fettch_arr = ArraytosaveinDB.map((ele)=>{
        return ("INSERT `gallery_photo`(`photo_path`, `UserName`) VALUES  "+"('"+ele+"' ,"+ "'"+UserName+"')")
    });
    console.log(fettch_arr);
    fettch_arr.map((sts)=>{
        db.query(sts,(error,result)=>{

        })
    })
    
    res.send({"message":"تم حفظ الصور"});
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/serving_photo/:UserName',(req ,res)=>{
    const UserName = req.params.UserName;
    const sqlphoto = "SELECT photo_path FROM `gallery_photo` WHERE UserName ='"+UserName+"';";
    console.log(sqlphoto)
    db.query(sqlphoto,(error,result)=>{
        if(error){ 
            res.send(error);
        }
        else{
            res.send(result)
        }
    })
})

app.get('/api/file/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, 'uploads', fileName);
  const fileType = mime.contentType(path.extname(fileName));
  res.set('Content-Type', fileType);
  res.sendFile(filePath);
});

app.get('/api/features_retrieve/:UserName', (req, res) => {
    const UserName = req.params.UserName;
    const sqlsts = "SELECT `features` FROM `shalleh_admin` WHERE `UserName` = '"+UserName+"'";
    db.query(sqlsts, (error,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result)
    })
});


app.post("/api/check_admin", (req,res)=>{
    const UserName = req.body.UserName;
    const password = req.body.password;
    const sqlcheckadmin = "SELECT UserName ,password FROM `admin` WHERE UserName = ? AND password = ?";
    db.query(sqlcheckadmin,[UserName , password],(error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            if(result.length > 0){
                res.send(result)
            }
            else{
                res.send({message : "هذا المستخدم غير موجود"});
            }
        }
    })
})


app.post("/api/shaleh_user", (req,res)=>{
    const UserName = req.body.UserName;
    const password = req.body.password;
    const sqlcheckadmin = "SELECT UserName ,password FROM `shalleh_admin` WHERE UserName = ? AND password = ?";
    db.query(sqlcheckadmin,[UserName , password],(error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            if(result.length > 0){
                res.send(result)
            }
            else{
                res.send({message : "هذا المستخدم غير موجود"});
            }
        }
    })
})


app.get("/api/shaleh_user_details/:username", (req,res)=>{
    const UserName = req.params.username;
    const sqlcheckadmin = "SELECT * FROM `shalleh_admin` WHERE UserName = ? ";
    db.query(sqlcheckadmin,[UserName],(error,result)=>{
        // console.log(result)
        if(error){
            res.send(error);
        }
        else{
            if(result.length > 0){
                res.send(result)
            }
            else{
                res.send({message : "هذا المستخدم غير موجود"});
            }
        }
    })
})


app.get("/api/calender_day/:UserName" , (req,res)=>{
    const UserName = req.params.UserName;
    const sql = "SELECT `calender_days` FROM `shalleh_admin` WHERE `UserName`  = '"+UserName+"';"
    console.log(sql)
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("sent days")
            res.send(result)
        }
    })
})

app.post("/api/Insert_new_user", (req,res)=>{
    const UserNameReg = req.body.UserNameReg;
    const passwordReg = req.body.passwordReg;
    const EmaildReg = req.body.EmaildReg;
    const PhoneReg = req.body.PhoneReg;
   
    const sqladd = "INSERT INTO `shalleh_admin` (`UserName`, `phone`, `email`, `password`, `cost_per_night`, `desc`, `Address`, `location`, `gallary_photo`, `features`, `calender_days`, `request`,`shalleh_name`, `first_time` , `number_of_visit`) VALUES (?, ?, ?, ?, '', '', '', '',?, '', '', '0','','0','0')";
    db.query(sqladd,[UserNameReg ,PhoneReg ,  EmaildReg ,passwordReg, UserNameReg],(error,result)=>{
        if(error){
            res.send({Erorrmessage:`البيانات غير متاحة`,message_alert : "danger"});
        }
        else{
            res.send({message :`تمت عملية التسحيل بنجاح`, message_alert : "success"});
        }
    })

})


app.get("/api/Get_Admin_request", (req,res)=>{
    const sqladd = "SELECT `UserName`, `phone` FROM `shalleh_admin` WHERE `first_time` = '0' AND `request` = '0'";
    db.query(sqladd,(error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(result);
        }
    })

})
 
app.post("/api/change_req/:UserName",(req,res)=>{
    const {UserName} = req.params;
    const sql_change = "UPDATE `shalleh_admin` SET `request`='1' , `first_time` = '1' WHERE UserName = ?";
    db.query(sql_change, UserName , (error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send("");
        }
    })
})



app.get("/api/Get_Admin_managment", (req,res)=>{
    const sqladd = "SELECT `UserName`, `phone`, `email`, `password`, `location`, `request`, `shalleh_name` FROM `shalleh_admin` WHERE `request` = 1 OR `first_time` = 1";
    db.query(sqladd,(error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(result);
        }
    })

})

app.delete("/api/delete_user/:UserName", (req,res)=>{
    const {UserName} = req.params;
    const sql_change = "DELETE FROM `shalleh_admin` WHERE UserName = ?";
    db.query(sql_change, UserName , (error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send({message : "تم حذف المستخدم"});
        }
    })
})


app.post("/api/disable_user/:UserName", (req,res)=>{
    const {UserName} = req.params;
    const sql_change = "UPDATE `shalleh_admin` SET `request`='0' WHERE UserName = ?";
    db.query(sql_change, UserName , (error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send({message : "تم تعطيل الحساب" , stuts :"red" , sub_mess : "غير نشط"});
        }
    })
})


app.post("/api/enable_user/:UserName", (req,res)=>{
    const {UserName} = req.params;
    const sql_change = "UPDATE `shalleh_admin` SET `request`='1' WHERE UserName = ?";
    db.query(sql_change, UserName , (error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send({message : "تم تفعيل الحساب", stuts :"green" , sub_mess : "نشط"});
        }
    })
})





app.get("/api/all_active_shalleh/", (req,res)=>{
    const sql_allactive = 
    "SELECT `UserName`, `phone`, `email`, `password`, `cost_per_night`, `desc`, `Address`, `location`, `gallary_photo`, `features`, `calender_days`, `request`, `shalleh_name`, `first_time` FROM `shalleh_admin` WHERE `request` =1 AND `first_time` = 1;";
    db.query(sql_allactive , (error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            // console.log(result);
            res.send(result);
        }
    })
})

app.get("/api/details_user/:UserName",(req,res)=>{
    const {UserName} = req.params;
    const sql_userdetials = 
    "SELECT `UserName`, `phone`, `email`, `password`, `cost_per_night`, `desc`, `Address`, `location`, `gallary_photo`, `features`, `calender_days`, `request`, `shalleh_name`, `first_time` FROM `shalleh_admin` WHERE `UserName` = '"+ UserName + "';";
    db.query(sql_userdetials , (error,result)=>{
        if(error){
            res.send(error);
            console.log("Erorr")
        }
        else{
            // console.log(result);
            res.send(result);
        }
    })
} )

app.post("/api/incr_visit/:UserName",(req,res)=>{
    const {UserName} = req.params;
    const sql_incr = "UPDATE shalleh_admin SET number_of_visit = number_of_visit + 1 WHERE UserName = '"+UserName+"'";
    //console.log(sql_incr)
    db.query(sql_incr , (error,result)=>{
        if(error){
            res.send(error);
            console.log("Erorr")
        }
        else{
             
        }
    })
})

app.get("/api/shaleh_user_details_fetu/:UserName",(req,res)=>{
    const {UserName} = req.params;
    const sqlstat = "SELECT `features` FROM `shalleh_admin`  WHERE `UserName` = '"+UserName+"'";
    db.query(sqlstat , (error,result)=>{
        if(error){
            res.send(error);
            console.log("Erorr")
        }
        else{
            //console.log(result)
            res.send(result);
        }
    })
})
app.post("/api/shaleh_user_details_update_fetu/:UserName",(req,res)=>{
    const {UserName} = req.params;
    const features = req.body.features
    const sqlstat = "UPDATE `shalleh_admin` SET `features` ='"+features+"' WHERE `UserName` = '"+UserName+"';"
    console.log(sqlstat)
    db.query(sqlstat , (error,result)=>{
        if(error){
            res.send(error);
            console.log("Erorr")
        }
        else{
            //console.log(result)
            res.send({message : "تم حفظ التغيرات"});
        }
    })
})



app.post('/api/shaleh_user_details_update/:UserName', (req, res) => {
    const UserName = req.params.UserName
    const phone  = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const cost_per_night = req.body.cost_per_night;
    const desc = req.body.desc;
    const Address = req.body.Address;
    const location = req.body.location;
    const calender_days = req.body.calender_days;
    const shalleh_name = req.body.shalleh_name;
    const number_of_visit = req.body.number_of_visit;
    const sqlupdtae = "UPDATE `shalleh_admin` SET `phone`= '"+phone+"' ,`email`= '"+email+"' ,`password`= '"+password+"'  ,`cost_per_night`='"+cost_per_night+"',`desc`='"+desc+"',`Address`= '"+Address+"',`location`='"+location+"',`calender_days`='"+calender_days+"', `shalleh_name`='"+shalleh_name+"', `number_of_visit`="+parseInt(number_of_visit)+" WHERE UserName = '"+UserName+"';";
    // console.log(sqlupdtae)
    db.query(sqlupdtae,(error,result)=>{
        if(error){
            console.log("Error")
        }
        else{
            res.send({message : "تم الحفظ"});
        }
    })

});

app.listen(5000 , () => {
    console.log("this server is on 5000");
})
