/**
 * <title>の正規表現
 */

const s = '<title>ドットインストール</title>';
const rs = s.match(/<title>([^<]+)<\/title>/);

console.log(rs !== null && rs[0] !== '' ? rs[1] : '');
