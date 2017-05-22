import ERROR from './../enums/Error.enum';

export default class T9Service {
  constructor() {
    this.charMap = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
    };
  }

  /**
 * Fetch words from T9 table
 */
  getWordsFromNumber(number) {
    let matches = [''];
    let tmp = [];
    const digits = number.toString().split('');

    // 2 : ['a', 'b', 'c'],
    // 3 : ['d', 'e', 'f'],
    // 4 : ['g', 'h', 'i'],

    // adg adh adi | aeg aeh aei | afg afh afi |
    // bdg bdh bdi | beg beh bei | bfg bfh bfi |
    // cdg cdh cdi | ceg ceh cei | cfg cfh cfi |

    // iterate over all digits in the input number
    for (let i = 0; i < digits.length; i += 1) {
      // if 0 return false;
      if (digits[i] <= 1) return Promise.reject(new Error(ERROR.MSG.VALUE_RANGE));

      // iterate over all elements in results array
      for (let j = 0; j < matches.length; j += 1) {
        // iterate over all letters corresponding to the current digit
        for (let k = 0; k < this.charMap[digits[i]].length; k += 1) {
          tmp.push(matches[j] + this.charMap[digits[i]][k]);
        }
      }

      matches = tmp;
      tmp = [];
    }

    return Promise.resolve(matches);
  }
}
