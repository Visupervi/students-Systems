/**
 * Created by Administrator on 2017/8/30 0030.
 */
const dbHelp = require("./dbHelp");
module.exports.post = {};
module.exports.get = {};
module.exports.index = function (req, res) {
  res.render("index");
};
module.exports.students = function (req, res) {
  dbHelp.findAll("students", function (err, docs) {
    if (err) {
      throw err;
    }
    res.render("students", {list: docs});
  })
};
module.exports.info = function (req, res) {
  var objId = dbHelp.ObjectID(req.query._id);
  dbHelp.findOne("students", {_id: objId}, function (err, doc) {
    // db.close();
    if (err) {
      throw err;
    }
    res.render("info", {item: doc});
  })
};
module.exports.add = function (req, res) {
  dbHelp.findAll('cities', function (err, docs_city) {
    if (err) {
      throw err;
    }
    dbHelp.findAll('majors', function (err, docs_major) {
      if (err) {
        throw err;
      }
      res.render("add", {cities: docs_city, majors: docs_major})
    });
  });
};
module.exports.edit = function (req,res) {
  var objId = dbHelp.ObjectID(req.query._id);
  dbHelp.findOne("students",{_id:objId},function (err,doc_stu) {
    dbHelp.findAll('cities', function (err, docs_city) {
      if (err) {
        throw err;
      }

      dbHelp.findAll('majors', function (err, docs_major) {
        if (err) {
          throw err;
        }
        res.render("edit",{item: doc_stu, cities: docs_city, majors: docs_major})
      });
    });
  })
};
module.exports.post.add = function (req, res) {
  var model = {
    sno: req.body.sno,
    sname: req.body.sname,
    sgender: req.body.sgender === 'M' ? '男' : '女',
    sbirthday: req.body.sbirthday,
    sphone: req.body.sphone,
    saddr: req.body.saddr,
    smajor: req.body.smajor
  };
  // console.log(model);
  dbHelp.insertOne("students",model,function (err,result) {
    if(err){
      throw err;
    }
    res.redirect('/students');
  })
};

//edit提交

module.exports.post.edit = function (req,res) {
  var model = {
    sno: req.body.sno,
    sname: req.body.sname,
    sgender: req.body.sgender === 'M' ? '男' : '女',
    sbirthday: req.body.sbirthday,
    sphone: req.body.sphone,
    saddr: req.body.saddr,
    smajor: req.body.smajor
  };
  var objId = dbHelp.ObjectID(req.body._id);//一开始总是更新不成功，也没有报错，原因是这个地发提交的id是获取不到的，因为用了中间件body-parser，所以这个中间件把post提交的数据写成2对象的方式，所以用body._id才可以。
  dbHelp.updateOne("students",{_id:objId},model,function (err,result) {
    if(err){
      throw err;
    }
    // console.log(dbHelp.updateOne.toString());
    res.redirect("/students");
  })
};

module.exports.delData = function (req,res) {
  var objId = dbHelp.ObjectID(req.query._id);
  dbHelp.delData("students",{_id:objId},function (err,result) {
    if(err){
      throw err;
    }
    res.redirect("/students");
  })
};
dbHelp.findAll('cities', function (err, docs_city) {
  if (err) {
    throw err;
  }
});

dbHelp.findAll('majors', function (err, docs_major) {
  if (err) {
    throw err;
  }
});
