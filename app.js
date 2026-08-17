var P={};

/* ============ NAVIGATION — every module promised in the deck ============ */
P.nav=[
 {g:"OPERATIONS",items:[
   {id:"dashboard",ic:"▦",l:"Dashboard"},
   {id:"incidents",ic:"⚠",l:"Incident Management",b:4},
   {id:"tasks",ic:"☑",l:"Tasks & Approvals",b:7},
   {id:"workflows",ic:"⇄",l:"Workflow Automation"},
   {id:"agents",ic:"◈",l:"Autonomous Agents"},
 ]},
 {g:"INTELLIGENCE",items:[
   {id:"intelligence",ic:"◉",l:"QI Intelligence"},
   {id:"predictive",ic:"⟡",l:"Predictive Maintenance"},
   {id:"analytics",ic:"◫",l:"Analytics & Reports"},
   {id:"qichat",ic:"✦",l:"QI Assistant"},
 ]},
 {g:"BUSINESS SYSTEMS",items:[
   {id:"erp",ic:"▤",l:"ERP"},
   {id:"crm",ic:"◍",l:"CRM"},
   {id:"hr",ic:"◑",l:"HR & People"},
   {id:"finance",ic:"⊞",l:"Finance"},
   {id:"itsm",ic:"⚙",l:"ITSM Service Desk"},
 ]},
 {g:"PHYSICAL & FIELD",items:[
   {id:"cctv",ic:"⊡",l:"CCTV & Surveillance"},
   {id:"biometrics",ic:"⊙",l:"Biometrics & Access"},
   {id:"fieldops",ic:"⚑",l:"Field Operations"},
   {id:"assets",ic:"▣",l:"Asset Management"},
 ]},
 {g:"SECURITY & TRUST",items:[
   {id:"security",ic:"⛨",l:"Cybersecurity",b:2},
   {id:"compliance",ic:"✓",l:"Compliance"},
   {id:"auditlogs",ic:"☰",l:"Audit Logs"},
 ]},
 {g:"PLATFORM",items:[
   {id:"integrations",ic:"⧉",l:"Integrations"},
   {id:"marketplace",ic:"⊕",l:"Marketplace"},
   {id:"admin",ic:"⚒",l:"Administration"},
   {id:"settings",ic:"⚙",l:"Settings"},
 ]},
];

/* ============ SIMULATED DATA ============ */
P.d={
 kpi:{workflows:13,active:10,agentActions:847,incidents:4,uptime:"99.97%",saved:"1,284h",cost:"$412K",risk:"Low"},
 systems:[
  {n:"ERP",s:"ok",l:"42ms"},{n:"CRM",s:"ok",l:"58ms"},{n:"HR Core",s:"ok",l:"64ms"},
  {n:"Biometrics",s:"warn",l:"310ms"},{n:"CCTV Grid",s:"ok",l:"71ms"},{n:"Cloud",s:"ok",l:"23ms"},
  {n:"Firewall",s:"warn",l:"128ms"},{n:"Database",s:"ok",l:"18ms"},{n:"WMS",s:"ok",l:"49ms"},
  {n:"Field Ops",s:"ok",l:"88ms"},{n:"ITSM",s:"ok",l:"37ms"},{n:"Finance",s:"ok",l:"52ms"},
 ],
 incidents:[
  {id:"INC-1042",t:"Payment gateway latency spike",d:"Finance",sev:"Critical",st:"Investigating",inv:"QI Agent",as:"M. Alavi",ago:"12m"},
  {id:"INC-1041",t:"Line 4 bearing temperature exceeded",d:"Manufacturing",sev:"Critical",st:"Open",inv:"Predictive",as:"R. Khan",ago:"22m"},
  {id:"INC-1040",t:"Biometric reader offline — Gate 3",d:"Facilities",sev:"High",st:"Auto-Resolved",inv:"QI Agent",as:"Auto",ago:"48m"},
  {id:"INC-1039",t:"Unusual login pattern detected",d:"Security",sev:"Critical",st:"Contained",inv:"QI Agent",as:"S. Idris",ago:"1h"},
  {id:"INC-1038",t:"Backup job failed — Node 7",d:"IT Ops",sev:"Medium",st:"Resolved",inv:"Human",as:"A. Nair",ago:"3h"},
  {id:"INC-1037",t:"CRM sync delay to ERP",d:"Sales Ops",sev:"Medium",st:"Resolved",inv:"QI Agent",as:"Auto",ago:"5h"},
  {id:"INC-1036",t:"VPN certificate expiring in 7 days",d:"Security",sev:"Low",st:"Scheduled",inv:"Predictive",as:"Auto",ago:"8h"},
 ],
 agents:[
  {n:"Auto-Alerting",ic:"🔔",c:"var(--emerald)",d:"Detects anomalies across every connected system and raises alerts before business impact.",runs:312,ok:"99.4%",on:1},
  {n:"Auto-Escalation",ic:"⇧",c:"var(--gold)",d:"Routes critical issues to the correct owner instantly, with no manual triage step.",runs:88,ok:"98.9%",on:1},
  {n:"Auto-Approval",ic:"✓",c:"var(--blue)",d:"Clears routine approvals automatically against policy thresholds, freeing leadership time.",runs:264,ok:"100%",on:1},
  {n:"Auto-Reporting",ic:"▤",c:"var(--emerald)",d:"Generates and distributes compliance and performance reports on schedule.",runs:96,ok:"100%",on:1},
  {n:"Auto-Optimization",ic:"◈",c:"var(--gold)",d:"Continuously tunes resource allocation and workflow routing toward efficiency.",runs:87,ok:"97.8%",on:0},
 ],
 workflows:[
  {n:"Employee Onboarding",tr:"HR record created",st:"Active",runs:34,sys:"HR → ERP → ITSM → Biometrics",t:"4m"},
  {n:"Incident Auto-Triage",tr:"Alert severity ≥ High",st:"Active",runs:212,sys:"Monitoring → ITSM → Field Ops",t:"22s"},
  {n:"Access Revocation",tr:"Employee exit flagged",st:"Active",runs:11,sys:"HR → Biometrics → CRM → Cloud",t:"90s"},
  {n:"Purchase Approval",tr:"PO raised under $10K",st:"Active",runs:78,sys:"ERP → Finance",t:"1m"},
  {n:"Predictive Maintenance",tr:"Sensor threshold breach",st:"Active",runs:46,sys:"IoT → Field Ops → ERP",t:"3m"},
  {n:"Compliance Evidence Pack",tr:"Monthly schedule",st:"Active",runs:6,sys:"Audit → Compliance",t:"12m"},
  {n:"Vendor Onboarding",tr:"New supplier approved",st:"Draft",runs:0,sys:"ERP → Finance → Compliance",t:"—"},
  {n:"Customer Escalation",tr:"CSAT below threshold",st:"Active",runs:19,sys:"CRM → ITSM",t:"45s"},
  {n:"Shift Roster Publish",tr:"Weekly schedule",st:"Active",runs:52,sys:"HR → Field Ops",t:"2m"},
  {n:"Backup Verification",tr:"Nightly",st:"Active",runs:180,sys:"Cloud → ITSM",t:"30s"},
  {n:"Asset Depreciation Run",tr:"Month end",st:"Paused",runs:8,sys:"Assets → Finance → ERP",t:"6m"},
  {n:"Security Patch Rollout",tr:"CVE severity ≥ 8.0",st:"Active",runs:24,sys:"Security → Cloud → ITSM",t:"18m"},
  {n:"Visitor Pre-Clearance",tr:"Visitor booked",st:"Active",runs:41,sys:"CRM → Biometrics → CCTV",t:"1m"},
 ],
 integrations:[
  {n:"SAP S/4HANA",c:"ERP",s:"Connected",sy:"2m ago"},{n:"Salesforce",c:"CRM",s:"Connected",sy:"5m ago"},
  {n:"Microsoft 365",c:"Productivity",s:"Connected",sy:"1m ago"},{n:"ServiceNow",c:"ITSM",s:"Connected",sy:"3m ago"},
  {n:"Workday",c:"HR",s:"Connected",sy:"8m ago"},{n:"Azure AD",c:"Identity",s:"Connected",sy:"1m ago"},
  {n:"AWS CloudWatch",c:"Cloud",s:"Connected",sy:"1m ago"},{n:"Hikvision NVR",c:"CCTV",s:"Connected",sy:"4m ago"},
  {n:"Suprema BioStar",c:"Biometrics",s:"Degraded",sy:"31m ago"},{n:"Oracle Fusion",c:"Finance",s:"Connected",sy:"7m ago"},
  {n:"Fortinet FortiGate",c:"Security",s:"Connected",sy:"2m ago"},{n:"Zoho Desk",c:"Support",s:"Available",sy:"—"},
  {n:"HubSpot",c:"CRM",s:"Available",sy:"—"},{n:"Jira Service Mgmt",c:"ITSM",s:"Available",sy:"—"},
  {n:"SAP SuccessFactors",c:"HR",s:"Available",sy:"—"},{n:"Google Workspace",c:"Productivity",s:"Available",sy:"—"},
 ],
 emps:[
  {id:1,n:"Mariam Alavi",r:"Finance Controller",d:"Finance",st:"Active",loc:"Dubai"},
  {id:2,n:"Rashid Khan",r:"Plant Supervisor",d:"Manufacturing",st:"Active",loc:"Sharjah"},
  {id:3,n:"Sara Idris",r:"Security Analyst",d:"Security",st:"Active",loc:"Dubai"},
  {id:4,n:"Arjun Nair",r:"IT Operations Lead",d:"IT Ops",st:"Active",loc:"Abu Dhabi"},
  {id:5,n:"Layla Hassan",r:"HR Business Partner",d:"HR",st:"Active",loc:"Dubai"},
  {id:6,n:"Omar Farouk",r:"Field Technician",d:"Field Ops",st:"On Assignment",loc:"Al Ain"},
  {id:7,n:"Priya Menon",r:"Data Analyst",d:"Intelligence",st:"Active",loc:"Dubai"},
  {id:8,n:"Yusuf Ahmed",r:"Network Engineer",d:"IT Ops",st:"Onboarding",loc:"Sharjah"},
 ],
 provisioning:[],
 approvals:[
  {item:"Purchase order — server rack",type:"Procurement",requester:"A. Nair",value:"$8,400",policy:"Under $10K auto-eligible",status:"Pending",approvedMsg:"approved and posted to ERP."},
  {item:"Leave request — 5 days",type:"HR",requester:"O. Farouk",value:"—",policy:"Within entitlement",status:"Pending",approvedMsg:"approved and synced to HR system."},
  {item:"Vendor contract renewal",type:"Legal",requester:"M. Alavi",value:"$42,000",policy:"Requires two-party sign-off",status:"Pending",approvedMsg:""},
  {item:"Elevated access — 48h",type:"Security",requester:"S. Idris",value:"—",policy:"Time-bound, auto-revokes",status:"Pending",approvedMsg:"granted with automatic revocation scheduled."},
  {item:"Overtime authorization",type:"HR",requester:"R. Khan",value:"$1,200",policy:"Under threshold",status:"Pending",approvedMsg:"approved."},
  {item:"Software license renewal",type:"Procurement",requester:"System",value:"$3,600",policy:"Under $10K auto-eligible",status:"Auto-Approved",approvedMsg:""},
  {item:"Standard access request",type:"Security",requester:"L. Hassan",value:"—",policy:"Role-matched, auto-eligible",status:"Auto-Approved",approvedMsg:""},
  {item:"Travel expense reimbursement",type:"Finance",requester:"M. Alavi",value:"$890",policy:"Under threshold",status:"Approved",approvedMsg:""},
 ],
 auditLog:[
  {t:"2026-08-04 14:32:08",cls:"i",msg:"[AGENT:auto-escalation] INC-1042 routed → M. Alavi · policy: severity≥Critical",actor:"Auto-Escalation Agent",hash:"0x8f2a...c91e ✓ verified"},
  {t:"2026-08-04 14:32:07",cls:"i",msg:"[AGENT:auto-alerting] Anomaly raised · gateway latency 3.2σ · 12 systems correlated",actor:"Auto-Alerting Agent",hash:"0x3b7d...a44f ✓ verified"},
  {t:"2026-08-04 14:31:44",cls:"i",msg:"[AGENT:auto-approval] PO-4471 approved · $8,400 · policy: under-10K-threshold",actor:"Auto-Approval Agent",hash:"0x91ce...7712 ✓ verified"},
  {t:"2026-08-04 14:29:12",cls:"w",msg:"[USER:bobby.sharon] Auto-Optimization agent disabled",actor:"Bobby Sharon",hash:"0x4a1f...de03 ✓ verified"},
  {t:"2026-08-04 14:28:55",cls:"i",msg:"[AGENT:auto-reporting] PDPL evidence pack generated · distributed to 3 recipients",actor:"Auto-Reporting Agent",hash:"0xc228...9b56 ✓ verified"},
  {t:"2026-08-04 14:26:03",cls:"w",msg:"[SYSTEM:biometrics] Gate 3 error rate 4.2% · threshold breached",actor:"System — Biometrics",hash:"0x77ae...1120 ✓ verified"},
  {t:"2026-08-04 14:26:04",cls:"i",msg:"[AGENT:auto-escalation] JOB-2214 created · O. Farouk dispatched",actor:"Auto-Escalation Agent",hash:"0xf90b...5d8a ✓ verified"},
  {t:"2026-08-04 14:22:31",cls:"e",msg:"[SYSTEM:iot] Line 4 bearing temp +14°C · INC-1041 raised",actor:"System — IoT Telemetry",hash:"0x2e6c...ff31 ✓ verified"},
  {t:"2026-08-04 14:18:09",cls:"i",msg:"[AGENT:auto-approval] Leave request cleared · within entitlement",actor:"Auto-Approval Agent",hash:"0xab04...338e ✓ verified"},
  {t:"2026-08-04 14:12:44",cls:"e",msg:"[SECURITY] Unusual login pattern · session terminated · MFA challenge issued",actor:"System — Security",hash:"0x610d...c274 ✓ verified"},
  {t:"2026-08-04 13:48:12",cls:"i",msg:"[SYSTEM:cctv] Loading bay dwell >30min · correlated with ERP delivery record",actor:"System — CCTV",hash:"0x5f83...a609 ✓ verified"},
  {t:"2026-08-04 13:44:02",cls:"w",msg:"[SECURITY] Port scan detected · source blocked at firewall",actor:"System — Security",hash:"0x1cd7...4e92 ✓ verified"},
 ],
 frameworks:[
  {n:"UAE PDPL — Data Protection",pct:94,note:"Jan 2027 deadline",
   evidence:["Data residency policy enforced — UAE region pinned at infrastructure level","Consent tracking live across all customer-facing modules","Right-to-erasure endpoint tested, avg completion 4.2 days","Breach notification workflow documented and drilled quarterly"]},
  {n:"UAE NESA / Cyber Security Standards",pct:91,note:"Aligned",
   evidence:["Zero-trust architecture satisfies core network segmentation requirements","Continuous monitoring active across 100% of endpoints","Incident response plan reviewed within last 6 months"]},
  {n:"ISO 27001 — Information Security",pct:78,note:"Certification planned",
   evidence:["Information security policy documented and distributed","Risk register maintained, reviewed quarterly","Gap: formal internal audit cycle not yet completed"]},
  {n:"SOC 2 Type II",pct:42,note:"Required for US expansion",
   evidence:["Change management via CI/CD gates — evidence collecting since Q3","Gap: access review cadence not yet at required quarterly frequency","Gap: vendor risk register incomplete"]},
  {n:"GDPR — EU Readiness",pct:56,note:"Required for EU expansion",
   evidence:["Core PDPL controls largely transferable to GDPR requirements","Gap: EU data residency option not yet built","Gap: DPO designation pending"]},
 ],
 gaps:[
  {gap:"Data retention not enforced on 2 legacy systems",fw:"PDPL",owner:"A. Nair",target:"Q1 2026",status:"In Progress",
   plan:"Legacy ERP and file-share systems predate the automated retention policy engine. Migration to policy-enforced storage is 60% complete; remaining systems scheduled for cutover by end of Q1."},
  {gap:"Processor agreements pending — 4 vendors",fw:"PDPL",owner:"M. Alavi",target:"Q1 2026",status:"In Progress",
   plan:"Data processing agreements drafted and sent to all 4 sub-processors. 2 signed, 2 under vendor legal review."},
  {gap:"Subject access request workflow untested at volume",fw:"PDPL",owner:"L. Hassan",target:"Q2 2026",status:"Planned",
   plan:"Current workflow handles individual requests reliably but hasn't been load-tested for a bulk-request scenario. Load test scheduled alongside Q2 infrastructure review."},
 ],
 secEvents:[
  {time:"14:12",event:"Unusual login pattern — 4 failed then success",source:"203.0.113.x",sev:"Critical",response:"Session terminated, MFA re-challenge",status:"Contained",
   timeline:["14:12:01 — 4 failed login attempts detected from external IP","14:12:04 — 5th attempt succeeded — flagged as anomalous by QI Engine","14:12:06 — Session automatically terminated, MFA re-challenge issued","14:12:09 — User re-authenticated successfully with hardware key"]},
  {time:"13:44",event:"Port scan detected",source:"198.51.100.x",sev:"High",response:"Source blocked at firewall",status:"Blocked",
   timeline:["13:44:00 — Sequential port scan pattern detected across 40 ports","13:44:02 — Source IP automatically blocked at perimeter firewall","13:44:03 — Block rule propagated to all regional firewalls"]},
  {time:"11:20",event:"Certificate expiring — VPN gateway",source:"Internal",sev:"Medium",response:"Renewal scheduled",status:"Scheduled",
   timeline:["11:20:00 — Certificate expiry detected, 14 days remaining","11:20:02 — Auto-Reporting agent created renewal task","11:20:05 — Scheduled for renewal window this weekend"]},
  {time:"09:08",event:"Privilege escalation attempt",source:"Internal — WS-042",sev:"High",response:"Account suspended, IT notified",status:"Contained",
   timeline:["09:08:00 — User attempted to access admin-only resource without privilege","09:08:01 — Access denied by OPA policy engine","09:08:03 — Account automatically suspended pending review","09:08:05 — IT Operations notified via Auto-Escalation"]},
 ],
 fieldJobs:[
  {id:"JOB-2214",loc:"Gate 3 — HQ",tech:"O. Farouk",issue:"Biometric reader errors",dispatched:"Auto — 26m ago",status:"En route",
   timeline:["26m ago — Auto-dispatched based on Biometrics error-rate alert","24m ago — O. Farouk accepted assignment","18m ago — En route, ETA 8 min"]},
  {id:"JOB-2213",loc:"Line 4 — Sharjah",tech:"R. Khan",issue:"Bearing inspection",dispatched:"Auto — 1h ago",status:"On site",
   timeline:["1h ago — Auto-dispatched from Predictive Maintenance alert","52m ago — R. Khan accepted assignment","31m ago — Arrived on site, inspection in progress"]},
  {id:"JOB-2212",loc:"DC-Dubai",tech:"A. Nair",issue:"Storage node cleanup",dispatched:"Auto — 2h ago",status:"Complete",
   timeline:["2h ago — Auto-dispatched from storage capacity alert","1h 40m ago — A. Nair accepted assignment","58m ago — Cleanup completed, 340GB reclaimed"]},
  {id:"JOB-2211",loc:"Warehouse B",tech:"O. Farouk",issue:"Camera signal check",dispatched:"Manual — 3h ago",status:"Complete",
   timeline:["3h ago — Manually dispatched by L. Hassan","2h 20m ago — O. Farouk accepted assignment","1h 45m ago — Signal restored, cable fault resolved"]},
 ],
 cameras:[
  {n:"HQ Entrance",loc:"Dubai",st:"ok"},{n:"HQ Reception",loc:"Dubai",st:"ok"},{n:"HQ Floor 4",loc:"Dubai",st:"ok"},{n:"Server Room",loc:"DC-Dubai",st:"ok"},
  {n:"Gate 3",loc:"HQ",st:"warn"},{n:"Loading Bay",loc:"Sharjah",st:"ok"},{n:"Line 4 Overhead",loc:"Sharjah",st:"ok"},{n:"Perimeter North",loc:"Sharjah",st:"ok"},
  {n:"Warehouse A",loc:"Sharjah",st:"ok"},{n:"Warehouse B",loc:"Sharjah",st:"warn"},{n:"Car Park L1",loc:"Dubai",st:"ok"},{n:"Car Park L2",loc:"Dubai",st:"ok"},
 ],
 cctvEvents:[
  {time:"14:26",cam:"Gate 3",event:"Access attempt — read failure",corr:"Biometrics, ITSM",action:"Field tech dispatched",
   trace:["14:26:02 — Biometric reader Gate 3 logged 3 consecutive read failures","14:26:04 — CCTV motion-matched a badge attempt at the same door","14:26:08 — Correlation engine linked to open ticket SR-8821 (reader hardware fault)","14:26:11 — Auto-Escalation dispatched field technician O. Farouk"]},
  {time:"13:48",cam:"Loading Bay",event:"Vehicle dwell > 30min",corr:"Field Ops, ERP",action:"Delivery logged",
   trace:["13:48:00 — CCTV detected stationary vehicle beyond 30min threshold","13:48:03 — Cross-checked against ERP purchase order delivery schedule","13:48:05 — Matched to PO-4470 — confirmed scheduled delivery, no action needed"]},
  {time:"11:12",cam:"Perimeter North",event:"Motion after hours",corr:"Security, HR roster",action:"Cleared — authorized",
   trace:["11:12:00 — Perimeter motion sensor triggered outside business hours","11:12:02 — Cross-referenced badge scan against HR on-call roster","11:12:04 — Match found: R. Khan scheduled for after-hours maintenance — cleared automatically"]},
  {time:"09:35",cam:"Server Room",event:"Door held open",corr:"Biometrics, Security",action:"Auto-alert sent",
   trace:["09:35:00 — Server room door sensor exceeded 45-second open threshold","09:35:01 — Cross-checked against active biometric session — valid badge holder present","09:35:03 — Auto-alert sent to Security on-call as a precautionary notice"]},
 ],
 finTxns:[
  {ref:"TXN-9912",desc:"Cloud infrastructure — July",cc:"IT Operations",amt:"$18,400",matched:"Auto",status:"Posted",
   trail:["Auto-matched to PO-4461 within 2 minutes of invoice receipt","Vendor: AWS Middle East — recurring monthly charge"]},
  {ref:"TXN-9911",desc:"Security licenses renewal",cc:"Security",amt:"$12,800",matched:"Auto",status:"Posted",
   trail:["Auto-matched to annual license renewal schedule","Vendor: Fortinet — matches prior year within 3% variance"]},
  {ref:"TXN-9910",desc:"Bearing assembly ×4",cc:"Facilities",amt:"$2,100",matched:"Auto",status:"Posted",
   trail:["Auto-matched to maintenance work order WO-2214","Linked to Predictive Maintenance alert on Line 4"]},
  {ref:"TXN-9909",desc:"Contractor invoice — Q2",cc:"Field Operations",amt:"$8,900",matched:"Manual",status:"Review",
   trail:["No matching PO found — flagged for manual review","Vendor: Al Futtaim Technical Services","QI Engine: spend velocity 2.1σ above 90-day baseline for this vendor"]},
 ],
 crmAccounts:[
  {n:"Gulf Manufacturing LLC",seg:"Enterprise",acv:"$48,000",health:"Healthy",tix:"2",owner:"M. Alavi",
   activity:["Yesterday — QBR scheduled for next week","3d ago — Renewed annual contract","1w ago — Onboarded 2 new users"],
   openTix:[{t:"Integration sync delay on ERP connector",p:"Medium",age:"Opened 2d ago",detail:"Nightly sync running 40min behind schedule. Field Ops flagged this is impacting job dispatch data freshness."},
     {t:"Request: additional CCTV camera license",p:"Low",age:"Opened 5d ago",detail:"Customer wants to add 4 more camera feeds to their existing Surveillance module license."}]},
  {n:"Desert Logistics Co",seg:"Mid-Market",acv:"$24,000",health:"Healthy",tix:"0",owner:"M. Alavi",
   activity:["3d ago — Positive CSAT survey response (5/5)","2w ago — Expanded to Field Ops module"],
   openTix:[]},
  {n:"Sharjah Retail Group",seg:"Mid-Market",acv:"$18,500",health:"At Risk",tix:"5",owner:"L. Hassan",
   activity:["Today — Health score dropped 12pts, flagged by QI Engine","Yesterday — 2 new tickets opened","4d ago — Missed scheduled check-in call"],
   openTix:[{t:"Recurring login failures — SSO integration",p:"High",age:"Opened 6h ago",detail:"Multiple users unable to authenticate via their Azure AD SSO connector since this morning. Correlated with an Integrations sync failure."},
     {t:"Billing discrepancy on last invoice",p:"Medium",age:"Opened 1d ago",detail:"Customer disputes a $1,200 line item for overage seats — Finance has been looped in."},
     {t:"Dashboard loading slowly for Retail module",p:"Medium",age:"Opened 2d ago",detail:"Reported intermittently across 3 store locations, being investigated by platform team."},
     {t:"Request for additional training session",p:"Low",age:"Opened 3d ago",detail:"New store managers need onboarding walkthrough for the POS integration."},
     {t:"Feature request: bulk export for inventory",p:"Low",age:"Opened 5d ago",detail:"Logged for product review, not yet scheduled."}]},
  {n:"Al Ain Construction",seg:"SME",acv:"$12,000",health:"Healthy",tix:"1",owner:"L. Hassan",
   activity:["1w ago — Renewed for second year","3w ago — Added Asset Management module"],
   openTix:[{t:"Asset tag scanner not syncing",p:"Medium",age:"Opened 1d ago",detail:"Handheld scanner used on-site isn't syncing new asset tags to the central register."}]},
  {n:"Marina Hospitality",seg:"SME",acv:"$9,600",health:"At Risk",tix:"4",owner:"M. Alavi",
   activity:["Today — CSAT survey scored 2/5, escalated to owner","2d ago — Requested cancellation call"],
   openTix:[{t:"Considering cancellation — pricing concern",p:"High",age:"Opened 1d ago",detail:"Customer cited cost as primary concern during renewal discussion. Owner has scheduled a retention call."},
     {t:"CCTV feed drops intermittently",p:"Medium",age:"Opened 2d ago",detail:"Lobby camera feed drops for 2-3 minutes several times daily, being investigated."},
     {t:"Staff access badges not provisioning",p:"Medium",age:"Opened 3d ago",detail:"New hires added in HR module aren't getting biometric access granted automatically — likely related to the Biometrics connector."},
     {t:"Invoice not received for this month",p:"Low",age:"Opened 4d ago",detail:"Billing contact reports not receiving the automated monthly invoice email."}]},
  {n:"Emirates FoodTech",seg:"Mid-Market",acv:"$21,000",health:"Healthy",tix:"1",owner:"L. Hassan",
   activity:["5d ago — Expanded to 3 additional sites","3w ago — Signed annual renewal"],
   openTix:[{t:"Cold storage sensor threshold tuning",p:"Low",age:"Opened 2d ago",detail:"Customer wants temperature alert thresholds adjusted for their new freezer units."}]},
 ],
 tickets:[
  {id:"SR-8821",t:"Laptop replacement request",p:"Medium",st:"In Progress",a:"A. Nair",sla:"4h left"},
  {id:"SR-8820",t:"VPN access for new joiner",p:"High",st:"Auto-Resolved",a:"Auto",sla:"Met"},
  {id:"SR-8819",t:"ERP report permission",p:"Low",st:"Open",a:"Unassigned",sla:"2d left"},
  {id:"SR-8818",t:"Printer offline — 4th floor",p:"Low",st:"Resolved",a:"O. Farouk",sla:"Met"},
  {id:"SR-8817",t:"Email quota increase",p:"Medium",st:"Auto-Resolved",a:"Auto",sla:"Met"},
 ],
 assets:[
  {id:"AST-0412",n:"Dell PowerEdge R750",c:"Server",loc:"DC-Dubai",st:"Operational",w:"2027-03"},
  {id:"AST-0413",n:"FortiGate 200F",c:"Network",loc:"DC-Dubai",st:"Operational",w:"2026-11"},
  {id:"AST-0414",n:"Hikvision NVR-64",c:"CCTV",loc:"Sharjah Plant",st:"Operational",w:"2027-06"},
  {id:"AST-0415",n:"Suprema BioEntry",c:"Biometrics",loc:"Gate 3",st:"Degraded",w:"2026-08"},
  {id:"AST-0416",n:"Conveyor Motor L4",c:"Industrial",loc:"Line 4",st:"Alert",w:"2026-02"},
  {id:"AST-0417",n:"HP LaserJet M480",c:"Peripheral",loc:"HQ Floor 4",st:"Operational",w:"2026-09"},
 ],
 alerts:[
  {t:"Bearing temp on Line 4 trending to failure",w:"~72h",conf:"94%",act:"Maintenance scheduled"},
  {t:"Storage node 7 projected full",w:"~6d",conf:"88%",act:"Auto-cleanup queued"},
  {t:"Biometric reader Gate 3 error rate rising",w:"~48h",conf:"91%",act:"Field tech dispatched"},
  {t:"License renewal — 12 seats underutilized",w:"~21d",conf:"97%",act:"Cost review flagged"},
 ],
 sources:[
  {sys:"HR",ic:"◑",feeds:"Employee lifecycle events, role changes, org structure",live:1},
  {sys:"ITSM",ic:"⚙",feeds:"Ticket volume, SLA breaches, provisioning requests",live:1},
  {sys:"Biometrics",ic:"⊙",feeds:"Access events, reader error rates, badge anomalies",live:1},
  {sys:"CCTV",ic:"⊡",feeds:"Motion events, dwell time, correlated access attempts",live:1},
  {sys:"ERP",ic:"▤",feeds:"Purchase orders, inventory levels, approval chains",live:1},
  {sys:"Finance",ic:"⊞",feeds:"Spend velocity, budget variance, reconciliation gaps",live:1},
  {sys:"Field Ops",ic:"⚑",feeds:"Job status, technician location, asset telemetry",live:1},
  {sys:"Security",ic:"⛨",feeds:"Login anomalies, firewall events, threat signals",live:1},
  {sys:"Assets",ic:"▣",feeds:"Warranty windows, sensor telemetry, depreciation state",live:1},
  {sys:"Integrations",ic:"⧉",feeds:"Third-party sync status, connector health, data freshness",live:1},
  {sys:"Workflows",ic:"⇄",feeds:"Execution state, step failures, orchestration timing",live:1},
  {sys:"CRM",ic:"◍",feeds:"Account health scores, churn signals, support volume",live:1},
 ],
 events:[
  {t:"14:32:08",sys:"ITSM",e:"Ticket SR-8821 SLA timer at 80% — escalation risk flagged to correlation engine"},
  {t:"14:28:55",sys:"Biometrics",e:"Gate 3 reader error rate crossed 4% threshold — pattern matched against 3 historical incidents"},
  {t:"14:22:31",sys:"Finance",e:"TXN-9909 flagged — vendor spend velocity 2.1σ above 90-day baseline"},
  {t:"14:18:09",sys:"ERP",e:"PO-4470 pending 2 days — correlated with vendor delivery delay pattern"},
  {t:"14:12:44",sys:"Security",e:"Login anomaly on WS-042 — cross-referenced with HR travel/leave calendar, cleared"},
 ],
};

