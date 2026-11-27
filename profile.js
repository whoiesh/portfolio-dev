/* Edit this file to update your profile, links, experience, skills, and work highlights. */
window.PORTFOLIO_PROFILE = {
  name: 'Iesh Praveen Punde',
  shortName: 'Iesh Punde',
  initials: 'IP',
  role: 'Data Engineer · Software Engineer',
  location: 'Gurugram, India',
  availability: 'Open to meaningful conversations',
  intro: 'I work across data engineering and software delivery—building dependable pipelines, improving workflows, and supporting production systems. I enjoy turning complex requirements into practical, maintainable solutions.',
  about: 'My experience spans large-scale ETL and data migration, data quality, workflow engineering, and production support. I have worked with data platforms and regulated healthcare technology, collaborating with technical and business stakeholders to deliver reliable outcomes.',
  currentRole: 'Business Technology Solutions Associate',
  currentCompany: 'ZS',
  email: 'ieshpunde@gmail.com', // Replace with your preferred public email.
  linkedin: 'https://www.linkedin.com/in/iesh-praveen-punde-9661891ba/', // Replace with your LinkedIn URL.
  github: 'https://github.com/whoiesh', // Replace with your GitHub URL.
  resumePath: '', // Add a PDF inside this folder and set e.g. '/iesh-punde-resume.pdf'.
};

window.PORTFOLIO_EXPERIENCE = [
  {
    company: 'ZS',
    role: 'Business Technology Solutions Associate',
    period: 'Sep 2026 — Present',
    location: 'Gurugram, India',
    description: 'Working at the intersection of technology and business problem-solving, contributing to structured delivery and technology-led solutions.',
    tags: ['Technology Consulting', 'Problem Solving', 'Delivery'],
    current: true,
  },
  {
    company: 'Ultragenic Research & Technologies',
    role: 'Consultant · Support Engineer / Technical Lead',
    period: 'Feb 2026 — Sep 2026',
    location: 'India',
    description: 'Led delivery and production support for an enterprise intake application, coordinating requirements, impact analysis, testing, change control, deployment readiness, and L3+ support.',
    highlights: ['Improved change-request turnaround efficiency by 25%.', 'Reduced post-deployment issue leakage by 20%.', 'Supported release planning, verification, and rollback readiness.'],
    tags: ['TypeScript', 'JavaScript', 'PostgreSQL', 'Production Support'],
  },
  {
    company: 'RxLogix Corporation',
    role: 'Associate Software Engineer · Data Engineering',
    period: 'Feb 2024 — Feb 2026',
    location: 'Noida, India',
    description: 'Developed ETL and data migration workflows for pharmacovigilance systems, using Oracle PL/SQL to transform, ingest, and validate safety data across E2B and non-E2B migration projects.',
    highlights: ['Contributed to high-volume, multi-million-case migration programs.', 'Improved migration efficiency and reduced manual validation effort by 20–30%.', 'Built SQL procedures and validation scripts to support reliable data movement.'],
    tags: ['Oracle 19c', 'PL/SQL', 'ETL', 'Data Migration'],
  },
];

window.PORTFOLIO_WORK = [
  {
    number: '01', category: 'DATA ENGINEERING', title: 'Safety data migration pipelines',
    description: 'Built and refined PL/SQL-based migration workflows for pharmacovigilance data, with a focus on repeatable ingestion, transformation, reconciliation, and validation.',
    stack: ['Oracle PL/SQL', 'ETL', 'Data Validation'],
  },
  {
    number: '02', category: 'APPLICATION DELIVERY', title: 'Enterprise intake workflow delivery',
    description: 'Coordinated end-to-end change delivery for an enterprise intake tool—from requirements and impact assessment through testing, deployment planning, and production verification.',
    stack: ['TypeScript', 'PostgreSQL', 'Release Management'],
  },
  {
    number: '03', category: 'DATA QUALITY', title: 'Automated data quality checks',
    description: 'Designed validation approaches that combine programmatic checks and reconciliation reporting to make data issues easier to detect, investigate, and audit.',
    stack: ['Python', 'SQL', 'dbt', 'AWS'],
  },
];

window.PORTFOLIO_SKILLS = [
  { title: 'Languages & Querying', skills: ['Python', 'PySpark', 'SQL', 'PL/SQL', 'Scala', 'TypeScript', 'JavaScript'] },
  { title: 'Data Engineering', skills: ['Apache Spark', 'Spark Streaming', 'Kafka', 'Airflow', 'dbt', 'ETL / ELT'] },
  { title: 'Cloud & Platforms', skills: ['AWS Glue', 'AWS Lambda', 'Amazon S3', 'AWS DMS', 'EMR', 'Redshift', 'Snowflake'] },
  { title: 'Databases & Tools', skills: ['Oracle 19c', 'PostgreSQL', 'MySQL', 'Jenkins', 'Git', 'CloudWatch'] },
];
