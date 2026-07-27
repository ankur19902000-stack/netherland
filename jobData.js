// Job data generator - deterministically generates 100,000 jobs for the Netherlands
const TOTAL_JOBS = 100000;

// DOMAIN for absolute URLs in schema
const DOMAIN = 'https://rightwingnietherland.up.railway.app';

const jobTitles = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Cloud Architect", "Mobile Developer", "Android Developer", "iOS Developer",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst",
  "UI/UX Designer", "Graphic Designer", "Brand Designer", "Web Designer",
  "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer",
  "Copywriter", "Social Media Manager", "Community Manager", "Growth Hacker",
  "Sales Manager", "Account Manager", "Business Development Manager", "Sales Executive",
  "Financial Analyst", "Accountant", "Finance Manager", "Auditor",
  "HR Manager", "HR Generalist", "Recruiter", "Talent Acquisition Specialist",
  "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Procurement Officer",
  "Customer Success Manager", "Customer Support Specialist", "Technical Support Engineer",
  "Network Engineer", "Cybersecurity Analyst", "Information Security Officer",
  "Database Administrator", "Systems Administrator", "IT Manager", "CTO",
  "Legal Counsel", "Compliance Officer", "Risk Manager", "Contract Manager",
  "Healthcare Administrator", "Clinical Research Associate", "Pharmacist", "Nurse",
  "Teacher", "Education Consultant", "Instructional Designer", "Training Manager",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
  "Architect", "Urban Planner", "Environmental Consultant", "Safety Officer",
  "Real Estate Agent", "Property Manager", "Facilities Manager", "Construction Manager",
  "Research Analyst", "Policy Analyst", "Communications Manager", "Public Relations Officer",
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist",
  "Video Editor", "Motion Graphics Designer", "Content Strategist", "Brand Manager",
  "Partnerships Manager", "Customer Experience Manager", "Data Engineer", "BI Developer",
  "Scrum Master", "Agile Coach", "Release Manager", "Site Reliability Engineer",
  "Penetration Tester", "Cloud Engineer", "Platform Engineer", "API Developer",
  "Hotel Manager", "Restaurant Manager", "Chef", "Sommelier", "Event Manager",
  "Aviation Engineer", "Pilot", "Flight Attendant", "Airport Manager",
  "Supply Chain Analyst", "Warehouse Manager", "Fulfillment Specialist", "Customs Broker",
  "Maritime Engineer", "Port Operations Manager", "Shipping Coordinator", "Freight Forwarder",
  "Agricultural Engineer", "Horticulturist", "Farm Manager", "Sustainability Consultant",
  "Wind Energy Engineer", "Solar Energy Specialist", "Energy Analyst", "Grid Manager"
];

// Dutch companies (including global with Dutch presence)
const companies = [
  // Dutch companies
  "ASML", "Philips", "ING Group", "ABN AMRO", "Rabobank", "De Nederlandsche Bank",
  "Shell", "Unilever", "Heineken", "Ahold Delhaize", "Jumbo", "Albert Heijn",
  "KLM Royal Dutch Airlines", "Transavia", "Corendon", "TUI Netherlands",
  "NS (Nederlandse Spoorwegen)", "ProRail", "Gemeente Amsterdam", "Gemeente Rotterdam",
  "AkzoNobel", "DSM", "FrieslandCampina", "Nutricia", "Danone",
  "Bosch", "TomTom", "NXP Semiconductors", "ASM International", "Besi",
  "Eindhoven University of Technology", "TU Delft", "Wageningen University",
  "Maersk", "Hapag-Lloyd", "Port of Rotterdam", "Port of Amsterdam",
  "BAM Group", "VolkerWessels", "Heijmans", "Ballast Nedam",
  "Eneco", "Vattenfall Netherlands", "Engie Netherlands", "TenneT",
  "KPN", "VodafoneZiggo", "T-Mobile Netherlands", "Odido",
  "FrieslandCampina", "VION Food Group", "Royal Cosun",
  "Deutsche Bank Netherlands", "BNP Paribas Netherlands",
  "Efteling", "Amsterdam RAI", "Holland Casino",
  "Schiphol Airport", "Rotterdam The Hague Airport", "Eindhoven Airport",
  "Van Gils", "Suitsupply", "G-Star RAW", "Scotch & Soda",
  "Dutch Lady", "Henkel Netherlands", "L'Oréal Netherlands",
  "Transavia", "TUI Netherlands", "Sunweb",
  
  // Global with Dutch presence
  "Google", "Amazon", "Microsoft", "Apple", "Meta", "Tesla", "Netflix",
  "IBM", "Oracle", "Cisco", "Dell", "HP", "SAP", "Salesforce",
  "Accenture", "Deloitte", "PwC", "KPMG", "EY", "McKinsey", "BCG",
  "HSBC", "Citi", "Goldman Sachs", "JPMorgan Chase",
  "P&G", "Nestlé", "Coca-Cola", "PepsiCo", "Danone",
  "BP", "TotalEnergies", "ExxonMobil", "Siemens",
  "GE", "Schneider Electric", "ABB", "Honeywell",
  "Boeing", "Airbus", "Rolls-Royce",
  "Pfizer", "Novartis", "Roche", "GSK", "Johnson & Johnson",
  "Samsung", "LG", "Sony", "Panasonic",
  "Toyota", "Honda", "Nissan", "BMW", "Mercedes-Benz",
  "LVMH", "Kering", "Chanel", "Gucci"
];

