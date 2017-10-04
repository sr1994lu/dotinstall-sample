/**
 * Twitter IDの正規表現
 */

const s = '@taguchi';
const rs = s.match(/^@[a-zA-Z0-9_]{1,15}$/);

console.log(rs !== null && rs[0] !== '' ? rs[0] : '');
