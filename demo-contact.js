const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const service = form.querySelector('[name="service"]');
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nService: ${service.selectedOptions[0].text}\n\n${data.get('message')}`;
  const message = form.querySelector('.messages');
  message.setAttribute('role', 'status');
  message.textContent = 'Your email app will open with your enquiry. Send the email to contact our team, or call 09 433 0313.';
  location.href = `mailto:admin@marsdenautocentre.co.nz?subject=${encodeURIComponent('Website enquiry — ' + data.get('name'))}&body=${encodeURIComponent(body)}`;
});