const netherlandsLocations = [
  // North Holland
  "Amsterdam, North Holland", "Haarlem, North Holland", "Alkmaar, North Holland",
  "Zaandam, North Holland", "Hilversum, North Holland", "Hoorn, North Holland",
  "Purmerend, North Holland", "Zaanstad, North Holland", "Amstelveen, North Holland",
  
  // South Holland
  "Rotterdam, South Holland", "The Hague, South Holland", "Leiden, South Holland",
  "Delft, South Holland", "Gouda, South Holland", "Dordrecht, South Holland",
  "Zoetermeer, South Holland", "Alphen aan den Rijn, South Holland",
  "Vlaardingen, South Holland", "Schiedam, South Holland", "Spijkenisse, South Holland",
  
  // Utrecht
  "Utrecht, Utrecht", "Amersfoort, Utrecht", "Zeist, Utrecht", "Nieuwegein, Utrecht",
  "Veenendaal, Utrecht", "Houten, Utrecht", "Woerden, Utrecht",
  
  // North Brabant
  "Eindhoven, North Brabant", "Tilburg, North Brabant", "'s-Hertogenbosch, North Brabant",
  "Breda, North Brabant", "Helmond, North Brabant", "Oss, North Brabant",
  "Veldhoven, North Brabant", "Waalwijk, North Brabant", "Uden, North Brabant",
  
  // Gelderland
  "Arnhem, Gelderland", "Nijmegen, Gelderland", "Apeldoorn, Gelderland",
  "Ede, Gelderland", "Zutphen, Gelderland", "Doetinchem, Gelderland",
  "Wageningen, Gelderland", "Harderwijk, Gelderland",
  
  // Overijssel
  "Enschede, Overijssel", "Zwolle, Overijssel", "Deventer, Overijssel",
  "Hengelo, Overijssel", "Almelo, Overijssel", "Kampen, Overijssel",
  
  // Limburg
  "Maastricht, Limburg", "Heerlen, Limburg", "Venlo, Limburg",
  "Sittard, Limburg", "Roermond, Limburg", "Weert, Limburg",
  
  // Flevoland
  "Lelystad, Flevoland", "Almere, Flevoland", "Dronten, Flevoland",
  
  // Zeeland
  "Middelburg, Zeeland", "Vlissingen, Zeeland", "Terneuzen, Zeeland",
  
  // Drenthe
  "Assen, Drenthe", "Emmen, Drenthe", "Hoogeveen, Drenthe",
  
  // Friesland
  "Leeuwarden, Friesland", "Sneek, Friesland", "Drachten, Friesland",
  
  // Groningen
  "Groningen, Groningen", "Delfzijl, Groningen", "Veendam, Groningen",
  
  // Remote
  "Remote — Netherlands", "Remote — Amsterdam, Netherlands"
];

const salaryRanges = [
  { display: "€2,500 – €3,000/month", min: 2500, max: 3000 },
  { display: "€3,000 – €3,500/month", min: 3000, max: 3500 },
  { display: "€3,500 – €4,200/month", min: 3500, max: 4200 },
  { display: "€4,200 – €5,000/month", min: 4200, max: 5000 },
  { display: "€5,000 – €6,000/month", min: 5000, max: 6000 },
  { display: "€6,000 – €7,500/month", min: 6000, max: 7500 },
  { display: "€7,500 – €9,000/month", min: 7500, max: 9000 },
  { display: "€9,000 – €11,000/month", min: 9000, max: 11000 },
  { display: "€11,000+/month", min: 11000, max: 15000 },
  { display: "€2,000 – €2,500/month", min: 2000, max: 2500 },
  { display: "€1,500 – €2,000/month", min: 1500, max: 2000 }
];

const jobTypes = ["FULL_TIME", "CONTRACTOR", "PART_TIME", "INTERN", "TEMPORARY"];
const jobTypeDisplay = { 
  "FULL_TIME": "Full-time", 
  "CONTRACTOR": "Contract", 
  "PART_TIME": "Part-time", 
  "INTERN": "Internship", 
  "TEMPORARY": "Temporary" 
};

