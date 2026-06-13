// ===========================
// TODO Rails — main.js
// ===========================

// --- Real-time clock (Task 7) ---
function updateClock() {
  const now = new Date();

  const timeEl = document.getElementById('live-time');
  const dateEl = document.getElementById('live-date');

  if (timeEl) {
    timeEl.textContent = now.toLocaleTimeString('pt-BR', {
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  }

  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString('pt-BR', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }
}

updateClock();
setInterval(updateClock, 1000);


// --- Login form validation (Task 2) ---
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    let valid = true;

    clearErrors();

    if (!username.value.trim()) {
      showError(username, 'Usuário obrigatório.');
      valid = false;
    }

    if (!password.value.trim()) {
      showError(password, 'Senha obrigatória.');
      valid = false;
    }

    if (!valid) e.preventDefault();
  });
}


// --- Register form validation (Task 2) ---
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    const username = document.getElementById('username');
    const email    = document.getElementById('email');
    const password = document.getElementById('password');
    const confirm  = document.getElementById('confirmPassword');
    let valid = true;

    clearErrors();

    if (!username.value.trim()) {
      showError(username, 'Nome de usuário obrigatório.'); valid = false;
    }

    if (!email.value.trim() || !email.value.includes('@')) {
      showError(email, 'E-mail inválido.'); valid = false;
    }

    if (password.value.length < 6) {
      showError(password, 'Mínimo de 6 caracteres.'); valid = false;
    }

    if (confirm && password.value !== confirm.value) {
      showError(confirm, 'As senhas não coincidem.'); valid = false;
    }

    if (!valid) e.preventDefault();
  });
}


// --- Task form validation (Task 3) ---
const taskForm = document.getElementById('task-form');
if (taskForm) {
  taskForm.addEventListener('submit', function (e) {
    const title   = document.getElementById('title');
    const dueDate = document.getElementById('dueDate');
    let valid = true;

    clearErrors();

    if (!title.value.trim()) {
      showError(title, 'Título obrigatório.'); valid = false;
    }

    if (dueDate && !dueDate.value) {
      showError(dueDate, 'Data de entrega obrigatória.'); valid = false;
    }

    if (!valid) e.preventDefault();
  });
}


// --- Status checkbox → submit form (Task 6) ---
document.querySelectorAll('.status-check').forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    this.closest('form').submit();
  });
});


// --- Delete confirmation ---
document.querySelectorAll('.btn-delete').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (!confirm('Excluir esta tarefa? Essa ação não pode ser desfeita.')) {
      e.preventDefault();
    }
  });
});


// --- Helpers ---
function showError(input, message) {
  input.style.borderColor = 'var(--danger)';
  const err = document.createElement('p');
  err.className = 'form-error';
  err.textContent = message;
  input.parentElement.appendChild(err);
}

function clearErrors() {
  document.querySelectorAll('.form-error').forEach(el => el.remove());
  document.querySelectorAll('.form-control').forEach(el => {
    el.style.borderColor = '';
  });
}
