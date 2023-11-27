const mongoose = require("mongoose");

// MongoDB 資料庫連線
const mongodbUrl = "mongodb://127.0.0.1:27017/LoginSystem";
const mongodbOptions = {
    // 伺服器選擇超時時間(毫秒)
    serverSelectionTimeoutMS: 5000
};
mongoose.connect(mongodbUrl, mongodbOptions)
    .then(function(){
        console.log("Succeed to connect to MongoDB.");
    })
    .catch(function(error){
        console.log("Failed to connect to MongoDB.");
    });

// 定義登入資料的數據結構    
const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// 創建使用者資料的集結
const collection = new mongoose.model("UserCollection", loginSchema);

// 導出此集結讓其他檔案可以操作
module.exports = collection;
