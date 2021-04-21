const url = 'http://любой_домен/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd';
const [href] = url.split('?');

const form = document.getElementById('form');
const formElements = form.elements;

const parsedValues = parseQueryString(url);

[...formElements].forEach((item) => {
  if (item.name === 'size' && item.value === parsedValues[item.name]) {
    item.checked = true;
  }

  if (item.name === 'color' && parsedValues[item.name].includes(item.value)) {
    item.checked = true;
  }

  if (item.name === 'manufacturer') {
    [...item.options].forEach((option) => {
      if (parsedValues[item.name].includes(option.value)) {
        option.selected = true;
      }
    });
  }
});

form.addEventListener('input', ({ target }) => {
  if (target.name !== 'sale') {
    const formData = [...new FormData(target.form)];
    const search = new URLSearchParams(formData).toString();
    const url = `${href}?${search}`;

    console.log(url);
  }
});

function parseQueryString(url = window.location.href) {
  const [, qs] = url.split('?');

  const items = qs.split('&');

  return items.reduce((data, item) => {
    const [rawKey, rawValue] = item.split('=');
    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue);

    if (data[key] !== undefined) {
      if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }

      data[key].push(value);
    } else {
      data[key] = value;
    }

    return data;
  }, {});
}
