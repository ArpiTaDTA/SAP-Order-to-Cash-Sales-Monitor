# SAP Order-to-Cash Sales Monitor

This project is a SAP capstone built with SAPUI5/OpenUI5. It turns the ABAP sales-order report concept from the course topics into a working Fiori-style application that demonstrates:

- organizational structure (`Company Code`, `Sales Org`, `Plant`)
- master data vs transaction data (`Customer`, `Material`, `Sales Order`)
- core business process integration (`Order-to-Cash`)
- reporting and analytics (KPI cards and order monitoring)
- SAP Fiori/UI5 concepts (routing, responsive UI, detail navigation)
- OData-ready design mapped from the `ZSODATA` ABAP report and `VBAK` + `VBAP`

## Project Theme

**Title:** SAP Order-to-Cash Sales Monitor  
**Business Scenario:** Sales order monitoring and reporting for an OTC process  
**Reference ABAP Program:** `ZSODATA`  
**Reference Service Name:** `ZSO_SALES_ORDERS_SRV`

## Main Features

- Dashboard-style KPI summary for total orders, order value, customer count, and pending actions
- Search by sales order, customer, and material
- Filters for process stage, sales organization, and payment status
- Sales order detail page with business, organizational, transaction, and technical mapping sections
- Local dataset so the project runs without a live SAP backend
- OData metadata reference for future backend integration

## Important Files

- [webapp/view/Worklist.view.xml](/c:/Users/KIIT0001/Desktop/SAP%20PROJECT/webapp/view/Worklist.view.xml)
- [webapp/view/Object.view.xml](/c:/Users/KIIT0001/Desktop/SAP%20PROJECT/webapp/view/Object.view.xml)
- [webapp/controller/Worklist.controller.js](/c:/Users/KIIT0001/Desktop/SAP%20PROJECT/webapp/controller/Worklist.controller.js)
- [webapp/controller/Object.controller.js](/c:/Users/KIIT0001/Desktop/SAP%20PROJECT/webapp/controller/Object.controller.js)
- [webapp/model/salesOrders.json](/c:/Users/KIIT0001/Desktop/SAP%20PROJECT/webapp/model/salesOrders.json)
- [CAPSTONE_DOCUMENTATION.md](/c:/Users/KIIT0001/Desktop/SAP%20PROJECT/CAPSTONE_DOCUMENTATION.md)
- [MODULE_ALIGNMENT.md](/c:/Users/KIIT0001/Desktop/SAP%20PROJECT/MODULE_ALIGNMENT.md)
- [SUBMISSION_CHECKLIST.md](/c:/Users/KIIT0001/Desktop/SAP%20PROJECT/SUBMISSION_CHECKLIST.md)

## Run Locally

If Node.js and UI5 tooling are available:

```powershell
npm install
npm start
```

Then open `http://localhost:8080`.

## Submission Notes

- Use this repo/folder for your ZIP and GitHub upload.
- Use `CAPSTONE_DOCUMENTATION.md` as the base content for the required 4-5 page PDF.
- Add your personal details before final submission:
  - Name: ARPITA DATTA
  - Roll Number : 2305846
  - Program : SAP FIORI DEVELOPER
  - 
