const s = '@teguchi, @fkoji, @dotinstall';
const rs = s.match(/t[^ao]guchi/);

console.log(rs !== null && rs[0] !== '' ? 'マッチしました' : '');
