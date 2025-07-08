// ui.js
export function renderTable(data) {
  const wrapper = document.getElementById('dataTableWrapper');
  wrapper.innerHTML = '';

  if (!data.length) {
    wrapper.innerHTML = '<p>No data found.</p>';
    return;
  }

  const headers = Object.keys(data[0]);
  const table = document.createElement('table');
  table.id = 'dataTable';

  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  headers.forEach(key => {
    const th = document.createElement('th');
    th.textContent = key;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  data.forEach(entry => {
    const row = document.createElement('tr');
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

export function toggleLoader(visible) {
  document.getElementById('loadingSpinner').hidden = !visible;
}

export function showDownloadButtons(visible) {
  document.getElementById('downloadCsvBtn').hidden = !visible;
  document.getElementById('downloadExcelBtn').hidden = !visible;
}

export function downloadAsCsv(data) {
  const headers = Object.keys(data[0]);
  const csv = [headers.join(',')];

  data.forEach(row => {
    csv.push(headers.map(h => `"${(row[h] ?? '').toString().replace(/"/g, '""')}"`).join(','));
  });

  const blob = new Blob([csv.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'data.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function downloadAsExcel(data) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Data');
  XLSX.writeFile(wb, 'data.xlsx');
}
