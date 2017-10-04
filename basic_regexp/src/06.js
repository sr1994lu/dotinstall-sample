const s = '@taguchi, @fkoji, @dotinstall';
const rs = s.match(/@?taguchi/);
const rs1 = s.match(/@dotinstall */);
const rs2 = s.match(/@dotinstall +/);

console.log(rs !== null && rs[0] !== '' ? 'マッチしました' : '');
console.log(rs1 !== null && rs1[0] !== '' ? 'rs1マッチしました' : '');
console.log(rs2 !== null && rs2[0] !== ''
  ? 'rs2マッチしました'
  : 'rs1は0 or 1でrs2は 1 or MOREだからヒットしなかったんだよね');
