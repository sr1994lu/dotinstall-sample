/**
 * i 大文字小文字を区別しない
 * g マッチするすべての要素を配列で返す
 * m 複数行に対応させる
 */

const s = '@taguchi, @fkoji, @dotinstall';
const rs = s.match(/^@taguchi,[/s]*/);

console.log(rs !== null && rs[0] !== '' ? 'マッチしました' : '');
