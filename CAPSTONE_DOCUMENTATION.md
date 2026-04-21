# Capstone Project Documentation

## Student Details

- Name: `<Add your name>`
- Roll Number: `<Add your roll number>`
- Batch / Program: `SAP Program - B8 Batch`

## Project Title

**SAP Order-to-Cash Sales Monitor**

## Problem Statement

Business users often rely on multiple SAP transactions and reports to track the progress of sales orders across the Order-to-Cash cycle. This makes it difficult to quickly identify delayed deliveries, pending billing, and overdue payments. The problem becomes more visible when transaction data is spread across different process stages and users need a simple, role-friendly dashboard for day-to-day monitoring.

## Proposed Solution

The project delivers a SAP Fiori style application that monitors sales orders using a unified dashboard. It combines joined sales-order style data inspired by the `ZSODATA` ABAP report and presents it in a clean UI with KPI cards, filters, search, and a detailed order view. The app is designed for local demonstration while still showing a clear path to OData service integration.

## Features

- KPI dashboard showing total orders, overall value, active customers, and pending actions
- Search by sales order number, customer, or material
- Filters by process stage, sales organization, and payment status
- Detailed sales-order screen covering business, organization, transaction, and technical data
- Responsive SAPUI5 interface for desktop and mobile-friendly viewing
- OData-ready metadata reference based on SAP ABAP report fields

## SAP Concepts Covered

- ERP and digital enterprise reporting context
- SAP product landscape awareness through OData-ready and extension-ready design
- SAP architecture basics through UI, application logic, and data mapping
- Roles and navigation mindset through business-focused worklist design
- Organizational structure using company code, plant, and sales organization
- Master data and transaction data distinction using customer/material vs sales orders
- Core business process integration through Order-to-Cash stages
- SAP data concepts through ABAP/Open SQL field mapping
- SAP Fiori and UI5 development
- Reporting and analytics through KPI-style insights

## Technical Stack

- SAPUI5 / OpenUI5
- JavaScript
- XML Views
- JSON Model for local demo data
- OData metadata reference for backend-ready design
- ABAP report mapping from `ZSODATA`

## Dataset / Data Logic

The app uses a local JSON dataset to simulate joined records from SAP sales document header and item tables:

- `VBAK` for header level concepts
- `VBAP` for item level concepts
- `ZSODATA` as the ABAP report reference

The dataset includes sales order number, item, customer, material, sales organization, plant, quantity, net value, delivery status, billing status, and payment status.

## Unique Points

- Connects classroom SAP topics to a single end-to-end capstone app
- Uses a business scenario that is easy to explain during viva or evaluation
- Demonstrates both technical and functional understanding
- Keeps the project runnable without requiring a live SAP server
- Clearly maps ABAP report logic into a Fiori-style UI

## Future Improvements

- Connect to a real SAP Gateway OData service
- Add role-based views and authorization checks
- Introduce CDS views for richer analytics
- Add charts for billing and payment trends
- Extend the app to delivery and invoice drill-down pages

## Suggested Screenshots For PDF

1. Worklist dashboard with KPI cards
2. Filtered sales order list
3. Sales order detail page
4. Technical mapping section

## Conclusion

This capstone project demonstrates how SAP business process knowledge, ABAP-style data understanding, and SAP Fiori development can be combined into a practical reporting application. It is aligned with the training modules and is suitable for final submission after adding the student-specific details and screenshots.
