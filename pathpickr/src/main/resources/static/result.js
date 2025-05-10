document.getElementById("emailForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;

  const requestBody = {
    to: form.email.value,
    name: form.name.value,
    result: "Software Engineer",  // this could also come from a result on the page
    messageId: 1  // ID of the email template in the database
  };

  const response = await fetch("http://localhost:8080/api/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  });

  const result = await response.text();
  alert(result);
});