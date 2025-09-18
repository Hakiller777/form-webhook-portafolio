# Web Form + Webhook + Airtable + IPinfo Automation

## Overview
This project is an interactive web form built with HTML, CSS, and JavaScript. It collects user data and sends it to a Make.com webhook, which processes and stores the data in Airtable. Additionally, the scenario enriches the data using the IPinfo API to obtain geolocation and other IP-related details.

This setup demonstrates a fully automated workflow, including frontend data capture, backend integration, API enrichment, and automated database updates.

---

## Features

### Frontend Interface
- Interactive form collecting 6 fields: First Name, Last Name, Email, City, Country, Phone Number.  
- Real-time validation for email, required fields, and proper formats.  
- Clean and responsive UI using HTML and CSS.  
- Ready for integration with Webhook or backend API.  

### Backend Automation (Make.com)
- Custom webhook receives form submissions.  
- Airtable record handling:  
  - Each submission creates a new record.  
  - Existing records can be updated using email as a unique identifier.  
- HTTP request to IPinfo:  
  - Retrieves geolocation, city, region, country, ISP, and other IP-related data.  
  - Updates the same Airtable record with IP info.  
- JSON parsing and text parser modules handle structured data.  

### Airtable Database
- Centralized storage of user submissions.  
- Automatic updates with enriched IP information.  
- Flexible schema for additional fields.

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript  
- **Automation Platform:** Make.com (webhooks, HTTP, JSON, text parser, Airtable modules)  
- **Database:** Airtable  
- **External API:** IPinfo.io  
- **Version Control:** Git and GitHub  

---

## Setup Instructions

### 1. Frontend
Clone the repository:

```bash
git clone https://github.com/your-username/web-form-webhook-airtable.git

Open index.html in your browser to test locally.

Optional: Use a local server for testing (Python example): python -m http.server 8000

Fill the form and submit. Ensure the Make.com webhook is active.

2. Make.com Scenario

Create a Custom Webhook in Make.com.

Connect the form’s fetch POST request to the webhook.

Use the HTTP module to request IPinfo data with your API token.

Use Airtable modules to create/update records based on email.

Parse JSON and map fields to Airtable columns.

3. Airtable Setup

Create a new base with these columns:
Form Fields: First Name, Last Name, Email, City, Country, Phone Number
IPinfo Data: IP Address, City_IP, Region, Country_IP, ISP

Use your Airtable API token for Make.com connection.

Map form fields to Airtable columns in your scenario.

4. IPinfo Integration

Create an account on IPinfo.io
.

Copy your API token.

In Make.com HTTP module, make a GET request: https://ipinfo.io/{IP}?token=YOUR_TOKEN

Parse JSON and update the Airtable record.

5. Testing

Open the form in your browser.

Fill in sample data.

Submit the form.

Check Make.com scenario execution.

Verify Airtable has the new or updated record with IPinfo data.

Future Improvements

Host the frontend online using GitHub Pages for public access.

Add file upload capabilities.

Integrate email notifications after form submission.

Expand automation workflow with additional APIs.

Demo

Form URL: Public Form

Airtable Preview: Internal only (API connection required)