/* ============ CORE ============ */
P.cur="dashboard";
P.notify=(m)=>{const t=document.getElementById('toast');t.textContent=m;t.classList.add('on');
  clearTimeout(P._t);P._t=setTimeout(()=>t.classList.remove('on'),2600)};
P.esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
P.sevPill=s=>({Critical:'p-crit',High:'p-warn',Medium:'p-info',Low:'p-mut'}[s]||'p-mut');

/* ================= i18n ================= */
P.lang='en';
P.i18n={"en": {"grp_OPERATIONS": "OPERATIONS","grp_INTELLIGENCE": "INTELLIGENCE","grp_BUSINESS SYSTEMS": "BUSINESS SYSTEMS","grp_PHYSICAL & FIELD": "PHYSICAL & FIELD","grp_SECURITY & TRUST": "SECURITY & TRUST","grp_PLATFORM": "PLATFORM","nav_dashboard": "Dashboard","nav_incidents": "Incident Management","nav_tasks": "Tasks & Approvals","nav_workflows": "Workflow Automation","nav_agents": "Autonomous Agents","nav_intelligence": "QI Intelligence","nav_predictive": "Predictive Maintenance","nav_analytics": "Analytics & Reports","nav_qichat": "QI Assistant","nav_erp": "ERP","nav_crm": "CRM","nav_hr": "HR & People","nav_finance": "Finance","nav_itsm": "ITSM Service Desk","nav_cctv": "CCTV & Surveillance","nav_biometrics": "Biometrics & Access","nav_fieldops": "Field Operations","nav_assets": "Asset Management","nav_security": "Cybersecurity","nav_compliance": "Compliance","nav_auditlogs": "Audit Logs","nav_integrations": "Integrations","nav_marketplace": "Marketplace","nav_admin": "Administration","nav_settings": "Settings","Operations Overview": "Operations Overview","Incident Management": "Incident Management","Tasks & Approvals": "Tasks & Approvals","Workflow Automation": "Workflow Automation","Autonomous Agents": "Autonomous Agents","QI Intelligence Layer": "QI Intelligence Layer","Predictive Maintenance": "Predictive Maintenance","Analytics & Reports": "Analytics & Reports","QI Assistant": "QI Assistant","ERP": "ERP","CRM": "CRM","HR & People": "HR & People","Finance": "Finance","ITSM Service Desk": "ITSM Service Desk","CCTV & Surveillance": "CCTV & Surveillance","Biometrics & Access Control": "Biometrics & Access Control","Field Operations": "Field Operations","Asset Management": "Asset Management","Cybersecurity": "Cybersecurity","Compliance": "Compliance","Audit Logs": "Audit Logs","Integrations": "Integrations","Marketplace": "Marketplace","Administration": "Administration","Settings": "Settings","Search incidents, assets, workflows, people…": "Search incidents, assets, workflows, people…","+ New": "+ New","Global Administrator": "Global Administrator","ENTERPRISE INTELLIGENCE PLATFORM": "ENTERPRISE INTELLIGENCE PLATFORM","Company": "Company","Email": "Email","Password": "Password","Remember me": "Remember me","Forgot password?": "Forgot password?","Sign In": "Sign In","Unified enterprise intelligence, secured end to end": "Unified enterprise intelligence, secured end to end"},"ar": {"grp_OPERATIONS": "العمليات","grp_INTELLIGENCE": "الذكاء","grp_BUSINESS SYSTEMS": "أنظمة الأعمال","grp_PHYSICAL & FIELD": "العمليات الميدانية","grp_SECURITY & TRUST": "الأمن والثقة","grp_PLATFORM": "المنصة","nav_dashboard": "لوحة التحكم","nav_incidents": "إدارة الحوادث","nav_tasks": "المهام والموافقات","nav_workflows": "أتمتة سير العمل","nav_agents": "الوكلاء المستقلون","nav_intelligence": "ذكاء QI","nav_predictive": "الصيانة التنبؤية","nav_analytics": "التحليلات والتقارير","nav_qichat": "مساعد QI","nav_erp": "تخطيط موارد المؤسسات","nav_crm": "إدارة علاقات العملاء","nav_hr": "الموارد البشرية","nav_finance": "المالية","nav_itsm": "مكتب خدمات تقنية المعلومات","nav_cctv": "المراقبة بالكاميرات","nav_biometrics": "القياسات الحيوية والدخول","nav_fieldops": "العمليات الميدانية","nav_assets": "إدارة الأصول","nav_security": "الأمن السيبراني","nav_compliance": "الامتثال","nav_auditlogs": "سجلات التدقيق","nav_integrations": "التكاملات","nav_marketplace": "السوق","nav_admin": "الإدارة","nav_settings": "الإعدادات","Operations Overview": "نظرة عامة على العمليات","Incident Management": "إدارة الحوادث","Tasks & Approvals": "المهام والموافقات","Workflow Automation": "أتمتة سير العمل","Autonomous Agents": "الوكلاء المستقلون","QI Intelligence Layer": "طبقة ذكاء QI","Predictive Maintenance": "الصيانة التنبؤية","Analytics & Reports": "التحليلات والتقارير","QI Assistant": "مساعد QI","ERP": "تخطيط موارد المؤسسات","CRM": "إدارة علاقات العملاء","HR & People": "الموارد البشرية","Finance": "المالية","ITSM Service Desk": "مكتب خدمات تقنية المعلومات","CCTV & Surveillance": "المراقبة بالكاميرات","Biometrics & Access Control": "القياسات الحيوية والتحكم بالدخول","Field Operations": "العمليات الميدانية","Asset Management": "إدارة الأصول","Cybersecurity": "الأمن السيبراني","Compliance": "الامتثال","Audit Logs": "سجلات التدقيق","Integrations": "التكاملات","Marketplace": "السوق","Administration": "الإدارة","Settings": "الإعدادات","Search incidents, assets, workflows, people…": "ابحث عن الحوادث والأصول وسير العمل والأشخاص…","+ New": "+ جديد","Global Administrator": "مسؤول عام","ENTERPRISE INTELLIGENCE PLATFORM": "منصة ذكاء المؤسسات","Company": "الشركة","Email": "البريد الإلكتروني","Password": "كلمة المرور","Remember me": "تذكرني","Forgot password?": "نسيت كلمة المرور؟","Sign In": "تسجيل الدخول","Unified enterprise intelligence, secured end to end": "ذكاء مؤسسي موحّد، مؤمّن بالكامل"},"fr": {"grp_OPERATIONS": "OPÉRATIONS","grp_INTELLIGENCE": "INTELLIGENCE","grp_BUSINESS SYSTEMS": "SYSTÈMES D'ENTREPRISE","grp_PHYSICAL & FIELD": "PHYSIQUE & TERRAIN","grp_SECURITY & TRUST": "SÉCURITÉ & CONFIANCE","grp_PLATFORM": "PLATEFORME","nav_dashboard": "Tableau de bord","nav_incidents": "Gestion des incidents","nav_tasks": "Tâches et approbations","nav_workflows": "Automatisation des flux","nav_agents": "Agents autonomes","nav_intelligence": "Intelligence QI","nav_predictive": "Maintenance prédictive","nav_analytics": "Analytique et rapports","nav_qichat": "Assistant QI","nav_erp": "ERP","nav_crm": "CRM","nav_hr": "RH et personnel","nav_finance": "Finances","nav_itsm": "Support ITSM","nav_cctv": "Vidéosurveillance","nav_biometrics": "Biométrie et accès","nav_fieldops": "Opérations de terrain","nav_assets": "Gestion des actifs","nav_security": "Cybersécurité","nav_compliance": "Conformité","nav_auditlogs": "Journaux d'audit","nav_integrations": "Intégrations","nav_marketplace": "Marché","nav_admin": "Administration","nav_settings": "Paramètres","Operations Overview": "Aperçu des opérations","Incident Management": "Gestion des incidents","Tasks & Approvals": "Tâches et approbations","Workflow Automation": "Automatisation des flux","Autonomous Agents": "Agents autonomes","QI Intelligence Layer": "Couche d'intelligence QI","Predictive Maintenance": "Maintenance prédictive","Analytics & Reports": "Analytique et rapports","QI Assistant": "Assistant QI","ERP": "ERP","CRM": "CRM","HR & People": "RH et personnel","Finance": "Finances","ITSM Service Desk": "Support ITSM","CCTV & Surveillance": "Vidéosurveillance","Biometrics & Access Control": "Biométrie et contrôle d'accès","Field Operations": "Opérations de terrain","Asset Management": "Gestion des actifs","Cybersecurity": "Cybersécurité","Compliance": "Conformité","Audit Logs": "Journaux d'audit","Integrations": "Intégrations","Marketplace": "Marché","Administration": "Administration","Settings": "Paramètres","Search incidents, assets, workflows, people…": "Rechercher incidents, actifs, flux, personnes…","+ New": "+ Nouveau","Global Administrator": "Administrateur global","ENTERPRISE INTELLIGENCE PLATFORM": "PLATEFORME D'INTELLIGENCE D'ENTREPRISE","Company": "Entreprise","Email": "E-mail","Password": "Mot de passe","Remember me": "Se souvenir de moi","Forgot password?": "Mot de passe oublié ?","Sign In": "Se connecter","Unified enterprise intelligence, secured end to end": "Intelligence d'entreprise unifiée, sécurisée de bout en bout"},"es": {"grp_OPERATIONS": "OPERACIONES","grp_INTELLIGENCE": "INTELIGENCIA","grp_BUSINESS SYSTEMS": "SISTEMAS EMPRESARIALES","grp_PHYSICAL & FIELD": "FÍSICO Y CAMPO","grp_SECURITY & TRUST": "SEGURIDAD Y CONFIANZA","grp_PLATFORM": "PLATAFORMA","nav_dashboard": "Panel","nav_incidents": "Gestión de incidentes","nav_tasks": "Tareas y aprobaciones","nav_workflows": "Automatización de flujos","nav_agents": "Agentes autónomos","nav_intelligence": "Inteligencia QI","nav_predictive": "Mantenimiento predictivo","nav_analytics": "Análisis e informes","nav_qichat": "Asistente QI","nav_erp": "ERP","nav_crm": "CRM","nav_hr": "RRHH y personal","nav_finance": "Finanzas","nav_itsm": "Mesa de servicio ITSM","nav_cctv": "CCTV y vigilancia","nav_biometrics": "Biometría y acceso","nav_fieldops": "Operaciones de campo","nav_assets": "Gestión de activos","nav_security": "Ciberseguridad","nav_compliance": "Cumplimiento","nav_auditlogs": "Registros de auditoría","nav_integrations": "Integraciones","nav_marketplace": "Mercado","nav_admin": "Administración","nav_settings": "Configuración","Operations Overview": "Resumen de operaciones","Incident Management": "Gestión de incidentes","Tasks & Approvals": "Tareas y aprobaciones","Workflow Automation": "Automatización de flujos","Autonomous Agents": "Agentes autónomos","QI Intelligence Layer": "Capa de inteligencia QI","Predictive Maintenance": "Mantenimiento predictivo","Analytics & Reports": "Análisis e informes","QI Assistant": "Asistente QI","ERP": "ERP","CRM": "CRM","HR & People": "RRHH y personal","Finance": "Finanzas","ITSM Service Desk": "Mesa de servicio ITSM","CCTV & Surveillance": "CCTV y vigilancia","Biometrics & Access Control": "Biometría y control de acceso","Field Operations": "Operaciones de campo","Asset Management": "Gestión de activos","Cybersecurity": "Ciberseguridad","Compliance": "Cumplimiento","Audit Logs": "Registros de auditoría","Integrations": "Integraciones","Marketplace": "Mercado","Administration": "Administración","Settings": "Configuración","Search incidents, assets, workflows, people…": "Buscar incidentes, activos, flujos, personas…","+ New": "+ Nuevo","Global Administrator": "Administrador global","ENTERPRISE INTELLIGENCE PLATFORM": "PLATAFORMA DE INTELIGENCIA EMPRESARIAL","Company": "Empresa","Email": "Correo electrónico","Password": "Contraseña","Remember me": "Recordarme","Forgot password?": "¿Olvidaste tu contraseña?","Sign In": "Iniciar sesión","Unified enterprise intelligence, secured end to end": "Inteligencia empresarial unificada, segura de extremo a extremo"},"zh": {"grp_OPERATIONS": "运营","grp_INTELLIGENCE": "智能","grp_BUSINESS SYSTEMS": "业务系统","grp_PHYSICAL & FIELD": "物理与现场","grp_SECURITY & TRUST": "安全与信任","grp_PLATFORM": "平台","nav_dashboard": "仪表盘","nav_incidents": "事件管理","nav_tasks": "任务与审批","nav_workflows": "工作流自动化","nav_agents": "自主代理","nav_intelligence": "QI 智能","nav_predictive": "预测性维护","nav_analytics": "分析与报告","nav_qichat": "QI 助手","nav_erp": "ERP 系统","nav_crm": "客户关系管理","nav_hr": "人力资源","nav_finance": "财务","nav_itsm": "IT 服务台","nav_cctv": "视频监控","nav_biometrics": "生物识别与门禁","nav_fieldops": "现场运营","nav_assets": "资产管理","nav_security": "网络安全","nav_compliance": "合规","nav_auditlogs": "审计日志","nav_integrations": "集成","nav_marketplace": "市场","nav_admin": "管理","nav_settings": "设置","Operations Overview": "运营概览","Incident Management": "事件管理","Tasks & Approvals": "任务与审批","Workflow Automation": "工作流自动化","Autonomous Agents": "自主代理","QI Intelligence Layer": "QI 智能层","Predictive Maintenance": "预测性维护","Analytics & Reports": "分析与报告","QI Assistant": "QI 助手","ERP": "ERP 系统","CRM": "客户关系管理","HR & People": "人力资源","Finance": "财务","ITSM Service Desk": "IT 服务台","CCTV & Surveillance": "视频监控","Biometrics & Access Control": "生物识别与门禁控制","Field Operations": "现场运营","Asset Management": "资产管理","Cybersecurity": "网络安全","Compliance": "合规","Audit Logs": "审计日志","Integrations": "集成","Marketplace": "市场","Administration": "管理","Settings": "设置","Search incidents, assets, workflows, people…": "搜索事件、资产、工作流、人员…","+ New": "+ 新建","Global Administrator": "全局管理员","ENTERPRISE INTELLIGENCE PLATFORM": "企业智能平台","Company": "公司","Email": "电子邮件","Password": "密码","Remember me": "记住我","Forgot password?": "忘记密码？","Sign In": "登录","Unified enterprise intelligence, secured end to end": "统一的企业智能，全程安全"}};

