// set cookie
function set(key, value, expiredays) {
  if (expiredays) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = `${key}=${escape(value)};expires=${exdate.toGMTString()}`;
  } else {
    document.cookie = `${key}=${escape(value)}`;
  }
}

// get cookie
function get(key) {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(`${key}=`);
    if (start !== -1) {
      start = start + key.length + 1;
      let end = document.cookie.indexOf(';', start);
      if (end === -1) end = document.cookie.length;
      return unescape(document.cookie.substring(start, end));
    }
  }
  return '';
}

export default {
  set,
  get,
};
