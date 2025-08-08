function tambah() {
  const taskInput = document.getElementById("todoInput");
  const dateInput = document.getElementById("dateInput");
  const task = taskInput.value.trim();
  const date = dateInput.value;

  if (task === "" || date === "") return;

  function formatDate(inputDate) {
    const parts = inputDate.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }

  const formattedDate = formatDate(date);

  const noTaskRow = document.getElementById("noTaskRow");
  if (noTaskRow) {
    noTaskRow.remove();
  }

  const tr = document.createElement("tr");

  const tdTask = document.createElement("td");
  tdTask.textContent = task;

  const tdDate = document.createElement("td");
  tdDate.textContent = formattedDate;

  const tdStatus = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      tdTask.style.color = "#888";
      tdTask.style.textDecoration = "line-through";

      tdDate.style.color = "#888";
      tdDate.style.textDecoration = "line-through";
    } else {
      tdTask.style.color = "";
      tdTask.style.textDecoration = "none";

      tdDate.style.color = "";
      tdDate.style.textDecoration = "none";
    }
  });

  tdStatus.appendChild(checkbox);

  tr.appendChild(tdTask);
  tr.appendChild(tdDate);
  tr.appendChild(tdStatus);

  taskInput.value = "";
  dateInput.value = "";
}

let filterAktif = false;

function filterSelesai() {
  const rows = document.querySelectorAll("#todoBody tr");
  filterAktif = !filterAktif;

  rows.forEach((row) => {
    const checkbox = row.querySelector("input[type='checkbox']");
    if (!checkbox) return;

    if (filterAktif) {
      row.style.display = checkbox.checked ? "none" : "";
    } else {
      row.style.display = "";
    }
  });
}

function hapustugas() {
  const tbody = document.getElementById("todoBody");
  tbody.innerHTML = "";

  const noTaskRow = document.createElement("tr");
  noTaskRow.id = "noTaskRow";

  const noTaskCell = document.createElement("td");
  noTaskCell.colSpan = 3;
  noTaskCell.textContent = "No task found";
  noTaskCell.style.textAlign = "center";
  noTaskCell.style.color = "#a8b2d1";
  noTaskCell.style.fontStyle = "italic";
  noTaskCell.style.padding = "30px";
  noTaskRow.appendChild(noTaskCell);

  tbody.appendChild(noTaskRow);
}

// AAAAAAAAAAAAAAAAAAAAA SUSAH BAAANGETTTTTTTTTTTTTTTTTTTTTTTTTTTT BINGUNGGG MANA TUGAS SEKOLAH BANYAKKKKK + TUGAS SELEKSI OSIS BUANYAK PAAKE BANGETTTTTT HUHUHUUUUU PLSSS REVOUUUU SEMOGA AKU DAPET SERTIFIKAT:(((((((((