const experienceLevels = [
  { display: "Entry Level", schema: "no requirements" },
  { display: "1–3 Years Experience", schema: "1 year experience" },
  { display: "3–5 Years Experience", schema: "3 years experience" },
  { display: "5–7 Years Experience", schema: "5 years experience" },
  { display: "7–10 Years Experience", schema: "7 years experience" },
  { display: "10+ Years Experience", schema: "10 years experience" },
  { display: "Senior", schema: "5 years experience" },
  { display: "Lead", schema: "7 years experience" },
  { display: "Manager", schema: "5 years experience" },
  { display: "Director", schema: "8 years experience" },
  { display: "Executive", schema: "10 years experience" }
];

const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Oil & Gas",
  "Real Estate", "Healthcare", "Education", "Consulting", "Aviation",
  "Construction", "Logistics & Shipping", "Hospitality", "Retail", "Media & Entertainment",
  "Renewable Energy", "Automotive", "Telecommunications", "Legal", "Public Sector",
  "Pharmaceuticals", "Agriculture", "Maritime", "Port & Harbor", "Semiconductor",
  "Water Management", "Food Processing", "Engineering"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking an experienced ${title} to join the team at ${company} in the Netherlands. ${isRemote ? "This is a fully remote role open to qualified candidates across the Netherlands." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to ${company}'s growing operations in the Netherlands and the broader European market.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced global tech/business environment
• Bachelor's degree in a relevant field
• Proficiency with modern tools and platforms

What We Offer:
• Competitive salary in EUR
• 30 days annual leave (plus Dutch public holidays)
• Remote work allowance
• Annual performance bonus
• Pension plan
• Travel allowance (if not fully remote)`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading company in the Netherlands looking for experienced professionals to scale our impact across Europe.

${isRemote ? "This remote-first position allows you to work from anywhere in the Netherlands with flexible hours." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title} at ${company}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission in one of Europe's most innovative economies.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends globally and in the Netherlands
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Team player with a growth mindset
• Relevant degree or certification preferred

Compensation & Benefits:
• Competitive EUR salary • 8% holiday pay (vakantiegeld) • 30 days annual leave • Pension plan • Travel allowance`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of one of the Netherlands' most exciting companies!

${isRemote ? "🌐 Remote | Work from anywhere in the Netherlands" : `📍 ${location}`}

We're building the future of business in Europe and need exceptional talent like you. This is a rare opportunity to work with a world-class brand while enjoying the Dutch work-life balance.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact millions of customers across the region.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in a fast-moving global business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)

Perks at ${company}:
Competitive salary | 8% holiday pay | 30 days leave | Pension plan | Performance bonus | Travel allowance`
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;

  const companyIndex = Math.floor((id - 1) / Math.ceil(TOTAL_JOBS / companies.length)) % companies.length;

  const titleIndex   = Math.floor(r(1) * jobTitles.length);
  const locationIndex= Math.floor(r(3) * netherlandsLocations.length);
  const salaryIndex  = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex     = Math.floor(r(6) * experienceLevels.length);
  const industryIndex= Math.floor(r(7) * industries.length);
  const descIndex    = Math.floor(r(8) * jobDescriptions.length);

  const title    = jobTitles[titleIndex];
  const company  = companies[companyIndex];
  const location = isRemote ? "Remote — Netherlands" : netherlandsLocations[locationIndex];
  const salary   = salaryRanges[salaryIndex];
  const jobType  = jobTypes[jobTypeIndex];
  const exp      = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, netherlandsLocations[locationIndex]);

  const daysAgo = Math.floor(r(9) * 60);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - daysAgo);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 90);

  return {
    id,
    title,
    company,
    location,
    salary: salary.display,
    salaryMin: salary.min,
    salaryMax: salary.max,
    jobType,
    jobTypeDisplay: jobTypeDisplay[jobType],
    experience: exp.display,
    experienceSchema: exp.schema,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.company,
      "value": `JOB-NL-${String(job.id).padStart(6, '0')}`
    },
    "datePosted": job.postedDate,
    "validThrough": `${job.validThrough}T00:00:00Z`,
    "employmentType": job.jobType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.isRemote ? "Amsterdam" : job.location.split(',')[0],
        "addressCountry": "NL"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Netherlands"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "MONTH"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experienceSchema === "no requirements" ? 0
        : parseInt(job.experienceSchema) * 12
    },
    "industry": job.industry,
    "url": `${DOMAIN}/jobs/${job.id}`,
    "directApply": true
  };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
  }

  return schema;
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, netherlandsLocations, industries };
