# Web Form + Webhook + Airtable + IPinfo Automation

## Overview

This project is an interactive **web form** built with **HTML, CSS, and JavaScript**. It collects user data and sends it to a **Make.com Webhook**, which processes and stores it in **Airtable**. Additionally, the scenario enriches the data using **IPinfo API** to get geolocation and other IP-related details.  

This setup demonstrates **full-stack workflow automation**, including frontend data capture, backend integration, API enrichment, and automated database updates.

---

## Features

### Frontend
- Interactive form collecting **6 fields**: First Name, Last Name, Email, City, Country, Phone Number.
- Real-time **validation** for email, required fields, and proper formats.
- Clean and responsive **UI** using HTML & CSS.
- Ready for integration with **Webhook or backend API**.

### Backend Automation (Make.com)
- **Custom Webhook** receives form data.
- **Airtable Search & Create/Update Records**:
  - Each submission creates a new record.
  - Existing records can be updated based on email as unique identifier.
- **IPinfo HTTP Request**:
  - Retrieves geolocation, city, region, country, ISP, and other IP-related details.
  - Updates the same Airtable record with IP info.
- **JSON Parsing and Text Parsing** modules to handle structured data.

### Airtable Database
- Centralized storage of user submissions.
- Automatic updates with enriched IP info.
- Flexible schema for additional fields.

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Automation Platform:** Make.com (Webhooks, HTTP, JSON, Text Parser, Airtable modules)
- **Database:** Airtable
- **External API:** IPinfo.io
- **Version Control:** Git & GitHub

---

## Setup Instructions

### Frontend
1. Clone the repository:
```bash
git clone https://github.com/your-username/web-form-webhook-airtable.git
Open index.html in your browser to test locally.

Optional: Use a local server for testing (Python example):

bash
Copiar código
python -m http.server 8000
Fill the form and submit. Ensure the Webhook is active in Make.com.

Make.com Scenario
Create a Custom Webhook in Make.com.

Connect the Webhook to the form's fetch POST request.

Use HTTP module to request IPinfo with API token.

Use Airtable modules to create/update records based on email.

Parse JSON and map data fields to Airtable columns.

Airtable Setup
Create a new base with columns:

First Name, Last Name, Email, City, Country, Phone Number

IP Address, City_IP, Region, Country_IP, ISP

Use the Airtable API token for Make.com connection.

Map form fields to Airtable columns in your scenario.

IPinfo Integration
Create an account on IPinfo.io.

Copy your API Token.

In Make.com HTTP module, make a GET request to:

ruby
Copiar código
https://ipinfo.io/{IP}?token=YOUR_TOKEN
Parse JSON and update Airtable record.

How to Test
Open the form in your browser.

Fill in the fields with sample data.

Submit the form.

Check Make.com scenario execution.

Verify that Airtable has the new or updated record with IPinfo data.

Future Improvements
Host the frontend online using GitHub Pages for public access.

Add file upload capabilities.

Integrate email notifications after form submission.

Expand automation workflow with additional APIs.

Demo
Form URL: Public Form
Airtable Preview: Internal only (API connection required)
