/*var r = /xx/ 这种正则表达式和 r = new RegExp("xx")的区别：
* var r = /xx/ig 之于 var r = new RegExp("xx", "ig");
* 相当于
* var arr=[1,2,3] 之于 var arr = new Array(1,2,3);
* 前者直接是 值声明，后者是用构造函数构造出来
* 对于 new RegExp(a , b)的两个参数 a, b， 分别传入两个string，第一个是正则表达式的内容，第二个是他的标记，就是ig这种标记
* 特别的， 参数a要做转译
* 对于正则表达式值 /a\d/ ，他的构造函数是new RegExp(“a\\d”);
*/

//疑问：new RegExp() 与RegExp()的区别
/*在js 这个 构造函数里 没有区别
* 最好还是用new,养成习惯
* RegExp这种是静态方法 当做构造函数用
* 不好看 不要学
*/



//支持正则表达式的 String 对象的方法：search()、replace()、split()、match()、
//includes()、indexOf()、





//容易混淆的方法
/*Array.prototype.find()
*The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
* find方法只能返回“第一个”满足条件的元素
*/
var a=[1,3,33];
a.find((element)=>{return element<10}) //1


//RegExp有3个方法：test()、exec()、compile()

/*RegExp.prototype.test()
*The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
*
*
*/
var re1=new RegExp('e')
re1.test('best free') //true
var re2=new RegExp('^e')
re2.test('best free') //false

var reIE=new RegExp('MSIE (\\d+\\.\\d+);')
var ie9="Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/7.0; Touch; .NET4.0C; .NET4.0E; Tablet PC 2.0; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)"

//对?的理解
var s='lahahahaha'
s.match(/^l.*ha/)[0] //"lahahahaha" 这是贪婪的
s.match(/^l.*?ha/)[0] //"laha" 这是懒惰的
s.match(/^l.+ha/)[0] //"lahahahaha"
s.match(/^l.+?ha/)[0] //"laha"