/**
 * \n 改行
 * \t タブ
 * \d [0-9]
 * \w [A-Za-z0-9_]
 * \s スペース、 タブ
 * \  メタ文字をエスケープ
 */

const s = '@taguchi, @fkoji, @dotinstall';
const rs = s.match(/^@taguchi,[/s]*/);

console.log(rs !== null && rs[0] !== '' ? 'マッチしました' : '');
