/**
 * Created by Administrator on 2017/8/30 0030.
 */
const config = require("./config");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
function connectDB(cb) {
  MongoClient.connect(config.connStr, function (err, db) {
    if (err) {
      throw err;
    }
    cb(db);
  })
}
//查询所有数据
module.exports.findAll = function (colName, cb) {
  connectDB(function (db) {
    db.collection(colName).find().toArray(function (err, docs) {
      db.close();
      cb(err, docs);
    });
  });
};
//查询单条数据
module.exports.findOne = function (colName,filter, cb) {
  connectDB(function (db) {
    db.collection(colName).findOne(filter, function (err, doc) {
      db.close();
      cb(err, doc);
    })
  })
};
//添加数据
module.exports.insertOne = function (colName, data, cb) {
  connectDB(function (db) {
    db.collection(colName).insertOne(data, function (err, result) {
      db.close();
      cb(err, result);
    })
  })
};
module.exports.insertMany = function (colName, data, cb) {
  connectDB(function (db) {
    db.collection(colName).insertMany(data, function (err, result) {
      db.close();
      cb(err, result);
    })
  })
};

//删除数据
module.exports.delData = function (colName, filter, cb) {
  connectDB(function (db) {
    db.collection(colName).deleteOne(filter, function (err, result) {
      db.close();
      cb(err, result);
    })
  })
};
module.exports.delMany = function (colName, filter, cb) {
  connectDB(function (db) {
    db.collection(colName).deleteMany(filter, function (err, result) {
      db.close();
      cb(err, result);
    })
  })
};
//更新数据
module.exports.updateOne = function (colName, filer, data, cb) {
  connectDB(function (db) {
    db.collection(colName).updateOne(filer, data, function (err, result) {
      db.close();
      cb(err, result);
    })
  })
};
module.exports.updateMany = function (colName, filer, data, cb) {
  connectDB(function (db) {
    db.collection(colName).updateMany(filter, data, function (err, result) {
      db.close();
      cb(err, result);
    })
  })
};
module.exports.ObjectID = function (_id) {
  return new mongodb.ObjectID(_id);
};