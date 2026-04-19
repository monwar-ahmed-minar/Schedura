<script>
    function setActive(el, group) {
      const parent = el.closest(group === 'spec' ? '.specialty-row' : '.slots');
      parent.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
    }

    // Set today's date as default
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
      const today = new Date();
      dateInput.value = today.toISOString().split('T')[0];
    }
  </script>