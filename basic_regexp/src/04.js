const s = '@taguchi, @fkoji, @dotinstall';
const rs = s.match(/t.....i/);
const rs1 = s.match(/^@taguchi/);
const rs2 = s.match(/@dotinstall$/);

console.log(rs !== null && rs[0] !== '' ? 'rsマッチしました' : '');
console.log(rs1 !== null && rs1[0] !== '' ? 'rs1マッチしました' : '');
console.log(rs2 !== null && rs2[0] !== '' ? 'rs2マッチしました' : '');
