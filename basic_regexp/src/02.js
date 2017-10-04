const s = '@taguchi, @fkoji, @dotinstall';
const rs = s.match(/taguchi/);

console.log(rs !== null && rs[0] !== '' ? 'マッチしました' : '');
