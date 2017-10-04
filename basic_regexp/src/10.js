/**
 * 最短マッチ
 */

const s = 'taguchi@dotinstall.com, fkoji@dotinstall.com, admin@dotinstall';
const rs = s.match(/(.+?)@dotinstall.com/);

console.log(rs !== null && rs[0] !== '' ? rs : '');
