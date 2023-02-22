1

let fs = require('fs')
let readDir = fs.readdirSync('./');
let letterArr = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
function getRandomInt(min, max) {
    var Range = max - min;
    var Rand = Math.random();
    return (min + Math.round(Rand * Range));
}
/**
* 随机字母
*/
function getRandomLetter(min = 0, max = 25) {
    return letterArr[getRandomInt(min, max)];
}

for (let i = 0; i < readDir.length; i++) {
    // console.log(`文件:`, readDir[i])
    if (fs.lstatSync("./" + readDir[i]).isDirectory() || readDir[i] == "test.js") {
        continue
    }
    if (readDir[i] == "main.js") {
        let fileName = readDir[i].replace(".js", "");
        let da = fs.readFileSync('./' + fileName + '.js', 'utf8');
        let SortIdentifie = [`Ctrl`, `Model`, `Cfg`, `ViewUI`, `viewUI`, `AlertUI`, `alertUI`, `ItemUI`, `itemUI`, `UI`, `Panel`, `Alert`, `View`, `Item`]//优先替换的类名部件
        let excludeClass = [`instance`, `List`, `Main`, `LoginModel`, `PlatParams`, `UI`, `ui`, `prototype`, `If`, `Panel`, `Item`, `Role`, `Property`]//排除的类名//, `BaseView`, `BaseViewEx`, `BaseDialog`, `BaseDialogEx`
        let allClassName = da.match(/(?<=(var )).*?(?=( = \(fun))/g)//匹配 `var 任意字母组成的类名 = (function ()`
        let fun = (str) => {
            for (let index = 0; index < SortIdentifie.length; index++) {
                const element = SortIdentifie[index];
                if (str.indexOf(element) != -1) {
                    return index
                }
            }
            return -1
        }
        allClassName.sort((A, B) => {
            let A1 = fun(A)
            let B1 = fun(B)
            if (A1 === B1) {
                return B.length - A.length
            }
            else {
                return A1 - B1
            }

        })
        console.log(`排序后的所有类名:`, allClassName)
        for (let index = 0; index < allClassName.length; index++) {
            const name = allClassName[index];
            if (excludeClass.indexOf(name) != -1) {
                continue;
            }
            if (fun(name) != -1) {
                console.log(`${name}   ${index}/${allClassName.length}`)

                // let inx = getRandomInt(1, name.length - 1);
                // let name1 = name.replace(new RegExp(name[inx], 'i'), `_${getRandomLetter()}_`)
                // console.log(`随机替换一个非两端的字符：${name[inx]}    ${name1} `)

                // da = da.replace(new RegExp(name, 'g'), `${getRandomLetter()}_` + name1.toUpperCase() + `_${getRandomLetter()}`)//替换的直接大写防止局部覆盖
                da = da.replace(new RegExp(name, 'g'), `${getRandomLetter()}_` + index + `_${getRandomLetter()}`)//替换的直接大写防止局部覆盖

            }

        }
        console.log(`执行完毕————————————————————————————————————————————————————————————`)
        fs.writeFileSync("./" + `mainNew` + ".js", da)
    }
}


