var homeData = require('./home/home.json');
var json1 = require('./home/recommend1.json');
var json2 = require('./home/recommend2.json');
var json3 = require('./home/recommend3.json');
var searchKey = require('./home/searchKey.json');
var search = require('./home/search.json');
var detail = require('./data/352876');
var mulu = require('./data/chapter-list.json');
var reader1 = require('./data/data1.json');
var reader2 = require('./data/data2.json');
var reader3 = require('./data/data3.json');
var reader4 = require('./data/data4.json');

var data = {
    '/api/city': homeData,
    '/api/loadMore?pagenum=1&limit=10': json1,
    '/api/loadMore?pagenum=2&limit=10': json2,
    '/api/loadMore?pagenum=3&limit=10': json3,
    '/api/jia': json1,
    '/api/searchKey': searchKey,
    '/api/search': search,
    '/api/detail?id=352876': detail,
    '/api/mulu?id=352876': mulu,
    '/api/reader?chapterNum=1': reader1,
    '/api/reader?chapterNum=2': reader2,
    '/api/reader?chapterNum=3': reader3,
    '/api/reader?chapterNum=4': reader4
}

module.exports = function(url) {
    if (/\/api\/result/.test(url)) {
        var n = url.split('?')[1];
        var val = n.split('=')[1];
        var name = decodeURIComponent(val);
        var reg = new RegExp(name, 'g');
        var obj = {
            mes: '亲,暂时找不到哦',
            cont: []
        }
        var newArr = search.items.filter(function(v, i) {
            v.summary = v.intro;
            v.authors = v.role[0][1];
            return reg.test(v.title) || reg.test(v.intro) || reg.test(v.role[0][1])
        })
        if (newArr.length) {
            obj.mes = 'success';
            obj.cont = newArr;
        }
        return obj;
    }
    return data[url];
}