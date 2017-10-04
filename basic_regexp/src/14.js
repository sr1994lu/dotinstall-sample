/**
 * 日本の日付表記についての正規表現
 */

const s = '2012-03-24';
const rs = s.match(/(\d{4})[-\/](\d{2})[-\/](\d{2})/);

console.log(rs !== null && rs[0] !== ''
  ? `${rs[1]}年${rs[2]}月${rs[3]}日`
  : '');
