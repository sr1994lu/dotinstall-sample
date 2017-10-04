const s = '@taguchi, @fkoji, @dotinstall';
const rs = s.match(/^@(taguchi|fkoji)/);

console.log(rs !== null && rs[0] !== '' ? 'マッチしました' : '');
