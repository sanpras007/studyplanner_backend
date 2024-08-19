const fs = require('fs');

function createUser(){
    try{
        let data = {
            "id":"1",
            "name":"sanpras",
            "phone":123,
            "email":"qwerty@gmail.com"
        }
        let users = fs.readFileSync("./users.json","utf-8");
        users = JSON.parse(users);
        let newusers = users.filter(user => user.id === data.id);
        if(newusers.length > 0){
            console.log("already exist");
        }
        else{
            users.push(data);
            fs.writeFileSync("./users.json",JSON.stringify(users));
            console.log({"data":"","messgae":"added success","err":""});
        }
    }catch(err){
        console.log({"data":"","messgae":"","err": err.message });
    }
}



function deleteuser() {
    fs.writeFileSync("./users.json","[]");
}


function deleteDetails(id) {
    try{
        let data = fs.readFileSync("./users.json","utf-8");
        let resultData = JSON.parse(data).filter(v => v.id !== id);
        if (Object.keys(resultData).length !== 0) {
            fs.writeFileSync("./details.json", JSON.stringify(resultData));
            console.log({"data":resultData,"msg":"delete success","err":""});
        } else {
            console.log({"data":"","msg":"","err":"delete failed"});
        }
    }
    catch(err){
        console.log({"data":"","msg":"","err":err.message});
    }
    
}




function readuser(req,res){
    try{
        fs.readFile("./users.json","utf-8",(err,data)=>{
            if(err) 
                console.log(err);
            else{
                res.write(data);
                res.end();
            }
        })
    }catch(err){
        console.log({"data":"","messgae":"","err":err.messgae});
    }
}

function readSpecificUser(){
    try{
        let key = 2;
        const data = fs.readFileSync("./users.json","utf-8");
        const newdata = JSON.parse(data);
        const user = newdata.find(user => user.id === key);
    if(user)
        console.log("details of user is",user);
    else
        console.log("no user with thet id");
    }catch(err){
        console.log({"data":"","messgae":"","err":err.messgae}); 
    }
}
function update(){
    try{
        console.time();
        let data = fs.readFileSync("./users.json","utf-8");
        data = JSON.parse(data);
        const index = data.findIndex(user => user.id === key);
        data[index] = { ...data[index], ...name };
        fs.writeFileSync("./users.json",JSON.stringify(data));
        console.timeEnd();
    }catch(err){
        console.log({"data":"","messgae":"","err":err.messgae}); 
    } 
}

function update1(name){
    console.time();
    let data = fs.readFileSync("./users.json","utf-8");
    data = JSON.parse(data);
    for(let i=0;i<data.length;i++){
        if(data[i].id == name.id){
            data[i] = {...data[i],...name};
            break;
        }
    }
    fs.writeFileSync("./users.json",JSON.stringify(data));
    console.timeEnd();
}

module.exports = {
    update,
    createUser,
    readuser,
    readSpecificUser,
    deleteuser,
    deleteDetails,
}