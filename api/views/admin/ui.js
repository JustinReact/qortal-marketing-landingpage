// ui.js
export function renderTable(data) {
  const wrapper = document.getElementById('dataTableWrapper');
  wrapper.innerHTML = '';

  if (!data.length) {
    wrapper.innerHTML = '<p class="empty-msg">No data found.</p>';
    return;
  }

  const headers = Object.keys(data[0]);
  const table = document.createElement('table');
  table.id = 'dataTable';

  // Table Head
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  headers.forEach(key => {
    const th = document.createElement('th');
    th.textContent = prettifyHeader(key);
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  // Table Body
  const tbody = document.createElement('tbody');
  data.forEach((entry, i) => {
    const row = document.createElement('tr');
    if (i % 2 === 1) row.classList.add('zebra');
    headers.forEach(key => {
      const td = document.createElement('td');
      td.textContent = entry[key] ?? '';
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  wrapper.appendChild(table);
}

function prettifyHeader(key) {
  return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export function toggleLoader(visible) {
  document.getElementById('loadingSpinner').hidden = !visible;
}

export function showDownloadButtons(visible) {
  document.getElementById('downloadCsvBtn').hidden = !visible;
  document.getElementById('downloadExcelBtn').hidden = !visible;
}

function getFileName(type, ext) {
  const date = new Date().toISOString().slice(0, 10);
  return `${type}_${date}.${ext}`;
}

export function downloadAsCsv(data, type = 'data') {
  const headers = Object.keys(data[0]);
  const csv = [headers.join(',')];
  data.forEach(row => {
    csv.push(headers.map(h => `"${(row[h] ?? '').toString().replace(/"/g, '""')}"`).join(','));
  });
  const blob = new Blob([csv.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = getFileName(type, 'csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function downloadAsExcel(data, type = 'data') {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Data');
  XLSX.writeFile(wb, getFileName(type, 'xlsx'));
}
