# Web Form + Webhook + Airtable + IPinfo Automation

## Overview
This project is an interactive web form built with **HTML, CSS, and JavaScript**.  
It collects user data and sends it to a **Make.com webhook**, which processes the data and stores it in **Airtable**. The workflow is enriched with the **IPinfo API** to gather geolocation and other IP-related information.

This setup demonstrates a full automation workflow, including frontend data capture, backend integration, API enrichment, and automated database updates.

## Features

### Frontend
- Interactive form collecting **6 fields**: First Name, Last Name, Email, City, Country, Phone Number.
- Real-time validation for email, required fields, and correct formats.
- Clean, responsive UI with HTML and CSS.
- Ready for integration with backend webhook/API.

### Backend Automation (Make.com)
- Custom webhook receives the form data.
- Airtable modules handle **create/update records**:
  - New submissions create a new record.
  - Existing records can be updated using email as a unique identifier.
- HTTP module calls **IPinfo API**:
  - Retrieves IP address, city, region, country, ISP, etc.
  - Updates the same Airtable record with IP-related info.
- JSON and Text Parser modules manage structured data.

### Airtable Database
- Centralized storage for all user submissions.
- Automated updates with enriched IP information.
- Flexible schema for additional fields.

### Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Automation Platform:** Make.com (Webhooks, HTTP, JSON, Text Parser, Airtable modules)
- **Database:** Airtable
- **External API:** IPinfo.io
- **Version Control:** Git & GitHub

## Setup Instructions

### 1. Clone the Repository
git clone https://github.com/YOUR_USERNAME/form-webhook-portafolio.git
cd form-webhook-portafolio
### 2. Run Locally
Option 1: Open index.html directly in your browser for basic testing.
Option 2: Use a local server (recommended for fetch requests)
python -m http.server 8000
Then open http://localhost:8000 in your browser.
Fill out the form and submit. Ensure your Make.com webhook is active.

## 3. Make.com Scenario
Create a Custom Webhook in Make.com.
Connect the webhook URL to the form's fetch POST request.
Use HTTP module to request IPinfo data with your API token.
Use Airtable modules to create/update records based on email.
Parse JSON and map data fields to Airtable columns.

## 4. Airtable Setup
Create a new base with columns:
First Name, Last Name, Email, City, Country, Phone Number
IP Address, City_IP, Region, Country_IP, ISP
Use your Airtable API token for Make.com connection.
Map form fields to Airtable columns in your scenario.

## 5. IPinfo Integration
Create an account on IPinfo.io.
Copy your API Token.
In Make.com HTTP module, make a GET request:
https://ipinfo.io/{IP}?token=YOUR_TOKEN
Parse the JSON response and update the Airtable record.

## 6. How to Test
Open the form in your browser.
Fill in the fields with sample data.
Submit the form.
Check Make.com scenario execution.
Verify that Airtable has the new or updated record with IPinfo data.

## 7. Future Improvements
Host the frontend online using GitHub Pages for public access.
Add file upload capabilities.
Integrate email notifications after submission.
Expand automation workflow with additional APIs.

## 8. Demo
Form URL: Public Form Link
Airtable Preview: Internal only (requires API connection)

## 9. Notes
This project demonstrates full-stack automation without a traditional backend server.
Perfect for a portfolio to showcase web development and automation skills.
All code is open and can be extended for more complex workflows.



