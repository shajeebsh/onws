exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);
  const { type, email, name, message } = data;

  // Configuration for email routing
  const routing = {
    streetview: process.env.STREETVIEW_EMAIL || 'projects@olivenoor.ie',
    erp: process.env.SALES_EMAIL || 'sales@olivenoor.ie',
    crm: process.env.SALES_EMAIL || 'sales@olivenoor.ie',
    recruitment: process.env.HR_EMAIL || 'careers@olivenoor.ie',
    general: process.env.GENERAL_EMAIL || 'hello@olivenoor.ie'
  };

  const targetEmail = routing[type] || routing.general;

  console.log(`Routing ${type} inquiry from ${email} to ${targetEmail}`);

  // In a real implementation, you would use an API like Resend, SendGrid, or Mailgun here.
  // Example with a placeholder for the API call:
  /*
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.EMAIL_API_KEY}`
    },
    body: JSON.stringify({
      from: process.env.NOTIFICATION_EMAIL,
      to: targetEmail,
      subject: `New ${type.toUpperCase()} Inquiry: ${name}`,
      html: `<p>New submission from ${name} (${email})</p><p>${message}</p>`
    })
  });
  */

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Notification sent successfully" })
  };
};
