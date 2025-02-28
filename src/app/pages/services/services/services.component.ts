import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  advisory = [
    {
      icon: 'flaticon-personal',
      title: 'Corporate Finance',
      description: 'Assisting businesses in raising capital, mergers, acquisitions, and restructuring to ensure long-term...',
      link: '/services/advisory/corporate-finance',
    },
    {
      icon: 'flaticon-career',
      title: 'Corporate Secretarial',
      description: 'Providing a range of corporate governance and compliance services, ensuring that companies adhere...',
      link: '/services/advisory/corporate-secretarial',
    },
    {
      icon: 'flaticon-group',
      title: 'Corporate Strategy',
      description: 'Helping organizations create a strategic vision, assess market opportunities, and develop sustainable...',
      link: '/services/advisory/corporate-strategy',
    },
    {
      icon: 'flaticon-solution-5',
      title: 'Due Diligence Work',
      description: 'Offering detailed investigative services to assist in evaluating risks and opportunities before transactions...',
      link: '/services/advisory/due-diligence-work',
    },
    {
      icon: 'flaticon-global',
      title: 'Export Development',
      description: 'Supporting businesses in expanding their market reach globally through tailored export strategies...',
      link: '/services/advisory/export-development',
    },
    {
      icon: 'flaticon-networking',
      title: 'Human Capital Management',
      description: 'Strategic solutions to attract, retain, and develop talent within your organization.',
      link: '/services/advisory/human-capital-management',
    },
    {
      icon: 'flaticon-settings',
      title: 'Management Systems & Services',
      description: 'End-to-end management solutions for optimizing processes and driving efficiency.',
      link: '/services/advisory/management-systems',
    },
    {
      icon: 'flaticon-growth',
      title: 'Performance Improvement',
      description: 'Data-driven approaches to enhance performance and achieve operational excellence.',
      link: '/services/advisory/performance-improvement',
    },
    {
      icon: 'flaticon-strategy',
      title: 'Planning & Policy Formulation',
      description: 'Tailored planning and policy advisory for sustainable development and growth.',
      link: '/services/advisory/planning-policy',
    },
    {
      icon: 'flaticon-money',
      title: 'Business Finance',
      description: 'Financial expertise to support business growth and navigate complex financial challenges.',
      link: '/services/advisory/business-finance',
    },
    {
      icon: 'flaticon-transaction',
      title: 'Transaction Advisory',
      description: 'Specialized advisory on mergers, acquisitions, and other critical transactions.',
      link: '/services/advisory/transaction-advisory',
    },
    {
      icon: 'flaticon-shield',
      title: 'Risk Management',
      description: 'Comprehensive risk assessments to protect assets and ensure business continuity.',
      link: '/services/advisory/risk-management',
    },
    {
      icon: 'flaticon-investment',
      title: 'Wealth Management',
      description: 'Customized wealth management strategies to secure your financial future.',
      link: '/services/advisory/wealth-management',
    },
    {
      icon: 'flaticon-pension',
      title: 'Retirement & Pension',
      description: 'Expert advice on planning and managing retirement and pension funds effectively.',
      link: '/services/advisory/retirement-pension',
    },
  ];


  audit = [
    {
      icon: 'flaticon-personal',
      title: 'Accounting Advisory Services',
      description: 'At KWAMU, we help businesses stay ahead by addressing their accounting challenges and ensuring...',
      link: '/services/audit-assurance/accounting-advisory',
    },
    {
      icon: 'flaticon-career',
      title: 'Special Purpose Audit',
      description: 'Conducting audits tailored to specific needs, such as regulatory compliance or particular transactions...',
      link: '/services/audit-assurance/special-purpose-audit',
    },
    {
      icon: 'flaticon-group',
      title: 'Private Client Audit',
      description: 'Providing bespoke audit services for private clients, ensuring financial transparency and risk management...',
      link: '/services/audit-assurance/private-client-audit',
    },
    {
      icon: 'flaticon-solution-5',
      title: 'Statutory Audits',
      description: 'Delivering independent assessments of financial statements in compliance with applicable regulations...',
      link: '/services/audit-assurance/statutory-audit',
    },
    {
      icon: 'flaticon-global',
      title: 'Performance Audit',
      description: 'Evaluating the efficiency, effectiveness, and economy of business operations. Our performance audits assess...',
      link: '/services/audit-assurance/performance-audit',
    },
    {
      icon: 'flaticon-networking',
      title: 'Forensic & Integrity Services',
      description: 'Evaluating the efficiency, effectiveness, and economy of business operations. Our performance audits assess...',
      link: '/services/audit-assurance/forensic-integrity',
    },
    {
      icon: 'flaticon-settings',
      title: 'Value For Money',
      description: 'Evaluating whether resources are being used economically, efficiently, and effectively. Our VFM audits help...',
      link: '/services/audit-assurance/value-for-money',
    },
    {
      icon: 'flaticon-growth',
      title: 'International Financial Reporting Standards',
      description: 'Assisting clients in implementing and complying with IFRS to enhance financial transparency...',
      link: '/services/audit-assurance/international-financial',
    },
  ];
  
  tax = [
    {
      icon: 'flaticon-services',
      title: 'Payroll Services',
      description: 'Comprehensive payroll solutions to ensure accurate and compliant processing of employee compensation.',
      link: '/services/tax/payroll-services',
    },
    {
      icon: 'flaticon-tax-advisory',
      title: 'Tax Advisory Services',
      description: 'Expert advice to help businesses navigate complex tax regulations and maximize tax efficiency.',
      link: '/services/tax/tax-advisory-services',
    },
    {
      icon: 'flaticon-compliance',
      title: 'Tax Compliance Services',
      description: 'Ensuring compliance with all tax obligations through accurate reporting and timely filing.',
      link: '/services/tax/tax-compliance-services',
    },
    {
      icon: 'flaticon-audit',
      title: 'Tax Audit & Investigation Support',
      description: 'Professional support during tax audits and investigations to safeguard your business interests.',
      link: '/services/tax/tax-audit-&-investigation-support',
    },
    {
      icon: 'flaticon-intervention',
      title: 'Tax Intervention Services',
      description: 'Assisting businesses in resolving tax disputes and negotiating favorable outcomes with tax authorities.',
      link: '/services/tax/tax-intervention-services',
    },
    {
      icon: 'flaticon-global-tax',
      title: 'International Tax Services',
      description: 'Guiding businesses through cross-border tax challenges with tailored international tax solutions.',
      link: '/services/tax/international-tax-services',
    },
    {
      icon: 'flaticon-training',
      title: 'Tax Training',
      description: 'Providing training programs to help businesses and individuals understand and manage tax obligations effectively.',
      link: '/services/tax/tax-training',
    },
    {
      icon: 'flaticon-pricing',
      title: 'Transfer Pricing',
      description: 'Ensuring compliance with transfer pricing regulations and optimizing intercompany pricing strategies.',
      link: '/services/tax/transfer-pricing',
    },
    {
      icon: 'flaticon-health-check',
      title: 'Tax Health Check & Risk Assessment',
      description: 'Comprehensive assessments to identify potential tax risks and ensure regulatory compliance.',
      link: '/services/tax/tax-health-check-&-risk-assessment',
    },
    {
      icon: 'flaticon-incentives',
      title: 'Tax Incentives Assistance',
      description: 'Helping businesses leverage available tax incentives to optimize their tax liabilities.',
      link: '/services/tax/tax-incentives-assistance',
    },
    {
      icon: 'flaticon-compliance-check',
      title: 'Other Compliance',
      description: 'Providing solutions for additional tax compliance needs, ensuring full adherence to regulations.',
      link: '/services/tax/other-compliance',
    },
  ];
  
  
// Pagination
adCurrentPage = 1;
adItemsPerPage = 4;

auditCurrentPage = 1;
auditItemsPerPage = 4;

taxCurrentPage = 1;
taxItemsPerPage = 4;



get paginatedServices() {
  const startIndex = (this.adCurrentPage - 1) * this.adItemsPerPage;
  return this.advisory.slice(startIndex, startIndex + this.adItemsPerPage);
}

get AuditPaginatedServices(){
  const startIndex = (this.auditCurrentPage -1) * this.auditItemsPerPage;
  return this.audit.slice(startIndex, startIndex + this.adItemsPerPage);
}

get taxPaginatedServices(){
  const startIndex = (this.taxCurrentPage -1) * this.taxItemsPerPage;
  return this.audit.slice(startIndex, startIndex + this.taxItemsPerPage);
}


onPageChange(page: number) {
  this.adCurrentPage = page;
}

auditOnPageChange(page: number){
  this.auditCurrentPage = page;
}

taxOnPageChange(page: number){
  this.taxCurrentPage = page;
}

}
