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


//以下内容来w3school
//RegExp对象方法:exec()、 test()、 compile()
//支持正则表达式的 String 对象的方法: match()、search()、replace()、split()
/*RegExp.prototype.test()
*The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
*/
var re1=new RegExp('e')
re1.test('best free') //true
var re2=new RegExp('^e')
re2.test('best free') //false


//includes()、indexOf()、


//容易混淆的方法
/*Array.prototype.find()
*The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
* find方法只能返回“第一个”满足条件的元素
*/
var a=[1,3,33];
a.find((element)=>{return element<10}) //1

//有关RegExp["$1"]
// 当一个正则表达式r 不管他是 构造函数构造出来的，还是值声明形式 直接赋值出来的
// 这个表达式r 进行一次 test之后
// 他都会把匹配的【分组】内容，存放在 RegExp["$N"]里 (圆括号括起来，就是一个分组)
// 括号中是第一个分组 匹配命中了 9.0 , 也就是 RegExp["$1"]
// 在运行了一次 reIE.test(ie9) 之后,去取 RegExp["$1"]就是去找第一个小括号匹配到的东西
// 当需要提取出某个正则的子串的时候，就可能会用到这么绕的方式
var reIE=new RegExp('MSIE (\\d+\\.\\d+);')
var ie9="Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/7.0; Touch; .NET4.0C; .NET4.0E; Tablet PC 2.0; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)"
reIE.test(ie9);//true
RegExp['$1'];// 9.0


//对?的理解
var s='lahahahaha'
s.match(/^l.*ha/)[0] //"lahahahaha" 这是贪婪的
s.match(/^l.*?ha/)[0] //"laha" 这是懒惰的
s.match(/^l.+ha/)[0] //"lahahahaha"
s.match(/^l.+?ha/)[0] //"laha"

//[^x] 匹配除了x以外的字符
//假如我要陪陪 ^ 或 x ，就必须写成[\^x]
//[0-9]表示匹配0到9的数字（包括0和9）
//[?!()-]都可以直接表示对应的符号，发现 - 既可以用作范围表示，也可以直接表示，那我要匹配 0 或 - 或 9 怎么办？那就必须写成[0\-9]
//也就是说在[]内，不是所有的符号都不需要转义，而是要灵活处理（这点我好懵啊
//暂时总结为：[]内是按字符来看的，除了[0-9]，[a-z]，[^x]这两种情况

'3288'.match(/3[^2]8/)
'3288'.match(/3[\^2]8/)


//对元字符 \b \w 的理解
// \b 匹配一个单词边界，即字与空格间的位置。
// \w 匹配一个单字字符（字母、数字或者下划线）。等价于[A-Za-z0-9_]。
'apple'.match(/\w/) //'a'
'apple'.match(/\w+/) //'apple'
'apple peach'.match(/\w+/) //'apple'
'apple peach'.match(/\w+/g) // ['apple', 'peach']
'apple peach 梨子'.match(/\w+/g) // ['apple', 'peach']
'$5.38'.match(/\w/) //'5'
'$5.38'.match(/\w+/) //'5'
'$5.38'.match(/\w+/g) //['5','38']
'3D'.match(/\w/)//'3'
'3D'.match(/\w+/)//'3D'