P.t=(key)=>{const d=P.i18n[P.lang];return d&&d[key]?d[key]:null;};
P.setLang=(code)=>{
  P.lang=code;
  document.documentElement.setAttribute('dir', code==='ar'?'rtl':'ltr');
  document.documentElement.setAttribute('lang', code);
  document.body.classList.toggle('rtl', code==='ar');
  const set=(id,key)=>{const el=document.getElementById(id); if(el) el.textContent=P.t(key)||el.textContent;};
  set('tEipTag','ENTERPRISE INTELLIGENCE PLATFORM');
  set('lblCo','Company'); set('lblEm','Email'); set('lblPw','Password');
  set('lblRemember','Remember me'); set('lblForgot','Forgot password?');
  set('btnSignIn','Sign In'); set('lblTagline','Unified enterprise intelligence, secured end to end');
  const gs=document.getElementById('gsearch'); if(gs) gs.placeholder=P.t('Search incidents, assets, workflows, people…')||gs.placeholder;
  document.querySelectorAll('#langSel,#langSelLogin').forEach(el=>{if(el) el.value=code;});
  if(document.getElementById('nav').innerHTML) P.renderNav();
  if(P.cur && document.getElementById('view')) P.go(P.cur);
  P.notify(({en:'Language updated',ar:'تم تحديث اللغة',fr:'Langue mise à jour',es:'Idioma actualizado',zh:'语言已更新'})[code]);
};

P.stPill=s=>{const m={Open:'p-crit',Investigating:'p-warn',Contained:'p-info',Resolved:'p-ok',
  'Auto-Resolved':'p-ok',Scheduled:'p-info',Active:'p-ok',Draft:'p-mut',Paused:'p-warn',
  Connected:'p-ok',Degraded:'p-warn',Available:'p-mut',Operational:'p-ok',Alert:'p-crit',
  'In Progress':'p-warn','On Assignment':'p-info',Onboarding:'p-info','Pending IT':'p-warn',
  'En route':'p-warn','On site':'p-info',Complete:'p-ok',
  Offboarded:'p-mut'};return m[s]||'p-mut'};

P.renderNav=()=>{
  document.getElementById('nav').innerHTML=P.nav.map(g=>
    `<div class="ngrp">${P.t('grp_'+g.g)||g.g}</div>`+g.items.map(i=>
      `<div class="nav${i.id===P.cur?' on':''}" onclick="P.go('${i.id}')" title="${P.t('nav_'+i.id)||i.l}">
        <span class="ic">${i.ic}</span><span class="navlabel">${P.t('nav_'+i.id)||i.l}</span>${i.b?`<span class="bdg">${i.b}</span>`:''}
      </div>`).join('')).join('');
};
P.go=(id)=>{P.cur=id;P.renderNav();const v=document.getElementById('view');
  v.innerHTML=(P.views[id]||P.views.dashboard)();v.scrollTop=0;};
P.tabState={};
P.tab=(viewId,idx)=>{P.tabState[viewId]=idx;P.go(viewId);};
P.tabRow=(viewId,labels)=>{const active=P.tabState[viewId]||0;
  return `<div class="tabs" style="margin-top:18px">${labels.map((l,i)=>
    `<div class="tab${i===active?' on':''}" onclick="P.tab('${viewId}',${i})">${l}</div>`).join('')}</div>`;};
P.toggleSidebar=()=>{
  const side=document.getElementById('side');
  side.classList.toggle('collapsed');
  const btn=document.querySelector('.sidetoggle');
  btn.textContent=side.classList.contains('collapsed')?'▶':'◀';
};
P.head=(t,s)=>`<div class="ph"><h1>${P.t(t)||t}</h1><p>${P.t(s)||s}</p></div>`;
P.kpi=(l,v,s,cls='')=>`<div class="card kpi ${cls}"><div class="lab">${l}</div>
  <div class="val">${v}</div><div class="sub">${s}</div></div>`;
