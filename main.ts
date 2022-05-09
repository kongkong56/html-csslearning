// let hello = "hello worldwoka"
// console.log(hello)
// // function add(n1: number, n2: number) {
// //     return n1 + n2
// // }
// let n1 = 2
// let n2 = 3
// // console.log(add(n1, n2))
// let isTrue = true
// //isTrue=""
// let total: number = 0
// let firstName: string = "alex"
// let str = `我叫${firstName}`
// //数组array和元祖tuple
// //array:可以存放任意类型的数据
// //tuple:
// let list1: number[] = [1, 2, 3]
// let list2: Array<number> = [1, 2, 3]//泛型用法

// let list5: any[] = [1, "3"]
// let list4 = [1, "3"]
// //固定长度固定类型tuple(特殊的数组)
// let personal1: [number, string] = [1, "df"]
// //personal1[0] = "ere"//tuple中途不能变更类型
// //personal1.push(3)//使用元祖时候，一定要指定数据类型，并且不能用push方法，切记
// //声明元祖的时候，一定要指定类型

// //union联合类型和文献literal(字面量)类型

// let union: string | number //union同时支持两种类型String，number
// union = 2
// union = "stin"
// // union = true

// let union3: 0 | 1 | 2
// union3 = 1
// let literal: 1 | "2" | true | [1, 2, 3, 4]
function merge(n1: number | string, n2: number | string, resultType: "as-number" | "as-string") {
    if (resultType == "as-string") {
        return n1.toString() + n2.toString()
    }
    if (typeof n1 == "string" || typeof n2 == "string") {
        return n1.toString() + n2.toString()
    } else return n1 + n2
}
let mergeNumber = merge(2, 5, "as-number")
let mergeNumber2 = merge(2, 5, "as-string")
let mergeString = merge("hello", "world", "as-string")
console.log(mergeNumber)
console.log(mergeNumber2)
console.log(mergeString)

