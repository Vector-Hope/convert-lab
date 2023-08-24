// packagesFramework/pages/wxs/wxsOperator/index.js
Page({
  data: {
    num1: 1,
    num2: 1,
    operatorList: [
      {
        id: 'basicOperate',
        title: '基本运算符',
        list: [
          {
            id: 'addition',
            name: 'num1 + num2',
            operator: '+',
          },
          {
            id: 'subtraction',
            name: 'num1 - num2',
            operator: '-',
          },
          {
            id: 'multiplication',
            name: 'num1 * num2',
            operator: '*',
          },
          {
            id: 'division',
            name: 'num1 / num2',
            operator: '/',
          },
          {
            id: 'remainder',
            name: 'num1 % num2',
            operator: '%',
          },
        ],
      },
      {
        id: 'unaryOperate',
        title: '一元运算符',
        list: [
          {
            id: 'num_increment',
            name: 'num1++',
            operator: 'a++',
          },
          {
            id: 'increment_num',
            name: '++num1',
            operator: '++a',
          },
          {
            id: 'num_decrease',
            name: 'num1--',
            operator: 'a--',
          },
          {
            id: 'decrease_num',
            name: '--num1',
            operator: '--a',
          },
          {
            id: 'positive',
            name: '+num1',
            operator: '+a',
          },
          {
            id: 'negative',
            name: '-num1',
            operator: 'a++',
          },
          {
            id: 'no_operation',
            name: '~num1',
            operator: '~a',
          },
          {
            id: 'negation',
            name: '!num1',
            operator: '!a',
          },
          {
            id: 'delete_operation',
            name: ' delete num1',
            operator: 'delete',
          },
          {
            id: 'void_operation',
            name: 'void num1',
            operator: 'void',
          },
          {
            id: 'typeof_operation',
            name: 'typeof num1',
            operator: 'typeof',
          },
        ],
      },
      {
        id: 'bitOperate',
        title: '位运算符',
        list: [
          {
            id: 'move_left',
            name: 'num1 << 2',
            operator: '<<',
          },
          {
            id: 'signed_move_right',
            name: 'num1 >> 2',
            operator: '>>',
          },
          {
            id: 'unsigned_move_right',
            name: 'num1 >>> 2',
            operator: '>>>',
          },
          {
            id: 'and_operation',
            name: 'num1 & num2',
            operator: '&',
          },
          {
            id: 'XOR_operation',
            name: 'num1 ^ num2',
            operator: '^',
          },
          {
            id: 'or_operation',
            name: 'num1 | num2',
            operator: '|',
          },
        ],
      },
      {
        id: 'compareOperate',
        title: '比较&等值运算符',
        list: [
          {
            id: 'less_than',
            name: 'num1 < num2',
            operator: '<',
          },
          {
            id: 'more_than',
            name: 'num1 > num2',
            operator: '>',
          },
          {
            id: 'less_than_equal',
            name: 'num1 <= num2',
            operator: '<=',
          },
          {
            id: 'more_than_equal',
            name: 'num1 >= num2',
            operator: '>=',
          },
          {
            id: 'equal',
            name: 'num1 == num2',
            operator: '==',
          },
          {
            id: 'not_equal',
            name: 'num1 != num2',
            operator: '!=',
          },
          {
            id: 'all_equal',
            name: 'num1 === num1.toSting()',
            operator: '===',
          },
          {
            id: 'not_all_equal',
            name: 'num1 !== num1.toSting()',
            operator: '!==',
          },
        ],
      },
      {
        id: 'assignOperate',
        title: '赋值运算符',
        list: [
          {
            id: 'assign_addition',
            name: 'num1 += num2',
            operator: '+',
          },
          {
            id: 'assign_subtraction',
            name: 'num1 -= num2',
            operator: '-',
          },
          {
            id: 'assign_multiplication',
            name: 'num1 *= num2',
            operator: '*',
          },
          {
            id: 'assign_division',
            name: 'num1 /= num2',
            operator: '/',
          },
          {
            id: 'assign_remainder',
            name: 'num1 %= num2',
            operator: '%',
          },
          {
            id: 'assign_move_left',
            name: 'num1 <<= 2',
            operator: '<<',
          },
          {
            id: 'assign_signed_move_right',
            name: 'num1 >>= 2',
            operator: '>>',
          },
          {
            id: 'assign_unsigned_move_right',
            name: 'num1 >>>= 2',
            operator: '>>>',
          },
          {
            id: 'assign_and_operation',
            name: 'num1 &= num2',
            operator: '&',
          },
          {
            id: 'assign_XOR_operation',
            name: 'num1 ^= num2',
            operator: '^',
          },
          {
            id: 'assign_or_operation',
            name: 'num1 |= num2',
            operator: '|',
          },
        ],
      },
      {
        id: 'binLogicOperate',
        title: '二元逻辑运算符',
        list: [
          {
            id: 'logic_and',
            name: 'num1 && num2',
            operator: '&&',
          },
          {
            id: 'logic_or',
            name: 'num1 || num2',
            operator: '||',
          },
        ],
      },
      {
        id: 'otherOperate',
        title: '其他运算符',
        list: [
          {
            id: 'ternary',
            name: 'num1 > num2 ? num1 : num2',
            operator: '?:',
          },
          {
            id: 'comma',
            name: '(num1, num2)',
            operator: ',',
          },
        ],
      },
    ],
  },
  changeNum1(e) {
    this.setData({
      num1: e.detail.value,
    })
  },
  changeNum2(e) {
    this.setData({
      num2: e.detail.value,
    })
  },
})
