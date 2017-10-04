/**
 * 正規表現のキャプチャ
 */

const s = 'taguchi@dotinstall.com';
const rs = s.match(/(.+?)@dotinstall.com/);

console.log(rs !== null && rs[0] !== '' ? rs[1] : '');