P.tbl=(cols,rows)=>`<div class="card" style="padding:0;overflow:hidden"><table>
  <thead><tr>${cols.map(c=>`<th>${c}</th>`).join('')}</tr></thead>
  <tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
P.tblClick=(cols,rows,onclicks)=>`<div class="card" style="padding:0;overflow:hidden"><table>
  <thead><tr>${cols.map(c=>`<th>${c}</th>`).join('')}</tr></thead>
  <tbody>${rows.map((r,i)=>`<tr class="clkrow" onclick="${onclicks[i]}">${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

P.openNew=()=>P.modal("Create New",`
  <div class="fld"><label>Type</label><select id="nType">
    <option>Incident</option><option>Workflow</option><option>Service Request</option>
    <option>Task / Approval</option><option>Asset</option><option>Employee Record</option>
  </select></div>
  <div class="fld"><label>Title</label><input id="nTitle" placeholder="Short description"></div>
  <div class="fld"><label>Department</label><select><option>IT Operations</option><option>Security</option>
    <option>Finance</option><option>HR</option><option>Manufacturing</option><option>Field Ops</option></select></div>
  <div class="fld"><label>Priority</label><select><option>Critical</option><option>High</option>
    <option selected>Medium</option><option>Low</option></select></div>
  <div class="fld"><label>Assign to</label><select><option>QI Agent (autonomous)</option>
    <option>M. Alavi</option><option>R. Khan</option><option>S. Idris</option><option>A. Nair</option></select></div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Cancel</button>
    <button class="btn pri" onclick="P.close();P.notify('Created and routed to the assigned owner.')">Create</button>
  </div>`);
P.modal=(title,body)=>{document.getElementById('mbox').innerHTML=
  `<div class="between" style="margin-bottom:14px"><h2 style="font-size:16px">${title}</h2>
   <button class="btn sm" onclick="P.close()">✕</button></div>${body}`;
  document.getElementById('modal').classList.add('on')};
P.close=()=>document.getElementById('modal').classList.remove('on');
P.toggle=(el)=>{el.classList.toggle('on');P.notify(el.classList.contains('on')?'Enabled':'Disabled')};
P.toggleAgent=(el,idx)=>{
  el.classList.toggle('on');
  const agent=P.d.agents[idx];
  agent.on=el.classList.contains('on')?1:0;
  P.notify(agent.n+' '+(agent.on?'enabled':'disabled')+' — state persists across the session.');
};

P.views={};

/* ============ DASHBOARD ============ */
P.views.dashboard=()=>{const d=P.d;return P.head("Operations Overview","Unified, real-time read across every connected system.")+
`<div class="grid g4">
  ${P.kpi("Active Workflows",d.kpi.active,"of "+d.kpi.workflows+" configured","acc")}
  ${P.kpi("Autonomous Actions",d.kpi.agentActions,"executed, last 7 days","acc")}
  ${P.kpi("Open Incidents",'<span class="dn">'+d.kpi.incidents+'</span>',"across all departments")}
  ${P.kpi("Platform Uptime",'<span class="up">'+d.kpi.uptime+'</span>',"trailing 30 days","gold")}
</div>
<div class="grid g4" style="margin-top:12px">
  ${P.kpi("Hours Saved",d.kpi.saved,"vs. manual baseline, YTD","gold")}
  ${P.kpi("Cost Avoided",d.kpi.cost,"prevented downtime + efficiency","gold")}
  ${P.kpi("Risk Posture",'<span class="up">'+d.kpi.risk+'</span>',"zero-trust, 2 items open")}
  ${P.kpi("Compliance","94%","PDPL readiness score","acc")}
</div>
<div class="sec">System Health — All Connected Systems</div>
<div class="grid g4">${d.systems.map(s=>`<div class="hlth">
  <div class="n"><span class="dot d-${s.s==='ok'?'ok':'w'}"></span>${s.n}</div>
  <div class="s ${s.s==='ok'?'up':'wr'}">${s.s==='ok'?'Nominal':'Degraded'} · ${s.l}</div></div>`).join('')}</div>
<div class="split" style="margin-top:18px">
  <div class="card"><div class="between"><b style="font-size:13px">Autonomous Actions — 7 Day Trend</b>
    <span class="pill p-ok">+18% WoW</span></div>
    <div class="chartbox">${[62,78,71,94,86,131,124].map((v,i)=>
      `<div class="cb" style="height:${v/1.4}%"><b>${v}</b><span>${['M','T','W','T','F','S','S'][i]}</span></div>`).join('')}</div>
  </div>
  <div class="card"><b style="font-size:13px">Predictive Alerts</b>
    <div style="margin-top:10px">${d.alerts.map(a=>`<div style="padding:8px 0;border-bottom:1px solid rgba(42,48,80,.5)">
      <div style="font-size:12px;font-weight:600">${a.t}</div>
      <div class="mini">Predicted in ${a.w} · ${a.conf} confidence · <span class="up">${a.act}</span></div></div>`).join('')}</div>
  </div>
</div>
<div class="sec">Recent Incidents</div>
${P.tbl(["ID","Issue","Department","Severity","Status","Handled By","Age"],
  d.incidents.slice(0,5).map(i=>[i.id,i.t,i.d,`<span class="pill ${P.sevPill(i.sev)}">${i.sev}</span>`,
  `<span class="pill ${P.stPill(i.st)}">${i.st}</span>`,i.inv,i.ago]))}`};

/* ============ INCIDENTS ============ */
P.views.incidents=()=>{const all=P.d.incidents;const ti=P.tabState.incidents||0;
  const filters=[x=>true, x=>x.sev==='Critical', x=>x.as==='Bobby Sharon'||x.as==='M. Alavi', x=>x.st==='Auto-Resolved', x=>x.st==='Resolved'||x.st==='Contained'];
  const d=all.filter(filters[ti]);
  return P.head("Incident Management","Track, investigate and resolve incidents raised across every connected system.")+
`<div class="grid g5">
  ${P.kpi("All",all.length,"total this period")}
  ${P.kpi("Open",'<span class="dn">'+all.filter(x=>x.st==='Open').length+'</span>',"awaiting action")}
  ${P.kpi("Investigating",'<span class="wr">'+all.filter(x=>x.st==='Investigating').length+'</span>',"in progress")}
  ${P.kpi("Auto-Resolved",'<span class="up">'+all.filter(x=>x.st==='Auto-Resolved').length+'</span>',"by QI agents","acc")}
  ${P.kpi("MTTR","14m","mean time to resolve","gold")}
</div>
${P.tabRow('incidents',['All Incidents','Critical','Assigned to Me','Auto-Resolved','Closed'])}
${d.length?P.tbl(["ID","Issue","Department","Severity","Status","Investigator","Assignee","Age","Action"],
  d.map(i=>[i.id,i.t,i.d,`<span class="pill ${P.sevPill(i.sev)}">${i.sev}</span>`,
  `<span class="pill ${P.stPill(i.st)}">${i.st}</span>`,i.inv,i.as,i.ago,
  `<button class="btn sm" onclick="P.incDetail('${i.id}')">View</button>`]))
  :'<div class="card mini">No incidents match this filter.</div>'}`};

P.incDetail=(id)=>{const i=P.d.incidents.find(x=>x.id===id);
  P.modal(id+" — "+i.t,`
  <div class="grid g2" style="margin-bottom:14px">
    <div><div class="lab" style="font-size:9.5px;color:var(--muted);letter-spacing:1.1px">SEVERITY</div>
      <div style="margin-top:4px"><span class="pill ${P.sevPill(i.sev)}">${i.sev}</span></div></div>
    <div><div class="lab" style="font-size:9.5px;color:var(--muted);letter-spacing:1.1px">STATUS</div>
      <div style="margin-top:4px"><span class="pill ${P.stPill(i.st)}">${i.st}</span></div></div>
  </div>
  <div class="sec" style="margin-top:0">QI Engine Analysis</div>
  <div class="card" style="background:var(--bg2)">
    <div style="font-size:12.5px;line-height:1.6">The QI Engine correlated this event across <b>4 connected systems</b>
    (${i.d}, ITSM, Monitoring, Asset Registry). Multi-variable analysis identified a pattern consistent with
    <b>3 prior incidents</b> in the last 90 days.</div>
    <div class="mini" style="margin-top:8px">Confidence: 92% · Variables evaluated: 1,847 · Analysis time: 340ms</div>
  </div>
  <div class="sec">Automated Response Chain</div>
  <div class="flow"><span class="fstep">Detected</span><span class="farr">→</span>
    <span class="fstep">Correlated</span><span class="farr">→</span>
    <span class="fstep">Triaged</span><span class="farr">→</span>
    <span class="fstep">Owner Assigned</span><span class="farr">→</span>
    <span class="fstep">${i.st==='Auto-Resolved'?'Auto-Resolved':'Awaiting Action'}</span></div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Close</button>
    <button class="btn" onclick="P.close();P.notify('Escalated to on-call owner.')">Escalate</button>
    <button class="btn pri" onclick="P.close();P.notify('Incident resolved and logged to audit trail.')">Resolve</button>
  </div>`)};

/* ============ TASKS & APPROVALS ============ */
P.views.tasks=()=>{const all=P.d.approvals;const ti=P.tabState.tasks||0;
  const filters=[x=>x.status==='Pending', x=>x.status==='Approved', x=>x.status==='Auto-Approved', x=>x.status==='Delegated'];
  const d=all.filter(filters[ti]);
  return P.head("Tasks & Approvals","Work items and approval requests routed automatically to the right owner.")+
`<div class="grid g4">
  ${P.kpi("My Tasks",all.length+"","assigned to you")}
  ${P.kpi("Pending Approvals",all.filter(x=>x.status==='Pending').length+"","awaiting your decision","gold")}
  ${P.kpi("Auto-Approved","264","cleared by policy this month","acc")}
  ${P.kpi("Avg Turnaround","1.2h","down from 2.3 days manual","acc")}
</div>
${P.tabRow('tasks',['Pending','Approved','Auto-Approved','Delegated'])}
${d.length?P.tbl(["Item","Type","Requester","Value","Policy","Action"],
  d.map((x,i)=>{const realIdx=all.indexOf(x);
    let action;
    if(x.status==='Pending') action=`<button class="btn sm pri" onclick="P.taskApprove(${realIdx})">Approve</button>`;
    else if(x.status==='Delegated') action=`<span class="mini">Routed to ${x.delegate}</span>`;
    else action=`<span class="pill p-ok">${x.status}</span>`;
    return [x.item,x.type,x.requester,x.value,x.policy,action];
  }))
  :'<div class="card mini">No items in this view.</div>'}`};

P.taskApprove=(idx)=>{
  const x=P.d.approvals[idx];
  if(x.type==='Legal'){
    x.status='Delegated'; x.delegate='Second Approver (Legal)';
    P.notify(x.item+' — routed to second approver.');
  } else {
    x.status='Approved';
    P.notify(x.item+' — '+x.approvedMsg);
  }
  P.go('tasks');
};

/* ============ WORKFLOWS ============ */
P.views.workflows=()=>{const w=P.d.workflows;return P.head("Workflow Automation","Orchestration across every connected enterprise system, end to end.")+
`<div class="grid g4">
  ${P.kpi("Configured",w.length,"total workflows")}
  ${P.kpi("Active",w.filter(x=>x.st==='Active').length,"running now","acc")}
  ${P.kpi("Executions","711","last 30 days","acc")}
  ${P.kpi("Success Rate","99.2%","across all runs","gold")}
</div>
<div class="between" style="margin:18px 0 9px">
  <div class="sec" style="margin:0">All Workflows</div>
  <button class="btn pri" onclick="P.wfBuilder()">+ Build Workflow</button>
</div>
${P.tbl(["Workflow","Trigger","Systems Orchestrated","Status","Runs","Avg Time","Action"],
  w.map(x=>[`<b>${x.n}</b>`,x.tr,`<span class="mini">${x.sys}</span>`,
  `<span class="pill ${P.stPill(x.st)}">${x.st}</span>`,x.runs,x.t,
  `<button class="btn sm" onclick="P.wfDetail('${P.esc(x.n)}')">Open</button>`]))}`};

P.wfDetail=(n)=>{const w=P.d.workflows.find(x=>x.n===n);
  P.modal(w.n,`<div class="mini" style="margin-bottom:12px">Trigger: <b>${w.tr}</b> · ${w.runs} executions · avg ${w.t}</div>
  <div class="sec" style="margin-top:0">Orchestration Path</div>
  <div class="flow">${w.sys.split(' → ').map((s,i,a)=>
    `<span class="fstep">${s}</span>${i<a.length-1?'<span class="farr">→</span>':''}`).join('')}</div>
  <div class="sec">Execution Steps</div>
  <div class="log">
    <div><span class="t">[step 1]</span> <span class="i">Trigger condition evaluated → matched</span></div>
    <div><span class="t">[step 2]</span> <span class="i">Records fetched from source system</span></div>
    <div><span class="t">[step 3]</span> <span class="i">QI Engine validates against policy rules</span></div>
    <div><span class="t">[step 4]</span> <span class="i">Downstream systems updated in sequence</span></div>
    <div><span class="t">[step 5]</span> <span class="i">Notifications dispatched to stakeholders</span></div>
    <div><span class="t">[step 6]</span> <span class="i">Result written to audit log</span></div>
  </div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Close</button>
    <button class="btn" onclick="P.close();P.notify('Workflow paused.')">Pause</button>
    <button class="btn pri" onclick="P.close();P.notify('Test run completed successfully in ${w.t}.')">Run Test</button>
  </div>`)};

P.wfBuilder=()=>P.modal("Workflow Builder",`
  <div class="fld"><label>Workflow name</label><input placeholder="e.g. Contractor Access Provisioning"></div>
  <div class="fld"><label>Trigger</label><select>
    <option>Record created in system</option><option>Threshold breach detected</option>
    <option>Scheduled (recurring)</option><option>Manual trigger</option><option>Predictive alert raised</option>
  </select></div>
  <div class="fld"><label>Source system</label><select><option>HR Core</option><option>ERP</option>
    <option>CRM</option><option>ITSM</option><option>Monitoring</option><option>Biometrics</option></select></div>
  <div class="fld"><label>Target systems (orchestrated in order)</label>
    <textarea rows="3" placeholder="ERP → ITSM → Biometrics → Notification"></textarea></div>
  <div class="fld"><label>Autonomy level</label><select>
    <option>Fully autonomous — no human step</option>
    <option>Human-in-the-loop — confirm before execute</option>
    <option>Notify only — no action taken</option></select></div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Cancel</button>
    <button class="btn pri" onclick="P.close();P.notify('Workflow saved as draft and ready for testing.')">Save Workflow</button>
  </div>`);

/* ============ AUTONOMOUS AGENTS ============ */
P.views.agents=()=>{const a=P.d.agents;return P.head("Autonomous Agents","Five agents act on system conditions, thresholds and predictive insight — no human step required for routine operations.")+
`<div class="grid g4">
  ${P.kpi("Agents Deployed","5","4 active, 1 paused")}
  ${P.kpi("Actions Executed","847","last 7 days","acc")}
  ${P.kpi("Success Rate","99.2%","across all agents","gold")}
  ${P.kpi("Human Steps Removed","1,284h","time returned to the business","acc")}
</div>
<div class="sec">Agent Fleet</div>
${a.map((x,i)=>`<div class="ag">
  <div class="agi" style="background:${x.c}22;color:${x.c};border:1px solid ${x.c}55">${x.ic}</div>
  <div style="flex:1">
    <div class="between"><b style="font-size:13.5px">${x.n}</b>
      <div class="row"><span class="mini">${x.runs} runs · ${x.ok} success</span>
      <div class="tog${x.on?' on':''}" onclick="P.toggleAgent(this,${i})"><i></i></div></div></div>
    <div style="font-size:12px;color:var(--ice);margin-top:4px">${x.d}</div>
    <div class="bar"><i style="width:${x.ok}"></i></div>
  </div></div>`).join('')}
<div class="sec">Live Agent Activity</div>
<div class="log">
  <div><span class="t">14:32:07</span> <span class="i">[Auto-Alerting] Anomaly detected — payment gateway latency 3.2σ above baseline</span></div>
  <div><span class="t">14:32:08</span> <span class="i">[Auto-Escalation] INC-1042 created, routed to Finance on-call (M. Alavi)</span></div>
  <div><span class="t">14:31:44</span> <span class="i">[Auto-Approval] PO-4471 ($8,400) cleared — under $10K policy threshold</span></div>
  <div><span class="t">14:29:12</span> <span class="w">[Auto-Optimization] Paused — awaiting admin re-enable</span></div>
  <div><span class="t">14:28:55</span> <span class="i">[Auto-Reporting] Monthly PDPL evidence pack generated and distributed</span></div>
  <div><span class="t">14:26:03</span> <span class="i">[Auto-Alerting] Biometric reader Gate 3 — error rate rising, field tech dispatched</span></div>
  <div><span class="t">14:22:31</span> <span class="i">[Auto-Escalation] INC-1041 escalated to Critical — bearing temp threshold breached</span></div>
  <div><span class="t">14:18:09</span> <span class="i">[Auto-Approval] Leave request auto-cleared — within entitlement</span></div>
</div>`};

/* ============ QI INTELLIGENCE ============ */
P.views.intelligence=()=>P.head("QI Intelligence Layer","The quantum-inspired reasoning surface — multi-variable analysis behind every prediction and recommendation.")+
`<div class="grid g4">
  ${P.kpi("Variables Evaluated","1.8M","per analysis cycle","acc")}
  ${P.kpi("Predictions Made","312","last 30 days","acc")}
  ${P.kpi("Prediction Accuracy","91.4%","validated against outcomes","gold")}
  ${P.kpi("Avg Analysis Time","340ms","across connected systems")}
</div>
<div class="sec">Connected Data Sources — This Is How It Detects Things</div>
<div class="mini" style="margin-bottom:9px">Every module below streams events into the correlation engine continuously. Nothing is inferred without a connected source — click any source to see a sample of what it actually sends.</div>
<div class="grid g4">${P.d.sources.map(s=>`<div class="card" style="padding:10px;cursor:pointer" onclick="P.showSourceSample('${P.esc(s.sys)}')">
  <div class="row" style="gap:7px"><span style="font-size:15px">${s.ic}</span><b style="font-size:11.5px">${P.esc(s.sys)}</b>
    <span class="dot d-ok" style="margin-left:auto"></span></div>
  <div class="mini" style="margin-top:5px">${P.esc(s.feeds)}</div></div>`).join('')}</div>

<div class="split" style="margin-top:18px">
  <div class="card"><b style="font-size:13px">Reasoning Depth — QI vs Conventional AI</b>
    <div style="margin-top:14px">
      ${[["Variables per decision","1,847","12"],["Systems correlated","12","1"],
         ["Predictive horizon","72h","0h (reactive)"],["Autonomous action","Yes","No"]].map(r=>
      `<div style="padding:9px 0;border-bottom:1px solid rgba(42,48,80,.5)">
        <div class="between"><span style="font-size:12px">${r[0]}</span>
        <span><b class="up">${r[1]}</b> <span class="mini">vs ${r[2]}</span></span></div></div>`).join('')}
    </div></div>
  <div class="card"><b style="font-size:13px">Active Predictions</b>
    <div style="margin-top:10px">${P.d.alerts.map(a=>`<div style="padding:9px 0;border-bottom:1px solid rgba(42,48,80,.5)">
      <div style="font-size:12px;font-weight:600">${a.t}</div>
      <div class="mini">Window: ${a.w} · Confidence: ${a.conf}</div>
      <div class="bar"><i style="width:${a.conf}"></i></div></div>`).join('')}</div></div>
</div>
<div class="sec">Live Correlation Stream — Real Events From Connected Sources</div>
<div class="log" id="intelEventLog">${P.d.events.map(ev=>
  `<div><span class="t">[${ev.t}]</span> <span class="i">[${P.esc(ev.sys)}]</span> ${P.esc(ev.e)}</div>`).join('')}</div>
<div class="sec">How a Decision Is Reached</div>
<div class="card"><div class="flow">
  <span class="fstep">12 sources stream events</span><span class="farr">→</span>
  <span class="fstep">Correlate across systems</span><span class="farr">→</span>
  <span class="fstep">Multi-variable optimization</span><span class="farr">→</span>
  <span class="fstep">Confidence scoring</span><span class="farr">→</span>
  <span class="fstep">Autonomous action</span></div>
  <div class="mini" style="margin-top:10px">Optimization techniques conceptually rooted in quantum computing, evaluating far more
  variables simultaneously than rule-based AI — running on standard cloud infrastructure, no quantum hardware required.</div>
</div>`;

P.showSourceSample=(sys)=>{
  const samples={
    HR:["Employee record created — Fatima Al Zaabi, Procurement Analyst","Role change detected — J. Smith moved to Finance dept","Org structure sync — 1 new reporting line"],
    ITSM:["Ticket SR-8821 SLA timer at 80%","3 tickets auto-resolved in last hour","Provisioning request PR-1002 opened"],
    Biometrics:["Gate 3 read error rate: 4.2% (threshold 3%)","142 successful reads, HQ Main Entrance, last hour","0 denied attempts, Sharjah Plant"],
    CCTV:["Loading Bay: vehicle dwell 34min (threshold 30min)","Motion event, Perimeter North, 03:12 — cleared, authorized"],
    ERP:["PO-4470 pending approval 2 days","Inventory: Warehouse A at 84% capacity"],
    Finance:["TXN-9909 spend velocity 2.1σ above baseline","94% of transactions auto-reconciled today"],
    "Field Ops":["JOB-2214 dispatched automatically — 26 min ago","Technician O. Farouk en route, ETA 14 min"],
    Security:["Login anomaly, WS-042 — cross-checked against travel calendar","1,842 blocked attempts, last 24h"],
    Assets:["AST-0415 warranty expires in 18 days","Bearing temp sensor, Line 4: +14°C trend"],
    Integrations:["Salesforce sync: 1m ago, healthy","Suprema BioStar: degraded, 31m since last sync"],
    Workflows:["Employee Onboarding executed in 4m — 0 manual steps","Predictive Maintenance workflow triggered by sensor event"],
    CRM:["Sharjah Retail Group health score dropped 12 pts","5 open tickets on at-risk account"],
  };
  const lines=(samples[sys]||["No sample events available for this source."]);
  P.modal(sys+" — Sample Events Feeding the Correlation Engine",`
  <div class="log">${lines.map(l=>`<div><span class="i">•</span> ${P.esc(l)}</div>`).join('')}</div>
  <div class="mini" style="margin-top:10px">This is a live excerpt of what ${P.esc(sys)} actually publishes. The QI Engine ingests these continuously — predictions never appear without a traceable source event.</div>
  <div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn" onclick="P.close()">Close</button></div>`);
};


/* ============ PREDICTIVE MAINTENANCE ============ */
P.views.predictive=()=>P.head("Predictive Maintenance","Forecast failures before they occur, across physical assets and digital infrastructure.")+
`<div class="grid g4">
  ${P.kpi("Assets Monitored","412","sensors + telemetry")}
  ${P.kpi("Failures Prevented","23","YTD","acc")}
  ${P.kpi("Downtime Avoided","148h","est. cost $412K","gold")}
  ${P.kpi("Avg Lead Time","68h","before predicted failure","acc")}
</div>
<div class="sec">Assets at Risk</div>
${P.tbl(["Asset","Location","Signal","Predicted Failure","Confidence","Action Taken"],[
  ["Conveyor Motor L4","Line 4 — Sharjah","Bearing temp +14°C trend","~72 hours","94%",
   '<span class="pill p-ok">Maintenance scheduled</span>'],
  ["Storage Node 7","DC-Dubai","Capacity 91% and climbing","~6 days","88%",
   '<span class="pill p-ok">Auto-cleanup queued</span>'],
  ["BioEntry Gate 3","HQ Entrance","Read error rate 4.2%","~48 hours","91%",
   '<span class="pill p-ok">Field tech dispatched</span>'],
  ["UPS Battery Bank 2","DC-Dubai","Discharge curve degrading","~3 weeks","79%",
   '<span class="pill p-warn">Replacement quoted</span>'],
  ["HVAC Compressor 1","Sharjah Plant","Vibration signature shift","~5 days","86%",
   '<span class="pill p-ok">Inspection booked</span>'],
])}
<div class="sec">Prevented Failures — Rolling 6 Months</div>
<div class="card"><div class="chartbox">${[2,4,3,5,4,5].map((v,i)=>
  `<div class="cb" style="height:${v*18}%"><b>${v}</b><span>${['Feb','Mar','Apr','May','Jun','Jul'][i]}</span></div>`).join('')}</div></div>`;

/* ============ ANALYTICS ============ */
P.views.analytics=()=>P.head("Analytics & Reports","Enterprise-wide operational intelligence, generated and distributed automatically.")+
`<div class="grid g4">
  ${P.kpi("Reports Automated","24","running on schedule","acc")}
  ${P.kpi("Manual Hours Saved","96h","per month","gold")}
  ${P.kpi("Data Sources","12","systems feeding analytics")}
  ${P.kpi("Refresh Latency","<60s","near real-time","acc")}
</div>
<div class="split" style="margin-top:18px">
  <div class="card"><b style="font-size:13px">Incident Volume by Department</b>
    <div class="chartbox">${[["IT Ops",18],["Security",12],["Finance",7],["Mfg",14],["HR",4],["Field",9]].map(r=>
      `<div class="cb" style="height:${r[1]*5}%"><b>${r[1]}</b><span>${r[0]}</span></div>`).join('')}</div></div>
  <div class="card"><b style="font-size:13px">Automation Coverage by Function</b>
    <div style="margin-top:12px">${[["IT Operations",92],["Security",84],["HR",71],["Finance",66],
      ["Field Operations",58],["Procurement",47]].map(r=>
      `<div style="margin-bottom:9px"><div class="between"><span style="font-size:12px">${r[0]}</span>
       <b style="font-size:12px">${r[1]}%</b></div><div class="bar"><i style="width:${r[1]}%"></i></div></div>`).join('')}</div></div>
</div>
<div class="sec">Scheduled Reports</div>
${P.tbl(["Report","Frequency","Recipients","Last Run","Format","Status"],[
  ["Executive Operations Summary","Weekly","Leadership (6)","2h ago","PDF",'<span class="pill p-ok">Delivered</span>'],
  ["PDPL Compliance Evidence Pack","Monthly","Compliance, Legal","3d ago","PDF + CSV",'<span class="pill p-ok">Delivered</span>'],
  ["Incident & SLA Performance","Weekly","IT Ops, Service Desk","2h ago","Dashboard",'<span class="pill p-ok">Delivered</span>'],
  ["Asset Health & Depreciation","Monthly","Finance, Facilities","3d ago","XLSX",'<span class="pill p-ok">Delivered</span>'],
  ["Security Posture Review","Daily","Security team","6h ago","PDF",'<span class="pill p-ok">Delivered</span>'],
  ["Cost Optimization Opportunities","Quarterly","CFO, IT Director","—","PDF",'<span class="pill p-info">Scheduled</span>'],
])}`;

/* ============ QI CHAT ============ */
P.views.qichat=()=>`${P.head("QI Assistant","Ask the platform anything about your operations — it reasons across every connected system.")}
<div class="chat">
  <div class="msgs" id="msgs">
    <div class="msg a"><div class="who">QI ASSISTANT</div><div class="bub">
      Good afternoon, Bobby. I'm monitoring <b>12 connected systems</b> across your organization.
      Right now there are <b>4 open incidents</b>, <b>2 of them critical</b>, and I've executed
      <b>847 autonomous actions</b> in the last 7 days.<br><br>
      One thing worth your attention: the bearing temperature on <b>Line 4</b> is trending toward failure
      within roughly 72 hours. I've already scheduled maintenance and notified R. Khan.
    </div></div>
  </div>
  <div class="sugg">
    <span onclick="P.ask('What is driving the payment gateway latency?')">What's driving the gateway latency?</span>
    <span onclick="P.ask('Show me compliance gaps before the 2027 deadline')">Compliance gaps before 2027?</span>
    <span onclick="P.ask('Which assets are at risk this month?')">Assets at risk this month?</span>
    <span onclick="P.ask('How much time have agents saved us?')">Time saved by agents?</span>
  </div>
  <div class="cin"><input id="cq" placeholder="Ask about incidents, assets, compliance, workflows…"
    onkeydown="if(event.key==='Enter')P.ask(this.value)">
    <button class="btn pri" onclick="P.ask(document.getElementById('cq').value)">Send</button></div>
</div>`;

P.ans={
 "latency":"I correlated the payment gateway latency across <b>4 systems</b>. Root cause: connection pool exhaustion on the Finance middleware node, triggered by a 3.1× spike in batch reconciliation jobs scheduled at 14:00.<br><br>I've already: raised INC-1042, routed it to M. Alavi, and throttled the batch queue to restore headroom. <b>Recommended fix:</b> stagger the reconciliation window — I can automate that if you approve.",
 "compliance":"Your PDPL readiness score is <b>94%</b>. Three gaps remain before the January 2027 deadline:<br><br><b>1.</b> Data retention policy not yet enforced on 2 legacy systems<br><b>2.</b> Third-party processor agreements pending for 4 vendors<br><b>3.</b> Subject access request workflow untested at volume<br><br>All three are tracked. At current pace, you'll close them by Q2 — well ahead of the deadline.",
 "asset":"<b>5 assets</b> are showing risk signals this month:<br><br>• <b>Conveyor Motor L4</b> — bearing temp, ~72h, 94% confidence<br>• <b>BioEntry Gate 3</b> — read errors, ~48h, 91%<br>• <b>HVAC Compressor 1</b> — vibration shift, ~5d, 86%<br>• <b>Storage Node 7</b> — capacity, ~6d, 88%<br>• <b>UPS Battery Bank 2</b> — discharge curve, ~3wk, 79%<br><br>Maintenance is already scheduled on the top three.",
 "time":"Autonomous agents have returned <b>1,284 hours</b> to the business year to date — roughly <b>0.7 full-time equivalents</b>.<br><br>Breakdown: Auto-Approval 412h, Auto-Alerting 338h, Auto-Escalation 246h, Auto-Reporting 188h, Auto-Optimization 100h.<br><br>Estimated cost avoided including prevented downtime: <b>$412K</b>.",
 "default":"I've analyzed that across your connected systems. Based on current telemetry from <b>12 integrated sources</b>, operations are within normal parameters aside from the 4 open incidents already flagged.<br><br>Would you like me to run a deeper analysis on a specific system, department, or time window?"
};
P.ask=(q)=>{q=(q||'').trim();if(!q)return;
  const m=document.getElementById('msgs');
  m.innerHTML+=`<div class="msg u"><div class="bub">${P.esc(q)}</div></div>`;
  document.getElementById('cq').value='';m.scrollTop=m.scrollHeight;
  const k=q.toLowerCase();
  let a=P.ans.default;
  if(/laten|gateway|payment/.test(k))a=P.ans.latency;
  else if(/complian|pdpl|regulat|audit/.test(k))a=P.ans.compliance;
  else if(/asset|risk|fail|maint/.test(k))a=P.ans.asset;
  else if(/time|save|hour|roi|cost/.test(k))a=P.ans.time;
  setTimeout(()=>{m.innerHTML+=`<div class="msg a"><div class="who">QI ASSISTANT</div><div class="bub">${a}</div></div>`;
    m.scrollTop=m.scrollHeight;},480)};

/* ============ ERP ============ */
P.views.erp=()=>{const ti=P.tabState.erp||0;
  return P.head("ERP","Enterprise resource planning — unified with every other connected system.")+
`<div class="grid g4">
  ${P.kpi("Open POs","47","$284K committed")}
  ${P.kpi("Inventory Value","$1.84M","across 3 warehouses","acc")}
  ${P.kpi("Pending GRN","12","awaiting receipt")}
  ${P.kpi("Auto-Posted","89%","no manual entry","gold")}
</div>
${P.tabRow('erp',['Purchase Orders','Inventory','Suppliers','Production'])}
${[P.erpPOs, P.erpInventory, P.erpSuppliers, P.erpProduction][ti]()}`};

P.erpPOs=()=>P.tbl(["PO","Supplier","Items","Value","Status","Approval"],[
  ["PO-4471","Gulf Tech Distribution","Server rack + rails","$8,400",'<span class="pill p-ok">Approved</span>','<span class="mini">Auto — under $10K</span>'],
  ["PO-4470","Emirates Networks","FortiGate licenses","$14,200",'<span class="pill p-warn">Pending</span>','<span class="mini">Awaiting M. Alavi</span>'],
  ["PO-4469","Sharjah Industrial","Bearing assembly ×4","$2,100",'<span class="pill p-ok">Approved</span>','<span class="mini">Auto — maintenance</span>'],
  ["PO-4468","Cloud Reseller ME","Azure credits Q3","$32,000",'<span class="pill p-info">Two-party</span>','<span class="mini">1 of 2 signed</span>'],
  ["PO-4467","Office Supplies Co","Consumables","$640",'<span class="pill p-ok">Received</span>','<span class="mini">Auto</span>'],
]);
P.erpInventory=()=>P.tbl(["SKU","Item","Warehouse","On Hand","Reorder Point","Status"],[
  ["SKU-1102","Server rack (42U)","Dubai DC","14","5",'<span class="pill p-ok">Healthy</span>'],
  ["SKU-2245","FortiGate 100F license","Central IT Store","3","5",'<span class="pill p-warn">Below reorder</span>'],
  ["SKU-3390","Bearing assembly (Line 4 spec)","Sharjah Plant","22","10",'<span class="pill p-ok">Healthy</span>'],
  ["SKU-4471","Biometric reader (Suprema)","Central IT Store","6","4",'<span class="pill p-ok">Healthy</span>'],
  ["SKU-5502","Network cable (Cat6, 305m)","Dubai DC","2","8",'<span class="pill p-crit">Critical low</span>'],
]);
P.erpSuppliers=()=>P.tbl(["Supplier","Category","Open POs","On-Time Rate","Rating"],[
  ["Gulf Tech Distribution","IT Hardware","3","96%",'<span class="pill p-ok">Preferred</span>'],
  ["Emirates Networks","Security/Networking","1","91%",'<span class="pill p-ok">Preferred</span>'],
  ["Sharjah Industrial","Industrial Parts","2","88%",'<span class="pill p-info">Standard</span>'],
  ["Cloud Reseller ME","Cloud Services","1","100%",'<span class="pill p-ok">Preferred</span>'],
  ["Office Supplies Co","General","1","82%",'<span class="pill p-info">Standard</span>'],
]);
P.erpProduction=()=>P.tbl(["Line","Product","Target Today","Actual","Efficiency"],[
  ["Line 1","Component A","1,200","1,180",'<span class="pill p-ok">98%</span>'],
  ["Line 2","Component B","900","905",'<span class="pill p-ok">101%</span>'],
  ["Line 3","Assembly C","640","612",'<span class="pill p-warn">96%</span>'],
  ["Line 4","Assembly D","800","560",'<span class="pill p-crit">70% — bearing alert active</span>'],
]);

/* ============ CRM ============ */
P.views.crm=()=>P.head("CRM","Customer relationships, pipeline and service history — connected to operations.")+
`<div class="grid g4">
  ${P.kpi("Active Accounts","148","across UAE + GCC")}
  ${P.kpi("Open Pipeline","$2.4M","32 opportunities","gold")}
  ${P.kpi("Avg CSAT","4.6","of 5.0","acc")}
  ${P.kpi("At-Risk Accounts","3","flagged by QI Engine")}
</div>
<div class="sec">Accounts — click a row for full account detail</div>
${P.tblClick(["Account","Segment","ACV","Health","Open Tickets","Owner"],
  P.d.crmAccounts.map(x=>[x.n,x.seg,x.acv,`<span class="pill ${x.health==='Healthy'?'p-ok':'p-warn'}">${x.health}</span>`,x.tix,x.owner]),
  P.d.crmAccounts.map((x,i)=>`P.crmDetail(${i})`))}`;

P.crmDetail=(idx)=>{
  const x=P.d.crmAccounts[idx];
  P.modal(x.n,`
  <div class="grid g3" style="margin-bottom:14px">
    <div class="card kpi"><div class="lab">Annual Value</div><div class="val" style="font-size:18px">${x.acv}</div></div>
    <div class="card kpi"><div class="lab">Health Score</div><div class="val ${x.health==='Healthy'?'up':'wr'}" style="font-size:18px">${x.health}</div></div>
    <div class="card kpi"><div class="lab">Open Tickets</div><div class="val" style="font-size:18px">${x.tix}</div></div>
  </div>
  <div class="mini" style="margin-bottom:6px">SEGMENT · OWNER</div>
  <div style="font-size:13px;margin-bottom:14px">${x.seg} — owned by <b>${x.owner}</b></div>
  <div class="mini" style="margin-bottom:6px">RECENT ACTIVITY</div>
  <div class="log" style="margin-bottom:14px">${x.activity.map(a=>`<div>${P.esc(a)}</div>`).join('')}</div>
  <div class="mini" style="margin-bottom:6px">OPEN TICKETS — click to view</div>
  ${x.openTix.length?x.openTix.map((t,ti)=>`<div class="fitem" style="cursor:pointer" onclick="P.crmTicketDetail(${idx},${ti})">
    <div class="fic">◍</div><div style="flex:1"><div style="font-size:12.5px;font-weight:600">${P.esc(t.t)}</div>
    <div class="mini">${t.age}</div></div><span class="pill ${P.sevPill(t.p)}">${t.p}</span></div>`).join('')
    :'<div class="mini">No open tickets.</div>'}
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Close</button>
    <button class="btn pri" onclick="P.crmLogActivity(${idx})">Log Activity</button>
  </div>`);
};
P.crmTicketDetail=(accIdx,tixIdx)=>{
  const acc=P.d.crmAccounts[accIdx]; const t=acc.openTix[tixIdx];
  P.modal(t.t,`
  <div class="fld"><label>Account</label><div style="font-size:13px">${P.esc(acc.n)}</div></div>
  <div class="fld"><label>Priority</label><span class="pill ${P.sevPill(t.p)}">${t.p}</span></div>
  <div class="fld"><label>Age</label><div style="font-size:13px">${t.age}</div></div>
  <div class="fld"><label>Details</label><div style="font-size:12.5px;color:var(--ice)">${P.esc(t.detail)}</div></div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.crmDetail(${accIdx})">← Back to Account</button>
    <button class="btn pri" onclick="P.close();P.notify('${P.esc(t.t)} marked resolved and logged.')">Resolve</button>
  </div>`);
};
P.crmLogActivity=(idx)=>{
  const acc=P.d.crmAccounts[idx];
  acc.activity.unshift(new Date().toTimeString().slice(0,5)+' — Note added by Bobby Sharon');
  P.close();
  P.notify('Activity logged for '+acc.n+'.');
};

/* ============ HR ============ */
P.views.hr=()=>{const e=P.d.emps;const onboardingCount=e.filter(x=>x.st==='Onboarding'||x.st==='Pending IT').length;
  return P.head("HR & People","Employee lifecycle — fully orchestrated with IT, access and payroll systems.")+
`<div class="grid g4">
  ${P.kpi("Headcount",e.filter(x=>x.st!=='Offboarded').length+"","across 6 departments")}
  ${P.kpi("Onboarding",onboardingCount+"","in progress","acc")}
  ${P.kpi("Open Requests",(3+P.d.provisioning.filter(x=>x.st==='Pending').length)+"","leave, overtime, access, IT")}
  ${P.kpi("Onboarding Time","4 min","automated, was 3 days","gold")}
</div>
<div class="between" style="margin:18px 0 9px">
  <div class="sec" style="margin:0">Employee Onboarding — Automated Chain</div>
  <button class="btn pri" onclick="P.hrAddEmployee()">+ Add Employee</button>
</div>
<div class="card"><div class="flow">
  <span class="fstep">HR record created</span><span class="farr">→</span>
  <span class="fstep">Request sent to IT</span><span class="farr">→</span>
  <span class="fstep">IT decision: new vs. transfer</span><span class="farr">→</span>
  <span class="fstep">Accounts provisioned</span><span class="farr">→</span>
  <span class="fstep">Access granted</span><span class="farr">→</span>
  <span class="fstep">Team notified</span></div>
  <div class="mini" style="margin-top:9px">HR only enters who's joining and why. IT decides fresh provisioning vs. transferring an existing employee's systems — SmartFix.AI routes it automatically either way.</div></div>

${P.d.provisioning.length?`<div class="sec">Pending IT Handoffs — Sent From This Screen</div>
${P.tbl(["Request","Type","Detail","Status","Action"],
  P.d.provisioning.map(x=>[x.name,
    x.type==='new'?'<span class="pill p-info">New Hire</span>':'<span class="pill p-warn">Replacement</span>',
    x.type==='new'?'Fresh provisioning — new role':('Transfer from '+x.replacingName),
    `<span class="pill ${x.st==='Pending'?'p-warn':'p-ok'}">${x.st==='Pending'?'Awaiting IT':'Resolved by IT'}</span>`,
    x.st==='Pending'?'<span class="mini">Go to ITSM Service Desk</span>':'<span class="mini up">Complete</span>']))}` : ''}

<div class="sec">Directory</div>
${P.tbl(["Name","Role","Department","Location","Status","Systems Provisioned"],
  e.map(x=>[`<b>${P.esc(x.n)}</b>`,x.r,x.d,x.loc,`<span class="pill ${P.stPill(x.st)}">${x.st}</span>`,
  x.st==='Active'?'<span class="mini up">6 of 6 · complete</span>':
  x.st==='Pending IT'?'<span class="mini wr">Awaiting IT decision</span>':
  x.st==='Offboarded'?'<span class="mini">Transferred out</span>':
  '<span class="mini">4 of 6 · in progress</span>']))}`};

P.hrAddEmployee=()=>{
  const activeEmps=P.d.emps.filter(x=>x.st!=='Offboarded');
  P.modal("Add Employee — Notify IT",`
  <div class="fld"><label>Full name</label><input id="heName" placeholder="e.g. Fatima Al Zaabi"></div>
  <div class="fld"><label>Role / title</label><input id="heRole" placeholder="e.g. Procurement Analyst"></div>
  <div class="fld"><label>Department</label><select id="heDept">
    <option>IT Ops</option><option>Finance</option><option>Security</option><option>HR</option>
    <option>Field Ops</option><option>Manufacturing</option><option>Intelligence</option></select></div>
  <div class="fld"><label>Location</label><select id="heLoc">
    <option>Dubai</option><option>Sharjah</option><option>Abu Dhabi</option><option>Al Ain</option></select></div>
  <div class="fld"><label>Is this a new role, or a replacement for an existing employee?</label>
    <select id="heType" onchange="P.hrToggleReplacement()">
      <option value="new">New hire — new role, needs fresh provisioning</option>
      <option value="replace">Replacement — taking over an existing employee's role</option>
    </select></div>
  <div class="fld" id="heReplaceFld" style="display:none">
    <label>Which employee are they replacing?</label>
    <select id="heReplacing">${activeEmps.map(x=>`<option value="${x.id}">${P.esc(x.n)} — ${P.esc(x.r)}</option>`).join('')}</select>
    <div class="mini" style="margin-top:6px">IT will transfer this person's systems, access and data to the new employee instead of provisioning from scratch.</div>
  </div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Cancel</button>
    <button class="btn pri" onclick="P.hrSubmitEmployee()">Send to IT</button>
  </div>`);
};
P.hrToggleReplacement=()=>{
  const t=document.getElementById('heType').value;
  document.getElementById('heReplaceFld').style.display=(t==='replace')?'block':'none';
};
P.hrSubmitEmployee=()=>{
  const name=(document.getElementById('heName').value||'').trim();
  const role=(document.getElementById('heRole').value||'').trim();
  if(!name||!role){P.notify('Name and role are required.');return;}
  const dept=document.getElementById('heDept').value;
  const loc=document.getElementById('heLoc').value;
  const type=document.getElementById('heType').value;
  const newId=Math.max(...P.d.emps.map(x=>x.id))+1;
  const rec={id:newId,n:name,r:role,d:dept,st:'Pending IT',loc:loc};
  P.d.emps.unshift(rec);

  const preq={id:'PR-'+(1000+P.d.provisioning.length+1),name:name,role:role,dept:dept,type:type,st:'Pending',empId:newId};
  if(type==='replace'){
    const repId=+document.getElementById('heReplacing').value;
    const rep=P.d.emps.find(x=>x.id===repId);
    preq.replacingId=repId;
    preq.replacingName=rep?rep.n:'Unknown';
  }
  P.d.provisioning.unshift(preq);

  P.d.tickets.unshift({id:'SR-'+(8830+P.d.provisioning.length),
    t:(type==='new'?'New hire provisioning — ':'Employee transfer — ')+name+' ('+role+')',
    p:'High',st:'Open',a:'Unassigned',sla:'24h left',isProvisioning:true,preqId:preq.id});

  P.d.events.unshift({t:new Date().toTimeString().slice(0,8),sys:'HR',
    e:'New record for '+name+' created — provisioning request routed to ITSM automatically'});

  P.close();
  P.go('hr');
  P.notify('Sent to IT: '+(type==='new'?'new provisioning request for '+name+'.':'transfer request — '+name+' will receive '+preq.replacingName+"'s systems."));
};


/* ============ FINANCE ============ */
P.views.finance=()=>P.head("Finance","Financial operations connected to ERP, procurement and asset systems.")+
`<div class="grid g4">
  ${P.kpi("MTD Spend","$186K","vs $210K budget","acc")}
  ${P.kpi("Pending Invoices","23","$94K total")}
  ${P.kpi("Auto-Reconciled","94%","no manual matching","gold")}
  ${P.kpi("Cost Avoided","$412K","YTD via automation","acc")}
</div>
<div class="sec">Cost Centres</div>
${[["IT Operations",68,"$84K / $124K"],["Security",74,"$41K / $56K"],["Facilities",52,"$28K / $54K"],
   ["Field Operations",81,"$33K / $41K"]].map(r=>
`<div class="card" style="margin-bottom:9px"><div class="between">
  <b style="font-size:13px">${r[0]}</b><span class="mini">${r[2]}</span></div>
  <div class="bar ${r[1]>75?'g':''}"><i style="width:${r[1]}%"></i></div></div>`).join('')}
<div class="sec">Recent Transactions — click a row for full detail</div>
${P.tblClick(["Ref","Description","Cost Centre","Amount","Matched","Status"],
  P.d.finTxns.map(x=>[x.ref,x.desc,x.cc,x.amt,`<span class="pill ${x.matched==='Auto'?'p-ok':'p-warn'}">${x.matched}</span>`,`<span class="pill ${x.status==='Posted'?'p-ok':'p-warn'}">${x.status}</span>`]),
  P.d.finTxns.map((x,i)=>`P.finDetail(${i})`))}`;

P.finDetail=(idx)=>{
  const x=P.d.finTxns[idx];
  P.modal(x.ref,`
  <div class="fld"><label>Description</label><div style="font-size:13px">${P.esc(x.desc)}</div></div>
  <div class="grid g3" style="margin-bottom:14px">
    <div class="card kpi"><div class="lab">Amount</div><div class="val" style="font-size:17px">${x.amt}</div></div>
    <div class="card kpi"><div class="lab">Cost Centre</div><div class="val" style="font-size:14px">${x.cc}</div></div>
    <div class="card kpi"><div class="lab">Status</div><div class="val ${x.status==='Posted'?'up':'wr'}" style="font-size:14px">${x.status}</div></div>
  </div>
  <div class="mini" style="margin-bottom:6px">RECONCILIATION TRAIL</div>
  <div class="log" style="margin-bottom:14px">${x.trail.map(a=>`<div>${P.esc(a)}</div>`).join('')}</div>
  ${x.status==='Review'?`<div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Close</button>
    <button class="btn red sm" onclick="P.finFlag(${idx})">Flag for Audit</button>
    <button class="btn pri" onclick="P.finApprove(${idx})">Approve &amp; Post</button>
  </div>`:`<div class="row" style="justify-content:flex-end;margin-top:16px"><button class="btn" onclick="P.close()">Close</button></div>`}`);
};
P.finApprove=(idx)=>{
  const x=P.d.finTxns[idx]; x.status='Posted'; x.matched='Auto';
  x.trail.unshift(new Date().toTimeString().slice(0,5)+' — Approved and posted by Bobby Sharon');
  P.close(); P.go('finance');
  P.notify(x.ref+' approved and posted to ERP.');
};
P.finFlag=(idx)=>{
  const x=P.d.finTxns[idx];
  x.trail.unshift(new Date().toTimeString().slice(0,5)+' — Flagged for audit review by Bobby Sharon');
  P.close();
  P.notify(x.ref+' flagged and routed to Audit Logs.');
};

/* ============ ITSM ============ */
P.views.itsm=()=>{const allT=P.d.tickets;const provOpen=allT.filter(x=>x.isProvisioning&&x.st==='Open');
  const ti=P.tabState.itsm||0;
  const filters=[x=>true, x=>x.a==='Unassigned'||x.a==='A. Nair', x=>x.st==='Auto-Resolved', x=>x.sla&&x.sla.startsWith('-')];
  const t=allT.filter(filters[ti]);
  return P.head("ITSM Service Desk","Service requests, SLAs and fulfilment — with autonomous resolution where policy allows.")+
`<div class="grid g4">
  ${P.kpi("Open Tickets",allT.filter(x=>x.st==='Open'||x.st==='In Progress').length+"","within SLA")}
  ${P.kpi("Auto-Resolved","62%","no human touch","acc")}
  ${P.kpi("SLA Compliance","98.4%","trailing 30 days","gold")}
  ${P.kpi("From HR",provOpen.length+"","awaiting IT decision",provOpen.length?'gold':'')}
</div>
${provOpen.length?`<div class="sec">HR Provisioning Requests — Needs IT Decision</div>
${provOpen.map(x=>{const preq=P.d.provisioning.find(p=>p.id===x.preqId);
  return `<div class="card" style="margin-bottom:9px;border-left:3px solid var(--gold)">
  <div class="between">
    <div><b style="font-size:13px">${P.esc(x.t)}</b>
      <div class="mini">${x.id} · ${x.p} priority · SLA ${x.sla}</div></div>
    <span class="pill ${preq&&preq.type==='new'?'p-info':'p-warn'}">${preq&&preq.type==='new'?'New Hire':'Replacement'}</span>
  </div>
  ${preq&&preq.type==='replace'?
    `<div class="mini" style="margin-top:8px">Replacing: <b>${P.esc(preq.replacingName)}</b> — transfer their systems, access and data instead of provisioning from scratch.</div>
     <div class="row" style="margin-top:10px;gap:8px">
       <button class="btn sm pri" onclick="P.itResolveProvisioning('${x.id}','transfer')">Transfer Existing Systems</button>
       <button class="btn sm gold" onclick="P.itResolveProvisioning('${x.id}','fresh')">Provision Fresh Instead</button>
     </div>`
    :
    `<div class="mini" style="margin-top:8px">New role — no existing systems to transfer. Provision fresh accounts, equipment and access.</div>
     <div class="row" style="margin-top:10px;gap:8px">
       <button class="btn sm pri" onclick="P.itResolveProvisioning('${x.id}','fresh')">Provision Fresh Accounts</button>
     </div>`}
  </div>`}).join('')}` : ''}
${P.tabRow('itsm',['All Requests','My Queue','Auto-Resolved','Breached SLA'])}
${t.length?P.tbl(["Ref","Request","Priority","Status","Assignee","SLA","Action"],
  t.map(x=>[x.id,x.t,`<span class="pill ${P.sevPill(x.p)}">${x.p}</span>`,
  `<span class="pill ${P.stPill(x.st)}">${x.st}</span>`,x.a,x.sla,
  `<button class="btn sm" onclick="P.ticketDetail('${x.id}')">View</button>`]))
  :'<div class="card mini">No tickets match this filter.</div>'}`};

P.ticketDetail=(id)=>{
  const x=P.d.tickets.find(t=>t.id===id);
  P.modal(x.id+' — '+x.t,`
  <div class="grid g3" style="margin-bottom:14px">
    <div class="card kpi"><div class="lab">Priority</div><div class="val" style="font-size:15px">${x.p}</div></div>
    <div class="card kpi"><div class="lab">Status</div><div class="val" style="font-size:15px">${x.st}</div></div>
    <div class="card kpi"><div class="lab">SLA</div><div class="val" style="font-size:15px">${x.sla}</div></div>
  </div>
  <div class="fld"><label>Assignee</label><div style="font-size:13px">${x.a}</div></div>
  <div class="mini" style="margin-bottom:6px">TICKET HISTORY</div>
  <div class="log" style="margin-bottom:14px"><div>Created and auto-triaged by SmartFix.AI</div><div>Routed to ${P.esc(x.a)} based on category and current load</div>${x.st==='Resolved'?'<div>Resolved and closed</div>':''}</div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Close</button>
    ${x.st!=='Resolved'?`<button class="btn pri" onclick="P.ticketResolve('${x.id}')">Mark Resolved</button>`:''}
  </div>`);
};
P.ticketResolve=(id)=>{
  const x=P.d.tickets.find(t=>t.id===id); x.st='Resolved'; x.sla='Met';
  P.close(); P.go('itsm');
  P.notify(x.id+' marked resolved.');
};

P.itResolveProvisioning=(ticketId,mode)=>{
  const ticket=P.d.tickets.find(x=>x.id===ticketId);
  const preq=P.d.provisioning.find(p=>p.id===ticket.preqId);
  const newEmp=P.d.emps.find(e=>e.id===preq.empId);
  if(mode==='transfer'){
    const oldEmp=P.d.emps.find(e=>e.id===preq.replacingId);
    if(oldEmp) oldEmp.st='Offboarded';
    newEmp.st='Active';
    P.d.events.unshift({t:new Date().toTimeString().slice(0,8),sys:'ITSM',
      e:'Systems, access and data transferred from '+(oldEmp?oldEmp.n:'previous holder')+' to '+newEmp.n+' — 6 of 6 complete'});
    P.notify('Transferred: '+newEmp.n+' now has '+(oldEmp?oldEmp.n+"'s":"the previous holder's")+' systems and access.');
  } else {
    newEmp.st='Active';
    P.d.events.unshift({t:new Date().toTimeString().slice(0,8),sys:'ITSM',
      e:'Fresh provisioning complete for '+newEmp.n+' — accounts, equipment and access granted, 6 of 6 complete'});
    P.notify('Provisioned: '+newEmp.n+' now has 6 of 6 fresh systems and access.');
  }
  ticket.st='Resolved';preq.st='Resolved';
  P.go('itsm');
};


/* ============ CCTV ============ */
P.views.cctv=()=>P.head("CCTV & Surveillance","Physical operations unified with digital systems — something point tools don't do.")+
`<div class="grid g4">
  ${P.kpi("Cameras Online","62","of 64 deployed","acc")}
  ${P.kpi("Events Today","148","motion, access, anomaly")}
  ${P.kpi("AI Detections","12","flagged for review","gold")}
  ${P.kpi("Storage Used","68%","42 days retained")}
</div>
<div class="sec">Camera Grid — Live Status — click a camera for detail</div>
<div class="grid g4">${P.d.cameras.map((c,i)=>`<div class="hlth" style="cursor:pointer" onclick="P.camDetail(${i})"><div class="n"><span class="dot d-${c.st==='ok'?'ok':'w'}"></span>${c.n}</div>
  <div class="s ${c.st==='ok'?'up':'wr'}">${c.st==='ok'?'Streaming':'Signal degraded'} · ${c.loc}</div></div>`).join('')}</div>
<div class="sec">Correlated Events — Cross-System — click for full trace</div>
${P.tblClick(["Time","Camera","Event","Correlated With","Action"],
  P.d.cctvEvents.map(x=>[x.time,x.cam,x.event,x.corr,`<span class="pill p-ok">${x.action}</span>`]),
  P.d.cctvEvents.map((x,i)=>`P.cctvEventDetail(${i})`))}`;

P.camDetail=(idx)=>{
  const c=P.d.cameras[idx];
  P.modal(c.n,`
  <div class="fld"><label>Status</label><span class="pill ${c.st==='ok'?'p-ok':'p-warn'}">${c.st==='ok'?'Streaming':'Signal Degraded'}</span></div>
  <div class="fld"><label>Location</label><div style="font-size:13px">${c.loc}</div></div>
  <div class="fld"><label>Feed</label><div style="background:#000;border-radius:8px;height:140px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:11px">
    ${c.st==='ok'?'▶ Live feed simulated — 1080p · 24fps':'⚠ Signal degraded — last frame 6 min ago'}</div></div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Close</button>
    ${c.st!=='ok'?`<button class="btn pri" onclick="P.camDispatch(${idx})">Dispatch Field Tech</button>`:'' }
  </div>`);
};
P.camDispatch=(idx)=>{
  const c=P.d.cameras[idx];
  P.close();
  P.notify('Field technician dispatched for '+c.n+' — job JOB-2215 created.');
};
P.cctvEventDetail=(idx)=>{
  const x=P.d.cctvEvents[idx];
  P.modal(x.event,`
  <div class="fld"><label>Time / Camera</label><div style="font-size:13px">${x.time} — ${P.esc(x.cam)}</div></div>
  <div class="fld"><label>Correlated Systems</label><div style="font-size:13px">${x.corr}</div></div>
  <div class="mini" style="margin-bottom:6px">FULL CORRELATION TRACE</div>
  <div class="log" style="margin-bottom:14px">${x.trace.map(a=>`<div>${P.esc(a)}</div>`).join('')}</div>
  <div class="row" style="justify-content:flex-end;margin-top:16px"><button class="btn" onclick="P.close()">Close</button></div>`);
};

/* ============ BIOMETRICS ============ */
P.views.biometrics=()=>P.head("Biometrics & Access Control","Identity and physical access, orchestrated with HR and security systems.")+
`<div class="grid g4">
  ${P.kpi("Enrolled Users","142","across 8 access points")}
  ${P.kpi("Access Events","1,284","today")}
  ${P.kpi("Denied Attempts","7","all investigated","acc")}
  ${P.kpi("Readers Online","7","of 8 — Gate 3 degraded")}
</div>
<div class="sec">Access Points</div>
${P.tbl(["Location","Type","Status","Events Today","Error Rate","Last Sync"],[
  ["HQ Main Entrance","Face + Card",'<span class="pill p-ok">Online</span>',"412","0.1%","1m ago"],
  ["HQ Server Room","Fingerprint + PIN",'<span class="pill p-ok">Online</span>',"28","0.0%","1m ago"],
  ["Gate 3","Face",'<span class="pill p-warn">Degraded</span>',"186","4.2%","31m ago"],
  ["Sharjah Plant Entry","Card",'<span class="pill p-ok">Online</span>',"324","0.2%","2m ago"],
  ["Warehouse A","Fingerprint",'<span class="pill p-ok">Online</span>',"148","0.3%","1m ago"],
  ["Executive Floor","Face + Card",'<span class="pill p-ok">Online</span>',"64","0.0%","1m ago"],
])}
<div class="sec">Automated Access Governance</div>
<div class="card"><div class="flow">
  <span class="fstep">HR exit flagged</span><span class="farr">→</span>
  <span class="fstep">Biometric revoked</span><span class="farr">→</span>
  <span class="fstep">Cloud accounts disabled</span><span class="farr">→</span>
  <span class="fstep">Assets recalled</span><span class="farr">→</span>
  <span class="fstep">Audit logged</span></div>
  <div class="mini" style="margin-top:9px">Runs in ~90 seconds. Manual equivalent averaged 2 days, with access frequently left active.</div></div>`;

/* ============ FIELD OPS ============ */
P.views.fieldops=()=>P.head("Field Operations","Dispatch, mobile workforce and job completion — connected to ERP and assets.")+
`<div class="grid g4">
  ${P.kpi("Technicians","12","4 on assignment")}
  ${P.kpi("Jobs Today","18","14 completed","acc")}
  ${P.kpi("Auto-Dispatched","76%","no manual routing","gold")}
  ${P.kpi("First-Time Fix","91%","parts pre-staged","acc")}
</div>
<div class="sec">Active Assignments — click a job for full detail</div>
${P.tblClick(["Job","Location","Technician","Issue","Dispatched","Status"],
  P.d.fieldJobs.map(x=>[x.id,x.loc,x.tech,x.issue,`<span class="mini">${x.dispatched}</span>`,`<span class="pill ${P.stPill(x.status)}">${x.status}</span>`]),
  P.d.fieldJobs.map((x,i)=>`P.jobDetail(${i})`))}`;

P.jobDetail=(idx)=>{
  const x=P.d.fieldJobs[idx];
  P.modal(x.id,`
  <div class="fld"><label>Issue</label><div style="font-size:13px">${P.esc(x.issue)}</div></div>
  <div class="grid g3" style="margin-bottom:14px">
    <div class="card kpi"><div class="lab">Technician</div><div class="val" style="font-size:15px">${x.tech}</div></div>
    <div class="card kpi"><div class="lab">Location</div><div class="val" style="font-size:15px">${x.loc}</div></div>
    <div class="card kpi"><div class="lab">Status</div><div class="val" style="font-size:15px">${x.status}</div></div>
  </div>
  <div class="mini" style="margin-bottom:6px">JOB TIMELINE</div>
  <div class="log" style="margin-bottom:14px">${x.timeline.map(a=>`<div>${P.esc(a)}</div>`).join('')}</div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Close</button>
    ${x.status!=='Complete'?`<button class="btn gold sm" onclick="P.jobReassign(${idx})">Reassign Technician</button>
    <button class="btn pri" onclick="P.jobComplete(${idx})">Mark Complete</button>`:''}
  </div>`);
};
P.jobComplete=(idx)=>{
  const x=P.d.fieldJobs[idx]; x.status='Complete';
  x.timeline.unshift(new Date().toTimeString().slice(0,5)+' — Marked complete by Bobby Sharon');
  P.close(); P.go('fieldops');
  P.notify(x.id+' marked complete.');
};
P.jobReassign=(idx)=>{
  const x=P.d.fieldJobs[idx];
  const techs=['O. Farouk','R. Khan','A. Nair'].filter(t=>t!==x.tech);
  P.modal('Reassign '+x.id,`
  <div class="fld"><label>Currently assigned to</label><div style="font-size:13px">${x.tech}</div></div>
  <div class="fld"><label>Reassign to</label><select id="jrTech">${techs.map(t=>`<option>${t}</option>`).join('')}</select></div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.jobDetail(${idx})">Cancel</button>
    <button class="btn pri" onclick="P.jobReassignConfirm(${idx})">Confirm Reassignment</button>
  </div>`);
};
P.jobReassignConfirm=(idx)=>{
  const x=P.d.fieldJobs[idx]; const newTech=document.getElementById('jrTech').value;
  x.timeline.unshift(new Date().toTimeString().slice(0,5)+' — Reassigned from '+x.tech+' to '+newTech);
  x.tech=newTech;
  P.close(); P.go('fieldops');
  P.notify(x.id+' reassigned to '+newTech+'.');
};

/* ============ ASSETS ============ */
P.views.assets=()=>{const a=P.d.assets;return P.head("Asset Management","Full lifecycle tracking across IT, industrial and physical security assets.")+
`<div class="grid g4">
  ${P.kpi("Total Assets","412","tracked and monitored")}
  ${P.kpi("Under Warranty","368","89% coverage","acc")}
  ${P.kpi("Alerts","2","predictive flags")}
  ${P.kpi("Book Value","$1.24M","auto-depreciated","gold")}
</div>
<div class="sec">Asset Register — click a row for full detail</div>
${P.tblClick(["ID","Asset","Category","Location","Status","Warranty"],
  a.map(x=>[x.id,`<b>${x.n}</b>`,x.c,x.loc,`<span class="pill ${P.stPill(x.st)}">${x.st}</span>`,x.w]),
  a.map((x,i)=>`P.assetDetail(${i})`))}`};

P.assetDetail=(idx)=>{
  const x=P.d.assets[idx];
  P.modal(x.n,`
  <div class="grid g3" style="margin-bottom:14px">
    <div class="card kpi"><div class="lab">Asset ID</div><div class="val" style="font-size:15px">${x.id}</div></div>
    <div class="card kpi"><div class="lab">Status</div><div class="val" style="font-size:15px">${x.st}</div></div>
    <div class="card kpi"><div class="lab">Warranty</div><div class="val" style="font-size:15px">${x.w}</div></div>
  </div>
  <div class="fld"><label>Category</label><div style="font-size:13px">${x.c}</div></div>
  <div class="fld"><label>Location</label><div style="font-size:13px">${x.loc}</div></div>
  <div class="mini" style="margin-bottom:6px">MAINTENANCE HISTORY</div>
  <div class="log" style="margin-bottom:14px">${(P.assetHistory[x.id]||['No maintenance events on record for this asset.']).map(a=>`<div>${P.esc(a)}</div>`).join('')}</div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Close</button>
    <button class="btn pri" onclick="P.assetSchedule(${idx})">Schedule Maintenance</button>
  </div>`);
};
P.assetHistory={
  "AST-0414":["3mo ago — Firmware updated to v4.2","8mo ago — Installed, initial calibration"],
  "AST-0415":["2d ago — Degraded state detected by QI Engine — read error rate rising","6mo ago — Routine cleaning and recalibration"],
  "AST-0416":["Today — Alert: bearing temperature trending to failure, ~72h window","1yr ago — Belt replacement"],
  "AST-0417":["1mo ago — Toner replaced","1yr ago — Installed"],
};
P.assetSchedule=(idx)=>{
  const x=P.d.assets[idx];
  P.close();
  P.notify('Maintenance scheduled for '+x.n+' — job created in Field Operations.');
  if(!P.d.fieldJobs.find(j=>j.issue.includes(x.n))){
    P.d.fieldJobs.unshift({id:'JOB-'+(2215+P.d.fieldJobs.length),loc:x.loc,tech:'Unassigned',issue:'Scheduled maintenance — '+x.n,
      dispatched:'Just now — Manual',status:'En route',timeline:[new Date().toTimeString().slice(0,5)+' — Created from Asset Management']});
  }
};

/* ============ SECURITY ============ */
P.views.security=()=>P.head("Cybersecurity","Zero-trust architecture with autonomous threat detection and response.")+
`<div class="grid g4">
  ${P.kpi("Threat Level",'<span class="up">Low</span>',"2 items under review")}
  ${P.kpi("Blocked Attempts","1,842","last 24 hours","acc")}
  ${P.kpi("Endpoints Protected","148","100% coverage","gold")}
  ${P.kpi("Patch Compliance","96%","6 pending reboot")}
</div>
<div class="sec">Active Security Events — click for full incident trace</div>
${P.tblClick(["Time","Event","Source","Severity","Response","Status"],
  P.d.secEvents.map(x=>[x.time,x.event,x.source,`<span class="pill ${P.sevPill(x.sev)}">${x.sev}</span>`,x.response,`<span class="pill ${P.stPill(x.status)}">${x.status}</span>`]),
  P.d.secEvents.map((x,i)=>`P.secDetail(${i})`))}
<div class="sec">Zero-Trust Posture</div>
<div class="grid g2">
${[["Identity verification","Every request authenticated",100],["Least-privilege access","Role-based, time-bound",94],
   ["Network segmentation","Micro-segmented by function",88],["Encryption at rest & transit","AES-256 / TLS 1.3",100],
   ["Continuous monitoring","All endpoints, 24/7",100],["Automated response","Agent-driven containment",92]].map(r=>
`<div class="card"><div class="between"><b style="font-size:12.5px">${r[0]}</b><b class="up" style="font-size:12px">${r[2]}%</b></div>
  <div class="mini">${r[1]}</div><div class="bar"><i style="width:${r[2]}%"></i></div></div>`).join('')}
</div>`;

P.secDetail=(idx)=>{
  const x=P.d.secEvents[idx];
  P.modal(x.event,`
  <div class="grid g3" style="margin-bottom:14px">
    <div class="card kpi"><div class="lab">Severity</div><div class="val" style="font-size:15px">${x.sev}</div></div>
    <div class="card kpi"><div class="lab">Source</div><div class="val" style="font-size:14px">${x.source}</div></div>
    <div class="card kpi"><div class="lab">Status</div><div class="val" style="font-size:15px">${x.status}</div></div>
  </div>
  <div class="mini" style="margin-bottom:6px">RESPONSE TIMELINE</div>
  <div class="log" style="margin-bottom:14px">${x.timeline.map(a=>`<div>${P.esc(a)}</div>`).join('')}</div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Close</button>
    ${x.status!=='Contained'&&x.status!=='Blocked'?`<button class="btn red sm" onclick="P.secContain(${idx})">Force Containment</button>`:''}
    <button class="btn pri" onclick="P.secEscalate(${idx})">Escalate to SOC</button>
  </div>`);
};
P.secContain=(idx)=>{
  const x=P.d.secEvents[idx]; x.status='Contained';
  x.timeline.unshift(new Date().toTimeString().slice(0,5)+' — Force-contained by Bobby Sharon');
  P.close(); P.go('security');
  P.notify(x.event+' — contained.');
};
P.secEscalate=(idx)=>{
  const x=P.d.secEvents[idx];
  x.timeline.unshift(new Date().toTimeString().slice(0,5)+' — Escalated to Security Operations Center');
  P.close();
  P.notify(x.event+' escalated to SOC — case opened.');
};

/* ============ COMPLIANCE ============ */
P.views.compliance=()=>P.head("Compliance","Regulatory readiness tracked continuously, with evidence generated automatically.")+
`<div class="grid g4">
  ${P.kpi("PDPL Readiness","94%","deadline Jan 2027","acc")}
  ${P.kpi("Open Gaps","3","all with owners")}
  ${P.kpi("Evidence Packs","6","auto-generated YTD","gold")}
  ${P.kpi("Audit Findings","0","last external review","acc")}
</div>
<div class="sec">Framework Coverage — click for control detail</div>
${P.d.frameworks.map((r,i)=>
`<div class="card" style="margin-bottom:9px;cursor:pointer" onclick="P.frameworkDetail(${i})"><div class="between">
  <div><b style="font-size:13px">${r.n}</b><div class="mini">${r.note}</div></div>
  <b style="font-size:15px" class="${r.pct>85?'up':r.pct>60?'wr':''}">${r.pct}%</b></div>
  <div class="bar ${r.pct<60?'g':''}"><i style="width:${r.pct}%"></i></div></div>`).join('')}
<div class="sec">Open Compliance Gaps — click for remediation detail</div>
${P.tblClick(["Gap","Framework","Owner","Target","Status"],
  P.d.gaps.map(x=>[x.gap,x.fw,x.owner,x.target,`<span class="pill ${P.stPill(x.status)}">${x.status}</span>`]),
  P.d.gaps.map((x,i)=>`P.gapDetail(${i})`))}`;

P.frameworkDetail=(idx)=>{
  const r=P.d.frameworks[idx];
  P.modal(r.n,`
  <div class="card kpi" style="margin-bottom:14px"><div class="lab">Readiness</div><div class="val ${r.pct>85?'up':r.pct>60?'wr':''}" style="font-size:22px">${r.pct}%</div>
    <div class="bar ${r.pct<60?'g':''}" style="margin-top:8px"><i style="width:${r.pct}%"></i></div></div>
  <div class="mini" style="margin-bottom:6px">CONTROL EVIDENCE</div>
  <div class="log" style="margin-bottom:14px">${r.evidence.map(a=>`<div>${P.esc(a)}</div>`).join('')}</div>
  <div class="row" style="justify-content:flex-end;margin-top:16px">
    <button class="btn" onclick="P.close()">Close</button>
    <button class="btn pri" onclick="P.close();P.notify('Evidence pack exported for ${P.esc(r.n)}.')">Export Evidence Pack</button>
  </div>`);
};
P.gapDetail=(idx)=>{
  const x=P.d.gaps[idx];
  P.modal(x.gap,`
  <div class="fld"><label>Framework</label><div style="font-size:13px">${x.fw}</div></div>
  <div class="fld"><label>Owner</label><div style="font-size:13px">${x.owner}</div></div>
  <div class="fld"><label>Target Date</label><div style="font-size:13px">${x.target}</div></div>
  <div class="mini" style="margin-bottom:6px">REMEDIATION PLAN</div>
  <div style="font-size:12.5px;color:var(--ice);margin-bottom:14px">${P.esc(x.plan)}</div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Close</button>
    <button class="btn pri" onclick="P.gapAdvance(${idx})">Mark Progress</button>
  </div>`);
};
P.gapAdvance=(idx)=>{
  const x=P.d.gaps[idx];
  if(x.status==='Planned') x.status='In Progress';
  else if(x.status==='In Progress') x.status='Resolved';
  P.close(); P.go('compliance');
  P.notify(x.gap+' — status updated to '+x.status+'.');
};

/* ============ AUDIT LOGS ============ */
P.views.auditlogs=()=>{const all=P.d.auditLog;const ti=P.tabState.auditlogs||0;
  const filters=[x=>true, x=>x.msg.includes('[AGENT:'), x=>x.msg.includes('[USER:'),
    x=>x.msg.includes('access')||x.msg.includes('Access')||x.msg.includes('login')||x.msg.includes('MFA'),
    x=>x.msg.includes('disabled')||x.msg.includes('policy')||x.msg.includes('threshold')];
  const log=all.filter(filters[ti]);
  return P.head("Audit Logs","Immutable record of every action — human and autonomous — across the platform.")+
`<div class="grid g4">
  ${P.kpi("Events Logged","284K","last 30 days")}
  ${P.kpi("Autonomous Actions","847","fully attributed","acc")}
  ${P.kpi("Retention","7 years","compliance-aligned","gold")}
  ${P.kpi("Integrity","Verified","tamper-evident hash chain","acc")}
</div>
${P.tabRow('auditlogs',['All Events','Autonomous','Human Actions','Access Changes','Config Changes'])}
<div class="mini" style="margin-bottom:8px">Click any entry for the full immutable record, including hash chain verification.</div>
${log.length?`<div class="log">${log.map(e=>{const idx=all.indexOf(e);return `<div style="cursor:pointer" onclick="P.auditDetail(${idx})"><span class="t">${e.t}</span> <span class="${e.cls}">${e.msg}</span></div>`;}).join('')}</div>`
  :'<div class="card mini">No events match this filter.</div>'}`};

P.auditDetail=(idx)=>{
  const e=P.d.auditLog[idx];
  P.modal('Audit Record',`
  <div class="fld"><label>Timestamp</label><div style="font-size:13px">${e.t}</div></div>
  <div class="fld"><label>Event</label><div style="font-size:12.5px;color:var(--ice)">${P.esc(e.msg)}</div></div>
  <div class="fld"><label>Actor</label><div style="font-size:13px">${e.actor}</div></div>
  <div class="fld"><label>Hash Chain</label><div class="mini" style="font-family:monospace">${e.hash}</div></div>
  <div class="row" style="justify-content:flex-end;margin-top:16px"><button class="btn" onclick="P.close()">Close</button></div>`);
};

/* ============ INTEGRATIONS ============ */
P.views.integrations=()=>{const g=P.d.integrations;return P.head("Integrations","Universal connectivity — every system unified into one operating layer.")+
`<div class="grid g4">
  ${P.kpi("Connected",g.filter(x=>x.s==='Connected').length,"actively syncing","acc")}
  ${P.kpi("Available",g.filter(x=>x.s==='Available').length,"ready to connect")}
  ${P.kpi("Sync Health","98.4%","last 24 hours","gold")}
  ${P.kpi("Data Points/Day","2.4M","across all sources","acc")}
</div>
<div class="sec">Connector Library</div>
<div class="grid g4">${g.map(x=>`<div class="card" style="padding:12px">
  <div class="between"><b style="font-size:12.5px">${x.n}</b>
   <span class="pill ${P.stPill(x.s)}" style="font-size:9px">${x.s}</span></div>
  <div class="mini">${x.c} · ${x.sy}</div>
  <button class="btn sm" style="margin-top:8px;width:100%" onclick="P.notify('${x.s==='Available'?'Connector setup started.':'Connection settings opened.'}')">
    ${x.s==='Available'?'Connect':'Configure'}</button></div>`).join('')}</div>`};

/* ============ MARKETPLACE ============ */
P.views.marketplace=()=>P.head("Marketplace","Industry workflow packs, connectors and intelligence modules.")+
`<div class="grid g4">
  ${P.kpi("Installed","8","packs active","acc")}
  ${P.kpi("Available","46","across 9 industries")}
  ${P.kpi("Industry Packs","12","vertical-specific","gold")}
  ${P.kpi("Intelligence Modules","9","predictive add-ons")}
</div>
<div class="sec">Featured Packs</div>
<div class="grid g3">${[
 ["Manufacturing Ops Pack","14 workflows · predictive maintenance · OEE tracking","Installed"],
 ["Retail Operations Pack","11 workflows · POS integration · stock intelligence","Available"],
 ["Healthcare Compliance Pack","9 workflows · patient data governance","Available"],
 ["Logistics & Fleet Pack","12 workflows · route optimization · telematics","Available"],
 ["Financial Services Pack","16 workflows · regulatory reporting · fraud signals","Available"],
 ["Hospitality Pack","10 workflows · guest systems · staff scheduling","Available"],
 ["Construction Pack","13 workflows · site safety · asset tracking","Installed"],
 ["Education Pack","8 workflows · campus access · student systems","Available"],
 ["Government Pack","15 workflows · citizen services · compliance","Available"],
].map(p=>`<div class="card"><div class="between"><b style="font-size:12.5px">${p[0]}</b>
  <span class="pill ${p[2]==='Installed'?'p-ok':'p-mut'}" style="font-size:9px">${p[2]}</span></div>
  <div class="mini" style="margin-top:5px">${p[1]}</div>
  <button class="btn sm ${p[2]==='Installed'?'':'pri'}" style="margin-top:9px;width:100%"
   onclick="P.notify('${p[2]==='Installed'?'Pack settings opened.':'Pack installed and workflows deployed.'}')">
   ${p[2]==='Installed'?'Manage':'Install'}</button></div>`).join('')}</div>`;

/* ============ ADMIN ============ */
P.views.admin=()=>{const ti=P.tabState.admin||0;
  return P.head("Administration","Users, roles, policies and platform governance.")+
`<div class="grid g4">
  ${P.kpi("Users","148","across 6 departments")}
  ${P.kpi("Roles","12","role-based access")}
  ${P.kpi("Policies","34","governing automation","acc")}
  ${P.kpi("Regions","3","UAE · GCC · APAC","gold")}
</div>
${P.tabRow('admin',['Users & Roles','Policies','Organizations','API Keys','Localization'])}
${[P.adminRoles, P.adminPolicies, P.adminOrgs, P.adminKeys, P.adminLocalization][ti]()}`};

P.adminRoles=()=>`<div class="sec" style="margin-top:0">Roles & Permissions</div>
${P.tbl(["Role","Users","Scope","Automation Rights","Data Access"],[
  ["Global Administrator","2","All entities","Full — create, approve, override","Unrestricted"],
  ["Regional Manager","6","Single region","Create, approve within region","Regional"],
  ["Department Lead","14","Own department","Approve within policy","Departmental"],
  ["Operations Analyst","22","Assigned systems","View, trigger manual runs","Read + operational"],
  ["Field Technician","12","Assigned jobs","Job actions only","Job-scoped"],
  ["Auditor","4","All entities","None — read only","Read-only, full history"],
  ["Service Desk Agent","18","ITSM queue","Ticket actions","Ticket-scoped"],
  ["Executive Viewer","9","All entities","None","Dashboards + reports"],
])}
<div class="sec">Bulk Import</div>
${P.uploadUI()}`;
P.adminPolicies=()=>`<div class="sec" style="margin-top:0">Automation Policies</div>
${P.tbl(["Policy","Applies To","Threshold","Autonomy","Status"],[
  ["Purchase auto-approval","Procurement","Under $10,000","Fully autonomous",'<span class="pill p-ok">Active</span>'],
  ["Incident auto-escalation","All departments","Severity ≥ High","Fully autonomous",'<span class="pill p-ok">Active</span>'],
  ["Access auto-revocation","HR exits","Immediate on flag","Fully autonomous",'<span class="pill p-ok">Active</span>'],
  ["Leave auto-approval","HR","Within entitlement","Fully autonomous",'<span class="pill p-ok">Active</span>'],
  ["Patch auto-deployment","IT Ops","CVE ≥ 8.0","Human-in-the-loop",'<span class="pill p-ok">Active</span>'],
  ["Resource auto-scaling","Cloud","Utilization > 80%","Fully autonomous",'<span class="pill p-warn">Paused</span>'],
])}`;
P.adminOrgs=()=>`<div class="sec" style="margin-top:0">Organizations</div>
${P.tbl(["Entity","Region","Users","Modules Active","Status"],[
  ["SmartFix Global HQ","UAE — Dubai","62","All 25","<span class=\"pill p-ok\">Active</span>"],
  ["SmartFix GCC Operations","GCC — Riyadh","48","19 of 25","<span class=\"pill p-ok\">Active</span>"],
  ["SmartFix APAC Pilot","APAC — Mumbai","38","12 of 25","<span class=\"pill p-info\">Pilot</span>"],
])}`;
P.adminKeys=()=>`<div class="sec" style="margin-top:0">API Keys</div>
${P.tbl(["Key Name","Scope","Created","Last Used","Status"],[
  ["prod-integration-hub","Full API","6mo ago","2 min ago","<span class=\"pill p-ok\">Active</span>"],
  ["mobile-app-readonly","Read-only","3mo ago","14 min ago","<span class=\"pill p-ok\">Active</span>"],
  ["reporting-service","Analytics only","1yr ago","1h ago","<span class=\"pill p-ok\">Active</span>"],
  ["legacy-erp-bridge","ERP module only","2yr ago","Never","<span class=\"pill p-mut\">Unused</span>"],
])}`;
P.adminLocalization=()=>`<div class="sec" style="margin-top:0">Localization</div>
${P.tbl(["Language","Coverage","Default For","Status"],[
  ["English","100%","Global default","<span class=\"pill p-ok\">Live</span>"],
  ["العربية (Arabic)","100%","UAE, GCC entities","<span class=\"pill p-ok\">Live</span>"],
  ["Français","UI chrome only","—","<span class=\"pill p-ok\">Live</span>"],
  ["Español","UI chrome only","—","<span class=\"pill p-ok\">Live</span>"],
  ["中文","UI chrome only","—","<span class=\"pill p-ok\">Live</span>"],
])}
<div class="mini" style="margin-top:10px">Switch your own display language from the globe selector in the top bar.</div>`;

/* ============ SETTINGS ============ */
P.views.settings=()=>P.head("Settings","Platform configuration, localization and deployment options.")+
`<div class="split">
  <div class="card"><b style="font-size:13px">General</b>
    <div style="margin-top:12px">
      <div class="fld"><label>Organization name</label><input value="SmartFix Global"></div>
      <div class="fld"><label>Primary region</label><select><option>UAE — Dubai</option>
        <option>GCC — Riyadh</option><option>APAC — Mumbai</option><option>Europe — Frankfurt</option></select></div>
      <div class="fld"><label>Default language</label><select><option>English</option><option>العربية (Arabic)</option>
        <option>हिन्दी (Hindi)</option><option>Français</option><option>Español</option></select></div>
      <div class="fld"><label>Timezone</label><select><option>GST (UTC+4) — Dubai</option>
        <option>AST (UTC+3) — Riyadh</option><option>IST (UTC+5:30) — Mumbai</option></select></div>
    </div></div>
  <div class="card"><b style="font-size:13px">Platform Behaviour</b>
    <div style="margin-top:12px">
      ${[["Autonomous agents enabled","Agents may act without human confirmation",1],
         ["Predictive alerting","Forecast failures before they occur",1],
         ["Cross-system correlation","Correlate events across all connected systems",1],
         ["Auto-generate compliance evidence","Scheduled evidence packs",1],
         ["Mobile push notifications","Alerts to Android and iOS apps",1],
         ["Anonymous usage telemetry","Improves platform intelligence",0]].map(r=>
      `<div class="between" style="padding:9px 0;border-bottom:1px solid rgba(42,48,80,.5)">
        <div><div style="font-size:12.5px;font-weight:600">${r[0]}</div><div class="mini">${r[1]}</div></div>
        <div class="tog${r[2]?' on':''}" onclick="P.toggle(this)"><i></i></div></div>`).join('')}
    </div></div>
</div>
<div class="sec">Deployment</div>
<div class="grid g3">
  ${P.kpi("Deployment Model","Multi-Cloud","AWS · Azure · GCP","acc")}
  ${P.kpi("Data Residency","UAE","in-region storage","gold")}
  ${P.kpi("Client Platforms","Web · Android · iOS","unified experience","acc")}
</div>`;


/* ================= AUTH ================= */
P.login=()=>{
  const co=document.getElementById('liCo').value.trim();
  const em=document.getElementById('liEm').value.trim();
  const pw=document.getElementById('liPw').value.trim();
  const err=document.getElementById('lerr');
  if(!co||!em||!pw){err.textContent='All fields are required.';err.classList.add('on');return;}
  if(pw.length<4){err.textContent='Password must be at least 4 characters.';err.classList.add('on');return;}
  err.classList.remove('on');
  document.getElementById('login').classList.add('off');
  P.notify('Signed in to '+co+' — simulation mode');
};
P.logout=()=>{document.getElementById('login').classList.remove('off');
  document.getElementById('liPw').value='';P.notify('Signed out.')};
P.forgot=()=>P.modal("Reset Password",`
  <div style="font-size:12.5px;color:var(--ice);margin-bottom:14px">
    Enter your account email and we'll send reset instructions.</div>
  <div class="fld"><label>Email</label><input id="fgEm" value="bobby.sharon@smartfix.global"></div>
  <div class="row" style="justify-content:flex-end;gap:8px;margin-top:16px">
    <button class="btn" onclick="P.close()">Cancel</button>
    <button class="btn pri" onclick="P.close();P.notify('Reset link sent — check your inbox.')">Send Reset Link</button>
  </div>`);

/* ================= TEAM CHAT ================= */
P.tcUsers=[{id:'all',n:'All users (broadcast)'},{id:2,n:'Mariam Alavi'},{id:3,n:'Rashid Khan'},
  {id:4,n:'Sara Idris'},{id:5,n:'Arjun Nair'},{id:6,n:'Layla Hassan'}];
P.tcWith='all';
P.tcThreads={all:[{f:'them',w:'Sara Idris',m:'Gate 3 reader is back online — field tech confirmed.'},
  {f:'me',w:'You',m:'Good. Log it against INC-1040 please.'}],
  2:[{f:'them',w:'Mariam Alavi',m:'Payment gateway incident is contained. Root cause was batch scheduling.'}],
  3:[{f:'them',w:'Rashid Khan',m:'Line 4 bearing inspection scheduled for 0800 tomorrow.'}],
  4:[],5:[{f:'them',w:'Arjun Nair',m:'Storage node cleanup complete, 34% freed.'}],6:[]};
P.chatPanel=()=>{const p=document.getElementById('tchat');p.classList.toggle('on');
  if(p.classList.contains('on'))P.tcRender()};
P.tcPick=(id)=>{P.tcWith=(id==='all'?'all':+id);P.tcRender()};
P.tcRender=()=>{
  document.getElementById('tcUsers').innerHTML=P.tcUsers.map(u=>
    `<span class="${String(P.tcWith)===String(u.id)?'on':''}" onclick="P.tcPick('${u.id}')">${u.n}</span>`).join('');
  const th=P.tcThreads[P.tcWith]||[];
  document.getElementById('tcMsgs').innerHTML=th.length?th.map(m=>
    `<div class="tcmsg ${m.f==='me'?'me':'them'}"><div class="w">${m.w}</div><div class="b">${P.esc(m.m)}</div></div>`).join('')
    :'<div style="color:var(--muted);font-size:12px;text-align:center;padding:20px">No messages yet.</div>';
  const c=document.getElementById('tcMsgs');c.scrollTop=c.scrollHeight;
};
P.tcSend=()=>{const i=document.getElementById('tcIn');const v=i.value.trim();if(!v)return;
  (P.tcThreads[P.tcWith]=P.tcThreads[P.tcWith]||[]).push({f:'me',w:'You',m:v});
  i.value='';P.tcRender();
  setTimeout(()=>{const who=P.tcWith==='all'?'Team':(P.tcUsers.find(u=>u.id===P.tcWith)||{}).n;
    P.tcThreads[P.tcWith].push({f:'them',w:who,m:'Acknowledged — I\'ll follow up on that.'});P.tcRender()},900)};

/* ================= FILE UPLOAD (master/admin) ================= */
P.files=[
  {n:'Employee_Master_List.xlsx',s:'248 KB',t:'HR Import',d:'2 days ago',st:'Processed'},
  {n:'Asset_Register_2026.csv',s:'86 KB',t:'Asset Import',d:'5 days ago',st:'Processed'},
  {n:'Vendor_Contracts.zip',s:'4.2 MB',t:'Document',d:'1 week ago',st:'Stored'},
];
P.uploadUI=()=>`
<div class="sec">Data Import & Document Upload</div>
<div class="card">
  <div class="drop" id="drop" onclick="document.getElementById('fInput').click()">
    <div style="font-size:26px;margin-bottom:7px">⬆</div>
    <div style="font-size:13px;font-weight:600">Drop files here, or click to browse</div>
    <div class="mini" style="margin-top:5px">CSV, XLSX, JSON for data import · PDF, DOCX, ZIP for documents · max 50 MB</div>
  </div>
  <input type="file" id="fInput" multiple style="display:none" onchange="P.filesPicked(this.files)">
  <div class="row" style="margin-top:12px;gap:8px;flex-wrap:wrap">
    <select class="btn" id="upType" style="padding:6px 10px">
      <option>HR Import — employee records</option><option>Asset Import — asset register</option>
      <option>ERP Import — purchase orders</option><option>CRM Import — accounts &amp; contacts</option>
      <option>Integration Mapping — field mapping</option><option>Document — store only</option>
    </select>
    <label class="row" style="gap:7px;font-size:11.5px;color:var(--ice)">
      <div class="tog on" onclick="P.toggle(this)"><i></i></div> Validate before import</label>
    <label class="row" style="gap:7px;font-size:11.5px;color:var(--ice)">
      <div class="tog on" onclick="P.toggle(this)"><i></i></div> Trigger workflows on import</label>
  </div>
  <div class="flist" id="flist">${P.fileRows()}</div>
</div>`;
P.fileRows=()=>P.files.map(f=>`<div class="fitem">
  <div class="fic">▤</div>
  <div style="flex:1"><div style="font-size:12.5px;font-weight:600">${P.esc(f.n)}</div>
    <div class="mini">${f.s} · ${f.t} · ${f.d}</div></div>
  <span class="pill ${f.st==='Processed'?'p-ok':'p-info'}">${f.st}</span>
  <button class="btn sm" onclick="P.notify('Opened ${P.esc(f.n)}')">View</button>
</div>`).join('');
P.filesPicked=(fl)=>{
  const type=(document.getElementById('upType')||{}).value||'Document';
  [...fl].forEach(f=>P.files.unshift({n:f.name,s:(f.size/1024).toFixed(0)+' KB',
    t:type.split(' — ')[0],d:'just now',st:'Processing'}));
  document.getElementById('flist').innerHTML=P.fileRows();
  P.notify(fl.length+' file(s) uploaded — validating and importing…');
  setTimeout(()=>{P.files.forEach(f=>{if(f.st==='Processing')f.st='Processed'});
    const el=document.getElementById('flist');if(el)el.innerHTML=P.fileRows();
    P.notify('Import complete — records validated and workflows triggered.')},1600);
};

/* ============ BOOT ============ */

/* drag & drop wiring (re-binds whenever admin view renders) */
P._bindDrop=()=>{const d=document.getElementById('drop');if(!d||d._b)return;d._b=1;
  ['dragenter','dragover'].forEach(e=>d.addEventListener(e,ev=>{ev.preventDefault();d.classList.add('over')}));
  ['dragleave','drop'].forEach(e=>d.addEventListener(e,ev=>{ev.preventDefault();d.classList.remove('over')}));
  d.addEventListener('drop',ev=>{if(ev.dataTransfer&&ev.dataTransfer.files.length)P.filesPicked(ev.dataTransfer.files)});
};
const _go=P.go;P.go=(id)=>{_go(id);setTimeout(P._bindDrop,20)};

P.renderNav();P.go("dashboard");
document.getElementById('gsearch').addEventListener('keydown',e=>{
  if(e.key==='Enter'&&e.target.value.trim()){P.notify('Searching across 12 connected systems for "'+e.target.value.trim()+'"…');}});
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')P.close()});
