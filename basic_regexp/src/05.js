const s = '@taguchi, @fkoji, @dotinstall';
const rs = s.match(/@[a-z]{7}/);

console.log(rs !== null && rs[0] !== '' ? 'マッチしました' : '');
